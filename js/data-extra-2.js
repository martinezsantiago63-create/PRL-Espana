const COMPARATIVA_AR_ES = [
  {
    aspecto: "Ley Marco",
    argentina: { norma: "Ley 19.587 (1972)", detalle: "Ley de Higiene y Seguridad en el Trabajo. Enfocada en condiciones ambientales y seguridad física." },
    espana: { norma: "Ley 31/1995", detalle: "Ley de Prevención de Riesgos Laborales. Enfoque integral: prevención, evaluación, organización." }
  },
  {
    aspecto: "Reglamentación",
    argentina: { norma: "Decreto 911/1996", detalle: "Reglamenta la Ley 19.587. Desarrolla obligaciones de empleador y trabajador." },
    espana: { norma: "RD 39/1997", detalle: "Reglamento de Servicios de Prevención. Organización de la prevención en la empresa." }
  },
  {
    aspecto: "Concepto de Prevención",
    argentina: { norma: "Higiene y Seguridad", detalle: "Se usa 'Higiene y Seguridad Industrial'. Enfoque en eliminar peligros físicos y ambientales." },
    espana: { norma: "Prevención de Riesgos Laborales", detalle: "Concepto más amplio: incluye riesgos ergonómicos, psicosociales, biológicos." }
  },
  {
    aspecto: "Evaluación de Riesgos",
    argentina: { norma: "Estudio de Condiciones Ambientales", detalle: "Se evalúan factores ambientales: ruido, iluminación, temperatura, ventilación." },
    espana: { norma: "Evaluación de Riesgos (RD 39/1997)",detalle: "Proceso sistemático: identificar peligros, valorar riesgos, establecer medidas. Incluye todos los factores de riesgo." }
  },
  {
    aspecto: "Servicios de Prevención",
    argentina: { norma: "Servicios de Medicina del Trabajo / Higiene y Seguridad", detalle: "Pueden ser internos o externos. Se requiere matrícula profesional." },
    espana: { norma: "Servicios de Prevención (Propios o Concertados)", detalle: "Regulados por RD 39/1997. Deben estar acreditados por la autoridad laboral." }
  },
  {
    aspecto: "Organismos de Control",
    argentina: { norma: "Superintendencia de Riesgos del Trabajo (SRT)", detalle: "Organismo de control y fiscalización. Gestiona el Sistema de Riesgos del Trabajo." },
    espana: { norma: "INSST + Autoridades Laborales Autonómicas", detalle: "INSST como organismo técnico. Las comunidades autónomas tienen competencias propias." }
  },
  {
    aspecto: "Documentación Obligatoria",
    argentina: { norma: "Legajo Técnico de Higiene y Seguridad", detalle: "Documentación del servicio de higiene y seguridad. Estudios ambientales." },
    espana: { norma: "Evaluación de Riesgos + Planificación + Plan de Emergencia", detalle: "Art. 23 LPRL: evaluación, planificación, formación, vigilancia sanitaria." }
  },
  {
    aspecto: "Participación de los Trabajadores",
    argentina: { norma: "Comité Mixto de Higiene y Seguridad", detalle: "Representantes del personal y del empleador." },
    espana: { norma: "Comité de Seguridad y Salud + Delegado de Prevención", detalle: "Art. 35-40 LPRL. Delegados con competencias específicas." }
  },
  {
    aspecto: "Formación",
    argentina: { norma: "Capacitación obligatoria (Res. 299/2011)", detalle: "Cursos de capacitación obligatoria según riesgo de la actividad." },
    espana: { norma: "Formación continua (Art. 19 LPRL)", detalle: "Formación adaptada al puesto, con periodicidad y actualización." }
  },
  {
    aspecto: "Vigilancia de la Salud",
    argentina: { norma: "Art. 70-72 Ley 19.587", detalle: "Exámenes médicos periódicos según exposición a agentes de riesgo." },
    espana: { norma: "Art. 22 LPRL", detalle: "Vigilancia especializada, voluntaria pero con obligaciones específicas para riesgos graves." }
  },
  {
    aspecto: "Accidentes de Trabajo",
    argentina: { norma: "Sistema de Riesgos del Trabajo (Ley 24.557)", detalle: "ART (Aseguradora de Riesgos del Trabajo). Indemnización + prestaciones médicas." },
    espana: { norma: "Incapacidad Temporal + Indemnización", detalle: "Seguridad Social + responsabilidad civil/penal del empresario." }
  },
  {
    aspecto: "Riesgos Específicos",
    argentina: { norma: "Decreto 911/96 + Resoluciones SRT", detalle: "Cáncer profesional, amianto, ruido, vibraciones, sustancias químicas." },
    espana: { norma: "RDs específicos (664/97, 374/2001, 665/97, etc.)", detalle: "Cada riesgo tiene su propio reglamento y guía técnica del INSST." }
  },
  {
    aspecto: "Sanciones",
    argentina: { norma: "Régimen de Sanciones (Ley 24.557, art. 30-32)", detalle: "Infracciones: leves, graves, muy graves. Multas escalonadas." },
    espana: { norma: "Ley 31/95, Cap. X + LISOS", detalle: "Infracciones y sanciones. Multas hasta 600.000 EUR por muy graves." }
  },
  {
    aspecto: "Responsabilidad del Empleador",
    argentina: { norma: "Responsabilidad Objetiva (ART)", detalle: "La ART cubre. El empleador responde por dolo o culpa grave." },
    espana: { norma: "Responsabilidad Civil + Penal + Administrativa", detalle: "Acumulable. El empresario responde directamente." }
  },
  {
    aspecto: "Construcción",
    argentina: { norma: "Decreto 911/96, Cap. XV", detalle: "Normas específicas para obras de construcción." },
    espana: { norma: "RD 1627/1997", detalle: "Plan de Seguridad y Salud obligatorio en obra. Coordinación de empresas." }
  },
  {
    aspecto: "Espacios Confinados",
    argentina: { norma: "No tiene reglamento específico", detalle: "Se aplica Decreto 911/96 de forma general." },
    espana: { norma: "RD 396/2006", detalle: "Reglamento específico: permisos de trabajo, control atmosférico, rescate." }
  },
  {
    aspecto: "EPIs",
    argentina: { norma: "Decreto 911/96 + Resoluciones SRT", detalle: "Provisión obligatoria. El empleador debe proporcionar EPIs." },
    espana: { norma: "RD 773/1997 + Reglamento (UE) 2016/425", detalle: "CE marcado, formación, mantenimiento, sustitución periódica." }
  },
  {
    aspecto: "Ruido",
    argentina: { norma: "Decreto 911/96, Anexo VII", detalle: "Valores límite根据 exposición." },
    espana: { norma: "Directiva 2003/10/CE + RD 286/2006", detalle: "VLE: 87 dB(A). Acción inferior: 80 dB(A). Acción superior: 85 dB(A)." }
  },
  {
    aspecto: "Agentes Químicos",
    argentina: { norma: "Resolución SRT 456/2011", detalle: "Reglamento sobre sustancias químicas peligrosas." },
    espana: { norma: "RD 374/2001 + Reglamento CLP", detalle: "HDS obligatoria, LEP, etiquetado CLP, vigilancia sanitaria." }
  },
  {
    aspecto: "Diferencias Clave para el Técnico",
    argentina: { norma: "—", detalle: "En Argentina se dice 'técnico en higiene y seguridad'. En España: 'técnico de PRL'." },
    espana: { norma: "—", detalle: "El sistema español es más estructurado y burocrático. Más documentación obligatoria." }
  },
  {
    aspecto: "🗣️ Idioma",
    argentina: { norma: "Español rioplatense", detalle: "'Vos' en vez de 'ustedes'. 'Auto' (no 'coche'), 'celular' (no 'móvil'), 'computadora' (no 'ordenador'). 'Matafuegos' (no 'extintores'). Distinta pronunciación y expresiones." },
    espana: { norma: "Español peninsular + Lenguas cooficiales", detalle: "Usan 'vosotros'. Catalán obligatorio en Cataluña. Euskera en País Vasco. Gallego en Galicia. El vocabulario técnico es diferente al argentino." }
  },
  {
    aspecto: "🗣️ Vocabulario Técnico AR→ES",
    argentina: { norma: "Términos argentinos", detalle: "Guardapolvo, matafuegos, picana, artefacto, instalación eléctrica, barrera, andamio (igual), eslinga (igual)." },
    espana: { norma: "Términos españoles equivalentes", detalle: "Mono de trabajo, extintor, pistola de tensión, dispositivo, instalación, barrera, andamio, eslinga. La normativa usa terminología INSST." }
  }
];

