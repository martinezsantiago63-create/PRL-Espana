const CHECKLIST_HOMOLOGACION = [
  {
    id: "ch-01",
    category: "Documentos Personales",
    items: [
      { id: "ch-01-01", text: "Pasaporte argentino vigente (frente y dorso)", checked: false },
      { id: "ch-01-02", text: "DNI argentino actualizado", checked: false },
      { id: "ch-01-03", text: "Certificado de nacimiento (original + apostilla)", checked: false },
      { id: "ch-01-04", text: "Certificado de antecedentes penales (apostillado)", checked: false },
      { id: "ch-01-05", text: "Certificado de domicilio en Argentina", checked: false }
    ]
  },
  {
    id: "ch-02",
    category: "Documentos Académicos",
    items: [
      { id: "ch-02-01", text: "Título original de Técnico en Saneamiento y Seguridad Industrial", checked: false },
      { id: "ch-02-02", text: "Apostilla de La Haya en el título", checked: false },
      { id: "ch-02-03", text: "Analítico / Plan de Estudios completo (original)", checked: false },
      { id: "ch-02-04", text: "Apostilla de La Haya en el analítico", checked: false },
      { id: "ch-02-05", text: "Traducción jurada al español (si aplica)", checked: false },
      { id: "ch-02-06", text: "Certificado de regularidad académica", checked: false },
      { id: "ch-02-07", text: "Currículum vitae actualizado", checked: false }
    ]
  },
  {
    id: "ch-03",
    category: "Trámites en Argentina",
    items: [
      { id: "ch-03-01", text: "Apostillar título en Cancillería Argentina", checked: false },
      { id: "ch-03-02", text: "Apostillar analítico en Cancillería Argentina", checked: false },
      { id: "ch-03-03", text: "Legalizar documentos en el Colegio/Institución", checked: false },
      { id: "ch-03-04", text: "Obtener certificado de antecedentes penales (Registro Nacional de Reincidencia)", checked: false },
      { id: "ch-03-05", text: "Apostillar certificado de antecedentes", checked: false }
    ]
  },
  {
    id: "ch-04",
    category: "Trámites en España",
    items: [
      { id: "ch-04-01", text: "NIE (Número de Identidad de Extranjero)", checked: false },
      { id: "ch-04-02", text: "Empadronamiento en el ayuntamiento", checked: false },
      { id: "ch-04-03", text: "Cuenta bancaria en España", checked: false },
      { id: "ch-04-04", text: "Seguridad Social (alta como trabajador o autónomo)", checked: false },
      { id: "ch-04-05", text: "Solicitud de homologación al Ministerio de Educación", checked: false },
      { id: "ch-04-06", text: "Pago de tasa de homologación (~85-160 EUR)", checked: false },
      { id: "ch-04-07", text: "Seguimiento del expediente online", checked: false }
    ]
  },
  {
    id: "ch-05",
    category: "Certificaciones Complementarias",
    items: [
      { id: "ch-05-01", text: "Certificado de catalán (si trabajás en Cataluña)", checked: false },
      { id: "ch-05-02", text: "Carnet de manipulador de alimentos (si aplica)", checked: false },
      { id: "ch-05-03", text: "Certificado de soldador (si aplica)", checked: false },
      { id: "ch-05-04", text: "Carnet de elevador / grúa (si aplica)", checked: false },
      { id: "ch-05-05", text: "Curso de primeros auxilios (si aplica)", checked: false },
      { id: "ch-05-06", text: "Certificado de prevención de riesgos laborales (si se requiere complemento)", checked: false }
    ]
  },
  {
    id: "ch-06",
    category: "Idioma",
    items: [
      { id: "ch-06-01", text: "Certificado de nivel B1 de español (DELE o similar)", checked: false },
      { id: "ch-06-02", text: "Certificado de catalán A2-B1 (si trabajás en Cataluña)", checked: false },
      { id: "ch-06-03", text: "Vocabulario técnico PRL en español peninsular", checked: false }
    ]
  }
];

