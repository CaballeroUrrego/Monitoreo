/* ================= VARIABLES GLOBALES Y DATA INICIAL ================= */

// Lista de canales que se carga desde localStorage si existe, o se inicializa con los canales por defecto.
let canales = JSON.parse(localStorage.getItem("canales")) || [
  "Canal 02 - InfoTigo",
  "Canal 03 - City TV",
  "Canal 04 - InstHD",
  "Canal 05 - TAntioqHD",
  "Canal 06 - TMedellHD",
  "Canal 07 - Caracol HD",
  "Canal 08 - Canal1 HD",
  "Canal 09 - RCN HD",
  "Canal 10 - Cosmov HD",
  "Canal 12 - Disney HD",
  "Canal 13 - Nick HD",
  "Canal 14 - Cartoon HD",
  "Canal 15 - D Kids HD",
  "Canal 16 - Disney Jr HD",
  "Canal 17 - Nick Jr HD",
  "Canal 18 - Cartoonito HD",
  "Canal 19 - DREAMW HD",
  "Canal 20 - Tooncast HD",
  "Canal 21 - Baby TV",
  "Canal 22 - ZooMoo HD",
  "Canal 23 - PLIMPLIM HD",
  "Canal 24 - Senal Col HD",
  "Canal 25 - Win SpHD",
  "Canal 26 - ESPN HD",
  "Canal 27 - ESPN2 HD",
  "Canal 28 - ESPN3 HD",
  "Canal 29 - ESPN4 HD",
  "Canal 30 - ESPN5 HD",
  "Canal 31 - ESPN6 HD",
  "Canal 32 - ESPN7 HD",
  "Canal 33 - PXSports HD",
  "Canal 34 - DBIKE HD",
  "Canal 35 - PADEL TV HD",
  "Canal 36 - Discovery HD",
  "Canal 37 - Animal HD",
  "Canal 38 - LoveNat HD",
  "Canal 39 - H&H HD",
  "Canal 40 - TLC HD",
  "Canal 41 - NatGeo HD",
  "Canal 42 - History HD",
  "Canal 43 - H2 HD",
  "Canal 44 - Film&Arts HD",
  "Canal 45 - MUSEUM HD",
  "Canal 46 - VENE HD",
  "Canal 47 - ESPORTSM HD",
  "Canal 49 - Cinecan+ HD",
  "Canal 50 - Univers HD",
  "Canal 51 - Studio Uni HD",
  "Canal 52 - SONY MOV HD",
  "Canal 53 - TNT HD",
  "Canal 54 - TCM",
  "Canal 55 - Space HD",
  "Canal 56 - Cinemax HD",
  "Canal 57 - AMC HD 57",
  "Canal 58 - MOVIEFE",
  "Canal 59 - DHE HD",
  "Canal 60 - Golden HD",
  "Canal 61 - Golden Edge",
  "Canal 62 - Europa HD",
  "Canal 63 - Eurochanne",
  "Canal 65 - DePelicula",
  "Canal 66 - Multiprem",
  "Canal 67 - CINELAT HD",
  "Canal 68 - Dcomedia",
  "Canal 69 - CINDIEFAST HD",
  "Canal 71 - ID HD",
  "Canal 72 - Warner HD",
  "Canal 73 - Sony HD",
  "Canal 74 - A&E HD",
  "Canal 75 - StarChan HD",
  "Canal 76 - FX HD",
  "Canal 77 - AXN HD",
  "Canal 78 - TNT Series",
  "Canal 79 - ADULTSW HD",
  "Canal 80 - Lifetime HD",
  "Canal 81 - USANET HD",
  "Canal 82 - Comedy HD",
  "Canal 83 - STARTVE HD",
  "Canal 84 - A3SER HD",
  "Canal 85 - Caracol Novela",
  "Canal 86 - RCN Novela",
  "Canal 87 - TL Novelas",
  "Canal 88 - TNT NOVELAS",
  "Canal 89 - KanalD HD",
  "Canal 90 - VePlus TV HD",
  "Canal 91 - Pasiones HD",
  "Canal 93 - NOVELISIMA HD",
  "Canal 94 - TeleVidHD",
  "Canal 95 - EWTN",
  "Canal 96 - Enlace",
  "Canal 97 - Cristovis",
  "Canal 98 - TV Famili HD",
  "Canal 99 - DAYS HD",
  "Canal 100 - CCongreso",
  "Canal 101 - Zoom",
  "Canal 102 - Telecaribe",
  "Canal 103 - TPacifico",
  "Canal 104 - Telecafe",
  "Canal 105 - CanalCapit",
  "Canal 106 - Canal TR3CE",
  "Canal 107 - TRO",
  "Canal 108 - Teleislas",
  "Canal 109 - ATN",
  "Canal 110 - Telepetrol",
  "Canal 111 - Enlace TV",
  "Canal 112 - TVC",
  "Canal 113 - CCartagen",
  "Canal 114 - Cali TV",
  "Canal 115 - C Universi",
  "Canal 116 - Teleamiga",
  "Canal 117 - CNNEspa",
  "Canal 118 - NTN 24",
  "Canal 119 - El Tiempo",
  "Canal 120 - Cablenotic",
  "Canal 121 - BBCNewsHD",
  "Canal 122 - CNNIntern",
  "Canal 123 - AlJazeera HD",
  "Canal 125 - MTV HD",
  "Canal 128 - HTV",
  "Canal 129 - TelehitHD",
  "Canal 130 - TelehitU HD",
  "Canal 131 - Migente",
  "Canal 134 - Allegro HD",
  "Canal 135 - MAXANIME HD",
  "Canal 136 - Gourmet HD",
  "Canal 137 - FoodNet HD",
  "Canal 138 - ALACOCINA",
  "Canal 141 - NuestraTel",
  "Canal 142 - Estrellas HD",
  "Canal 143 - E!Enterta HD",
  "Canal 144 - Telemundo HD",
  "Canal 145 - HolaTV HD",
  "Canal 146 - AMCSERIES HD",
  "Canal 147 - SHOWBUS",
  "Canal 148 - Univision",
  "Canal 149 - MASTALK",
  "Canal 150 - CARAS HD",
  "Canal 151 - Bloomberg HD",
  "Canal 152 - BitMe HD",
  "Canal 153 - Sun HD",
  "Canal 154 - AGROT HD",
  "Canal 155 - MYZEN HD",
  "Canal 156 - Antena3 HD",
  "Canal 157 - DW Latin",
  "Canal 158 - TVE",
  "Canal 159 - 24HS HD",
  "Canal 160 - France24 HD",
  "Canal 161 - EURONEWS HD",
  "Canal 162 - TV 5 HD",
  "Canal 163 - UCL HD",
  "Canal 164 - GolfCh HD",
  "Canal 165 - Theater HD",
  "Canal 166 - World HD",
  "Canal 167 - HGTV HD",
  "Canal 168 - Science HD",
  "Canal 169 - Turbo HD",
  "Canal 200 - RCN",
  "Canal 201 - Caracol",
  "Canal 238 - WinPromo",
  "Canal 239 - Win + HD",
  "Canal 240 - Win +",
  "Canal 419 - Univmas Promo",
  "Canal 420 - UniPrem HD",
  "Canal 421 - UniCine HD",
  "Canal 422 - UniCom HD",
  "Canal 423 - UniCrime HD",
  "Canal 424 - UniReal HD",
  "Canal 449 - HBO Promo",
  "Canal 450 - HBO 2 HD",
  "Canal 451 - HBO HD",
  "Canal 453 - HBO+ HD",
  "Canal 454 - HBO Sign HD",
  "Canal 455 - HBO Fami HD",
  "Canal 457 - HBO Xtrem HD",
  "Canal 458 - HBO Mundi",
  "Canal 459 - HBO Pop HD",
  "Canal 499 - HotPackPromo",
  "Canal 500 - Playboy HD",
  "Canal 501 - SEXY HD",
  "Canal 502 - Venus",
  "Canal 503 - Penthouse",
];

