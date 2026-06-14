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