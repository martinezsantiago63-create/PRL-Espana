const CONTENIDO_DETALLADO = {
  "rd-216-2004": {
    titulo: "RD 216/2004 - Atmósferas Explosivas (ATEX)",
    tipo: "real-decreto",
    resumenLargo: "Este Real Decreto transpone la Directiva 1999/92/CE sobre protección de trabajadores contra riesgos de explosión de atmósferas inflamables. Es decir, cuando en tu centro de trabajo pueden formarse mezclas de gases, vapores o polvos con aire que, si encuentran una chispa, EXPLOTAN. En saneamiento esto pasa cuando entrás a pozos donde hay metano (CH₄) o sulfuro de hidrógeno (H₂S).",
    queRegula: [
      "Clasificación de zonas de riesgo de explosión (ATEX de trabajos): Zonas 0, 1, 2 (gases/vapores) y Zonas 20, 21, 22 (polvos combustibles)",
      "Obligación del empresario de evaluar riesgos de explosión",
      "Señalización y delimitación de zonas ATEX",
      "Equipos y protecciones aptos para cada zona (marcado Ex)",
      "Plan de emergencia específico para explosiones",
      "Formación de trabajadores en riesgo ATEX"
    ],
    zonasATEX: {
      gases: [
        { zona: "Zona 0", descripcion: "Atmósfera explosiva presente de forma CONTINUA o durante largos períodos", ejemplo: "Interior de un tanque cerrado con gas residual" },
        { zona: "Zona 1", descripcion: "Atmósfera explosiva probable en OPERACIÓN NORMAL", ejemplo: "Alrededor de una boca de pozo con gas residual" },
        { zona: "Zona 2", descripcion: "Atmósfera explosiva improbable, solo en ANOMALÍAS", ejemplo: "Zona ventilada lejos de puntos de emisión" }
      ],
      polvos: [
        { zona: "Zona 20", descripcion: "Nubes de polvo combustible presentes de forma CONTINUA", ejemplo: "Interior de tubería con polvo de carbón" },
        { zona: "Zona 21", descripcion: "Nubes de polvo combustible probable en OPERACIÓN NORMAL", ejemplo: "Zona de descarga de polvo sin extracción" },
        { zona: "Zona 22", descripcion: "Nubes de polvo combustible improbables, solo en ANOMALÍAS", ejemplo: "Zona lejos de puntos de emisión con limpieza periódica" }
      ]
    },
    equiposATEX: [
      "Marcado CE + Ex: certificado por organismo notificado",
      "Tipos: intrínsecamente seguros (i), resistencia a la explosión (d), protección por incremento de seguridad (e)",
      "Cada equipo DEBE ser adecuado para la zona clasificada",
      "Mantenimiento estricto según fabricante",
      "Prohibido usar equipos sin marcado Ex en zonas ATEX"
    ],
    comoLoUso: `EJEMPLO PRÁCTICO: Un día te mandan a hacer una inspección en una planta de tratamiento de aguas residuales. Hay un pozo de visita donde se acumulan gases. ¿Qué hacés?

1. ANTES DE ENTRAR: Mirás si la zona está clasificada ATEX. Si no lo está, la clasificás vos.
2. MEDICIÓN: Entrás con gasómetro calibrado y medís: CH₄ (metano) < 1% LIE (Límite Inferior de Explosión), H₂S < 10 ppm, O₂ entre 19,5% y 23,5%.
3. CLASIFICACIÓN: Si el CH₄ está entre 0-1%, es Zona 2 (improbable pero posible). Si está > 1%, Zona 1 o directamente Zona 0.
4. EQUIPOS: Verificás que TODOS los equipos que entren tengan marcado Ex: lámpara, herramientas, ventilación, radio.
5. VENTILACIÓN: Si hay acumulación, ventilás con extractor ATEX antes de entrar.
6. PERMISO: Firmás el permiso de trabajo indicando la zona ATEX, los equipos permitidos y las medidas de emergencia.

Si ves una lámpara común (sin Ex) dentro de un pozo clasificado, eso es una infracción GRAVE. Podría causar una explosión.`,
    sanciones: [
      "No clasificar zonas ATEX: multa grave (3.001-30.000€)",
      "Usar equipos no aptos: multa muy grave (30.001-60.000€)",
      "No formar trabajadores: multa grave",
      "No tener plan de emergencia: multa grave"
    ],
    relaciones: ["RD 374/2001 (agentes químicos)", "RD 604/2006 (espacios confinados)", "RD 39/1997 (servicios de prevención)"],
    usefulLinks: [
      { text: "Texto completo BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2004-3300" },
      { text: "Guía INSST - Atmósferas Explosivas", url: "https://www.insst.es" }
    ]
  },
  "rd-1299-2006": {
    titulo: "RD 1299/2006 - Riesgos Higiénicos",
    tipo: "real-decreto",
    resumenLargo: "Transpone la Directiva 2002/44/CE sobre protección de trabajadores contra los riesgos derivados de la exposición a vibraciones mecánicas, y complementa la Ley 31/1995 en materia de ruido, vibraciones, campos electromagnéticos, radiaciones, fibras artificiales y otros agentes físicos. En saneamiento, los más importantes son el RUIDO y las VIBRACIONES.",
    queRegula: [
      "Límites de exposición y valores de acción para cada agente",
      "Evaluación de riesgos específica para agentes higiénicos",
      "Medidas de prevención y protección",
      "Vigilancia de la salud específica por agente",
      "Información y formación a trabajadores",
      "Marcado y señalización de zonas"
    ],
    agentesHigienicos: [
      {
        agente: "RUIDO",
        VLE: "87 dB(A) o pico 140 dB(C)",
        accionInferior: "80 dB(A) o pico 135 dB(C)",
        accionSuperior: "85 dB(A) o pico 137 dB(C)",
        medidas: [
          "Acción inferior: información + protectores auditivos a disposición",
          "Acción superior: protectores auditivos OBLIGATORIOS + zonas de descanso + vigilancia de salud",
          "VLE: programa técnico de reducción de ruido + sustitución de equipos"
        ],
        ejemploSaneamiento: "Bomba de achique ruidosa en pozo, compresor de aire, taladro neumático"
      },
      {
        agente: "VIBRACIONES MANO-BRAZO",
        VLE: "2,5 m/s² (valor límite de exposición diaria)",
        accionInferior: "1,25 m/s² (valor de acción)",
        medidas: [
          "Acción inferior: información + formación",
          "VLE: programa técnico para reducir vibraciones + EPIs + sustitución de herramientas",
          "Evaluación específica de cada herramienta"
        ],
        ejemploSaneamiento: "Taladro percutor, amoladora, compactador de tierra"
      },
      {
        agente: "VIBRACIONES CUERPO ENTERO",
        VLE: "1,15 m/s² (8 horas)",
        accionInferior: "0,5 m/s² (8 horas)",
        medidas: [
          "Acción inferior: información + formación",
          "VLE: suspensión del trabajo + revisión médica + sustitución de equipo",
          "Evaluación de puestos de conducción de vehículos"
        ],
        ejemploSaneamiento: "Conducción de camiones cisterna, volqueta, maquinaria pesada"
      }
    ],
    comoLoUso: `EJEMPLO PRÁCTICO: Trabajás en una planta de aguas residuales. Hay 3 bombas grandes que hacen ruido constante. Un día el jefe te dice: 'Necesito que hagas la evaluación de ruido.'

1. MEDICIÓN: Con sonómetro calibrado medís el nivel de ruido en cada puesto. Resultados:
   - Operador de bombas: 89 dB(A) → SUPERA el VLE de 87 dB(A)
   - Operador de compresor: 82 dB(A) → Entre acción inferior (80) y superior (85)
   - Oficina de control: 72 dB(A) → Dentro de lo normal

2. VALORACIÓN:
   - Operador de bombas: VLE superado → PROGRAMA TÉCNICO OBLIGATORIO
   - Operador de compresor: acción superior → protectores auditivos OBLIGATORIOS

3. MEDIDAS:
   - Bombas: instalar silenciadores, encerramiento acústico, revisar mantenimiento
   - Compresor: dar protectores auditivos (tapones), crear zona de descanso
   - Ambos: vigilancia de la salud auditiva cada 12 meses

4. DOCUMENTACIÓN: Escribís la evaluación con mediciones, valoración y medidas correctivas con responsables y plazos.

Si ves a trabajadores sin protectores auditivos en zona de 85+ dB, eso es infracción.`,
    sanciones: [
      "No evaluar ruido: multa grave (3.001-30.000€)",
      "No dar protectores auditivos: multa grave",
      "Superar VLE sin medidas: multa muy grave (30.001-60.000€)"
    ],
    relaciones: ["RD 486/1997 (lugares de trabajo)", "Ley 31/1995 (Art. 16 evaluación de riesgos)"],
    usefulLinks: [
      { text: "Texto completo BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-22486" }
    ]
  },
  "rd-393-2007": {
    titulo: "RD 393/2007 - SPAI (Planes de Autoprotección)",
    tipo: "real-decreto",
    resumenLargo: "Regula el sistema de protección civil y atención de emergencias de ámbito estatal. Establece los criterios para elaborar y depositar los planes de autoprotección. No es solo prevención de riesgos laborales: es PREPARARSE para cuando todo falle y haya una emergencia real (incendio, derrame químico, explosión, inundación).",
    queRegula: [
      "¿Quién DEBE tener plan de autoprotección? (empresas > 500 trabajadores, instalaciones de riesgo, etc.)",
      "Contenido mínimo del plan de autoprotección",
      "Equipos de emergencia interna (brigadas)",
      "Simulacros obligatorios periódicos",
      "Coordinación con servicios de emergencia externos",
      "Clasificación de emergencias por niveles"
    ],
    quieneDebenTenerlo: [
      "Empresas con más de 500 trabajadores",
      "Establecimientos industriales con riesgo de accidente grave",
      "Centros comerciales y grandes superficies",
      "Hospitales y centros sanitarios",
      "Instalaciones deportivas y de ocio",
      "Centros docentes con más de 2.000 alumnos",
      "Estaciones de transporte (aeropuertos, estaciones de tren)",
      "Centros de tratamiento de residuos"
    ],
    estructuraPlan: [
      "Descripción de la instalación y riesgos",
      "Organización de emergencia (organigrama)",
      "Procedimientos de actuación por tipo de emergencia",
      "Medios materiales y humanos disponibles",
      "Plan de comunicaciones internas y externas",
      "Formación y simulacros",
      "Coordinación con bomberos y emergencias externas"
    ],
    nivelesEmergencia: [
      { nivel: "Nivel 1", descripcion: "Emergencia interna - Resoluble con medios propios", ejemplo: "Fuego pequeño controlado con extintor" },
      { nivel: "Nivel 2", descripcion: "Emergencia externa - Requiere ayuda de servicios externos", ejemplo: "Incendio que requiere bomberos" },
      { nivel: "Nivel 3", descripcion: "Gran emergencia - Catástrofe con múltiples víctimas", ejemplo: "Explosión con colapso estructural" }
    ],
    comoLoUso: `EJEMPLO PRÁCTICO: Te contratan para hacer el plan de autoprotección de una planta de tratamiento de aguas residuales que tiene 600 trabajadores.

1. IDENTIFICACIÓN DE RIESGOS ESPECÍFICOS:
   - Incendio en instalaciones eléctricas
   - Derrame de productos químicos (cloro, soda)
   - Explosión en pozos con gases (metano, H₂S)
   - Inundación por fallo de bombas
   - Accidente con maquinaria pesada
   - Vertido accidental al medio ambiente

2. ORGANIZACIÓN: Armás el organigrama de emergencia:
   - Jefe de emergencia (director de planta)
   - Brigada de incendios (8 personas)
   - Brigada de primeros auxilios (6 personas)
   - Brigada de evacuación (4 personas)
   - Equipo de derrames químicos (4 personas)

3. PROCEDIMIENTOS: Para cada tipo de emergencia, escribís paso a paso qué hace cada brigada.

4. SIMULACROS: Hacés 1 simulacro de incendio y 1 de derrame químico al año como mínimo.

5. COORDINACIÓN: Coordinás con bomberos para que conozcan la planta.

Este plan se DEBE presentar ante la autoridad laboral competente.`,
    sanciones: [
      "No tener plan de autoprotección: multa muy grave",
      "No hacer simulacros: multa grave",
      "No coordinar con emergencias externas: multa grave"
    ],
    relaciones: ["RD 39/1997 (planes de emergencia del empresa)", "Ley 31/1995 (Art. 20 emergencias)"],
    usefulLinks: [
      { text: "Texto completo BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-20521" }
    ]
  },
  "rd-299-2006": {
    titulo: "RD 299/2006 - Equipos de Trabajo (actualización del RD 1215/1997)",
    tipo: "real-decreto",
    resumenLargo: "Modifica el RD 1215/1997 para adaptar la normativa española a la Directiva 2009/104/CE. Amplía y concreta las obligaciones de mantenimiento, inspección y formación en el uso de equipos de trabajo. Si el RD 1215 te dice QUÉ equipos necesitan esteRD, este te dice CÓMO mantenerlos y usarlos.",
    queRegula: [
      "Mantenimiento preventivo obligatorio según instrucciones del fabricante",
      "Inspecciones periódicas antes de cada uso y según calendario de mantenimiento",
      "Marcado CE: requisitos y verificación",
      "Formación específica para operadores de cada equipo",
      "Registro documental de inspecciones y mantenimiento",
      "Retiro inmediato de servicio de equipos que no cumplan"
    ],
    mantenimiento: [
      {
        tipo: "Antes de cada uso",
        acciones: ["Revisión visual general", "Comprobar protecciones de seguridad", "Verificar niveles de aceite/combustible", "Probar frenos y mandos", "Comprobar cables, eslingas, ganchos"],
        responsable: "El propio operador"
      },
      {
        tipo: "Mantenimiento preventivo periódico",
        acciones: ["Seguir calendario del fabricante", "Cambio de piezas de desgaste", "Calibración de instrumentos", "Lubricación y limpieza", "Pruebas de funcionamiento"],
        responsable: "Servicio técnico cualificado"
      },
      {
        tipo: "Mantenimiento correctivo",
        acciones: ["Reparación inmediata de averías", "Sustitución de piezas dañadas", "Verificación post-reparación", "Documentación de la reparación"],
        responsable: "Servicio técnico cualificado"
      }
    ],
    equiposComunes: [
      { equipo: "Andamios", inspeccion: "Antes de cada montaje + cada 7 días en uso", formación: "Montaje y desmontaje de andamios" },
      { equipo: "Grúas torre", inspeccion: "Diaria (operador) + trimestral (técnico) + anual (organismo)", formación: "Operador de grúa torre (carne especial)" },
      { equipo: "Montacargas", inspeccion: "Diaria (operador) + mensual (técnico)", formación: "Operador de montacargas (certificado" },
      { equipo: "Herramientas manuales", inspeccion: "Antes de cada uso", formación: "Uso correcto de herramientas" },
      { equipo: "Taladros/Amoladoras", inspeccion: "Antes de cada uso", formación: "Uso seguro de herramientas eléctricas" },
      { equipo: "Vehículos industriales", inspeccion: "Diaria (ITV periódica)", formación: "Carné de conducir + formación específica" }
    ],
    comoLoUso: `EJEMPLO PRÁCTICO: Llegás a una obra para hacer una inspección de seguridad. ¿Qué mirás en los equipos?

1. ANDAMIOS:
   - ¿Están montados según proyecto técnico?
   - ¿Tienen barandillas y rodapiés?
   - ¿Las plataformas están completas (sin huecos)?
   - ¿Hay plan de andamios firmado por técnico competente?

2. GRÚA:
   - ¿El operador tiene carné de gruista?
   - ¿Tiene libro de inspecciones al día?
   - ¿La última inspección fue hace menos de 12 meses?
   - ¿Las eslingas tienen certificado de carga?

3. MONTACARGAS:
   - ¿El operador tiene certificado?
   - ¿Tiene mantenimiento preventivo al día?
   - ¿Las horquillas están en buen estado?

4. HERRAMIENTAS:
   - ¿Tienen marcado CE?
   - ¿Están en buen estado visual?
   - ¿Se usan las correctas para cada tarea?

Si ves algo fuera de norma, lo documentás con foto y Medida Correctiva.`,
    sanciones: [
      "No mantener equipos: multa grave",
      "Usar equipos sin CE: multa muy grave (30.001-60.000€)",
      "No formar operadores: multa grave",
      "No inspeccionar equipos: multa grave"
    ],
    relaciones: ["RD 1215/1997 (base)", "Ley 31/1995 (Art. 16 evaluación de riesgos)"],
    usefulLinks: [
      { text: "Texto completo BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-21467" }
    ]
  },
  "rd-1620-2011": {
    titulo: "RD 1620/2011 - Protocolo de Actuación ante Olas de Calor",
    tipo: "real-decreto",
    resumenLargo: "Establece el sistema de actuación preventiva de los riesgos derivados de las altas temperaturas y el protocolo de actuación ante olas de calor. En saneamiento exterior, el calor es un riesgo REAL y subestimado. Cada verano mueren trabajadores por golpe de calor en España.",
    queRegula: [
      "Aviso preventivo: T máxima prevista > 37°C → medidas preventivas",
      "Aviso de ola de calor: 3+ días con T máxima > 40°C (litoral) o > 39°C (interior)",
      "Obligaciones del empresario durante ola de calor",
      "Horarios de trabajo recomendados en horas de máxima insolación",
      "Vigilancia sanitaria de trabajadores",
      "Protocolo de actuación ante golpe de calor"
    ],
    nivelesAviso: [
      { nivel: "Aviso preventivo", condicion: "T máxima prevista > 37°C", medidas: ["Informar trabajadores", "Facilitar agua y sombra", "Reorganizar horarios"] },
      { nivel: "Aviso de ola de calor", condicion: "3+ días T máxima > 40°C litoral / > 39°C interior", medidas: ["Reducir horario laboral", "Descansos obligatorios", "Vigilancia sanitaria", "Agua y sombra permanentes"] }
    ],
    obligacionesEmpresario: [
      "Poner a disposición del trabajador agua potable y fresca",
      "Facilitar lugares con sombra para descanso",
      "Organizar el trabajo para evitar exposición en horas pico (12:30-16:30)",
      "Hacer descansos de 15 min cada 45-60 min de exposición directa al sol",
      "Vigilar el estado de salud de los trabajadores",
      "Formar trabajadores sobre síntomas de golpe de calor",
      "Tener protocolo de actuación ante emergencia por calor"
    ],
    sintomasGolpeCalor: [
      { fase: "Golpe de calor leve", síntomas: ["Dolor de cabeza", "Mareo", "Náusea", "Sudoración excesiva", "Calambres musculares"], actuación: "Mover a sombra, dar agua fresca, mojar ropa, reposo 15-20 min" },
      { fase: "Golpe de calor grave", síntomas: ["Piel caliente y seca", "Confusión", "Pérdida de conciencia", "Temperatura corporal > 40°C", "Convulsiones"], actuación: "LLAMAR A EMERGENCIAS (112), enfriar cuerpo con agua, no dar líquidos si está inconsciente" }
    ],
    comoLoUso: `EJEMPLO PRÁCTICO: Es julio en Sevilla. Trabajás en saneamiento exterior, inspeccionando alcantarillas. Las 12:30.

1. ANTES DEL TRABAJO:
   - Revisás el aviso meteorológico: T máxima prevista 42°C → AVISO DE CALOR activo
   - Informás al equipo: "Chicos, hoy hay ola de calor. Salimos a las 7:00, paramos a las 12:00, volvemos a las 17:00"

2. DURANTE EL TRABAJO:
   - Cada 45 minutos: parada obligatoria de 15 min a la sombra
   - Agua fresca siempre disponible (mínimo 1 litro/hora por trabajador)
   - Si alguien dice "me mareo", parás inmediatamente

3. SI ALGUIEN TIENE SÍNTOMAS:
   - Mover a sombra
   - Quitar ropa excesiva
   - Mojar cara, cuello, muñecas con agua fresca
   - Dar sorbos pequeños de agua
   - Si en 15-20 min no mejora → LLAMAR AL 112

4. PREVENCIÓN DIARIA:
   - Trabajar de 7:00 a 12:00 y de 17:00 a 20:00
   - Descansos en sombra cada 45 min
   - Hidratación constante
   - Vigilar compañeros por si tienen cara de "no estar bien"

Cada verano mueren trabajadores agrícolas y de construcción por esto. En saneamiento, el sol directo + trabajo físico = riesgo ALTO.`,
    sanciones: [
      "No dar agua: multa grave",
      "No organizar horarios en ola de calor: multa grave",
      "No vigilar salud de trabajadores: multa grave"
    ],
    relaciones: ["RD 486/1997 (condiciones de trabajo)", "Ley 31/1995 (Art. 14 obligación de protección)"],
    usefulLinks: [
      { text: "Texto completo BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2011-14798" }
    ]
  },
  "rd-840-2003": {
    titulo: "RD 840/2003 - Medidas de Seguridad en Trabajos con Riesgo Eléctrico",
    tipo: "real-decreto",
    resumenLargo: "Establece las disposiciones mínimas de seguridad y salud en trabajos con riesgo eléctrico, tanto en instalaciones desenergizadas como energizadas. En saneamiento, siempre estás trabajando cerca de cables, cuadros eléctricos y subestaciones. El riesgo eléctrico es invisible: si no lo medís, no lo ves.",
    queRegula: [
      "Distancias de seguridad según tensión",
      "Trabajos en instalaciones desenergizadas: protocolo completo",
      "Trabajos en instalaciones energizadas: restricciones y EPIs",
      "Tierra provisional obligatoria",
      "Señalización del área de trabajo",
      "Personal habilitado para cada tipo de trabajo"
    ],
    distanciasSeguridad: [
      { tension: "< 50 V CA / 120 V CC", distancia: "0,3 m", nota: "No requiere medidas especiales" },
      { tension: "50-120 V CA / 120-250 V CC", distancia: "0,5 m", nota: "Herramientas aisladas" },
      { tension: "120-250 V CA", distancia: "1,0 m", nota: "EPIs dieléctricos" },
      { tension: "250-500 V CA", distancia: "1,5 m", nota: "Autorización obligatoria" },
      { tension: "> 500 V", distancia: "3,0 m+", nota: "Solo personal especializado" }
    ],
    protocoloLOTO: [
      "1. DESCONEXIÓN: Cortar energía en punto de desconexión identificado",
      "2. BLOQUEO: Poner candado en punto de desconexión con etiqueta 'NO OPERAR'",
      "3. VERIFICACIÓN: Comprobar que no hay tensión con detector de ausencia de tensión",
      "4. TIERRA: Poner tierra provisional en la instalación",
      "5. SEÑALIZACIÓN: Delimitar zona de trabajo con señal de peligro eléctrico",
      "6. EPIs: Usar guantes dieléctricos, alfombra aislante, casco con pantalla",
      "7. TRABAJO: Solo personal habilitado puede intervenir",
      "8. RESTAURACIÓN: Verificar que todo está OK antes de volver a energizar"
    ],
    personalHabilitado: [
      { tipo: "Trabajos en instalaciones desenergizadas", requisito: "Formación específica en riesgo eléctrico" },
      { tipo: "Trabajos en instalaciones energizadas < 1kV", requisito: "Habilitación por empresa + formación específica" },
      { tipo: "Trabajos en instalaciones energizadas > 1kV", requisito: "Título de instalador autorizado + habilitación específica" }
    ],
    comoLoUso: `EJEMPLO PRÁCTICO: Te mandan a hacer saneamiento en un sótano de una fábrica donde hay un cuadro eléctrico expuesto al lado de donde vas a trabajar.

1. EVALUACIÓN PREVIA:
   - Mirás el cuadro: ¿tiene cubierta? ¿Está etiquetado? ¿Hay cables sueltos?
   - Medís la distancia: estás a 0,8 metros del cuadro
   - Tensión del cuadro: 400V trifásico
   - Distancia de seguridad requerida: 1,5 m → ¡NO CUMPLES! Estás demasiado cerca

2. MEDIDAS:
   - Opción A: Pedir que el cuadro se desconecte (si es posible)
   - Opción B: Si no se puede desconectar, instalar barrera aislante a 1,5 m
   - Opción C: Usar EPIs dieléctricos si vas a trabajar a < 1,5 m
   - Opción D: NO TRABAJAR hasta que se cumpla la distancia

3. SI HACÉS TRABAJOS EN INSTALACIÓN DESENERGIZADA:
   - Seguí el protocolo LOTO completo (desconexión → bloqueo → verificación → tierra → señalización)
   - NUNCA confíes en que "está apagado" sin verificar con detector de tensión

4. DOCUMENTACIÓN:
   - Escribís en la evaluación: riesgo eléctrico identificado, distancia insuficiente, medidas propuestas
   - Si el jefe no hace nada, lo reportás por escrito

El riesgo eléctrico mata sin avisar. Si no estás seguro, NO TRABAJES.`,
    sanciones: [
      "No respetar distancias de seguridad: multa muy grave",
      "Trabajar sin habilitación: multa muy grave",
      "No hacer protocolo LOTO: multa muy grave",
      "No usar EPIs dieléctricos: multa grave"
    ],
    relaciones: ["RD 1215/1997 (equipos de trabajo)", "RD 374/2001 (agentes químicos)", "RD 39/1997"],
    usefulLinks: [
      { text: "Texto completo BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-14228" }
    ]
  }
};