const CURSOS_INSST = [
  {
    id: "curso-01",
    title: "Ergonomía y confort visual en la iluminación de los puestos de trabajo",
    center: "CNCT Barcelona",
    date: "21/04/2026",
    duration: "2 horas",
    modality: "Online",
    inscription: "https://www.insst.es/formacion/cnct-barcelona",
    topic: "ergonomia",
    free: true
  },
  {
    id: "curso-02",
    title: "Emisiones de motores diésel: Exposición laboral",
    center: "CNCT Barcelona",
    date: "18/05/2026",
    duration: "2.5 horas",
    modality: "Online",
    inscription: "https://www.insst.es/formacion/cnct-barcelona",
    topic: "higiene-industrial",
    free: true
  },
  {
    id: "curso-03",
    title: "Empleos verdes: características e impacto para la SST",
    center: "CNCT Barcelona",
    date: "22/05/2026",
    duration: "2 horas",
    modality: "Online",
    inscription: "https://www.insst.es/formacion/cnct-barcelona",
    topic: "general",
    free: true
  },
  {
    id: "curso-04",
    title: "Métodos de evaluación del estrés y la sobrecarga térmicos",
    center: "CNCT Barcelona",
    date: "02/06/2026",
    duration: "5 horas",
    modality: "Presencial",
    inscription: "https://www.insst.es/formacion/cnct-barcelona",
    topic: "higiene-industrial",
    free: true
  },
  {
    id: "curso-05",
    title: "Prevención de la exposición a polvo respirable de sílice cristalina",
    center: "CNNT Madrid",
    date: "09/06/2026",
    duration: "3 horas",
    modality: "Online",
    inscription: "https://www.insst.es/formacion/cnnt-madrid",
    topic: "higiene-industrial",
    free: true
  },
  {
    id: "curso-06",
    title: "Seguridad y salud en la instalación de placas fotovoltaicas en cubiertas",
    center: "CNNT Madrid",
    date: "Por confirmar",
    duration: "3 horas",
    modality: "Online",
    inscription: "https://www.insst.es/formacion/cnnt-madrid",
    topic: "seguridad",
    free: true
  },
  {
    id: "curso-07",
    title: "Desconexión digital: protocolos, formación e impacto en la salud",
    center: "CNNT Madrid",
    date: "Por confirmar",
    duration: "2 horas",
    modality: "Online",
    inscription: "https://www.insst.es/formacion/cnnt-madrid",
    topic: "psicosociologia",
    free: true
  },
  {
    id: "curso-08",
    title: "Ruido: problemática, herramientas y soluciones",
    center: "CNNT Madrid",
    date: "Por confirmar",
    duration: "3 horas",
    modality: "Online",
    inscription: "https://www.insst.es/formacion/cnnt-madrid",
    topic: "higiene-industrial",
    free: true
  },
  {
    id: "curso-09",
    title: "Perspectiva de género en salud laboral",
    center: "CNNT Madrid",
    date: "Por confirmar",
    duration: "2 horas",
    modality: "Online",
    inscription: "https://www.insst.es/formacion/cnnt-madrid",
    topic: "psicosociologia",
    free: true
  },
  {
    id: "curso-10",
    title: "Procedimientos de trabajo seguros para actividades peligrosas",
    center: "CNNT Madrid",
    date: "Por confirmar",
    duration: "3 horas",
    modality: "Online",
    inscription: "https://www.insst.es/formacion/cnnt-madrid",
    topic: "seguridad",
    free: true
  },
  {
    id: "curso-11",
    title: "Bioseguridad en laboratorios: niveles de contención biológica",
    center: "CNNT Madrid",
    date: "Por confirmar",
    duration: "3 horas",
    modality: "Online",
    inscription: "https://www.insst.es/formacion/cnnt-madrid",
    topic: "agentes-biologicos",
    free: true
  },
  {
    id: "curso-12",
    title: "Prevención de exposición a agentes cancerígenos, mutágenos y reprotóxicos",
    center: "CNNT Madrid",
    date: "Por confirmar",
    duration: "3 horas",
    modality: "Online",
    inscription: "https://www.insst.es/formacion/cnnt-madrid",
    topic: "agentes-quimicos",
    free: true
  },
  {
    id: "curso-13",
    title: "Seguridad vial laboral: estrategias y actuaciones empresariales",
    center: "CNNT Madrid",
    date: "Por confirmar",
    duration: "2 horas",
    modality: "Online",
    inscription: "https://www.insst.es/formacion/cnnt-madrid",
    topic: "seguridad",
    free: true
  },
  {
    id: "curso-14",
    title: "Evaluación de riesgos laborales en el servicio del hogar familiar",
    center: "Madrid SSCC",
    date: "17/02/2026",
    duration: "2 horas",
    modality: "Online",
    inscription: "https://www.insst.es/formacion/sscc-madrid",
    topic: "evaluacion",
    free: true
  },
  {
    id: "curso-15",
    title: "EPI contra caídas de altura",
    center: "Madrid SSCC",
    date: "Por confirmar",
    duration: "3 horas",
    modality: "Online + Presencial",
    inscription: "https://www.insst.es/formacion/sscc-madrid",
    topic: "seguridad",
    free: true
  },
  {
    id: "curso-16",
    title: "Taller de puesta y retirada de EPI",
    center: "Madrid SSCC",
    date: "Por confirmar",
    duration: "4 horas",
    modality: "Presencial",
    inscription: "https://www.insst.es/formacion/sscc-madrid",
    topic: "epi",
    free: true
  },
  {
    id: "curso-17",
    title: "Identificación y control de riesgos laborales en pymes",
    center: "Madrid SSCC",
    date: "Por confirmar",
    duration: "3 horas",
    modality: "Online",
    inscription: "https://www.insst.es/formacion/sscc-madrid",
    topic: "evaluacion",
    free: true
  },
  {
    id: "curso-18",
    title: "Taller teórico-práctico sobre fotoprotección en el ámbito laboral",
    center: "CNMP Sevilla",
    date: "17/06/2026",
    duration: "3.5 horas",
    modality: "Presencial",
    inscription: "https://www.insst.es/formacion/cnmp-sevilla",
    topic: "seguridad",
    free: true
  },
  {
    id: "curso-19",
    title: "Seguridad de las Máquinas Agrícolas (SEMA)",
    center: "CNMP Sevilla",
    date: "20/05/2026",
    duration: "1 hora",
    modality: "Online",
    inscription: "https://www.insst.es/formacion/cnmp-sevilla",
    topic: "seguridad",
    free: true
  },
  {
    id: "curso-20",
    title: "Taller de ajuste de equipos de protección respiratoria",
    center: "CNMP Sevilla",
    date: "15/10/2025 (próxima edición por confirmar)",
    duration: "3 horas",
    modality: "Presencial",
    inscription: "https://www.insst.es/formacion/cnmp-sevilla",
    topic: "epi",
    free: true
  }
];

