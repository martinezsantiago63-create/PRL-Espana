const CONTENIDO_SANEAMIENTO = {
  "guia-saneamiento-industrial": {
    titulo: "Guía de Saneamiento Industrial - INSST",
    tipo: "guia-sectorial",
    resumenLargo: "Guía práctica del INSST específica para el sector de saneamiento industrial. Cubre los riesgos, procedimientos y buenas prácticas para trabajos de limpieza, desinfección, desratización, mantenimiento de instalaciones y gestión de residuos en el ámbito industrial.",
    riesgosPrincipales: [
      {
        riesgo: "Espacios confinados",
        descripcion: "Pozos de visita, tanques, depósitos, tuberías grandes, cámaras de bomba",
        norma: "RD 604/2006",
        gravedad: "CRÍTICO - Muerte por asfixia o intoxicación",
        prevencion: ["Permiso de trabajo obligatorio", "Medición atmosférica antes de entrar", "Ventilación forzada", "EPIs completos", "Vigilancia externa", "Equipo de rescate"]
      },
      {
        riesgo: "Agentes químicos",
        descripcion: "Cloro, soda cáustica, ácidos, detergentes industriales, productos de limpieza",
        norma: "RD 374/2001",
        gravedad: "ALTA - Quemaduras, intoxicación, daño respiratorio",
        prevencion: ["HDS actualizadas para cada producto", "EPIs específicos por químico", "Ventilación en zona de uso", "Formación en manipulación", "Lavado de manos obligatorio"]
      },
      {
        riesgo: "Agentes biológicos",
        descripcion: "Bacterias, virus, hongos, parásitos en aguas residuales, residuos, desratización",
        norma: "RD 664/1997",
        gravedad: "ALTA - Enfermedades infecciosas",
        prevencion: ["Vacunación si disponible", "EPIs completos (guantes, mascarilla, traje)", "Higiene estricta", "Protocolo de descontaminación", "Vigilancia de la salud"]
      },
      {
        riesgo: "Atmósferas explosivas",
        descripcion: "Metano (CH₄), sulfuro de hidrógeno (H₂S) en pozos y tanques",
        norma: "RD 216/2004",
        gravedad: "CRÍTICO - Explosión",
        prevencion: ["Clasificación ATEX", "Gasómetro antes de entrar", "Equipos Ex certificados", "Ventilación antes y durante", "Plan de emergencia"]
      },
      {
        riesgo: "Ruido",
        descripcion: "Bombas, compresores, herramientas neumáticas, maquinaria de planta",
        norma: "RD 1299/2006",
        gravedad: "MEDIA - Daño auditivo permanente",
        prevencion: ["Medición con sonómetro", "Protectores auditivos", "Silenciadores", "Rotación de personal"]
      },
      {
        riesgo: "Caídas",
        descripcion: "Trabajos en altura, acceso a pozos, escaleras industriales",
        norma: "RD 1215/1997, Ley 31/1995",
        gravedad: "ALTA - Lesiones graves o muerte",
        prevencion: ["Arneses con línea de vida", "Barandillas en plataformas", "Escaleras con pasamanos", "Formación en trabajos en altura"]
      }
    ],
    episEspecificos: [
      { tarea: "Limpieza de pozos", epis: ["Casco con barbilla", "Guantes químicos nitrilo", "Mascarilla semifacial con filtro químico", "Calzado de seguridad impermeable", "Arnés con línea de vida", "Chaleco de alta visibilidad"] },
      { tarea: "Desratización", epis: ["Traje de coverall", "Guantes de nitrilo doble", "Mascarilla con filtro Partícula+Gás", "Gafas de protección", "Calzado de seguridad"] },
      { tarea: "Limpieza de tanques", epis: ["Traje químico tipo 4", "Mascarilla con filtros químicos", "Guantes químicos laminados", "Calzado de seguridad", "Arnés con línea de vida", "Radio de comunicación"] },
      { tarea: "Inspección de tuberías", epis: ["Casco", "Guantes de protección mecánica", "Mascarilla polvo", "Calzado de seguridad", "Chaleco reflectante", "Linterna ATEX si hay riesgo de gas"] },
      { tarea: "Mantenimiento de plantas", epis: ["Casco", "Protección auditiva", "Guantes según tarea", "Calzado de seguridad", "Gafas si hay proyecciones", "Mascarilla si hay polvo"] }
    ],
    comoLoUso: `GUÍA PRÁCTICA PARA CADA INTERVENCIÓN:

ANTES DEL TRABAJO:
1. Revisá la orden de trabajo y los riesgos asociados
2. Consultá las HDS de los productos químicos que vas a usar
3. Prepará los EPIs específicos para la tarea
4. Verificá que los equipos estén en buen estado
5. Informá al responsable de turno

DURANTE EL TRABAJO:
1. Seguí el procedimiento paso a paso
2. Usá SIEMPRE los EPIs completos
3. No te desvíes del procedimiento establecido
4. Si ves algo peligroso, PARÁ y reportá
5. Mantené comunicación con el equipo

DESPUÉS DEL TRABAJO:
1. Limpiá y descontaminá los EPIs
2. Guardá los productos correctamente
3. Documentá lo que hiciste
4. Reportá incidencias o situaciones anómalas
5. Lavate las manos ANTES de comer o beber

RECUERDA: En saneamiento, el riesgo biológico es CONSTANTE. Cada pozo, cada tanque, cada tubería puede tener agentes patógenos. Protegerte no es opcional.`,
    usefulLinks: [
      { text: "Guías INSST", url: "https://www.insst.es" }
    ]
  },
  "protocolo-pozo-visita": {
    titulo: "Protocolo: Trabajo en Pozos de Visita de Saneamiento",
    tipo: "procedimiento",
    resumenLargo: "Procedimiento paso a paso para realizar trabajos de inspección, limpieza y mantenimiento en pozos de visita de saneamiento. Este es el trabajo que más vas a hacer como técnico de saneamiento en España. Cada pozo es potencialmente letal si no seguís el protocolo.",
    fases: [
      {
        fase: "1. PLANIFICACIÓN PREVIA",
        tiempo: "Antes de salir a obra",
        pasos: [
          "Revisar la orden de trabajo y el tipo de intervención",
          "Consultar el plano de la red de saneamiento (posición del pozo)",
          "Verificar que se dispone de todos los medios necesarios",
          "Comunicar al responsable de turno las actividades a realizar",
          "Revisar el estado de los EPIs y equipos de medición"
        ],
        documentacion: ["Orden de trabajo", "Plano de la red", "Ficha de riesgos del pozo (si existe)"]
      },
      {
        fase: "2. LLEGADA AL PUNTO DE TRABAJO",
        tiempo: "15-30 minutos",
        pasos: [
          "Señalizar la zona de trabajo (conos, cinta, triángulos)",
          "Verificar que no hay personas ajenas en la zona",
          "Colocar el vehículo en posición segura (no bloquear paso)",
          "Preparar el material de trabajo en zona segura",
          "Verificar la meteorología (¿llueve? ¿hace mucho calor? ¿viento?)"
        ],
        documentacion: ["Registro de llegada"]
      },
      {
        fase: "3. EVALUACIÓN ATMOSFÉRICA",
        tiempo: "5-10 minutos",
        pasos: [
          "Abrir la tapa del pozo con herramienta adecuada (NUNCA con manos)",
          "Esperar 5 minutos para que se estabilice la atmósfera",
          "Medir con gasómetro calibrado en este orden:",
          "  a) Oxígeno (O₂): debe estar entre 19,5% y 23,5%",
          "  b) Sulfuro de hidrógeno (H₂S): debe ser < 10 ppm",
          "  c) Metano (CH₄): debe ser < 1% (LIE = 5%)",
          "  d) Monóxido de carbono (CO): debe ser < 25 ppm",
          "Registrar las mediciones en el permiso de trabajo",
          "Si alguna medición NO es correcta → VENTILAR y volver a medir"
        ],
        documentacion: ["Permiso de trabajo con mediciones", "Registro de gasómetro"]
      },
      {
        fase: "4. VENTILACIÓN",
        tiempo: "10-30 minutos (según resultados)",
        pasos: [
          "Si las mediciones no son correctas, instalar extractor ATEX",
          "Posicionar el extractor para extraer aire viciado del fondo",
          "Ventilación mínima: 10-15 minutos antes de entrar",
          "Mantener ventilación durante TODO el trabajo",
          "Volver a medir después de la ventilación",
          "Si las mediciones siguen mal → NO ENTRAR, llamar al responsable"
        ],
        documentacion: ["Registro de ventilación"]
      },
      {
        fase: "5. EPIs Y EQUIPOS",
        tiempo: "5-10 minutos",
        pasos: [
          "Ponerse los EPIs completos: casco, guantes, mascarilla, calzado, arnés",
          "Conectar línea de vida a punto de anclaje seguro fuera del pozo",
          "Verificar que la persona de vigilancia está posicionada",
          "Probar radio de comunicación",
          "Tener listo el equipo de rescate (tripode + arnés + polea)"
        ],
        documentacion: ["Control de EPIs"]
      },
      {
        fase: "6. ENTRADA Y TRABAJO",
        tiempo: "Variable según intervención",
        pasos: [
          "Entrar POR LA ESCALERINA (nunca saltar)",
          "Mantener comunicación constante con la persona externa",
          "Trabajar de abajo hacia arriba si es limpieza",
          "NUNCA tapar la boca del pozo desde dentro",
          "Si te sentís mareado → SALIR INMEDIATAMENTE",
          "Tiempo máximo de permanencia: 20-30 minutos seguidos",
          "Hacer descansos de 5-10 minutos cada 20 minutos"
        ],
        documentacion: ["Registro de permanencia"]
      },
      {
        fase: "7. SALIDA Y CIERRE",
        tiempo: "5-10 minutos",
        pasos: [
          "Sacar el material de trabajo del pozo",
          "Limpiar la zona de trabajo",
          "Cerrar la tapa del pozo correctamente",
          "Retirar la señalización",
          "Descontaminar los EPIs sucios",
          "Guardar todo en el vehículo"
        ],
        documentacion: ["Registro de finalización"]
      },
      {
        fase: "8. DOCUMENTACIÓN FINAL",
        tiempo: "10-15 minutos",
        pasos: [
          "Completar el parte de trabajo con: tipo de intervención, observaciones, mediciones",
          "Fotografiar el estado del pozo (antes y después)",
          "Reportar incidencias si las hubo",
          "Entregar documentación al responsable de servicio"
        ],
        documentacion: ["Parte de trabajo", "Fotos", "Registro de mediciones"]
      }
    ],
    emergencias: [
      {
        situacion: "Trabajador inconsciente dentro del pozo",
        actuacion: [
          "NO ENTRAR a rescatarlo (puedes morir igual)",
          "Llamar al 112 inmediatamente",
          "Activar el equipo de rescate externo",
          "Si tenés tripode, intentar subirlo con la polea",
          "Mantener ventilación máxima",
          "No retirar la tapa completamente (evitar que entren más gases)"
        ]
      },
      {
        situacion: "Gases tóxicos detectados después de entrar",
        actuacion: [
          "SALIR INMEDIATAMENTE por la escalerina",
          "Llamar a la persona externa para que te ayude",
          "Alejarse de la boca del pozo",
          "Si tenés síntomas (mareo, náusea): sentarse, respirar aire fresco",
          "Si no mejorás: llamar al 112"
        ]
      },
      {
        situacion: "Caída de persona al pozo",
        actuacion: [
          "Llamar al 112 inmediatamente",
          "No meterse en el pozo",
          "Si la persona responde, pedirle que se mueva",
          "Activar equipo de rescate si está disponible",
          "Mantener la calma y guiar a la víctima verbalmente"
        ]
      }
    ],
    comoLoUso: `RESUMEN RÁPIDO - SIEMPRE SEGUÍ ESTE ORDEN:

1. PERMISO → Sin permiso no entrás
2. MEDICIÓN → Gasómetro, 5 min de espera, medir O₂/H₂S/CH₄/CO
3. VENTILACIÓN → Si no está bien, ventilás
4. EPIs → Casco, guantes, mascarilla, arnés, línea de vida
5. VIGILANCIA → Persona afuera con radio y equipo de rescate
6. ENTRADA → Por escalerina, comunicación constante
7. TRABAJO → Tiempo limitado, descansos cada 20 min
8. SALIDA → Limpiar, cerrar, documentar

NUNCA:
- Entrar sin medir
- Entrar sin ventilación
- Entrar solo
- Entrar sin EPIs
- Quitar la tapa sin señalizar
- Ignorar los síntomas de mareo`,
    usefulLinks: [
      { text: "Guía INSST - Espacios Confinados", url: "https://www.insst.es" }
    ]
  },
  "protocolo-desratizacion": {
    titulo: "Protocolo: Desratización y Control de Plagas",
    tipo: "procedimiento",
    resumenLargo: "Procedimiento seguro para trabajos de desratización (control de roedores) y control de plagas en instalaciones industriales. En saneamiento, la desratización es una actividad COMÚN pero de ALTO RIESGO por la combinación de químicos y agentes biológicos.",
    fases: [
      {
        fase: "1. IDENTIFICACIÓN DE LA PLAGA",
        pasos: [
          "Inspeccionar la zona para identificar el tipo de plaga",
          "Roedores: ratas de alcantarilla (Rattus norvegicus) o ratones",
          "Insectos: cucarachas, moscas, mosquitos, escarabajos",
          "Determinar nivel de infestación (bajo, medio, alto)",
          "Marcar los puntos de cebado (estaciones de cebo)",
          "Fotografiar evidencias"
        ],
        documentacion: ["Informe de inspección", "Mapa de estaciones de cebo"]
      },
      {
        fase: "2. PLANIFICACIÓN DEL TRATAMIENTO",
        pasos: [
          "Seleccionar biocida autorizado por el Ministerio de Sanidad",
          "Verificar que el biocida es apto para el entorno (alimentario, industrial)",
          "Calcular dosis y puntos de aplicación",
          "Notificar a la empresa del tratamiento (si es externa)",
          "Informar a los trabajadores del área tratada",
          "Preparar EPIs y equipo de aplicación"
        ],
        documentacion: ["Plan de tratamiento", "Ficha técnica del biocida", "Notificación a trabajadores"]
      },
      {
        fase: "3. APLICACIÓN DEL TRATAMIENTO",
        pasos: [
          "Ponerse EPIs completos: traje, guantes, mascarilla, gafas",
          "Señalizar el área tratada con cartel visible",
          "Aplicar el biocida según ficha técnica (nunca exceder dosis)",
          "Colocar cebos en estaciones protegidas (inaccesibles a personas y animales)",
          "Registrar: fecha, hora, producto, dosis, puntos, responsable",
          "Cerrar el área tratada durante el tiempo de exposición"
        ],
        documentacion: ["Hoja de tratamiento", "Registro de aplicación"]
      },
      {
        fase: "4. VIGILANCIA POSTERIOR",
        pasos: [
          "Revisar estaciones de cebo cada 7-15 días",
          "Registrar mortalidad de plagas",
          "Reponer cebos consumidos",
          "Evaluar eficacia del tratamiento",
          "Ajustar plan si la infestación no disminuye",
          "Documentar cada visita de revisión"
        ],
        documentacion: ["Registro de vigilancia", "Informe de seguimiento"]
      },
      {
        fase: "5. CIERRE Y DOCUMENTACIÓN",
        pasos: [
          "Retirar cebos no consumidos (si el tratamiento terminó)",
          "Limpiar y desinfectar estaciones de cebo",
          "Cerrar y sellar estaciones vacías",
          "Informe final al cliente",
          "Archivo documental: fichas de biocidas, registros, informes"
        ],
        documentacion: ["Informe final", "Archivo documental mínimo 3 años"]
      }
    ],
    biocidasComunes: [
      { producto: "Brodifacoum", tipo: "Anticoagulante", uso: "Roedores", toxicidad: "ALTA - peligro para humanos y animales", EPI: "Guantes, mascarilla, gafas" },
      { producto: "Bromadiolona", tipo: "Anticoagulante", uso: "Roedores", toxicidad: "ALTA", EPI: "Guantes, mascarilla, gafas" },
      { producto: "Deltametrina", tipo: "Piretroide", uso: "Insectos", toxicidad: "MEDIA", EPI: "Mascarilla, guantes" },
      { producto: "Fipronil", tipo: "Fenilpirazol", uso: "Cucarachas, termitas", toxicidad: "MEDIA-ALTA", EPI: "Guantes, mascarilla" },
      { producto: "Permetrina", tipo: "Piretroide", uso: "Insectos", toxicidad: "BAJA-MEDIA", EPI: "Guantes, mascarilla básica" }
    ],
    comoLoUso: `EJEMPLO PRÁCTICO: Te contratan para desratizar una planta de tratamiento de aguas residuales en Barcelona.

1. INSPECCIÓN INICIAL:
   - Recorrés toda la planta buscando evidencias: heces, marcas de roedores, nidos
   - Encontrás actividad fuerte en: zona de bombas, almacén de químicos, comedor
   - Marcaste 15 puntos de cebado

2. PLAN DE TRATAMIENTO:
   - Producto: Brodifacoum 0,005% en pasta (apto para zonas húmedas)
   - Estaciones: 15 estaciones de cebo sellado (inaccesibles a niños y animales)
   - Frecuencia: revisión cada 7 días durante 4 semanas
   - Notificación: informar a todos los trabajadores

3. APLICACIÓN (día 1):
   - EPIs: traje, guantes nitrilo, mascarilla FFP2, gafas
   - Colocás cebos en las 15 estaciones
   - Sellás cada estación con candado
   - Señalizás con cartel: "Zona tratada - No tocar los cebos"
   - Registrás todo en la hoja de tratamiento

4. VIGILANCIA (semanas 1-4):
   - Semana 1: 12 cebos consumidos (80%) → buena actividad
   - Semana 2: 8 cebos consumidos (53%) → mortalidad efectiva
   - Semana 3: 3 cebos consumidos (20%) → infestación bajando
   - Semana 4: 0 cebos consumidos → tratamiento exitoso

5. INFORME FINAL:
   - 4 semanas, 15 estaciones, 23 cebos consumidos en total
   - Mortalidad estimada: 80-100 roedores eliminados
   - Recomendación: mantener 2 estaciones permanentes como vigilancia

SEGURIDAD: El Brodifacoum es MUY tóxico. Si un trabajador toca un cebo sin guantes, puede absorberlo por la piel. Si un niño o animal come el cebo, puede morir. Por eso las estaciones DEBEN ser inaccesibles.`,
    usefulLinks: [
      { text: "RD 830/2010 - Registro de biocidas", url: "https://www.boe.es" },
      { text: "Guía INSST - Agentes biológicos", url: "https://www.insst.es" }
    ]
  },
  "protocolo-limpieza-tanques": {
    titulo: "Protocolo: Limpieza y Mantenimiento de Tanques",
    tipo: "procedimiento",
    resumenLargo: "Procedimiento completo para entrar y trabajar dentro de tanques de agua, residuos, lodos o productos químicos. Este es uno de los trabajos MÁS PELIGROSOS del saneamiento. Cada año mueren trabajadores en España por entrar a tanques sin protocolo.",
    fases: [
      {
        fase: "1. EVALUACIÓN PREVIA DEL TANQUE",
        pasos: [
          "Identificar el tipo de tanque: agua limpia, aguas residuales, lodos, químicos",
          "Consultar el historial del tanque: ¿qué contenía? ¿cuándo se vació?",
          "Verificar que está completamente vacío y drenado",
          "Comprobar que no hay residuos visibles en el fondo",
          "Determinar los riesgos específicos (¿químicos? ¿biológicos? ¿confinado?)",
          "Consultar las HDS de los productos que almacenaba"
        ],
        documentacion: ["Ficha del tanque", "HDS de productos", "Evaluación de riesgos específica"]
      },
      {
        fase: "2. PREPARACIÓN DEL ÁREA",
        pasos: [
          "Señalizar la zona alrededor del tanque (mínimo 5 metros)",
          "Retirar personas ajenas al trabajo",
          "Colocar extintor portátil cerca de la entrada (si hay riesgo de incendio)",
          "Preparar equipo de rescate: trípode + arnés + polea + oxígeno de emergencia",
          "Verificar que hay luz suficiente dentro del tanque",
          "Preparar ducha de emergencia si hay químicos"
        ],
        documentacion: ["Permiso de trabajo", "Señalización documentada"]
      },
      {
        fase: "3. DESCONEXIÓN Y BLOQUEO (LOTO)",
        pasos: [
          "Desconectar TODAS las entradas de producto al tanque",
          "Cerrar llaves de paso y bloquear con candado",
          "Poner etiqueta 'NO OPERAR - PERSONA TRABAJANDO DENTRO'",
          "Verificar que no hay posibilidad de llenado accidental",
          "Si el tanque tiene bombas: desconectar y bloquear también",
          "Documentar cada punto de bloqueo"
        ],
        documentacion: ["Registro LOTO con puntos de bloqueo"]
      },
      {
        fase: "4. VENTILACIÓN DEL TANQUE",
        pasos: [
          "Abrir todas las bocas de acceso y ventilación",
          "Instalar extractor ATEX en la parte superior",
          "Ventilación mínima: 2 HORAS antes de entrar",
          "Mantener ventilación durante TODO el trabajo",
          "Medir atmósfera después de la ventilación:",
          "  O₂: 19,5-23,5% | H₂S: < 10 ppm | CH₄: < 1% | CO: < 25 ppm",
          "Si no cumple → seguir ventilando o NO ENTRAR"
        ],
        documentacion: ["Registro de ventilación", "Mediciones atmosféricas"]
      },
      {
        fase: "5. ENTRADA AL TANQUE",
        pasos: [
          "Ponerse EPIs completos: traje químico, mascarilla, guantes, arnés, casco",
          "Conectar línea de vida a punto de anclaje FUERA del tanque",
          "Entrar por la boca de acceso más amplia posible",
          "Bajar por escalerina o grúa de rescate (NUNCA saltar)",
          "Mantener comunicación constante con persona externa",
          "Verificar que la persona externa tiene radio y equipo de rescate"
        ],
        documentacion: ["Control de entrada"]
      },
      {
        fase: "6. TRABAJO DENTRO DEL TANQUE",
        pasos: [
          "Trabajar de abajo hacia arriba (si es limpieza)",
          "Usar herramientas que no generen chispas (si hay riesgo ATEX)",
          "Tiempo máximo dentro: 20 minutos seguidos",
          "Descanso fuera del tanque: mínimo 10 minutos",
          "Si te sentís mareado: SALIR INMEDIATAMENTE",
          "No fumar, no usar fuentes de ignición",
          "Mantener la ventilación encendida"
        ],
        documentacion: ["Registro de permanencia"]
      },
      {
        fase: "7. LIMPIEZA Y DESCONTAMINACIÓN",
        pasos: [
          "Limpiar el tanque con detergente adecuado (no químicos corrosivos)",
          "Enjuagar con agua limpia",
          "Verificar que no quedan residuos",
          "Desinfectar si el tanque es para uso alimentario",
          "Dejar secar antes de volver a usar"
        ],
        documentacion: ["Registro de limpieza"]
      },
      {
        fase: "8. SALIDA Y CIERRE",
        pasos: [
          "Sacar todo el material y herramientas",
          "Retirar el extractor de ventilación",
          "Cerrar las bocas de acceso correctamente",
          "Retirar la señalización",
          "Descontaminar los EPIs sucios",
          "Cerrar el permiso de trabajo"
        ],
        documentacion: ["Permiso de trabajo cerrado", "Informe de trabajo"]
      }
    ],
    emergencias: [
      {
        situacion: "Persona inconsciente dentro del tanque",
        protocolo: [
          "NO ENTRAR a rescatar - PODÉS MORIR IGUAL",
          "Llamar al 112 inmediatamente",
          "Activar el trípode y polea para subir a la persona",
          "Si no hay trípode, usar la línea de vida y polea manual",
          "Mantener ventilación máxima",
          "No cubrir la boca del tanque (puede atrapar gases)"
        ]
      },
      {
        situacion: "Derrame de producto químico dentro del tanque",
        protocolo: [
          "SALIR INMEDIATAMENTE",
          "Cortar la entrada de producto si es posible",
          "Llamar al 112 y al servicio de emergencia química",
          "Identificar el producto para informar a los bomberos",
          "No intentar limpiar el derrame sin equipo adecuado"
        ]
      }
    ],
    comoLoUso: `EJEMPLO PRÁCTICO: Te piden limpiar un tanque de lodos de 10m³ en una planta de aguas residuales.

ANTES (evaluación):
- Tanque: 10m³, acero inoxidable, boca de acceso superior 60cm
- Contenido previo: lodos de depuración (riesgo biológico + químico)
- Tiempo de vaciado: 48 horas antes
- Estado: lodos en el fondo (~10cm de espesor)

PREPARACIÓN (1 hora):
- Señalización de 5m alrededor
- Desconexión y bloqueo de 3 entradas de lodo
- Instalación de extractor ATEX en parte superior
- Trípode de rescate posicionado sobre la boca
- Equipo listo: traje Tyvek, mascarilla FFP3 + filtro químico, guantes nitrilo doble

MEDICIÓN (después de 2 horas de ventilación):
- O₂: 20,8% ✓
- H₂S: 3 ppm ✓ (límite 10 ppm)
- CH₄: 0,2% ✓ (límite 1%)
- CO: 0 ppm ✓

TRABAJO (3 turnos de 20 min):
- Turno 1: Retiro de lodos con pala y cubeta
- Descanso 10 min fuera del tanque
- Turno 2: Limpieza con hidrolavadora a baja presión
- Descanso 10 min
- Turno 3: Enjuague final y verización

CIERRE:
- Tanque limpio, secándose
- Permisos cerrados
- Informe con fotos: antes/después
- Tiempo total: 3,5 horas (incluyendo ventilación)

PELIGRO REAL: En 2019, un trabajador murió en Valencia por entrar a un tanque de lodos sin medir. El H₂S estaba a 80 ppm (límite letal). Siempre medí. Siempre ventilá. Siempre entrá con EPIs.`,
    usefulLinks: [
      { text: "Guía INSST - Espacios Confinados", url: "https://www.insst.es" }
    ]
  }
};
