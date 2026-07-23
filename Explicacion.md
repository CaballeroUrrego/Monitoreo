# Comparación de Diferencias: Versión Antigua vs. Modular Mejorada

Este documento detalla las diferencias y mejoras entre la versión antigua monolítica ([Monitoreo_TV_Digital v6.1.html](Monitoreo_TV_Digital%20v6.1.html)) y la nueva estructura modular ([index.html](index.html), [js/script.js](js/script.js) y [Css/style.css](Css/style.css)).

---

## 1. Sistema de Guardado Directo a Disco (File System Access API)

* **Antiguo ([Monitoreo_TV_Digital v6.1.html](Monitoreo_TV_Digital%20v6.1.html)):**
  Define las funciones `guardarComo`, `guardarArchivo` y `escribirArchivo`. Estas utilizan la API moderna del navegador para elegir un archivo JSON local en tu disco duro (`showSaveFilePicker`) y sobrescribirlo directamente. Cabe destacar que en el HTML de la versión v6.1 **no existen botones** asociados a estas funciones para llamarlas desde la interfaz.
* **Modular ([index.html](index.html) y [js/script.js](js/script.js)):**
  Esta funcionalidad no está presente en la versión modular. En su lugar, el guardado local se realiza en el navegador (`localStorage`) y la exportación genera descargas de archivos JSON tradicionales a la carpeta de Descargas del sistema.

---

## 2. Estructura y Estilos de la Botonera (`.acciones`)

* **Antiguo ([Monitoreo_TV_Digital v6.1.html](Monitoreo_TV_Digital%20v6.1.html)):**
  Los botones de acción están forzados horizontalmente usando `display: flex`, `flex-direction: row` y `flex-wrap: nowrap`. Además, tienen estilos personalizados con bordes muy redondeados (`border-radius: 20px`), mayor tamaño de padding y fuente, junto con comentarios descriptivos en el código.
* **Modular ([Css/style.css](Css/style.css) y [index.html](index.html)):**
  Usa un diseño fluido de cuadrícula adaptable (CSS Grid) que automáticamente salta de fila en dispositivos móviles o pantallas más estrechas (`grid-template-columns: repeat(auto-fit, minmax(130px, 1fr))`). Los botones integran iconos de FontAwesome (`fa-floppy-disk`, `fa-file-excel`, etc.) y clases de Bootstrap para una apariencia más premium y consistente.

---

## 3. Panel de Control NOC (Métricas en Tiempo Real)

* **Antiguo ([Monitoreo_TV_Digital v6.1.html](Monitoreo_TV_Digital%20v6.1.html)):**
  El panel NOC es muy simple y solo contabiliza el Total de canales, las Fallas y el porcentaje de Salud de manera básica.
* **Modular ([index.html](index.html) y [js/script.js](js/script.js)):**
  El panel incluye contadores reactivos adicionales en tiempo real para **Novedades** (cuenta cuántos canales tienen texto en su campo de novedad) y **Comentarios** (cuenta los comentarios guardados en la base histórica del turno actual).

---

## 4. Buscador y Leyendas Informativas

* **Antiguo ([Monitoreo_TV_Digital v6.1.html](Monitoreo_TV_Digital%20v6.1.html)):**
  No hay motor de búsqueda ni filtros rápidos para localizar canales individuales. La leyenda informativa de indicadores es texto simple.
* **Modular ([index.html](index.html) y [js/script.js](js/script.js)):**
  Tiene un buscador dinámico en tiempo real (`id="buscadorCanal"`) con un botón para limpiar la búsqueda y un aviso visual (`#noResults`) si no hay resultados. También tiene una leyenda organizada usando insignias (badges) de colores y estilos responsivos.

---

## 5. Generación de Reportes PDF

* **Antiguo ([Monitoreo_TV_Digital v6.1.html](Monitoreo_TV_Digital%20v6.1.html)):**
  La plantilla de reporte se genera de forma dinámica concatenando strings de HTML enteros dentro del archivo JavaScript.
* **Modular ([index.html](index.html) y [js/script.js](js/script.js)):**
  Usa un esqueleto predefinido estructurado en el propio archivo HTML (`#pdfContent`) que la lógica JS rellena de forma más limpia, incluyendo tablas organizadas para todos los STB activos monitoreados, fallas detalladas por tipo, novedades del analista y observaciones consolidadas del turno.

---

## 6. Análisis semanal: lunes a domingo

* **Antiguo:** la versión previa no disponía de un enfoque claro en el análisis semanal de la data. La generación de pruebas y la captura histórica se realizaban de forma más desordenada y sin garantizar el ciclo completo de la semana.
* **Modular:** la nueva versión define claramente un análisis semanal de 7 días que va de lunes a domingo. Esto permite:
  - Generar un histórico de monitoreo coherente por semana.
  - Analizar el desempeño completo del ciclo semanal, no solo días aislados.
  - Verificar fallas, novedades y comentarios dentro de una misma semana laboral.

### Qué significa para los analistas

1. El análisis de `lunes a domingo` considera toda la semana completa como una unidad.
2. Cuando se ejecuta la generación de datos de prueba o el reporte semanal, la semana empieza el lunes y termina el domingo.
3. Esta forma de estructurar los datos permite comparar mejor el rendimiento y no perder información de los fines de semana.
4. El informe PDF y los archivos exportados pueden usarse para revisar el comportamiento semanal completo.

### Cómo deben usarlo

- Registrar el monitoreo en cada jornada como siempre: seleccionar STB, analista, turno y estados de cada canal.
- Guardar en `localStorage` para que la información quede preservada por STB.
- Al generar PDF o exportar datos, se produce un resumen que respeta el ciclo de lunes a domingo.
- Usar los comentarios y novedades del turno para dejar evidencia del día y de la semana completa.

---

## Guía rápida para analistas

Sigue estos pasos para usar la aplicación de forma correcta y sin errores.

1. Abrir el archivo `index.html` en el navegador.
2. Seleccionar el STB en el selector superior.
3. Escribir el nombre del `Analista` y elegir el `Turno`.
4. Revisar cada canal:
   - Seleccionar el estado de `Video`, `Audio Pri`, `Audio Sec`, `Logo` y `EPG`.
   - Si el canal está bien, usar `Todo OK` para marcarlo rápido.
   - Si hay un problema, elegir `FAIL` y añadir detalle en `Novedad`.
5. Usar el `Buscador` para encontrar un canal por nombre y el botón `Limpiar` para volver a la lista completa.
6. Presionar `Guardar Local` para que la información quede registrada en el navegador.
7. Agregar comentarios generales en el historial para dejar evidencia del turno.
8. Para enviar o compartir el resultado:
   - `Exportar JSON`: descarga los datos guardados en un archivo.
   - `Importar`: carga datos anteriores y los combina con los actuales.
   - `Exportar Excel`: genera un archivo CSV con todos los datos.
   - `Generar PDF`: crea un informe listo para presentar con resumen global, fallas y novedades.

### Consejos prácticos

- Siempre guardar antes de cerrar la aplicación.
- El sistema recuerda los datos por STB, así que puedes cambiar de STB y volver sin perder lo ya registrado.
- Si un canal cambió de nombre o no se necesita, usa las funciones de editar o eliminar canal.
- Verifica el contador de `Comentarios` y `Novedades` antes de terminar el turno.
