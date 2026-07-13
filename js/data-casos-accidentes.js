const CASOS_ACCIDENTES = [
  {
    id: "caso-1",
    titulo: "Muerte por asfixia en pozo de saneamiento (Huelva, 2019)",
    victima: "Operario de limpieza de alcantarillas, 42 años",
    resumen: "Un operario entró a un pozo de visita para limpiarlo sin medición atmosférica ni ventilación. El nivel de oxígeno era del 12% (mínimo seguro 19,5%). Perdió el conocimiento en 30 segundos. Un compañero intentó rescatarlo y también perdió el conocimiento. Ambos murieron.",
    queSalioMal: [
      "NO se hizo medición atmosférica antes de entrar",
      "NO se ventiló el pozo antes de entrar",
      "NO se usaron EPIs (ni mascarilla, ni arnés)",
      "NO había persona de vigilancia externa",
      "NO había equipo de rescate disponible",
      "El segundo trabajador entró a rescatar SIN protección (error clásico)"
    ],
    normasVioladas: [
      "RD 604/2006 - Espacios confinados: permiso de trabajo, medición, ventilación",
      "RD 39/1997 - Evaluación de riesgos previa",
      "Ley 31/1995 Art. 15 - Principios preventivos"
    ],
    queDebioPasarse: [
      "Medición con gasómetro: O₂ (19,5-23,5%), H₂S (< 10 ppm), CH₄ (< 1%)",
      "Ventilación forzada mínimo 15 minutos antes de entrar",
      "EPIs: casco, mascarilla, arnés con línea de vida",
      "Persona externa con radio y equipo de rescate (trípode)",
      "Si alguien cae: llamar al 112, NO entrar, usar trípode para subirlo"
    ],
    leccion: "NUNCA entres a un espacio confinado sin medir. 30 segundos sin oxígeno = inconsciencia. 3-4 minutos sin oxígeno = muerte cerebral. SIEMPRE medí, ventilá, y entrá con EPIs.",
    gravedad: "MORTAL (2 víctimas)"
  },
  {
    id: "caso-2",
    titulo: "Intoxicación por H₂S en planta de aguas residuales (Valencia, 2020)",
    victima: "Técnico de mantenimiento, 35 años",
    resumen: "Un técnico entró a un tanque de lodos que estaba vaciado hacía 24 horas pero NO se ventiló adecuadamente. El H₂S (sulfuro de hidrógeno) se acumuló en el fondo del tanque a 80 ppm (límite letal: 100 ppm). El técnico perdió el conocimiento en menos de 1 minuto. Lograron rescatarlo con trípode pero quedó con daño neurológico permanente.",
    queSalioMal: [
      "El tanque estaba 'vacío' pero NO se verificó la atmósfera",
      "El H₂S es más pesado que el aire y se acumula en el fondo",
      "NO se ventiló antes de entrar (se asumió que estaba limpio)",
      "La medición se hizo DE SPUEDE, cuando el técnico ya estaba dentro",
      "El técnico no llevaba detector de gases personal"
    ],
    normasVioladas: [
      "RD 604/2006 - Medición atmosférica OBLIGATORIA antes de entrar",
      "RD 216/2004 - Riesgo de atmósfera explosiva/toxica",
      "RD 374/2001 - Agentes químicos peligrosos"
    ],
    queDebioPasarse: [
      "Medición OBLIGATORIA aunque el tanque esté vacío",
      "El H₂S puede estar en el fondo aunque no se vea ni se huela",
      "Ventilación forzada mínimo 2 horas antes de entrar",
      "Detector de gases PERSONAL (se lleva puesto, no se mide después)",
      "Si el gasómetro marca > 10 ppm de H₂S → NO ENTRAR"
    ],
    leccion: "Un tanque 'vacío' NO es un tanque seguro. El H₂S no tiene olor perceptible a concentraciones letales (adapta tu olfato). SIEMPRE medí con gasómetro, aunque creas que está limpio.",
    gravedad: "GRAVE (daño neurológico permanente)"
  },
  {
    id: "caso-3",
    titulo: "Caída en pozo sin tapa (Madrid, 2018)",
    victima: "Peatón, 28 años (no era trabajador)",
    resumen: "Una empresa de saneamiento dejó un pozo de visita abierto sin señalización durante una pausa en los trabajos. Un peatón cayó al pozo de 3 metros de profundidad. Resultó con fractura de tobillo y lesiones en columna.",
    queSalioMal: [
      "El pozo quedó abierto sin tapa durante la pausa de almuerzo",
      "NO había señalización de peligro alrededor del pozo",
      "NO había valla ni cinta de seguridad",
      "El trabajador que dejó abierto no verificó antes de irse",
      "NO se informó a la empresa para que pusiera protección"
    ],
    normasVioladas: [
      "RD 486/1997 - Lugares de trabajo: protección de aberturas",
      "Ley 31/1995 Art. 17 - Señalización de seguridad",
      "RD 39/1997 - Organización de la prevención"
    ],
    queDebioPasarse: [
      "SIEMPRE tapar los pozos que no se estén usando",
      "Señalización completa: conos, cinta, cartel de peligro",
      "Si se deja abierto: persona vigilante + barreras físicas",
      "Al irse: cerrar y verificar que está cerrado correctamente",
      "Informar a la empresa si hay riesgo para terceros"
    ],
    leccion: "Un pozo abierto sin señalización es una TRAMPA para peatones y vehículos. SIEMPRE cerrá o señalizá. Si te vas a comer, cerrá el pozo primero. La prevención no es solo para trabajadores: es para TODOS.",
    gravedad: "MEDIA (lesiones, no mortal)"
  },
  {
    id: "caso-4",
    titulo: "Explosión de metano en pozo de saneamiento (Barcelona, 2021)",
    victima: "Dos operarios de limpieza, 30 y 38 años",
    resumen: "Dos operarios estaban limpiando un pozo de visita en una zona industrial. El pozo acumulaba metano de una fábrica cercana que vertía residuos orgánicos. El metano alcanzó el 4% de concentración (LIE = 5%). Un compañero encendió una linterna NO apta para zona ATEX y provocó una explosión. Ambos sufrieron quemaduras de segundo grado.",
    queSalioMal: [
      "El metano se acumuló por vertido ilegal de residuos orgánicos",
      "NO se clasificó la zona como ATEX",
      "Se usó linterna NO apta para zona ATEX (sin marcado Ex)",
      "NO se midió la concentración de metano antes de entrar",
      "La empresa del vertedero no informó del riesgo de gas"
    ],
    normasVioladas: [
      "RD 216/2004 - Atmósferas explosivas: clasificación de zonas y equipos ATEX",
      "RD 604/2006 - Espacios confinados: medición atmosférica",
      "Ley 31/1995 Art. 16 - Evaluación de riesgos"
    ],
    queDebioPasarse: [
      "Clasificación ATEX del pozo (conocer el riesgo de metano)",
      "Medición de CH₄ antes de entrar: < 1% LIE",
      "Equipos ATEX: lámparas, herramientas, ventilación todo con marcado Ex",
      "Ventilación antes de entrar si hay acumulación de gas",
      "Información sobre vertidos cercanos que pueden generar gases"
    ],
    leccion: "El metano no se ve, no se huele, pero EXPLOTA. Si trabajás en saneamiento industrial, SIEMPRE medí gases. Y SIEMPRE usá equipos ATEX en pozos. Una linterna común puede causar una explosión.",
    gravedad: "GRAVE (quemaduras)"
  },
  {
    id: "caso-5",
    titulo: "Intoxicación por cloro en limpieza de instalaciones (Sevilla, 2022)",
    victima: "Limpiador industrial, 45 años",
    resumen: "Un limpiador mezcló hipoclorito de sodio (lejía) con ácido muriático (salfumán) para 'potenciar' la limpieza. La mezcla generó gas cloro tóxico. El trabajador inhaló cloro y sufrió edema agudo de pulmón. Estuvo 15 días en UCI.",
    queSalioMal: [
      "Mezcló dos productos incompatibles: hipoclorito + ácido",
      "NO leyó las Hojas de Datos de Seguridad (HDS)",
      "NO formación en compatibilidad de productos químicos",
      "Trabajó en espacio cerrado sin ventilación",
      "NO usó mascarilla con filtro para gases"
    ],
    normasVioladas: [
      "RD 374/2001 - Agentes químicos: información, formación, HDS",
      "RD 486/1997 - Ventilación de lugares de trabajo",
      "Ley 31/1995 Art. 19 - Formación de trabajadores"
    ],
    queDebioPasarse: [
      "NUNCA mezclar productos sin verificar compatibilidad",
      "Leer las HDS de CADA producto antes de usarlo",
      "Las HDS indican: 'NUNCA mezclar con ácidos' (para hipoclorito)",
      "Trabajar en zona ventilada",
      "Usar mascarilla con filtro químico específico para cloro",
      "Formación obligatoria en manipulación de productos químicos"
    ],
    leccion: "La lejía + el salfumán = GAS CLORO = ¡PELIGRO! Lee las HDS. Formate. Nunca mezcles productos sin saber qué pasa. El gas cloro mata en minutos.",
    gravedad: "MUY GRAVE (15 días UCI)"
  },
  {
    id: "caso-6",
    titulo: "Caída de andamio en obra de saneamiento (Valencia, 2020)",
    victima: "Albañil, 52 años",
    resumen: "Un albañil trabajaba en un andamio tubular a 6 metros de altura haciendo reparaciones en una estación de bombeo. El andamio no tenía barandilla posterior. El trabajador se inclinó demasiado, perdió el equilibrio y cayó al vacío. Murió en el acto.",
    queSalioMal: [
      "El andamio NO tenía barandilla posterior ni rodapiés",
      "El trabajador NO llevaba arnés (aunque el andamio no tenía punto de anclaje)",
      "El andamio fue montado por personal sin formación específica",
      "NO había plan de andamios (proyecto técnico)",
      "NO se hizo inspección periódica del andamio"
    ],
    normasVioladas: [
      "RD 1215/1997 - Andamios: barandillas, rodapiés, puntos de anclaje",
      "RD 299/2006 - Mantenimiento e inspección de equipos",
      "RD 773/1997 - EPIs: arnés en trabajos en altura",
      "Ley 31/1995 Art. 16 - Evaluación de riesgos"
    ],
    queDebioPasarse: [
      "Andamio con barandilla posterior obligatoria > 2 metros",
      "Rodapié en toda la base de la plataforma",
      "Punto de anclaje para arnés si no hay barandilla completa",
      "Plan de andamios firmado por técnico competente",
      "Montaje por personal certificado",
      "Inspección semanal del andamio en uso"
    ],
    leccion: "A 6 metros, una caída es MUERTE. El andamio DEBE tener barandilla posterior SIEMPRE. Si ves un andamio sin barandilla, NO trabajes ahí. Pará la obra. Tu vida vale más que el plazo de la obra.",
    gravedad: "MORTAL"
  },
  {
    id: "caso-7",
    titulo: "Electrocución en estación de bombeo (Zaragoza, 2023)",
    victima: "Electricista de mantenimiento, 40 años",
    resumen: "Un electricista fue a reparar un quadro eléctrico en una estación de bombeo de aguas residuales. El quadro estaba mojado por una filtración. Al abrir la tapa, recibió una descarga de 400V trifásico. Murió electrocutado.",
    queSalioMal: [
      "El quadro estaba mojado (filtración de techo)",
      "NO se desconectó la instalación antes de trabajar",
      "NO se hizo verificación de ausencia de tensión",
      "NO se usaron EPIs dieléctricos",
      "El trabajador no estaba habilitado para ese tipo de intervención"
    ],
    normasVioladas: [
      "RD 840/2003 - Riesgos eléctricos: protocolo LOTO",
      "RD 1215/1997 - Equipos de trabajo en condiciones seguras",
      "Ley 31/1995 Art. 15 - Principios preventivos"
    ],
    queDebioPasarse: [
      "Protocolo LOTO: desconexión → bloqueo → verificación → tierra → señalización",
      "Verificación de ausencia de tensión con detector homologado",
      "EPIs dieléctricos: guantes, alfombra aislante, casco con pantalla",
      "Habilitación específica para trabajos en instalaciones energizadas",
      "Reparar la filtración ANTES de trabajar en el quadro"
    ],
    leccion: "La electricidad no avisa. Si el quadro está mojado, es PEOR. SIEMPRE desconectá, bloqueá, verificá. NUNCA confíes en que 'está apagado'. Si no sabés si está vivo, NO TOQUES.",
    gravedad: "MORTAL"
  },
  {
    id: "caso-8",
    titulo: "Caída de víctima mortal por grieta en fosa séptica (Málaga, 2022)",
    victima: "Operario de limpieza, 33 años",
    resumen: "Un operario caminó sobre la tapa de una fosa séptica de fibra de vidrio. La tapa cedió por deterioro y cayó 2 metros dentro. La fosa contenía lodos en descomposición (H₂S). El trabajador murió asfixiado por falta de oxígeno e intoxicación por H₂S.",
    queSalioMal: [
      "La tapa de fibra de vidrio estaba deteriorada (no se inspeccionó)",
      "El trabajador caminó SOBRE la tapa sin verificar su resistencia",
      "NO había evaluación de riesgos de la zona",
      "NO se usaron EPIs (ni casco, ni detector de gases)",
      "La fosa no estaba clasificada como espacio confinado"
    ],
    normasVioladas: [
      "RD 604/2006 - Espacios confinados: clasificación y evaluación",
      "RD 1215/1997 - Condiciones de seguridad de los lugares de trabajo",
      "Ley 31/1995 Art. 16 - Evaluación de riesgos"
    ],
    queDebioPasarse: [
      "Inspección visual de todas las tapas antes de caminar sobre ellas",
      "NUNCA caminar sobre tapas de fibra de vidrio sin verificar",
      "Clasificar la fosa como espacio confinado",
      "Usar pasarela o tabla para distribute el peso",
      "Detector de gases personal al acercarse a fosas",
      "Evaluación de riesgos de toda la zona"
    ],
    leccion: "Una tapa de fibra de vidrio puede parecer sólida pero estar podrida por dentro. NUNCA camines sobre una tapa sin verificar. Si hay una fosa séptica cerca, tratá como espacio confinado: medí gases antes de acercarte.",
    gravedad: "MORTAL"
  }
];