// Variable reservada para futuras funcionalidades de gráfico PDF.
let pdfChartInstance = null;
const actividadMonitoreoPorSTB = new Map();

// ===== INICIALIZACIÓN =====
window.addEventListener("DOMContentLoaded", () => {
  render(); // Generar la interfaz principal de canales.
  renderComentarios(); // Cargar el historial de comentarios.
  actualizarProgresoSTB();

  const stbElem = document.getElementById("stb");
  if (stbElem) {
    stbElem.addEventListener("change", cargarDatos);
  }

  // Vincular el input oculto para importar archivos JSON.
  const fileInput = document.getElementById("fileInput");
  if (fileInput) {
    fileInput.addEventListener("change", procesarArchivoImportado);
  }
});

/* ================= FILTRADO DE CANALES ================= */
function inicializarBuscador() {
  const buscador = document.getElementById("buscadorCanal");
  const btnLimpiar = document.getElementById("limpiarBuscador");
  const noResults = document.getElementById("noResults");

  if (!buscador) return;

  function buscar() {
    const termino = buscador.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".grid-canales .card");
    let encontrados = 0;

    cards.forEach((card) => {
      const tituloElem = card.querySelector(".canal-titulo");
      if (!tituloElem) return;
      const nombreCanal = tituloElem.innerText.toLowerCase();

      if (nombreCanal.includes(termino)) {
        card.classList.remove("d-none");
        encontrados++;
      } else {
        card.classList.add("d-none");
      }
    });

    if (noResults) {
      if (encontrados === 0 && termino !== "") {
        noResults.classList.remove("d-none");
      } else {
        noResults.classList.add("d-none");
      }
    }
  }

  buscador.removeEventListener("input", buscar);
  buscador.addEventListener("input", buscar);

  if (btnLimpiar) {
    btnLimpiar.addEventListener("click", () => {
      buscador.value = "";
      buscar();
      buscador.focus();
    });
  }
}

