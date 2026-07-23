import { describe, expect, it } from 'vitest';
import {
  crearRegistroHistoricoDesdeEstado,
  calcularFallasYSalud,
  generarDatosPrueba7Dias,
  obtenerLunesDeSemana,
} from './monitoreo-utils.js';

describe('Monitoreo TV', () => {
  it('crea registro historico correcto', () => {
    const registro = crearRegistroHistoricoDesdeEstado({
      analista: 'Sofía',
      turno: 'T1',
      observaciones: 'Prueba',
      siguienteAnalista: 'Andrés',
      tipo: 'prueba',
      progreso: { monitoreado: true, totalCanales: 5, fallas: 2, salud: 60, novedades: 1 },
      historicoPrevio: [],
      timestamp: '2026-07-22T10:00:00.000Z',
    });

    expect(registro.analistaGestion).toBe('Sofía');
    expect(registro.turno).toBe('T1');
    expect(registro.observaciones).toBe('Prueba');
    expect(registro.siguienteAnalista).toBe('Andrés');
    expect(registro.tipo).toBe('prueba');
    expect(registro.progreso.fallas).toBe(2);
    expect(registro.progreso.salud).toBe(60);
    expect(registro.timestamp).toBe('2026-07-22T10:00:00.000Z');
    expect(typeof registro.controlTemporal).toBe('string');
  });

  it('calcula fallas y salud correctamente', () => {
    const canales = [
      { video: 'V OK', audioPri: 'A1 OK', audioSec: 'A2 OK', logo: 'L OK', epg: 'E OK' },
      { video: 'V FAIL', audioPri: 'A1 OK', audioSec: 'A2 OK', logo: 'L OK', epg: 'E OK' },
    ];

    const resultado = calcularFallasYSalud(canales);
    expect(resultado.fallas).toBe(1);
    expect(resultado.salud).toBe(50);
  });

  it('genera datos de prueba de 7 dias con historico y lunes a domingo', () => {
    const fechaBase = new Date('2026-07-22T00:00:00.000Z');
    const { db, globalComentarios } = generarDatosPrueba7Dias(
      ["Cisco PDS2100"],
      ["Canal 02 - InfoTigo", "Canal 03 - City TV"],
      fechaBase,
    );

    expect(Object.keys(db)).toContain('Cisco PDS2100');
    expect(globalComentarios.length).toBeGreaterThan(0);
    expect(db['Cisco PDS2100'].historico.length).toBe(7);
    expect(new Date(db['Cisco PDS2100'].historico[0].timestamp).getDay()).toBe(1);
    expect(new Date(db['Cisco PDS2100'].historico[6].timestamp).getDay()).toBe(0);
  });
});
