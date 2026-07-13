const CONTENIDO_CATALUNYA = {
  "ley-5-2007-cat": {
    titulo: "Ley 5/2007 de Prevención de Riesgos Laborales en Cataluña",
    tipo: "ley-autonomica",
    resumenLargo: "La ley de PRL específica de Cataluña. Transpone y adapta la Directiva 89/391/CEE y la Ley 31/1995 al contexto autonómico catalán. Si trabajás en Barcelona, Girona, Lleida o Tarragona, esta ley ES OBLIGATORIA además de la estatal. Cataluña tiene su propia administración de PRL con competencias transferidas.",
    queRegula: [
      "Organización de la prevención en Cataluña: ICSST (Institut Català de Seguretat i Salut en el Treball)",
      "Competencias transferidas del Estado a Cataluña en materia de PRL",
      "Coordinación entre inspección laboral estatal y autonómica",
      "Formación y homologación de técnicos de PRL en Cataluña",
      "Documentación en catalán para empresas con centro de trabajo en Cataluña",
      "Planes de prevención adaptados a la normativa catalana"
    ],
    organismoCompetente: {
      nombre: "Institut Català de Seguretat i Salut en el Treball (ICSST)",
      funciones: [
        "Inspección de trabajo en Cataluña (junto con la Inspección Estatal)",
        "Registro de empresas de prevención en Cataluña",
        "Emisión de guías prácticas de PRL en catalán",
        "Formación de técnicos de prevención",
        "Coordinación con mutuas y servicios de prevención"
      ]
    },
    diferenciasConNormativaEstatal: [
      {
        aspecto: "Documentación",
        estado: "Castellano (o castellano + catalán)",
        catalunya: "DEBE incluir versión en catalán si el centro de trabajo está en Cataluña"
      },
      {
        aspecto: "Formación de trabajadores",
        estado: "En castellano o lengua cooficial",
        catalunya: "DEBE ofrecerse en catalán si el trabajador lo solicita"
      },
      {
        aspecto: "Inspección",
        estado: "Inspección de Trabajo y Seguridad Social",
        catalunya: "Inspección Estatal + Inspección Catalana (coordinadas)"
      },
      {
        aspecto: "Planes de prevención",
        estado: "Según RD 39/1997",
        catalunya: "Además, deben cumplir la normativa catalana específica"
      }
    ],
    documentosEnCatalan: [
      "Plan de Prevención (si el trabajador lo solicita)",
      "Evaluación de Riesgos",
      "Plan de Emergencia",
      "Informes de riesgos",
      "Registros de formación",
      "Protocolos de vigilancia de la salud"
    ],
    comoLoUso: `EJEMPLO PRÁCTICO: Te contratan como técnico de PRL para una empresa de saneamiento en Hospitalet de Llobregat (Barcelona). 200 trabajadores.

1. DOCUMENTACIÓN:
   - Todos los documentos de PRL DEBEN estar en catalán (o al menos a disposición del trabajador que lo solicite)
   - La evaluación de riesgos que hagas debe seguir la normativa catalana además de la estatal

2. FORMACIÓN:
   - Los cursos de formación de trabajadores deben ofrecerse en catalán si alguien lo pide
   - Los certificados de formación deben valer en toda España

3. INSPECCIÓN:
   - Si viene un inspector catalán, vas a tener que mostrar documentos en catalán
   - Si viene un inspector estatal, acepta castellano

4. HOMOLOGACIÓN DE TU TÍTULO:
   - Tu título argentino se homologa ante el Ministerio de Educación (estatal)
   - Pero para ejercer en Cataluña, es recomendable registrar tu habilitación ante el ICSST
   - Consultá con el SEPE catalán para saber los pasos exactos

5. TRABAJO DIARIO:
   - Las evaluaciones de riesgos que hagas deben seguir el mismo método que en el resto de España
   - Pero los documentos finales DEBEN incluir versión en catalán
   - Las señales de seguridad pueden estar en catalán, castellano o ambos

IMPORTANTE: Si la empresa no tiene documentación en catalán, eso no es necesariamente una infraccióngrave, pero SÍ es una falta si algún trabajador la solicita y no se la dan.`,
    usefulLinks: [
      { text: "Generalitat de Catalunya - Prevención de Riesgos Laborales", url: "https://web.gencat.cat/ca/arees-treball/prevencio-dels-riesgos-laborals/" },
      { text: "DOGC - Diari Oficial de la Generalitat de Catalunya", url: "https://dogc.gencat.cat" }
    ]
  },
  "decret-183-2006-cat": {
    titulo: "Decret 183/2006 - Coordinación de Actividades Preventivas en Obras (Cataluña)",
    tipo: "decreto-autonomico",
    resumenLargo: "Desarrollo del Plan de Seguridad y Salud en obras de construcción en Cataluña. Es la versión catalana del RD 1627/1997 pero con especificidades autonómicas. Si hacés saneamiento en una obra de construcción en Cataluña, este decreto te aplica directamente.",
    queRegula: [
      "Coordinador de seguridad y salud obligatorio en obras > 30 días y > 500m²",
      "Contenido mínimo del Plan de Seguridad y Salud",
      "Notificación a la autoridad laboral catalana antes de iniciar obras",
      "Trabajos especiales: espacios confinados, altura, excavaciones en Cataluña",
      "Coordinación entre empresas contratistas y subcontratistas",
      "Control documental en catalán y castellano"
    ],
    coordinadorSeguridad: {
      obligatorioEn: [
        "Obras con duración prevista > 30 días",
        "Obras con superficie > 500m²",
        "Obras con riesgo especial (espacios confinados, excavaciones, altura)"
      ],
      funciones: [
        "Elaborar el Plan de Seguridad y Salud",
        "Coordinar la aplicación de medidas preventivas entre empresas",
        "Verificar que se cumplen las normas de PRL en la obra",
        "Informar a los trabajadores sobre riesgos y medidas de protección",
        "Coordinar con la autoridad laboral catalana"
      ],
      requisitos: [
        "Técnico Superior en PRL (nivel mínimo)",
        "Registrado ante el ICSST catalán",
        "Experiencia específica en obras de construcción"
      ]
    },
    planSeguridadSalud: {
      contenido: [
        "Descripción de la obra y análisis de riesgos específicos",
        "Medidas preventivas y protectoras para cada fase de la obra",
        "Organización de la seguridad y salud en la obra",
        "Recursos materiales y humanos para la prevención",
        "Protocolos de emergencia y evacuación",
        "Formación de trabajadores en riesgos de la obra"
      ],
      obligaciones: [
        "Elaborado por el coordinador de seguridad y salud",
        "Aprobado por el empresario principal",
        "Depositado ante la autoridad laboral catalana",
        "Actualizado cuando cambien las condiciones de la obra",
        "Disponible en la obra en catalán y castellano"
      ]
    },
    notificacionAutoridad: [
      "Antes del inicio de la obra (mínimo 5 días hábiles)",
      "Formulario normalizado (disponible en el DOGC)",
      "Datos de: empresa principal, coordinador, empresas contratistas",
      "Descripción de la obra y duración prevista",
      "Medidas de prevención previstas"
    ],
    comoLoUso: `EJEMPLO PRÁCTICO: Te contratan para hacer trabajos de saneamiento en una obra nueva en Barcelona (sótano + planta baja). La obra dura 8 meses.

1. ANTES DE EMPEZAR:
   - Verificás si la obra tiene coordinador de seguridad y salud asignado
   - Si no lo tiene, informás al empresario que es OBLIGATORIO
   - Revisás el Plan de Seguridad y Salud (debe estar en catalán)

2. EN LA OBRA:
   - El coordinador de seguridad debe aprobar tus procedimientos de trabajo
   - Si trabajás en espacios confinados (sótano, pozos), necesitás permiso específico
   - Tus equipos de trabajo deben cumplir el RD 1215/1997 + RD 299/2006
   - Los EPIs deben ser CE y adecuados al riesgo

3. DOCUMENTACIÓN:
   - Evaluación de riesgos de tu actividad específica
   - Permisos de trabajo para espacios confinados
   - Registro de formación de tus trabajadores
   - Todo en catalán y castellano

4. COORDINACIÓN:
   - Si trabajás con otras empresas en la obra, coordinás horarios y zonas
   - El coordinador de seguridad es tu punto de contacto para resolver problemas
   - Si ves algo peligroso, informás AL COORDINADOR primero

5. EMERGENCIAS:
   - Conocés el plan de emergencia de la obra
   - Sabés dónde está el botiquín, extintores y ruta de evacuación
   - Participás en los simulacros obligatorios

IMPORTANTE: Si la obra no tiene coordinador de seguridad y vos sabés que lo necesita, lo reportás. Si no lo hacés y pasa algo, vos también tenés responsabilidad.`,
    usefulLinks: [
      { text: "Decret 183/2006 (DOGC)", url: "https://dogc.gencat.cat" },
      { text: "Guía de coordinación de actividades preventivas - INSST", url: "https://www.insst.es" }
    ]
  },
  "decret-62-2010-cat": {
    titulo: "Decret 62/2010 - Organización de Servicios de Prevención en Cataluña",
    tipo: "decreto-autonomico",
    resumenLargo: "Regula la organización y funcionamiento de los servicios de prevención de riesgos laborales en Cataluña. Define cómo se estructuran las Mutuas, los Servicios de Prevención Ajenos (SPA) y los Servicios de Prevención Propios en territorio catalán.",
    queRegula: [
      "Registro de empresas de prevención en Cataluña (mediante ICSST)",
      "Coordinación entre Mutua y servicios de prevención",
      "Inspección y vigilancia por la autoridad laboral catalana",
      "Formación específica para técnicos de PRL en Cataluña",
      "Certificados de profesionalidad reconocidos en Cataluña",
      "Habilitación de técnicos de prevención nivel intermedio y superior"
    ],
    nivelesFormacion: [
      {
        nivel: "Técnico Superior",
        titulo: "Grado en Prevención de Riesgos Laborales",
        competencias: [
          "Evaluar cualquier riesgo en cualquier tipo de empresa",
          "Diseñar y coordinar planes de prevención",
          "Dirigir auditorías de PRL",
          "Organizar servicios de prevención propios",
          "Especializaciones: Higiene Industrial, Seguridad, Ergonomía, Medicina del Trabajo"
        ],
        registro: "Registrado ante el ICSST + habilitación específica"
      },
      {
        nivel: "Técnico Medio",
        titulo: "Técnico Superior en Formación Profesional (rama de PRL)",
        competencias: [
          "Evaluar riesgos en empresas de riesgo bajo o medio",
          "Aplicar medidas preventivas bajo supervisión de técnico superior",
          "Formar trabajadores en riesgos específicos",
          "Realizar informes de evaluación de riesgos"
        ],
        registro: "Registrado ante el ICSST"
      }
    ],
    homologacionTitulosExtranjeros: [
      "Tu título argentino se homologa ante el Ministerio de Educación de España",
      "Una vez homologado, podés registrarlo ante el ICSST catalán",
      "El ICSST verifica que la formación sea equivalente a la catalana",
      "Si falta formación, te pueden pedir complementos formativos",
      "El proceso puede tardar 3-6 meses"
    ],
    comoLoUso: `EJEMPLO PRÁCTICO: Sos técnico de saneamiento argentino y querés trabajar en Barcelona. ¿Qué necesitás?

1. HOMOLOGACIÓN DEL TÍTULO:
   - Pedís la homologación al Ministerio de Educación de España
   - Necesitás: título apostillado, certificado de notas, DNI/pasaporte
   - Esperás la resolución (3-6 meses)

2. REGISTRO EN CATALUÑA:
   - Con el título homologado, te registrás ante el ICSST
   - Necesitás: título homologado, DNI/NIE, seguro de responsabilidad civil
   - Te dan tu número de habilitación catalán

3. BUSCAR TRABAJO:
   - Las empresas catalanas buscan técnicos de PRL registrados ante el ICSST
   - Podes trabajar en:
     - Servicio de Prevención Propio de una empresa
     - Servicio de Prevención Ajeno (SPA)
     - Como técnico independiente (autónomo)
   - Tu especialidad en saneamiento es MUY demandada en Barcelona

4. TRABAJO DIARIO:
   - Tus evaluaciones de riesgos deben seguir la metodología INSST
   - Los documentos finales deben estar en catalán (o a disposición)
   - Debes conocer la normativa catalana además de la estatal
   - Las empresas catalanas suelen pedir experiencia específica en saneamiento

5. VENTAJA COMPETITIVA:
   - Sos argentino + técnico en saneamiento + conocés catalán = PERFECTO para Barcelona
   - Barcelona tiene MUCHA industria alimentaria y saneamiento
   - Los salarios están por encima de la media española en este sector`,
    usefulLinks: [
      { text: "Decret 62/2010 (DOGC)", url: "https://dogc.gencat.cat" },
      { text: "ICSST - Registro de técnicos de prevención", url: "https://web.gencat.cat/ca/arees-treball/prevencio-dels-riesgos-laborals/inspeccio-i-assessorament/" }
    ]
  },
  "resol-1730-2018-cat": {
    titulo: "Resolución 1730/2018 - Baremos de Formación de Técnicos de PRL en Cataluña",
    tipo: "resolucion-autonomica",
    resumenLargo: "Establece los baremos de formación y capacitación profesional de los técnicos de prevención de riesgos laborales en Cataluña. Define qué formación necesitás para ejercer como técnico de PRL en territorio catalán, los niveles de habilitación y los reconocimientos mutuos con otras comunidades autónomas.",
    queRegula: [
      "Niveles de formación: Básico, Intermedio, Superior",
      "Especialidades: Higiene Industrial, Seguridad en el Trabajo, Ergonomía y Psicosociología, Medicina del Trabajo",
      "Certificados de profesionalidad del SEPE + reconocimiento catalán",
      "Cursos específicos para cada especialidad",
      "Actualización y formación continua obligatoria",
      "Reconocimiento de formación de otras comunidades autónomas"
    ],
    especialidades: [
      {
        especialidad: "Seguridad en el Trabajo",
        contenidos: [
          "Evaluación y prevención de riesgos laborales",
          "Seguridad en maquinaria y equipos de trabajo",
          "Seguridad contra incendios",
          "Seguridad en espacios confinados",
          "Seguridad en trabajos en altura",
          "Saneamiento e higiene industrial"
        ],
        horasMinimas: 300,
        salidaLaboral: "Técnico de PRL en empresas industriales, construction, saneamiento"
      },
      {
        especialidad: "Higiene Industrial",
        contenidos: [
          "Agentes físicos: ruido, vibraciones, radiaciones",
          "Agentes químicos: polvos, gases, vapores, humos",
          "Agentes biológicos",
          "Evaluación ambiental y exposición",
          "Medidas de prevención y protección",
          "Instrumentación de medición"
        ],
        horasMinimas: 400,
        salidaLaboral: "Especialista en higiene industrial, consultor, auditor"
      },
      {
        especialidad: "Ergonomía y Psicosociología",
        contenidos: [
          "Ergonomía física: posturas, movimientos, esfuerzos",
          "Ergonomía cognitiva: carga mental, toma de decisiones",
          "Psicosociología: estrés, acoso, clima laboral",
          "Diseño de puestos de trabajo",
          "Evaluación de riesgos psicosociales"
        ],
        horasMinimas: 400,
        salidaLaboral: "Especialista en ergonomía, consultor psicosocial"
      },
      {
        especialidad: "Medicina del Trabajo",
        contenidos: [
          "Vigilancia de la salud",
          "Patologías profesionales",
          "Adaptación del trabajador al puesto",
          "Prevención de riesgos laborales desde la medicina",
          "Emergencias y primeros auxilios"
        ],
        horasMinimas: 600,
        salidaLaboral: "Médico del trabajo, servido de prevención"
      }
    ],
    formacionContinua: [
      "Obligatoria para mantener la habilitación",
      "Mínimo 50 horas cada 5 años",
      "Cursos homologados por el ICSST",
      "Puede ser presencial o online (máx 30% online)",
      "Registro obligatorio en el ICSST"
    ],
    comoLoUso: `EJEMPLO PRÁCTICO: Tu título argentino de técnico en saneamiento y seguridad industrial. ¿Qué especialidad te corresponde en España?

1. ANÁLISIS DE TU TÍTULO:
   - Tu formación en saneamiento incluye: higiene industrial, seguridad en espacios confinados, agentes químicos, agentes biológicos
   - En España, esto se ajusta más a la especialidad de "Seguridad en el Trabajo" con mención en saneamiento

2. PROCESO DE HOMOLOGACIÓN:
   - El Ministerio de Educación compara tu formación con el plan de estudios español
   - Si son equivalentes, te homologan directo
   - Si faltan horas, te piden complementos formativos
   - Una vez homologado, podés registrarte en el ICSST catalán

3. ESPECIALIZACIÓN RECOMENDADA:
   - Si querés especializarte, la Higiene Industrial te da más salida laboral en saneamiento
   - Necesitarías hacer 400 horas de formación específica
   - Muchos centros de formación en Barcelona ofrecen esta especialización

4. FORMACIÓN CONTINUA:
   - Una vez registrado, DEBES hacer 50 horas cada 5 años
   - Cursos sobre: nuevas normativas, técnicas de evaluación, nuevos riesgos
   - Los cursos del INSST son válidos en Cataluña

5. VENTAJA:
   - Con tu experiencia argentina + título homologado + formación catalana = perfil MUY buscado
   - Barcelona tiene escasez de técnicos de PRL especializados en saneamiento
   - Los salarios están entre 28.000-42.000€ anuales según experiencia`,
    usefulLinks: [
      { text: "Resolución 1730/2018 (DOGC)", url: "https://dogc.gencat.cat" },
      { text: "SEPE - Certificados de profesionalidad", url: "https://www.sepe.es" },
      { text: "INSST - Formación en PRL", url: "https://www.insst.es" }
    ]
  }
};
