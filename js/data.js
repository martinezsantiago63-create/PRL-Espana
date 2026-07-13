const PRL_DATA = {
  sections: [
    {
      id: "marco-normativo",
      title: "Marco Normativo Español",
      icon: "\u2696\uFE0F",
      description: "Leyes, Reales Decretos y normativa fundamental de PRL en España",
      categories: [
        {
          id: "leyes-principales",
          title: "Leyes Principales",
          items: [
            {
              id: "ley-31-1995",
              title: "Ley 31/1995 de Prevención de Riesgos Laborales",
              type: "ley",
              status: "obligatoria",
              summary: "Es la LEY MADRE de todo. En Argentina equivale a la Ley 19.587 pero mucho más completa. Si tenés que estudiar UNA sola cosa, es esta.",
              keyPoints: [
                "Art. 14: El empresario DEBE garantizar la seguridad. Si no lo hace, multas graves.",
                "Art. 15: Principios preventivos - evitar riesgos, adaptar el trabajo a la persona, combatir en origen",
                "Art. 16: Evaluación de riesgos - VOS como técnico vas a hacer esto TODO EL DÍA",
                "Art. 19: Formación obligatoria de los trabajadores",
                "Art. 22: Vigilancia de la salud del trabajador",
                "Art. 23: Documentación obligatoria - evaluación, planificación, formación, emergencia",
                "Art. 35-40: Delegado de prevención y Comité de Seguridad y Salud",
                "Art. 44: Coordinación de empresas en obras de construcción"
              ],
              relations: ["rd-39-1997", "El RD 39/1997 te dice CÓMO aplicar esta ley en la práctica"],
              usefulLinks: [
                { text: "Texto completo - BOE (Ley 31/1995)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292" }
              ],
              comoLoUso: "Como técnico, esta ley es tu manual de obligaciones. Cuando una empresa te contrate, vos le vas a decir: 'Según el Art. 16, tengo que evaluar estos riesgos. Según el Art. 23, necesito esta documentación.' Es tu herramienta para que te tomen en serio."
            },
            {
              id: "ley-17-2011",
              title: "Ley 17/2011 de Seguridad Alimentaria",
              type: "ley",
              status: "complementaria",
              summary: "Si vas a trabajar en industria alimentaria o saneamiento de food factories, esta ley es clave. Regula la seguridad de los alimentos desde la producción hasta el consumidor.",
              keyPoints: [
                "APPCC (Análisis de Peligros y Puntos Críticos de Control) - sistema obligatorio",
                "Trazaabilidad: poder rastrear cada producto desde origen",
                "Higiene alimentaria: limpieza, desinfección, control de plagas",
                "Controles oficiales: inspecciones del gobierno"
              ],
              relations: ["Aplicable a industria alimentaria y saneamiento"],
              usefulLinks: [
                { text: "Texto completo - BOE (Ley 17/2011)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2011-11604" }
              ],
              comoLoUso: "En Argentina ya conocés el sistema APPCC. En España se aplica igual pero con más control oficial. Si trabajás en una fábrica de alimentos, vos vas a implementar el plan de APPCC y vas a hacer los controles de higiene y saneamiento."
            },
            {
              id: "ley-34-2007",
              title: "Ley 34/2007 de Salud Ambiental",
              type: "ley",
              status: "complementaria",
              summary: "Regula la calidad del aire, suelo, agua y gestión de residuos. Para tu especialidad de saneamiento, es MUY relevante.",
              keyPoints: [
                "Calidad del aire interior y exterior en edificios y centros de trabajo",
                "Gestión de residuos peligrosos y no peligrosos (RD 952/2017)",
                "Protección del agua y suelo - vertidos y contaminación",
                "Evaluación de impacto ambiental para proyectos"
              ],
              relations: ["Directamente ligada a saneamiento industrial"],
              usefulLinks: [
                { text: "Texto completo - BOE (Ley 34/2007)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-19744" }
              ],
              comoLoUso: "Vos como técnico de saneamiento vas a trabajar con residuos, vertidos, limpieza de tanques, desratización, etc. Esta ley te dice qué podés y qué no podés hacer. Por ejemplo: los residuos de saneamiento se clasifican y se gestionan según esta ley."
            }
          ]
        },
        {
          id: "reales-decretos",
          title: "Reales Decretos Clave",
          items: [
            {
              id: "rd-39-1997",
              title: "RD 39/1997 - Servicios de Prevención",
              type: "real-decreto",
              status: "obligatoria",
              summary: "El REGLAMENTO que te dice CÓMO hacer lo que dice la Ley 31/1995. Si la ley es el 'qué', este RD es el 'cómo'.",
              keyPoints: [
                "Cómo hacer la evaluación inicial de riesgos (paso a paso)",
                "Qué documentación necesita la empresa (obligatoria)",
                "Cómo se organizan los servicios de prevención",
                "Formación de los trabajadores: qué, cuándo y cómo",
                "Auditorías de sistemas de gestión de PRL",
                "Planes de emergencia y evacuación obligatorios"
              ],
              relations: ["Desarrolla la Ley 31/1995"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 39/1997)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1997-1853" }
              ],
              comoLoUso: "Este es TU reglamento de trabajo. Cuando vayas a evaluar un riesgo, vas a seguir lo que dice este RD. Cuando la empresa te pregunte qué documentos necesita, le vas a decir lo que dice el Art. 23 de la Ley + este RD. Es como el manual del mecánico: te dice exactamente qué hacer."
            },
            {
              id: "rd-1215-1997",
              title: "RD 1215/1997 - Equipos de Trabajo",
              type: "real-decreto",
              status: "obligatoria",
              summary: "Regula la seguridad de TODOS los equipos de trabajo: grúas, montacargas, andamios, herramientas, maquinaria. Si se usa para trabajar, está aquí.",
              keyPoints: [
                "Los equipos DEBEN tener marcado CE (certificación europea)",
                "Mantenimiento preventivo obligatorio según fabricante",
                "Inspecciones periódicas: cada equipo tiene su calendario",
                "Formación obligatoria para operar cada equipo",
                "Los trabajadores DEBEN saber usar los equipos correctamente",
                "Prohibido usar equipos sin las protecciones de seguridad"
              ],
              relations: ["Complementa el RD 773/1997 sobre EPIs"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 1215/1997)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1997-17824" }
              ],
              comoLoUso: "Cuando revises una obra o empresa, vas a mirar: ¿los equipos tienen marcado CE? ¿Tienen libro de mantenimiento? ¿Los operarios tienen carné? Si falta algo, vos lo reportás y proponés la solución. Esto es parte de tu trabajo diario."
            },
            {
              id: "rd-773-1997",
              title: "RD 773/1997 - Equipos de Protección Individual",
              type: "real-decreto",
              status: "obligatoria",
              summary: "Regla simple: si no podés eliminar el riesgo con otro medio, PONÉS EPI. Este RD dice cuándo, cómo y qué EPI darle al trabajador.",
              keyPoints: [
                "Primero se intenta ELIMINAR el riesgo. Si no se puede, se usa EPI",
                "El EPI debe ser CE (marcado europeo) y adecuado al riesgo",
                "El empresario DEBE dar el EPI gratis al trabajador",
                "Formación para usar el EPI correctamente",
                "Mantenimiento y limpieza del EPI",
                "Sustitución cuando esté deteriorado"
              ],
              relations: ["Complementa el RD 1215/1997"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 773/1997)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1997-12735" }
              ],
              comoLoUso: "Como técnico, vos evaluás cuándo se necesita EPI, cuál es el correcto, y si el trabajador sabe usarlo. Si ves a alguien sin arnés trabajando en altura, vos parás la obra y explicás por qué. Tu trabajo es que nadie se lastime."
            },
            {
              id: "rd-374-2001",
              title: "RD 374/2001 - Agentes Químicos",
              type: "real-decreto",
              status: "obligatoria",
              summary: "Protección contra sustancias químicas peligrosas. Si trabajás con productos químicos, limpieza industrial o saneamiento, esto es lo que regulás.",
              keyPoints: [
                "Hoja de Datos de Seguridad (HDS/SDS): el documento más importante",
                "Límites de Exposición Profesional (LEP): cuánta sustancia podés respirar",
                "Clasificación CLP: etiquetas de peligro (símbolos en los envases)",
                "Medidas de prevención: ventilación, EPIs, sustitución",
                "Vigilancia de la salud específica para cada sustancia",
                "Plan de emergencia ante derrames o accidentes químicos"
              ],
              relations: ["Muy relevante para saneamiento e higiene industrial"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 374/2001)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2001-8436" }
              ],
              comoLoUso: "En saneamiento usás productos químicos todos los días (cloro, soda, ácidos, detergentes). Vos verificás que las HDS estén actualizadas, que los trabajadores sepan qué significan los símbolos de peligro, y que usen los EPIs correctos. Si ves un envase sin etiqueta, eso es una infracción."
            },
            {
              id: "rd-664-1997",
              title: "RD 664/1997 - Agentes Biológicos",
              type: "real-decreto",
              status: "obligatoria",
              summary: "Protección contra virus, bacterias, hongos y parásitos. En saneamiento, esto es lo que más vas a ver: aguas residuales, residuos, desratización.",
              keyPoints: [
                "Clasificación en 4 grupos de riesgo (I a IV, de menos a más peligroso)",
                "Evaluación del riesgo de exposición a agentes biológicos",
                "Medidas: higiene, vacunación si existe, EPIs, protocolos",
                "Zonas de trabajo clasificadas según riesgo",
                "Vigilancia de la salud obligatoria",
                "Notificación de enfermedades profesionales"
              ],
              relations: ["Aplicable a industria alimentaria y sanitaria"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 664/1997)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1997-11144" }
              ],
              comoLoUso: "Cuando trabajás en desratización o limpieza de pozos, estás expuesto a agentes biológicos. Vos evaluás el riesgo (¿qué bacterias hay?), das las vacunas necesarias (si existen), y te asegurás de que los trabajadores usen los EPIs correctos (guantes, mascarillas, trajes)."
            },
            {
              id: "rd-486-1997",
              title: "RD 486/1997 - Lugares de Trabajo",
              type: "real-decreto",
              status: "obligatoria",
              summary: "Las condiciones MÍNIMAS que debe tener cualquier puesto de trabajo: iluminación, ventilación, temperatura, ruido, pisos, escaleras.",
              keyPoints: [
                "Dimensiones mínimas del puesto de trabajo",
                "Ventilación e iluminación adecuadas",
                "Niveles de ruido y vibraciones permitidos",
                "Temperatura y humedad confortables (14-25°C)",
                "Pisos, paredes y techos en buen estado",
                "Señalización de seguridad obligatoria"
              ],
              relations: ["Complementa la evaluación de riesgos del RD 39/1997"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 486/1997)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1997-8669" }
              ],
              comoLoUso: "Cuando vayas a evaluar un puesto de trabajo, vas a medir: ¿hay suficiente luz? ¿El ruido es tolerable? ¿La temperatura es adecuada? ¿El piso está en buen estado? Si falta algo, lo reportás con número y medida correctiva."
            },
            {
              id: "rd-396-2006",
              title: "RD 396/2006 - Espacios Confinados",
              type: "real-decreto",
              status: "obligatoria",
              summary: "TRABAJO EN ESPACIOS CONFINADOS. Tanques, pozos, tuberías, depósitos. PARA TODO LO QUE HACÉS EN SANEAMIENTO ESTO ES CRÍTICO.",
              keyPoints: [
                "Espacio confinado: cualquier espacio con acceso limitado y ventilación deficiente",
                "PERMISO DE TRABAJO obligatorio antes de entrar",
                "Control atmosférico: medir O₂, gases tóxicos, gases explosivos",
                "Ventilación forzada antes y durante el trabajo",
                "NUNCA entrar solo - siempre persona de vigilancia externa",
                "Equipo de rescate preparado y personal capacitado",
                "Formación específica del personal que entra"
              ],
              relations: ["CRÍTICO para saneamiento"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 604/2006 - Espacios Confinados)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-9379" }
              ],
              comoLoUso: "ESTO es lo que más vas a necesitar en tu trabajo. Cada vez que entres a un pozo de visita, tanque o tubería, necesitás: permiso de trabajo, medición atmosférica, ventilación, arnés con línea de vida, persona afuera mirándote, y equipo de rescate. Si alguien entra sin esto, vos PARÁ la obra."
            }
          ]
        },
        {
          id: "otros-reglamentos",
          title: "Otros Reglamentos Relevantes",
          items: [
            {
              id: "rd-604-2006",
              title: "RD 604/2006 - Espacios Confinados",
              type: "real-decreto",
              status: "obligatoria",
              summary: "Modifica el RD 39/1997 para incluir la definición de espacio confinado y las obligaciones específicas. Muy relevante para saneamiento.",
              keyPoints: [
                "Evaluación previa del espacio confinado",
                "Permisos de trabajo y vigilancia",
                "Ventilación y control atmosférico",
                "Equipos de rescate preparados",
                "Formación específica del personal",
                "Trabajo en equipos (never solo)"
              ],
              relations: ["CRÍTICO para saneamiento industrial"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 604/2006)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-9379" }
              ]
            },
            {
              id: "rd-665-1997",
              title: "RD 665/1997 - Agentes Cancerígenos",
              type: "real-decreto",
              status: "obligatoria",
              summary: "Protección de los trabajadores contra riesgos derivados de la exposición a agentes cancerígenos y mutágenos.",
              keyPoints: [
                "Sustancias clasificadas como cancerígenas",
                "Evaluación y control de exposición",
                "Vigilancia de la salud reforzada",
                "Prohibición de ciertas actividades con menores"
              ],
              relations: ["Relacionado con RD 374/2001 (agentes químicos)"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 665/1997)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1997-11145" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "guias-insst",
      title: "Guías INSST",
      icon: "\uD83D\uDCDA",
      description: "Instituto Nacional de Seguridad y Salud en el Trabajo - Guías prácticas para la aplicación de la normativa",
      categories: [
        {
          id: "evaluacion-riesgos",
          title: "Evaluación de Riesgos",
          items: [
            {
              id: "guia-evaluacion-riesgos",
              title: "Guía para la Evaluación de Riesgos",
              type: "guia",
              status: "fundamental",
              summary: "Es el MÉTODO que usás para evaluar riesgos. Paso a paso, sin inventar nada. La INSST ya armó todo: vos solo tenés que seguir la receta.",
              keyPoints: [
                "Paso 1: Recorrer el lugar y ANOTAR todo lo que ves (ruido, polvo, químicos, posiciones, etc.)",
                "Paso 2: Para cada cosa que anotaste, preguntarte: ¿qué puede pasar? (el peligro)",
                "Paso 3: Calcular el riesgo = Severidad × Probabilidad",
                "  - Severidad: ¿qué tan grave es la lesión? (1=sin lesión, 5=muerte)",
                "  - Probabilidad: ¿qué tan probable es que pase? (1=casi imposible, 5=casi seguro)",
                "  - Ejemplo: un trabajador manipula ácido sin guantes → Severidad 3 (lesión con baja) × Probabilidad 4 (probable) = 12 (Riesgo ALTO)",
                "Paso 4: Si el riesgo es ALTO o MUY ALTO, parar la actividad y buscar solución",
                "Paso 5: Escribir las medidas correctivas y asignar responsables y plazos",
                "Paso 6: Revisar que las medidas funcionaron después de implementarlas"
              ],
              relations: ["Base para todo trabajo de PRL", "Complementa el RD 39/1997"],
              usefulLinks: [
                { text: "Guía INSST - Evaluación de Riesgos (PDF gratuito)", url: "https://www.insst.es" }
              ],
              comoLoUso: "EJEMPLO PRÁCTICO: Un día te mandan a evaluar una fábrica de alimentos. Entrás y ves: 1) Ruido fuerte de máquinas (escribís 'ruido'). 2) Trabajadores mojando el piso (escribís 'piso resbaladizo'). 3) Tanques de limpieza con químicos (escribís 'exposición a agentes químicos'). Para cada uno hacés la cuenta: ruido=3×4=12 (ALTO), piso=2×3=6 (MEDIO), químicos=4×3=12 (ALTO). Los dos que dieron ALTO los reportás URGENTE y proponés soluciones: silenciadores para el ruido, calzado antideslizante, guantes y mascarilla para los químicos. Eso es tu trabajo en una jornada."
            },
            {
              id: "guia-metodologia-evaluacion",
              title: "Metodología de Evaluación de Riesgos - INSST",
              type: "guia",
              status: "fundamental",
              summary: "Procedimiento sistemático para identificar, valorar y establecer medidas preventivas.",
              keyPoints: [
                "Identificación de peligros",
                "Valoración del riesgo (severidad x probabilidad)",
                "Establecimiento de medidas preventivas",
                "Seguimiento y revisión periódica"
              ],
              relations: ["Metodología aplicable a cualquier sector"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "higiene-industrial",
          title: "Higiene Industrial",
          items: [
            {
              id: "guia-ruido",
              title: "Guía del Ruido en el Trabajo",
              type: "guia",
              status: "importante",
              summary: "Prevención de la hipoacusia producida por ruido. Valores límite, métodos de medición y medidas de control.",
              keyPoints: [
                "VLE (Valor Límite de Exposición): 87 dB(A) y 140 dB(C)",
                "Acción nivel inferior: 80 dB(A)",
                "Acción nivel superior: 85 dB(A)",
                "Medición de niveles de presión sonora",
                "Protección auditiva y programa de conservación",
                "Sustitución, aislamiento y absorción"
              ],
              relations: ["RD 486/1997 y Directiva 2003/10/CE"],
              usefulLinks: []
            },
            {
              id: "guia-vibraciones",
              title: "Guía de Vibraciones Mecánicas",
              type: "guia",
              status: "importante",
              summary: "Prevención de riesgos por vibraciones mano-brazo y cuerpo entero.",
              keyPoints: [
                "Vibraciones mano-brazo (HAV): VLE 2.5 m/s²",
                "Vibraciones cuerpo entero (WBV): VLE 1.15 m/s²",
                "Síndrome del canal carpiano y de Raynaud",
                "Elección de herramientas y equipos",
                "Tiempo de exposición máximo"
              ],
              relations: ["Directiva 2002/44/CE"],
              usefulLinks: []
            },
            {
              id: "guia-agentes-quimicos",
              title: "Guía de Agentes Químicos",
              type: "guia",
              status: "importante",
              summary: "Prevención de riesgos por exposición a sustancias químicas peligrosas. Hojas de seguridad, LEP y controles.",
              keyPoints: [
                "Lectura e interpretación de Hojas de Datos de Seguridad",
                "Límites de Exposición Profesional (LEP/SCOEL)",
                "Sustitución de sustancias peligrosas",
                "Controles de ingeniería y EPIs",
                " vigilancia de la salud específica"
              ],
              relations: ["RD 374/2001"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "seguridad-lugares",
          title: "Seguridad en Lugares de Trabajo",
          items: [
            {
              id: "guia-lugares-trabajo",
              title: "Guía de Lugares de Trabajo",
              type: "guia",
              status: "importante",
              summary: "Condiciones mínimas de seguridad y salud en los lugares de trabajo. Espacios confinados, alturas, incendios.",
              keyPoints: [
                "Diseño y mantenimiento de espacios de trabajo",
                "Señalización de seguridad",
                "Protección contra incendios",
                "Evacuación y emergencias",
                "Control de accesos"
              ],
              relations: ["RD 486/1997"],
              usefulLinks: []
            },
            {
              id: "guia-espacios-confinados",
              title: "Guía de Espacios Confinados",
              type: "guia",
              status: "CRITICA",
              summary: "PARA TU TRABAJO EN SANEAMIENTO ESTO ES LO MÁS IMPORTANTE. Tanques, pozos de visita, tuberías, depósitos. Si no seguís estos pasos, la gente se muere.",
              keyPoints: [
                "Definición: espacio con acceso limitado y ventilación deficiente",
                "ANTES de entrar: permiso de trabajo + medición atmosférica",
                "Medir: oxígeno (19.5-23.5%), gases tóxicos, gases explosivos",
                "Ventilación forzada antes y durante el trabajo",
                "NUNCA entrar solo - siempre alguien afuera mirándote y comunicándose",
                "Equipo de rescate listo: arnés, cuerda, máscara con oxígeno",
                "Si la medición sale mal, NO SE ENTRA. Punto."
              ],
              relations: ["RD 396/2006", "CRÍTICO para saneamiento"],
              usefulLinks: [],
              comoLoUso: "Cada día que vayas a trabajar en un pozo o tanque, esta guía te dice exactamente qué hacer. El día que alguien diga 'no hace falta medir, ya entré antes y no pasó nada', vos le decís que eso es como jugar a la ruleta rusa. Un pozo de visita puede tener gases letales que no se ven ni se huelen."
            },
            {
              id: "guia-alturas",
              title: "Guía de Trabajo en Altura",
              type: "guia",
              status: "importante",
              summary: "Prevención de caídas en altura. Sistemas anticaídas, andamios, plataformas elevadoras.",
              keyPoints: [
                "Caídas de más de 2 metros: riesgo grave",
                "Sistemas de protección colectiva (barandillas, redes)",
                "Sistemas de protección individual (arneses, líneas de vida)",
                "Andamios: montaje, uso y desmontaje",
                "Plataformas elevadoras (PEMP)"
              ],
              relations: ["RD 1627/1997 (construcción)"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "ergonomia-psicosociologia",
          title: "Ergonomía y Psicosociología",
          items: [
            {
              id: "guia-ergonomia",
              title: "Guía de Ergonomía",
              type: "guia",
              status: "importante",
              summary: "Prevención de trastornos musculoesqueléticos (TME). Evaluación ergonómica de puestos de trabajo.",
              keyPoints: [
                "Evaluación ergonómica del puesto de trabajo",
                "Factor de riesgo: posturas forzadas, movimientos repetitivos, manejo manual de cargas",
                "Métodos de evaluación: RULA, REBA, NIOSH, OCRA",
                "Diseño ergonómico del puesto",
                "Pausas activas y rotación de tareas"
              ],
              relations: ["Directiva 92/57/CEE"],
              usefulLinks: []
            },
            {
              id: "guia-psicosociologia",
              title: "Guía de Riesgos Psicosociales",
              type: "guia",
              status: "importante",
              summary: "Estrés laboral, acoso, violencia, burnout. Evaluación y prevención de factores psicosociales.",
              keyPoints: [
                "Factores de riesgo psicosocial: carga de trabajo, control, apoyo",
                "Evaluación con cuestionarios (CIS-R, QPS-Nordic)",
                "Prevención del acoso laboral (mobbing)",
                "Conciliación y bienestar laboral",
                "Plan de actuación contra riesgos psicosociales"
              ],
              relations: ["Ley Orgánica 3/2007 de Igualdad"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "emergencias",
          title: "Emergencias y Evacuación",
          items: [
            {
              id: "guia-emergencias",
              title: "Guía de Planes de Emergencia y Evacuación",
              type: "guia",
              status: "fundamental",
              summary: "Elaboración de planes de emergencia y evacuación. Equipos de intervención, simulacros, emergencias externas.",
              keyPoints: [
                "Tipos de emergencia: incendio, derrame, explosión, evacuación",
                "Planes de emergencia según tamaño de empresa",
                "Equipos de emergencia: primeros auxilios, lucha contra incendios, evacuación",
                "Simacros y ejercicios de evacuación",
                "Comunicación con emergencias externas (112)",
                "Coordinación de emergencias multiempresa"
              ],
              relations: ["RD 39/1997 - Planificación obligatoria"],
              usefulLinks: []
            },
            {
              id: "guia-pau",
              title: "Plan de Autoprotección (PAU)",
              type: "guia",
              status: "importante",
              summary: "Planes de autoprotección obligatorios para determinadas actividades. RD 393/2007.",
              keyPoints: [
                "Evaluación del riesgo de emergencia",
                "Organización de la autoprotección",
                "Medidas de protección y actuación",
                "Simulacros obligatorios (anuales o bianuales)",
                "Comunicación a la autoridad competente"
              ],
              relations: ["RD 393/2007"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "primeros-auxilios",
          title: "Primeros Auxilios",
          items: [
            {
              id: "guia-primeros-auxilios",
              title: "Guía de Primeros Auxilios Laborales",
              type: "guia",
              status: "fundamental",
              summary: "Actuación ante accidentes laborales. RCP, hemorragias, quemaduras, intoxicaciones, fractures.",
              keyPoints: [
                "Protocolo de actuación ante accidentes",
                "RCP básica y con DEA",
                "Control de hemorragias y shock",
                "Quemaduras: clasificación y tratamiento",
                "Intoxicaciones por agentes químicos",
                "Traslado y atención prehospitalaria"
              ],
              relations: ["Obligación del empresario (Ley 31/1995)"],
              usefulLinks: []
            }
          ]
        }
      ]
    },
    {
      id: "normas-iso",
      title: "Normas ISO",
      icon: "\uD83C\uDF10",
      description: "Sistemas de Gestión internacionales aplicables a PRL, Medio Ambiente y Calidad",
      categories: [
        {
          id: "iso-45001",
          title: "ISO 45001 - Sistemas de Gestión de SSO",
          items: [
            {
              id: "iso-45001-2018",
              title: "ISO 45001:2018 - Gestión de Seguridad y Salud en el Trabajo",
              type: "norma-iso",
              status: "fundamental",
              summary: "La norma que piden TODAS las empresas grandes. No es obligatoria por ley, pero si querés trabajar en una empresa seria, te van a pedir que sepas esto. Es como el 'título' de tu conocimiento.",
              keyPoints: [
                "Estructura de 10 capítulos (la que tenés que memorizar)",
                "Cap 4: Contexto - ¿Quién es la empresa? ¿Qué riesgos tiene?",
                "Cap 5: Liderazgo - La dirección DEBE comprometerse con la seguridad",
                "Cap 6: Planificación - Identificar peligros y evaluar riesgos",
                "Cap 7: Soporte - Recursos, formación, comunicación",
                "Cap 8: Operación - Cómo controlar los riesgos día a día",
                "Cap 9: Evaluación - Medir si funciona (auditorías internas)",
                "Cap 10: Mejora continua - Siempre buscar hacerlo mejor"
              ],
              relations: ["Reemplazó a OHSAS 18001", "Compatible con ISO 14001 e ISO 9001"],
              usefulLinks: [
                { text: "ISO 45001:2018 - Página INSST (explicada en español)", url: "https://www.insst.es/normativa/normas-internacionales/iso-450012018/" }
              ],
              comoLoUso: "Cuando una empresa te contrate para implementar un sistema de gestión, vas a seguir esta norma paso a paso. Primero analizás la empresa (contexto), después evaluás los riesgos, después planificás las medidas, después verificás que funcionen, y después mejorás. Es el ciclo que se repite siempre.",
              expanded: {
                cicloPDCA: true,
                checklistAuditoria: [
                  "¿La dirección está comprometida y participa activamente?",
                  "¿Se identificaron TODOS los peligros del centro de trabajo?",
                  "¿La valoración de riesgos está actualizada?",
                  "¿Los trabajadores fueron consultados en la evaluación?",
                  "¿Hay formación registrada para cada trabajador?",
                  "¿El plan de emergencia está actualizado y se hicieron simulacros?",
                  "¿Las auditorías internas se hacen según programa?",
                  "¿Se cumplen todos los requisitos legales aplicables?",
                  "¿Los proveedores y subcontratistas están evaluados?",
                  "¿Se manejan no conformidades con acciones correctivas?",
                  "¿Hay indicadores de SST medidos y revisados?",
                  "¿Se hizo la revisión por la dirección este año?"
                ]
              }
            },
            {
              id: "iso-45002",
              title: "ISO 45002:2020 - Guía de Implementación",
              type: "norma-iso",
              status: "importante",
              summary: "Guía práctica para la implementación de ISO 45001. Incluye ejemplos y recomendaciones.",
              keyPoints: [
                "Cómo establecer el contexto de la organización",
                "Identificación de peligros y valoración de riesgos",
                "Definición de objetivos y planificación de acciones",
                "Evaluación del desempeño y mejora continua"
              ],
              relations: ["Complementa ISO 45001:2018"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "iso-14001",
          title: "ISO 14001 - Gestión Ambiental",
          items: [
            {
              id: "iso-14001-2015",
              title: "ISO 14001:2015 - Gestión Ambiental",
              type: "norma-iso",
              status: "importante",
              summary: "Sistema de gestión ambiental. Relevante para saneamiento: gestión de residuos, vertidos, emisiones.",
              keyPoints: [
                "Contexto de la organización y partes interesadas",
                "Aspectos ambientales significativos",
                "Cumplimiento legal ambiental",
                "Objetivos y metas ambientales",
                "Control operacional de aspectos ambientales",
                "Preparación y respuesta ante emergencias ambientales"
              ],
              relations: ["Complementa ISO 45001", "Muy relevante para saneamiento"],
              usefulLinks: [
                { text: "ISO 14001:2018", url: "https://www.iso.org/standard/14847.html" }
              ],
              expanded: {
                aspectosAmbientales: [
                  { aspecto: "Vertidos de aguas residuales", impacto: "Contaminación de ríos, suelo y acuíferos", control: "Tratamiento previo, control de parámetros (DBO, COT, pH, metales), registro de vertidos", norma: "RD 849/1986" },
                  { aspecto: "Residuos peligrosos", impacto: "Contaminación del suelo y agua", control: "Clasificación, almacenamiento, transporte, gestión documental", norma: "RD 833/2015" },
                  { aspecto: "Emisiones a la atmósfera", impacto: "Contaminación del aire, olores", control: "Control de olores, emisiones de H₂S, filtros, treatment de gases", norma: "Ley 34/2007" },
                  { aspecto: "Ruido y vibraciones", impacto: "Molestias a vecinos y trabajadores", control: "Medición, barreras acústicas, horarios de trabajo", norma: "RD 1299/2006" },
                  { aspecto: "Consumo de recursos", impacto: "Agotamiento de recursos naturales", control: "Eficiencia energética, reciclaje de agua, optimización de procesos", norma: "ISO 50001" },
                  { aspecto: "Gestión de lodos", impacto: "Contaminación si no se gestiona correctamente", control: "Aprovechamiento energético, compostaje, vertido controlado", norma: "RD 849/1986" }
                ]
              }
            }
          ]
        },
        {
          id: "iso-9001",
          title: "ISO 9001 - Gestión de Calidad",
          items: [
            {
              id: "iso-9001-2015",
              title: "ISO 9001:2015 - Gestión de Calidad",
              type: "norma-iso",
              status: "complementaria",
              summary: "Sistema de gestión de calidad. Útil para la gestión integral y la documentación de procesos.",
              keyPoints: [
                "Enfoque al cliente",
                "Liderazgo y compromiso",
                "Gestión por procesos",
                "Mejora continua",
                "Toma de decisiones basada en evidencia",
                "Gestión de relaciones con partes interesadas"
              ],
              relations: ["Base para sistemas integrados de gestión"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "otras-iso",
          title: "Otras Normas ISO Relevantes",
          items: [
            {
              id: "iso-45003-2021",
              title: "ISO 45003:2021 - Riesgos Psicosociales",
              type: "norma-iso",
              status: "importante",
              summary: "Primera norma ISO sobre salud psicológica y seguridad en el trabajo. Guía para identificar y gestionar riesgos psicosociales.",
              keyPoints: [
                "Identificación de factores de riesgo psicosocial",
                "Evaluación del contexto organizacional",
                "Medidas de control y prevención",
                "Vigilancia de la salud mental",
                "Cultura de seguridad psicológicamente seguro"
              ],
              relations: ["Complementa ISO 45001"],
              usefulLinks: []
            },
            {
              id: "iso-19443-2018",
              title: "ISO 19443:2018 - Gestión en Alimentos",
              type: "norma-iso",
              status: "especializado",
              summary: "Sistemas de gestión de seguridad de los alimentos según ISO 22000, aplicando principios de PRL.",
              keyPoints: [
                "Integración de PRL en sistemas de gestión de alimentos",
                "APPCC + PRL",
                "Higiene y saneamiento industrial"
              ],
              relations: ["Relevante para saneamiento alimentario"],
              usefulLinks: []
            }
          ]
        }
      ]
    },
    {
      id: "homologacion",
      title: "Título y Homologación",
      icon: "\uD83C\uDF93",
      description: "Documentación necesaria para homologar tu título de Técnico en Saneamiento y Seguridad Industrial",
      categories: [
        {
          id: "documentos-homologacion",
          title: "Documentación Necesaria",
          items: [
            {
              id: "solicitud-homologacion",
              title: "Solicitud de Equivalencia/Homologación",
              type: "documento",
              status: "CRITICO",
              summary: "El trámite que tenés que hacer para que tu título argentino sea válido en España. Sin esto, no podés ejercer legalmente.",
              keyPoints: [
                "Se hace ante el Ministerio de Educación y Formación Profesional",
                "Necesitás: título apostillado + analítico + pasaporte + tasa",
                "La tasa cuesta entre 85 y 160 EUR",
                "Puede tardar entre 3 y 12 meses",
                "Consultá si tu título tiene equivalencia en el CNAE español",
                "Podés hacer el seguimiento online del expediente"
              ],
              relations: ["Consultar en Ministerio de Educación y Formación Profesional"],
              usefulLinks: [
                { text: "Ministerio de Educación - Homologación", url: "https://www.educacion.gob.es" }
              ],
              comoLoUso: "Este trámite es como sacar el registro de conducir pero para tu título. Sin esto, tu título argentino no vale nada en España. Hacelo ANTES de ir si es posible, o apenas llegues. El Ministerio puede tardar meses, así que no lo dejes para último momento."
            },
            {
              id: "apostilla-haya",
              title: "Apostilla de La Haya",
              type: "documento",
              status: "CRITICO",
              summary: "Sello internacional que valida documentos públicos extranjeros. Obligatorio para que tu título sea reconocido en España.",
              keyPoints: [
                "Se obtiene en el país de origen (Argentina: Cancillería o Cámara de Comercio)",
                "Valida la autenticidad del documento",
                "No requiere traducción si está en español",
                "Consultar si tu título ya viene apostillado por defecto"
              ],
              relations: ["Necesario ANTES de enviar la solicitud"],
              usefulLinks: []
            },
            {
              id: "traduccion-jurada",
              title: "Traducción Jurada",
              type: "documento",
              status: "importante",
              summary: "Traducción oficial de documentos al español si están en otro idioma.",
              keyPoints: [
                "Solo la necesitás si tus documentos no están en español",
                "Traducción jurada por traductor oficial registrado en España",
                "Puede ser necesaria para analíticos en portugués u otros idiomas"
              ],
              relations: ["Argentina habla español, generalmente no se necesita"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "documentos-argentina",
          title: "Documentos de Argentina",
          items: [
            {
              id: "analitico-argentina",
              title: "Analítico / Plan de Estudios",
              type: "documento",
              status: "CRITICO",
              summary: "Certificado de todas las materias cursadas, con carga horaria y calificaciones. Fundamental para la evaluación de equivalencia.",
              keyPoints: [
                "Obtener de la institución educativa donde estudiaste",
                "Debe incluir: materias, horas, calificaciones, año de cursada",
                "Si es técnico: verificar que el título sea de nivel terciario/tecnológico",
                "Consultar si coincide con el catálogo CNAE español"
              ],
              relations: ["Solicitarlo con anticipación (puede demorar)"],
              usefulLinks: []
            },
            {
              id: "certificado-antecedentes",
              title: "Certificado de Antecedentes Penales",
              type: "documento",
              status: "importante",
              summary: "Certificado de antecedentes penales del país de origen. Puede ser requerido para ciertos trámites.",
              keyPoints: [
                "Solicitar en Registro Nacional de Reincidencia (Argentina)",
                "Tiene vigencia limitada (generalmente 6 meses)",
                "Apostillar si es necesario"
              ],
              relations: ["Consultar requisitos actualizados"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "equivalencia-profesional",
          title: "Equivalencia Profesional",
          items: [
            {
              id: "equivalencia-tecnico-superior",
              title: "Equivalencia a Técnico Superior",
              type: "documento",
              status: "fundamental",
              summary: "Proceso para que tu título argentino sea reconocido como equivalente a un Título de Técnico Superior en España.",
              keyPoints: [
                "Verificar si tu título está en el CNAE español",
                "Si no está: puede requerirse homologación o convalidación parcial",
                "Posibilidad de realizar pruebas de competencia",
                "Consultar comunidades autónomas (cada una tiene sus requisitos)",
                "El INSST puede reconocer competencias en PRL"
              ],
              relations: ["Puede requerir formación complementaria"],
              usefulLinks: [
                { text: "CNAE - Clasificación Nacional de Títulos", url: "https://www.educacion.gob.es" }
              ]
            },
            {
              id: "registro-profesional",
              title: "Registro Profesional en España",
              type: "documento",
              status: "importante",
              summary: "Inscripción en registros profesionales españoles para ejercer legalmente.",
              keyPoints: [
                "Colegio Profesional (si aplica)",
                "Registro de Empresas de Servicios de Prevención (RESP)",
                "Certificados de profesionalidad",
                "Habilitación autonómica según la comunidad"
              ],
              relations: ["Consultar requisitos según la comunidad autónoma"],
              usefulLinks: []
            }
          ]
        }
      ]
    },
    {
      id: "idioma",
      title: "Idioma",
      icon: "\uD83D\uDD03",
      description: "Catalán, vocabulario técnico PRL y redacción de informes en español peninsular",
      categories: [
        {
          id: "catalan",
          title: "Catalán",
          items: [
            {
              id: "catalan-a1-b1",
              title: "Catalán A1 a B1",
              type: "idioma",
              status: "importante",
              summary: "Si pensás trabajar en Cataluña, el conocimiento de catalán es muy valorado y en algunos casos obligatorio.",
              keyPoints: [
                "Nivel A1-A2: comprensión básica, presentaciones, situaciones cotidianas",
                "Nivel B1: conversaciones sobre temas familiares, opinión, texto sencillo",
                "Cursos gratuitos: Parla (Generalitat de Catalunya)",
                "Exámenes: Centre de Normalització Lingüística",
                "Requisito para empleo público en Cataluña"
              ],
              relations: ["Consultar si el puesto requiere catalán"],
              usefulLinks: [
                { text: "Parla - Cursos gratuitos de catalán", url: "https://parla.gencat.cat" },
                { text: "CLL - Centre de Normalització Lingüística", url: "https://www.gencat.cat/llengua/cnl/" }
              ]
            },
            {
              id: "vocabulario-catalan-prl",
              title: "Vocabulario Técnico PRL en Catalán",
              type: "idioma",
              status: "importante",
              summary: "Términos técnicos de PRL traducidos al catalán para el entorno laboral.",
              keyPoints: [
                "Prevenció de Riscos Laborals = Prevención de Riesgos Laborales",
                "Seguretat i Salut en el Treball = Seguridad y Salud en el Trabajo",
                "Avaluació de Riscos = Evaluación de Riesgos",
                "Pla de Prevenció = Plan de Prevención",
                "Equip de Protecció Individual (EPI) = EPI",
                "Riscos Laborals = Riesgos Laborales",
                "Comitè de Seguretat i Salut = Comité de Seguridad y Salud"
              ],
              relations: ["Útil para informes y comunicación con empresas catalanas"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "vocabulario-prl",
          title: "Vocabulario Técnico PRL",
          items: [
            {
              id: "vocabulario-espanol-prl",
              title: "Vocabulario Técnico PRL en Español",
              type: "idioma",
              status: "fundamental",
              summary: "Términos técnicos de PRL en español peninsular que difieren del español argentino.",
              keyPoints: [
                "Peligro (no 'peligro') = Peligro / Hazard",
                "Riesgo Laboral = Riesgo Occupational / Workplace Risk",
                "Evaluación de Riesgos = Risk Assessment",
                "Medidas Preventivas = Preventive Measures",
                "Comité de Seguridad y Salud = Health and Safety Committee",
                "Delegado de Prevención = Prevention Delegate",
                "Servicio de Prevención = Prevention Service",
                "Plan de Emergencia = Emergency Plan",
                "Espacio Confinado = Confined Space",
                "Trabajo en Altura = Working at Height"
              ],
              relations: ["Diferencias entre español argentino y peninsular"],
              usefulLinks: []
            },
            {
              id: "redaccion-informes",
              title: "Redacción de Informes de PRL",
              type: "idioma",
              status: "importante",
              summary: "Modelo y estructura de informes técnicos de PRL en español peninsular.",
              keyPoints: [
                "Estructura: Introducción, Metodología, Resultados, Conclusiones, Recomendaciones",
                "Tono formal y técnico",
                "Uso de terminología INSST",
                "Referencias normativas obligatorias",
                "Formato: informe de evaluación, informe de auditoría, plan de prevención"
              ],
              relations: ["Necesario para trabajar como técnico de PRL"],
              usefulLinks: []
            }
          ]
        }
      ]
    },
    {
      id: "aplicaciones-practicas",
      title: "Aplicaciones Prácticas",
      icon: "\uD83D\uDD27",
      description: "Modelos, plantillas y herramientas para aplicar en el día a día",
      categories: [
        {
          id: "modelos-evaluacion",
          title: "Modelos de Evaluación de Riesgos",
          items: [
            {
              id: "modelo-evaluacion-general",
              title: "Modelo de Evaluación de Riesgos General",
              type: "plantilla",
              status: "fundamental",
              summary: "Plantilla para evaluar riesgos en cualquier puesto de trabajo. Incluye matriz de valoración y plan de acción.",
              keyPoints: [
                "Identificación del puesto y tareas",
                "Listado de peligros por naturaleza",
                "Valoración: Severidad x Probabilidad = Nivel de Riesgo",
                "Medidas de prevención existentes",
                "Medidas correctivas necesarias",
                "Responsable y plazo de implantación",
                "Revisión periódica"
              ],
              relations: ["Basado en la guía INSST"],
              usefulLinks: []
            },
            {
              id: "modelo-evaluacion-quimica",
              title: "Evaluación de Riesgos por Agentes Químicos",
              type: "plantilla",
              status: "importante",
              summary: "Plantilla específica para evaluar exposición a sustancias químicas peligrosas.",
              keyPoints: [
                "Identificación de la sustancia (nombre, CAS, clasificación CLP)",
                "Vía de entrada y tipo de exposición",
                "Límites de exposición profesional (LEP/SCOEL)",
                "Medición ambiental o estimación",
                "Controles existentes y necesarios",
                "Vigilancia de la salud"
              ],
              relations: ["RD 374/2001"],
              usefulLinks: []
            },
            {
              id: "modelo-evaluacion-ergonomia",
              title: "Evaluación Ergonómica de Puesto",
              type: "plantilla",
              status: "importante",
              summary: "Plantilla de evaluación ergonómica con métodos RULA y REBA.",
              keyPoints: [
                "Descripción del puesto y tareas",
                "Posturas de trabajo observadas",
                "Movimientos repetitivos",
                "Manejo manual de cargas",
                "Evaluación RULA/REBA",
                "Medidas de mejora ergonómica"
              ],
              relations: ["Guía INSST Ergonomía"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "planes-emergencia",
          title: "Planes de Emergencia",
          items: [
            {
              id: "modelo-plan-emergencia",
              title: "Modelo de Plan de Emergencia",
              type: "plantilla",
              status: "fundamental",
              summary: "Plantilla para elaborar un plan de emergencia completo según RD 39/1997.",
              keyPoints: [
                "Identificación de la empresa y centro de trabajo",
                "Evaluación de riesgos de emergencia",
                "Organización de emergencias: alarmar, evacuar, extinction, socorrer",
                "Equipos y medios disponibles",
                "Planos de evacuación",
                "Simulacros y formación",
                "Contactos de emergencia (112, bomberos, policía)"
              ],
              relations: ["RD 39/1997 y RD 393/2007"],
              usefulLinks: []
            },
            {
              id: "modelo-plan-derrame",
              title: "Protocolo de Derrames Químicos",
              type: "plantilla",
              status: "importante",
              summary: "Procedimiento de actuación ante derrames de sustancias químicas peligrosas.",
              keyPoints: [
                "Evaluación del derrame (sustancia, cantidad, zona)",
                "Evacuación del área si es necesario",
                "Equipos de contención y absorción",
                "Procedimiento de limpieza",
                "Gestión del residuo generado",
                "Documentación del incidente"
              ],
              relations: ["Relacionado con saneamiento industrial"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "matrices-riesgo",
          title: "Matrices de Riesgo",
          items: [
            {
              id: "matriz-valoracion",
              title: "Matriz de Valoración de Riesgos",
              type: "plantilla",
              status: "fundamental",
              summary: "Matriz de severidad x probabilidad para clasificar niveles de riesgo (5x5).",
              keyPoints: [
                "Severidad: 1 (inapreciable) a 5 (muy grave)",
                "Probabilidad: 1 (improbable) a 5 (muy probable)",
                "Riesgo Bajo (1-4): medidas preventivas generales",
                "Riesgo Medio (5-9): medidas correctivas en plazo",
                "Riesgo Alto (10-19): medidas urgentes",
                "Riesgo Muy Alto (20-25): paralización inmediata"
              ],
              relations: ["Metodología INSST"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "formatos-informe",
          title: "Formatos de Informe",
          items: [
            {
              id: "modelo-informe-evaluacion",
              title: "Modelo de Informe de Evaluación de Riesgos",
              type: "plantilla",
              status: "fundamental",
              summary: "Formato oficial de informe técnico para presentar resultados de evaluación de riesgos.",
              keyPoints: [
                "Portada: empresa, fecha, evaluador, alcance",
                "Introducción y objetivos",
                "Metodología utilizada",
                "Resultados por puesto/nivel",
                "Conclusiones y recomendaciones",
                "Plan de acción prioritario",
                "Anexos: fotos, mediciones, fichas técnicas"
              ],
              relations: ["Obligatorio según RD 39/1997"],
              usefulLinks: []
            },
            {
              id: "modelo-informe-auditoria",
              title: "Modelo de Informe de Auditoría PRL",
              type: "plantilla",
              status: "importante",
              summary: "Formato para informe de auditoría de sistemas de gestión de PRL.",
              keyPoints: [
                "Alcance y objetivos de la auditoría",
                "Criterios de auditoría (ISO 45001, normativa)",
                "Hallazgos: conformidades y no conformidades",
                "Evidencias documentales",
                "Recomendaciones y plan de acción",
                "Opinión global del sistema de gestión"
              ],
              relations: ["ISO 45001:2018 - Cláusula 9.2"],
              usefulLinks: []
            }
          ]
        }
      ]
    },
    {
      id: "normativa-complementaria",
      title: "Normativa Complementaria",
      icon: "\uD83D\uDCCB",
      description: "Reales Decretos y normas que complementan la normativa principal de PRL",
      categories: [
        {
          id: "reales-decretos-extra",
          title: "Reales Decretos Adicionales",
          items: [
            {
              id: "rd-216-2004",
              title: "RD 216/2004 - Atmósferas Explosivas",
              type: "real-decreto",
              status: "obligatoria",
              summary: "Si en tu centro de trabajo hay gases, vapores o polvos que pueden formar mezclas explosivas (ATEX), este RD es la norma. En saneamiento se aplica cuando trabajás en pozos con gases metano o sulfuro de hidrógeno.",
              keyPoints: [
                "Zonas ATEX: clasificar los espacios donde hay riesgo de explosión (Zona 0, 1, 2 para gases; Zona 20, 21, 22 para polvos)",
                "Equipos ATEX: todos los equipos eléctricos y mecánicos en zonas clasificadas DEBEN ser aptos ATEX",
                "Señalización obligatoria de zonas de riesgo de explosión",
                "Evaluación de riesgos específica para atmósferas explosivas",
                "Plan de emergencia ante explosión",
                "Formación de trabajadores en riesgo ATEX"
              ],
              relations: ["Complementa el RD 374/2001 (agentes químicos)", "Muy relevante en pozos de saneamiento con gases"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 216/2004)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2004-3300" }
              ],
              comoLoUso: "Cuando entrás a un pozo de saneamiento, el metano (CH₄) y el sulfuro de hidrógeno (H₂S) pueden formar mezclas explosivas. Vos medís las concentraciones con gasómetro, clasificás la zona ATEX, y te asegurás de que TODOS los equipos (herramientas, lámparas, ventilación) sean aptos para esa zona."
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
                "Vigilancia de la salud específica por agente",
                "Medidas de eliminación o reducción en origen"
              ],
              relations: ["Complementa el RD 486/1997 (lugares de trabajo)", "Relacionado con RD 39/1997"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 1299/2006)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-22486" }
              ],
              comoLoUso: "En saneamiento, el ruido de bombas, compresores y herramientas neumáticas es constante. Vos medís los niveles con sonómetro, calculás la dosis de exposición diaria, y si supera los 80 dB(A) tenés que poner silenciadores, dar protectores auditivos y hacer vigilancia de la salud."
            },
            {
              id: "rd-393-2007",
              title: "RD 393/2007 - SPAI (Planes de Autoprotección)",
              type: "real-decreto",
              status: "obligatoria",
              summary: "Sistema de Protección Civil y Atención de Emergencias. Regula los planes de autoprotección que grandes empresas e instalaciones DEBEN tener.",
              keyPoints: [
                "¿Quién lo necesita? Empresas con +500 trabajadores, instalaciones industriales, centros comerciales, hospitales",
                "Plan de autoprotección: documento con protocolos ante emergencias",
                "Equipos de emergencia interna: brigadas de evacuación, primeros auxilios, lucha contra incendios",
                "Simulacros obligatorios periódicos (mínimo 1 al año)",
                "Coordinación con servicios de emergencia externos (bomberos, policía)",
                "Clasificación de emergencias: nivel 1 (interno), nivel 2 (exterior), nivel 3 (catástrofe)"
              ],
              relations: ["Complementa los planes de emergencia del RD 39/1997"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 393/2007)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-20521" }
              ],
              comoLoUso: "Cuando una empresa grande te pida que le hagas el plan de emergencia, vos tenés que seguir este RD. Identificás los riesgos específicos (incendio, derrame químico, explosión, etc.), armás los protocolos, designás las brigadas, hacés los simulacros, y coordinás con bomberos."
            },
            {
              id: "rd-299-2006",
              title: "RD 299/2006 - Equipos de Trabajo (actualización)",
              type: "real-decreto",
              status: "complementaria",
              summary: "Modifica y actualiza el RD 1215/1997 sobre equipos de trabajo. Incluye nuevas exigencias de mantenimiento, inspección y marcado CE.",
              keyPoints: [
                "Mantenimiento preventivo según instrucciones del fabricante (obligatorio)",
                "Inspecciones periódicas obligatorias antes de cada uso y según calendario",
                "Marcado CE y declaración de conformidad del fabricante",
                "Formación específica para cada tipo de equipo",
                "Registro de inspecciones y mantenimiento",
                "Retiro de servicio de equipos que no cumplan"
              ],
              relations: ["Modifica y amplía el RD 1215/1997"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 299/2006)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-21467" }
              ],
              comoLoUso: "Vos como técnico revisás que cada equipo de trabajo tenga: 1) Mantenimiento al día, 2) Inspección periódica documentada, 3) Marcado CE visible, 4) Operario con formación. Si ves un andamio sin inspección o un montacargas sin carné, lo parás."
            },
            {
              id: "rd-1620-2011",
              title: "RD 1620/2011 - Olas de Calor",
              type: "real-decreto",
              status: "complementaria",
              summary: "Protocolo de actuación ante olas de calor. Si trabajás al aire libre en verano, esto te protege.",
              keyPoints: [
                "Aviso preventivo: T > 37°C previsible → medidas preventivas",
                "Aviso de ola de calor: 3 días seguidos T máxima > 40°C",
                "Obligaciones del empresario: agua, sombra, descansos, vigilancia sanitaria",
                "Horario de trabajo reducido en horas de máximo calor (12:30-16:30 recomendado)",
                "Vigilancia de trabajadores especialmente sensibles",
                "Protocolo de actuación ante golpe de calor"
              ],
              relations: ["Complementa el RD 486/1997 (condiciones de trabajo)"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 1620/2011)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2011-14798" }
              ],
              comoLoUso: "En verano, cuando trabajás en saneamiento exterior (alcantarillas, inspecciones, obras), el calor es un riesgo REAL. Programá salidas en horas frescas, llevá agua constante, hacé descansos cada 45 min, y vigilá a los compañeros por síntomas de golpe de calor."
            },
            {
              id: "rd-840-2003",
              title: "RD 840/2003 - Riesgos Eléctricos",
              type: "real-decreto",
              status: "obligatoria",
              summary: "Medidas de seguridad en trabajos con riesgo eléctrico. Si trabajás cerca de instalaciones eléctricas, conocé estas normas.",
              keyPoints: [
                "Distancias de seguridad: 0,5m si < 1kV; mayor si > 1kV",
                "Trabajos en instalaciones desenergizadas: protocolo LOTO (bloqueo y etiquetado)",
                "Trabajos en instalaciones energizadas: solo con autorización y EPIs especiales",
                "Tierra provisional obligatoria antes de trabajar",
                "Señalización del área de trabajo",
                "Personal habilitado: solo electricistas titulados para trabajos activos"
              ],
              relations: ["Complementa el RD 1215/1997 y el RD 374/2001"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 840/2003)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-14228" }
              ],
              comoLoUso: "Cuando hacés saneamiento en zonas con instalaciones eléctricas, siempre verificás: ¿hay cables expuestos? ¿La instalación está desenergizada? ¿Se hizo el bloqueo y etiquetado? Si no sabés si está vivo o muerto, NO TOCÁS. Llamás al electricista."
            }
          ]
        }
      ]
    },
    {
      id: "catalunya",
      title: "Normativa Cataluña",
      icon: "\uD83C\uDFF4",
      description: "Leyes y decretos autonómicos de Cataluña en materia de PRL. Obligatorios si trabajás en territorio catalán.",
      categories: [
        {
          id: "leyes-catalanas",
          title: "Legislación Autonómica Catalana",
          items: [
            {
              id: "ley-5-2007-cat",
              title: "Ley 5/2007 de Prevención de Riesgos Laborales (Cataluña)",
              type: "ley-autonomica",
              status: "obligatoria-catalunya",
              summary: "La ley de PRL específica de Cataluña. Si trabajás en Barcelona o cualquier pueblo catalán, esta ley ES OBLIGATORIA además de la estatal.",
              keyPoints: [
                "Creación del Instituto Catalán de Seguridad y Salud en el Trabajo (ICSST)",
                "Pirámide preventiva catalana: empresas, mutuas, administración catalana",
                "Coordinación entre administración central y autonómica",
                "Planes de prevención adaptados al contexto catalán",
                "Inspección de trabajo: competencia compartida con el Estado",
                "Formación en catalán para trabajadores (importante)"
              ],
              relations: ["Complementa la Ley 31/1995 a nivel autonómico", "Obligatoria si trabajás en Cataluña"],
              usefulLinks: [
                { text: "Generalitat de Catalunya - Legislación", url: "https://dogc.gencat.cat" }
              ],
              comoLoUso: "Si vas a trabajar en Barcelona, TENÉS que conocer esta ley. La diferencia principal es que Cataluña tiene su propio servicio de inspección y sus propias guías. Muchos documentos internos de empresas en Cataluña deben estar en catalán."
            },
            {
              id: "decret-183-2006-cat",
              title: "Decret 183/2006 - Coordinación en Obras (Cataluña)",
              type: "decreto-autonomico",
              status: "obligatoria-catalunya",
              summary: "Desarrollo del Plan de Seguridad y Salud en obras de construcción en Cataluña.",
              keyPoints: [
                "Coordinador de seguridad y salud obligatorio en obras > 30 días y > 500m²",
                "Plan de seguridad y salud específico para cada obra",
                "Notificación a la autoridad laboral catalana antes de iniciar obras",
                "Trabajos especiales: espacios confinados, altura, excavaciones",
                "Coordinación entre empresas contratistas y subcontratistas",
                "Control documental en catalán y castellano"
              ],
              relations: ["Versión catalana del RD 1627/1997 (coordinación en obras)"],
              usefulLinks: [
                { text: "Decret 183/2006 (DOGC)", url: "https://dogc.gencat.cat" }
              ],
              comoLoUso: "Si te contratan para hacer saneamiento en una obra en Cataluña, el coordinador de seguridad te va a pedir que cumplas con este decreto. Tus evaluaciones de riesgo y planes de emergencia deben seguir la normativa catalana además de la estatal."
            },
            {
              id: "decret-62-2010-cat",
              title: "Decret 62/2010 - Servicios de Prevención (Cataluña)",
              type: "decreto-autonomico",
              status: "obligatoria-catalunya",
              summary: "Organización de los servicios de prevención de riesgos laborales en Cataluña.",
              keyPoints: [
                "Registro de empresas de prevención en Cataluña",
                "Coordinación entre Mutua y servicios de prevención",
                "Inspección y vigilancia por la autoridad laboral catalana",
                "Formación específica para técnicos de PRL en Cataluña",
                "Certificados de profesionalidad reconocidos en Cataluña"
              ],
              relations: ["Complementa el RD 39/1997 a nivel catalán"],
              usefulLinks: [
                { text: "Decret 62/2010 (DOGC)", url: "https://dogc.gencat.cat" }
              ],
              comoLoUso: "Cuando te homologuen el título y quieras trabajar en Cataluña, vas a necesitarte registrar ante la autoridad laboral catalana. Este decreto te dice cómo hacerlo."
            },
            {
              id: "resol-1730-2018-cat",
              title: "Resolución 1730/2018 - Formación en PRL (Cataluña)",
              type: "resolucion-autonomica",
              status: "informativa",
              summary: "Baremos de formación y capacitación profesional de los técnicos de prevención en Cataluña.",
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
              comoLoUso: "ESTO es lo que necesitás para saber qué título homologar y qué formación adicional necesitás en Cataluña. Consultá con el SEPE catalán para saber exactamente qué documentos necesitás."
            }
          ]
        }
      ]
    },
    {
      id: "saneamiento-sector",
      title: "Saneamiento Industrial",
      icon: "\uD83E\uDDF0",
      description: "Contenido específico para el sector de saneamiento: procedimientos, riesgos sectoriales y buenas prácticas",
      categories: [
        {
          id: "procedimientos-saneamiento",
          title: "Procedimientos de Trabajo Seguro",
          items: [
            {
              id: "guia-saneamiento-industrial",
              title: "Guía de Saneamiento Industrial - INSST",
              type: "guia-sectorial",
              status: "recomendada",
              summary: "Guía específica para el sector de saneamiento industrial. Cubre riesgos, prevención y buenas prácticas.",
              keyPoints: [
                "Riesgos específicos del saneamiento: químicos, biológicos, confinados, altura",
                "EPIs específicos: guantes químicos, mascarillas, trajes, arneses",
                "Procedimientos de trabajo seguro para cada tipo de intervención",
                "Protocolos de limpieza y desinfección de instalaciones",
                "Gestión de residuos de saneamiento",
                "Inspecciones y auditorías de instalaciones"
              ],
              relations: ["Aplicación directa de todas las normativas de PRL al sector"],
              comoLoUso: "Esta guía es tu manual práctico. Cada vez que vayas a hacer un trabajo de saneamiento, consultá la guía para el procedimiento seguro."
            },
            {
              id: "protocolo-pozo-visita",
              title: "Protocolo: Trabajo en Pozos de Visita",
              type: "procedimiento",
              status: "fundamental",
              summary: "Procedimiento paso a paso para trabajar en pozos de visita de saneamiento.",
              keyPoints: [
                "1. Permisos: permiso de trabajo firmado por responsable",
                "2. Medición atmosférica: O₂ (19,5-23,5%), CH₄ (< 1% LIE), H₂S (< 10 ppm)",
                "3. Ventilación: extractor antes de entrar y durante el trabajo",
                "4. EPIs: casco, guantes, calzado de seguridad, arnés con línea de vida",
                "5. Vigilancia: persona externa con radio y equipo de rescate",
                "6. Comunicación: radio o cuerda para mantener contacto constante",
                "7. Emergencia: protocolo de rescate sin entrar sin EPI"
              ],
              relations: ["Aplicación directa del RD 604/2006", "Fundamental en saneamiento"],
              comoLoUso: "ESTE es tu procedimiento de referencia. Siempre seguí el mismo esquema. Nunca te saltes un paso aunque sea 'rápido'. Si ves a alguien saltándose un paso, PARÁ la obra."
            },
            {
              id: "protocolo-desratizacion",
              title: "Protocolo: Desratización y Control de Plagas",
              type: "procedimiento",
              status: "fundamental",
              summary: "Procedimiento seguro para trabajos de desratización y control de plagas en instalaciones industriales.",
              keyPoints: [
                "Evaluación de riesgos: químicos (plaguicidas) + biológicos (roedores, insectos)",
                "EPIs obligatorios: mascarilla, guantes, traje de protección",
                "Señalización del área tratada",
                "Plaguicidas autorizados: solo productos registrados en el Ministerio de Sanidad",
                "Registro de tratamientos aplicados",
                "Vigilancia de la salud del aplicador"
              ],
              relations: ["Aplicación del RD 374/2001 (químicos) y RD 664/1997 (biológicos)"],
              comoLoUso: "Si trabajás en desratización, estos son tus protocolos. Cada producto tiene su ficha técnica, cada aplicación se registra, y vos tenés que vigilar tu salud constantemente."
            },
            {
              id: "protocolo-limpieza-tanques",
              title: "Protocolo: Limpieza de Tanques",
              type: "procedimiento",
              status: "fundamental",
              summary: "Procedimiento para limpieza y mantenimiento de tanques de agua, residuos o productos químicos.",
              keyPoints: [
                "1. Vaciar y limpiar el tanque de residuos visibles",
                "2. Ventilación forzada (mínimo 2 horas antes de entrar)",
                "3. Medición atmosférica completa",
                "4. Desconexión y bloqueo de entradas (LOTO)",
                "5. EPIs completos: traje, mascarilla, guantes, arnés",
                "6. Persona de vigilancia externa con equipo de rescate",
                "7. Trabajo en turnos cortos (máximo 20 min dentro)"
              ],
              relations: ["Espacio confinado (RD 604/2006) + Agentes químicos (RD 374/2001)"],
              comoLoUso: "Limpiar un tanque es uno de los trabajos más peligrosos. Siempre seguí el protocolo al pie de la letra. No hay atajos."
            }
          ]
        }
      ]
    }
  ],
  timeline: [
    {
      id: "fase-1",
      title: "Fase 1: Normativa Española",
      period: "Julio - Octubre 2026",
      months: ["Jul 2026", "Ago 2026", "Sep 2026", "Oct 2026"],
      topics: ["Ley 31/1995", "RD 39/1997", "RD 1215/1997", "RD 773/1997", "RD 486/1997", "Guía Evaluación Riesgos"],
      status: "pendiente"
    },
    {
      id: "fase-2",
      title: "Fase 2: ISO y Sistemas de Gestión",
      period: "Noviembre 2026 - Marzo 2027",
      months: ["Nov 2026", "Dic 2026", "Ene 2027", "Feb 2027", "Mar 2027"],
      topics: ["ISO 45001:2018", "ISO 14001:2015", "Estructura HLS", "Auditorías internas"],
      status: "pendiente"
    },
    {
      id: "fase-3",
      title: "Fase 3: Riesgos Específicos",
      period: "Abril - Agosto 2027",
      months: ["Abr 2027", "May 2027", "Jun 2027", "Jul 2027", "Ago 2027"],
      topics: ["Agentes Químicos", "Agentes Biológicos", "Ergonomía", "Psicosociología", "Primeros Auxilios", "Espacios Confinados"],
      status: "pendiente"
    },
    {
      id: "fase-4",
      title: "Fase 4: Repaso y Práctica",
      period: "Septiembre 2027 - Enero 2028",
      months: ["Sep 2027", "Oct 2027", "Nov 2027", "Dic 2027", "Ene 2028"],
      topics: ["Repaso general", "Catalán B1", "Modelos prácticos", "Simulacros de evaluación", "Preparación homologación"],
      status: "pendiente"
    }
  ],
  vocabulario: {
    "argentino_a_peninsular": [
      { ar: "ergónomo", es: "ergónomo / técnico en prevención" },
      { ar: "higiene industrial", es: "higiene industrial" },
      { ar: "seguridad e higiene", es: "seguridad y salud en el trabajo (SST)" },
      { ar: "explosión", es: "explosión / atmósfera explosiva (ATEX)" },
      { ar: "desratización", es: "control de plagas / desratización" },
      { ar: "desinfección", es: "desinfección / tratamiento fitosanitario" },
      { ar: "lavadero", es: "zona de lavado / ducha de seguridad" },
      { ar: "cinta transportadora", es: "transportador / cinta transportadora" },
      { ar: "matafuegos", es: "extintor" },
      { ar: "encuesta de ruido", es: "medición de ruido / mapa de ruido" }
    ]
  }
};
