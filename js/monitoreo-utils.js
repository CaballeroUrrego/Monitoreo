export function normalizarId(canal) {
  return canal.replace(/[^a-zA-Z0-9]/g, '');
}

export function calcularFallasYSalud(canales) {
  const totalCanales = canales.length;
  const fallas = canales.filter((item) =>
    ['video', 'audioPri', 'audioSec', 'logo', 'epg'].some(
      (clave) => typeof item[clave] === 'string' && item[clave].includes('FAIL'),
    ),
  ).length;

  const salud = totalCanales > 0 ? Math.round(((totalCanales - fallas) / totalCanales) * 100) : 100;

  return { fallas, salud };
}

export function crearRegistroHistoricoDesdeEstado({
  analista = '',
  turno = '',
  observaciones = '',
  siguienteAnalista = 'N/A',
  tipo = 'guardado',
  progreso = {},
  historicoPrevio = [],
  timestamp = new Date().toISOString(),
} = {}) {
  const ultimoRegistroPrevio = historicoPrevio[historicoPrevio.length - 1];
  const ultimoRevisor = ultimoRegistroPrevio?.analistaGestion || analista || 'Sistema';
  const fechaObjeto = new Date(timestamp);
  const fechaValida = Number.isNaN(fechaObjeto.getTime()) ? new Date() : fechaObjeto;

  return {
    timestamp: fechaValida.toISOString(),
    controlTemporal: fechaValida.toLocaleString('es-ES', {
      dateStyle: 'short',
      timeStyle: 'medium',
    }),
    turno: turno || 'Sin turno',
    analistaGestion: analista || 'Sistema',
    observaciones:
      observaciones ||
      (tipo === 'guardado'
        ? 'Registro automático de progreso del monitoreo'
        : 'Gestión registrada'),
    ultimoRevisor,
    siguienteAnalista: siguienteAnalista || 'N/A',
    tipo,
    progreso: {
      monitoreado: Boolean(progreso.monitoreado),
      totalCanales: Number(progreso.totalCanales || 0),
      fallas: Number(progreso.fallas || 0),
      salud: Number(progreso.salud || 0),
      novedades: Number(progreso.novedades || 0),
    },
  };
}

export function obtenerLunesDeSemana(fecha = new Date()) {
  const d = new Date(fecha);
  const dia = d.getDay() === 0 ? 7 : d.getDay();
  d.setHours(8, 0, 0, 0);
  d.setMinutes(0);
  d.setSeconds(0);
  d.setMilliseconds(0);
  d.setDate(d.getDate() - (dia - 1));
  return d;
}

export function generarDatosPrueba7Dias(stbs = [], canalesList = [], fechaBase = new Date()) {
  const baseDate = obtenerLunesDeSemana(fechaBase);
  const turnosDemo = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const analistasDemo = ['Sofía', 'Camilo', 'Diana', 'Mateo', 'Laura', 'Andrés', 'Paula', 'Javier', 'Lucía'];
  const observacionesDemo = [
    'Inicio de revisión semanal',
    'Validación de fallas de audio y video',
    'Ajuste en configuración de video',
    'Confirmación de estabilidad del canal',
    'Registro de novedad en EPG',
    'Cierre de incidencia pendiente',
    'Prueba final de continuidad del tablero',
  ];

  const db = {};
  const globalComentarios = [];
  const novedadesTemp = {};

  stbs.forEach((stb, stbIndex) => {
    const turnoDemo = turnosDemo[stbIndex % turnosDemo.length];
    const analistaDemo = analistasDemo[stbIndex % analistasDemo.length];
    const datos = {};

    canalesList.slice(0, 5).forEach((canal, index) => {
      const id = normalizarId(canal);
      datos[id] = {
        canal,
        video: index % 2 === 0 ? 'V OK' : 'V FAIL',
        audioPri: index % 3 === 0 ? 'A1 OK' : 'A1 FAIL',
        audioSec: index % 4 === 0 ? 'A2 OK' : 'A2 FAIL',
        logo: index % 5 === 0 ? 'L OK' : 'L FAIL',
        epg: index === 2 ? 'E FAIL' : 'E OK',
        novedad: index === 3 ? `Demo: revisión STB ${stb} / turno ${turnoDemo}` : '',
      };
      novedadesTemp[id] = datos[id].novedad;
    });

    const comentarios = [
      {
        texto: `Demostración de auditoría para ${stb} en turno ${turnoDemo}`,
        fecha: new Date(baseDate.getTime() - 3 * 24 * 60 * 60 * 1000 - stbIndex * 60000).toISOString(),
      },
      {
        texto: `Historial de gestión preservado para ${stb}`,
        fecha: new Date(baseDate.getTime() - 24 * 60 * 60 * 1000 - stbIndex * 60000).toISOString(),
      },
    ];

    globalComentarios.push(...comentarios);

    const historico = [];
    for (let day = 0; day < 7; day++) {
      const fecha = new Date(baseDate.getTime() + day * 24 * 60 * 60 * 1000 + stbIndex * 60000);
      const analista = analistasDemo[(stbIndex + day) % analistasDemo.length];
      const siguiente = day === 6 ? 'N/A' : analistasDemo[(stbIndex + day + 1) % analistasDemo.length];
      const observacion = observacionesDemo[day] || 'Gestión diaria de seguimiento';
      const progresoDemo = {
        monitoreado: true,
        totalCanales: Object.keys(datos).length,
        fallas: day % 2 === 0 ? 1 : 2,
        salud: 100 - (day % 2 === 0 ? 20 : 40),
        novedades: day === 4 ? 1 : 0,
      };

      historico.push(
        crearRegistroHistoricoDesdeEstado({
          analista,
          turno: turnosDemo[day],
          observaciones: observacion,
          siguienteAnalista: siguiente,
          tipo: 'prueba7dias',
          progreso: progresoDemo,
          historicoPrevio: historico,
          timestamp: fecha.toISOString(),
        }),
      );
    }

    const totalCanales = Object.keys(datos).length;
    const fallas = Object.values(datos).filter((item) =>
      ['video', 'audioPri', 'audioSec', 'logo', 'epg'].some(
        (valor) => typeof item[valor] === 'string' && item[valor].includes('FAIL'),
      ),
    ).length;
    const salud = totalCanales > 0 ? Math.round(((totalCanales - fallas) / totalCanales) * 100) : 100;
    const novedades = Object.values(datos).filter((item) => (item?.novedad || '').trim() !== '').length;

    db[stb] = {
      meta: {
        analista: analistaDemo,
        turno: turnoDemo,
        stb,
        fecha: new Date().toISOString(),
        monitoreado: true,
        ultimoRevisor: historico[historico.length - 1].analistaGestion,
        progreso: {
          totalCanales,
          fallas,
          salud,
          novedades,
        },
      },
      datos,
      comentarios,
      historico,
      progreso: {
        totalCanales,
        fallas,
        salud,
        novedades,
      },
    };
  });

  return { db, globalComentarios, novedadesTemp };
}
