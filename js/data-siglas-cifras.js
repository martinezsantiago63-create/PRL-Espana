const DATA_SIGLAS_PRL = [
  {
    sigla: "ITSS",
    nombre: "Inspección de Trabajo y Seguridad Social",
    categoria: "Organismos",
    equivalenteAr: "Inspección de Trabajo / Policía del Trabajo (Ministerio de Trabajo)",
    explicacion: "Organismo estatal que vigila el cumplimiento de las normas laborales y de PRL. Sus inspectores levantan actas de infracción y pueden paralizar trabajos inmediatamente si hay riesgo grave e inminente."
  },
  {
    sigla: "INSST",
    nombre: "Instituto Nacional de Seguridad y Salud en el Trabajo",
    categoria: "Organismos",
    equivalenteAr: "SRT (Superintendencia de Riesgos del Trabajo) - área técnica",
    explicacion: "Órgano científico-técnico de referencia en España. Emite las Guías Técnicas y las prestigiosas Notas Técnicas de Prevención (NTP)."
  },
  {
    sigla: "ICSSL",
    nombre: "Institut Català de Seguretat i Salut Laboral",
    categoria: "Organismos",
    equivalenteAr: "Dirección provincial de salud laboral",
    explicacion: "Organismo técnico oficial de prevención de la Generalitat de Catalunya. Asesora y fiscaliza las condiciones de seguridad en Cataluña."
  },
  {
    sigla: "SPA",
    nombre: "Servicio de Prevención Ajeno",
    categoria: "Servicios de Prevención",
    equivalenteAr: "Consultora externa de Higiene y Seguridad habilitada",
    explicacion: "Empresa especializada acreditada por la autoridad laboral que contrata una empresa para gestionar sus especialidades de prevención."
  },
  {
    sigla: "SPP",
    nombre: "Servicio de Prevención Propio",
    categoria: "Servicios de Prevención",
    equivalenteAr: "Servicio interno de Higiene y Seguridad en el Trabajo",
    explicacion: "Departamento interno de prevención obligatorio en empresas de más de 500 trabajadores (o más de 250 en actividades de alto riesgo)."
  },
  {
    sigla: "SPM",
    nombre: "Servicio de Prevención Mancomunado",
    categoria: "Servicios de Prevención",
    equivalenteAr: "Servicio mancomunado entre empresas del mismo grupo",
    explicacion: "Servicio de prevención compartido entre empresas que pertenecen al mismo grupo empresarial o desarrollan actividades en un mismo polígono o centro comercial."
  },
  {
    sigla: "CSS",
    nombre: "Comité de Seguridad y Salud",
    categoria: "Representación",
    equivalenteAr: "Comité Mixto de Higiene y Seguridad (en provincias como Santa Fe/Buenos Aires)",
    explicacion: "Órgano paritario y colegiado obligatorio en todas las empresas de 50 o más trabajadores. Formado 50% por Delegados de Prevención y 50% por la empresa."
  },
  {
    sigla: "DP",
    nombre: "Delegado de Prevención",
    categoria: "Representación",
    equivalenteAr: "Delegado sindical de Higiene y Seguridad",
    explicacion: "Representante de los trabajadores con facultades específicas en prevención, elegido por y entre los representantes del personal."
  },
  {
    sigla: "RP",
    nombre: "Recurso Preventivo",
    categoria: "Personal Clave",
    equivalenteAr: "Responsable de seguridad permanente en obra",
    explicacion: "Uno o varios trabajadores designados con formación específica (mínimo nivel básico) cuya presencia es legalmente obligatoria durante tareas de especial peligrosidad (altura, confinados, zanjas profundas)."
  },
  {
    sigla: "CAE",
    nombre: "Coordinación de Actividades Empresariales",
    categoria: "Gestión",
    equivalenteAr: "Control de contratistas y subcontratistas",
    explicacion: "Procedimiento obligatorio (RD 171/2004) cuando dos o más empresas coinciden en un mismo centro de trabajo. Intercambio de riesgos, medidas e instrucciones."
  },
  {
    sigla: "EPI",
    nombre: "Equipo de Protección Individual",
    categoria: "Equipos",
    equivalenteAr: "EPP (Equipo de Protección Personal)",
    explicacion: "Cualquier equipo destinado a ser llevado o sujetado por el trabajador para protegerlo de riesgos (RD 773/1997). Se clasifica en Categorías I, II y III."
  },
  {
    sigla: "PEMP",
    nombre: "Plataforma Elevadora Móvil de Personal",
    categoria: "Equipos",
    equivalenteAr: "Plataforma elevadora tijera / brazo articulado (hidroelevador)",
    explicacion: "Máquina móvil destinada a elevar personas hasta una posición de trabajo en altura. Requiere formación específica y arnés anclado a punto certificado de la cesta."
  },
  {
    sigla: "FDS",
    nombre: "Ficha de Datos de Seguridad",
    categoria: "Químicos",
    equivalenteAr: "MSDS / HDS (Hoja de Datos de Seguridad)",
    explicacion: "Documento oficial estandarizado de 16 apartados que acompaña a toda sustancia química comercializada bajo los reglamentos europeos REACH y CLP."
  },
  {
    sigla: "VLA-ED",
    nombre: "Valor Límite Ambiental - Exposición Diaria",
    categoria: "Higiene",
    equivalenteAr: "CMP (Concentración Máxima Permisible, jornada de 8 horas)",
    explicacion: "Límite de concentración de un agente químico en el aire para una jornada estándar de 8 horas diarias y 40 horas semanales."
  },
  {
    sigla: "VLA-EC",
    nombre: "Valor Límite Ambiental - Corta Duración",
    categoria: "Higiene",
    equivalenteAr: "CMP-CPT (Concentración Máxima Permisible para Corto Tiempo, 15 min)",
    explicacion: "Límite que no debe superarse en ningún momento de la jornada para periodos de exposición de 15 minutos."
  },
  {
    sigla: "LIE / LSE",
    nombre: "Límite Inferior / Superior de Explosividad",
    categoria: "Higiene",
    equivalenteAr: "LEL / UEL (Lower / Upper Explosive Limit)",
    explicacion: "Rango de concentración de un gas inflamable en aire dentro del cual la mezcla es capaz de arder o explotar ante una fuente de ignición."
  },
  {
    sigla: "ATEX",
    nombre: "Atmósferas Explosivas",
    categoria: "Seguridad Industrial",
    equivalenteAr: "Áreas clasificadas (antiexplosivas / antillama)",
    explicacion: "Directivas europeas y normativa que regulan los lugares donde pueden formarse mezclas inflamables (polvos o gases) y los equipos certificados con marcado Ex."
  },
  {
    sigla: "PSS",
    nombre: "Plan de Seguridad y Salud",
    categoria: "Obras",
    equivalenteAr: "Programa de Seguridad de Obra (Resoluciones SRT 51/97, 35/98)",
    explicacion: "Documento que redacta cada contratista en obras de construcción adaptando el Estudio de Seguridad a su propio sistema de trabajo. Debe aprobarlo el Coordinador."
  },
  {
    sigla: "ESS / EBSS",
    nombre: "Estudio de Seguridad y Salud / Estudio Básico",
    categoria: "Obras",
    equivalenteAr: "Memoria técnica de seguridad del proyecto de obra",
    explicacion: "Documento que forma parte obligatoria del proyecto de edificación u obra civil, redactado por el proyectista para prevenir riesgos durante la ejecución."
  },
  {
    sigla: "CSS (en obras)",
    nombre: "Coordinador de Seguridad y Salud",
    categoria: "Obras",
    equivalenteAr: "Responsable de Seguridad e Higiene en obra de construcción",
    explicacion: "Técnico competente integrado en la dirección facultativa de la obra que coordina las medidas preventivas de todas las empresas y aprueba los PSS."
  },
  {
    sigla: "NTP",
    nombre: "Nota Técnica de Prevención",
    categoria: "Documentación",
    equivalenteAr: "Guías técnicas informativas de la SRT",
    explicacion: "Documentos técnicos monográficos emitidos por el INSST. No son leyes obligatorias pero constituyen las mejores prácticas técnicas reconocidas ante la justicia."
  },
  {
    sigla: "REACH",
    nombre: "Registro, Evaluación, Autorización y Restricción de Sustancias Químicas",
    categoria: "Normativa Europea",
    equivalenteAr: "Reglamentación de sustancias químicas peligrosas",
    explicacion: "Reglamento (CE) nº 1907/2006 de la Unión Europea que regula la producción y comercio seguro de sustancias químicas."
  },
  {
    sigla: "CLP",
    nombre: "Clasificación, Etiquetado y Envasado de sustancias y mezclas",
    categoria: "Normativa Europea",
    equivalenteAr: "Sistema Globalmente Armonizado (SGA / GHS)",
    explicacion: "Reglamento (CE) nº 1272/2008 que transpone el Sistema Globalmente Armonizado en la Unión Europea: pictogramas de rombo rojo, frases H y frases P."
  },
  {
    sigla: "MMC",
    nombre: "Manipulación Manual de Cargas",
    categoria: "Ergonomía",
    equivalenteAr: "Levantamiento manual de cargas (Res. SRT 295/03)",
    explicacion: "Cualquier operación de transporte o sujeción de una carga por parte de uno o varios trabajadores (RD 487/1997). Límite estándar: 25 kg."
  },
  {
    sigla: "PDCA / PHVA",
    nombre: "Plan - Do - Check - Act (Planificar, Hacer, Verificar, Actuar)",
    categoria: "Gestión ISO",
    equivalenteAr: "Ciclo de Deming o mejora continua",
    explicacion: "Estructura fundamental de los sistemas de gestión normalizados como la norma ISO 45001 de seguridad y salud en el trabajo."
  }
];