/* ================= RENDERIZADO DE INTERFAZ ================= */
function render() {
  let html = "";
  const contenedorCanales = document.getElementById("canales");
  if (!contenedorCanales) return;

  canales.forEach((c, i) => {
    // Generar un ID seguro para cada canal eliminando caracteres especiales.
    let id = c.replace(/[^a-zA-Z0-9]/g, "");

    html += `
      <div class="card" id="card-${id}">
        <div class="d-flex justify-content-between align-items-center mb-2 pb-1 border-bottom border-secondary border-opacity-20">
          <span class="canal-titulo fw-semibold text-truncate me-2" contenteditable="true" onblur="editarCanal(${i},this.innerText)">${c}</span>
          <button class="btn btn-sm btn-outline-danger py-0 px-1 border-0" onclick="eliminarCanal(${i})" title="Eliminar Canal">✕</button>
        </div>

        <div class="row g-1 mb-1">
          <div class="col-4">
            <select id="${id}-video" onchange="actualizar('${id}'); marcarActividadMonitoreo('${id}')">
              <option>V OK</option><option>V FAIL</option>
            </select>
          </div>
          <div class="col-4">
            <select id="${id}-audioPri" onchange="actualizar('${id}'); marcarActividadMonitoreo('${id}')">
              <option>A1 OK</option><option>A1 FAIL</option>
            </select>
          </div>
          <div class="col-4">
            <select id="${id}-audioSec" onchange="actualizar('${id}'); marcarActividadMonitoreo('${id}')">
              <option>A2 OK</option><option>A2 FAIL</option><option>N/A</option>
            </select>
          </div>
        </div>

        <div class="row g-1 mb-2">
          <div class="col-6">
            <select id="${id}-logo" onchange="actualizar('${id}'); marcarActividadMonitoreo('${id}')">
              <option>L OK</option><option>L FAIL</option>
            </select>
          </div>
          <div class="col-6">
            <select id="${id}-epg" onchange="actualizar('${id}'); marcarActividadMonitoreo('${id}')">
              <option>E OK</option><option>E FAIL</option>
            </select>
          </div>
        </div>

        <div class="d-flex gap-1">
          <button onclick="todoOK('${id}'); marcarActividadMonitoreo('${id}')" class="btn btn-success btn-sm py-1 w-100" style="font-size:11px;"><i class="fa-solid fa-check"></i> Todo OK</button>
        </div>

        <div class="mt-2">
          <input id="${id}-novedad" class="form-control form-control-sm text-white" placeholder="Novedad..." oninput="guardarNovedad('${id}', this.value); marcarActividadMonitoreo('${id}')" style="font-size:11px;">
        </div>
      </div>`;
  });

  contenedorCanales.innerHTML = html;

  // Ejecutar después de renderizar para cargar datos guardados y activar el buscador.
  setTimeout(() => {
    cargarDatos();
    inicializarBuscador();
  }, 50);
}

/* ================= OPERACIONES CRUD ================= */
function agregarCanal() {
  let nombre = prompt("Nombre del nuevo canal:");
  if (nombre && nombre.trim() !== "") {
    canales.push(nombre.trim());
    localStorage.setItem("canales", JSON.stringify(canales));
    render();
  }
}

function editarCanal(i, val) {
  if (val && val.trim() !== "") {
    canales[i] = val.trim();
    localStorage.setItem("canales", JSON.stringify(canales));
  }
}

function eliminarCanal(i) {
  if (confirm("¿Seguro que deseas eliminar este canal del monitoreo?")) {
    canales.splice(i, 1);
    localStorage.setItem("canales", JSON.stringify(canales));
    render();
  }
}

/* ================= PERSISTENCIA LOCAL Y STB ================= */
function marcarActividadMonitoreo(id = "") {
  const stbSelect = document.getElementById("stb");
  const stb = stbSelect?.value?.trim() || "";
  if (!stb) return false;

  actividadMonitoreoPorSTB.set(stb, true);
  actualizarProgresoSTB();
  return true;
}

function limpiarEstadoMonitoreo(stb = "") {
  const target = stb || document.getElementById("stb")?.value?.trim() || "";
  if (!target) return;
  actividadMonitoreoPorSTB.delete(target);
}

function obtenerEstadoMonitoreo(stb = "", data = null) {
  const targetStb = stb || document.getElementById("stb")?.value?.trim() || "";
  if (!targetStb) return false;

  if (actividadMonitoreoPorSTB.has(targetStb)) {
    return true;
  }

  if (data?.meta?.monitoreado === true) {
    return true;
  }

  const datos = data?.datos || {};
  const tieneDatos = Object.values(datos).some((item) => {
    if (!item || typeof item !== "object") return false;

    const valores = [
      item.video,
      item.audioPri,
      item.audioSec,
      item.logo,
      item.epg,
      item.novedad,
    ];

    return valores.some((valor) => {
      return typeof valor === "string" && valor.trim() !== "";
    });
  });

  if (tieneDatos) {
    return true;
  }

  return Boolean(data?.comentarios?.length);
}

function guardarLocal(silencioso = false) {
  const stbSelect = document.getElementById("stb");
  if (!stbSelect) return;

  const stb = stbSelect.value;
  const db = JSON.parse(localStorage.getItem("monitoreoTV")) || {};
  const novedadesTemp = JSON.parse(
    localStorage.getItem("novedadesTemp") || "{}",
  );
  const datos = {};

  canales.forEach((c) => {
    const id = c.replace(/[^a-zA-Z0-9]/g, "");
    const videoElem = document.getElementById(id + "-video");
    const audioPriElem = document.getElementById(id + "-audioPri");
    const audioSecElem = document.getElementById(id + "-audioSec");
    const logoElem = document.getElementById(id + "-logo");
    const epgElem = document.getElementById(id + "-epg");

    if (videoElem && audioPriElem && audioSecElem && logoElem && epgElem) {
      datos[id] = {
        canal: c,
        video: videoElem.value,
        audioPri: audioPriElem.value,
        audioSec: audioSecElem.value,
        logo: logoElem.value,
        epg: epgElem.value,
        novedad: novedadesTemp[id] || "",
      };
    }
  });

  const comentarios = JSON.parse(localStorage.getItem("comentariosTV")) || [];
  const monitoreado = obtenerEstadoMonitoreo(stb, db[stb]);

  db[stb] = {
    meta: {
      analista: document.getElementById("analista")?.value || "",
      turno: document.getElementById("turno")?.value || "",
      stb: stb,
      fecha: new Date().toLocaleString(),
      monitoreado,
    },
    datos,
    comentarios,
  };

  localStorage.setItem("monitoreoTV", JSON.stringify(db, null, 2));
  actualizarPanel();
  actualizarProgresoSTB();

  if (!silencioso) {
    alert("✅ Datos guardados correctamente en la aplicación.");
  }
}

