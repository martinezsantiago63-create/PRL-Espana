const DATA_ISO_SIG = {
  titulo: "Normas ISO y Normas Europeas (UNE-EN) en PRL",
  descripcion: "Guía técnica completa del marco normativo internacional y europeo aplicado a la Seguridad y Salud Laboral, saneamiento, recolección de residuos y auditorías en España.",
  
  jerarquiaNormativa: {
    titulo: "¿Cómo se relacionan las Leyes, las Normas UNE-EN y las Normas ISO?",
    explicacion: "En España y la Unión Europea existe una jerarquía fundamental que todo Técnico de Prevención debe dominar para emitir informes, evaluar riesgos y defender auditorías o inspecciones laborales:",
    niveles: [
      {
        rango: "1. Marco Legal Obligatorio (De obligado cumplimiento por Ley)",
        color: "#e74c3c",
        icono: "⚖️",
        items: [
          "Directivas Europeas (ej. Directiva Marco 89/391/CEE, Directiva de Máquinas 2006/42/CE, Reglamento UE 2016/425 de EPIs).",
          "Leyes Españolas: Ley 31/1995 de Prevención de Riesgos Laborales (LPRL).",
          "Reales Decretos: RD 39/1997 (Servicios de Prevención), RD 773/1997 (EPIs), RD 1215/1997 (Equipos de trabajo/Máquinas), RD 486/1997 (Lugares de trabajo), RD 374/2001 (Riesgo químico), RD 664/1997 (Riesgo biológico).",
          "⚠️ Incumplir esto es delito o infracción administrativa grave/muy grave de la Inspección de Trabajo (LISOS)."
        ]
      },
      {
        rango: "2. Normas Técnicas Armonizadas Europeas (UNE-EN) — 'Presunción de Conformidad'",
        color: "#f39c12",
        icono: "🇪🇺",
        items: [
          "Normas elaboradas por los comités europeos de normalización (CEN / CENELEC) y adoptadas en España por UNE (Asociación Española de Normalización).",
          "Definen las especificaciones técnicas concretas de seguridad (resistencia de un arnés, diseño de un camión de basura, corte de un guante, cálculo de atmósferas explosivas).",
          "Estatus jurídico: Otorgan 'Presunción de Conformidad' con los requisitos esenciales de seguridad de la UE. Si un fabricante o empresa cumple la norma UNE-EN, la ley presume que su diseño es seguro.",
          "El Art. 5 del RD 39/1997 establece que cuando no exista normativa legal específica, la evaluación de riesgos DEBE basarse en Normas UNE o guías del INSST."
        ]
      },
      {
        rango: "3. Normas Internacionales de Gestión (ISO) — Certificación y Excelencia",
        color: "#27ae60",
        icono: "🌐",
        items: [
          "Normas voluntarias de la Organización Internacional de Normalización (ISO, Ginebra) con estructura de alto nivel (Anexo SL): ISO 45001 (SST), ISO 14001 (Medio Ambiente), ISO 9001 (Calidad), ISO 39001 (Seguridad Vial).",
          "Aunque nacen como voluntarias, se vuelven OBLIGATORIAS por contrato en las licitaciones públicas de Ayuntamientos (FCC, Urbaser, PreZero, Valoriza exigen certificar ISO 45001 y 14001).",
          "Auditorías: La ISO 19011 fija las directrices de auditoría. Permite integrar la PRL en el negocio diario con el ciclo PDCA (Planificar, Hacer, Verificar, Actuar)."
        ]
      }
    ]
  },

  normasIso: [
    {
      id: "iso-45001",
      codigo: "ISO 45001:2018",
      nombre: "Sistemas de Gestión de la Seguridad y Salud en el Trabajo (SST)",
      icono: "🛡️",
      alcance: "Sustituyó a la antigua OHSAS 18001. Estándar mundial para gestionar riesgos laborales, prevenir accidentes y enfermedades profesionales y fomentar entornos de trabajo saludables.",
      estructura: "Estructura de Alto Nivel (HLS / Anexo SL) de 10 cláusulas, alineada con ISO 14001 e ISO 9001.",
      clausulasClave: [
        "Cláusula 4: Contexto de la Organización — Identificar factores internos/externos y partes interesadas (trabajadores, contratas, sindicatos, Inspección de Trabajo).",
        "Cláusula 5: Liderazgo y Participación de los Trabajadores — Compromiso de la alta dirección y mecanismo de consulta real (Art. 34-39 LPRL: Delegados de Prevención y Comité de SST).",
        "Cláusula 6: Planificación — Identificación sistemática de peligros, evaluación de riesgos laborales y oportunidades de mejora (6.1.2). Gestión del cambio (6.1.3).",
        "Cláusula 7: Apoyo — Recursos, competencias acreditadas (formación Art. 19 LPRL), toma de conciencia y comunicación interna/externa.",
        "Cláusula 8: Operación — 8.1.2: Jerarquía de controles (Eliminación > Sustitución > Controles de ingeniería > Señalización/organización > EPIs). 8.1.4: Gestión de contratistas y compras (CAE - RD 171/2004). 8.2: Preparación y respuesta ante emergencias (Art. 20 LPRL).",
        "Cláusula 9: Evaluación del Desempeño — Seguimiento e indicadores de accidentabilidad (IF, IG, IS), evaluación de cumplimiento legal (9.1.2) y Auditoría Interna (9.2).",
        "Cláusula 10: Mejora — Investigación de incidentes y accidentes, gestión de no conformidades y acciones correctivas (ciclo PHVA / PDCA)."
      ],
      aplicacionPractica: "En España, una empresa certificada en ISO 45001 tiene ya cubierto el 80% de los requisitos del Plan de Prevención (Art. 16 LPRL), pero ¡ATENCIÓN!: la certificación ISO 45001 NO sustituye a la Auditoría Legal Obligatoria del RD 39/1997, aunque facilita enormemente su aprobación."
    },
    {
      id: "iso-14001",
      codigo: "ISO 14001:2015",
      nombre: "Sistemas de Gestión Ambiental (SGA)",
      icono: "🌱",
      alcance: "La norma ambiental por excelencia. Imprescindible en saneamiento urbano, depuradoras (EDAR), plantas de compostaje, vertederos y recogida de residuos (RSU).",
      estructura: "Estructura idéntica a ISO 45001 (Anexo SL), facilitando la integración en un único Manual SIG (Seguridad + Medio Ambiente).",
      clausulasClave: [
        "Aspectos e Impactos Ambientales (Cláusula 6.1.2): Identificar aspectos (causas: vertido de aguas residuales, emisión de gases $H_2S$/metano, lixiviados de basura, aceites hidráulicos) e impactos (efectos: contaminación de cauces, olores, cambio climático).",
        "Perspectiva de Ciclo de Vida: Considerar desde la generación del residuo, transporte en camión compactador, tratamiento, valorización y disposición final.",
        "Requisitos Legales Ambientales: Ley 7/2022 de Residuos y Suelos Contaminados para una Economía Circular, autorizaciones ambientales integradas (AAI) y autorizaciones de vertido (EDAR).",
        "Control Operacional Ambiental (8.1): Planes de gestión de lodos de depuración, protocolos ante vertidos accidentales de hidrocarburos en talleres de camiones."
      ],
      aplicacionPractica: "En concesionarias como FCC, PreZero o Urbaser, los Técnicos de PRL suelen trabajar codo a codo con los Técnicos de Calidad y Medio Ambiente bajo la figura de 'Técnico de QHSE' (Quality, Health, Safety & Environment)."
    },
    {
      id: "iso-39001",
      codigo: "ISO 39001:2013",
      nombre: "Sistemas de Gestión de la Seguridad Vial Laboral (RTS - Road Traffic Safety)",
      icono: "🚛",
      alcance: "La norma específica para flotas de transporte y servicios urbanos. Vital para flotas de camiones compactadores, barredoras, cubas de agua y furgonetas de inspección.",
      estructura: "Diseñada para reducir muertes y lesiones graves por accidentes de tráfico laborales (accidentes 'en misión' y accidentes 'in itinere').",
      clausulasClave: [
        "Factores de Exposición al Riesgo Vial: Distancia recorrida, volumen de tráfico en ruta, turnos nocturnos, condiciones climáticas.",
        "Factores de Riesgo de Seguridad Vial: Velocidad adecuada (máx. 30 km/h con operarios en estribos o casco urbano), cinturón de seguridad, alcohol y drogas (cero tolerancia en profesionales), fatiga y tiempos de descanso.",
        "Mantenimiento Seguro de Flota: Tacógrafos, frenos ABS, avisadores acústicos y cámaras de marcha atrás en camiones, neumáticos y visibilidad de cabina.",
        "Investigación de Siniestros Viales: Análisis de alcances, salidas de vía, golpes en maniobras de aproximación a contenedores y atropellos."
      ],
      aplicacionPractica: "Las licitaciones de limpieza viaria y recogida de basuras otorgan alta puntuación técnica a las empresas que acreditan ISO 39001 junto a ISO 45001."
    },
    {
      id: "iso-9001",
      codigo: "ISO 9001:2015",
      nombre: "Sistemas de Gestión de la Calidad (SGC)",
      icono: "🎯",
      alcance: "Estándar base del comercio internacional para garantizar la calidad del servicio, control de procesos y satisfacción de clientes y ciudadanos.",
      estructura: "Misma estructura de alto nivel (Anexo SL).",
      clausulasClave: [
        "Enfoque Basado en Procesos: Mapa de procesos estratégicos, operativos (recogida, limpieza, mantenimiento) y de soporte (PRL, compras, RRHH).",
        "Pensamiento Basado en Riesgos: Prevención de fallos operativos y desviaciones en el servicio público.",
        "Satisfacción del Cliente: Cumplimiento de los Pliegos de Prescripciones Técnicas del Ayuntamiento y encuestas ciudadanas."
      ],
      aplicacionPractica: "Completa la tríada del Sistema Integrado de Gestión (SIG): Calidad (9001) + Medio Ambiente (14001) + Seguridad y Salud (45001)."
    },
    {
      id: "iso-19011",
      codigo: "ISO 19011:2018",
      nombre: "Directrices para la Auditoría de Sistemas de Gestión",
      icono: "🔍",
      alcance: "La 'Biblia' del auditor. Fija la metodología, principios y cualificación para realizar auditorías internas y auditorías a contratas y proveedores.",
      estructura: "Principios de auditoría, gestión del programa de auditoría, realización de la auditoría y competencia de los auditores.",
      clausulasClave: [
        "7 Principios del Auditor: 1) Integridad, 2) Presentación imparcial, 3) Debido cuidado profesional, 4) Confidencialidad, 5) Independencia, 6) Enfoque basado en evidencia, 7) Enfoque basado en riesgos.",
        "Fases de la Auditoría: Plan de auditoría -> Reunión de apertura -> Muestreo y entrevistas -> Recopilación de evidencias (hallazgos) -> Clasificación de desviaciones (No Conformidad Mayor, Menor u Observación) -> Reunión de cierre -> Informe de auditoría.",
        "No Conformidad (NC): Incumplimiento de un requisito especificado (legal, de la norma ISO o del propio procedimiento de la empresa)."
      ],
      aplicacionPractica: "Como profesional de 20 años de experiencia, aplicar ISO 19011 te posiciona inmediatamente como Auditor Interno o Responsable de Auditorías de Seguridad."
    }
  ],

  normasEuropeasUneEn: [
    {
      categoria: "🚜 Maquinaria, Vehículos y Camiones de Residuos",
      icono: "🚛",
      normas: [
        {
          codigo: "UNE-EN 1501 (Partes 1 a 5)",
          nombre: "Vehículos de recogida de residuos y sus dispositivos de elevación asociados - Requisitos de seguridad y de diseño",
          icono: "🚛",
          relevancia: "⭐⭐⭐⭐⭐ LA NORMA REINA DE TU SECTOR",
          detalles: [
            "Parte 1: Vehículos de carga trasera (los camiones compactadores urbanos habituales).",
            "Parte 2: Vehículos de carga lateral (sistema automatizado con brazo mecánico).",
            "Parte 3: Vehículos de carga frontal.",
            "Parte 4: Requisitos para el ruido emitido.",
            "Parte 5: Dispositivos de elevación de contenedores (lifters/eleva-contenedores)."
          ],
          requisitosTecnicosClave: [
            "Pulsadores de Parada de Emergencia tipo seta: Situados a ambos lados de la tolva trasera y accesibles inmediatamente en caso de atrapamiento.",
            "Estribos traseros (reposapiés): Deben tener sensores de presencia que impidan superar los 30 km/h de velocidad y bloqueen automáticamente la marcha atrás si hay un operario sobre ellos.",
            "Distancias de seguridad y rejas protectoras: Evitan que los miembros superiores alcancen la pala prensadora (mínimo según UNE-EN ISO 13857).",
            "Cámara y avisador acústico de marcha atrás: Obligatorios para eliminar puntos ciegos en la aproximación.",
            "Mando bimanual o pulsador sostenido (hombre muerto) para operaciones de mantenimiento o vaciado de tolva."
          ]
        },
        {
          codigo: "UNE-EN ISO 12100:2012",
          nombre: "Seguridad de las máquinas - Principios generales para el diseño - Apreciación y reducción del riesgo",
          icono: "⚙️",
          relevancia: "Norma armonizada Tipo A bajo Directiva de Máquinas 2006/42/CE (Reglamento UE 2023/1230)",
          detalles: [
            "Metodología en tres etapas para eliminar riesgos en máquinas:",
            "1. Prevención intrínseca en el diseño (geometría, esfuerzos, materiales).",
            "2. Medidas de protección técnica y resguardos complementarios (rejas, barreras fotoeléctricas).",
            "3. Información para el uso (manual de instrucciones, advertencias, señalización)."
          ],
          requisitosTecnicosClave: [
            "Base técnica obligatoria para evaluar cualquier máquina industrial (rototamices en EDAR, cintas transportadoras en plantas de triaje, prensas de residuos)."
          ]
        },
        {
          codigo: "UNE-EN ISO 13857:2020",
          nombre: "Distancias de seguridad para impedir que se alcancen zonas peligrosas con los miembros superiores e inferiores",
          icono: "📏",
          relevancia: "Norma técnica armonizada de distancias mínimas",
          detalles: [
            "Tablas antropométricas que fijan a qué distancia exacta debe colocarse una baranda, malla o resguardo para que una persona no pueda meter la mano o el pie en un engranaje o en la tolva de compactación.",
            "Distingue entre riesgo bajo y riesgo alto (por ejemplo, partes mecánicas cortantes o aprisionadoras)."
          ],
          requisitosTecnicosClave: [
            "Si la abertura de una reja es de 20 mm, la distancia a la zona de peligro debe ser mínimo de 120 mm. Crucial para homologaciones de máquinas y peritajes de accidentes."
          ]
        },
        {
          codigo: "UNE-EN ISO 13849-1:2016",
          nombre: "Seguridad de las máquinas - Partes de los sistemas de mando relativas a la seguridad (SRP/CS)",
          icono: "🎛️",
          relevancia: "Performance Level (PL a, b, c, d, e)",
          detalles: [
            "Evalúa la fiabilidad de los circuitos de seguridad (relés de seguridad, fotocélulas, finales de carrera, setas de parada).",
            "Un fallo eléctrico simple no debe anular la función de seguridad. En paradas de camiones de basura o prensas se exige típicamente PL d o PL e (el nivel más exigente contra fallos)."
          ],
          requisitosTecnicosClave: [
            "Evita el típico accidente donde el cable de la seta de parada se corta y la máquina sigue funcionando."
          ]
        }
      ]
    },

    {
      categoria: "🦺 Equipos de Protección Individual (EPIs - Reglamento UE 2016/425)",
      icono: "🦺",
      normas: [
        {
          codigo: "UNE-EN ISO 20471:2013",
          nombre: "Ropa de señalización de alta visibilidad - Métodos de ensayo y requisitos",
          icono: "🦺",
          relevancia: "OBLIGATORIA para trabajo en vía pública (recolección, limpieza viaria)",
          detalles: [
            "Divide la ropa en 3 Clases según la superficie mínima en m² de material visible:",
            "Clase 1: Mínimo 0,14 m² de fondo fluorescente y 0,10 m² de material retrorreflectante (riesgo bajo, vías lentas).",
            "Clase 2: Mínimo 0,50 m² fluorescente y 0,13 m² retrorreflectante (chalecos habituales).",
            "Clase 3: Mínimo 0,80 m² fluorescente y 0,20 m² retrorreflectante (el nivel máximo: conjunto completo de pantalón + chaqueta/polo con bandas en torso y extremidades)."
          ],
          requisitosTecnicosClave: [
            "En Recolección Nocturna de RSU en calzada, los pliegos y evaluaciones de riesgos EXIGEN Clase 3.",
            "Colores certificados: Amarillo fluorescente, Naranja-rojo fluorescente o Rojo fluorescente.",
            "El material fluorescente funciona de día y al atardecer; las bandas retrorreflectantes reflejan la luz de los faros de los coches de noche."
          ]
        },
        {
          codigo: "UNE-EN 388:2016+A1:2018",
          nombre: "Guantes de protección contra riesgos mecánicos",
          icono: "🧤",
          relevancia: "Imprescindible contra cortes de vidrio y pinchazos de jeringas en residuos",
          detalles: [
            "Se identifica con un pictograma de escudo con un código de 4 a 6 dígitos alfanuméricos:",
            "1º dígito (a): Resistencia a la Abrasión (niveles 1 a 4).",
            "2º dígito (b): Resistencia al Corte por cuchilla - Coup Test (niveles 1 a 5).",
            "3º dígito (c): Resistencia al Rasgado (niveles 1 a 4).",
            "4º dígito (d): Resistencia a la Perforación / Punzonamiento (niveles 1 a 4). ¡Vital contra clavos!",
            "5ª letra (e): Resistencia al Corte TDM según ISO 13997 (niveles A, B, C, D, E, F - F es máxima resistencia).",
            "6ª letra (f): Protección contra Impacto (letra P si supera el ensayo)."
          ],
          requisitosTecnicosClave: [
            "Para residuos urbanos: Se buscan guantes con nivel 4 en punzonamiento (d) y nivel E/F en corte (e), frecuentemente con inserciones de aramida/Kevlar o malla metálica interna en dedos para prevenir pinchazos de agujas hipodérmicas."
          ]
        },
        {
          codigo: "UNE-EN ISO 20345:2022",
          nombre: "Calzado de seguridad para uso profesional",
          icono: "🥾",
          relevancia: "Códigos de protección obligatorios en campo",
          detalles: [
            "Puntera de seguridad obligatoria: Resistente a impacto de 200 Julios y compresión de 15 kN.",
            "Códigos clave:",
            "SB: Seguridad básica (puntera 200 J).",
            "S1: SB + trasera cerrada + antiestático (A) + absorción de energía en talón (E) + suela resistente a hidrocarburos (FO).",
            "S1P: S1 + plantilla antiperforación (P).",
            "S2: S1 + empeine resistente a la penetración y absorción de agua (WPA / WRU).",
            "S3: S2 + plantilla antiperforación (P) + suela con resaltes/tacos.",
            "S4 y S5: Calzado completo de polímero o goma (botas impermeables). S5 incluye plantilla antiperforación."
          ],
          requisitosTecnicosClave: [
            "En Recolección de Residuos: Se exige mínimo S3 (cuero hidrófugo, plantilla antiperforación metálica o textil y suela con tacos antideslizantes SRC).",
            "En Saneamiento / Colectores / EDAR: Bota alta de agua S5 con plantilla antiperforación y suela resistente a grasas y aguas fecales."
          ]
        },
        {
          codigo: "UNE-EN 374 (Partes 1 a 5)",
          nombre: "Guantes de protección contra productos químicos peligrosos y microorganismos",
          icono: "🧪",
          relevancia: "Obligatorio frente a riesgo biológico (RD 664/1997) y químico (RD 374/2001)",
          detalles: [
            "Parte 1: Terminología y requisitos de prestaciones químicas (Tipo A, B o C según tiempo de paso de solventes/ácidos).",
            "Parte 5: Protección contra microorganismos (bacterias, hongos y VIRUS según ensayo ISO 16604 bacteriophage)."
          ],
          requisitosTecnicosClave: [
            "En saneamiento y fosas sépticas, el guante debe estar certificado obligatoriamente con el pictograma biológico y el ensayo VIRUS contra hepatitis y patógenos entéricos."
          ]
        },
        {
          codigo: "UNE-EN 361 y UNE-EN 795",
          nombre: "Sistemas anticaídas en altura: Arneses (EN 361) y Dispositivos de anclaje (EN 795)",
          icono: "🧗",
          relevancia: "Obligatorio a partir de 2 metros (RD 2177/2004) y cubiertas de naves",
          detalles: [
            "UNE-EN 361: Arnés anticaídas de cuerpo entero. Único EPI homologado para detener una caída (puntos de anclaje identificados con letra 'A' o dos semicírculos 'A/2').",
            "UNE-EN 358: Cinturones de posicionamiento y sujeción (¡PROHIBIDO usarlos para frenar caídas!).",
            "UNE-EN 795: Dispositivos de anclaje:",
            "  - Tipo A: Anclajes estructurales fijos (cáncamos en hormigón/acero).",
            "  - Tipo B: Anclajes provisionales transportables (trípodes de rescate en pozos).",
            "  - Tipo C: Líneas de anclaje horizontales flexibles (cables de acero).",
            "  - Tipo D: Líneas de anclaje horizontales rígidas (rieles metálicos).",
            "  - Tipo E: Anclajes de peso muerto."
          ],
          requisitosTecnicosClave: [
            "Para mantenimiento de filtros en cubiertas frágiles: Línea de vida UNE-EN 795 Tipo C + arnés UNE-EN 361 + absorbedor de energía UNE-EN 355."
          ]
        },
        {
          codigo: "UNE-EN 149 y UNE-EN 14387",
          nombre: "Protección respiratoria: Mascarillas de partículas (EN 149) y Filtros antigás (EN 14387)",
          icono: "😷",
          relevancia: "Polvos orgánicos, bioaerosoles en EDAR y gases tóxicos",
          detalles: [
            "UNE-EN 149: Mascarillas autofiltrantes contra partículas (FFP1: 80% retención; FFP2: 94% retención; FFP3: 99% retención). En bioaerosoles con bacterias/legionella se exige mínimo FFP2 o FFP3.",
            "UNE-EN 14387: Filtros para gases y vapores (códigos de colores universales):",
            "  - Tipo A (Marrón): Vapores orgánicos (disolventes, hidrocarburos).",
            "  - Tipo B (Gris): Gases inorgánicos ($Cl_2$, $H_2S$, $HCN$).",
            "  - Tipo E (Amarillo): Dióxido de azufre ($SO_2$) y gases ácidos.",
            "  - Tipo K (Verde): Amoníaco ($NH_3$) y derivados.",
            "  - Filtro combinado ABEK-P3: Protección total para alcantarillado e industria química."
          ],
          requisitosTecnicosClave: [
            "Regla de oro: NUNCA usar máscaras filtrantes en espacios confinados con menos del 19,5% de oxígeno. En falta de oxígeno, solo equipos autónomos o semiautónomos (UNE-EN 137 / 14593)."
          ]
        }
      ]
    },

    {
      categoria: "🔬 Higiene Industrial, Químicos y Espacios Confinados",
      icono: "🧪",
      normas: [
        {
          codigo: "UNE-EN 689:2019",
          nombre: "Exposición en el lugar de trabajo - Medición de la exposición por inhalación de agentes químicos",
          icono: "📊",
          relevancia: "⭐⭐⭐⭐⭐ La norma reina de Higiene Industrial en la UE",
          detalles: [
            "Establece la estrategia estadística obligatoria para verificar si la concentración de un agente químico cumple con el Valor Límite Ambiental (VLA-ED o VLA-EC) del INSST.",
            "Define Grupos de Exposición Similar (GES / SEG).",
            "Fase 1: Prueba preliminar (3 a 5 mediciones). Si todas son menores al 10% del VLA, se declara conformidad.",
            "Fase 2: Prueba estadística completa si las concentraciones son moderadas (cálculo del percentil 95 con límite de confianza del 70%).",
            "Fija la periodicidad de remensura: cada 12 meses (si exposición > 50% VLA), cada 24 meses o cada 36 meses."
          ],
          requisitosTecnicosClave: [
            "En peritajes judiciales e informes ante la Inspección de Trabajo por exposición a sílice, benceno o vapores orgánicos, si la medición no sigue la UNE-EN 689, carece de validez legal en España."
          ]
        },
        {
          codigo: "UNE-EN 60079-29-1 y UNE-EN 50271",
          nombre: "Atmósferas explosivas (ATEX) - Detectores de gas inflamable y software de seguridad",
          icono: "🧯",
          relevancia: "Medición obligatoria en pozos, colectores y digestores de EDAR",
          detalles: [
            "Requisitos de funcionamiento y calibración periódica de los explosímetros y multidetectores portátiles (4 gases: $O_2$, LEL, $H_2S$, $CO$).",
            "Garantiza que el sensor no se envenene en presencia de siliconas o azufre y que active alarmas sonoras y lumínicas instantáneas al alcanzar el 10% y 20% del LEL/LIE."
          ],
          requisitosTecnicosClave: [
            "Ensayo 'Bump Test' diario antes de entrar al confinamiento y calibración certificada periódica."
          ]
        }
      ]
    }
  ],

  tablaEquivalencias: [
    { concepto: "Gestión de Seguridad", ar: "Ley 19.587 / Dec 351/79 (SST)", es: "Ley 31/1995 (LPRL) + RD 39/1997", norma: "ISO 45001:2018 (Cláusula 4-10)" },
    { concepto: "Medio Ambiente y Residuos", ar: "Ley 24.051 (Residuos Peligrosos)", es: "Ley 7/2022 (Economía Circular) + RD 952/1997", norma: "ISO 14001:2015 (Aspectos e Impactos)" },
    { concepto: "Seguridad Vial Flotas", ar: "Ley de Tránsito 24.449", es: "DGT + Planes de Movilidad Vial", norma: "ISO 39001:2013 (RTS)" },
    { concepto: "Camiones Compactadores", ar: "Norma IRAM / Especificación interna", es: "Directiva Máquinas + RD 1215/1997", norma: "UNE-EN 1501-1 a 5 (Estribos, tolva, setas)" },
    { concepto: "Ropa Alta Visibilidad", ar: "IRAM 3859", es: "RD 773/1997 (EPI)", norma: "UNE-EN ISO 20471 (Clase 1, 2 y 3)" },
    { concepto: "Guantes Corte/Pinchazo", ar: "IRAM 3607", es: "RD 773/1997 (EPI)", norma: "UNE-EN 388 (Abrasión, Corte, Rasgado, Perforación)" },
    { concepto: "Calzado de Seguridad", ar: "IRAM 3610", es: "RD 773/1997 (EPI)", norma: "UNE-EN ISO 20345 (SB, S1, S1P, S2, S3, S5)" },
    { concepto: "Arnés y Líneas de Vida", ar: "IRAM 3622-1 / 3622-2", es: "RD 2177/2004 (Altura)", norma: "UNE-EN 361 (Arnés) + UNE-EN 795 (Anclajes)" },
    { concepto: "Evaluación Química", ar: "Res. SRT 295/03 (CMP / CMP-CPT)", es: "RD 374/2001 (VLA-ED / VLA-EC INSST)", norma: "UNE-EN 689:2019 (Estrategia estadística)" }
  ],

  checklistAuditoria: [
    { id: 1, requisito: "Cláusula 5.4 ISO 45001: ¿Existe evidencia documentada de la consulta y participación efectiva de los Delegados de Prevención y Comité de SST?", categoria: "Liderazgo y Consulta", normaRef: "ISO 45001 / Art. 34-39 LPRL" },
    { id: 2, requisito: "Cláusula 6.1 ISO 45001: ¿Se han evaluado tanto los RIESGOS de SST como las OPORTUNIDADES de mejora preventiva y operacional?", categoria: "Planificación", normaRef: "ISO 45001 Cl. 6.1" },
    { id: 3, requisito: "Cláusula 8.1.2 ISO 45001: ¿Se aplica rigurosamente la jerarquía de controles (Eliminación > Sustitución > Controles de Ingeniería > Señalización > EPIs)?", categoria: "Control Operacional", normaRef: "ISO 45001 / Art. 15 LPRL" },
    { id: 4, requisito: "Cláusula 8.1.4 ISO 45001: ¿Se exige y audita la Coordinación de Actividades Empresariales (CAE) con contratas y subcontratas en las instalaciones?", categoria: "Contratistas (CAE)", normaRef: "ISO 45001 / RD 171/2004" },
    { id: 5, requisito: "UNE-EN 1501-1 (Camiones RSU): ¿Cuentan todos los camiones compactadores con setas de emergencia laterales, estribos con sensor de presencia (<30 km/h) y cámara trasera operativa?", categoria: "Maquinaria RSU", normaRef: "UNE-EN 1501-1 / RD 1215/1997" },
    { id: 6, requisito: "UNE-EN ISO 20471: ¿Dispone todo el personal de recogida nocturna y limpieza viaria de ropa de alta visibilidad certificada Clase 3?", categoria: "EPIs Vía Pública", normaRef: "UNE-EN ISO 20471 Clase 3" },
    { id: 7, requisito: "UNE-EN 388: ¿Disponen los peones de recogida de guantes con nivel de resistencia a la perforación 4 y alta resistencia al corte para evitar pinchazos de agujas?", categoria: "EPIs Mecánicos", normaRef: "UNE-EN 388 (Nivel 4 perforación)" },
    { id: 8, requisito: "UNE-EN 689: ¿Están justificadas las mediciones higiénicas de agentes químicos (gases de saneamiento, vapores, polvos) mediante la metodología estadística europea?", categoria: "Higiene Industrial", normaRef: "UNE-EN 689 / RD 374/2001" },
    { id: 9, requisito: "ISO 14001 Cl. 6.1.2: ¿Están identificados los aspectos e impactos ambientales significativos (vertidos de lixiviados, aceites, fugas de lodos en EDAR)?", categoria: "Medio Ambiente", normaRef: "ISO 14001:2015" },
    { id: 10, requisito: "Cláusula 9.2 ISO 45001 & RD 39/1997: ¿Se realizan auditorías internas periódicas y se dispone de la Auditoría Legal Externa obligatoria (cada 2 o 4 años)?", categoria: "Auditoría", normaRef: "ISO 19011 / RD 39/1997 Cap. V" }
  ],

  resumenCuadernillo: `=== GUÍA SÍNTESIS DE NORMAS ISO Y NORMAS EUROPEAS (UNE-EN) EN PRL ===
(Para copiar en el cuadernillo de estudio y repaso profesional)

1. JERARQUÍA JURÍDICA Y TÉCNICA EN ESPAÑA:
   * 1º Leyes y Reales Decretos (Ley 31/1995, RD 39/1997, RD 773/1997, RD 1215/1997): OBLIGATORIOS por Ley. Sanción directa por Inspección de Trabajo (LISOS).
   * 2º Normas Armonizadas Europeas (UNE-EN): Presunción de conformidad con directivas de la UE (Marcado CE de máquinas y EPIs). Art. 5 RD 39/1997 obliga a usarlas si no hay norma legal específica.
   * 3º Normas Internacionales ISO (45001, 14001, 9001, 39001): Estándares de gestión con estructura Anexo SL. Voluntarias, pero OBLIGATORIAS por contrato en licitaciones de Ayuntamientos (concesionarias FCC, PreZero, Urbaser).

2. NORMAS ISO CLAVE:
   * ISO 45001:2018 (Seguridad y Salud en el Trabajo): Ciclo PHVA. Cláusula 5.4 (consulta trabajadores = Delegados LPRL), 6.1.2 (identificación peligros), 8.1.2 (jerarquía de control), 8.1.4 (compras y contratas = CAE RD 171/2004), 9.2 (auditoría interna).
   * ISO 14001:2015 (Medio Ambiente): Clave en EDAR y RSU. Aspectos (causa) e Impactos (efecto: vertidos, olores, lixiviados). Ley 7/2022 de Residuos.
   * ISO 39001:2013 (Seguridad Vial Laboral): Flotas de camiones compactadores y barredoras. Tacógrafos, descansos, velocidad máx. 30 km/h en estribos, cero alcohol/drogas.
   * ISO 19011:2018 (Directrices de Auditoría): 7 principios del auditor. Hallazgos, No Conformidades (NC) y acciones correctivas.

3. NORMAS EUROPEAS (UNE-EN) ESENCIALES PARA EL SECTOR:
   * UNE-EN 1501 (Partes 1 a 5): Camiones recolectores de basura. Paradas de emergencia en tolva, estribos con sensor (<30 km/h y bloqueo marcha atrás), cámara trasera.
   * UNE-EN ISO 12100: Diseño seguro de máquinas y apreciación del riesgo (Tipo A).
   * UNE-EN ISO 13857: Distancias de seguridad para impedir alcance de zonas peligrosas con miembros superiores e inferiores.
   * UNE-EN ISO 20471: Ropa de alta visibilidad. Clase 3 obligatoria en recolección nocturna en calzada (>0,80 m² fluorescente + >0,20 m² retrorreflectante).
   * UNE-EN 388: Guantes contra riesgos mecánicos (Abrasión 1-4, Corte 1-5, Rasgado 1-4, Perforación 1-4, Corte TDM A-F, Impacto P). En basura: nivel 4 perforación contra jeringas y vidrios.
   * UNE-EN ISO 20345: Calzado de seguridad. S3 (cuero hidrófugo + puntera 200J + plantilla antiperforación + suela con tacos) o S5 (bota de agua completa con plantilla P para depuradoras y alcantarillado).
   * UNE-EN 374: Guantes químicos y microorganismos (bacterias y virus). Obligatorio en EDAR y saneamiento.
   * UNE-EN 361 / UNE-EN 795: Arneses de cuerpo entero y dispositivos de anclaje (Tipo A fijos, B trípodes pozos, C líneas de vida cable, D rieles).
   * UNE-EN 149 / 14387: Mascarillas autofiltrantes FFP1/FFP2/FFP3 y filtros de gases (A orgánicos marrón, B inorgánicos gris, E ácidos amarillo, K amoníaco verde -> filtro mixto ABEK-P3).
   * UNE-EN 689:2019: Estrategia estadística para evaluar agentes químicos en el aire y verificar VLA del INSST. Base técnica de peritajes judiciales en España.`
};