const DATA_CIFRAS_CRITICAS = [
  {
    area: "Trabajo en Altura (RD 2177/2004)",
    icono: "🏗️",
    cifras: [
      { valor: "2 metros", concepto: "Altura mínima legal a partir de la cual es obligatorio adoptar medidas de prevención de caídas." },
      { valor: "90 cm", concepto: "Altura mínima obligatoria de la barandilla de protección rígida superior." },
      { valor: "15 cm", concepto: "Altura mínima obligatoria del rodapié de la barandilla para impedir caída de objetos." },
      { valor: "1.000 kg (10 kN)", concepto: "Resistencia mínima certificada que debe soportar un punto de anclaje anticaídas (UNE-EN 795)." },
      { valor: "6 kN", concepto: "Fuerza de frenado máxima que el absorbedor de energía puede transmitir al cuerpo del trabajador." },
      { valor: "3 puntos", concepto: "Puntos de contacto simultáneos (2 manos y 1 pie, o 2 pies y 1 mano) al subir por escalas fijas." }
    ]
  },
  {
    area: "Espacios Confinados en Saneamiento",
    icono: "🕳️",
    cifras: [
      { valor: "21 %", concepto: "Concentración normal de Oxígeno en aire atmosférico limpio." },
      { valor: "19,5 % - 23,5 %", concepto: "Rango de concentración de Oxígeno seguro para permitir el ingreso humano." },
      { valor: "< 19,5 %", concepto: "Atmósfera deficiente de Oxígeno (riesgo de hipoxia, asfixia y desmayo súbito)." },
      { valor: "> 23,5 %", concepto: "Atmósfera sobreoxigenada (riesgo extremo de inflamación violenta y combustión)." },
      { valor: "5 ppm (7 mg/m³)", concepto: "VLA-ED (Límite diario 8 h) para Ácido Sulfhídrico / Sulfuro de Hidrógeno (H₂S)." },
      { valor: "10 ppm (14 mg/m³)", concepto: "VLA-EC (Límite corto plazo 15 min) para Sulfuro de Hidrógeno (H₂S)." },
      { valor: "5 % - 15 %", concepto: "Rango de explosividad del Metano (CH₄) en mezcla con aire. El gasómetro alarma al 10% del LIE." },
      { valor: "20 ppm", concepto: "VLA-ED de Monóxido de Carbono (CO) según los límites higiénicos del INSST." }
    ]
  },
  {
    area: "Ruido Laboral (RD 286/2006)",
    icono: "🔊",
    cifras: [
      { valor: "80 dB(A)", concepto: "Nivel de acción inferior. La empresa informa, realiza audiometría voluntaria y pone EPIs a disposición." },
      { valor: "85 dB(A)", concepto: "Nivel de acción superior. Uso OBLIGATORIO de protectores auditivos, señalización de zona y plan técnico." },
      { valor: "87 dB(A)", concepto: "VALOR LÍMITE DE EXPOSICIÓN (VLE). Teniendo en cuenta la atenuación del protector, NUNCA puede superarse." },
      { valor: "135 dB(C)", concepto: "Nivel de pico inferior de acción para ruidos de impacto." },
      { valor: "137 dB(C)", concepto: "Nivel de pico superior de acción para ruidos de impacto." },
      { valor: "140 dB(C)", concepto: "Valor límite de exposición de pico que jamás puede ser sobrepasado." }
    ]
  },
  {
    area: "Manipulación Manual de Cargas (RD 487/1997)",
    icono: "📦",
    cifras: [
      { valor: "25 kg", concepto: "Peso máximo teórico recomendado en condiciones favorables para población laboral general." },
      { valor: "15 kg", concepto: "Peso máximo para mujeres, trabajadores jóvenes o cuando se manipula en condiciones desfavorables." },
      { valor: "40 kg", concepto: "Peso máximo excepcional absoluto para trabajadores jóvenes, entrenados y en tareas esporádicas." },
      { valor: "3 kg", concepto: "Cargas de más de 3 kg ya pueden entrañar un riesgo dorsolumbar si se manipulan repetitivamente." }
    ]
  },
  {
    area: "Lugares de Trabajo (RD 486/1997)",
    icono: "🏭",
    cifras: [
      { valor: "3 metros", concepto: "Altura mínima de techos desde el suelo en locales de trabajo comerciales e industriales." },
      { valor: "2,5 metros", concepto: "Altura mínima de techos permitida en despachos y oficinas de servicios." },
      { valor: "2 m²", concepto: "Superficie mínima libre por cada trabajador en su puesto habitual." },
      { valor: "10 m³", concepto: "Volumen mínimo no ocupado por cada trabajador en el centro de trabajo." },
      { valor: "1 metro", concepto: "Anchura mínima de pasillos destinados exclusivamente a circulación de personas." },
      { valor: "80 cm", concepto: "Anchura mínima de puertas de paso y salidas peatonales." },
      { valor: "100 lux", concepto: "Iluminación mínima obligatoria en zonas de paso y vías de circulación." },
      { valor: "200 lux", concepto: "Iluminación mínima en zonas con exigencias visuales bajas (almacenes, depósitos)." },
      { valor: "500 lux", concepto: "Iluminación mínima en puestos con exigencias visuales medias (oficinas, talleres, laboratorios)." }
    ]
  },
  {
    area: "Ficha de Datos de Seguridad y Cancerígenos",
    icono: "⚗️",
    cifras: [
      { valor: "16 apartados", concepto: "Estructura estandarizada obligatoria de la FDS según el Reglamento europeo REACH." },
      { valor: "40 años", concepto: "Plazo durante el cual la empresa debe conservar el registro de trabajadores expuestos a cancerígenos (RD 665/1997)." },
      { valor: "Categoría III", concepto: "EPIs de mayor protección destinados a salvar la vida frente a peligros mortales (control de fabricación)." }
    ]
  },
  {
    area: "Órganos de Representación (Ley 31/1995)",
    icono: "👥",
    cifras: [
      { valor: "50 trabajadores", concepto: "Umbral a partir del cual es OBLIGATORIO constituir el Comité de Seguridad y Salud (CSS)." },
      { valor: "2 Delegados", concepto: "Número de Delegados de Prevención en empresas de 50 a 100 trabajadores." },
      { valor: "3 Delegados", concepto: "Número de Delegados de Prevención en empresas de 101 a 500 trabajadores." },
      { valor: "4 Delegados", concepto: "Número de Delegados de Prevención en empresas de 501 a 1.000 trabajadores." },
      { valor: "Trimestral", concepto: "Periodicidad mínima con la que debe reunirse el Comité de Seguridad y Salud." }
    ]
  }
];
