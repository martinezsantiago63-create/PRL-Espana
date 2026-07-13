const QUIZZES_NUEVOS = [
  {
    id: "quiz-rd-216-2004",
    categoria: "Atmósferas Explosivas (ATEX)",
    preguntas: [
      {
        pregunta: "¿Qué gases son los más peligrosos en pozos de saneamiento?",
        opciones: ["Oxígeno y nitrógeno", "Metano (CH₄) y Sulfuro de hidrógeno (H₂S)", "CO₂ y vapor de agua", "Aire comprimido"],
        correcta: 1,
        explicacion: "El metano es inflamable (LIE 5%) y el H₂S es tóxico letal (>100 ppm). Ambos son comunes en pozos de saneamiento."
      },
      {
        pregunta: "¿Qué es una Zona ATEX Zona 1?",
        opciones: ["Zona donde NUNCA hay gases", "Zona donde la atmósfera explosiva es probable en operación normal", "Zona donde solo hay riesgo de explosión en anomalías", "Zona donde NO se puede trabajar"],
        correcta: 1,
        explicacion: "Zona 1: atmósfera explosiva PROBABLE en operación normal. Ejemplo: alrededor de una boca de pozo con gas residual."
      },
      {
        pregunta: "¿Qué marca debe tener un equipo para usarlo en zona ATEX?",
        opciones: ["Marca CE únicamente", "Marcado Ex (certificado por organismo notificado)", "No necesita marca especial", "Solo necesita ser nuevo"],
        correcta: 1,
        explicacion: "Los equipos ATEX deben tener marcado Ex además del CE. La marca Ex indica que el equipo es apto para la zona clasificada."
      },
      {
        pregunta: "¿Cuál es el Límite Inferior de Explosión (LIE) del metano?",
        opciones: ["1%", "5%", "10%", "20%"],
        correcta: 1,
        explicacion: "El metano explota cuando su concentración está entre 5% (LIE) y 15% (LSE) en el aire. Por debajo de 5% no es inflamable."
      },
      {
        pregunta: "Si ves una lámpara sin marcado Ex en un pozo clasificado como Zona 1, ¿qué hacés?",
        opciones: ["La usas igual, es solo una lámpara", "La quitás y reportás la incidencia", "Le pones cinta aislante encima", "No haces nada"],
        correcta: 1,
        explicacion: "Una lámpara sin Ex puede generar una chispa que cause explosión. Debes retirarla y reportar la incidencia inmediatamente."
      }
    ]
  },
  {
    id: "quiz-rd-1299-2006",
    categoria: "Riesgos Higiénicos",
    preguntas: [
      {
        pregunta: "¿Cuál es el Valor Límite de Exposición (VLE) para ruido?",
        opciones: ["80 dB(A)", "85 dB(A)", "87 dB(A)", "90 dB(A)"],
        correcta: 2,
        explicacion: "El VLE de ruido es 87 dB(A). La acción inferior es 80 dB(A) y la superior 85 dB(A)."
      },
      {
        pregunta: "Si el ruido en un puesto es de 82 dB(A), ¿qué medida tomás?",
        opciones: ["Nada, está dentro del VLE", "Informar y dar protectores auditivos a disposición (acción inferior)", "Parar la actividad inmediatamente", "Cambiar de horario"],
        correcta: 1,
        explicacion: "82 dB(A) está entre la acción inferior (80 dB) y la superior (85 dB). Se debe informar y poner protectores a disposición."
      },
      {
        pregunta: "¿Cuál es el valor límite de vibraciones mano-brazo?",
        opciones: ["1,25 m/s²", "2,5 m/s²", "5 m/s²", "10 m/s²"],
        correcta: 1,
        explicacion: "El VLE de vibraciones mano-brazo es 2,5 m/s² (exposición diaria de 8 horas). El valor de acción es 1,25 m/s²."
      },
      {
        pregunta: "¿Qué herramienta de saneamiento genera más vibraciones mano-brazo?",
        opciones: ["Paleta", "Taladro percutor", "Escoba", "Manguera"],
        correcta: 1,
        explicacion: "El taladro percutor genera vibraciones de 5-15 m/s², superando ampliamente el VLE de 2,5 m/s². Se requieren medidas de reducción."
      },
      {
        pregunta: "¿Cada cuánto se debe hacer vigilancia de la salud auditiva en trabajadores expuestos a >85 dB(A)?",
        opciones: ["Cada 6 meses", "Cada 12 meses", "Cada 2 años", "Solo al inicio"],
        correcta: 1,
        explicacion: "La vigilancia de la salud auditiva se debe hacer anualmente para trabajadores expuestos a niveles superiores a la acción superior (85 dB(A))."
      }
    ]
  },
  {
    id: "quiz-rd-393-2007",
    categoria: "Planes de Autoprotección (SPAI)",
    preguntas: [
      {
        pregunta: "¿Qué empresa DEBE tener plan de autoprotección?",
        opciones: ["Toda empresa con más de 10 trabajadores", "Empresas con +500 trabajadores o instalaciones de riesgo", "Solo fábricas de armamento", "Solo hospitales"],
        correcta: 1,
        explicacion: "El RD 393/2007 obliga a empresas con +500 trabajadores, instalaciones industriales de riesgo, centros comerciales, hospitales, etc."
      },
      {
        pregunta: "¿Cuántos simulacros obligatorios se deben hacer al mínimo?",
        opciones: ["1 cada 2 años", "1 al año como mínimo", "1 cada 5 años", "No son obligatorios"],
        correcta: 1,
        explicacion: "El plan de autoprotección debe incluir simulacros periódicos, con un mínimo de 1 al año."
      },
      {
        pregunta: "¿Qué es un Nivel 2 de emergencia?",
        opciones: ["Emergencia interna resoluble con medios propios", "Emergencia que requiere servicios externos (bomberos)", "Catástrofe con múltiples víctimas", "Incidente sin consecuencias"],
        correcta: 1,
        explicacion: "Nivel 2: emergencia que requiere ayuda de servicios externos (bomberos, policía, sanitarios). Ejemplo: incendio que no se controla con extintores."
      },
      {
        pregunta: "¿Quién coordina la emergencia dentro de la empresa?",
        opciones: ["El trabajador más antiguo", "El jefe de emergencia (director de planta)", "Los bomberos", "La mutua"],
        correcta: 1,
        explicacion: "El jefe de emergencia (normalmente el director de planta o su sustituto) coordina toda la actuación interna ante emergencias."
      },
      {
        pregunta: "¿Qué brigadas deben formarse en un plan de autoprotección?",
        opciones: ["Solo brigada de incendios", "Incendios, primeros auxilios, evacuación, derrames químicos", "No es necesario formar brigadas", "Solo 1 persona por brigada"],
        correcta: 1,
        explicacion: "Un plan completo incluye: brigada de incendios, primeros auxilios, evacuación, y si hay riesgo químico, brigada de derrames."
      }
    ]
  },
  {
    id: "quiz-rd-1620-2011",
    categoria: "Olas de Calor",
    preguntas: [
      {
        pregunta: "¿Cuándo se declara aviso de ola de calor en el litoral español?",
        opciones: ["3 días con T máxima > 35°C", "3 días con T máxima > 40°C", "1 día con T > 42°C", "Cuando el jefe lo dice"],
        correcta: 1,
        explicacion: "Aviso de ola de calor: 3 o más días consecutivos con temperatura máxima > 40°C en el litoral o > 39°C en el interior."
      },
      {
        pregunta: "¿Cuánto tiempo de descanso en sombra se recomienda cada cuántos minutos de exposición al sol?",
        opciones: ["10 min cada 60 min", "15 min cada 45-60 min", "30 min cada 2 horas", "No hay recomendación oficial"],
        correcta: 1,
        explicacion: "Se recomienda descanso de 15 minutos cada 45-60 minutos de exposición directa al sol en horas de máxima insolación."
      },
      {
        pregunta: "¿Cuál es el primer síntoma de golpe de calor leve?",
        opciones: ["Fiebre alta", "Dolor de cabeza y mareo", "Pérdida de conciencia", "Convulsiones"],
        correcta: 1,
        explicacion: "Los primeros síntomas son: dolor de cabeza, mareo, náusea, sudoración excesiva y calambres musculares."
      },
      {
        pregunta: "Si un trabajador tiene piel caliente y seca y está confuso, ¿qué hacés?",
        opciones: ["Darle agua y que siga trabajando", "Llamar al 112 y enfriar su cuerpo", "Dejarlo reposar a la sombra solo", "Esperar a que se le pase"],
        correcta: 1,
        explicacion: "Es golpe de calor GRAVE. Llamar al 112 inmediatamente, enfriar el cuerpo con agua, no dar líquidos si está inconsciente."
      },
      {
        pregunta: "¿En qué horario se debe evitar el trabajo al aire libre en ola de calor?",
        opciones: ["De 8:00 a 12:00", "De 12:30 a 16:30", "De 18:00 a 22:00", "Todo el día"],
        correcta: 1,
        explicacion: "El horario de mayor riesgo es de 12:30 a 16:30, cuando la radiación solar es más intensa."
      }
    ]
  },
  {
    id: "quiz-rd-840-2003",
    categoria: "Riesgos Eléctricos",
    preguntas: [
      {
        pregunta: "¿Cuál es la distancia de seguridad para instalaciones de 400V trifásico?",
        opciones: ["0,5 metros", "1,0 metros", "1,5 metros", "3,0 metros"],
        correcta: 2,
        explicacion: "Para 250-500V CA, la distancia de seguridad es 1,5 metros. Para 400V trifásico, se aplica este valor."
      },
      {
        pregunta: "¿Qué significa el protocolo LOTO?",
        opciones: ["Luz, Orden, Trabajo, Orden", "Lockout-Tagout: Bloqueo y Etiquetado", "Localización, Operación, Trabajo, Observación", "No significa nada específico"],
        correcta: 1,
        explicacion: "LOTO = Lockout-Tagout = Bloqueo y Etiquetado. Es el protocolo para asegurar que una instalación está desenergizada antes de trabajar."
      },
      {
        pregunta: "¿Cuál es el paso MÁS IMPORTANTE antes de trabajar en una instalación eléctrica?",
        opciones: ["Poner EPIs dieléctricos", "Conectar tierra provisional", "Verificar ausencia de tensión con detector homologado", "Llamar al jefe"],
        correcta: 2,
        explicacion: "Antes de todo, DEBES verificar que no hay tensión con un detector homologado. No confíes en que está apagado sin medir."
      },
      {
        pregunta: "¿Quién puede trabajar en instalaciones energizadas > 1kV?",
        opciones: ["Cualquier trabajador con EPIs", "Solo personal con título de instalador autorizado + habilitación específica", "El jefe de equipo", "El que tenga más experiencia"],
        correcta: 1,
        explicacion: "Para instalaciones > 1kV, se requiere título de instalador autorizado y habilitación específica de la empresa."
      },
      {
        pregunta: "Si ves un cuadro eléctrico mojado, ¿qué hacés?",
        opciones: ["Lo secás con un trapo y seguís", "No tocas nada, desconectás la energía desde otro punto y llamás al electricista", "Lo abrís igual porque tenés prisa", "Le echás agua para limpiarlo"],
        correcta: 1,
        explicacion: "Un cuadro mojado es EXTREMADAMENTE peligroso. No tocar, desconectar desde otro punto seguro, y llamar a un electricista autorizado."
      }
    ]
  },
  {
    id: "quiz-saneamiento",
    categoria: "Saneamiento Industrial",
    preguntas: [
      {
        pregunta: "¿Cuál es el paso PRIMERO antes de entrar a un pozo de saneamiento?",
        opciones: ["Ponerse los EPIs", "Medir la atmósfera con gasómetro", "Ventilar el pozo", "Pedir permiso verbal"],
        correcta: 1,
        explicacion: "El primer paso es la medición atmosférica (O₂, H₂S, CH₄, CO). Sin medición, NO ENTRÁS. Ni siquiera antes de ventilar."
      },
      {
        pregunta: "¿Cuál es el nivel seguro de oxígeno para entrar a un espacio confinado?",
        opciones: ["15-20%", "19,5-23,5%", "21-25%", "Cualquier nivel con mascarilla"],
        correcta: 1,
        explicacion: "El oxígeno debe estar entre 19,5% y 23,5%. Por debajo de 19,5% hay riesgo de asfixia, por encima de 23,5% hay riesgo de incendio."
      },
      {
        pregunta: "¿Cuánto tiempo mínimo se debe ventilar un pozo antes de entrar?",
        opciones: ["1 minuto", "5 minutos", "10-15 minutos", "No es necesario ventilar si se midió"],
        correcta: 2,
        explicacion: "La ventilación mínima es de 10-15 minutos antes de entrar, y se debe mantener durante todo el trabajo."
      },
      {
        pregunta: "¿Qué producto químico NUNCA se debe mezclar con lejía (hipoclorito)?",
        opciones: ["Agua", "Jabón neutro", "Ácido muriático (salfumán)", "Detergente alcalino"],
        correcta: 2,
        explicacion: "Lejía + ácido muriático = GAS CLORO tóxico. Esta mezcla puede causar la muerte en minutos."
      },
      {
        pregunta: "¿Cuánto tiempo máximo se debe permanecer dentro de un espacio confinado seguido?",
        opciones: ["60 minutos", "45 minutos", "20-30 minutos", "El tiempo que haga falta"],
        correcta: 2,
        explicacion: "El tiempo máximo recomendado es 20-30 minutos seguidos, con descansos de 5-10 minutos fuera del espacio confinado."
      },
      {
        pregunta: "Si ves a un compañero inconsciente dentro de un pozo, ¿qué hacés?",
        opciones: ["Entrás a rescatarlo rápido", "Llamás al 112 e intentás subirlo con trípode SIN ENTRAR", "Le gritás que se levante", "Esperás a que se despierte solo"],
        correcta: 1,
        explicacion: "NUNCA entres a rescatar sin protección. Llamar al 112 y usar trípode/polea para subirlo. Si entrás, morís igual."
      },
      {
        pregunta: "¿Qué EPI es OBLIGATORIO para entrar a un pozo de saneamiento?",
        opciones: ["Solo guantes", "Casco, guantes, mascarilla, calzado, arnés con línea de vida", "Solo casco", "Zapatillas cómodas"],
        correcta: 1,
        explicacion: "Los EPIs completos para pozo incluyen: casco con barbilla, guantes, mascarilla con filtro, calzado de seguridad, arnés con línea de vida."
      },
      {
        pregunta: "¿Qué es el LOTO y por qué es importante en saneamiento?",
        opciones: ["Un tipo de EPI", "Protocolo de Bloqueo y Etiquetado para desenergizar equipos", "Una herramienta de medición", "Un tipo de gas"],
        correcta: 1,
        explicacion: "LOTO (Lockout-Tagout) es el protocolo para bloquear y etiquetar puntos de energía antes de trabajar en equipos (bombas, válvulas, etc.)."
      }
    ]
  },
  {
    id: "quiz-catalunya",
    categoria: "Normativa Cataluña",
    preguntas: [
      {
        pregunta: "¿Es obligatoria la documentación en catalán en empresas de Cataluña?",
        opciones: ["No, solo castellano", "Solo si el trabajador lo solicita", "Siempre, sin excepción", "Solo para empresas grandes"],
        correcta: 1,
        explicacion: "Los documentos DEBEN estar en catalán si algún trabajador lo solicita. No es obligatorio siempre, pero sí a disposición del trabajador."
      },
      {
        pregunta: "¿Qué organismo regula la PRL en Cataluña?",
        opciones: ["INSST", "ICSST (Institut Català de Seguretat i Salut en el Treball)", "SEPE", "Ministerio de Trabajo"],
        correcta: 1,
        explicacion: "El ICSST es el organismo catalán competente en prevención de riesgos laborales."
      },
      {
        pregunta: "¿Cuántas horas de formación continua se necesitan cada 5 años para mantener la habilitación en Cataluña?",
        opciones: ["20 horas", "50 horas", "100 horas", "No hay formación continua obligatoria"],
        correcta: 1,
        explicacion: "Se requieren mínimo 50 horas de formación continua cada 5 años para mantener la habilitación como técnico de PRL en Cataluña."
      },
      {
        pregunta: "¿Qué título necesita un técnico de PRL para evaluar riesgos en empresas de riesgo alto en Cataluña?",
        opciones: ["Técnico Medio", "Técnico Superior en PRL", "Cualquier título universitario", "No se necesita título"],
        correcta: 1,
        explicacion: "Para evaluar riesgos en empresas de riesgo alto se necesita Técnico Superior en PRL, registrado ante el ICSST."
      },
      {
        pregunta: "¿Qué decreto regula la coordinación de actividades preventivas en obras en Cataluña?",
        opciones: ["RD 1627/1997", "Decret 183/2006", "RD 39/1997", "Ley 5/2007"],
        correcta: 1,
        explicacion: "El Decret 183/2006 es la norma catalana específica para coordinación de actividades preventivas en obras de construcción."
      }
    ]
  }
];

