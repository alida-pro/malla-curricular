// script.js

const malla = document.getElementById("malla");
const mensajeRequisitos = document.getElementById("mensajeRequisitos");

// Estructura de datos: ramos por ciclo
const ramosPorCiclo = {
  "1er ciclo": [
    "MATEMÁTICA I",
    "INTRODUCCIÓN A LA VIDA UNIVERSITARIA",
    "LABORATORIO DE QUÍMICA GENERAL",
    "QUÍMICA GENERAL",
    "INDIVIDUO Y MEDIO AMBIENTE",
    "INGLÉS I",
    "COMPRENSIÓN Y REDACCIÓN DE TEXTOS I"
  ],
  "2do ciclo": [
    "MATEMÁTICA II",
    "CIUDADANÍA Y REFLEXIÓN ÉTICA",
    "INGLÉS II",
    "COMPRENSIÓN Y REDACCIÓN DE TEXTOS II",
    "ESTADÍSTICA DESCRIPTIVA Y Probabilidades",
    "PRINCIPIOS DE ALGORITMOS",
    "DIBUJO PARA INGENIERÍA"
  ],
  "3er ciclo": [
    "LABORATORIO DE MECÁNICA CLÁSICA",
    "MECÁNICA CLÁSICA",
    "CÁLCULO I",
    "INVESTIGACIÓN ACADÉMICA",
    "GEOLOGÍA",
    "PLANOS Y METRADOS DE OBRAS DE CONSTRUCCIÓN",
    "INGLÉS III",
    "PROBLEMAS Y DESAFÍOS EN EL PERÚ ACTUAL"
  ],
  "4to ciclo": [
    "LABORATORIO DE MATERIALES DE CONSTRUCCIÓN",
    "MATERIALES DE CONSTRUCCIÓN",
    "FLUIDOS Y TERMODINÁMICA",
    "LABORATORIO DE FLUIDOS Y TERMODINÁMICA",
    "CÁLCULO II",
    "TOPOGRAFÍA - INGENIERIA CIVIL",
    "ESTÁTICA",
    "INGLÉS IV"
  ],
  "5to ciclo": [
    "CONSTRUCCIÓN",
    "FUNDAMENTOS DE DINÁMICA",
    "GEOMÁTICA",
    "TECNOLOGÍA DEL CONCRETO",
    "CÁLCULO AVANZADO PARA INGENIERÍA",
    "CALCULO PARA LA TOMA DE DECISIONES",
    "HERRAMIENTAS INFORMÁTICAS PARA LA TOMA DE DECISIONES"
  ],
  "6to ciclo": [
    "LABORATORIO DE ELASTICIDAD Y RESISTENCIA DE MATERIALES",
    "ELASTICIDAD Y RESISTENCIA DE MATERIALES",
    "LABORATORIO DE MECÁNICA DE FLUIDOS",
    "MECÁNICA DE FLUIDOS",
    "HERRAMIENTAS PARA LA COMUNICACIÓN EFECTIVA",
    "CONSTRUCCIONES ESPECIALES",
    "MECÁNICA DE SUELOS",
    "CURSO INTEGRADOR I – CIVIL"
  ],
  "7mo ciclo": [
    "LABORATORIO DE HIDRÁULICA DE CANALES",
    "HIDRÁULICA DE CANALES",
    "INGENIERÍA GEOTÉCNICA",
    "MODELADO DE INFORMACIÓN DE EDIFICACIONES – BIM",
    "INGENIERÍA DE CARRETERAS",
    "INSTALACIONES EN EDIFICACIONES",
    "ANÁLISIS ESTRUCTURAL I",
    "FORMACIÓN PARA LA EMPLEABILIDAD"
  ],
  "8vo ciclo": [
    "ANÁLISIS ESTRUCTURAL II",
    "HIDROLOGÍA APLICADA",
    "SEMINARIO DE INGENIERÍA CIVIL",
    "MECÁNICA DE SUELOS APLICADA",
    "ESTIMACIÓN DE COSTOS Y PLANIFICACIÓN DE OBRA",
    "ADMINISTRACIÓN Y ORGANIZACIÓN DE EMPRESAS CONSTRUCTORAS",
    "CONSTRUCCIÓN DE CARRETERAS",
    "ÉTICA PROFESIONAL"
  ],
  "9no ciclo": [
    "GESTIÓN DE PROYECTOS DE CONSTRUCCIÓN",
    "INGENIERÍA DE CIMENTACIONES",
    "PAVIMENTOS",
    "INGENIERÍA DE LOS RECURSOS HIDRÁULICOS",
    "SISTEMA INTEGRADO DE GESTIÓN EN LA CONSTRUCCIÓN",
    "FORMACIÓN PARA LA INVESTIGACIÓN – CIVIL",
    "CONCRETO ARMADO"
  ],
  "10mo ciclo": [
    "INGENIERIA SISMORRESISTENTE",
    "GESTIÓN DE PROYECTOS DE INVERSIÓN PÚBLICA",
    "TALLER DE INVESTIGACIÓN – CIVIL",
    "CURSO INTEGRADOR II – CIVIL",
    "FUNDAMENTOS DE METODOLOGÍA VDC EN EDIFICACIONES",
    "SEGURIDAD Y SALUD OCUPACIONAL EN OBRAS DE CONSTRUCCIÓN",
    "SOSTENIBILIDAD AMBIENTAL EN LA CONSTRUCCIÓN",
    "ANÁLISIS DE ESTRUCTURAS POR ELEMENTOS FINITOS",
    "MÉTODOS NUMÉRICOS",
    "ELEMENTARY BUSINESS ENGLISH"
  ]
};

