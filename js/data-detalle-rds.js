// data-detalle-rds.js
// Desarrollo exhaustivo, técnico y reglamentario de Reales Decretos y Normativa Fundamental de PRL en España.

const CONTENIDO_DETALLADO = {
  "rd-216-2004": {
    "titulo": "RD 216/2004 - Atmósferas Explosivas (ATEX)",
    "tipo": "real-decreto",
    "resumenLargo": "Este Real Decreto transpone la Directiva 1999/92/CE sobre protección de trabajadores contra riesgos de explosión de atmósferas inflamables. Es decir, cuando en tu centro de trabajo pueden formarse mezclas de gases, vapores o polvos con aire que, si encuentran una chispa, EXPLOTAN. En saneamiento esto pasa cuando entrás a pozos donde hay metano (CH₄) o sulfuro de hidrógeno (H₂S).",
    "queRegula": [
      "Clasificación de zonas de riesgo de explosión (ATEX de trabajos): Zonas 0, 1, 2 (gases/vapores) y Zonas 20, 21, 22 (polvos combustibles)",
      "Obligación del empresario de evaluar riesgos de explosión",
      "Señalización y delimitación de zonas ATEX",
      "Equipos y protecciones aptos para cada zona (marcado Ex)",
      "Plan de emergencia específico para explosiones",
      "Formación de trabajadores en riesgo ATEX"
    ],
    "zonasATEX": {
      "gases": [
        {
          "zona": "Zona 0",
          "descripcion": "Atmósfera explosiva presente de forma CONTINUA o durante largos períodos",
          "ejemplo": "Interior de un tanque cerrado con gas residual"
        },
        {
          "zona": "Zona 1",
          "descripcion": "Atmósfera explosiva probable en OPERACIÓN NORMAL",
          "ejemplo": "Alrededor de una boca de pozo con gas residual"
        },
        {
          "zona": "Zona 2",
          "descripcion": "Atmósfera explosiva improbable, solo en ANOMALÍAS",
          "ejemplo": "Zona ventilada lejos de puntos de emisión"
        }
      ],
      "polvos": [
        {
          "zona": "Zona 20",
          "descripcion": "Nubes de polvo combustible presentes de forma CONTINUA",
          "ejemplo": "Interior de tubería con polvo de carbón"
        },
        {
          "zona": "Zona 21",
          "descripcion": "Nubes de polvo combustible probable en OPERACIÓN NORMAL",
          "ejemplo": "Zona de descarga de polvo sin extracción"
        },
        {
          "zona": "Zona 22",
          "descripcion": "Nubes de polvo combustible improbables, solo en ANOMALÍAS",
          "ejemplo": "Zona lejos de puntos de emisión con limpieza periódica"
        }
      ]
    },
    "equiposATEX": [
      "Marcado CE + Ex: certificado por organismo notificado",
      "Tipos: intrínsecamente seguros (i), resistencia a la explosión (d), protección por incremento de seguridad (e)",
      "Cada equipo DEBE ser adecuado para la zona clasificada",
      "Mantenimiento estricto según fabricante",
      "Prohibido usar equipos sin marcado Ex en zonas ATEX"
    ],
    "comoLoUso": "EJEMPLO PRÁCTICO: Un día te mandan a hacer una inspección en una planta de tratamiento de aguas residuales. Hay un pozo de visita donde se acumulan gases. ¿Qué hacés?\n\n1. ANTES DE ENTRAR: Mirás si la zona está clasificada ATEX. Si no lo está, la clasificás vos.\n2. MEDICIÓN: Entrás con gasómetro calibrado y medís: CH₄ (metano) < 1% LIE (Límite Inferior de Explosión), H₂S < 10 ppm, O₂ entre 19,5% y 23,5%.\n3. CLASIFICACIÓN: Si el CH₄ está entre 0-1%, es Zona 2 (improbable pero posible). Si está > 1%, Zona 1 o directamente Zona 0.\n4. EQUIPOS: Verificás que TODOS los equipos que entren tengan marcado Ex: lámpara, herramientas, ventilación, radio.\n5. VENTILACIÓN: Si hay acumulación, ventilás con extractor ATEX antes de entrar.\n6. PERMISO: Firmás el permiso de trabajo indicando la zona ATEX, los equipos permitidos y las medidas de emergencia.\n\nSi ves una lámpara común (sin Ex) dentro de un pozo clasificado, eso es una infracción GRAVE. Podría causar una explosión.",
    "sanciones": [
      "No clasificar zonas ATEX: multa grave (3.001-30.000€)",
      "Usar equipos no aptos: multa muy grave (30.001-60.000€)",
      "No formar trabajadores: multa grave",
      "No tener plan de emergencia: multa grave"
    ],
    "relaciones": [
      "RD 374/2001 (agentes químicos)",
      "RD 604/2006 (espacios confinados)",
      "RD 39/1997 (servicios de prevención)"
    ],
    "usefulLinks": [
      {
        "text": "Texto completo BOE",
        "url": "https://www.boe.es/buscar/act.php?id=BOE-A-2004-3300"
      },
      {
        "text": "Guía INSST - Atmósferas Explosivas",
        "url": "https://www.insst.es"
      }
    ]
  },
  "rd-1299-2006": {
    "titulo": "RD 1299/2006 - Riesgos Higiénicos",
    "tipo": "real-decreto",
    "resumenLargo": "Transpone la Directiva 2002/44/CE sobre protección de trabajadores contra los riesgos derivados de la exposición a vibraciones mecánicas, y complementa la Ley 31/1995 en materia de ruido, vibraciones, campos electromagnéticos, radiaciones, fibras artificiales y otros agentes físicos. En saneamiento, los más importantes son el RUIDO y las VIBRACIONES.",
    "queRegula": [
      "Límites de exposición y valores de acción para cada agente",
      "Evaluación de riesgos específica para agentes higiénicos",
      "Medidas de prevención y protección",
      "Vigilancia de la salud específica por agente",
      "Información y formación a trabajadores",
      "Marcado y señalización de zonas"
    ],
    "agentesHigienicos": [
      {
        "agente": "RUIDO",
        "VLE": "87 dB(A) o pico 140 dB(C)",
        "accionInferior": "80 dB(A) o pico 135 dB(C)",
        "accionSuperior": "85 dB(A) o pico 137 dB(C)",
        "medidas": [
          "Acción inferior: información + protectores auditivos a disposición",
          "Acción superior: protectores auditivos OBLIGATORIOS + zonas de descanso + vigilancia de salud",
          "VLE: programa técnico de reducción de ruido + sustitución de equipos"
        ],
        "ejemploSaneamiento": "Bomba de achique ruidosa en pozo, compresor de aire, taladro neumático"
      },
      {
        "agente": "VIBRACIONES MANO-BRAZO",
        "VLE": "2,5 m/s² (valor límite de exposición diaria)",
        "accionInferior": "1,25 m/s² (valor de acción)",
        "medidas": [
          "Acción inferior: información + formación",
          "VLE: programa técnico para reducir vibraciones + EPIs + sustitución de herramientas",
          "Evaluación específica de cada herramienta"
        ],
        "ejemploSaneamiento": "Taladro percutor, amoladora, compactador de tierra"
      },
      {
        "agente": "VIBRACIONES CUERPO ENTERO",
        "VLE": "1,15 m/s² (8 horas)",
        "accionInferior": "0,5 m/s² (8 horas)",
        "medidas": [
          "Acción inferior: información + formación",
          "VLE: suspensión del trabajo + revisión médica + sustitución de equipo",
          "Evaluación de puestos de conducción de vehículos"
        ],
        "ejemploSaneamiento": "Conducción de camiones cisterna, volqueta, maquinaria pesada"
      }
    ],
    "comoLoUso": "EJEMPLO PRÁCTICO: Trabajás en una planta de aguas residuales. Hay 3 bombas grandes que hacen ruido constante. Un día el jefe te dice: 'Necesito que hagas la evaluación de ruido.'\n\n1. MEDICIÓN: Con sonómetro calibrado medís el nivel de ruido en cada puesto. Resultados:\n   - Operador de bombas: 89 dB(A) → SUPERA el VLE de 87 dB(A)\n   - Operador de compresor: 82 dB(A) → Entre acción inferior (80) y superior (85)\n   - Oficina de control: 72 dB(A) → Dentro de lo normal\n\n2. VALORACIÓN:\n   - Operador de bombas: VLE superado → PROGRAMA TÉCNICO OBLIGATORIO\n   - Operador de compresor: acción superior → protectores auditivos OBLIGATORIOS\n\n3. MEDIDAS:\n   - Bombas: instalar silenciadores, encerramiento acústico, revisar mantenimiento\n   - Compresor: dar protectores auditivos (tapones), crear zona de descanso\n   - Ambos: vigilancia de la salud auditiva cada 12 meses\n\n4. DOCUMENTACIÓN: Escribís la evaluación con mediciones, valoración y medidas correctivas con responsables y plazos.\n\nSi ves a trabajadores sin protectores auditivos en zona de 85+ dB, eso es infracción.",
    "sanciones": [
      "No evaluar ruido: multa grave (3.001-30.000€)",
      "No dar protectores auditivos: multa grave",
      "Superar VLE sin medidas: multa muy grave (30.001-60.000€)"
    ],
    "relaciones": [
      "RD 486/1997 (lugares de trabajo)",
      "Ley 31/1995 (Art. 16 evaluación de riesgos)"
    ],
    "usefulLinks": [
      {
        "text": "Texto completo BOE",
        "url": "https://www.boe.es/buscar/act.php?id=BOE-A-2006-22486"
      }
    ]
  },
  "rd-393-2007": {
    "titulo": "RD 393/2007 - SPAI (Planes de Autoprotección)",
    "tipo": "real-decreto",
    "resumenLargo": "Regula el sistema de protección civil y atención de emergencias de ámbito estatal. Establece los criterios para elaborar y depositar los planes de autoprotección. No es solo prevención de riesgos laborales: es PREPARARSE para cuando todo falle y haya una emergencia real (incendio, derrame químico, explosión, inundación).",
    "queRegula": [
      "¿Quién DEBE tener plan de autoprotección? (empresas > 500 trabajadores, instalaciones de riesgo, etc.)",
      "Contenido mínimo del plan de autoprotección",
      "Equipos de emergencia interna (brigadas)",
      "Simulacros obligatorios periódicos",
      "Coordinación con servicios de emergencia externos",
      "Clasificación de emergencias por niveles"
    ],
    "quieneDebenTenerlo": [
      "Empresas con más de 500 trabajadores",
      "Establecimientos industriales con riesgo de accidente grave",
      "Centros comerciales y grandes superficies",
      "Hospitales y centros sanitarios",
      "Instalaciones deportivas y de ocio",
      "Centros docentes con más de 2.000 alumnos",
      "Estaciones de transporte (aeropuertos, estaciones de tren)",
      "Centros de tratamiento de residuos"
    ],
    "estructuraPlan": [
      "Descripción de la instalación y riesgos",
      "Organización de emergencia (organigrama)",
      "Procedimientos de actuación por tipo de emergencia",
      "Medios materiales y humanos disponibles",
      "Plan de comunicaciones internas y externas",
      "Formación y simulacros",
      "Coordinación con bomberos y emergencias externas"
    ],
    "nivelesEmergencia": [
      {
        "nivel": "Nivel 1",
        "descripcion": "Emergencia interna - Resoluble con medios propios",
        "ejemplo": "Fuego pequeño controlado con extintor"
      },
      {
        "nivel": "Nivel 2",
        "descripcion": "Emergencia externa - Requiere ayuda de servicios externos",
        "ejemplo": "Incendio que requiere bomberos"
      },
      {
        "nivel": "Nivel 3",
        "descripcion": "Gran emergencia - Catástrofe con múltiples víctimas",
        "ejemplo": "Explosión con colapso estructural"
      }
    ],
    "comoLoUso": "EJEMPLO PRÁCTICO: Te contratan para hacer el plan de autoprotección de una planta de tratamiento de aguas residuales que tiene 600 trabajadores.\n\n1. IDENTIFICACIÓN DE RIESGOS ESPECÍFICOS:\n   - Incendio en instalaciones eléctricas\n   - Derrame de productos químicos (cloro, soda)\n   - Explosión en pozos con gases (metano, H₂S)\n   - Inundación por fallo de bombas\n   - Accidente con maquinaria pesada\n   - Vertido accidental al medio ambiente\n\n2. ORGANIZACIÓN: Armás el organigrama de emergencia:\n   - Jefe de emergencia (director de planta)\n   - Brigada de incendios (8 personas)\n   - Brigada de primeros auxilios (6 personas)\n   - Brigada de evacuación (4 personas)\n   - Equipo de derrames químicos (4 personas)\n\n3. PROCEDIMIENTOS: Para cada tipo de emergencia, escribís paso a paso qué hace cada brigada.\n\n4. SIMULACROS: Hacés 1 simulacro de incendio y 1 de derrame químico al año como mínimo.\n\n5. COORDINACIÓN: Coordinás con bomberos para que conozcan la planta.\n\nEste plan se DEBE presentar ante la autoridad laboral competente.",
    "sanciones": [
      "No tener plan de autoprotección: multa muy grave",
      "No hacer simulacros: multa grave",
      "No coordinar con emergencias externas: multa grave"
    ],
    "relaciones": [
      "RD 39/1997 (planes de emergencia del empresa)",
      "Ley 31/1995 (Art. 20 emergencias)"
    ],
    "usefulLinks": [
      {
        "text": "Texto completo BOE",
        "url": "https://www.boe.es/buscar/act.php?id=BOE-A-2007-20521"
      }
    ]
  },
  "rd-299-2006": {
    "titulo": "RD 299/2006 - Equipos de Trabajo (actualización del RD 1215/1997)",
    "tipo": "real-decreto",
    "resumenLargo": "Modifica el RD 1215/1997 para adaptar la normativa española a la Directiva 2009/104/CE. Amplía y concreta las obligaciones de mantenimiento, inspección y formación en el uso de equipos de trabajo. Si el RD 1215 te dice QUÉ equipos necesitan esteRD, este te dice CÓMO mantenerlos y usarlos.",
    "queRegula": [
      "Mantenimiento preventivo obligatorio según instrucciones del fabricante",
      "Inspecciones periódicas antes de cada uso y según calendario de mantenimiento",
      "Marcado CE: requisitos y verificación",
      "Formación específica para operadores de cada equipo",
      "Registro documental de inspecciones y mantenimiento",
      "Retiro inmediato de servicio de equipos que no cumplan"
    ],
    "mantenimiento": [
      {
        "tipo": "Antes de cada uso",
        "acciones": [
          "Revisión visual general",
          "Comprobar protecciones de seguridad",
          "Verificar niveles de aceite/combustible",
          "Probar frenos y mandos",
          "Comprobar cables, eslingas, ganchos"
        ],
        "responsable": "El propio operador"
      },
      {
        "tipo": "Mantenimiento preventivo periódico",
        "acciones": [
          "Seguir calendario del fabricante",
          "Cambio de piezas de desgaste",
          "Calibración de instrumentos",
          "Lubricación y limpieza",
          "Pruebas de funcionamiento"
        ],
        "responsable": "Servicio técnico cualificado"
      },
      {
        "tipo": "Mantenimiento correctivo",
        "acciones": [
          "Reparación inmediata de averías",
          "Sustitución de piezas dañadas",
          "Verificación post-reparación",
          "Documentación de la reparación"
        ],
        "responsable": "Servicio técnico cualificado"
      }
    ],
    "equiposComunes": [
      {
        "equipo": "Andamios",
        "inspeccion": "Antes de cada montaje + cada 7 días en uso",
        "formación": "Montaje y desmontaje de andamios"
      },
      {
        "equipo": "Grúas torre",
        "inspeccion": "Diaria (operador) + trimestral (técnico) + anual (organismo)",
        "formación": "Operador de grúa torre (carne especial)"
      },
      {
        "equipo": "Montacargas",
        "inspeccion": "Diaria (operador) + mensual (técnico)",
        "formación": "Operador de montacargas (certificado"
      },
      {
        "equipo": "Herramientas manuales",
        "inspeccion": "Antes de cada uso",
        "formación": "Uso correcto de herramientas"
      },
      {
        "equipo": "Taladros/Amoladoras",
        "inspeccion": "Antes de cada uso",
        "formación": "Uso seguro de herramientas eléctricas"
      },
      {
        "equipo": "Vehículos industriales",
        "inspeccion": "Diaria (ITV periódica)",
        "formación": "Carné de conducir + formación específica"
      }
    ],
    "comoLoUso": "EJEMPLO PRÁCTICO: Llegás a una obra para hacer una inspección de seguridad. ¿Qué mirás en los equipos?\n\n1. ANDAMIOS:\n   - ¿Están montados según proyecto técnico?\n   - ¿Tienen barandillas y rodapiés?\n   - ¿Las plataformas están completas (sin huecos)?\n   - ¿Hay plan de andamios firmado por técnico competente?\n\n2. GRÚA:\n   - ¿El operador tiene carné de gruista?\n   - ¿Tiene libro de inspecciones al día?\n   - ¿La última inspección fue hace menos de 12 meses?\n   - ¿Las eslingas tienen certificado de carga?\n\n3. MONTACARGAS:\n   - ¿El operador tiene certificado?\n   - ¿Tiene mantenimiento preventivo al día?\n   - ¿Las horquillas están en buen estado?\n\n4. HERRAMIENTAS:\n   - ¿Tienen marcado CE?\n   - ¿Están en buen estado visual?\n   - ¿Se usan las correctas para cada tarea?\n\nSi ves algo fuera de norma, lo documentás con foto y Medida Correctiva.",
    "sanciones": [
      "No mantener equipos: multa grave",
      "Usar equipos sin CE: multa muy grave (30.001-60.000€)",
      "No formar operadores: multa grave",
      "No inspeccionar equipos: multa grave"
    ],
    "relaciones": [
      "RD 1215/1997 (base)",
      "Ley 31/1995 (Art. 16 evaluación de riesgos)"
    ],
    "usefulLinks": [
      {
        "text": "Texto completo BOE",
        "url": "https://www.boe.es/buscar/act.php?id=BOE-A-2006-21467"
      }
    ]
  },
  "rd-1620-2011": {
    "titulo": "RD 1620/2011 - Protocolo de Actuación ante Olas de Calor",
    "tipo": "real-decreto",
    "resumenLargo": "Establece el sistema de actuación preventiva de los riesgos derivados de las altas temperaturas y el protocolo de actuación ante olas de calor. En saneamiento exterior, el calor es un riesgo REAL y subestimado. Cada verano mueren trabajadores por golpe de calor en España.",
    "queRegula": [
      "Aviso preventivo: T máxima prevista > 37°C → medidas preventivas",
      "Aviso de ola de calor: 3+ días con T máxima > 40°C (litoral) o > 39°C (interior)",
      "Obligaciones del empresario durante ola de calor",
      "Horarios de trabajo recomendados en horas de máxima insolación",
      "Vigilancia sanitaria de trabajadores",
      "Protocolo de actuación ante golpe de calor"
    ],
    "nivelesAviso": [
      {
        "nivel": "Aviso preventivo",
        "condicion": "T máxima prevista > 37°C",
        "medidas": [
          "Informar trabajadores",
          "Facilitar agua y sombra",
          "Reorganizar horarios"
        ]
      },
      {
        "nivel": "Aviso de ola de calor",
        "condicion": "3+ días T máxima > 40°C litoral / > 39°C interior",
        "medidas": [
          "Reducir horario laboral",
          "Descansos obligatorios",
          "Vigilancia sanitaria",
          "Agua y sombra permanentes"
        ]
      }
    ],
    "obligacionesEmpresario": [
      "Poner a disposición del trabajador agua potable y fresca",
      "Facilitar lugares con sombra para descanso",
      "Organizar el trabajo para evitar exposición en horas pico (12:30-16:30)",
      "Hacer descansos de 15 min cada 45-60 min de exposición directa al sol",
      "Vigilar el estado de salud de los trabajadores",
      "Formar trabajadores sobre síntomas de golpe de calor",
      "Tener protocolo de actuación ante emergencia por calor"
    ],
    "sintomasGolpeCalor": [
      {
        "fase": "Golpe de calor leve",
        "síntomas": [
          "Dolor de cabeza",
          "Mareo",
          "Náusea",
          "Sudoración excesiva",
          "Calambres musculares"
        ],
        "actuación": "Mover a sombra, dar agua fresca, mojar ropa, reposo 15-20 min"
      },
      {
        "fase": "Golpe de calor grave",
        "síntomas": [
          "Piel caliente y seca",
          "Confusión",
          "Pérdida de conciencia",
          "Temperatura corporal > 40°C",
          "Convulsiones"
        ],
        "actuación": "LLAMAR A EMERGENCIAS (112), enfriar cuerpo con agua, no dar líquidos si está inconsciente"
      }
    ],
    "comoLoUso": "EJEMPLO PRÁCTICO: Es julio en Sevilla. Trabajás en saneamiento exterior, inspeccionando alcantarillas. Las 12:30.\n\n1. ANTES DEL TRABAJO:\n   - Revisás el aviso meteorológico: T máxima prevista 42°C → AVISO DE CALOR activo\n   - Informás al equipo: \"Chicos, hoy hay ola de calor. Salimos a las 7:00, paramos a las 12:00, volvemos a las 17:00\"\n\n2. DURANTE EL TRABAJO:\n   - Cada 45 minutos: parada obligatoria de 15 min a la sombra\n   - Agua fresca siempre disponible (mínimo 1 litro/hora por trabajador)\n   - Si alguien dice \"me mareo\", parás inmediatamente\n\n3. SI ALGUIEN TIENE SÍNTOMAS:\n   - Mover a sombra\n   - Quitar ropa excesiva\n   - Mojar cara, cuello, muñecas con agua fresca\n   - Dar sorbos pequeños de agua\n   - Si en 15-20 min no mejora → LLAMAR AL 112\n\n4. PREVENCIÓN DIARIA:\n   - Trabajar de 7:00 a 12:00 y de 17:00 a 20:00\n   - Descansos en sombra cada 45 min\n   - Hidratación constante\n   - Vigilar compañeros por si tienen cara de \"no estar bien\"\n\nCada verano mueren trabajadores agrícolas y de construcción por esto. En saneamiento, el sol directo + trabajo físico = riesgo ALTO.",
    "sanciones": [
      "No dar agua: multa grave",
      "No organizar horarios en ola de calor: multa grave",
      "No vigilar salud de trabajadores: multa grave"
    ],
    "relaciones": [
      "RD 486/1997 (condiciones de trabajo)",
      "Ley 31/1995 (Art. 14 obligación de protección)"
    ],
    "usefulLinks": [
      {
        "text": "Texto completo BOE",
        "url": "https://www.boe.es/buscar/act.php?id=BOE-A-2011-14798"
      }
    ]
  },
  "rd-840-2003": {
    "titulo": "RD 840/2003 - Medidas de Seguridad en Trabajos con Riesgo Eléctrico",
    "tipo": "real-decreto",
    "resumenLargo": "Establece las disposiciones mínimas de seguridad y salud en trabajos con riesgo eléctrico, tanto en instalaciones desenergizadas como energizadas. En saneamiento, siempre estás trabajando cerca de cables, cuadros eléctricos y subestaciones. El riesgo eléctrico es invisible: si no lo medís, no lo ves.",
    "queRegula": [
      "Distancias de seguridad según tensión",
      "Trabajos en instalaciones desenergizadas: protocolo completo",
      "Trabajos en instalaciones energizadas: restricciones y EPIs",
      "Tierra provisional obligatoria",
      "Señalización del área de trabajo",
      "Personal habilitado para cada tipo de trabajo"
    ],
    "distanciasSeguridad": [
      {
        "tension": "< 50 V CA / 120 V CC",
        "distancia": "0,3 m",
        "nota": "No requiere medidas especiales"
      },
      {
        "tension": "50-120 V CA / 120-250 V CC",
        "distancia": "0,5 m",
        "nota": "Herramientas aisladas"
      },
      {
        "tension": "120-250 V CA",
        "distancia": "1,0 m",
        "nota": "EPIs dieléctricos"
      },
      {
        "tension": "250-500 V CA",
        "distancia": "1,5 m",
        "nota": "Autorización obligatoria"
      },
      {
        "tension": "> 500 V",
        "distancia": "3,0 m+",
        "nota": "Solo personal especializado"
      }
    ],
    "protocoloLOTO": [
      "1. DESCONEXIÓN: Cortar energía en punto de desconexión identificado",
      "2. BLOQUEO: Poner candado en punto de desconexión con etiqueta 'NO OPERAR'",
      "3. VERIFICACIÓN: Comprobar que no hay tensión con detector de ausencia de tensión",
      "4. TIERRA: Poner tierra provisional en la instalación",
      "5. SEÑALIZACIÓN: Delimitar zona de trabajo con señal de peligro eléctrico",
      "6. EPIs: Usar guantes dieléctricos, alfombra aislante, casco con pantalla",
      "7. TRABAJO: Solo personal habilitado puede intervenir",
      "8. RESTAURACIÓN: Verificar que todo está OK antes de volver a energizar"
    ],
    "personalHabilitado": [
      {
        "tipo": "Trabajos en instalaciones desenergizadas",
        "requisito": "Formación específica en riesgo eléctrico"
      },
      {
        "tipo": "Trabajos en instalaciones energizadas < 1kV",
        "requisito": "Habilitación por empresa + formación específica"
      },
      {
        "tipo": "Trabajos en instalaciones energizadas > 1kV",
        "requisito": "Título de instalador autorizado + habilitación específica"
      }
    ],
    "comoLoUso": "EJEMPLO PRÁCTICO: Te mandan a hacer saneamiento en un sótano de una fábrica donde hay un cuadro eléctrico expuesto al lado de donde vas a trabajar.\n\n1. EVALUACIÓN PREVIA:\n   - Mirás el cuadro: ¿tiene cubierta? ¿Está etiquetado? ¿Hay cables sueltos?\n   - Medís la distancia: estás a 0,8 metros del cuadro\n   - Tensión del cuadro: 400V trifásico\n   - Distancia de seguridad requerida: 1,5 m → ¡NO CUMPLES! Estás demasiado cerca\n\n2. MEDIDAS:\n   - Opción A: Pedir que el cuadro se desconecte (si es posible)\n   - Opción B: Si no se puede desconectar, instalar barrera aislante a 1,5 m\n   - Opción C: Usar EPIs dieléctricos si vas a trabajar a < 1,5 m\n   - Opción D: NO TRABAJAR hasta que se cumpla la distancia\n\n3. SI HACÉS TRABAJOS EN INSTALACIÓN DESENERGIZADA:\n   - Seguí el protocolo LOTO completo (desconexión → bloqueo → verificación → tierra → señalización)\n   - NUNCA confíes en que \"está apagado\" sin verificar con detector de tensión\n\n4. DOCUMENTACIÓN:\n   - Escribís en la evaluación: riesgo eléctrico identificado, distancia insuficiente, medidas propuestas\n   - Si el jefe no hace nada, lo reportás por escrito\n\nEl riesgo eléctrico mata sin avisar. Si no estás seguro, NO TRABAJES.",
    "sanciones": [
      "No respetar distancias de seguridad: multa muy grave",
      "Trabajar sin habilitación: multa muy grave",
      "No hacer protocolo LOTO: multa muy grave",
      "No usar EPIs dieléctricos: multa grave"
    ],
    "relaciones": [
      "RD 1215/1997 (equipos de trabajo)",
      "RD 374/2001 (agentes químicos)",
      "RD 39/1997"
    ],
    "usefulLinks": [
      {
        "text": "Texto completo BOE",
        "url": "https://www.boe.es/buscar/act.php?id=BOE-A-2003-14228"
      }
    ]
  },
  "rd-39-1997": {
    "titulo": "RD 39/1997 - Reglamento de los Servicios de Prevención",
    "tipo": "real-decreto",
    "resumenLargo": "El Reglamento de los Servicios de Prevención (RD 39/1997) es la norma reglamentaria fundamental que articula operativamente toda la prevención en España. Desarrolla la Ley 31/1995 y establece con absoluta precisión técnica cómo se estructura el Plan de Prevención, la metodología técnica para la evaluación inicial y periódica de riesgos, la planificación de las medidas preventivas con asignación presupuestaria y plazos, los requisitos para constituir Servicios de Prevención Propios (SPP), Mancomunados (SPM) o concertar con Servicios de Prevención Ajenos (SPA), la presencia obligatoria de los Recursos Preventivos (Art. 22 bis), los plazos y protocolos para someterse a auditorías reglamentarias externas, y la acreditación de las funciones técnicas de Nivel Básico, Intermedio y Superior.",
    "queRegula": [
      "Elaboración, implantación y estructura formal del Plan de Prevención de Riesgos Laborales (Arts. 1 y 2).",
      "Procedimiento técnico, fases y revisión de la Evaluación Inicial de Riesgos (Arts. 3 a 7).",
      "Planificación de la actividad preventiva: recursos, prioridades, plazos y responsables (Arts. 8 y 9).",
      "Las 5 modalidades de organización preventiva: asunción por el empresario, trabajadores designados, SPP, SPA y SPM (Arts. 10 a 23).",
      "Obligación de constituir Servicio de Prevención Propio en empresas de >500 trabajadores o >250 en actividades del Anexo I (Art. 14).",
      "Presencia física obligatoria de los Recursos Preventivos en operaciones peligrosas (Art. 22 bis).",
      "Régimen de Auditorías reglamentarias del sistema cada 4 años (o cada 2 años en empresas del Anexo I) (Arts. 29 a 33).",
      "Niveles de cualificación técnica en prevención: Nivel Básico (30h/50h), Nivel Intermedio y Nivel Superior Técnico (Arts. 34 a 37)."
    ],
    "sanciones": [
      "No formalizar por escrito el Plan de Prevención o carecer de evaluación de riesgos: Infracción GRAVE (multa de 2.451 € a 49.180 €).",
      "No someter la empresa a la auditoría del sistema de prevención en plazo reglamentario: Infracción GRAVE.",
      "No disponer de la presencia obligatoria del Recurso Preventivo en operaciones del Anexo I: Infracción GRAVE o MUY GRAVE (hasta 983.736 €).",
      "Carecer de modalidad preventiva formalmente organizada o concertada: Infracción GRAVE."
    ],
    "comoLoUso": "PROTOCOLO DIARIO DEL TÉCNICO SEGÚN EL RD 39/1997:\n1. MODALIDAD PREVENTIVA: Verificar que la empresa tenga su modalidad preventiva formalizada ante la Autoridad Laboral (asunción personal, designación de trabajadores, SPP o SPA).\n2. IMPLANTACIÓN DEL PLAN: Revisar que el Plan de Prevención esté aprobado por la dirección general y asigne funciones concretas a cada mando intermedio y encargado de obra.\n3. EVALUACIÓN Y PLANIFICACIÓN: Para cada puesto de trabajo, aplicar métodos técnicos reconocidos (INSST o Fine). Si el riesgo no es tolerable, redactar la Planificación Preventiva fijando: medida correctora, presupuesto asignado, plazo de ejecución y responsable de seguimiento con nombre y apellidos.\n4. RECURSO PREVENTIVO EN CAMPO: Identificar las operaciones peligrosas (pozos >2 m, zanjas sin entibar, confluencia de maquinaria). Designar formalmente al Recurso Preventivo con formación de 50 horas y exigir su presencia in situ durante toda la maniobra.\n5. AUDITORÍA REGLAMENTARIA: Si la empresa gestiona la prevención con medios propios (SPP o trabajadores designados), programar la auditoría externa cada 4 años (o cada 2 años si realiza actividades del Anexo I)."
  },
  "rd-1215-1997": {
    "titulo": "RD 1215/1997 - Seguridad en Equipos de Trabajo",
    "tipo": "real-decreto",
    "resumenLargo": "El Real Decreto 1215/1997 transpone la Directiva 2009/104/CE y establece los requisitos esenciales de seguridad que deben cumplir TODOS los equipos de trabajo utilizados en las empresas: maquinaria pesada, herramientas manuales, aparatos de elevación, camiones cisterna, bombas sumergibles, escaleras de mano y andamios. Establece la doble vía de conformidad (marcado CE para equipos posteriores a 1995 o adecuación al Anexo I para equipos anteriores), las obligaciones de mantenimiento e inspecciones periódicas obligatorias, la formación específica requerida para operadores y los límites estrictos al trabajo temporal en altura y elevación de personas.",
    "queRegula": [
      "Puesta a disposición de equipos de trabajo seguros con marcado CE o adecuación al Anexo I (Art. 3).",
      "Comprobaciones iniciales, periódicas y extraordinarias por personal competente con registro documental (Art. 4).",
      "Obligaciones de formación teórico-práctica e información mediante manuales de instrucciones en castellano (Art. 5).",
      "Disposiciones mínimas generales: órganos de accionamiento, seta de parada de emergencia, resguardos fijos e interbloqueos, y bloqueo LOTO (Anexo I.1).",
      "Disposiciones para equipos móviles y elevación: estructuras antivuelco ROPS/FOPS, avisadores acústicos de marcha atrás y pestillos de seguridad en ganchos (Anexo I.2).",
      "Prohibición taxativa de elevación de personas con equipos destinados a carga (como carretillas o excavadoras) salvo casos excepcionales regulados (Anexo II.2).",
      "Regulación de trabajos temporales en altura: limitación de escaleras de mano y exigencia de Plan de Montaje (PMUD) para andamios de más de 6 m (Anexo II.4)."
    ],
    "sanciones": [
      "Poner a disposición equipos de trabajo sin marcado CE o sin certificado de adecuación al RD 1215/1997: Infracción GRAVE (multa de 2.451 € a 49.180 €).",
      "Anular o puentear dispositivos de seguridad, resguardos o paradas de emergencia: Infracción MUY GRAVE (hasta 983.736 €).",
      "Permitir la elevación de personas en palets sobre carretillas elevadoras o en cazos de excavadora: Infracción MUY GRAVE inmediata.",
      "Falta de formación específica del operador de maquinaria o carecer de libro de revisiones periódicas: Infracción GRAVE."
    ],
    "comoLoUso": "PROTOCOLO DE INSPECCIÓN DE MÁQUINAS Y EQUIPOS:\n1. VERIFICACIÓN DOCUMENTAL: Comprobar placa de marcado CE, Declaración CE de Conformidad y manual de instrucciones del fabricante en castellano. Si la máquina es anterior a 1995, exigir el Certificado de Adecuación al Anexo I visado por técnico competente.\n2. PROTECCIONES Y PARADAS: Verificar que transmisiones y poleas tengan resguardos fijos; que las puertas de mantenimiento tengan microinterruptores de seguridad de enclavamiento; y que el pulsador de emergencia tipo seta corte la energía.\n3. CONSIGNACIÓN EN MANTENIMIENTO (LOTO): Implantar el procedimiento de bloqueo y etiquetado (Lockout/Tagout). Nadie repara, desatasca o limpia una máquina sin candado personal de bloqueo eléctrico y neumático.\n4. CONTROL DE VEHÍCULOS: Inspeccionar camiones y maquinaria pesada: alarma de marcha atrás operativa, rotativo luminoso, cinturón de seguridad y estructura antivuelco ROPS.\n5. TRABAJOS EN ALTURA: Prohibir el uso de escaleras de mano para trabajos continuados. Si el trabajo dura más de unas horas o supera los 3,5 metros, exigir plataforma elevadora PEMP o andamio con certificado de montaje."
  },
  "rd-773-1997": {
    "titulo": "RD 773/1997 - Equipos de Protección Individual (EPIs)",
    "tipo": "real-decreto",
    "resumenLargo": "El Real Decreto 773/1997 regula la elección, utilización, mantenimiento y control de los Equipos de Protección Individual (EPIs) en el trabajo. Consagra el principio jurídico de que el EPI es el ÚLTIMO recurso preventivo, aplicable únicamente cuando los riesgos no hayan podido evitarse o limitarse suficientemente mediante protecciones colectivas. Fija la obligación del empresario de suministrar gratuitamente los EPIs certificados con marcado CE (según el Reglamento UE 2016/425), impartir entrenamiento práctico para equipos complejos (Categoría III como arneses y respiratorios), reponerlos cuando se deterioren y exigir su uso efectivo a los trabajadores.",
    "queRegula": [
      "Definición legal de EPI y exclusiones (ropa corriente, socorro, policía, detectores portátiles) (Art. 2).",
      "Principio de prioridad absoluta de las medidas de protección colectiva frente a la individual (Art. 3).",
      "Condiciones de idoneidad, ergonomía, compatibilidad entre múltiples EPIs y marcado CE (Arts. 4 y 5).",
      "Obligación de gratuidad absoluta, mantenimiento, limpieza y reposición a cargo del empresario (Art. 7).",
      "Formación teórica y entrenamiento práctico obligatorio antes del uso de EPIs de Categoría III (Art. 8).",
      "Obligación disciplinaria del trabajador de utilizar y cuidar correctamente los EPIs asignados (Art. 10)."
    ],
    "sanciones": [
      "No proporcionar gratuitamente a los trabajadores los EPIs adecuados al riesgo: Infracción GRAVE (multa de 2.451 € a 49.180 €).",
      "Cobrar o descontar del salario el importe de los EPIs suministrados: Infracción GRAVE.",
      "Permitir trabajos en altura (>2 m) o en atmósferas tóxicas sin facilitar los EPIs de Categoría III preceptivos: Infracción MUY GRAVE (hasta 983.736 €)."
    ],
    "comoLoUso": "PROTOCOLO TÉCNICO DE GESTIÓN DE EPIs:\n1. EVALUACIÓN Y SELECCIÓN: Evaluar los riesgos residuales que no se eliminaron con protección colectiva. Seleccionar el EPI adecuado consultando las normas UNE-EN específicas (ej. Calzado S3 SRC UNE-EN ISO 20345, Guantes mecánicos UNE-EN 388, Guantes químicos UNE-EN ISO 374, Arnés anticaídas UNE-EN 361).\n2. REGISTRO DE ENTREGA: Entregar el EPI haciendo firmar el documento formal de entrega individual con fecha, modelo, marcado CE y fecha de caducidad.\n3. ENTRENAMIENTO EN CATEGORÍA III: Para arneses y equipos de respiración, realizar un taller práctico donde cada operario se coloque el equipo, verifique los puntos de ajuste y compruebe los mosquetones.\n4. REPOSICIÓN INMEDIATA: Retirar de inmediato cualquier arnés que haya sufrido una caída previa o superado su vida útil recomendada por el fabricante."
  },
  "rd-374-2001": {
    "titulo": "RD 374/2001 - Riesgo por Agentes Químicos",
    "tipo": "real-decreto",
    "resumenLargo": "Regula la protección de los trabajadores contra los riesgos derivados de la presencia o utilización de agentes químicos peligrosos en el trabajo. Obliga a evaluar los riesgos mediante las Fichas de Datos de Seguridad (FDS de 16 epígrafes) y mediciones higiénicas cuantitativas de las concentraciones en aire, comparándolas con los Valores Límite Ambientales (VLA-ED y VLA-EC) publicados por el INSST. Prioriza la sustitución de productos peligrosos, exige extracción localizada en origen, duchas de seguridad, lavaojos y protocolos de vigilancia médica con Valores Límite Biológicos (VLB).",
    "queRegula": [
      "Definiciones de agentes químicos peligrosos, VLA-ED, VLA-EC y VLB (Art. 2).",
      "Evaluación higiénica de riesgos mediante FDS de 16 epígrafes y mediciones cuantitativas (Art. 3).",
      "Prioridad absoluta de sustitución por sustancias no peligrosas o sistemas cerrados (Art. 4).",
      "Medidas técnicas de extracción localizada, ventilación forzada y orden (Art. 5).",
      "Planes de emergencia ante derrames, duchas de seguridad y lavaojos a menos de 15 m (Art. 6).",
      "Vigilancia de la salud y control biológico de metabolitos en sangre y orina (Art. 7).",
      "Prohibiciones taxativas de agentes químicos cancerígenos del Anexo III (Art. 9)."
    ],
    "sanciones": [
      "Superar los valores límite ambientales (VLA) sin adoptar medidas correctoras: Infracción GRAVE.",
      "Trabajar con sustancias químicas peligrosas sin disponer de las Fichas de Datos de Seguridad: Infracción GRAVE.",
      "No disponer de duchas de seguridad o lavaojos operativos junto a focos de riesgo químico: Infracción GRAVE.",
      "Utilizar agentes químicos prohibidos del Anexo III sin autorización expresa: Infracción MUY GRAVE."
    ],
    "comoLoUso": "PROTOCOLO PARA TRABAJOS CON AGENTES QUÍMICOS:\n1. FICHERO DE FDS: Exigir y archivar la Ficha de Datos de Seguridad de 16 epígrafes en castellano de cada producto químico utilizado (lejía, sosa, ácido sulfhídrico, coagulantes).\n2. CONTROL DE ETIQUETADO CLP: Verificar que todos los envases y recipientes de trasvase lleven la etiqueta reglamentaria con pictogramas de peligro, frases H (peligro) y consejos P (prudencia). Prohibir rellenar botellas de agua o refresco con químicos.\n3. MEDICIONES HIGIÉNICAS: En presencia de vapores o gases (H₂S, NH₃, cloro), realizar mediciones higiénicas con tubos colorimétricos o bombas de muestreo calibradas y comparar contra el VLA-ED y VLA-EC del INSST.\n4. DUCHAS Y LAVAOJOS: Comprobar semanalmente el caudal y limpieza de las duchas y lavaojos de emergencia. Deben estar libres de obstáculos a menos de 10 segundos del foco de peligro."
  },
  "rd-664-1997": {
    "titulo": "RD 664/1997 - Exposición a Agentes Biológicos",
    "tipo": "real-decreto",
    "resumenLargo": "Establece las disposiciones para proteger a los trabajadores contra los riesgos derivados de la exposición a agentes biológicos (virus, bacterias, hongos y parásitos). Clasifica los patógenos en 4 grupos de riesgo según su peligrosidad y capacidad de propagación epidémica. Regula tanto las actividades con intención deliberada (laboratorios) como sin intención deliberada (saneamiento, alcantarillado, depuradoras y recogida de basuras). Exige vestuarios con taquillas dobles, lavado de uniformes a cargo exclusivo de la empresa, ofrecimiento formal y gratuito de vacunas (tétanos, hepatitis A y B) y custodia de registros médicos durante 10 o 40 años.",
    "queRegula": [
      "Definición legal de agente biológico y vías de transmisión (dérmica, inhalatoria, digestiva, parenteral) (Art. 2).",
      "Clasificación en 4 grupos de riesgo: Grupo 1 (inocuo), Grupo 2 (enfermedad pero hay tratamiento), Grupo 3 (enfermedad grave y propagación con tratamiento), Grupo 4 (alta mortalidad sin tratamiento) (Art. 3).",
      "Evaluación específica en actividades de saneamiento, depuración y residuos (Art. 4).",
      "Medidas higiénicas obligatorias: taquillas dobles para ropa limpia/sucia y lavado de uniformes a cargo de la empresa (Arts. 7 y 8).",
      "Vigilancia médica periódica y ofrecimiento gratuito de vacunas (tétanos, hepatitis A y B) (Art. 9).",
      "Lista de trabajadores expuestos y custodia documental durante 10 o 40 años (Art. 10)."
    ],
    "sanciones": [
      "No proporcionar ropa de protección o permitir que los trabajadores laven los uniformes de trabajo en casa: Infracción GRAVE.",
      "No ofrecer gratuitamente las vacunas preceptivas frente a riesgo biológico demostrado: Infracción GRAVE.",
      "Carecer de taquillas dobles separadas para ropa de calle y ropa contaminada de trabajo: Infracción GRAVE.",
      "No conservar la lista de trabajadores expuestos durante los plazos reglamentarios (10/40 años): Infracción GRAVE."
    ],
    "comoLoUso": "PROTOCOLO PARA TAREAS CON RIESGO BIOLÓGICO EN SANEAMIENTO:\n1. VACUNACIÓN PREVIA: Ofrecer por escrito a todo el personal de saneamiento las vacunas de Tétanos-Difteria, Hepatitis A y Hepatitis B. Si el operario renuncia, archivar el documento firmado de renuncia informada.\n2. EQUIPOS DE PROTECCIÓN: Asignar guantes impermeables con resistencia mecánica y biológica (UNE-EN ISO 374-5 con marcado 'VIRUS'), pantalla facial contra salpicaduras y mascarilla FFP2/FFP3 en zonas de formación de aerosoles.\n3. PROTOCOLO DE HIGIENE: Lavado estricto de manos antes de comer o beber. Disponer de solución hidroalcohólica en los vehículos de servicio.\n4. ROPA DE TRABAJO: Utilizar taquillas dobles. Al finalizar el turno, depositar los uniformes sucios en los sacos de lavandería industrial concertada; jamás permitir que el operario se lleve el uniforme a su casa."
  },
  "rd-486-1997": {
    "titulo": "RD 486/1997 - Disposiciones Mínimas en Lugares de Trabajo",
    "tipo": "real-decreto",
    "resumenLargo": "El Real Decreto 486/1997 fija las condiciones constructivas, ergonómicas y ambientales mínimas que debe reunir cualquier centro de trabajo en España. Detalla las dimensiones mínimas de los puestos (3 m de altura, 2 m² libres de suelo, 10 m³ de volumen), las condiciones de las vías de evacuación y suelos sin desniveles, la protección de huecos con barandillas de 90 cm y rodapié de 15 cm, los límites de temperatura y humedad ambiental (17-27 °C en oficinas, 14-25 °C en trabajos ligeros), los niveles mínimos de iluminación en lux para cada tarea y la obligatoriedad de servicios higiénicos, duchas con agua caliente y botiquín de primeros auxilios.",
    "queRegula": [
      "Definición y alcance integral de lugares de trabajo (instalaciones, pasillos, vestuarios, azoteas) (Art. 2).",
      "Dimensiones estructurales mínimas: 3 m de altura (2,5 m en oficinas), 2 m² libres de suelo y 10 m³ por trabajador (Anexo I.1).",
      "Seguridad en suelos, pendientes, aberturas y barandillas de 90 cm con rodapié de 15 cm (Anexo I.2).",
      "Escaleras fijas: anchura mínima de 1 m, huella entre 28-37 cm y contrahuella entre 13-20 cm (Anexo I.4).",
      "Condiciones termohigrométricas: temperatura (17-27 °C sedentario, 14-25 °C ligero) y humedad (30-70%) (Anexo III).",
      "Iluminación mínima reglamentaria en lux (100, 200, 500 y 1.000 lux) y alumbrado de emergencia (Anexo IV).",
      "Vestuarios con taquillas, duchas con agua caliente/fría y botiquín de primeros auxilios (Anexos V y VI)."
    ],
    "sanciones": [
      "Aberturas en suelos o desniveles de más de 2 metros desprovistos de barandilla reglamentaria: Infracción MUY GRAVE.",
      "Incumplimiento de las dimensiones mínimas de los puestos de trabajo o bloqueo de salidas de emergencia: Infracción GRAVE.",
      "Falta de agua potable, servicios higiénicos o duchas con agua caliente en trabajos sucios o tóxicos: Infracción GRAVE.",
      "Niveles de iluminación o temperaturas extremas por encima o debajo de los límites reglamentarios: Infracción GRAVE."
    ],
    "comoLoUso": "PROTOCOLO DE REVISIÓN DE CONDICIONES EN LUGARES DE TRABAJO:\n1. MEDICIÓN DE CONDICIONES AMBIENTALES: Utilizar termohigrómetro calibrado para verificar temperatura (17-27 °C oficinas, 14-25 °C naves) y humedad (30-70%). En veranos de calor extremo, aplicar las medidas de pausas e hidratación del RD-ley 4/2023.\n2. MEDICIÓN DE ILUMINACIÓN: Con luxómetro a la altura del plano de trabajo, verificar al menos 500 lux en despachos técnicos y mesas de dibujo, 200 lux en pasillos concurridos y 100 lux en almacenes.\n3. SEGURIDAD ESTRUCTURAL: Comprobar que todos los desniveles mayores de 2 metros cuenten con barandilla rígida de 90 cm con barra intermedia y rodapié de 15 cm para evitar caídas de personas y objetos.\n4. REVISIÓN DE BOTIQUÍN: Inspeccionar trimestralmente el botiquín: comprobar fechas de caducidad, reponer gasas y desinfectantes y retirar cualquier medicamento no autorizado."
  },
  "rd-396-2006": {
    "titulo": "RD 396/2006 - Trabajos con Riesgo de Amianto",
    "tipo": "real-decreto",
    "resumenLargo": "Regula las operaciones de desamiantado, mantenimiento y retirada de materiales con amianto (uralita, bajantes, aislamientos, juntas). Obliga a inscribirse en el Registro de Empresas con Riesgo de Amianto (RERA), fija el valor límite ambiental en 0,1 fibras/cm³ medidas en 8 horas, exige la aprobación previa de un Plan de Trabajo con Amianto por la Autoridad Laboral (45 días antes), unidades de descontaminación de 3 o 5 fases con ducha obligatoria con máscara puesta, mascarillas motorizadas con filtro P3 o aire asistido y custodia documental de historiales médicos durante 40 años.",
    "queRegula": [
      "Inscripción previa obligatoria en el RERA de la Comunidad Autónoma (Art. 3).",
      "Valor límite ambiental (VLA) de 0,1 fibras/cm³ medidas en jornada de 8 horas (Art. 4).",
      "Muestreo personal continuo mediante microscopía óptica de contraste de fases MTA/MA-051 (Art. 5).",
      "Elaboración y presentación del Plan de Trabajo con Amianto 45 días antes ante la Autoridad Laboral (Arts. 11 y 12).",
      "Unidad móvil de descontaminación de 3 o 5 fases y protocolo de salida con ducha con máscara (Art. 13).",
      "Vigilancia de la salud específica y custodia del archivo médico durante al menos 40 años (Arts. 16 y 18)."
    ],
    "sanciones": [
      "Retirar amianto o manipular materiales con amianto sin estar inscrito en el RERA: Infracción MUY GRAVE (hasta 983.736 €).",
      "Iniciar los trabajos de desamiantado sin contar con el Plan de Trabajo aprobado por la Autoridad Laboral: Infracción MUY GRAVE y paralización inmediata.",
      "Superar el valor límite de 0,1 f/cm³ sin adoptar medidas correctoras inmediatas: Infracción MUY GRAVE.",
      "No proporcionar la unidad de descontaminación o los EPIs respiratorios certificados: Infracción MUY GRAVE."
    ],
    "comoLoUso": "PROTOCOLO OPERATIVO PARA RETIRADA DE AMIANTO:\n1. VERIFICACIÓN RERA Y PLAN: Verificar que la empresa contratista esté activa en el RERA y que el Plan de Trabajo cuente con resolución formal de APROBACIÓN de la Autoridad Laboral competente.\n2. ZONA DE TRABAJO Y CONFINAMIENTO: Delimitar el perímetro con vallado, señalización de peligro amianto y confinamiento estanco con depresión de aire (depresiómetro) y filtros absolutos HEPA si es en interiores.\n3. EPIs OBLIGATORIOS: Buzo desechable de protección química Tipo 5/6 hermético al polvo de partículas sólidas (desechable de un solo uso), máscara completa de silicona con filtro P3 o equipo motorizado con aire asistido y botas sin cordones lavables.\n4. GESTIÓN DEL RESIDUO: Humectar las placas con líquido encapsulante, envolverlas en doble film de polietileno de galga 400 con etiqueta oficial de residuo peligroso de amianto (LER 17 06 05*) y gestionar con gestor autorizado."
  },
  "rd-604-2006": {
    "titulo": "RD 604/2006 - Modificación del RD 39/1997 y Recurso Preventivo",
    "tipo": "real-decreto",
    "resumenLargo": "Reforma el Reglamento de los Servicios de Prevención (RD 39/1997) y el RD 1627/1997 de construcción para transponer la Ley 54/2003. Su aportación más decisiva es la introducción formal del Artículo 22 bis, regulando con fuerza de ley la figura del Recurso Preventivo: en qué supuestos es obligatoria su presencia física en el tajo (riesgos agravados, Anexo I, caídas >2 m, zanjas >2 m, confinados, alta tensión o requerimiento de la ITSS), qué formación mínima debe ostentar (Nivel Básico de 50 horas) y su potestad jurídica de dar indicaciones y paralizar inmediatamente las tareas ante peligro grave e inminente.",
    "queRegula": [
      "Nueva redacción del Art. 2 RD 39/1997 reforzando la integración del Plan de Prevención en la estructura jerárquica.",
      "Introducción del Art. 22 bis RD 39/1997 regulando la presencia obligatoria de los Recursos Preventivos.",
      "Los 3 supuestos de obligatoriedad del Recurso Preventivo: riesgos agravados/concurrentes, actividades peligrosas del Anexo I y requerimiento de la ITSS.",
      "Cualificación mínima requerida para el Recurso Preventivo: Nivel Básico de al menos 50 horas.",
      "Potestad del Recurso Preventivo para impartir instrucciones y ordenar la paralización inmediata de los trabajos.",
      "Obligación de reflejar la designación y funciones del Recurso Preventivo en el Plan de Seguridad y Salud (PSS) en obras de construcción."
    ],
    "sanciones": [
      "No disponer de la presencia obligatoria del Recurso Preventivo en operaciones de especial riesgo: Infracción GRAVE o MUY GRAVE (hasta 983.736 €).",
      "Designar como Recurso Preventivo a personal que no cuente con la cualificación formativa de 50 horas requerida: Infracción GRAVE.",
      "Ausentarse el Recurso Preventivo durante el desarrollo de la maniobra de riesgo peligroso: Infracción GRAVE imputable al empresario."
    ],
    "comoLoUso": "PAUTAS PARA LA APLICACIÓN DEL RECURSO PREVENTIVO:\n1. DETECCIÓN DE OBLIGATORIEDAD: Comprobar si la tarea involucra caídas a más de 2 metros, zanjas profundas, espacios confinados o confluencia de varias contratas. Si es así, la presencia del Recurso Preventivo es obligatoria por ley.\n2. VERIFICACIÓN DE DIPLOMA: Solicitar el certificado oficial de formación de 50 horas (Nivel Básico con el temario reglamentario del RD 39/1997).\n3. ACTA DE DESIGNACIÓN: Formalizar por escrito el documento de nombramiento de Recurso Preventivo, firmado por el empresario y el trabajador designado.\n4. PERMANENCIA IN SITU: El Recurso Preventivo debe estar presente a pie de tajo mientras dure la maniobra crítica. Si detecta que un operario se quita el arnés o no mide los gases del pozo, debe ordenar la detención inmediata de los trabajos."
  },
  "rd-665-1997": {
    "titulo": "RD 665/1997 - Agentes Cancerígenos y Mutágenos",
    "tipo": "real-decreto",
    "resumenLargo": "Regula la protección de los trabajadores contra los riesgos derivados de la exposición a agentes cancerígenos, mutágenos y sustancias tóxicas para la reproducción en el trabajo. Impone el principio de sustitución obligatoria por sustancias inocuas, el confinamiento en sistema cerrado hermético, la reducción de la exposición al nivel técnicamente más bajo posible (ALARA), la captación por extracción localizada con filtros absolutos sin recirculación, medidas de higiene estrictas y la custodia documental de las listas de trabajadores expuestos durante 40 años.",
    "queRegula": [
      "Definición legal de cancerígenos Categorías 1A y 1B (CLP), sílice cristalina respirable, humos diésel y serrín de maderas duras (Art. 2).",
      "Obligación jurídica prioritaria de sustitución por sustancias inocuas (Art. 4).",
      "Producción en sistema cerrado hermético y principio ALARA con extracción localizada (Art. 5).",
      "Comunicación formal obligatoria a la Autoridad Laboral de cantidades y trabajadores expuestos (Art. 6).",
      "Medidas de higiene: prohibición de comer/beber, vestuarios dobles y lavandería industrial a cargo de la empresa (Art. 8).",
      "Lista de trabajadores expuestos y custodia documental durante al menos 40 años tras el cese de la exposición (Arts. 9 y 10)."
    ],
    "sanciones": [
      "No sustituir un agente cancerígeno cuando exista alternativa técnicamente viable en el mercado: Infracción MUY GRAVE.",
      "Superar los valores límite de agentes cancerígenos (ej. sílice cristalina > 0,05 mg/m³): Infracción MUY GRAVE (hasta 983.736 €).",
      "No llevar la lista actualizada de trabajadores expuestos o destruirla antes de los 40 años reglamentarios: Infracción GRAVE.",
      "Permitir la recirculación de aire contaminado con agentes cancerígenos al interior de los locales de trabajo: Infracción MUY GRAVE."
    ],
    "comoLoUso": "PROTOCOLO PARA CONTROL DE AGENTES CANCERÍGENOS:\n1. INVESTIGACIÓN DE SUSTITUCIÓN: Analizar periódicamente si existen alternativas químicas o procesos no cancerígenos para eliminar la sustancia peligrosa.\n2. CONTROL DE POLVO DE SÍLICE: Al cortar asfalto, hormigón o tuberías de gres, exigir corte húmedo con aporte continuo de agua y aspiración en origen conectada a la herramienta. Prohibir el corte en seco.\n3. MEDICIONES CON CICLÓN: Realizar mediciones higiénicas de sílice cristalina mediante muestreo con ciclón para fracción respirable y análisis por difracción de rayos X (DRX) según método MTA/MA-057.\n4. REGISTRO Y RECONOCIMIENTO MÉDICO: Registrar en la lista oficial de expuestos a cada operario con su nivel de exposición y programar reconocimientos médicos específicos anuales."
  },
  "ce-1978-art40": {
    "titulo": "Constitución Española de 1978 - Artículos 40.2, 15 y 43",
    "tipo": "constitucion",
    "resumenLargo": "La Constitución Española de 1978 constituye la cúspide jurídica y el fundamento supremo de todo el Derecho Laboral y de la Prevención de Riesgos Laborales en España. El Artículo 40.2 establece el mandato vinculante a los poderes públicos de velar por la seguridad e higiene en el trabajo. Se complementa con el Artículo 15 (derecho fundamental a la vida y a la integridad física y moral, base de la tipificación de los delitos laborales de los Arts. 316-318 del Código Penal) y el Artículo 43 (derecho a la protección de la salud pública).",
    "queRegula": [
      "Mandato constitucional de velar por la seguridad e higiene en el trabajo y limitar la jornada laboral (Art. 40.2 CE).",
      "Derecho fundamental a la vida y a la integridad física de los trabajadores (Art. 15 CE).",
      "Tutela de la salud pública a través de medidas preventivas del Estado (Art. 43 CE).",
      "Fuerza vinculante e interpretación de los principios rectores de la política social (Art. 53 CE)."
    ],
    "sanciones": [
      "Vulneración del derecho a la vida y salud laboral con dolo o imprudencia grave: Delito contra los derechos de los trabajadores (Artículos 316 a 318 del Código Penal: penas de prisión de 6 meses a 3 años e inhabilitación especial).",
      "Inconstitucionalidad de cualquier disposición reglamentaria que pretenda rebajar los niveles de protección fijados por ley."
    ],
    "comoLoUso": "APLICACIÓN JURÍDICA DE LA CONSTITUCIÓN EN INFORMES TÉCNICOS:\n1. FUNDAMENTACIÓN DE DERECHO: En cualquier informe técnico pericial, recurso de alzada ante sanciones de la Inspección de Trabajo o comparecencia judicial, citar el Art. 40.2 de la CE para dotar al dictamen del máximo peso jurídico superior.\n2. DERECHO DE RESISTENCIA: Fundamentar que el operario que paraliza su actividad ante un peligro inminente no comete indisciplina, sino que ejercita la tutela constitucional de su integridad física garantizada por el Art. 15 de la Carta Magna."
  },
  "et-rdl-2-2015": {
    "titulo": "Estatuto de los Trabajadores - RDL 2/2015",
    "tipo": "ley",
    "resumenLargo": "El Estatuto de los Trabajadores (RDL 2/2015) es el código fundamental que regula el contrato de trabajo individual y colectivo en España (el equivalente a la Ley de Contrato de Trabajo argentina). Consagra en su Art. 4.2.d el derecho básico a la integridad física y a una adecuada política de prevención. Su Art. 19 regula los deberes de formación práctica y obligatoria a cargo del empresario en horario laboral y el deber del trabajador de cumplir las medidas preventivas. El Art. 54 avala el despido disciplinario procedente por desobediencia grave en seguridad, el Art. 64 otorga derechos de información trimestral al Comité de Empresa en siniestralidad y el Art. 84 fija las reglas de concurrencia y primacía de convenios colectivos.",
    "queRegula": [
      "Derecho básico del trabajador a su integridad física y a la prevención de riesgos laborales (Art. 4.2.d ET).",
      "Seguridad y salud en el trabajo: deber de protección, formación gratuita en jornada y cumplimiento por el operario (Art. 19 ET).",
      "Despido disciplinario procedente por desobediencia grave o temeraria a las normas de seguridad (Art. 54.2.d ET).",
      "Derechos de información trimestral del Comité de Empresa sobre accidentes, bajas e índices de siniestralidad (Art. 64 ET).",
      "Concurrencia de convenios colectivos y prioridad de estándares de seguridad y pluses salariales del convenio sectorial (Art. 84 ET)."
    ],
    "sanciones": [
      "Despido disciplinario procedente sin indemnización para el trabajador que incumpla de forma reiterada y grave las medidas preventivas (Art. 54 ET).",
      "Sanciones administrativas de la ITSS a la empresa por falta de formación reglamentaria en el contrato de trabajo (Art. 19 ET y LISOS)."
    ],
    "comoLoUso": "APLICACIÓN DEL ESTATUTO DE LOS TRABAJADORES EN LA GESTIÓN DE PERSONAL:\n1. FORMACIÓN DE INGRESO: Al contratar a un nuevo operario, garantizar y documentar la formación específica del Art. 19 antes de que empiece a trabajar, computando las horas de curso como tiempo de trabajo efectivo remunerado.\n2. RÉGIMEN DISCIPLINARIO: Si un trabajador se quita el arnés o fuma junto a gases inflamables, documentar la infracción con aviso formal por escrito citando el Art. 19 y 29 de la LPRL y el Art. 54 del ET como advertencia laboral vinculante.\n3. INFORME TRIMESTRAL AL COMITÉ: Preparar cada trimestre para el Comité de Empresa y los Delegados de Prevención el balance de siniestralidad (IF, IG, II y jornadas perdidas) conforme al Art. 64."
  },
  "directiva-89-391-cee": {
    "titulo": "Directiva Marco Europea 89/391/CEE (SST)",
    "tipo": "directiva-ue",
    "resumenLargo": "La Directiva 89/391/CEE es la norma matriz de toda la Unión Europea en materia de seguridad y salud en el trabajo. Estableció el principio de que la responsabilidad de la seguridad recae indelegablemente en el empresario, introdujo el decálogo de los principios generales de la acción preventiva (origen exacto del Art. 15 de la Ley 31/1995 española), obligó a la consulta y participación de los representantes de los trabajadores y dio origen a los Servicios de Prevención en todos los Estados miembros de la UE.",
    "queRegula": [
      "Principio general de responsabilidad indelegable del empresario en el ámbito de la SST (Art. 5).",
      "Decálogo de los principios generales de prevención en la Unión Europea (Art. 6).",
      "Servicios de protección y prevención mediante recursos internos o externos cualificados (Art. 7).",
      "Medidas de primeros auxilios, emergencias y derecho ante riesgo grave e inminente (Art. 8).",
      "Derechos de información, consulta y participación de los trabajadores comunitarios (Arts. 10 y 11).",
      "Formación obligatoria en prevención a cargo de la empresa (Art. 12)."
    ],
    "sanciones": [
      "Procedimiento de infracción del Tribunal de Justicia de la Unión Europea (TJUE) contra los Estados miembros que no transpongan o apliquen con total eficacia sus directivas.",
      "Efecto directo vertical de las directivas comunitarias en caso de desprotección ante los tribunales nacionales."
    ],
    "comoLoUso": "APLICACIÓN PRÁCTICA DEL DERECHO COMUNITARIO:\n1. INTERPRETACIÓN CONFORME: Cuando una norma española presente dudas técnicas, acudir a la Directiva Marco 89/391/CEE: los jueces y peritos deben interpretar siempre la ley nacional en el sentido más favorable a la protección de la salud del trabajador.\n2. MARCADOS CE Y NORMAS ARMONIZADAS: La directiva fundamenta el uso de normas UNE-EN armonizadas en toda Europa para garantizar que cualquier máquina o EPI comprado en la UE sea seguro."
  },
  "directiva-92-85-cee": {
    "titulo": "Directiva 92/85/CEE - Maternidad, Embarazo y Lactancia",
    "tipo": "directiva-ue",
    "resumenLargo": "Directiva europea orientada a promover la mejora de la seguridad y salud en el trabajo de la trabajadora embarazada, que haya dado a luz o en período de lactancia. Impone la evaluación previa de riesgos específicos para la maternidad, el procedimiento escalonado de adaptación del puesto, cambio de puesto a jornada diurna o suspensión con subsidio de riesgo pagado al 100%, la dispensa de trabajo nocturno y la prohibición absoluta de despido discriminatorio.",
    "queRegula": [
      "Evaluación específica de riesgos para la maternidad (agentes físicos, químicos y biológicos) (Art. 4).",
      "Secuencia de actuación: 1º adaptar puesto, 2º reubicar en puesto compatible, 3º suspensión con subsidio (Art. 5).",
      "Prohibición de exposición a agentes tóxicos graves del Anexo II durante el embarazo (Art. 6).",
      "Dispensa y prohibición de trabajo nocturno para mujeres embarazadas o lactantes (Art. 7).",
      "Permisos retribuidos para exámenes prenatales y nulidad radical del despido durante el embarazo (Arts. 9 y 10)."
    ],
    "sanciones": [
      "Despido de trabajadora embarazada: Nulidad radical judicial inmediata con readmisión forzosa y abono íntegro de salarios dejados de percibir.",
      "Asignar a una mujer embarazada a un puesto de riesgo biológico o químico prohibido: Infracción MUY GRAVE LISOS (multas de 49.181 € a 983.736 €)."
    ],
    "comoLoUso": "PROTOCOLO ANTE COMUNICACIÓN DE EMBARAZO EN SANEAMIENTO:\n1. COMUNICACIÓN Y VALORACIÓN INMEDIATA: Tan pronto la trabajadora comunique su embarazo, el técnico de PRL y el médico del trabajo revisan la evaluación de riesgos de su puesto específico.\n2. RETIRADA DE RIESGOS: En saneamiento (aguas fecales, solventes, vibraciones de camiones), retirar inmediatamente a la operaria de las labores de campo o nocturnas.\n3. REUBICACIÓN O MUTUA: Si existen puestos administrativos limpios, reubicarla allí; si no hay puesto exento de riesgo, tramitar de urgencia con la Mutua colaboradora la prestación económica de Riesgo Durante el Embarazo con abono del 100% de la base reguladora."
  },
  "directiva-94-33-cee": {
    "titulo": "Directiva 94/33/CEE - Protección de Jóvenes y Menores",
    "tipo": "directiva-ue",
    "resumenLargo": "Directiva comunitaria que salvaguarda a los trabajadores menores de 18 años. Obliga a una evaluación previa rigurosa que contemple su inmadurez y falta de experiencia, prohíbe de forma taxativa su asignación a trabajos peligrosos, insalubres, penosos o tóxicos (confinados, alta tensión, alturas, cancerígenos), veta las horas extras y el trabajo nocturno (22:00 a 06:00 h) y garantiza descansos diarios de 12 horas consecutivas y descansos semanales de dos días ininterrumpidos.",
    "queRegula": [
      "Evaluación de riesgos previa específica atendiendo a la inexperiencia y desarrollo incompleto del joven (Art. 6).",
      "Prohibición de ocupación de menores en trabajos peligrosos o con agentes tóxicos y biológicos graves (Art. 7).",
      "Jornada máxima de 8 horas diarias y 40 semanales, prohibiendo expresamente horas extraordinarias (Art. 8).",
      "Prohibición estricta de trabajo nocturno para menores de 18 años (Art. 9).",
      "Descanso diario de al menos 12 horas seguidas y descanso semanal mínimo de dos días consecutivos (Art. 10)."
    ],
    "sanciones": [
      "Emplear a menores de 18 años en trabajos peligrosos, penosos, insalubres o en turno nocturno: Infracción MUY GRAVE LISOS (multas de 49.181 € a 983.736 €).",
      "Hacer realizar horas extraordinarias a un menor de 18 años: Infracción GRAVE LISOS."
    ],
    "comoLoUso": "CONTROL DE MENORES Y ALUMNOS EN PRÁCTICAS DE FP:\n1. REVISIÓN DE EDAD: Al incorporar aprendices o alumnos de Formación Profesional en alternancia, verificar la fecha de nacimiento.\n2. LIMITACIÓN DE TAREAS: Prohibir tajantemente que operen maquinaria pesada, entren a pozos de bombeo o manejen biocidas y reactivos químicos peligrosos.\n3. CONTROL DE HORARIO: Verificar que finalicen su jornada antes de las 22:00 horas y que no prolonguen su jornada laboral bajo ninguna circunstancia."
  },
  "directiva-91-383-cee": {
    "titulo": "Directiva 91/383/CEE - Trabajadores Temporales y ETTs",
    "tipo": "directiva-ue",
    "resumenLargo": "Garantiza que los trabajadores temporales y aquellos contratados a través de Empresas de Trabajo Temporal (ETTs) gocen del MISMO nivel de protección, derechos y formación que los trabajadores indefinidos de la empresa usuaria. Exige información previa de los riesgos específicos del puesto, formación a cargo de la empresa usuaria, revisiones médicas especiales y veta la contratación de ETTs para puestos de riesgo extremo (radiaciones, cancerígenos de alta toxicidad o inmersiones).",
    "queRegula": [
      "Principio de igualdad de trato y protección en SST entre trabajadores temporales y fijos (Arts. 1 y 2).",
      "Información previa de riesgos específicos y competencias exigidas antes de incorporarse al puesto (Art. 3).",
      "Formación suficiente y adecuada en prevención proporcionada por la empresa usuaria (Art. 4).",
      "Prohibición legal de contratar trabajadores de ETT para actividades de especial peligrosidad reglada (Art. 5).",
      "Responsabilidad directa de la empresa usuaria en las condiciones de seguridad durante la misión (Art. 8)."
    ],
    "sanciones": [
      "Discriminar a trabajadores temporales o de ETT en la entrega de EPIs o formación preventiva: Infracción GRAVE.",
      "Contratar personal de ETT para realizar actividades de especial riesgo prohibidas por el RD 216/1999: Infracción MUY GRAVE.",
      "Accidente grave de un trabajador de ETT por falta de medidas en la empresa usuaria: Sanción principal a la usuaria y subsidiaria a la ETT."
    ],
    "comoLoUso": "PROTOCOLO PARA CONTRATACIÓN DE PERSONAL VÍA ETT:\n1. INFORMACIÓN PREVIA: Remitir por escrito a la ETT el documento con los riesgos del puesto, los EPIs requeridos y las aptitudes psicofísicas necesarias antes de que envíen al candidato.\n2. ACOGIDA Y FORMACIÓN IN SITU: El primer día de trabajo, impartir la inducción de seguridad, entregar los EPIs certificados y verificar que firmen el registro de recepción.\n3. CONTROL DE PUESTOS PROHIBIDOS: Verificar que ningún trabajador de ETT sea asignado a tareas con cancerígenos Categoría 1A o inmersiones subacuáticas prohibidas por ley."
  },
  "lisos-rdl-5-2000": {
    "titulo": "LISOS (RDL 5/2000) - Infracciones y Sanciones en el Orden Social",
    "tipo": "ley",
    "resumenLargo": "El Real Decreto Legislativo 5/2000 (LISOS) es el código penal-administrativo del mundo del trabajo en España. Tipifica con total precisión las conductas empresariales que constituyen infracciones en materia de prevención de riesgos laborales (Capítulo II, Sección 2ª, Arts. 11 a 13) y fija la tabla de multas económicas en sus grados mínimo, medio y máximo (Art. 40). Regula los criterios legales de agravación (reincidencia, daños causados, volumen de negocio, desobediencia de advertencias previas) y la responsabilidad solidaria de empresas principales y contratas (Art. 42).",
    "queRegula": [
      "Infracciones leves en prevención de riesgos laborales: descuidos formales, falta de limpieza no peligrosa (Art. 11).",
      "Infracciones graves: no evaluar riesgos, no dar formación, no hacer reconocimientos, no tener recurso preventivo (Art. 12).",
      "Infracciones muy graves: no paralizar ante riesgo inminente, desproteger caídas de altura o confinados, exponer a embarazadas (Art. 13).",
      "Criterios de graduación: negligencia, reiteración, beneficios obtenidos, tamaño de la empresa y gravedad del daño (Art. 39).",
      "Escala oficial de multas: Leves (45 a 2.450 €), Graves (2.451 a 49.180 €) y Muy Graves (49.181 a 983.736 €) (Art. 40).",
      "Responsabilidad solidaria entre empresas principales, contratistas y subcontratistas en centros concurrentes (Art. 42)."
    ],
    "sanciones": [
      "Infracciones leves: de 45 a 2.450 euros.",
      "Infracciones graves: de 2.451 a 49.180 euros.",
      "Infracciones muy graves: de 49.181 a 983.736 euros.",
      "Sanciones accesorias: suspensión de actividades, cierre del centro de trabajo o inhabilitación para contratar con el sector público."
    ],
    "comoLoUso": "ARGUMENTACIÓN ECONÓMICA DE LA PREVENCIÓN CON LA LISOS:\n1. CONVENCER A LA DIRECCIÓN: Cuando un gerente o jefe de compras rechace comprar arneses, instalar barandillas o reparar un camión alegando que 'es muy caro', mostrarle el Artículo 12 y 13 de la LISOS. La multa mínima grave es de 2.451 € y una muy grave llega a 983.736 €, enormemente superior a cualquier inversión preventiva.\n2. ACOMPAÑAMIENTO EN INSPECCIONES: Ante un requerimiento de la Inspección de Trabajo, subsanar de inmediato las deficiencias dentro del plazo otorgado para evitar que el inspector eleve la propuesta a acta de infracción grave."
  },
  "itss-inspeccion-trabajo": {
    "titulo": "Inspección de Trabajo (ITSS) y Paralización de Tareas",
    "tipo": "organismo",
    "resumenLargo": "La Inspección de Trabajo y Seguridad Social (ITSS) es el cuerpo de funcionarios con rango de agentes de la autoridad encargado de velar por el cumplimiento de la legislación laboral y de prevención de riesgos en España (Ley 23/2015). Sus actas de infracción gozan de presunción de certeza legal. Los inspectores tienen plenas facultades para entrar a cualquier centro a cualquier hora sin aviso previo, interrogar a trabajadores a solas, tomar fotos, muestras y requerir documentación. El Art. 44 de la Ley 31/1995 los faculta para paralizar de forma inmediata y fulminante cualquier trabajo ante riesgo grave e inminente, con mantenimiento íntegro de los salarios de los operarios.",
    "queRegula": [
      "Carácter de agentes de la autoridad pública y presunción legal de certeza de las actas de infracción (Arts. 1 y 13 Ley 23/2015).",
      "Facultades de libre acceso a cualquier hora sin preaviso, interrogatorio a solas y toma de muestras y fotos (Art. 18 Ley 23/2015).",
      "Medidas inspectoras: advertencia, requerimiento formal con plazo, acta de infracción y propuesta de Recargo de Prestaciones (Art. 21 Ley 23/2015).",
      "Paralización inmediata y precinto de tareas por riesgo grave e inminente con cobro íntegro de salarios (Art. 44 Ley 31/1995).",
      "Propuesta de recargo del 30% al 50% de las prestaciones económicas de la Seguridad Social por falta de medidas preventivas."
    ],
    "sanciones": [
      "Obstrucción a la labor inspectora (negar la entrada, no facilitar documentación o no comparecer ante la ITSS): Infracción MUY GRAVE (multas de 7.501 € a 225.018 €).",
      "Vulneración de una orden formal de paralización dictada por el Inspector de Trabajo: Delito de desobediencia grave a la autoridad con apertura de diligencias penales."
    ],
    "comoLoUso": "PROTOCOLO ANTE UNA VISITA DE LA INSPECCIÓN DE TRABAJO:\n1. RECEPCIÓN Y ATENCIÓN INMEDIATA: Recibir al inspector con la máxima educación y colaborar sin retrasos. Facilitarle el acceso inmediato al centro de trabajo y avisar al Técnico de Prevención y al Delegado de Prevención.\n2. CARPETA DOCUMENTAL OBLIGATORIA: Tener siempre lista y actualizada la carpeta del Art. 23 de la LPRL: Plan de Prevención, Evaluación de Riesgos y Planificación, registros de formación de los operarios, justificantes de entrega de EPIs, último informe de auditoría o concierto del SPA y registro de accidentes.\n3. GESTIÓN DEL REQUERIMIENTO: Si el inspector formula un requerimiento por escrito con plazo de 15 o 30 días, cumplir escrupulosamente las medidas y enviar el informe de subsanación antes de la fecha límite."
  },
  "ipe-1-fol": {
    "titulo": "Módulo IPE I (Antiguo FOL) - RD 659/2023 de FP",
    "tipo": "modulo-fp",
    "resumenLargo": "El módulo troncal y transversal de Itinerario Personal para la Empleabilidad I (antigua Formación y Orientación Laboral - FOL), regulado por el RD 659/2023 de Formación Profesional, capacita en legislación laboral individual y colectiva, tipos de contratos vigentes tras la Reforma Laboral, estructura de nóminas, cotizaciones sociales, tipos de despido e indemnizaciones, representación sindical y prevención básica de riesgos laborales. Su superación acredita oficialmente el certificado y cualificación de Nivel Básico en Prevención de Riesgos Laborales (50 horas) según el RD 39/1997.",
    "queRegula": [
      "Ordenación curricular y competencias profesionales del módulo troncal IPE I (Arts. 94 y 95 RD 659/2023).",
      "Resultados de aprendizaje en prevención de riesgos laborales: condiciones laborales, técnicas preventivas y conducta PAS en emergencias.",
      "Acreditación oficial directa del certificado de Nivel Básico de PRL (50 horas) según el RD 39/1997.",
      "Derecho laboral: contratos indefinidos, fijos-discontinuos, temporales por circunstancias de la producción y contratos de formación.",
      "Liquidación de la nómina: devengos (salario base + pluses), cotizaciones a la Seguridad Social (contingencias comunes, paro, FP, MEI) y retenciones de IRPF.",
      "Indemnizaciones por despido: despido objetivo (20 días/año, máx. 12 meses), improcedente (33 días/año, máx. 24 meses) y disciplinario procedente (0 días)."
    ],
    "sanciones": [
      "Incumplimiento de las condiciones salariales o descansos fijados por ley y convenio colectivo: Infracciones graves tipificadas en la LISOS.",
      "Vulneración de las normas sobre contratación laboral: Sanciones administrativas por contratación fraudulenta."
    ],
    "comoLoUso": "APLICACIÓN DEL MÓDULO IPE I EN TU TRAYECTORIA PROFESIONAL:\n1. HOMOLOGACIÓN OFICIAL: Es la materia central que convalida los conocimientos sobre el marco normativo del trabajo en España para el ejercicio como Técnico Superior.\n2. CERTIFICACIÓN DE 50 HORAS: Acredita tu capacitación oficial de Nivel Básico de PRL para poder ser nombrado formalmente como Recurso Preventivo.\n3. CONTROL DE TUS DERECHOS SALARIALES: Saber leer tu nómina para verificar que la empresa liquida adecuadamente tus pluses de peligrosidad, toxicidad y turnicidad del convenio de saneamiento."
  },
  "ipe-2-eie": {
    "titulo": "Módulo IPE II (Antiguo EIE) - RD 659/2023 de FP",
    "tipo": "modulo-fp",
    "resumenLargo": "El módulo de Itinerario Personal para la Empleabilidad II (antigua Empresa e Iniciativa Emprendedora - EIE) enseña el autoempleo, la iniciativa emprendedora, la viabilidad económica y la gestión de empresas en España. Analiza las formas jurídicas (Autónomo individual, Sociedad Limitada S.L. desde 1 euro, Cooperativa), los trámites censales ante la Agencia Tributaria (Hacienda Modelos 036/037, IVA 303, IRPF 130/111, Sociedades 200), la cotización en el RETA de la Seguridad Social y los trámites de apertura de centros de trabajo y organización de la PRL para microempresas.",
    "queRegula": [
      "Currículo oficial del módulo transversal IPE II en Formación Profesional (Art. 96 RD 659/2023).",
      "Formas jurídicas mercantiles en España: Autónomo individual (responsabilidad ilimitada), Sociedad Limitada S.L. (responsabilidad limitada) y Cooperativas.",
      "Calendario fiscal obligatorio: alta en IAE con Modelo 036/037, IVA trimestral Modelo 303, pago fraccionado IRPF Modelo 130 y retenciones Modelo 111.",
      "Régimen Especial de Trabajadores Autónomos (RETA) con cotización en función de los rendimientos netos reales.",
      "Trámite administrativo de Comunicación de Apertura del centro de trabajo a la Dirección General de Trabajo autonómica en el plazo de 30 días.",
      "Organización y asunción de la prevención en micropymes según el Art. 11 del RD 39/1997."
    ],
    "sanciones": [
      "Operar o abrir un centro de trabajo sin presentar la Comunicación de Apertura a la Autoridad Laboral: Infracción GRAVE LISOS (multa mínima de 2.451 €).",
      "No presentar las declaraciones trimestrales tributarias (Modelos 303, 130, 111) en plazo ante Hacienda: Recargos y sanciones tributarias de la AEAT."
    ],
    "comoLoUso": "APLICACIÓN PRÁCTICA DE IPE II PARA EJERCER DE FORMA INDEPENDIENTE:\n1. ALTA DE AUTÓNOMO TÉCNICO: Si vas a trabajar como perito judicial de prevención o asesor técnico de saneamiento, darte de alta censal en Hacienda con el Modelo 036 (epígrafe técnico de prevención) y tramitar el alta en el RETA de la Seguridad Social.\n2. FACTURACIÓN LEGAL: Emitir facturas oficiales incluyendo el 21% de IVA y deduciendo la retención reglamentaria del IRPF (15% general, o 7% para nuevos autónomos durante los tres primeros años).\n3. CONSULTORÍA DE PREVENCIÓN: Asesorar a pequeñas empresas para elegir adecuadamente entre la asunción personal de la prevención por el empresario (<10 trabajadores) o el concierto con un SPA acreditado."
  },
  "ley-17-2011": {
    "titulo": "Ley 17/2011 de Seguridad Alimentaria y Nutrición",
    "tipo": "ley",
    "resumenLargo": "La Ley 17/2011 regula las bases de la seguridad alimentaria en España conforme al Reglamento (CE) 178/2002 de la Unión Europea. Establece la responsabilidad de los operadores económicos en todas las fases de la producción, transformación y distribución de alimentos. Para técnicos de prevención y salud laboral en comedores colectivos, plantas de procesado, cocinas industriales e industria cárnica, articula la implantación de los Planes Generales de Higiene (PGH), el Sistema de Análisis de Peligros y Puntos de Control Crítico (APPCC), la trazabilidad hacia adelante y hacia atrás, la gestión de alérgenos y la coordinación con la Agencia Española de Seguridad Alimentaria y Nutrición (AESAN) y la Red SCIRI.",
    "queRegula": [
      "Responsabilidad jurídica primaria del operador económico alimentario en la inocuidad de alimentos y piensos (Art. 5).",
      "Obligación legal de implantar sistemas de autocontrol basados en los principios del APPCC / HACCP en todos los centros de elaboración y restauración colectiva.",
      "Prerrequisitos o Planes Generales de Higiene (PGH): Plan de Control del Agua Potable, Plan de Limpieza y Desinfección (L+D), Plan de Control de Plagas (DDD), Plan de Mantenimiento de Instalaciones y Equipos, Plan de Control de Temperaturas de la Cadena de Frío, Plan de Control de Proveedores y Plan de Formación de Manipuladores.",
      "Trazabilidad documental lote a lote: registro de materias primas entrantes, procesos intermedios y productos expedidos a clientes (Art. 6).",
      "Red de Alerta y Cooperación SCIRI (Sistema Coordinado de Intercambio Rápido de Información) y retirada cautelar urgente de lotes inseguros.",
      "Información obligatoria sobre sustancias alérgenas que causan intolerancias conforme al Reglamento (UE) 1169/2011.",
      "Coordinación de medidas preventivas para el personal manipulador de alimentos que compagina riesgos de PRL (cortes, quemaduras, humedad, frío) con riesgos de contaminación cruzada."
    ],
    "sanciones": [
      "Infracciones Leves de la Ley 17/2011: Multas de hasta 5.000 euros (ej. irregularidades formales en registros de control sin riesgo para la salud).",
      "Infracciones Graves de la Ley 17/2011: Multas de 5.001 a 20.000 euros (ej. deficiencias en el plan APPCC, falta de trazabilidad, superación de temperaturas de conservación, presencia de plagas en zonas de procesado).",
      "Infracciones Muy Graves de la Ley 17/2011: Multas de 20.001 a 600.000 euros y posible clausura temporal o definitiva del establecimiento (ej. comercialización de alimentos con riesgo grave para la salud pública, incumplimiento reiterado de órdenes de retirada de producto)."
    ],
    "comoLoUso": "APLICACIÓN PRÁCTICA DEL TÉCNICO EN SEGURIDAD ALIMENTARIA Y PRL:\n1. AUDITORÍA DE PRERREQUISITOS PGH: Revisar periódicamente los 7 planes de higiene del centro de trabajo (comedor de empresa o nave alimentaria). Verificar los registros diarios de cloro libre residual en agua potable y de temperaturas de cámaras (-18 °C en congelación, ≤ 4 °C en refrigeración).\n2. VERIFICACIÓN DEL SISTEMA APPCC: Comprobar que los Puntos de Control Crítico (PCC) disponen de límites críticos claros, métodos de vigilancia continuos y acciones correctoras predefinidas si se pierde el control.\n3. PROTOCOLOS DE LIMPIEZA Y DESINFECCIÓN (L+D): Coordinar con PRL el uso seguro de biocidas, desengrasantes y detergentes clorados por los operarios (fichas de datos de seguridad, guantes de nitrilo específicos y protección ocular según RD 374/2001 y RD 773/1997).\n4. TOMA DE MUESTRAS SUPERFICIALES: Realizar hisopados de superficies de trabajo, cuchillos y cintas para análisis microbiológico (Listeria monocytogenes, Salmonella, enterobacterias) para validar la eficacia de la limpieza."
  },
  "ley-34-2007": {
    "titulo": "Ley 34/2007 de Calidad del Aire y Protección de la Atmósfera",
    "tipo": "ley",
    "resumenLargo": "La Ley 34/2007 establece el régimen jurídico básico para prevenir, vigilar y reducir la contaminación atmosférica originada por instalaciones industriales y actividades antropogénicas. Para el técnico que gestiona saneamiento, depuración de aguas residuales (EDAR), plantas de tratamiento de residuos, calderas industriales e instalaciones con emisiones canalizadas o difusas, define el catálogo de actividades potencialmente contaminadoras de la atmósfera (CAPCA), los valores límite de emisión (VLE), la obligación de control por Organismos de Control Autorizados (OCA) y la minimización de olores, gases tóxicos (H₂S, NH₃, COVs) y partículas.",
    "queRegula": [
      "Catálogo de Actividades Potencialmente Contaminadoras de la Atmósfera (CAPCA) dividido en Grupos A, B y C según su potencial contaminante (RD 100/2011).",
      "Autorización o notificación ambiental previa ante la Dirección General de Calidad Ambiental de la Comunidad Autónoma para operar focos emisores clasificados.",
      "Valores Límite de Emisión (VLE) para contaminantes prioritarios: óxidos de nitrógeno (NOx), dióxido de azufre (SO₂), partículas (PM10/PM2.5), compuestos orgánicos volátiles (COV) y gases olorosos (H₂S, mercaptanos).",
      "Requisitos de diseño y acondicionamiento de chimeneas y conductos de evacuación (plataformas seguras de muestreo según norma UNE-EN 15259 con barandillas y accesos seguros de PRL).",
      "Régimen de mediciones reglamentarias periódicas realizadas por Entidades de Control Ambiental (OCA / ECA acreditadas por ENAC).",
      "Libro de Registro de Emisiones a la Atmósfera oficial, foliado y custodiado en planta con todas las analíticas e incidencias de funcionamiento.",
      "Obligación de implementar Mejores Técnicas Disponibles (MTD / BREF) para reducción de emisiones difusas, desodorización de EDAR (filtros de carbón activo, biofiltros, torres de lavado químico)."
    ],
    "sanciones": [
      "Infracciones Leves de la Ley 34/2007: Multas de hasta 20.000 euros (ej. retraso en la realización de controles periódicos o incorrecciones en el libro de registro).",
      "Infracciones Graves de la Ley 34/2007: Multas de 20.001 a 200.000 euros (ej. superación de los Valores Límite de Emisión autorizados, funcionamiento sin autorización ambiental del foco, no acondicionamiento seguro de tomas de muestra).",
      "Infracciones Muy Graves de la Ley 34/2007: Multas de 200.001 a 2.000.000 de euros, clausura temporal o definitiva de las instalaciones y retirada de autorizaciones ambientales (ej. emisiones clandestinas que generen grave riesgo para la salud colectiva o el medio ambiente)."
    ],
    "comoLoUso": "APLICACIÓN PRÁCTICA DEL TÉCNICO EN CALIDAD DEL AIRE Y SANEAMIENTO:\n1. IDENTIFICACIÓN Y CATALOGACIÓN DE FOCOS: Determinar el código CAPCA de cada foco emisor de la planta (antorchas de biogás en EDAR, calderas de vapor, grupos electrógenos diésel de emergencia, biofiltros de desodorización).\n2. GESTIÓN DE INSPECCIONES OCA: Coordinar con la Entidad de Control Ambiental las campañas reglamentarias de muestreo en chimenea (cada 3 años para grupo B, cada 5 años para grupo C). Asegurar que la plataforma de muestreo cumpla la UNE-EN 15259 y el RD 486/1997 / RD 1215/1997 en materia de seguridad anticaídas.\n3. CONTROL DE DESODORIZACIÓN EN SANEAMIENTO: Monitorizar la pérdida de carga y la concentración de H₂S a la entrada y salida de las torres de lavado de gases y lechos de carbón activo. Planificar el cambio de material absorbente antes de su saturación para evitar superaciones de emisión y quejas vecinales.\n4. MANTENIMIENTO DEL LIBRO DE REGISTRO: Registrar documentalmente todas las horas de funcionamiento de los focos, consumos de combustible, calibraciones de sondas y resultados analíticos oficiales para exhibir ante los inspectores de Medio Ambiente y de Trabajo."
  }
};

if (typeof window !== "undefined") {
  window.CONTENIDO_DETALLADO = CONTENIDO_DETALLADO;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONTENIDO_DETALLADO;
}

