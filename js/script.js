/* ================= VARIABLES GLOBALES Y DATA INITIAL ================= */
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

let pdfChartInstance = null;

// Ejecutar al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  render();
  renderComentarios();

  const stbElem = document.getElementById("stb");
  if (stbElem) {
    stbElem.addEventListener("change", cargarDatos);
  }

  // Vincular evento de importación al input file oculto del HTML
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
    let id = c.replace(/[^a-zA-Z0-9]/g, "");

    html += `
        <div class="card" id="card-${id}">
            <div class="d-flex justify-content-between align-items-center mb-2 pb-1 border-bottom border-secondary border-opacity-20">
                <span class="canal-titulo fw-semibold text-truncate me-2" contenteditable="true" onblur="editarCanal(${i},this.innerText)">${c}</span>
                <button class="btn btn-sm btn-outline-danger py-0 px-1 border-0" onclick="eliminarCanal(${i})" title="Eliminar Canal">✕</button>
            </div>

            <div class="row g-1 mb-1">
                <div class="col-4">
                    <select id="${id}-video" onchange="actualizar('${id}')">
                        <option>V OK</option><option>V FAIL</option>
                    </select>
                </div>
                <div class="col-4">
                    <select id="${id}-audioPri" onchange="actualizar('${id}')">
                        <option>A1 OK</option><option>A1 FAIL</option>
                    </select>
                </div>
                <div class="col-4">
                    <select id="${id}-audioSec" onchange="actualizar('${id}')">
                        <option>A2 OK</option><option>A2 FAIL</option><option>N/A</option>
                    </select>
                </div>
            </div>

            <div class="row g-1 mb-2">
                <div class="col-6">
                    <select id="${id}-logo" onchange="actualizar('${id}')">
                        <option>L OK</option><option>L FAIL</option>
                    </select>
                </div>
                <div class="col-6">
                    <select id="${id}-epg" onchange="actualizar('${id}')">
                        <option>E OK</option><option>E FAIL</option>
                    </select>
                </div>
            </div>
            
            <div class="d-flex gap-1">
                <button onclick="todoOK('${id}')" class="btn btn-success btn-sm py-1 w-100" style="font-size:11px;"><i class="fa-solid fa-check"></i> Todo OK</button>
            </div>

            <div class="mt-2">
                <input id="${id}-novedad" class="form-control form-control-sm text-white" placeholder="Novedad..." oninput="guardarNovedad('${id}', this.value)" style="font-size:11px;">
            </div>
        </div>`;
  });

  contenedorCanales.innerHTML = html;

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
function guardarLocal() {
  let stbSelect = document.getElementById("stb");
  if (!stbSelect) return;
  let stb = stbSelect.value;

  let db = JSON.parse(localStorage.getItem("monitoreoTV")) || {};
  let datos = {};
  let novedadesTemp = JSON.parse(localStorage.getItem("novedadesTemp") || "{}");

  canales.forEach((c) => {
    let id = c.replace(/[^a-zA-Z0-9]/g, "");
    let videoElem = document.getElementById(id + "-video");
    let audioPriElem = document.getElementById(id + "-audioPri");
    let audioSecElem = document.getElementById(id + "-audioSec");
    let logoElem = document.getElementById(id + "-logo");
    let epgElem = document.getElementById(id + "-epg");

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

  let comentarios = JSON.parse(localStorage.getItem("comentariosTV")) || [];

  db[stb] = {
    meta: {
      analista: document.getElementById("analista")?.value || "",
      turno: document.getElementById("turno")?.value || "",
      stb: stb,
      fecha: new Date().toLocaleString(),
    },
    datos,
    comentarios,
  };

  const jsonString = JSON.stringify(db, null, 2);

  // Guardar solo en localStorage del navegador
  localStorage.setItem("monitoreoTV", jsonString);
  actualizarPanel();

  alert("✅ Datos guardados correctamente en la aplicación.");
}

function cargarDatos() {
  let stbSelect = document.getElementById("stb");
  if (!stbSelect) return;
  let stb = stbSelect.value;

  let db = JSON.parse(localStorage.getItem("monitoreoTV") || "{}");

  if (!db[stb]) {
    document.querySelectorAll(".grid-canales .card").forEach((c) => {
      c.classList.remove("ok", "fail", "warn");
    });
    const cards = document.querySelectorAll(".grid-canales .card");
    cards.forEach((card) => {
      card.querySelectorAll("select").forEach((s) => (s.selectedIndex = 0));
      let inputNovedad = card.querySelector("input");
      if (inputNovedad) inputNovedad.value = "";
    });
    actualizarPanel();
    return;
  }

  let data = db[stb];
  if (document.getElementById("analista"))
    document.getElementById("analista").value = data.meta.analista || "";
  if (document.getElementById("turno"))
    document.getElementById("turno").value = data.meta.turno || "";

  let novedadesTemp = {};

  if (data.datos) {
    Object.values(data.datos).forEach((d) => {
      let id = d.canal.replace(/[^a-zA-Z0-9]/g, "");

      let videoElem = document.getElementById(id + "-video");
      let audioPriElem = document.getElementById(id + "-audioPri");
      let audioSecElem = document.getElementById(id + "-audioSec");
      let logoElem = document.getElementById(id + "-logo");
      let epgElem = document.getElementById(id + "-epg");
      let novedadElem = document.getElementById(id + "-novedad");

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
}

function todoOK(id) {
  if (document.getElementById(id + "-video"))
    document.getElementById(id + "-video").value = "V OK";
  if (document.getElementById(id + "-audioPri"))
    document.getElementById(id + "-audioPri").value = "A1 OK";
  if (document.getElementById(id + "-audioSec"))
    document.getElementById(id + "-audioSec").value = "A2 OK";
  if (document.getElementById(id + "-logo"))
    document.getElementById(id + "-logo").value = "L OK";
  if (document.getElementById(id + "-epg"))
    document.getElementById(id + "-epg").value = "E OK";
  actualizar(id);
}

function guardarNovedad(id, texto) {
  let temp = JSON.parse(localStorage.getItem("novedadesTemp")) || {};
  temp[id] = texto;
  localStorage.setItem("novedadesTemp", JSON.stringify(temp));

  let contNovedades = 0;
  Object.values(temp).forEach((val) => {
    if (val && val.trim() !== "") contNovedades++;
  });
  const badgeNovedades = document.getElementById("novedadesCount");
  if (badgeNovedades) badgeNovedades.innerText = contNovedades;
}

/* ================= NOC PANEL STYLING ================= */
function actualizar(id) {
  let card = document.getElementById("card-" + id);
  if (!card) return;

  let videoElem = document.getElementById(id + "-video");
  let audioPriElem = document.getElementById(id + "-audioPri");
  let audioSecElem = document.getElementById(id + "-audioSec");
  let logoElem = document.getElementById(id + "-logo");
  let epgElem = document.getElementById(id + "-epg");

  if (!videoElem || !audioPriElem || !audioSecElem || !logoElem || !epgElem)
    return;

  let vals = [
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
  let input = document.getElementById("comentarioInput");
  if (!input) return;
  let texto = input.value.trim();
  if (!texto) return;

  let lista = obtenerComentarios();
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
  let lista = obtenerComentarios();
  let html = "<b>Histórico:</b><br>";
  lista.forEach((c) => {
    html += `• ${c.texto} <small class="comentario-fecha">(${c.fecha})</small><br>`;
  });

  const contenedor = document.getElementById("listaComentarios");
  if (contenedor) contenedor.innerHTML = html;
  actualizarContadorComentariosGlobal();
}

function actualizarPanel() {
  let total = document.querySelectorAll(".grid-canales .card").length;
  let fallas = document.querySelectorAll(".grid-canales .card.fail").length;
  let salud = total > 0 ? Math.round(((total - fallas) / total) * 100) : 100;

  if (document.getElementById("total"))
    document.getElementById("total").innerText = total;
  if (document.getElementById("fallas"))
    document.getElementById("fallas").innerText = fallas;
  if (document.getElementById("salud"))
    document.getElementById("salud").innerText = salud + "%";

  let contNovedades = 0;
  let temp = JSON.parse(localStorage.getItem("novedadesTemp")) || {};
  Object.values(temp).forEach((val) => {
    if (val && val.trim() !== "") contNovedades++;
  });
  const badgeNovedades = document.getElementById("novedadesCount");
  if (badgeNovedades) badgeNovedades.innerText = contNovedades;

  actualizarContadorComentariosGlobal();
}

/* ================= EXPORTACIÓN E IMPORTACIÓN DE ARCHIVOS ================= */
function exportarDatos() {
  let db = localStorage.getItem("monitoreoTV");
  if (!db || db === "{}") {
    alert("No hay datos guardados para exportar.");
    return;
  }
  let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(db);
  let downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute(
    "download",
    `Monitoreo_TV_${new Date().toISOString().slice(0, 10)}.json`,
  );
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
      let parsed = JSON.parse(e.target.result);
      localStorage.setItem("monitoreoTV", JSON.stringify(parsed));
      cargarDatos();
      alert("✅ Datos importados correctamente desde el JSON.");
    } catch (err) {
      alert("Error: El archivo seleccionado no es un JSON válido.");
    }
  };
  reader.readAsText(file);
}

function exportarExcel() {
  let db = JSON.parse(localStorage.getItem("monitoreoTV") || "{}");
  if (Object.keys(db).length === 0) {
    alert("No hay datos guardados para generar el reporte Excel.");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
  csvContent +=
    "STB,Analista,Turno,Fecha,Canal,Video,Audio Pri,Audio Sec,Logo,EPG,Novedad\n";

  Object.keys(db).forEach((stbKey) => {
    let metadata = db[stbKey].meta;
    if (db[stbKey].datos) {
      Object.values(db[stbKey].datos).forEach((d) => {
        let fila = [
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

  let encodedUri = encodeURI(csvContent);
  let link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute(
    "download",
    `Reporte_Monitoreo_${new Date().toISOString().slice(0, 10)}.csv`,
  );
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function generarPDF() {
  const element = document.getElementById("pdfContent");
  if (!element) {
    window.print();
    return;
  }

  let stbSelect = document.getElementById("stb");
  let stb = stbSelect ? stbSelect.value : "Desconocido";
  let db = JSON.parse(localStorage.getItem("monitoreoTV") || "{}");

  if (!db[stb]) {
    alert(
      "⚠️ No hay datos guardados para este STB. Guarda primero con 'Guardar Local'.",
    );
    return;
  }

  let data = db[stb];
  let analista =
    document.getElementById("analista")?.value || data.meta.analista || "N/A";
  let turno =
    document.getElementById("turno")?.value || data.meta.turno || "N/A";

  // ===== CALCULAR ESTADÍSTICAS =====
  let totalCanales = canales.length;
  let canalesOK = 0;
  let canalesFallas = 0;
  let detallesFallas = [];
  let detallesNovedades = [];

  canales.forEach((c) => {
    let id = c.replace(/[^a-zA-Z0-9]/g, "");
    let datosCanal = data.datos[id];

    if (datosCanal) {
      let vals = [
        datosCanal.video,
        datosCanal.audioPri,
        datosCanal.audioSec,
        datosCanal.logo,
        datosCanal.epg,
      ];
      let tieneError = vals.some((v) => v && v.includes("FAIL"));

      if (tieneError) {
        canalesFallas++;
        let tiposFalla = [];
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

        detallesFallas.push({
          canal: c,
          tipoFalla: tiposFalla.join(", "),
          novedad: datosCanal.novedad || "",
        });
      } else {
        canalesOK++;
      }

      if (datosCanal.novedad && datosCanal.novedad.trim()) {
        detallesNovedades.push({
          canal: c,
          novedad: datosCanal.novedad,
        });
      }
    }
  });

  let salud =
    totalCanales > 0 ? Math.round((canalesOK / totalCanales) * 100) : 100;
  let estadoGeneral =
    canalesFallas === 0
      ? "ESTADO GENERAL: ✅ TODO OK"
      : "ESTADO GENERAL: ⚠️ CON FALLAS";

  // ===== LLENAR HTML =====
  document.getElementById("pdfFechaReporte").innerText =
    new Date().toLocaleString();
  document.getElementById("pdfEstadoGeneral").innerText = estadoGeneral;
  document.getElementById("pdfTotalCanales").innerText = totalCanales;
  document.getElementById("pdfCanalesOK").innerText = canalesOK;
  document.getElementById("pdfPorcentajeOK").innerText =
    Math.round((canalesOK / totalCanales) * 100) + "%";
  document.getElementById("pdfCanalesFallas").innerText = canalesFallas;
  document.getElementById("pdfSalud").innerText = salud + "%";

  // Tabla STB
  let tablaSTB = `
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;">${stb}</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${totalCanales}</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center; color: #22c55e;"><b>${canalesOK}</b></td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center; color: #ef4444;"><b>${canalesFallas}</b></td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;"><b>${salud}%</b></td>
    </tr>
  `;
  document.getElementById("pdfTablaSTB").innerHTML = tablaSTB;

  // Tabla Fallas
  let tablaFallas = "";
  if (detallesFallas.length === 0) {
    tablaFallas = `<tr><td colspan="4" style="padding: 10px; border: 1px solid #ddd; text-align: center; color: #666;">Sin fallas reportadas</td></tr>`;
  } else {
    detallesFallas.forEach((falla) => {
      tablaFallas += `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">${stb}</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${falla.canal}</td>
          <td style="padding: 10px; border: 1px solid #ddd; color: #ef4444;"><b>${falla.tipoFalla}</b></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${falla.novedad}</td>
        </tr>
      `;
    });
  }
  document.getElementById("pdfTablaFallas").innerHTML = tablaFallas;

  // Conclusión
  let conclusion = `
    <p><b>Durante el monitoreo se evaluaron ${totalCanales} canales.</b></p>
    <p><b>Estado general: ${estadoGeneral.replace("ESTADO GENERAL: ", "").replace("✅ ", "").replace("⚠️ ", "")}</b></p>
    <p>El <b>${salud}%</b> se encuentra en estado OK.</p>
    <p>Se identificaron <b>${canalesFallas}</b> falla${canalesFallas !== 1 ? "s" : ""}.</p>
  `;
  document.getElementById("pdfConclusion").innerHTML = conclusion;

  // Novedades
  let novedadesHTML = "";
  if (detallesNovedades.length === 0) {
    novedadesHTML = "<p style='color: #666;'>Sin novedades reportadas</p>";
  } else {
    novedadesHTML = "<ul style='margin: 0; padding-left: 20px;'>";
    detallesNovedades.forEach((nov) => {
      novedadesHTML += `<li style='margin-bottom: 5px;'><b>${nov.canal}:</b> ${nov.novedad}</li>`;
    });
    novedadesHTML += "</ul>";
  }
  document.getElementById("pdfNovedades").innerHTML = novedadesHTML;

  // Observaciones (comentarios)
  let observacionesHTML = "";
  if (data.comentarios && data.comentarios.length > 0) {
    observacionesHTML = "<ul style='margin: 0; padding-left: 20px;'>";
    data.comentarios.forEach((com) => {
      observacionesHTML += `<li style='margin-bottom: 5px;'>${com.texto} <span style='color: #999; font-size: 11px;'>(${com.fecha})</span></li>`;
    });
    observacionesHTML += "</ul>";
  } else {
    observacionesHTML =
      "<p style='color: #666;'>Sin observaciones reportadas</p>";
  }
  document.getElementById("pdfObservaciones").innerHTML = observacionesHTML;

  // Hacer visible y generar PDF
  element.style.display = "block";

  const opt = {
    margin: 0.3,
    filename: `Informe_Ejecutivo_${stb}_${new Date().toISOString().slice(0, 10)}.pdf`,
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

/* ================= LIMPIAR VISTA Y RESTABLECER SITEMA ================= */
function limpiarVista() {
  const cards = document.querySelectorAll(".grid-canales .card");
  cards.forEach((card) => {
    card.classList.remove("ok", "fail", "warn");
    card.classList.add("ok");

    card.querySelectorAll("select").forEach((select) => {
      select.selectedIndex = 0;
    });

    const inputNovedad = card.querySelector("input");
    if (inputNovedad) inputNovedad.value = "";
  });

  const buscador = document.getElementById("buscadorCanal");
  if (buscador) {
    buscador.value = "";
    cards.forEach((card) => card.classList.remove("d-none"));
    const noResults = document.getElementById("noResults");
    if (noResults) noResults.classList.add("d-none");
  }

  localStorage.removeItem("novedadesTemp");
  actualizarPanel();
  alert("🧹 Vista limpia. Selectores reajustados temporalmente.");
}

function resetTotal() {
  if (
    !confirm(
      "⚠️ ¿Estás completamente seguro de restablecer TODO? Se borrarán el STB actual, comentarios, novedades e interfaz.",
    )
  ) {
    return;
  }

  localStorage.removeItem("monitoreoTV");
  localStorage.removeItem("comentariosTV");
  localStorage.removeItem("novedadesTemp");

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
  alert("💥 Sistema completamente restablecido a cero.");
}