function cargarDatos() {
  const stbSelect = document.getElementById("stb");
  if (!stbSelect) return;

  const stb = stbSelect.value;
  const db = JSON.parse(localStorage.getItem("monitoreoTV") || "{}");
  const data = db[stb];

  if (!data) {
    // Si no hay datos para el STB seleccionado o el analista está vacío (monitoreo no realizado), resetear controles visuales.
    document.querySelectorAll(".grid-canales .card").forEach((c) => {
      c.classList.remove("ok", "fail", "warn");
    });
    document.querySelectorAll(".grid-canales .card").forEach((card) => {
      card.querySelectorAll("select").forEach((s) => (s.selectedIndex = 0));
      const inputNovedad = card.querySelector("input");
      if (inputNovedad) inputNovedad.value = "";
    });

    const analistaInput = document.getElementById("analista");
    const turnoInput = document.getElementById("turno");
    if (analistaInput) analistaInput.value = "";
    if (turnoInput) turnoInput.value = "";

    actualizarPanel();
    actualizarProgresoSTB();
    return;
  }

  const analistaInput = document.getElementById("analista");
  const turnoInput = document.getElementById("turno");

  if (analistaInput) analistaInput.value = data.meta.analista || "";
  if (turnoInput) {
    const val = data.meta.turno || "";
    if (val.trim() !== "") {
      let found = false;
      for (let i = 0; i < turnoInput.options.length; i++) {
        if (
          turnoInput.options[i].value === val ||
          turnoInput.options[i].text === val
        ) {
          found = true;
          break;
        }
      }
      if (!found) {
        const opt = document.createElement("option");
        opt.value = val;
        opt.text = val;
        turnoInput.add(opt);
      }
    }
    turnoInput.value = val;
  }

  const novedadesTemp = {};

  if (data.datos) {
    Object.values(data.datos).forEach((d) => {
      const id = d.canal.replace(/[^a-zA-Z0-9]/g, "");
      const videoElem = document.getElementById(id + "-video");
      const audioPriElem = document.getElementById(id + "-audioPri");
      const audioSecElem = document.getElementById(id + "-audioSec");
      const logoElem = document.getElementById(id + "-logo");
      const epgElem = document.getElementById(id + "-epg");
      const novedadElem = document.getElementById(id + "-novedad");

      if (videoElem) videoElem.value = d.video || "V OK";
      if (audioPriElem) audioPriElem.value = d.audioPri || "A1 OK";
      if (audioSecElem) audioSecElem.value = d.audioSec || "A2 OK";
      if (logoElem) logoElem.value = d.logo || "L OK";
      if (epgElem) epgElem.value = d.epg || "E OK";
      if (novedadElem) novedadElem.value = d.novedad || "";

      novedadesTemp[id] = d.novedad || "";
      actualizar(id);
    });
  }

  localStorage.setItem("novedadesTemp", JSON.stringify(novedadesTemp));

  if (data.comentarios) {
    localStorage.setItem("comentariosTV", JSON.stringify(data.comentarios));
    renderComentarios();
  }

  actualizarPanel();
  actualizarProgresoSTB();
}

function todoOK(id) {
  const valores = [
    { selector: "-video", valor: "V OK" },
    { selector: "-audioPri", valor: "A1 OK" },
    { selector: "-audioSec", valor: "A2 OK" },
    { selector: "-logo", valor: "L OK" },
    { selector: "-epg", valor: "E OK" },
  ];

  valores.forEach((item) => {
    const element = document.getElementById(id + item.selector);
    if (element) element.value = item.valor;
  });

  actualizar(id);
}

function guardarNovedad(id, texto) {
  const temp = JSON.parse(localStorage.getItem("novedadesTemp")) || {};
  temp[id] = texto;
  localStorage.setItem("novedadesTemp", JSON.stringify(temp));

  let contNovedades = 0;
  Object.values(temp).forEach((val) => {
    if (val && val.trim() !== "") contNovedades++;
  });

  const badgeNovedades = document.getElementById("novedadesCount");
  if (badgeNovedades) badgeNovedades.innerText = contNovedades;

  actualizarProgresoSTB();
}

