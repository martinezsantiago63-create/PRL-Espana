const CONTENIDO_EXPANDIDO = {
  "iso-45001-2018": {
    titulo: "ISO 45001:2018 - Sistema de Gestión de Seguridad y Salud en el Trabajo",
    tipo: "norma-iso",
    resumenLargo: "La norma ISO 45001 establece los requisitos para un sistema de gestión de SST (Seguridad y Salud en el Trabajo). No es obligatoria por ley, pero SI la piden las empresas grandes, las multinacionales y las que quieren licitaciones públicas. Si sos técnico de PRL, esta norma es tu herramienta principal para organizar la prevención en cualquier empresa.",
    cicloPDCA: {
      plan: {
        capitulo: "Cap 4 y 6",
        queHacer: [
          "Analizar el contexto de la organización (¿dónde estamos?, ¿quiénes somos?)",
          "Identificar las partes interesadas (trabajadores, clientes, proveedores, administración)",
          "Definir el alcance del sistema de gestión",
          "Identificar peligros y evaluar riesgos y oportunidades",
          "Establecer objetivos de SST y planificar acciones",
          "Cumplir los requisitos legales aplicables"
        ],
        herramientas: [
          "Matriz de contexto y partes interesadas",
          "Proceso de identificación de peligros",
          "Matriz de valoración de riesgos",
          "Programa de gestión de riesgos",
          "Objetivos SMART (Específicos, Medibles, Alcanzables, Relevantes, Temporales)"
        ]
      },
      do: {
        capitulo: "Cap 7 y 8",
        queHacer: [
          "Proporcionar recursos (humanos, materiales, financieros)",
          "Desarrollar competencias del personal (formación)",
          "Comunicar interna y externamente sobre SST",
          "Crear y mantener documentación",
          "Controlar las operaciones (procedimientos, instrucciones)",
          "Gestionar proveedores y subcontratistas",
          "Preparar y responder ante emergencias"
        ],
        herramientas: [
          "Manual de gestión",
          "Procedimientos documentados",
          "Instrucciones de trabajo",
          "Registros de formación",
          "Plan de emergencia",
          "Evaluaciones de riesgos"
        ]
      },
      check: {
        capitulo: "Cap 9",
        queHacer: [
          "Medir y monitorear el desempeño de SST",
          "Realizar auditorías internas",
          "Revisar el sistema de gestión (revisión por la dirección)",
          "Analizar no conformidades y acciones correctivas",
          "Evaluar el cumplimiento legal"
        ],
        herramientas: [
          "Indicadores de SST (tasa de accidentes, ausentismo, etc.)",
          "Programa de auditorías internas",
          "Informe de revisión por la dirección",
          "Registro de no conformidades",
          "Acciones correctivas y preventivas"
        ]
      },
      act: {
        capitulo: "Cap 10",
        queHacer: [
          "Identificar oportunidades de mejora",
          "Implementar acciones correctivas",
          "Actualización continua del sistema",
          "Transferir buenas prácticas"
        ],
        herramientas: [
          "Plan de mejoras",
          "Análisis de tendencias",
          "Benchmarking"
        ]
      }
    },
    comoLoUso: `EJEMPLO PRÁCTICO: Te contratan para implementar ISO 45001 en una empresa de saneamiento con 80 trabajadores.

FASE 1 - CONTEXTO (Semanas 1-2):
- Reunión con la dirección: ¿Qué esperan del sistema?
- Encuesta a trabajadores: ¿Qué les preocupa?
- Análisis de la empresa: 3 plantas, 2 almacenes, 80 trabajadores
- Documento de contexto: factores internos y externos

FASE 2 - IDENTIFICACIÓN DE PELIGROS (Semanas 3-4):
- Recorrido por cada puesto de trabajo
- Reuniones con trabajadores de cada área
- Análisis documental (accidentes previos, cuasi-accidentes)
- Resultado: 45 peligros identificados, 12 de riesgo ALTO

FASE 3 - VALORACIÓN (Semana 5):
- Para cada peligro: Severidad × Probabilidad
- 12 riesgos altos → medidas inmediatas
- 18 riesgos medios → plan de mejora
- 15 riesgos bajos → vigilancia

FASE 4 - PLANIFICACIÓN (Semana 6):
- 12 medidas inmediatas con responsables y plazos
- Programa anual de formación
- Programa de auditorías
- Objetivo: reducir accidentes un 30% en 12 meses

FASE 5 - IMPLEMENTACIÓN (Meses 2-6):
- Formar a los 80 trabajadores
- Crear procedimientos (espacios confinados, químicos, altura)
- Implementar sistema de documentación
- Lanzar plan de emergencia

FASE 6 - VERIFICACIÓN (Mes 6):
- 2 auditorías internas
- Revisión por la dirección
- Ajustar lo que no funcionó

FASE 7 - MEJORA (continua):
- Revisión anual del sistema
- Nuevos objetivos cada año
- Certificación ISO (auditoría externa)

En saneamiento, ISO 45001 te da el marco para que TODO lo que hagas tenga sentido y esté documentado.`,
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
  },
  "iso-14001-2015": {
    titulo: "ISO 14001:2015 - Sistema de Gestión Ambiental",
    tipo: "norma-iso",
    resumenLargo: "La norma ISO 14001 establece los requisitos para un sistema de gestión ambiental. Para un técnico de saneamiento, esta norma es MUY relevante porque tu trabajo diario afecta directamente al medio ambiente: vertidos, residuos, emisiones, gestión de aguas residuales. Muchas empresas de saneamiento tienen ISO 14001 como requisito.",
    aspectosAmbientalesSaneamiento: [
      {
        aspecto: "Vertidos de aguas residuales",
        impacto: "Contaminación de ríos, suelo y acuíferos",
        control: "Tratamiento previo, control de parámetros (DBO, COT, pH, metales), registro de vertidos",
        norma: "Real Decreto 849/1986"
      },
      {
        aspecto: "Generación de residuos peligrosos",
        impacto: "Contaminación del suelo y agua",
        control: "Clasificación, almacenamiento, transporte, gestión documental",
        norma: "Real Decreto 833/2015"
      },
      {
        aspecto: "Emisiones a la atmósfera",
        impacto: "Contaminación del aire, cambio climático",
        control: "Control de olores, emisiones de H₂S, filtros, treatment de gases",
        norma: "Ley 34/2007"
      },
      {
        aspecto: "Ruido y vibraciones",
        impacto: "Molestias a vecinos y trabajadores",
        control: "Medición, barreras acústicas, horarios de trabajo",
        norma: "RD 1299/2006"
      },
      {
        aspecto: "Consumo de recursos (agua, energía)",
        impacto: "Agotamiento de recursos naturales",
        control: "Eficiencia energética, reciclaje de agua, optimización de procesos",
        norma: "ISO 50001 (energía)"
      },
      {
        aspecto: "Gestión de lodos y subproductos",
        impacto: "Contaminación si no se gestiona correctamente",
        control: "Aprovechamiento energético, compostaje, vertido controlado",
        norma: "Real Decreto 849/1986"
      }
    ],
    comoLoUso: `EJEMPLO PRÁCTICO: Como técnico de saneamiento en una empresa con ISO 14001, tu trabajo incluye:

1. VERTIDOS:
   - Medís los parámetros de las aguas residuales antes de verterlas
   - DBO < 250 mg/l, pH 6-9, grasas < 50 mg/l
   - Registrás cada medición en el cuaderno de vertidos
   - Si un parámetro supera el límite: ACTIVAS protocolo correctivo

2. RESIDUOS:
   - Los residuos de limpieza de pozos se clasifican como peligrosos o no
   - Los peligrosos van a un gestor autorizado
   - Registrás cada albarán de transporte
   - El residuo no peligroso va a vertedero autorizado

3. EMISIONES:
   - Controlás los olores de las plantas de tratamiento
   - Medís H₂S y NH₃ periódicamente
   - Si hay olores molestos, reportás para instalar filtros

4. DOCUMENTACIÓN:
   - Cuaderno de vertidos actualizado
   - Albaranes de residuos
   - Registros de medición ambiental
   - Plan de emergencia ambiental

5. AUDITORÍA:
   - Cuando viene el auditor ISO 14001, le mostrás toda la documentación
   - Le explicás cómo controlás los aspectos ambientales
   - Si te pide evidencias, le mostrás los registros

Tu ventaja competitiva: si sos técnico de saneamiento Y sabés ISO 14001, las empresas te buscan a VOS porque puedes gestionar tanto la parte de PRL como la ambiental.`
  },
  convenioSaneamiento: {
    titulo: "Convenio Colectivo de Saneamiento y Actividades Auxiliares",
    tipo: "convenio",
    resumenLargo: "El convenio colectivo es el documento que regula las condiciones laborales de TODOS los trabajadores del sector de saneamiento en España. No solo de PRL: sueldos, vacaciones, permisos, pagas, antigüedad, etc. Si sos técnico de saneamiento en España, este convenio es tu 'presupuesto' de derechos.",
    queRegula: [
      {
        concepto: "Salarios mínimos",
        detalle: "Salario mínimo por categoría profesional (técnico, auxiliar, operario). Se actualiza anualmente.",
        ejemplo: "Un técnico de PRL en saneamiento puede ganar entre 28.000€ y 42.000€ brutos al año según experiencia y categoría"
      },
      {
        concepto: "Jornada laboral",
        detalle: "Jornada máxima: 40 horas/semana en cómputo anual. 1.800 horas/año como máximo.",
        ejemplo: "Si trabajás 9 horas diarias de lunes a viernes, son 45 horas. El exceso se compensa con descansos o pagas extras"
      },
      {
        concepto: "Vacaciones",
        detalle: "Mínimo 30 días naturales al año (2,5 días por mes trabajado).",
        ejemplo: "Si trabajaste todo el año, tenés 30 días de vacaciones. Si empezaste en julio, te corresponden 15 días"
      },
      {
        concepto: "Pagas extras",
        detalle: "2 pagas extras al año: una en junio y otra en diciembre. Cada una equivale a 1/12 del salario anual.",
        ejemplo: "Si ganas 30.000€/año, cada paga extra son 2.500€ brutos"
      },
      {
        concepto: "Permisos retribuidos",
        detalle: "Por matrimonio (15 días), nacimiento de hijo (3 días), hospitalización de familiar (2 días), fallecimiento de familiar (2-4 días), mudanza (1 día), citing médico (con límite anual).",
        ejemplo: "Si te casás, tenés 15 días de permiso pagados"
      },
      {
        concepto: "Horas extraordinarias",
        detalle: "Máximo 80 horas extraordinarias al año. Se pagan con un recargo del 75% la primera hora y 100% a partir de la segunda.",
        ejemplo: "Si hacés 2 horas extra al mes durante un año (24 horas), te pagan: 1ª hora = 75% más, 2ª hora = 100% más"
      },
      {
        concepto: "Trabajo nocturno",
        detalle: "Trabajo entre 22:00 y 06:00. Recargo salarial del 30% sobre el salario base.",
        ejemplo: "Si trabajás en saneamiento de noche (urgencias), te pagan un 30% más por cada hora nocturna"
      },
      {
        concepto: "Trabajo en festivos",
        detalle: "Recargo salarial del 75% sobre el salario base.",
        ejemplo: "Si trabajás un domingo de emergencia, te pagan un 75% más por esa jornada"
      },
      {
        concepto: "Formación profesional",
        detalle: "El empresario DEBE proporcionar formación continua. Mínimo 20 horas anuales para todos los trabajadores.",
        ejemplo: "La empresa debe pagarte cursos de actualización en PRL cada año"
      },
      {
        concepto: "Prevención de riesgos laborales",
        detalle: "El convenio incluye cláusulas específicas de PRL: formación, EPIs, vigilancia de la salud, planes de emergencia.",
        ejemplo: "El convenio puede establecer que los trabajadores de saneamiento tengan revisión médica semestral (no anual)"
      }
    ],
    comoLoUso: `EJEMPLO PRÁCTICO: Te contratan como técnico de saneamiento en una empresa de Barcelona con 120 trabajadores.

ANTES DE FIRMAR EL CONTRATO:
1. Consultás este convenio para saber tu salario mínimo por categoría
2. Verificás cuántos días de vacaciones te corresponden
3. Revisás si hay pagas extras (normalmente 2)
4. Consultás si hay plus de peligrosidad (por trabajar con químicos, espacios confinados)

DURANTE EL TRABAJO:
1. Si tu jefe te pide que trabajes más de 40h/semana, le recordás que el convenio limita la jornada
2. Si trabajás de noche (urgencias), exigís el 30% de recargo
3. Si te casás, recordás que tenés 15 días de permiso
4. Si la empresa no te da formación, recordás que el convenio exige 20h/año

SI HAY PROBLEMAS:
1. Si no te pagan lo que dice el convenio, podés reclamar ante la Inspección de Trabajo
2. Si te despiden sin justificación, tenés derecho a indemnización según el convenio
3. Si la empresa no cumple medidas de PRL, podés denunciar ante la autoridad laboral

IMPORTANTE: El convenio colectivo ES OBLIGATORIO para toda la empresa del sector. Si tu empresa está en el sector de saneamiento, este convenio te aplica aunque no lo tengas por escrito.`,
    documentosUtiles: [
      "Consulta tu convenio: https://www.empleo.gob.es/es/convenios/",
      "Calcula tu salario con el convenio: https://www.paginasalariales.com/",
      "Inspección de Trabajo: https://www.mitramiss.gob.es/"
    ]
  }
};