const VOCABULARIO_AR_ES = [
  { ar: "ergónomo", es: "ergónomo / técnico en prevención", context: "Profesional que evalúa riesgos ergonómicos" },
  { ar: "seguridad e higiene", es: "seguridad y salud en el trabajo (SST)", context: "Nombre general de la disciplina" },
  { ar: "seguridad industrial", es: "seguridad industrial / prevención de riesgos", context: "Rama de la ingeniería de seguridad" },
  { ar: "saneamiento", es: "saneamiento industrial / higiene industrial", context: "Control de plagas, limpieza, desinfección" },
  { ar: "matafuegos", es: "extintor", context: "Equipo de extinción de incendios portátil" },
  { ar: "botiquín", es: "botiquín de primeros auxilios", context: "Kit de atención inicial ante accidentes" },
  { ar: "encuesta de ruido", es: "medición de ruido / mapa de ruido", context: "Estudio del nivel sonoro en el puesto" },
  { ar: "desratización", es: "control de plagas / desratización", context: "Eliminación de roedores en instalaciones" },
  { ar: "desinfección", es: "desinfección / tratamiento fitosanitario", context: "Eliminación de microorganismos" },
  { ar: "lavadero", es: "zona de lavado / ducha de seguridad", context: "Área de higiene personal" },
  { ar: "cinta transportadora", es: "transportador / cinta transportadora", context: "Equipo de movimiento de materiales" },
  { ar: "explosión", es: "explosión / atmósfera explosiva (ATEX)", context: "Riesgo por gases o polvos inflamables" },
  { ar: "inflamable", es: "inflamable / combustible", context: "Sustancia que arde fácilmente" },
  { ar: "电rico", es: "eléctrico", context: "Riesgo por energía eléctrica" },
  { ar: "voladura", es: "voladura / trabajos de demolicción", context: "Uso de explosivos en construcción" },
  { ar: "permiso de trabajo", es: "permiso de trabajo / autorización", context: "Documento que autoriza trabajos de riesgo" },
  { ar: "plan de emergencia", es: "plan de emergencia y evacuación", context: "Protocolo ante siniestros" },
  { ar: "comité de seguridad", es: "comité de seguridad y salud", context: "Órgano de participación worker-empresa" },
  { ar: "delegado gremial", es: "delegado de prevención", context: "Representante de los trabajadores en PRL" },
  { ar: "L.E.M.", es: "Ley de Prevención de Riesgos Laborales (LPRL)", context: "Ley marco de la PRL en España" },
  { ar: "Servicio de Prevención Propio", es: "Servicio de Prevención Propio", context: "Servicio organizado por la empresa" },
  { ar: "Servicio de Prevención Ajeno", es: "Servicio de Prevención Concertado", context: "Servicio externo contratado" },
  { ar: "horno", es: "horno / cámara de calor", context: "Equipo para tratamientos térmicos" },
  { ar: "caldera", es: "caldera / generador de vapor", context: "Equipo de generación de calor" },
  { ar: "compresor", es: "compresor de aire", context: "Equipo de generación de aire a presión" },
  { ar: "soldadura", es: "soldadura / unión por fusión", context: "Proceso de unión de metales" },
  { ar: "corte", es: "corte / corte térmico o mecánico", context: "Procesos de corte de materiales" },
  { ar: "izaje", es: "izaje / maniobras de elevación", context: "Movimiento de cargas con grúas" },
  { ar: "andamio", es: "andamio / estructura temporal", context: "Plataforma de trabajo en altura" },
  { ar: "arnés", es: "arnés anticaídas", context: "Equipo de protección individual contra caídas" },
  { ar: "línea de vida", es: "línea de vida / línea de anclaje", context: "Sistema de anclaje para arnés" },
  { ar: "baranda", es: "barandilla / protección perimetral", context: "Barrera contra caídas" },
  { ar: "rejilla", es: "rejilla / piso elevado", context: "Superficie perforada para drenaje o ventilación" },
  { ar: "desagote", es: "desagote / limpieza de sistemas de drenaje", context: "Mantenimiento de tuberías y pozos" },
  { ar: "pozo de visita", es: "pozo de inspección / registro", context: "Punto de acceso a redes de saneamiento" },
  { ar: "camión cisterna", es: "cisterna / camión de vaciado", context: "Vehículo para transporte de líquidos" },
  { ar: "bomba de achique", es: "bomba de achique / bomba de drenaje", context: "Equipo para extraer agua" },
  { ar: "cloración", es: "cloración / desinfección con cloro", context: "Tratamiento químico del agua" },
  { ar: "potabilización", es: "potabilización / tratamiento de agua potable", context: "Proceso de hacer agua apta para consumo" },
  { ar: "vertido", es: "vertido / emisión de aguas residuales", context: "Descarga de aguas tratadas o sin tratar" },
  { ar: "residuo peligroso", es: "residuo peligroso (RD 952/2017)", context: "Residuo con propiedades nocivas" },
  { ar: "residuo no peligroso", es: "residuo urbano / no peligroso", context: "Residuo doméstico o industrial no peligroso" },
  { ar: "ficha de seguridad", es: "Hoja de Datos de Seguridad (HDS/SDS)", context: "Documento con información de sustancias químicas" },
  { ar: "EPI", es: "Equipo de Protección Individual (EPI)", context: "Equipo para proteger al trabajador" },
  { ar: "EPC", es: "Equipo de Protección Colectiva (EPC)", context: "Protección compartida por varios trabajadores" },
  { ar: "señalización", es: "señalización de seguridad", context: "Carteles y marcas de seguridad" },
  { ar: "protocolo", es: "procedimiento / protocolo de actuación", context: "Conjunto de pasos a seguir" },
  { ar: "auditoría", es: "auditoría de seguridad / auditoría PRL", context: "Revisión formal del sistema de gestión" },
  { ar: "capacitación", es: "formación / capacitación en PRL", context: "Enseñanza de procedimientos seguros" },
  { ar: "charla de seguridad", es: "reunión informativa de seguridad / toolbox talk", context: "Breve reunión sobre temas de seguridad" },
  { ar: "incidente", es: "incidente / cuasi-accidente", context: "Evento que pudo haber causado daño" },
  { ar: "accidente laboral", es: "accidente de trabajo", context: "Siniestro durante la jornada laboral" },
  { ar: "enfermedad profesional", es: "enfermedad profesional", context: "Enfermedad causada por el trabajo" },
  { ar: "frecuencia", es: "índice de frecuencia (IF)", context: "N.º de accidentes por millón de horas trabajadas" },
  { ar: "severidad", es: "índice de severidad (IS)", context: "Días de baja por millón de horas trabajadas" },
  { ar: "accidente sin licencia", es: "accidente sin baja", context: "Accidente con atención médica pero sin días de reposo" }
];