/* ================= NOC PANEL STYLING ================= */
function actualizar(id) {
  const card = document.getElementById("card-" + id);
  if (!card) return;

  const videoElem = document.getElementById(id + "-video");
  const audioPriElem = document.getElementById(id + "-audioPri");
  const audioSecElem = document.getElementById(id + "-audioSec");
  const logoElem = document.getElementById(id + "-logo");
  const epgElem = document.getElementById(id + "-epg");

  if (!videoElem || !audioPriElem || !audioSecElem || !logoElem || !epgElem)
    return;

  const vals = [
    videoElem.value,
    audioPriElem.value,
    audioSecElem.value,
    logoElem.value,
    epgElem.value,
  ];

  card.classList.remove("ok", "fail", "warn");

  if (vals.some((v) => v.includes("FAIL"))) {
    card.classList.add("fail");
  } else if (vals.some((v) => v.includes("N/A"))) {
    card.classList.add("warn");
  } else {
    card.classList.add("ok");
  }

  actualizarPanel();
  actualizarProgresoSTB();
}

/* ================= HISTORIAL DE COMENTARIOS ================= */
function obtenerComentarios() {
  return JSON.parse(localStorage.getItem("comentariosTV")) || [];
}

function actualizarContadorComentariosGlobal() {
  const lista = obtenerComentarios();
  const elemContador = document.getElementById("contadorComentarios");
  if (elemContador) elemContador.innerText = lista.length;
}

function agregarComentario() {
  const input = document.getElementById("comentarioInput");
  if (!input) return;

  const texto = input.value.trim();
  if (!texto) return;

  const lista = obtenerComentarios();
  lista.push({ texto, fecha: new Date().toLocaleString() });
  localStorage.setItem("comentariosTV", JSON.stringify(lista));
  input.value = "";

  renderComentarios();
}

function limpiarComentarios() {
  if (!confirm("¿Eliminar todos los comentarios del historial?")) return;
  localStorage.removeItem("comentariosTV");
  renderComentarios();
}

function renderComentarios() {
  const lista = obtenerComentarios();
  let html = "<b>Histórico:</b><br>";

  lista.forEach((c) => {
    html += `• ${c.texto} <small class="comentario-fecha">(${c.fecha})</small><br>`;
  });

  const contenedor = document.getElementById("listaComentarios");
  if (contenedor) contenedor.innerHTML = html;
  actualizarContadorComentariosGlobal();
}

function actualizarPanel() {
  const total = document.querySelectorAll(".grid-canales .card").length;
  const fallas = document.querySelectorAll(".grid-canales .card.fail").length;
  const salud = total > 0 ? Math.round(((total - fallas) / total) * 100) : 100;

  const totalElem = document.getElementById("total");
  const fallasElem = document.getElementById("fallas");
  const saludElem = document.getElementById("salud");

  if (totalElem) totalElem.innerText = total;
  if (fallasElem) fallasElem.innerText = fallas;
  if (saludElem) saludElem.innerText = salud + "%";

  let contNovedades = 0;
  const temp = JSON.parse(localStorage.getItem("novedadesTemp")) || {};
  Object.values(temp).forEach((val) => {
    if (val && val.trim() !== "") contNovedades++;
  });

  const badgeNovedades = document.getElementById("novedadesCount");
  if (badgeNovedades) badgeNovedades.innerText = contNovedades;

  actualizarContadorComentariosGlobal();
}

/* ================= PROGRESO GLOBAL DE STBs MONITOREADOS ================= */
function actualizarProgresoSTB() {
  const db = JSON.parse(localStorage.getItem("monitoreoTV") || "{}");
  const stbSelect = document.getElementById("stb");
  if (!stbSelect) return;

  const options = Array.from(stbSelect.options).map(
    (opt) => opt.value || opt.text,
  );
  const totalSTBs = options.length;

  let monitoredCount = 0;
  const analistasSet = new Set();

  options.forEach((stb) => {
    const data = db[stb];
    const esMonitoreado = obtenerEstadoMonitoreo(stb, data);
    if (esMonitoreado) {
      monitoredCount++;
      if (data?.meta?.analista?.trim()) {
        analistasSet.add(data.meta.analista.trim());
      }
    }
  });

  const porcentaje =
    totalSTBs > 0 ? Math.round((monitoredCount / totalSTBs) * 100) : 0;

  const textoElem = document.getElementById("stbProgresoTexto");
  const barraElem = document.getElementById("stbProgresoBarra");

  if (textoElem) {
    textoElem.innerText = `${monitoredCount} / ${totalSTBs} STBs (${porcentaje}%)`;
  }

  if (barraElem) {
    barraElem.style.width = `${porcentaje}%`;
    barraElem.setAttribute("aria-valuenow", porcentaje);

    // Cambiar color de la barra según progreso
    barraElem.className =
      "progress-bar progress-bar-striped progress-bar-animated progress-bar-custom";
    if (porcentaje < 30) {
      barraElem.classList.add("bg-danger");
    } else if (porcentaje < 75) {
      barraElem.classList.add("bg-warning", "text-dark");
    } else {
      barraElem.classList.add("bg-success");
    }
  }

  const analistasElem = document.getElementById("analistasActivos");
  if (analistasElem) {
    if (analistasSet.size === 0) {
      analistasElem.innerHTML = `<span class="text-muted analista-ninguno">Ninguno registrado aún</span>`;
    } else {
      analistasElem.innerHTML = Array.from(analistasSet)
        .map(
          (analista) =>
            `<span class="badge bg-secondary bg-opacity-25 text-white border border-secondary border-opacity-20 px-2 py-1"><i class="fa-solid fa-user-check text-success me-1"></i> ${analista}</span>`,
        )
        .join(" ");
    }
  }
}