const LECCIONES_GENERALES = [
  {
    leccion: "MEDÍ ANTES DE ENTRAR",
    descripcion: "El 80% de las muertes en espacios confinados se podrían haber evitado con una medición atmosférica de 30 segundos",
    normas: ["RD 604/2006", "RD 216/2004"]
  },
  {
    leccion: "NUNCA ENTRÉS SOLO",
    descripcion: "Siempre debe haber al menos 1 persona externa con equipo de rescate y radio",
    normas: ["RD 604/2006"]
  },
  {
    leccion: "LEE LAS HDS",
    descripcion: "Antes de usar CUALQUIER producto químico, leé la Hoja de Datos de Seguridad",
    normas: ["RD 374/2001"]
  },
  {
    leccion: "USÁ SIEMPRE EPIs",
    descripcion: "Los EPIs son tu última línea de defensa. No son opcionales.",
    normas: ["RD 773/1997"]
  },
  {
    leccion: "SEÑALIZÁ TODO",
    descripcion: "Un pozo abierto sin señalización es una trampa para trabajadores y peatones",
    normas: ["RD 486/1997", "Ley 31/1995"]
  },
  {
    leccion: "NUNCA MEZLES PRODUCTOS",
    descripcion: "Lejía + ácido = gas cloro. Lee las HDS. Nunca asumas que son compatibles.",
    normas: ["RD 374/2001"]
  },
  {
    leccion: "VERIFICÁ LOS EQUIPOS",
    descripcion: "Un andamio sin barandilla, una linterna sin Ex, un arnés roto: todo eso mata",
    normas: ["RD 1215/1997", "RD 299/2006", "RD 773/1997"]
  },
  {
    leccion: "FORMATE SIEMPRE",
    descripcion: "El 70% de los accidentes ocurren por falta de formación o por no aplicar lo aprendido",
    normas: ["Ley 31/1995 Art. 19"]
  }
];
