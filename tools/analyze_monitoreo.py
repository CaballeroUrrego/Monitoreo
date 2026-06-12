import json
from pathlib import Path
p = Path(r"c:\Users\se302\Desktop\Monitoreo\Archivos_Exportados\Monitoreo_TV_TodosSTBs_2026-06-12 (1).json")
if not p.exists():
    print('FILE_NOT_FOUND', p)
    raise SystemExit(1)

data = json.loads(p.read_text(encoding='utf-8'))

summary = {
    'total_stbs': 0,
    'stb_details': {},
    'total_channels': 0,
    'total_ok': 0,
    'total_fail': 0,
    'novedades': [],
    'fallas': [],
    'comentarios': []
}

for stb, obj in data.items():
    summary['total_stbs'] += 1
    datos = obj.get('datos', {})
    num_chan = len(datos)
    summary['total_channels'] += num_chan
    stb_ok = 0
    stb_fail = 0
    for chan_id, ch in datos.items():
        vals = [ch.get('video',''), ch.get('audioPri',''), ch.get('audioSec',''), ch.get('logo',''), ch.get('epg','')]
        has_fail = any(('FAIL' in (v or '').upper()) for v in vals)
        if has_fail:
            stb_fail += 1
            summary['total_fail'] += 1
            tipos = []
            if 'FAIL' in (ch.get('video','') or '').upper(): tipos.append('Video')
            if 'FAIL' in (ch.get('audioPri','') or '').upper(): tipos.append('Audio Pri')
            if 'FAIL' in (ch.get('audioSec','') or '').upper(): tipos.append('Audio Sec')
            if 'FAIL' in (ch.get('logo','') or '').upper(): tipos.append('Logo')
            if 'FAIL' in (ch.get('epg','') or '').upper(): tipos.append('EPG')
            summary['fallas'].append({'stb': stb, 'canal': ch.get('canal'), 'tipos': tipos, 'novedad': ch.get('novedad',''), 'analista': obj.get('meta',{}).get('analista','')})
        else:
            stb_ok += 1
            summary['total_ok'] += 1
        if ch.get('novedad') and str(ch.get('novedad')).strip():
            summary['novedades'].append({'stb': stb, 'canal': ch.get('canal'), 'novedad': ch.get('novedad'), 'analista': obj.get('meta',{}).get('analista','')})

    summary['stb_details'][stb] = {'canales': num_chan, 'ok': stb_ok, 'fallas': stb_fail, 'analista': obj.get('meta',{}).get('analista',''), 'turno': obj.get('meta',{}).get('turno',''), 'fecha': obj.get('meta',{}).get('fecha','')}

    for com in obj.get('comentarios', []):
        summary['comentarios'].append({'stb': stb, 'texto': com.get('texto'), 'fecha': com.get('fecha'), 'analista': obj.get('meta',{}).get('analista','')})

# Compute health per stb and overall
for stb, d in summary['stb_details'].items():
    total = d['canales']
    d['salud_pct'] = round((d['ok'] / total) * 100, 2) if total>0 else 100.0

summary['salud_global_pct'] = round((summary['total_ok'] / (summary['total_channels'] if summary['total_channels']>0 else 1)) * 100,2)

print(json.dumps(summary, indent=2, ensure_ascii=False))