/* ================= EXPORTACIÓN E IMPORTACIÓN DE ARCHIVOS ================= */
function exportarDatos() {
  // Guardar datos actuales silenciosamente antes de exportar
  guardarLocal(true);

  const db = JSON.parse(localStorage.getItem("monitoreoTV") || "{}");
  const keys = Object.keys(db);

  if (keys.length === 0) {
    alert(
      "No hay datos guardados para exportar. Guarda primero con 'Guardar Local'.",
    );
    return;
  }

  const totalSTBs = document.querySelectorAll("#stb option").length;
  const fecha = new Date().toISOString().slice(0, 10);

  // Incluir el turno en el nombre del archivo JSON exportado
  const turnoElem = document.getElementById("turno");
  const turno = turnoElem ? turnoElem.value.trim() : "";
  const turnoStr = turno ? `_${turno}` : "";

  let filename = `Monitoreo_TV${turnoStr}_${fecha}.json`;

  if (keys.length === totalSTBs) {
    filename = `Monitoreo_TV_TODOS${turnoStr}_${fecha}.json`;
  }

  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(db, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", filename);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importar() {
  const fileInput = document.getElementById("fileInput");
  if (fileInput) fileInput.click();
}

function procesarArchivoImportado(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        throw new Error("Formato incorrecto");
      }

      const currentDb = JSON.parse(localStorage.getItem("monitoreoTV") || "{}");
      const mergedDb = { ...currentDb, ...parsed };
      localStorage.setItem("monitoreoTV", JSON.stringify(mergedDb, null, 2));

      const importedKeys = Object.keys(parsed);
      const stbSelect = document.getElementById("stb");
      if (stbSelect && importedKeys.length > 0) {
        if (!mergedDb[stbSelect.value]) {
          stbSelect.value = importedKeys[0];
        }
        cargarDatos();
      }

      actualizarProgresoSTB();
      alert(
        `✅ Datos importados correctamente. STBs importados: ${importedKeys.join(", ")}`,
      );
    } catch (err) {
      alert("Error: El archivo seleccionado no es un JSON válido.");
    }
  };

  reader.readAsText(file);
}