const QUIZZES = {
  "marco-normativo": [
    {
      id: "q-mn-01",
      question: "¿Cuál es la ley marco de la Prevención de Riesgos Laborales en España?",
      options: [
        "Ley 31/1995",
        "Ley 39/1997",
        "Ley 17/2011",
        "RD 773/1997"
      ],
      correct: 0,
      explanation: "La Ley 31/1995 es la Ley de Prevención de Riesgos Laborales, la norma fundamental de la PRL en España."
    },
    {
      id: "q-mn-02",
      question: "¿Qué Reglamento desarrolla la organización de los Servicios de Prevención?",
      options: [
        "RD 1215/1997",
        "RD 39/1997",
        "RD 773/1997",
        "RD 486/1997"
      ],
      correct: 1,
      explanation: "El RD 39/1997 es el Reglamento de los Servicios de Prevención, que desarrolla la Ley 31/1995."
    },
    {
      id: "q-mn-03",
      question: "¿Qué Real Decreto regula los Equipos de Protección Individual (EPI)?",
      options: [
        "RD 1215/1997",
        "RD 39/1997",
        "RD 773/1997",
        "RD 374/2001"
      ],
      correct: 2,
      explanation: "El RD 773/1997 establece las disposiciones mínimas de seguridad para la utilización de EPI."
    },
    {
      id: "q-mn-04",
      question: "¿Cuál es el VLE (Valor Límite de Exposición) para ruido continuo en España?",
      options: [
        "80 dB(A)",
        "85 dB(A)",
        "87 dB(A)",
        "90 dB(A)"
      ],
      correct: 2,
      explanation: "El VLE es 87 dB(A), calculado como el nivel superior efectivo de exposición diaria."
    },
    {
      id: "q-mn-05",
      question: "¿Qué Real Decreto regula el trabajo en espacios confinados?",
      options: [
        "RD 396/2006",
        "RD 632/2011",
        "RD 843/2011",
        "RD 1627/1997"
      ],
      correct: 0,
      explanation: "El RD 396/2006 establece las disposiciones mínimas de seguridad para el trabajo en espacios confinados."
    },
    {
      id: "q-mn-06",
      question: "¿En qué año se publicó la Ley de Prevención de Riesgos Laborales española?",
      options: [
        "1993",
        "1995",
        "1997",
        "2001"
      ],
      correct: 1,
      explanation: "La Ley 31/1995 se publicó el 9 de noviembre de 1995."
    },
    {
      id: "q-mn-07",
      question: "¿Cuáles son los principios generales de la acción preventiva según la Ley 31/1995?",
      options: [
        "Evitar, evaluar, controlar",
        "Planificar, ejecutar, verificar, actuar",
        "Identificar, valorar, decidir, ejecutar",
        "Prevenir, detectar, corregir, mejorar"
      ],
      correct: 0,
      explanation: "Los principios son: evitar los riesgos, evaluar los que no se pueden evitar, combatir los riesgos en origen, adaptar el trabajo a la persona."
    },
    {
      id: "q-mn-08",
      question: "¿Qué agente biológico pertenece al grupo de riesgo más alto (Grupo IV)?",
      options: [
        "Salmonella",
        "Staphylococcus aureus",
        "Virus de la gripe",
        "Mycobacterium tuberculosis"
      ],
      correct: 3,
      explanation: "Mycobacterium tuberculosis pertenece al Grupo IV, el de mayor riesgo de infección para los trabajadores."
    }
  ],
  "guias-insst": [
    {
      id: "q-gi-01",
      question: "¿Cuál es la primera étape de la evaluación de riesgos según el INSST?",
      options: [
        "Establecer medidas correctivas",
        "Identificar los peligros",
        "Valorar el riesgo",
        "Documentar resultados"
      ],
      correct: 1,
      explanation: "El primer paso es identificar los peligros existentes en los puestos de trabajo."
    },
    {
      id: "q-gi-02",
      question: "¿Cómo se calcula el nivel de riesgo en una evaluación básica?",
      options: [
        "Peligro × Probabilidad",
        "Severidad × Probabilidad",
        "Severidad × Frecuencia",
        "Exposición × Peligrosidad"
      ],
      correct: 1,
      explanation: "El nivel de riesgo se calcula multiplicando la Severidad del daño por la Probabilidad de que se produzca."
    },
    {
      id: "q-gi-03",
      question: "¿Qué método se usa para evaluar riesgos ergonómicos de posturas?",
      options: [
        "NIOSH",
        "RULA",
        "OCRA",
        "Todos los anteriores"
      ],
      correct: 3,
      explanation: "NIOSH evalúa manejo de cargas, RULA evalúa posturas, OCRA evalúa movimientos repetitivos. Todos son métodos ergonómicos."
    },
    {
      id: "q-gi-04",
      question: "¿Cuándo se considera que un espacio confinado requiere permiso de trabajo?",
      options:
      [
        "Siempre",
        "Solo si supera 4 horas",
        "Cuando hay riesgo atmosférico",
        "Solo en construcción"
      ],
      correct: 2,
      explanation: "El permiso de trabajo es obligatorio cuando existe riesgo de atmósfera peligrosa (deficiencia de O₂, gases tóxicos o explosivos)."
    },
    {
      id: "q-gi-05",
      question: "¿Cuál es el VLE para vibraciones mano-brazo (HAV)?",
      options: [
        "1.15 m/s²",
        "2.5 m/s²",
        "5.0 m/s²",
        "7.5 m/s²"
      ],
      correct: 1,
      explanation: "El VLE para vibraciones mano-brazo es 2.5 m/s², calculado sobre un periodo de exposición de 8 horas."
    },
    {
      id: "q-gi-06",
      question: "¿Qué significa 'nunca entrar solo a un espacio confinado'?",
      options: [
        "Es una recomendación opcional",
        "Es una norma de seguridad obligatoria",
        "Solo aplica si el espacio es grande",
        "Solo aplica si hay气体 tóxicos"
      ],
      correct: 1,
      explanation: "Entrar solo a un espacio confinado es extremadamente peligroso. Siempre debe haber al menos una persona de vigilancia externa."
    },
    {
      id: "q-gi-07",
      question: "¿Qué debe incluir un plan de emergencia según el RD 39/1997?",
      options: [
        "Solo números de teléfono",
        "Alarmar, evacuar, extinction, socorrer",
        "Solo el plan de evacuación",
        "Solo la lista de extintores"
      ],
      correct: 1,
      explanation: "Un plan de emergencia debe incluir: alarma, evacuación, extinción y socorro a personas."
    }
  ],
  "normas-iso": [
    {
      id: "q-ni-01",
      question: "¿Cuántos capítulos tiene la estructura HLS de ISO 45001:2018?",
      options: [
        "8 capítulos",
        "9 capítulos",
        "10 capítulos",
        "12 capítulos"
      ],
      correct: 2,
      explanation: "ISO 45001 tiene 10 capítulos: alcance, referencias, términos, contexto, liderazgo, planificación, soporte, operación, evaluación del desempeño y mejora."
    },
    {
      id: "q-ni-02",
      question: "¿Qué ciclo PHVA se utiliza en ISO 45001?",
      options: [
        "Planificar, Hacer, Verificar, Actuar",
        "Prevenir, Detectar, Corregir, Mejorar",
        "Identificar, Evaluar, Controlar, Revisar",
        "Analizar, Diseñar, Implementar, Revisar"
      ],
      correct: 0,
      explanation: "ISO 45001 se basa en el ciclo PHVA: Planificar (Plan), Hacer (Do), Verificar (Check), Actuar (Act)."
    },
    {
      id: "q-ni-03",
      question: "¿Qué norma reemplazó OHSAS 18001?",
      options: [
        "ISO 9001:2015",
        "ISO 14001:2015",
        "ISO 45001:2018",
        "ISO 31000:2018"
      ],
      correct: 2,
      explanation: "ISO 45001:2018 reemplazó a OHSAS 18001 como norma internacional de sistemas de gestión de SST."
    },
    {
      id: "q-ni-04",
      question: "¿Cuál es el enfoque principal de ISO 45001:2018?",
      options: [
        "Enfoque basado en documentos",
        "Enfoque basado en riesgos",
        "Enfoque basado en auditorías",
        "Enfoque basado en certificaciones"
      ],
      correct: 1,
      explanation: "ISO 45001 utiliza un enfoque basado en riesgos y pensamiento basado en procesos."
    },
    {
      id: "q-ni-05",
      question: "¿Qué norma ISO trata los riesgos psicosociales en el trabajo?",
      options: [
        "ISO 45001:2018",
        "ISO 45003:2021",
        "ISO 14001:2015",
        "ISO 31000:2018"
      ],
      correct: 1,
      explanation: "ISO 45003:2021 es la primera norma ISO sobre salud psicológica y seguridad en el trabajo."
    },
    {
      id: "q-ni-06",
      question: "¿Qué cláusula de ISO 45001 trata la evaluación del desempeño?",
      options: [
        "Cláusula 6",
        "Cláusula 7",
        "Cláusula 8",
        "Cláusula 9"
      ],
      correct: 3,
      explanation: "La Cláusula 9 de ISO 45001 trata la evaluación del desempeño, incluyendo el seguimiento, la medición y las auditorías internas."
    },
    {
      id: "q-ni-07",
      question: "¿Qué documentos obligatorios exige ISO 45001:2018?",
      options: [
        "Solo el manual de calidad",
        "Alcance, política, objetivos, evidencia de planeación",
        "Solo registros de auditoría",
        "Ninguno, es opcional"
      ],
      correct: 1,
      explanation: "ISO 45001 requiere: alcance del sistema, política de SST, objetivos, y evidencia de la planificación (evaluación de riesgos y oportunidades)."
    },
    {
      id: "q-ni-08",
      question: "¿Cada cuánto tiempo se recomienda realizar auditorías internas según ISO 45001?",
      options: [
        "Cada 6 meses",
        "Anualmente como mínimo",
        "Cada 2 años",
        "No hay periodicidad mínima"
      ],
      correct: 3,
      explanation: "ISO 45001 no establece una periodicidad mínima, pero se recomienda al menos una auditoría anual para mantener la certificación."
    }
  ],
  "homologacion": [
    {
      id: "q-ho-01",
      question: "¿Qué es la Apostilla de La Haya?",
      options: [
        "Un documento de identidad",
        "Un sello que valida documentos públicos extranjeros",
        "Un certificado de idioma",
        "Un seguro médico"
      ],
      correct: 1,
      explanation: "La Apostilla de La Haya es un sello internacional que valida documentos públicos para que sean reconocidos en otros países."
    },
    {
      id: "q-ho-02",
      question: "¿Dónde se solicita la homologación de títulos extranjeros en España?",
      options: [
        "En el ayuntamiento",
        "En el Ministerio de Educación y Formación Profesional",
        "En la Seguridad Social",
        "En el Colegio de Técnicos"
      ],
      correct: 1,
      explanation: "La homologación se gestiona ante el Ministerio de Educación y Formación Profesional de España."
    },
    {
      id: "q-ho-03",
      question: "¿Cuánto puede tardar el proceso de homologación?",
      options: [
        "1-2 semanas",
        "1-3 meses",
        "3-12 meses",
        "Más de 2 años"
      ],
      correct: 2,
      explanation: "El proceso de homologación puede tardar entre 3 y 12 meses dependiendo de la carga de trabajo del Ministerio."
    },
    {
      id: "q-ho-04",
      question: "¿Qué documentos son imprescindibles para la homologación?",
      options: [
        "Solo el título",
        "Título apostillado + analítico + pasaporte + tasa",
        "Solo el analítico",
        "Título + seguro médico"
      ],
      correct: 1,
      explanation: "Se necesita: título original apostillado, analítico/plan de estudios, pasaporte o DNI, y pago de la tasa correspondiente."
    },
    {
      id: "q-ho-05",
      question: "¿Qué es el CNAE en el contexto de homologación?",
      options: [
        "Un colegio profesional",
        "La Clasificación Nacional de Títulos Académicos",
        "Un seguro de trabajo",
        "Un curso de formación"
      ],
      correct: 1,
      explanation: "El CNAE (Clasificación Nacional de Áreas de Empleo) permite verificar si tu título tiene equivalencia en España."
    }
  ],
  "idioma": [
    {
      id: "q-id-01",
      question: "¿Cómo se dice 'extintor' en español peninsular?",
      options: [
        "Matafuegos",
        "Extintor",
        "Bombero",
        "Inhibidor"
      ],
      correct: 1,
      explanation: "En España se dice 'extintor'. 'Matafuegos' es término argentino."
    },
    {
      id: "q-id-02",
      question: "¿Cómo se dice 'prevención de riesgos laborales' en catalán?",
      options: [
        "Prevención de riesgos laborales",
        "Prevenció de Riscos Laborals",
        "Seguridad del trabajo",
        "Protección del trabajador"
      ],
      correct: 1,
      explanation: "En catalán: 'Prevenció de Riscos Laborals'. La terminología técnica catalana es muy similar a la española."
    },
    {
      id: "q-id-03",
      question: "¿Qué nivel de catalán se necesita para trabajar en Cataluña?",
      options: [
        "A1 mínimo",
        "A2 mínimo",
        "B1 recomendado",
        "Depende del puesto"
      ],
      correct: 3,
      explanation: "El requisito varía según el puesto. Para empleo público se suele requerir B1. En empresas privadas puede no ser obligatorio."
    },
    {
      id: "q-id-04",
      question: "¿Cómo se dice 'permiso de trabajo' en catalán?",
      options: [
        "Permís de treball",
        "Autorització de seguretat",
        "Llicència de treball",
        "Permis de seguretat"
      ],
      correct: 0,
      explanation: "La traducción directa es 'permís de treball', muy utilizada en empresas catalanas."
    }
  ]
};