// Puedes continuar agregando aquí todos los requisitos para cada curso
const requisitos = {
  "MATEMÁTICA II": ["MATEMÁTICA I"],
  "INGLÉS II": ["INGLÉS I"],
  "COMPRENSIÓN Y REDACCIÓN DE TEXTOS II": ["COMPRENSIÓN Y REDACCIÓN DE TEXTOS I"],
  "CÁLCULO I": ["MATEMÁTICA II"],
  "MECÁNICA CLÁSICA": ["MATEMÁTICA II"],
  "LABORATORIO DE MECÁNICA CLÁSICA": ["MECÁNICA CLÁSICA"],
  "CÁLCULO II": ["CÁLCULO I"],
  "LABORATORIO DE FLUIDOS Y TERMODINÁMICA": ["FLUIDOS Y TERMODINÁMICA"],
  "ESTÁTICA": ["MECÁNICA CLÁSICA"],
  "FUNDAMENTOS DE DINÁMICA": ["ESTÁTICA"],
  "MECÁNICA DE FLUIDOS": ["FLUIDOS Y TERMODINÁMICA"],
  "LABORATORIO DE MECÁNICA DE FLUIDOS": ["MECÁNICA DE FLUIDOS"],
  "ELASTICIDAD Y RESISTENCIA DE MATERIALES": ["ESTÁTICA"],
  "LABORATORIO DE ELASTICIDAD Y RESISTENCIA DE MATERIALES": ["ELASTICIDAD Y RESISTENCIA DE MATERIALES"],
  "HIDRÁULICA DE CANALES": ["MECÁNICA DE FLUIDOS"],
  "LABORATORIO DE HIDRÁULICA DE CANALES": ["HIDRÁULICA DE CANALES"],
  "ANÁLISIS ESTRUCTURAL I": ["ELASTICIDAD Y RESISTENCIA DE MATERIALES"],
  "ANÁLISIS ESTRUCTURAL II": ["ANÁLISIS ESTRUCTURAL I"],
  "MECÁNICA DE SUELOS APLICADA": ["MECÁNICA DE SUELOS"],
  "INGENIERÍA DE CIMENTACIONES": ["MECÁNICA DE SUELOS APLICADA"],
  "CONCRETO ARMADO": ["TECNOLOGÍA DEL CONCRETO"],
  "INGENIERIA SISMORRESISTENTE": ["CONCRETO ARMADO"],
  "TALLER DE INVESTIGACIÓN – CIVIL": ["FORMACIÓN PARA LA INVESTIGACIÓN – CIVIL"]
};

const estadoAprobado = JSON.parse(localStorage.getItem("estadoAprobado")) || {};

function guardarEstado() {
  localStorage.setItem("estadoAprobado", JSON.stringify(estadoAprobado));
}

function mostrarMensaje(msg) {
  mensajeRequisitos.textContent = msg;
  mensajeRequisitos.classList.remove("mensaje-oculto");
  setTimeout(() => mensajeRequisitos.classList.add("mensaje-oculto"), 4000);
}

function verificarRequisitos(nombre) {
  if (!requisitos[nombre]) return [];
  return requisitos[nombre].filter((r) => !estadoAprobado[r]);
}

function crearRamo(nombre) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.textContent = nombre;

  if (estadoAprobado[nombre]) {
    div.classList.add("aprobado");
  } else if (verificarRequisitos(nombre).length) {
    div.classList.add("bloqueado");
  }

  div.addEventListener("click", () => {
    const faltantes = verificarRequisitos(nombre);
    if (faltantes.length) {
      mostrarMensaje(`No puedes aprobar "${nombre}". Faltan: ${faltantes.join(", ")}`);
      return;
    }
    div.classList.toggle("aprobado");
    estadoAprobado[nombre] = div.classList.contains("aprobado");
    guardarEstado();
    actualizarBloqueos();
  });
  return div;
}

function actualizarBloqueos() {
  document.querySelectorAll(".ramo").forEach((ramo) => {
    const nombre = ramo.textContent;
    const faltan = verificarRequisitos(nombre);
    ramo.classList.remove("bloqueado");
    if (!estadoAprobado[nombre] && faltan.length) {
      ramo.classList.add("bloqueado");
    }
  });
}

function renderMalla() {
  for (const ciclo in ramosPorCiclo) {
    const col = document.createElement("div");
    col.classList.add("semestre");
    const title = document.createElement("h2");
    title.textContent = ciclo;
    col.appendChild(title);
    ramosPorCiclo[ciclo].forEach((ramo) => {
      col.appendChild(crearRamo(ramo));
    });
    malla.appendChild(col);
  }
}

renderMalla();
actualizarBloqueos();
