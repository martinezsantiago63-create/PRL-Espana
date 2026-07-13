const NORMATIVA_EXTRA = {
  realesDecretos: [
    {
      id: "rd-216-2004",
      title: "RD 216/2004 - Atmósferas Explosivas",
      type: "real-decreto",
      status: "obligatoria",
      summary: "Si en tu centro de trabajo hay gases, vapores o polvos que pueden formar mezclas explosivas (ATEX), este RD es la norma. En saneamiento se aplica cuando trabajás en pozos con gases metano o sulfuro de hidrógeno.",
      keyPoints: [
        "Zonas ATEX: clasificar los espacios donde hay riesgo de explosión (Zona 0, 1, 2 para gases; Zona 20, 21, 21 para polvos)",
        "Equipos ATEX: todos los equipos eléctricos y mecánicos en zonas clasificadas DEBEN ser aptos ATEX",
        "Señalización obligatoria de zonas de riesgo de explosión",
        "Evaluación de riesgos específica para atmósferas explosivas",
        "Plan de emergencia ante explosión",
        "Formación de trabajadores en riesgo ATEX",
        "Medidas de prevención: ventilación, inertización, equipos intrínsecamente seguros"
      ],
      relations: ["Complementa el RD 374/2001 (agentes químicos)", "Muy relevante en pozos de saneamiento con gases"],
      usefulLinks: [
        { text: "Texto completo - BOE (RD 216/2004)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2004-3300" }
      ],
      comoLoUso: "Cuando entrás a un pozo de saneamiento, el metano (CH₄) y el sulfuro de hidrógeno (H₂S) pueden formar mezclas explosivas. Vos medís las concentraciones con gasómetro, clasificás la zona ATEX, y te asegurás de que TODOS los equipos (herramientas, lámparas, ventilación) sean aptos para esa zona. Si ves una herramienta común dentro de un pozo clasificado, eso es una infracción GRAVE."
    },
    {
      id: "rd-1299-2006",
      title: "RD 1299/2006 - Riesgos Higiénicos",
      type: "real-decreto",
      status: "obligatoria",
      summary: "Protección contra los 6 agentes higiénicos: ruido, vibraciones, campos electromagnéticos, radiaciones ionizantes, radiaciones ópticas y fibras artificiales. En saneamiento: ruido y vibraciones son los más comunes.",
      keyPoints: [
        "Ruido: VLE = 87 dB(A). Acción inferior: 80 dB(A). Acción superior: 85 dB(A)",
        "Vibraciones mano-brazo: valor límite 2,5 m/s²",
        "Vibraciones de cuerpo entero: valor límite 1,15 m/s²",
        "Evaluación obligatoria de exposición a cada agente",
        "Equipos de medición homologados para medir niveles",
        "Vigilancia de la salud específica por agente",
        "Medidas de eliminación o reducción en origen"
      ],
      relations: ["Complementa el RD 486/1997 (lugares de trabajo)", "Relacionado con RD 39/1997"],
      usefulLinks: [
        { text: "Texto completo - BOE (RD 1299/2006)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-22486" }
      ],
      comoLoUso: "En saneamiento, el ruido de bombas, compresores y herramientas neumáticas es constante. Vos medís los niveles con sonómetro, calculás la dosis de exposición diaria, y si supera los 80 dB(A) tenés que poner silenciadores, dar protectores auditivos y hacer vigilancia de la salud. Las vibraciones de herramientas como taladros o compactadores también hay que medir y controlar."
    },
    {
      id: "rd-393-2007",
      title: "RD 393/2007 - SPAI (Planes de Autoprotección)",
      type: "real-decreto",
      status: "obligatoria",
      summary: "Sistema de Protección Civil y Atención de Emergencias. Regula los planes de autoprotección que grandes empresas e instalaciones DEBEN tener. No es solo prevención: es prepararse para cuando todo falle.",
      keyPoints: [
        "¿Quién lo necesita? Empresas con +500 trabajadores, instalaciones industriales, centros comerciales, hospitales",
        "Plan de autoprotección: documento con protocolos ante emergencias",
        "Equipos de emergencia interna: brigadas de evacuación, primeros auxilios, lucha contra incendios",
        "Simulacros obligatorios periódicos (mínimo 1 al año)",
        "Coordinación con servicios de emergencia externos (bomberos, policía)",
        "Clasificación de emergencias: nivel 1 (interno), nivel 2 (exterior), nivel 3 (catástrofe)"
      ],
      relations: ["Complementa los planes de emergencia del RD 39/1997", "Coordinación con bomberos y emergencias"],
      usefulLinks: [
        { text: "Texto completo - BOE (RD 393/2007)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-20521" }
      ],
      comoLoUso: "Cuando una empresa grande te pida que le hagas el plan de emergencia, vos tenés que seguir este RD. Identificás los riesgos específicos (incendio, derrame químico, explosión, etc.), armás los protocolos de actuación, designás las brigadas, hacés los simulacros, y coordinás con bomberos. En saneamiento, las plantas de tratamiento de aguas residuales suelen necesitar esto."
    },
    {
      id: "rd-299-2006",
      title: "RD 299/2006 - Equipos de Trabajo (modificaciones)",
      type: "real-decreto",
      status: "complementaria",
      summary: "Modifica y actualiza el RD 1215/1997 sobre equipos de trabajo. Incluye nuevas exigencias de mantenimiento, inspección y marcado CE. Si conocés el RD 1215, este lo complementa.",
      keyPoints: [
        "Mantenimiento preventivo según instrucciones del fabricante (obligatorio)",
        "Inspecciones periódicas obligatorias antes de cada uso y según calendario",
        "Marcado CE y declaración de conformidad del fabricante",
        "Formación específica para cada tipo de equipo",
        " registro de inspecciones y mantenimiento",
        "Retiro de servicio de equipos que no cumplan"
      ],
      relations: ["Modifica y amplía el RD 1215/1997"],
      usefulLinks: [
        { text: "Texto completo - BOE (RD 299/2006)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-21467" }
      ],
      comoLoUso: "Vos como técnico revisás que cada equipo de trabajo (grúa, andamio, montacargas, taladro) tenga: 1) Mantenimiento al día según el fabricante, 2) Inspección periódica documentada, 3) Marcado CE visible, 4) Operario con formación. Si ves un andamio sin inspección o un montacargas sin carné de operador, lo parás."
    },
    {
      id: "rd-1620-2011",
      title: "RD 1620/2011 - Olas de Calor",
      type: "real-decreto",
      status: "complementaria",
      summary: "Protocolo de actuación ante olas de calor. Si trabajás al aire libre en verano (obras, saneamiento exterior), esto te protege. Especialmente relevante en el sur de España.",
      keyPoints: [
        "Aviso preventivo: T > 37°C previsible → medidas preventivas",
        "Aviso de ola de calor: 3 días seguidos T máxima > 40°C (litoral) o > 39°C (interior)",
        "Obligaciones del empresario: agua, sombra, descansos, vigilancia sanitaria",
        "Horario de trabajo reducido en horas de máximo calor (12:30-16:30 recomendado)",
        "Vigilancia de trabajadores especialmente sensibles",
        "Protocolo de actuación ante golpe de calor"
      ],
      relations: ["Complementa el RD 486/1997 (condiciones de trabajo)", "Condiciones climáticas"],
      usefulLinks: [
        { text: "Texto completo - BOE (RD 1620/2011)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2011-14798" }
      ],
      comoLoUso: "En verano, cuando trabajás en saneamiento exterior (alcantarillas, inspecciones, obras), el calor es un riesgo REAL. Vos tenés que: programar las salidas en horas frescas (mañana temprano o tarde), llevar agua constante, hacer descansos cada 45 min, y vigilar a los compañeros por si tienen síntomas de golpe de calor (mareo, náusea, piel caliente). Si alguien se desmaya, SOS tú quien activa el protocolo."
    },
    {
      id: "rd-840-2003",
      title: "RD 840/2003 - Riesgos Eléctricos",
      type: "real-decreto",
      status: "obligatoria",
      summary: "Medidas de seguridad en trabajos con riesgo eléctrico. Si trabajás cerca de instalaciones eléctricas (y en saneamiento siempre hay cables cerca), conocé estas normas.",
      keyPoints: [
        "Distancias de seguridad: 0,5m si < 1kV; mayor si > 1kV",
        "Trabajos en instalaciones desenergizadas: protocolo de bloqueo y etiquetado (LOTO)",
        "Trabajos en instalaciones energizadas: solo con autorización y EPIs especiales",
        "Tierra provisional obligatoria antes de trabajar",
        "Señalización del área de trabajo",
        "Personal habilitado: solo electricistas titulados para trabajos activos"
      ],
      relations: ["Complementa el RD 1215/1997 y el RD 374/2001"],
      usefulLinks: [
        { text: "Texto completo - BOE (RD 840/2003)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-14228" }
      ],
      comoLoUso: "Cuando hacés saneamiento en zonas con instalaciones eléctricas (pasillos de cables, subestaciones, naves industriales), siempre verificás: ¿hay cables expuestos? ¿La instalación está desenergizada? ¿Se hizo el bloqueo y etiquetado? Si no sabés si está vivo o muerto, NO TOCÁS. Llamás al electricista. Vos evaluás el riesgo eléctrico como parte de tu evaluación general."
    }
  ],
  catalunya: [
    {
      id: "ley-5-2007-cat",
      title: "Ley 5/2007 de Prevención de Riesgos Laborales (Cataluña)",
      type: "ley-autonomica",
      status: "obligatoria-catalunya",
      summary: "La ley de PRL específica de Cataluña. Adaptación de la Ley 31/1995 al contexto catalán. Si trabajás en Barcelona o cualquier pueblo catalán, esta ley ES OBLIGATORIA además de la estatal.",
      keyPoints: [
        "Creación del Instituto Catalán de Seguridad y Salud en el Trabajo (ICSST/ISPAL)",
        "Pirámide preventiva catalana: empresas, mutuas, administración catalana",
        "Coordinación entre administración central y autonómica",
        "Planes de prevención adaptados al contexto catalán",
        "Inspección de trabajo: competencia compartida con el Estado",
        "Formación en catalán para trabajadores (importante)"
      ],
      relations: ["Complementa la Ley 31/1995 a nivel autonómico", "Obligatoria si trabajás en Cataluña"],
      usefulLinks: [
        { text: "Texto completo (Ley 5/2007 - Generalitat de Catalunya)", url: "https://dogc.gencat.cat/ca/pdogc_usuari/pdues_llistat/index.html" }
      ],
      comoLoUso: "Si vas a trabajar en Barcelona, TENÉS que conocer esta ley. La diferencia principal es que Cataluña tiene su propio servicio de inspección y sus propias guías prácticas. Además, muchos documentos internos de empresas en Cataluña deben estar en catalán. Si la empresa no tiene plan de prevención adaptado a la normativa catalana, eso es una infracción."
    },
    {
      id: "decret-183-2006-cat",
      title: "Decret 183/2006 - Coordinación en Obras (Cataluña)",
      type: "decreto-autonomico",
      status: "obligatoria-catalunya",
      summary: "Desarrollo del Plan de Seguridad y Salud en obras de construcción en Cataluña. Si hacés saneamiento en obras catalanas, este decreto te aplica.",
      keyPoints: [
        "Coordinador de seguridad y salud obligatorio en obras > 30 días y > 500m²",
        "Plan de seguridad y salud específico para cada obra",
        "Notificación a la autoridad laboral catalana antes de iniciar obras",
        "Trabajos especiales: espacios confinados, altura, excavaciones en Cataluña",
        "Coordinación entre empresas contratistas y subcontratistas",
        "Control documental en catalán y castellano"
      ],
      relations: ["Versión catalana del RD 1627/1997 (coordinación en obras)"],
      usefulLinks: [
        { text: "Decret 183/2006 (DOGC)", url: "https://dogc.gencat.cat" }
      ],
      comoLoUso: "Si te contratan para hacer saneamiento en una obra en Cataluña, el coordinador de seguridad te va a pedir que cumplas con este decreto. Tus evaluaciones de riesgo y planes de emergencia deben seguir la normativa catalana además de la estatal. Siempre consultá con el coordinador local."
    },
    {
      id: "decret-62-2010-cat",
      title: "Decret 62/2010 - Servicios de Prevención (Cataluña)",
      type: "decreto-autonomico",
      status: "obligatoria-catalunya",
      summary: "Organización de los servicios de prevención de riesgos laborales en Cataluña. Define cómo se organizan las Mutuas, los Servicios de Prevención Ajenos (SPA) y los Servicios de Prevención Propios en territorio catalán.",
      keyPoints: [
        "Registro de empresas de prevención en Cataluña",
        "Coordinación entre Mutua y servicios de prevención",
        "Inspección y vigilancia por parte de la autoridad laboral catalana",
        "Formación específica para técnicos de PRL en Cataluña",
        "Certificados de profesionalidad reconocidos en Cataluña"
      ],
      relations: ["Complementa el RD 39/1997 a nivel catalán"],
      usefulLinks: [
        { text: "Decret 62/2010 (DOGC)", url: "https://dogc.gencat.cat" }
      ],
      comoLoUso: "Cuando te homologuen el título y quieras trabajar en Cataluña, vas a necesitarte registrar ante la autoridad laboral catalana. Este decreto te dice cómo hacerlo. Además, si trabajás como técnico de PRL para una empresa catalana, debés saber que la coordinación con servicios de prevención se hace a través de estos organismos."
    },
    {
      id: "resol-1730-2018-cat",
      title: "Resolución 1730/2018 - Formación en PRL (Cataluña)",
      type: "resolucion-autonomica",
      status: "informativa",
      summary: "Baremos de formación y capacitación profesional de los técnicos de prevención en Cataluña. Define qué formación necesitás para ejercer como técnico de PRL en Cataluña.",
      keyPoints: [
        "Niveles de formación: Básico, Intermedio, Superior",
        "Especialidades: Higiene Industrial, Seguridad en el Trabajo, Ergonomía, Medicina del Trabajo",
        "Certificados de profesionalidad del SEPE + reconocimiento catalán",
        "Cursos específicos para cada especialidad",
        "Actualización y formación continua obligatoria"
      ],
      relations: ["Información clave para la homologación del título"],
      usefulLinks: [
        { text: "Resolución 1730/2018 (DOGC)", url: "https://dogc.gencat.cat" }
      ],
      comoLoUso: "ESTO es lo que necesitás para saber qué título homologar y qué formación adicional necesitás en Cataluña. Si tu título argentino de técnico en saneamiento y seguridad industrial se homologa como nivel intermedio, vas a poder ejercer como técnico de PRL. Consultá con el SEPE catalán para saber exactamente qué documentos necesitás."
    }
  ],
  saneamiento: [
    {
      id: "guia-saneamiento-industrial",
      title: "Guía de Saneamiento Industrial - INSST",
      type: "guia-sectorial",
      status: "recomendada",
      summary: "Guía específica para el sector de saneamiento industrial. Cubre riesgos, prevención y buenas prácticas para trabajos de limpieza, desinfección, desratización y mantenimiento en instalaciones industriales.",
      keyPoints: [
        "Riesgos específicos del saneamiento: químicos, biológicos, confinados, altura",
        "EPIs específicos para saneamiento: guantes químicos, mascarillas, trajes, arneses",
        "Procedimientos de trabajo seguro para cada tipo de intervención",
        "Protocolos de limpieza y desinfección de instalaciones",
        "Gestión de residuos de saneamiento",
        "Inspecciones y auditorías de instalaciones de saneamiento"
      ],
      relations: ["Aplicación directa de todas las normativas de PRL al sector"],
      comoLoUso: "Esta guía es tu manual práctico. Cada vez que vayas a hacer un trabajo de saneamiento, consultá la guía para el procedimiento seguro. Por ejemplo: antes de limpiar un tanque de aguas residuales, la guía te dice: 1) evaluar riesgos del espacio confinado, 2) medir gases, 3) ventilación, 4) EPIs, 5) permiso de trabajo, 6) persona de vigilancia."
    },
    {
      id: "procedimientos-saneamiento",
      title: "Procedimientos de Trabajo Seguro en Saneamiento",
      type: "procedimiento",
      status: "fundamental",
      summary: "Protocolos paso a paso para cada tipo de trabajo de saneamiento: limpieza de pozos, inspección de tuberías, desratización, limpieza de tanques, mantenimiento de plantas de tratamiento.",
      keyPoints: [
        "POZO DE VISITA: permiso + medición gases + ventilación + EPIs + vigilancia",
        "INSPECCIÓN DE TUBERÍAS: cámara de tránsito + permiso + equipo de rescate",
        "DESRATIZACIÓN: EPIs químicos + biológicos + control de plaguicidas",
        "LIMPIEZA DE TANQUES: espacio confinado + permiso + ventilación forzada",
        "PLANTA DE TRATAMIENTO: ruido + químicos + biológicos + maquinaria",
        "EMERGENCIAS: protocolo de actuación ante derrames, incendios, accidentes"
      ],
      relations: ["Aplicación directa del RD 604/2006, RD 374/2001, RD 664/1997"],
      comoLoUso: "ESTOS son tus procedimientos de trabajo. Cada tipo de intervención tiene su protocolo. Siempre seguís el mismo esquema: evaluar → planificar → permisos → medios → ejecutar → supervisar. Nunca te saltes un paso, aunque sea 'rápido'."
    }
  ]
};