const COMUNIDADES_PRL = [
  {
    id: "com-01",
    name: "INSST - Instituto Nacional de Seguridad y Salud en el Trabajo",
    type: "Institución oficial",
    url: "https://www.insst.es",
    description: "Organismo público encargado de la promoción de la seguridad y salud en el trabajo. Guías, formación, estadísticas."
  },
  {
    id: "com-02",
    name: "SEOPAN - Sociedad Española de Prevención de Riesgos Laborales",
    type: "Asociación profesional",
    url: "https://www.seopan.es",
    description: "Asociación de profesionales y empresas de PRL. Formación, eventos, empleo."
  },
  {
    id: "com-03",
    name: "Foro de Prevención de Riesgos Laborales",
    type: "Foro online",
    url: "https://www.foroprl.com",
    description: "Comunidad de profesionales de PRL. Debates, consultas, intercambio de experiencias."
  },
  {
    id: "com-04",
    name: "LinkedIn - Grupo PRL España",
    type: "Red social",
    url: "https://www.linkedin.com/groups/",
    description: "Grupos de LinkedIn dedicados a profesionales de PRL en España. Networking y ofertas de empleo."
  },
  {
    id: "com-05",
    name: "Colegios de Técnicos de PRL",
    type: "Colegio profesional",
    url: "https://www.colegiotecnicosprl.com",
    description: "Colegios oficiales de Técnicos Superiores en PRL por comunidades autónomas."
  },
  {
    id: "com-06",
    name: "Portal de Empleo PRL",
    type: "Portal de empleo",
    url: "https://www.infojobs.net",
    description: "Portal de empleo con miles de ofertas de puestos de técnico de PRL en toda España."
  },
  {
    id: "com-07",
    name: "Prevencionar - Comunidad PRL",
    type: "Comunidad online",
    url: "https://www.prevencionar.com",
    description: "Portal de noticias, artículos y recursos sobre PRL en España."
  },
  {
    id: "com-08",
    name: "Facebook - Grupos de PRL España",
    type: "Red social",
    url: "https://www.facebook.com/groups/",
    description: "Grupos de Facebook donde profesionales de PRL comparten experiencias y consultas."
  },
  {
    id: "com-09",
    name: "Reddit r/prevencionriesgos",
    type: "Foro online",
    url: "https://www.reddit.com/r/prevencionriesgos/",
    description: "Comunidad en Reddit sobre prevención de riesgos laborales en español."
  },
  {
    id: "com-10",
    name: "AEMET - Agencia de Meteorología",
    type: "Institución oficial",
    url: "https://www.aemet.es",
    description: "Información meteorológica relevante para trabajos al aire libre y emergencias."
  }
];

