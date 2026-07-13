const PREGUNTAS_BASE = [
  // ========== TÉRMINOS GENERALES ==========
  { keywords: ["jefe", "empresario", "dueño", "empleador", "patrón", "director"],
    respuesta: "En la ley española se usa 'EMPRESARIO' (no 'jefe'). Es la persona o empresa que te contrata y es RESPONSABLE de tu seguridad. En Argentina le decimos 'patrón' o 'empleador'. La diferencia grande: en España el empresario tiene obligaciones MUY específicas y las Inspección de Trabajo lo controla serio." },
  { keywords: ["consejo de seguridad", "comité de seguridad y salud"],
    respuesta: "El 'Comité de Seguridad y Salud' es como un PARLAMENTO de seguridad dentro de la empresa. Se sientan los delegados de los trabajadores (elegidos por vos) y los representantes del jefe, y hablan TRIMESTRALMENTE de: qué riesgos hay, si se cumple la prevención, accidentes que pasaron, y mejoras a hacer. Solo es OBLIGATORIO en empresas con 50 o más trabajadores." },
  { keywords: ["delegado", "delegado de prevención", "delegados"],
    respuesta: "El Delegado de Prevención es un TRABAJADOR elegido por sus compañeros que se encarga de CUIDAR la seguridad. Es como un 'gremio de seguridad'. Puede: ir con los inspectores, ver toda la documentación, visitar cualquier zona, y hasta PARAR un trabajo peligroso. No lo puede echar el jefe por hacer su trabajo." },
  { keywords: ["inspección de trabajo", "inspector"],
    respuesta: "La Inspección de Trabajo es como la 'policía de seguridad laboral' del gobierno. Si el jefe no cumple las normas, vos o los delegados pueden LLAMARLOS. Van, revisan, y pueden poner MULTAS GRAVES. También pueden ordenar que se PAREN los trabajos si hay peligro." },
  { keywords: ["servicio de prevención"],
    respuesta: "El Servicio de Prevención es el EQUIPO PROFESIONAL que hace la seguridad en la empresa. Puede ser: PROPIO (la empresa tiene su departamento) o CONCERTADO (contratan a una empresa externa). Tiene que tener como mínimo: un técnico de prevención, un enfermero del trabajo, y un médico del trabajo." },
  { keywords: ["técnico de prevención", "prevencionista", "mi trabajo"],
    respuesta: "Como técnico de prevención, TU trabajo es: 1) Evaluar los riesgos de cada puesto, 2) Hacer el plan de prevención, 3) Capacitar a los trabajadores, 4) Investigar accidentes, 5) Asesorar al empresario, 6) Vigilar que se cumplan las normas. Es básicamente ser el 'médico' de la seguridad de la empresa." },
  { keywords: ["plan de prevención"],
    respuesta: "El Plan de Prevención es el MAPA GENERAL de seguridad de la empresa. Es un documento OBLIGATORIO (para empresas con +6 trabajadores) que incluye: quién hace qué, qué riesgos hay, cómo se previenen, qué formación hay, y cómo se actúa en emergencias. Sin este plan, la empresa está en falta GRAVE." },
  { keywords: ["evaluación de riesgos"],
    respuesta: "La Evaluación de Riesgos es como un 'EXAMEN' que le hacés a cada puesto de trabajo. Mirás: ¿qué peligros hay?, ¿qué tan graves son?, ¿quién está expuesto?, ¿cómo se puede arreglar? Todo se documenta. Si cambia algo (nueva máquina, nuevo químico), hay que volver a evaluar. Es tu LABOR PRINCIPAL como técnico." },
  { keywords: ["ficha de datos de seguridad", "fds"],
    respuesta: "La FDS (Ficha de Datos de Seguridad) es como la 'ficha técnica' de un producto químico. Tiene 16 puntos: identificación, composición, peligros, primeros auxilios, cómo se manipula, qué EPIs usar, etc. ES OBLIGATORIA para cada sustancia peligrosa. Si alguien te da un químico sin FDS, NO LO USES." },
  { keywords: ["epi", "epis", "equipo de protección individual"],
    respuesta: "El EPI es el ÚLTIMO recurso para protegerte. El orden correcto es: 1) Eliminar el peligro, 2) Protección colectiva (barandas, mallas, ventilación), 3) EPI. El EPI tiene que ser: adecuado para tu riesgo, cómodo, y en buen estado. Y SIEMPRE GRATIS — el jefe no te puede cobrar los EPIs." },
  { keywords: ["marcado ce", "marca ce"],
    respuesta: "La marca CE significa que el producto cumple con las normas de seguridad de la Unión Europea. TODOS los EPIs deben llevar esta marca. Si un EPI no tiene marca CE, NO se puede usar legalmente. Es como el 'sello de aprobación' europeo." },

  // ========== ESPACIOS CONFINADOS ==========
  { keywords: ["espacio confinado", "espacios confinados", "confinado"],
    respuesta: "Un espacio confinado es un lugar con: 1) Acceso o salida LIMITADA (no podés salir fácil), 2) No diseñado para estar ahí normalmente, 3) Puede tener atmósfera peligrosa (gases, falta de oxígeno). En saneamiento: pozos, depósitos, túneles, fosas sépticas. Es donde más mueren trabajadores en España." },
  { keywords: ["permiso de trabajo", "permiso"],
    respuesta: "El Permiso de Trabajo es un DOCUMENTO que autoriza a entrar a un espacio confinado. Antes de firmarlo, hay que tener todo: evaluación de riesgos, medición de atmósfera, medios de rescate, vigilante asignado. SIN permiso, NO SE ENTRA. Ni siquiera 'un ratito'." },
  { keywords: ["medición de atmósfera", "detector de gas", "gas"],
    respuesta: "Antes de entrar a un espacio confinado, SIEMPRE medís la atmósfera con un detector portátil. Buscás: Oxígeno (tiene que ser 19.5-23.5%), H₂S sulfuro (tiene que ser 0), Metano CH₄ (tiene que ser 0), Monóxido de carbono CO (tiene que ser 0). Si algo está mal, NO ENTRÁS." },
  { keywords: ["h2s", "sulfuro de hidrógeno", "sulfuro", "gas sulfuro"],
    respuesta: "El H₂S (sulfuro de hidrógeno) es el gas MÁS PELIGROSO en saneamiento. Huele a huevos podridos a bajas concentraciones, pero a altas concentraciones APAGA tu olfato — dejás de olerlo justo cuando es más mortal. Mató a muchísimos trabajadores en pozos y cámaras de cloaca. Límite: 0 ppm (cero, nada)." },
  { keywords: ["oxígeno", "oxigeno", "falta de aire"],
    respuesta: "El aire normal tiene 21% de oxígeno. En un espacio confinado puede bajar. Si baja de 19.5% es PELIGROSO. Si baja de 16%, perdés el conocimiento. Si baja de 10%, MORÍS EN MINUTOS. Por eso SIEMPRE se mide antes de entrar." },
  { keywords: ["rescate", "rescatar", "alguien desmayado"],
    respuesta: "REGLA DE ORO: Si ves a alguien inconsciente en un espacio confinado, NO ENTRES A RESCATARLO SIN PROTECCIÓN. Más de la MITAD de las muertes en espacios confinados son de rescatistas que entran sin EPI. Primero: avisá al vigilante, usá el arnés, ventilá, y entrá con máscara de rescate." },
  { keywords: ["vigilante", "vigilante atmosférico"],
    respuesta: "El vigilante es la persona que se queda FUERA del espacio confinado mientras vos trabajás adentro. Tiene que tener: detector de gases, arnés y cuerdas para rescate, comunicación directa con vos, y mascarilla de rescate lista. Si algo sale mal, ÉL es quien te saca." },

  // ========== LEY 31/1995 ==========
  { keywords: ["ley 31", "ley madre", "ley de prevención"],
    respuesta: "La Ley 31/1995 es la LEY MADRE de todo el sistema de prevención de riesgos laborales en España. Es como la Constitución de la seguridad laboral. Cubre: derechos de los trabajadores, obligaciones del empresario, evaluación de riesgos, formación, vigilancia de la salud, delegados, comités, y mucho más. Si tenés que estudiar UNA cosa, es esta." },
  { keywords: ["principios preventivos", "principios de la acción preventiva"],
    respuesta: "Son 10 reglas de oro del Art. 15 de la Ley 31/1995: 1) Evitar riesgos, 2) Evaluar los que no se pueden evitar, 3) Combatir en origen, 4) Adaptar el trabajo a la persona, 5) Usar la técnica actual, 6) Reemplazar lo peligroso, 7) Planificar la prevención, 8) Protección colectiva antes que individual, 9) Dar instrucciones, 10) Contemplar errores no temerarios." },
  { keywords: ["riesgo grave e inminente", "paralizar", "parar trabajo"],
    respuesta: "Si hay peligro de MUERTE o lesión GRAVE e inminente, VOS PODÉS PARAR EL LABURO. Nadie te puede sancionar por eso. Si el jefe no para, los delegados pueden parar la actividad. Es tu derecho MÁS IMPORTANTE." },
  { keywords: ["coste", "costo", "pago", "los epi me los cobra"],
    respuesta: "El Art. 15.5 de la Ley 31/1995 dice CLARO: 'El coste de las medidas relativas a la seguridad y la salud en el trabajo NO deberá recaer en modo alguno sobre los trabajadores'. Traducción: los EPIs, la formación, los exámenes médicos — TODO GRATIS para vos." },

  // ========== RD 396/2006 vs RD 39/1997 ==========
  { keywords: ["rd 396", "396/2006", "rd 39/1997", "diferencia entre rd"],
    respuesta: "RD 39/1997 = Servicios de Prevención (quién hace la seguridad, cómo se organiza). RD 604/2006 = Espacios Confinados (normas específicas para trabajar en pozos, depósitos, túneles). No son lo mismo. El RD 39 organiza TODO el sistema. El RD 604 se enfoca en los lugares más peligrosos." },
  { keywords: ["rd 396/2006", "396"],
    respuesta: "OJO: Muchas personas confunden el RD 396/2006 con espacios confinados, pero en realidad el RD correcto es el RD 604/2006 (que modifica el RD 39/1997). El RD 396/2006 es sobre AMIANTO (asbesto), no sobre espacios confinados. ¡Cuidado con no confundirlos en el examen!" },

  // ========== CATALUÑA ==========
  { keywords: ["catalán", "catalan", "hablar catalán", "aprender catalán"],
    respuesta: "Si vas a trabajar en Barcelona o Cataluña, el catalán es MUY importante. En los centros de trabajo oficiales, la documentación de prevención suele estar en catalán y castellano. Además, los carteles de seguridad y las señales pueden estar solo en catalán. No es obligatorio hablarlo, pero te da MUCHAS más oportunidades laborales." },
  { keywords: ["barcelona", "trabajar en barcelona", "cataluña"],
    respuesta: "Barcelona es la segunda ciudad de España en oportunidades para prevencionistas. Muchas empresas internacionales tienen sede ahí. El mercado de saneamiento es MUY fuerte por el sector turístico y la infraestructura. Pero OJO: necesitás catalán para el día a día y para la documentación oficial." },

  // ========== HOMOLOGACIÓN ==========
  { keywords: ["homologar", "homologación", "título", "reconocer título"],
    respuesta: "Para homologar tu título de técnico en saneamiento argentino en España, necesitás: 1) Tener el título apostillado, 2) Traducido al castellano por traductor jurado, 3) Presentar solicitud en el Ministerio de Educación de España, 4) Esperar (puede tardar 6-12 meses). Mientras tanto, podés empezar a estudiar PRL que te va a servir." },
  { keywords: ["convalidar", "convalidación"],
    respuesta: "La convalidación es diferente a la homologación. Convalidar es hacer que un curso o materia extranjera sea válida en España. Para tu título completo de técnico, necesitás HOMOLOGACIÓN. Pero para cursos sueltos de PRL, algunos se pueden convalidar." },

  // ========== MERCADO LABORAL ==========
  { keywords: ["sueldo", "salario", "cuánto cobran", "cobro"],
    respuesta: "Un técnico de prevención en España gana entre 25.000-40.000€ brutos al año (según experiencia y comunidad). En Barcelona puede ser un poco más alto. Como argentino, el sueldo en euros es MUCHO mejor que lo que ganarías acá. Pero acordate que el coste de vida también es más alto." },
  { keywords: ["empleo", "trabajo", "conseguir trabajo", "contratar"],
    respuesta: "El perfil de prevencionista con experiencia en saneamiento es MUY buscado en España. Las empresas de servicios (limpieza industrial, mantenimiento, saneamiento) siempre necesitan técnicos de PRL. Tu experiencia argentina en saneamiento es un PLUS porque conocés el sector desde adentro." },
  { keywords: ["contrato", "contrato laboral", "tipo de contrato"],
    respuesta: "En España los contratos más comunes son: 1) Indefinido (estable, el mejor), 2) Temporal (determinado tiempo, el más común al inicio), 3) Por obra y servicio (para un proyecto específico). Al principio es normal que te hagan un contrato temporal, pero después de 2 años consecutivos, se convierte en indefinido por ley." },

  // ========== NORMATIVA ESPECÍFICA ==========
  { keywords: ["agentes químicos", "químicos", "sustancias químicas"],
    respuesta: "El RD 374/2001 regula los agentes químicos peligrosos. Para cada químico necesitás: FDS (Ficha de Datos de Seguridad), evaluación de riesgos, señalización, EPIs específicos, y formación. La FDS tiene 16 puntos y es OBLIGATORIA. Sin ella, no podés trabajar con ningún químico." },
  { keywords: ["agentes cancerígenos", "cancerígeno", "cáncer"],
    respuesta: "El RD 665/1997 regula los agentes cancerígenos (sustancias que causan cáncer). Ejemplos: asbesto/amianto, benceno, cromo VI, formaldehído. Requiere: evaluación MUY detallada, vigilancia de la salud REFORZADA, yMaxLength exceeded. Información MUY completa por escrito. Es la norma más estricta de todas." },
  { keywords: ["agentes biológicos", "biológicos", "virus", "bacterias"],
    respuesta: "El RD 664/1997 regula los agentes biológicos (virus, bacterias, hongos). En saneamiento es MUY relevante porque trabajás con aguas residuales que pueden tener patógenos. Requiere: vacunación si es posible, EPIs específicos (mascarillas, guantes), y protocolos de actuación." },
  { keywords: ["ruido", "sordera", "protección auditiva"],
    respuesta: "Si estás expuesto a ruido de más de 80 dB(A) de media, el jefe tiene que: evaluar el ruido, reducirlo técnicamente, dar protección auditiva, y hacer exámenes audiométricos. El límite de exposición es 87 dB(A) ponderado. Si trabajás con maquinaria ruidosa, pedí la evaluación de ruido." },
  { keywords: ["incendio", "fuego", "extintor", "evacuación"],
    respuesta: "Cada centro de trabajo tiene que tener: 1) Plan de emergencia, 2) Señalización de salidas, 3) Extintores y bocas de incendio, 4) Equipos de alarma, 5) Personal formado, 6) Simulacros periódicos. Si ves un extintor roto o una salida bloqueada, AVISÁ." },

  // ========== EXÁMEN Y PRÁCTICAS ==========
  { keywords: ["examen", "examenes", "estudiar para el examen"],
    respuesta: "Para el examen de técnico de prevención en España: se divide en módulos (general y especialidad). Los temas más preguntados son: Ley 31/1995, evaluación de riesgos, EPIs, espacios confinados, y agentes químicos. Practicá con los quizzes de esta app y repasá los puntos clave de cada tema." },
  { keywords: ["caso práctico", "prácticas", "ejercicio práctico"],
    respuesta: "En los exámenes españoles, los casos prácticos suelen ser: hacer una evaluación de riesgos de un puesto, redactar un plan de prevención, o proponer medidas correctivas. Si practicás con esta app, ya estás acostumbrado a pensar como prevencionista." },

  // ========== COLOQUIALES / ARGENTINISMOS ==========
  { keywords: ["art", "artículo", "articulo"],
    respuesta: "'Art.' es la abreviatura de 'Artículo'. Es como los 'arts.' en las leyes argentinas. Cada ley tiene muchos artículos numerados. Por ejemplo, el Art. 14 de la Ley 31/1995 habla del derecho a la protección, y el Art. 16 de la evaluación de riesgos." },
  { keywords: ["rd", "real decreto"],
    respuesta: "'RD' significa 'Real Decreto'. Es una norma que dicta el Gobierno de España (como un decreto en Argentina). Tiene menor jerarquía que una Ley, pero es OBLIGATORIO. Ejemplos: RD 39/1997, RD 604/2006, RD 773/1997." },
  { keywords: ["boe", "boe.es"],
    respuesta: "El BOE (Boletín Oficial del Estado) es donde se publican TODAS las leyes y normas de España. Es como el Boletín Oficial en Argentina. Todas las leyes que estudiás se pueden encontrar en www.boe.es. Los links en esta app apuntan directamente al BOE." },
  { keywords: ["osha", "norma osha"],
    respuesta: "OSHA es la agencia de seguridad laboral de ESTADOS UNIDOS (no de España). España usa las normas europeas: INSST (Instituto Nacional de Seguridad y Salud en el Trabajo) y las Directivas europeas. No confundas OSHA con la normativa española." },
  { keywords: ["argentina", "diferencia con argentina", "comparar"],
    respuesta: "Las grandes diferencias entre Argentina y España en prevención: 1) En España la empresa es directamente responsable (acá la ART), 2) Las normas españolas son MUY más completas y específicas, 3) La inspección es más estricta, 4) Los delegados de prevención tienen más poder, 5) Hay más especialización por tipo de riesgo." }
];

function buscarRespuesta(pregunta) {
  const q = pregunta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let mejorMatch = null;
  let mejorPuntaje = 0;

  for (const item of PREGUNTAS_BASE) {
    let puntaje = 0;
    for (const kw of item.keywords) {
      const kwNorm = kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (q.includes(kwNorm)) {
        puntaje += kwNorm.length;
      }
      const palabras = q.split(/\s+/);
      for (const palabra of palabras) {
        if (palabra.length >= 3 && kwNorm.includes(palabra)) {
          puntaje += 3;
        }
      }
    }
    if (puntaje > mejorPuntaje) {
      mejorPuntaje = puntaje;
      mejorMatch = item;
    }
  }

  if (mejorMatch && mejorPuntaje >= 3) {
    return mejorMatch.respuesta;
  }

  return null;
}