function exportarExcel() {
  // Guardar datos actuales silenciosamente antes de exportar
  guardarLocal(true);
  const db = JSON.parse(localStorage.getItem("monitoreoTV") || "{}");
  if (Object.keys(db).length === 0) {
    alert("No hay datos guardados para generar el reporte Excel.");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
  csvContent +=
    "STB,Analista,Turno,Fecha,Canal,Video,Audio Pri,Audio Sec,Logo,EPG,Novedad\n";

  Object.keys(db).forEach((stbKey) => {
    const metadata = db[stbKey].meta;
    if (db[stbKey].datos) {
      Object.values(db[stbKey].datos).forEach((d) => {
        const fila = [
          stbKey,
          metadata.analista,
          metadata.turno,
          metadata.fecha,
          d.canal,
          d.video,
          d.audioPri,
          d.audioSec,
          d.logo,
          d.epg,
          d.novedad || "",
        ]
          .map((v) => `"${String(v).replace(/"/g, '""')}"`)
          .join(",");
        csvContent += fila + "\n";
      });
    }
  });

  const encodedUri = encodeURI(csvContent);

  // Incluir el turno en el nombre del archivo CSV exportado
  const turnoElem = document.getElementById("turno");
  const turno = turnoElem ? turnoElem.value.trim() : "";
  const turnoStr = turno ? `_${turno}` : "";

  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute(
    "download",
    `Reporte_Monitoreo${turnoStr}_${new Date().toISOString().slice(0, 10)}.csv`,
  );
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function generarPDF() {
  // Guardar datos actuales silenciosamente antes de generar PDF
  guardarLocal(true);

  const element = document.getElementById("pdfContent");
  if (!element) {
    window.print();
    return;
  }

  const db = JSON.parse(localStorage.getItem("monitoreoTV") || "{}");
  if (Object.keys(db).length === 0) {
    alert("⚠️ No hay datos guardados. Guarda primero con 'Guardar Local'.");
    return;
  }

  // ===== RECOPILAR DATOS DE TODOS LOS STBs =====
  const estadisticasGlobales = {
    totalSTBs: 0,
    totalCanalesPorSTB: canales.length,
    stbs: [],
  };
  let totalCanalesFallasGlobal = 0;
  let totalCanalesOKGlobal = 0;
  const detallesFallasGlobal = [];
  const detallesNovedadesGlobal = [];
  const observacionesGlobal = [];

  Object.keys(db).forEach((stb) => {
    const data = db[stb];
    let canalesOK = 0;
    let canalesFallas = 0;

    const esMonitoreado = obtenerEstadoMonitoreo(stb, data);

    if (esMonitoreado) {
      canales.forEach((c) => {
        const id = c.replace(/[^a-zA-Z0-9]/g, "");
        const datosCanal = data.datos[id];

        if (!datosCanal) return;

        const vals = [
          datosCanal.video,
          datosCanal.audioPri,
          datosCanal.audioSec,
          datosCanal.logo,
          datosCanal.epg,
        ];
        const tieneError = vals.some((v) => v && v.includes("FAIL"));

        if (tieneError) {
          canalesFallas++;
          totalCanalesFallasGlobal++;
          const tiposFalla = [];
          if (datosCanal.video && datosCanal.video.includes("FAIL"))
            tiposFalla.push("Video");
          if (datosCanal.audioPri && datosCanal.audioPri.includes("FAIL"))
            tiposFalla.push("Audio Pri");
          if (datosCanal.audioSec && datosCanal.audioSec.includes("FAIL"))
            tiposFalla.push("Audio Sec");
          if (datosCanal.logo && datosCanal.logo.includes("FAIL"))
            tiposFalla.push("Logo");
          if (datosCanal.epg && datosCanal.epg.includes("FAIL"))
            tiposFalla.push("EPG");

          detallesFallasGlobal.push({
            stb,
            canal: c,
            tipoFalla: tiposFalla.join(", "),
            analista: data.meta.analista || "N/A",
          });
        } else {
          canalesOK++;
          totalCanalesOKGlobal++;
        }

        if (datosCanal.novedad && datosCanal.novedad.trim()) {
          detallesNovedadesGlobal.push({
            stb,
            canal: c,
            novedad: datosCanal.novedad,
            analista: data.meta.analista || "N/A",
          });
        }
      });

      const salud =
        canales.length > 0
          ? Math.round((canalesOK / canales.length) * 100)
          : 100;

      estadisticasGlobales.stbs.push({
        nombre: stb,
        totalCanales: canales.length,
        canalesOK,
        canalesFallas,
        salud,
        analista: data.meta.analista || "N/A",
        turno: data.meta.turno || "N/A",
        fecha: data.meta.fecha || "N/A",
        monitoreado: true,
      });
    } else {
      estadisticasGlobales.stbs.push({
        nombre: stb,
        totalCanales: canales.length,
        canalesOK: "-",
        canalesFallas: "-",
        salud: "No Realizado",
        analista: "-",
        turno: "-",
        fecha: "-",
        monitoreado: false,
      });
    }

    if (data.comentarios && data.comentarios.length > 0 && esMonitoreado) {
      data.comentarios.forEach((com) => {
        observacionesGlobal.push({
          stb,
          texto: com.texto,
          fecha: com.fecha,
          analista: data.meta.analista || "N/A",
        });
      });
    }
  });

  const stbsMonitoreados = estadisticasGlobales.stbs.filter(
    (s) => s.monitoreado,
  );
  estadisticasGlobales.totalSTBs = stbsMonitoreados.length;
  const totalGlobalCanales = estadisticasGlobales.totalSTBs * canales.length;
  const saludGlobal =
    totalGlobalCanales > 0
      ? Math.round((totalCanalesOKGlobal / totalGlobalCanales) * 100)
      : 100;
  const estadoGlobal =
    totalCanalesFallasGlobal === 0
      ? "ESTADO GENERAL: ✅ TODO OK"
      : "ESTADO GENERAL: ⚠️ CON FALLAS";

  // ===== LLENAR HTML DEL INFORME =====
  document.getElementById("pdfFechaReporte").innerText =
    new Date().toLocaleString();
  document.getElementById("pdfEstadoGeneral").innerText = estadoGlobal;
  document.getElementById("pdfTotalCanales").innerText =
    `${estadisticasGlobales.totalSTBs} STBs (${totalGlobalCanales} canales)`;
  document.getElementById("pdfCanalesOK").innerText = totalCanalesOKGlobal;
  document.getElementById("pdfPorcentajeOK").innerText = saludGlobal + "%";
  document.getElementById("pdfCanalesFallas").innerText =
    totalCanalesFallasGlobal;
  document.getElementById("pdfSalud").innerText = saludGlobal + "%";

  let tablaSTB = "";
  estadisticasGlobales.stbs.forEach((stbInfo) => {
    const okText = stbInfo.monitoreado
      ? `<b>${stbInfo.canalesOK}</b>`
      : `<span style="color: #666;">-</span>`;
    const fallasText = stbInfo.monitoreado
      ? `<b>${stbInfo.canalesFallas}</b>`
      : `<span style="color: #666;">-</span>`;
    const saludText = stbInfo.monitoreado
      ? `<b>${stbInfo.salud}%</b>`
      : `<span style="color: #ef4444; font-weight: bold;">No Realizado</span>`;

    tablaSTB += `
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">${stbInfo.nombre}</td>
        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${stbInfo.analista}</td>
        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${stbInfo.totalCanales}</td>
        <td style="padding: 10px; border: 1px solid #ddd; text-align: center; color: #22c55e;">${okText}</td>
        <td style="padding: 10px; border: 1px solid #ddd; text-align: center; color: #ef4444;">${fallasText}</td>
        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${saludText}</td>
      </tr>`;
  });
  document.getElementById("pdfTablaSTB").innerHTML = tablaSTB;

  let tablaFallas = "";
  if (detallesFallasGlobal.length === 0) {
    tablaFallas = `<tr><td colspan="5" style="padding: 10px; border: 1px solid #ddd; text-align: center; color: #666;">Sin fallas reportadas</td></tr>`;
  } else {
    detallesFallasGlobal.forEach((falla) => {
      tablaFallas += `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-size: 11px;">${falla.stb}</td>
          <td style="padding: 10px; border: 1px solid #ddd; font-size: 11px;">${falla.analista}</td>
          <td style="padding: 10px; border: 1px solid #ddd; font-size: 11px;">${falla.canal}</td>
          <td style="padding: 10px; border: 1px solid #ddd; color: #ef4444; font-size: 11px;"><b>${falla.tipoFalla}</b></td>
        </tr>`;
    });
  }
  document.getElementById("pdfTablaFallas").innerHTML = tablaFallas;

  const conclusion = `
    <p><b>Se evaluaron ${estadisticasGlobales.totalSTBs} STBs con un total de ${totalGlobalCanales} canales.</b></p>
    <p><b>Estado general: ${estadoGlobal.replace("ESTADO GENERAL: ", "").replace("✅ ", "").replace("⚠️ ", "")}</b></p>
    <p>El <b>${saludGlobal}%</b> de los canales se encuentra en estado OK.</p>
    <p>Se identificaron <b>${totalCanalesFallasGlobal}</b> falla${totalCanalesFallasGlobal !== 1 ? "s" : ""} en total.</p>
  `;
  document.getElementById("pdfConclusion").innerHTML = conclusion;

  let novedadesHTML = "";
  if (detallesNovedadesGlobal.length === 0) {
    novedadesHTML = "<p style='color: #666;'>Sin novedades reportadas</p>";
  } else {
    novedadesHTML =
      "<ul style='margin: 0; padding-left: 20px; font-size: 12px;'>";
    detallesNovedadesGlobal.forEach((nov) => {
      novedadesHTML += `<li style='margin-bottom: 5px;'><b>${nov.stb} (${nov.analista}):</b> ${nov.novedad}</li>`;
    });
    novedadesHTML += "</ul>";
  }
  document.getElementById("pdfNovedades").innerHTML = novedadesHTML;

  let observacionesHTML = "";
  if (observacionesGlobal.length === 0) {
    observacionesHTML =
      "<p style='color: #666;'>Sin observaciones reportadas</p>";
  } else {
    observacionesHTML =
      "<ul style='margin: 0; padding-left: 20px; font-size: 12px;'>";
    observacionesGlobal.forEach((obs) => {
      observacionesHTML += `<li style='margin-bottom: 5px;'><b>${obs.stb} (${obs.analista}):</b> ${obs.texto} <span style='color: #999; font-size: 10px;'>(${obs.fecha})</span></li>`;
    });
    observacionesHTML += "</ul>";
  }
  document.getElementById("pdfObservaciones").innerHTML = observacionesHTML;

  element.style.display = "block";

  const opt = {
    margin: 0.3,
    filename: `Informe_Ejecutivo_TodosSTBs_${new Date().toISOString().slice(0, 10)}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, allowTaint: true },
    jsPDF: { unit: "cm", format: "letter", orientation: "portrait" },
  };

  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => {
      element.style.display = "none";
    });
}

/* ================= LIMPIAR VISTA Y RESTABLECER SISTEMA ================= */
function limpiarVista() {
  const cards = document.querySelectorAll(".grid-canales .card");
  cards.forEach((card) => {
    card.classList.remove("ok", "fail", "warn");

    card.querySelectorAll("select").forEach((select) => {
      select.selectedIndex = 0;
    });

    const inputNovedad = card.querySelector("input");
    if (inputNovedad) inputNovedad.value = "";
  });

  const analista = document.getElementById("analista");
  if (analista) analista.value = "";

  const turno = document.getElementById("turno");
  if (turno) turno.value = "";

  const comentarioInput = document.getElementById("comentarioInput");
  if (comentarioInput) comentarioInput.value = "";

  const buscador = document.getElementById("buscadorCanal");
  if (buscador) {
    buscador.value = "";
    cards.forEach((card) => card.classList.remove("d-none"));
    const noResults = document.getElementById("noResults");
    if (noResults) noResults.classList.add("d-none");
  }

  localStorage.removeItem("novedadesTemp");
  const stbSelect = document.getElementById("stb");
  if (stbSelect) limpiarEstadoMonitoreo(stbSelect.value);
  actualizarPanel();
  actualizarProgresoSTB();
  alert("🧹 Vista limpia. Formulario y selectores restablecidos.");
}

function resetTotal() {
  if (
    !confirm(
      "⚠️ ¿Estás completamente seguro de restablecer TODO? Se borrarán el STB actual, comentarios, novedades e interfaz.",
    )
  )
    return;

  localStorage.removeItem("monitoreoTV");
  localStorage.removeItem("comentariosTV");
  localStorage.removeItem("novedadesTemp");
  actividadMonitoreoPorSTB.clear();

  const analistaInput = document.getElementById("analista");
  const turnoInput = document.getElementById("turno");
  const stbSelect = document.getElementById("stb");
  const comentarioInput = document.getElementById("comentarioInput");

  if (analistaInput) analistaInput.value = "";
  if (turnoInput) turnoInput.value = "";
  if (stbSelect) stbSelect.selectedIndex = 0;
  if (comentarioInput) comentarioInput.value = "";

  const listaComentarios = document.getElementById("listaComentarios");
  if (listaComentarios) {
    listaComentarios.innerHTML = "<b>Histórico:</b><br>";
  }

  limpiarVista();
  actualizarProgresoSTB();
  alert("💥 Sistema completamente restablecido a cero.");
}
