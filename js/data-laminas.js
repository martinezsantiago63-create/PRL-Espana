const LAMINAS_DIDACTICAS = [
  {
    id: "actos-condiciones",
    titulo: "Actos Inseguros vs. Condiciones Inseguras",
    subtitulo: "Identificación primaria de riesgos en el lugar de trabajo",
    categoria: "Seguridad y Prevención",
    imagen: "assets/infografia_actos_condiciones.png",
    resumen: "El 85% de los accidentes laborales son causados por actos inseguros o la combinación de una condición no corregida con una acción imprudente. En España, la Inspección de Trabajo (ITSS) evalúa minuciosamente ambas causas.",
    columnas: {
      acto: {
        titulo: "⚠️ ACTO INSEGURO (Comportamiento Humano)",
        puntos: [
          "No utilizar EPIs asignados (casco, gafas, guantes, calzado).",
          "Anular o puentear dispositivos de seguridad en maquinaria.",
          "Operar equipos o vehículos sin autorización o formación previa (Art. 19 LPRL).",
          "Realizar trabajos de mantenimiento con máquinas en movimiento.",
          "Adoptar posturas peligrosas o levantar cargas sin técnica ergonómica.",
          "Trabajar bajo los efectos de fatiga, prisas o distracciones."
        ]
      },
      condicion: {
        titulo: "🚨 CONDICIÓN INSEGURA (Entorno / Equipos)",
        puntos: [
          "Falta de protecciones o resguardos en partes móviles de máquinas (RD 1215/97).",
          "Instalaciones eléctricas defectuosas, cables expuestos o sin puesta a tierra.",
          "Falta de orden, limpieza y suelos resbaladizos u obstruidos (RD 486/97).",
          "Iluminación insuficiente o deslumbramientos en zonas de paso.",
          "Atmósferas peligrosas o falta de ventilación en pozos/alcantarillados.",
          "Ruido elevado continuo o vibraciones sin atenuación en origen."
        ]
      }
    },
    claves: [
      "No es solo sancionar, es corregir la causa raíz.",
      "El empresario está obligado a garantizar condiciones seguras (Art. 14 LPRL 31/1995).",
      "El trabajador debe usar adecuadamente los medios y EPIs facilitados (Art. 29 LPRL)."
    ]
  },
  {
    id: "epis-uso-cuidado",
    titulo: "Equipos de Protección Individual (EPIs / EPP)",
    subtitulo: "Requisitos de selección, uso y mantenimiento según RD 773/1997",
    categoria: "Equipos de Protección",
    imagen: "assets/infografia_epis_uso_cuidado.png",
    resumen: "Los EPIs son la última barrera defensiva del trabajador. Solo deben usarse cuando los riesgos no se hayan podido evitar o limitar por medios de protección colectiva.",
    columnas: {
      acto: {
        titulo: "📋 OBLIGACIONES DEL EMPRESARIO",
        puntos: [
          "Entregar EPIs de forma gratuita con marcado CE obligatorio.",
          "Determinar los puestos de trabajo que requieren uso de EPI.",
          "Proporcionar instrucciones claras y manual en castellano.",
          "Garantizar el mantenimiento, reparación y sustitución periódica.",
          "Formar e informar a los trabajadores sobre el uso correcto."
        ]
      },
      condicion: {
        titulo: "👷 OBLIGACIONES DEL TRABAJADOR",
        puntos: [
          "Utilizar y cuidar correctamente los EPIs asignados.",
          "Colocar el EPI en el lugar designado tras su uso.",
          "Informar de inmediato de cualquier defecto o anomalía.",
          "No modificar ni alterar los componentes del equipo.",
          "Asistir a las sesiones formativas sobre colocación y ajuste."
        ]
      }
    },
    claves: [
      "El EPI es de uso PERSONAL e intransferible.",
      "Siempre prevalece la Protección Colectiva (redes, barandillas) sobre la Individual.",
      "En España, los EPIs deben llevar la declaración de conformidad CE."
    ]
  },
  {
    id: "espacios-confinados",
    titulo: "Protocolo de Seguridad en Espacios Confinados",
    subtitulo: "Prevención de asfixia, intoxicación y explosiones en saneamiento",
    categoria: "Saneamiento y Pozos",
    imagen: "assets/infografia_espacios_confinados.png",
    resumen: "El trabajo en pozos, arquetas, galerías y depósitos de saneamiento es de alto riesgo. El sulfuro de hidrógeno (H2S), metano (CH4) y la deficiencia de oxígeno son los principales asesinos invisibles.",
    columnas: {
      acto: {
        titulo: "📏 MEDICIONES DE ATMÓSFERA OBLIGATORIAS",
        puntos: [
          "Oxígeno (O₂): Debe estar entre 19,5% y 23,5%. Menos de 19,5% es asfixiante.",
          "Sulfuro de Hidrógeno (H₂S): Máximo 5 ppm. A 100 ppm anula el olfato.",
          "Monóxido de Carbono (CO): Máximo 20 ppm (VLA-ED).",
          "Metano (CH₄) / LEL: Máximo 10% del LEL (Límite Inferior de Explosividad)."
        ]
      },
      condicion: {
        titulo: "🛡️ PASOS OBLIGATORIOS ANTES DE ENTRAR",
        puntos: [
          "Cumplimentar el Permiso de Trabajo de Entrada (PTE).",
          "Ventilación forzada continuada mínimo 15 minutos antes y durante el trabajo.",
          "Medición continua con multigas calibrado en el pecho del trabajador.",
          "Trípode de rescate, enclavamiento y arnés de seguridad con anticaídas.",
          "Presencia permanente de RECURSO PREVENTIVO en el exterior."
        ]
      }
    },
    claves: [
      "REGLA DE ORO: Jamás entrar solo. El 80% de los fallecidos son rescatadores improvisados.",
      "Si la alarma del multigas suena: EVACUACIÓN INMEDIATA.",
      "El H2S huele a huevos podridos a concentraciones bajas, pero adormece el olfato en dosis altas."
    ]
  },
  {
    id: "trabajos-altura",
    titulo: "Trabajos en Altura y Uso de Andamios",
    subtitulo: "Prevención de caídas a distinto nivel según RD 217/2004 y RD 1215/1997",
    categoria: "Seguridad en Altura",
    imagen: "assets/infografia_trabajos_altura.png",
    resumen: "Se considera trabajo en altura toda tarea que se ejecute a más de 2 metros de sobre el nivel del suelo. Las caídas en altura constituyen la primera causa de mortalidad en el sector de la construcción e industria en España.",
    columnas: {
      acto: {
        titulo: "⚠️ PROTECCIÓN COLECTIVA OBLIGATORIA",
        puntos: [
          "Barandillas rígidas a 90 cm con plinto (rodapié) y listón intermedio.",
          "Redes de seguridad anticaídas bien ancladas y tensionadas.",
          "Andamios certificados con marcado CE y montaje por personal cualificado.",
          "Líneas de vida horizontales y verticales fijas o temporales homologadas."
        ]
      },
      condicion: {
        titulo: "🛡️ EQUIPOS DE PROTECCIÓN INDIVIDUAL (EPIs)",
        puntos: [
          "Arnés anticaídas completo (EN 361) verificado pre-uso.",
          "Doble elemento de amarre con absorbedor de energía (EN 355).",
          "Conectores y mosquetones de seguridad con cierre automático (EN 362).",
          "Casco de seguridad con barboquejo para evitar caídas del casco."
        ]
      }
    },
    claves: [
      "A partir de 2 metros de altura es OBLIGATORIO el uso de protección anticaídas.",
      "Prevalece la protección colectiva (barandillas, redes) sobre la individual (arnés).",
      "Siempre verificar la distancia libre de caída al instalar una línea de vida."
    ]
  },
  {
    id: "ley-prl-31-1995",
    titulo: "Ley 31/1995 de PRL — Los 9 Principios Preventivos",
    subtitulo: "El pilar fundamental de la Seguridad Laboral en España",
    categoria: "Marco Legal Español",
    imagen: "assets/infografia_ley_prl_31_1995.png",
    resumen: "El artículo 15 de la Ley 31/1995 establece los principios básicos que todo Técnico de Prevención debe aplicar en sus evaluaciones de riesgo y planes de prevención.",
    columnas: {
      acto: {
        titulo: "⚖️ PRINCIPIOS PREVENTIVOS (ART. 15 LPRL)",
        puntos: [
          "1. Evitar los riesgos.",
          "2. Evaluar los riesgos que no se puedan evitar.",
          "3. Combatir los riesgos en su origen.",
          "4. Adaptar el trabajo a la persona (ergonomía).",
          "5. Tener en cuenta la evolución de la técnica.",
          "6. Sustituir lo peligroso por lo que entrañe poco o ningún peligro.",
          "7. Planificar la prevención con un conjunto coherente.",
          "8. Adoptar medidas que antepongan la protección colectiva a la individual.",
          "9. Dar las debidas instrucciones a los trabajadores."
        ]
      },
      condicion: {
        titulo: "🏛️ ESTRUCTURA PREVENTIVA EN LA EMPRESA",
        puntos: [
          "Servicio de Prevención Propio (SPP) o Ajeno (SPA).",
          "Delegados de Prevención (representantes de los trabajadores).",
          "Comité de Seguridad y Salud (empresas de más de 50 trabajadores).",
          "Recurso Preventivo (obligatorio en trabajos de especial riesgo).",
          "Auditorías Preventivas Externas periódicas."
        ]
      }
    },
    claves: [
      "El derecho del trabajador a la protección es INDISPONIBLE.",
      "Art. 21 LPRL: El trabajador puede interrumpir su actividad en caso de riesgo grave e inminente.",
      "Las multas de la ITSS pueden llegar hasta los 900.000 € en faltas muy graves."
    ]
  },
  {
    id: "comparativa-ar-es",
    titulo: "Comparativa Técnica y Normativa: Argentina 🇦🇷 vs. España 🇪🇸",
    subtitulo: "Traducción rápida de conceptos técnicos para el profesional emigrante",
    categoria: "Homologación y Adaptación",
    imagen: "assets/infografia_comparativa_ar_es.png",
    resumen: "Tabla de equivalencias directas entre las instituciones, términos legales y procedimientos de la Argentina y España.",
    columnas: {
      acto: {
        titulo: "🇦🇷 CONCEPTOS ARGENTINA",
        puntos: [
          "SRT (Superintendencia de Riesgos del Trabajo).",
          "ART (Aseguradora de Riesgos del Trabajo).",
          "Ley 19.587 / Ley 24.557.",
          "EPP (Elemento de Protección Personal).",
          "Matafuegos / Extintores.",
          "Relevamiento General de Riesgos (RGR).",
          "Licenciado / Técnico Superior en Higiene y Seguridad."
        ]
      },
      condicion: {
        titulo: "🇪🇸 CONCEPTOS EQUIVALENTES EN ESPAÑA",
        puntos: [
          "INSST (Instituto Nacional de Seguridad y Salud en el Trabajo) e ITSS.",
          "Mutua Colaboradora de la Seguridad Social.",
          "Ley 31/1995 de Prevención de Riesgos Laborales.",
          "EPI (Equipo de Protección Individual - RD 773/97).",
          "Extintores de Incendio (RIPCI - RD 513/2017).",
          "Evaluación de Riesgos Laborales (Art. 16 LPRL).",
          "Técnico Superior de PRL (Máster Universitario Habilitante)."
        ]
      }
    },
    claves: [
      "En España la especialización se divide en 3 áreas: Seguridad, Higiene Industrial y Ergonomía/Psicosociología.",
      "Para ser Técnico Superior en España se exige título universitario oficial + Máster de 60 ECTS.",
      "El primer paso para trabajar legalmente es la Homologación del Título Universitario en el Ministerio de Ciencia e Innovación."
    ]
  }
];