const AUTOEVALUACIONES = [
  {
    id: "autoeval-ley-31",
    titulo: "¿Estoy preparado para la Ley 31/1995?",
    preguntas: [
      "¿Puedo explicar qué es la prevención de riesgos laborales según la ley?",
      "¿Conozco los 10 principios preventivos del Art. 15?",
      "¿Sé qué documentación es obligatoria según el Art. 23?",
      "¿Puedo explicar qué es la evaluación de riesgos y cuándo se hace?",
      "¿Conozco los derechos del trabajador (Art. 18-21)?",
      "¿Sé qué es el Plan de Prevención y qué debe contener?",
      "¿Conozco las funciones del Delegado de Prevención?",
      "¿Puedo explicar qué es la coordinación de empresas en obras?"
    ],
    ley: "Ley 31/1995"
  },
  {
    id: "autoeval-espacios",
    titulo: "¿Estoy preparado para Espacios Confinados?",
    preguntas: [
      "¿Puedo definir qué es un espacio confinado?",
      "¿Sé cuáles son los 4 gases que debo medir y sus valores seguros?",
      "¿Conozco el protocolo completo de ventilación?",
      "¿Sé cuáles son los EPIs obligatorios para entrar?",
      "¿Conozco el protocolo de rescate sin entrar?",
      "¿Puedo explicar qué es el permiso de trabajo y qué contiene?",
      "¿Sé cuándo NO se debe entrar a un espacio confinado?",
      "¿Conozco los casos reales de accidentes y sus lecciones?"
    ],
    ley: "RD 604/2006"
  },
  {
    id: "autoeval-quimicos",
    titulo: "¿Estoy preparado para Agentes Químicos?",
    preguntas: [
      "¿Puedo leer y entender una Hoja de Datos de Seguridad (HDS)?",
      "¿Conozco los pictogramas de peligro CLP?",
      "¿Sé qué productos son incompatibles entre sí?",
      "¿Conozco los Límites de Exposición Profesional (LEP)?",
      "¿Sé qué EPIs usar para cada tipo de químico?",
      "¿Puedo explicar qué hacer ante un derrame químico?",
      "¿Conozco los riesgos específicos del cloro, soda y ácidos?",
      "¿Sé dónde encontrar la información de un producto químico?"
    ],
    ley: "RD 374/2001"
  },
  {
    id: "autoeval-examen",
    titulo: "¿Estoy listo para el examen de homologación?",
    preguntas: [
      "¿Puedo explicar la diferencia entre Ley 31/1995 y RD 39/1997?",
      "¿Conozco los nombres y funciones de al menos 5 Reales Decretos de PRL?",
      "¿Puedo hacer una evaluación de riesgos paso a paso?",
      "¿Sé cómo se organiza un servicio de prevención?",
      "¿Conozco las normativas de Cataluña para trabajar allí?",
      "¿Puedo explicar qué hacer ante una emergencia (incendio, derrame, accidente)?",
      "¿Sé cuáles son los derechos y obligaciones de los trabajadores?",
      "¿Puedo leer un plano básico de seguridad industrial?"
    ],
    ley: "General"
  }
];