const GUIAS_INSST_LINKS = [
  {
    id: "guia-01",
    title: "Directrices básicas para la evaluación de riesgos laborales (2021)",
    code: "DT.106.1.21",
    download: "https://www.insst.es/documentacion/material-tecnico/documentos-tecnicos/directrices-basicas-para-evaluacion-de-riesgos-laborales-ano-2021",
    size: "1.8 MB",
    description: "Bases conceptuales y etapas del proceso de evaluación de riesgos laborales."
  },
  {
    id: "guia-02",
    title: "Guía técnica: Agentes químicos en lugares de trabajo (2022)",
    code: "GT.114.1.22",
    download: "https://www.insst.es/documentacion/catalogo-de-publicaciones/guia-tecnica-para-la-evaluacion-y-prevencion-de-los-riesgos-relacionados-con-los-agentes-quimicos",
    size: "3.2 MB",
    description: "Criterios para evaluación y prevención de riesgos por agentes químicos."
  },
  {
    id: "guia-03",
    title: "Guía técnica: Agentes biológicos (2024)",
    code: "GT.108",
    download: "https://www.insst.es/documentacion/catalogo-de-publicaciones/guia-tecnica-para-la-evaluacion-y-prevencion-de-los-riesgos-relacionados-con-la-exposicion-a-agentes-biologicos",
    size: "3.3 MB",
    description: "Actualización de la guía sobre protección frente a agentes biológicos."
  },
  {
    id: "guia-04",
    title: "Guía técnica: Equipos de trabajo (2021)",
    code: "GT.111.1.21",
    download: "https://www.insst.es/documentacion/catalogo-de-publicaciones/guia-tecnica-para-la-evaluacion-y-prevencion-de-los-riesgos-relativos-a-la-utilizacion-de-los-equipos-de-trabajo",
    size: "11.5 MB",
    description: "Criterios para evaluación y prevención de riesgos por equipos de trabajo."
  },
  {
    id: "guia-05",
    title: "Manual de evaluación ergonómica y psicosocial en PYME (2003)",
    code: "DT.103.1.03",
    download: "https://www.insst.es/documentacion/material-tecnico/documentos-tecnicos/manual-evaluacion-y-prevencion-riesgos-ergonomicos-y-psicosociales-en-pyme-2003",
    size: "37.5 MB",
    description: "Procedimientos sencillos para identificación y evaluación de riesgos ergonómicos."
  },
  {
    id: "guia-06",
    title: "Método evaluación psicosocial en pequeñas empresas (2020)",
    code: "DT.103.1.20",
    download: "https://www.insst.es/documentacion/material-tecnico/documentos-tecnicos/metodo-para-evaluacion-y-gestion-de-factores-psicosociales-en-pequenas-empresas-ano-2020",
    size: "4.7 MB",
    description: "Método en 10 fases para evaluar factores psicosociales en empresas hasta 25 trabajadores."
  }
];