const MERCADO_LABORAL = {
  sueldos: [
    { position: "Técnico Superior PRL (junior)", salary: "18.000 - 24.000 EUR/año", note: "0-2 años de experiencia" },
    { position: "Técnico Superior PRL (con experiencia)", salary: "24.000 - 32.000 EUR/año", note: "2-5 años de experiencia" },
    { position: "Técnico Superior PRL (senior)", salary: "32.000 - 42.000 EUR/año", note: "Más de 5 años" },
    { position: "Especialista en Higiene Industrial", salary: "28.000 - 38.000 EUR/año", note: "Perfiles especializados" },
    { position: "Especialista en Ergonomía", salary: "26.000 - 36.000 EUR/año", note: "Perfiles especializados" },
    { position: "Coordinador de Seguridad", salary: "30.000 - 45.000 EUR/año", note: "Puestos de responsabilidad" },
    { position: "Consultor de PRL", salary: "28.000 - 40.000 EUR/año", note: "Empresas de servicios de prevención" }
  ],
  comunidades: [
    { name: "Madrid", demand: "Muy alta", companies: "Muchas empresas de servicios de prevención, grandes corporaciones", note: "Mayor concentración de ofertas" },
    { name: "Barcelona", demand: "Alta", companies: "Industria farmacéutica, alimentaria, tecnología", note: "Mercado activo, catalán valorado" },
    { name: "Valencia", demand: "Media-Alta", companies: "Industria alimentaria, construcción, química", note: "Buen mercado, menor coste de vida" },
    { name: "País Vasco", demand: "Alta", companies: "Industria pesada, naval, energía", note: "Sector industrial fuerte" },
    { name: "Sevilla", demand: "Media", companies: "Aeronáutica, construcción, servicios", note: "Creciente demanda" },
    { name: "Málaga", demand: "Media", companies: "Turismo, construcción, tecnología", note: "Mercado emergente" },
    { name: "Zaragoza", demand: "Media", companies: "Logística, automoción, alimentaria", note: "Buen equilibrio oferta-demanda" }
  ],
  sectores: [
    { sector: "Construcción", demand: "Alta", note: "Siempre necesita técnicos de PRL" },
    { sector: "Industria alimentaria", demand: "Alta", note: "Requiere conocimientos de higiene y saneamiento" },
    { sector: "Industria química", demand: "Alta", note: "Especialistas en agentes químicos" },
    { sector: "Servicios de prevención", demand: "Muy alta", note: "Empresas que ofrecen servicios externos de PRL" },
    { sector: "Administración pública", demand: "Media", note: "Puestos en ayuntamientos, diputaciones" },
    { sector: "Energía y minas", demand: "Media-Alta", note: "Sector regulado con alta demanda" },
    { sector: "Sanidad", demand: "Media", note: "Hospitales, centros de salud" },
    { sector: "Hostelería", demand: "Media", note: "Específico para grandes empresas" }
  ],
  requisitos: [
    "Título homologado de Técnico Superior en PRL (o equivalente)",
    "NIE (Número de Identidad de Extranjero) en regla",
    "Español peninsular con vocabulario técnico de PRL (obligatorio para trabajar)",
    "Catalán básico-intermedio (imprescindible en Cataluña, muy valorado en Baleares y Valencia)",
    "Experiencia previa (valorada pero no siempre obligatoria)",
    "Formación complementaria: módulos específicos según la comunidad",
    "Seguro de responsabilidad civil (si trabajás como autónomo)"
  ],
  consejos: [
    "🇪🇸 ESPAÑOL PENINSULAR: No es solo hablar español, es hablar como hablan ellos. Decí 'vosotros' (no 'ustedes'), 'coche' (no 'auto'), 'movil' (no 'celular'), 'ordenador' (no 'computadora'). Si no suenas natural, te descartan rápido.",
    "🗣️ VOCABULARIO TÉCNICO: 'Matafuegos' = 'extintores'. 'Guardapolvo' = 'mono de trabajo'. 'Artefacto' = 'dispositivo'. 'Picana' = 'pistola de tensión'. Si no conocés estos términos, no podés comunicarte en una empresa española.",
    "🗣️ PRONUNCIACIÓN: Los españoles pronuncian la 'c' y la 'z' como 'th' (ceceo). No te confundas: 'cocer' (hervir) y 'coger' (agarrar) significan cosas MUY diferentes en España. 'Coger' no es vulgar allá.",
    "🗣️ EXPRESIONES DEL DÍA A DÍA: '¡Vale!' = OK/De acuerdo. 'Mola' = Me gusta. 'Tiene pinta' = Tiene buena pinta. 'Currar' = Trabajar. 'El curro' = El trabajo. Si no las usás, parecés un turista.",
    "🗣️ CATALÁN OBLIGATORIO EN CATALUÑA: En Barcelona, muchas empresas REQUIEREN catalán. No necesitás ser perfecto, pero sí entender las señales de seguridad, las reuniones del Comité de Seguridad, y hablar con los trabajadores. Empezá con Duolingo catalán HOY.",
    "🗣️ CATALÁN PARA PRL: Aprendé estas frases PRIMERO: 'Perill!' (¡Peligro!), 'No passar' (No pasar), 'On és la sortida?' (¿Dónde está la salida?), 'Truqueu al 112!' (¡Llamad al 112!), 'Cal posar-se l'EPI' (Hay que ponerse el EPI).",
    "🗣️ NO SUENES COMO DE 1950: Los españoles jóvenes no hablan como los abuelos. Usá 'tío/tía' (amigo), 'guay' (genial), 'flipar' (sorprenderse), 'mazo' (mucho). Pero en un contexto profesional, usá un tono formal-cercano.",
    "🗣️ ESCRIBÍ BIEN: En España se usa mucho el subjuntivo. 'Es importante que SE HAGA' (no 'que se haga'). 'Es necesario que SE CUMPLA'. Si escribís incorrectamente en un informe, perdés credibilidad como profesional.",
    "💼 EMPRENDÉ DESDE CERO: Si tu título tarda en homologarse, podés empezar como autónomo (freelance) haciendo consultoría de PRL. Necesitás el NIE y darte de alta en autónomos. Muchos técnicos argentinos empezaron así.",
    "💼 SERVICIOS DE PREVENCIÓN: Son la puerta de entrada más fácil. Hay cientos de empresas pequeñas que necesitan técnicos. No busques en grandes corporaciones al principio. Andá a una empresa de servicios de prevención, ganá experiencia local, y después escala.",
    "💼 LINKEDIN EN ESPAÑOL: Tu perfil tiene que estar en español peninsular. Poné 'Técnico Superior en Prevención de Riesgos Laborales' (no 'Técnico en Seguridad e Higiene'). Usá las palabras clave que usan ellos: 'PRL', 'evaluación de riesgos', 'plan de prevención'.",
    "💼 CERTIFICADOS DE PROFESIONALIDAD: Son cursos oficiales del SEPE que te dan un certificado reconocido por el Estado. Los más valorados son: 'Prevención de Riesgos Laborales', 'Trabajo en Altura', 'Espacios Confinados'. Hacelos online, son baratos.",
    "🎯 DÓNDE BUSCAR EMPLEO: InfoJobs.net (el más grande), Indeed España, LinkedIn, y las páginas de los sindicatos (UGT, CCOO). También llamá directamente a las empresas de servicios de prevención de tu zona.",
    "🎯 A DONDE IR: Madrid y Barcelona tienen más ofertas, pero también más competencia. Valencia, País Vasco y Sevilla tienen buen mercado con menos competencia. Si aprendés catalán, Barcelona es tu ciudad."
  ]
};