const QUIZZES_EXTRA = {
  "marco-normativo": [
    {
      id: "q-mn-09",
      question: "¿Cuál es la diferencia principal entre la Ley 19.587 (Argentina) y la Ley 31/1995 (España)?",
      options: [
        "La española es más corta",
        "La española tiene un enfoque integral de prevención, la argentina se enfoca en condiciones ambientales",
        "Son idénticas",
        "La argentina es más moderna"
      ],
      correct: 1,
      explanation: "La Ley 31/1995 tiene un enfoque integral que incluye riesgos ergonómicos, psicosociales y biológicos. La Ley 19.587 se enfoca más en condiciones ambientales y seguridad física."
    },
    {
      id: "q-mn-10",
      question: "¿Qué organismo fiscaliza la PRL en Argentina?",
      options: [
        "INSST",
        "Superintendencia de Riesgos del Trabajo (SRT)",
        "Ministerio de Trabajo",
        "ANSES"
      ],
      correct: 1,
      explanation: "La SRT (Superintendencia de Riesgos del Trabajo) es el organismo de control del Sistema de Riesgos del Trabajo en Argentina."
    },
    {
      id: "q-mn-11",
      question: "¿Cuál es el organismo equivalente al INSST en Argentina?",
      options: [
        "ANMAT",
        "SRT (Superintendencia de Riesgos del Trabajo)",
        "AFIP",
        "Ministerio de Salud"
      ],
      correct: 1,
      explanation: "La SRT es el organismo técnico y de control equivalente al INSST en materia de prevención de riesgos laborales."
    },
    {
      id: "q-mn-12",
      question: "¿Qué documentación obligatoria exige el Art. 23 de la Ley 31/1995?",
      options: [
        "Solo el plan de emergencia",
        "Evaluación de riesgos, planificación, formación y vigilancia sanitaria",
        "Solo la evaluación de riesgos",
        "Ninguna, es opcional"
      ],
      correct: 1,
      explanation: "El Art. 23 establece la documentación mínima: evaluación de riesgos, planificación de la actividad preventiva, formación, vigilancia sanitaria y planes de emergencia."
    },
    {
      id: "q-mn-13",
      question: "En Argentina, ¿quién cubre las indemnizaciones por accidentes de trabajo?",
      options: [
        "El empleador directamente",
        "La ART (Aseguradora de Riesgos del Trabajo)",
        "El Estado nacional",
        "El sindicato"
      ],
      correct: 1,
      explanation: "En Argentina, la ART (Aseguradora de Riesgos del Trabajo) cubre las prestaciones médicas e indemnizaciones por accidentes y enfermedades profesionales."
    },
    {
      id: "q-mn-14",
      question: "¿Qué es el 'Legajo Técnico de Higiene y Seguridad' en Argentina?",
      options: [
        "Un certificado del trabajador",
        "La documentación del servicio de higiene y seguridad con estudios ambientales",
        "Un contrato de trabajo",
        "Un libro de firmas"
      ],
      correct: 1,
      explanation: "El Legajo Técnico es la documentación que genera el servicio de higiene y seguridad, incluyendo estudios ambientales y evaluaciones de riesgo."
    },
    {
      id: "q-mn-15",
      question: "¿Cuál es la principal diferencia en responsabilidad del empleador entre Argentina y España?",
      options: [
        "En Argentina no hay responsabilidad",
        "En Argentina la ART cubre y el empleador responde por dolo/culpa grave; en España es acumulable civil+penal+administrativa",
        "Son iguales",
        "En España el empleador nunca responde"
      ],
      correct: 1,
      explanation: "En Argentina la responsabilidad está mediada por la ART. En España, las responsabilidades civil, penal y administrativa son acumulables y el empresario responde directamente."
    },
    {
      id: "q-mn-16",
      question: "¿Qué significa 'acuerdo de empresa' en el contexto de PRL española?",
      options: [
        "Un contrato laboral",
        "Un convenio colectivo que puede mejorar las condiciones de PRL",
        "Un documento sin valor legal",
        "Una sanción al trabajador"
      ],
      correct: 1,
      explanation: "Los acuerdos de empresa y los convenios colectivos pueden establecer condiciones de PRL más beneficiosas que las mínimas legales."
    }
  ],
  "guias-insst": [
    {
      id: "q-gi-08",
      question: "¿Qué guía del INSST se usa para evaluar riesgos por agentes químicos?",
      options: [
        "Guía de Equipos de Trabajo",
        "Guía de Agentes Químicos (GT.114.1.22)",
        "Guía de Ergonomía",
        "Guía de Espacios Confinados"
      ],
      correct: 1,
      explanation: "La Guía Técnica GT.114.1.22 (2022) proporciona criterios para evaluación y prevención de riesgos por agentes químicos."
    },
    {
      id: "q-gi-09",
      question: "¿Cada cuánto debe revisarse la evaluación de riesgos según el RD 39/1997?",
      options: [
        "Cada 5 años obligatoriamente",
        "Cuando cambien las condiciones de trabajo o cuando pueda haberse alterado el riesgo",
        "Solo cuando hay un accidente",
        "Nunca, es un documento permanente"
      ],
      correct: 1,
      explanation: "La evaluación debe revisarse cuando cambien las condiciones de trabajo, cuando se detecten daños a la salud, o cuando haya alteraciones significativas en los procesos."
    },
    {
      id: "q-gi-10",
      question: "¿Qué es un 'permiso de trabajo' en el contexto de espacios confinados?",
      options: [
        "Un documento que autoriza a trabajar en horario nocturno",
        "Un documento que certifica que se han tomado todas las precauciones de seguridad antes de entrar",
        "Un contrato laboral",
        "Un seguro de vida"
      ],
      correct: 1,
      explanation: "El permiso de trabajo es un documento que certifica que se han verificado todas las condiciones de seguridad (atmosférica, ventilación, rescate) antes de iniciar trabajo en espacio confinado."
    },
    {
      id: "q-gi-11",
      question: "¿Cuáles son los 4 pasos de la metodología de evaluación de riesgos del INSST?",
      options: [
        "Planificar, Ejecutar, Verificar, Actuar",
        "Identificar peligros, Valorar riesgos, Establecer medidas, Verificar eficacia",
        "Medir, Calcular, Registrar, Informar",
        "Prevenir, Detectar, Corregir, Mejorar"
      ],
      correct: 1,
      explanation: "La metodología INSST: 1) Identificar peligros, 2) Valorar el riesgo (severidad x probabilidad), 3) Establecer medidas preventivas, 4) Verificar la eficacia de las medidas."
    },
    {
      id: "q-gi-12",
      question: "¿Qué método se utiliza para evaluar el manejo manual de cargas?",
      options: [
        "Método RULA",
        "Método NIOSH",
        "Método OCRA",
        "Método REBA"
      ],
      correct: 1,
      explanation: "El método NIOSH (National Institute for Occupational Safety and Health) es el estándar para evaluar el levantamiento manual de cargas."
    },
    {
      id: "q-gi-13",
      question: "¿Cuándo se considera que un trabajador necesita EPI contra caídas?",
      options: [
        "Cuando trabaja en una oficina",
        "Cuando trabaja a más de 2 metros de altura y no hay protección colectiva",
        "Solo en construcción",
        "Solo los técnicos de PRL"
      ],
      correct: 1,
      explanation: "Cuando el trabajo se realiza a más de 2 metros de altura y no es posible instalar protección colectiva (barandillas, redes), se debe proporcionar EPI anticaídas."
    }
  ],
  "normas-iso": [
    {
      id: "q-ni-09",
      question: "¿Qué significa PDCA en ISO 45001?",
      options: [
        "Prevenir, Detectar, Corregir, Actuar",
        "Planificar, Hacer, Verificar, Actuar",
        "Programar, Diseñar, Controlar, Analizar",
        "Procesar, Desarrollar, Calificar, Aprobar"
      ],
      correct: 1,
      explanation: "PDCA = Plan (Planificar), Do (Hacer), Check (Verificar), Act (Actuar). Es el ciclo de mejora continua que fundamenta ISO 45001."
    },
    {
      id: "q-ni-10",
      question: "¿Qué requiere ISO 45001 respecto a la participación de los trabajadores?",
      options: [
        "Nada, es opcional",
        "Consulta y participación en todas las etapas del sistema de gestión",
        "Solo en la evaluación de riesgos",
        "Solo en emergencias"
      ],
      correct: 1,
      explanation: "ISO 45001 requiere consulta y participación de los trabajadores en la planificación, implementación, evaluación y mejora del sistema de gestión."
    },
    {
      id: "q-ni-11",
      question: "¿Cuál es la diferencia principal entre ISO 45001 y OHSAS 18001?",
      options: [
        "ISO 45001 es más fácil",
        "ISO 45001 usa estructura HLS, enfoca en liderazgo y riesgos oportunidades, no solo peligros",
        "Son iguales pero con otro nombre",
        "OHSAS 18001 es más completa"
      ],
      correct: 1,
      explanation: "ISO 45001 incorpora la estructura HLS (High Level Structure), enfatiza el liderazgo de la dirección y usa el enfoque de riesgos y oportunidades (no solo peligros)."
    },
    {
      id: "q-ni-12",
      question: "¿Qué es el 'contexto de la organización' en ISO 45001?",
      options: [
        "El organigrama de la empresa",
        "Los factores internos y externos que afectan al sistema de gestión de SSO",
        "El manual de calidad",
        "Las auditorías internas"
      ],
      correct: 1,
      explanation: "El contexto incluye factores internos (cultura, recursos, gobernanza) y externos (leyes, partes interesadas, entorno) que influyen en el sistema de gestión."
    }
  ],
  "homologacion": [
    {
      id: "q-ho-06",
      question: "¿Qué es el NIE y cuándo lo necesitás?",
      options: [
        "Un certificado de idioma",
        "El Número de Identidad de Extranjero, necesario para cualquier trámite en España",
        "Un seguro médico",
        "Un título académico"
      ],
      correct: 1,
      explanation: "El NIE es tu número de identificación como extranjero en España. Lo necesitás para abrir cuenta bancaria, contratar servicios, trabajar, etc."
    },
    {
      id: "q-ho-07",
      question: "¿Qué es el empadronamiento?",
      options: [
        "Un documento de identidad",
        "El registro en el ayuntamiento de donde vivís en España",
        "Un contrato de alquiler",
        "Un seguro de desempleo"
      ],
      correct: 1,
      explanation: "El empadronamiento es el registro obligatorio en el ayuntamiento del domicilio donde vivís. Es necesario para muchos trámites, incluyendo la homologación."
    },
    {
      id: "q-ho-08",
      question: "¿Cuánto cuesta aproximadamente la tasa de homologación?",
      options: [
        "10-20 EUR",
        "85-160 EUR",
        "500 EUR",
        "Es gratuito"
      ],
      correct: 1,
      explanation: "La tasa de homologación varía entre 85 y 160 EUR según la comunidad autónoma y el tipo de trámite."
    },
    {
      id: "q-ho-09",
      question: "¿Es necesario apostillar los documentos argentinos para España?",
      options: [
        "No, Argentina y España tienen acuerdo directo",
        "Sí, la Apostilla de La Haya es obligatoria para validar documentos públicos extranjeros",
        "Solo el título",
        "Solo si tenés doble ciudadanía"
      ],
      correct: 1,
      explanation: "La Apostilla de La Haya es obligatoria para que los documentos públicos argentinos sean reconocidos legalmente en España."
    },
    {
      id: "q-ho-10",
      question: "¿Qué es la 'equivalencia' de un título?",
      options: [
        "Una certificación de idioma",
        "El reconocimiento oficial de que tu título extranjero tiene el mismo nivel que uno español",
        "Un curso de formación",
        "Un contrato de trabajo"
      ],
      correct: 1,
      explanation: "La equivalencia certifica que tu título tiene el mismo nivel académico y profesional que un título oficial español, permitiéndote ejercer en las mismas condiciones."
    }
  ],
  "idioma": [
    {
      id: "q-id-05",
      question: "¿Cómo se dice 'espacio confinado' en catalán?",
      options: [
        "Espai confinat",
        "Espai tancat",
        "Espai de treball",
        "Zona perillosa"
      ],
      correct: 0,
      explanation: "En catalán: 'espai confinat'. Es una traducción directa del español peninsular."
    },
    {
      id: "q-id-06",
      question: "¿Qué certificado de catalán se recomienda para trabajar en Cataluña?",
      options: [
        "A1",
        "A2 como mínimo, B1 recomendado",
        "C1 obligatorio",
        "No se necesita certificado"
      ],
      correct: 1,
      explanation: "Se recomienda A2 como mínimo. Para puestos públicos o de responsabilidad se suele requerir B1. En empresas privadas puede no ser obligatorio pero es muy valorado."
    },
    {
      id: "q-id-07",
      question: "¿Cómo se dice 'evaluación de riesgos' en catalán?",
      options: [
        "Avaluació de riscos",
        "Avaluació de perills",
        "Anàlisi de riscos",
        "Identificació de perills"
      ],
      correct: 0,
      explanation: "En catalán: 'Avaluació de riscos'. 'Riscos' equivale a 'riesgos' en español."
    },
    {
      id: "q-id-08",
      question: "¿Qué curso de catalán es gratuito en Cataluña?",
      options: [
        "Cursos de la Universidad",
        "Programa Parla de la Generalitat de Catalunya",
        "Cursos de la Cámara de Comercio",
        "Ninguno es gratuito"
      ],
      correct: 1,
      explanation: "El programa Parla de la Generalitat de Catalunya ofrece cursos gratuitos de catalán para adultos."
    }
  ]
};
