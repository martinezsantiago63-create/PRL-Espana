const METODOS_INSST = [
  {
    id: "fine",
    nombre: "Método William T. Fine",
    aplicacion: "Evaluación probabilística de riesgos mecánicos, físicos y de accidentes",
    formula: "Grado de Peligrosidad (GP) = Consecuencias (C) × Exposición (E) × Probabilidad (P)",
    parametros: {
      consecuencias: [
        { valor: 100, desc: "Catástrofe (Numerosos fallecidos o daños > 1.000.000 €)" },
        { valor: 40, desc: "Desastre (Varias muertes o daños de 500.000 € a 1.000.000 €)" },
        { valor: 15, desc: "Muy grave (Muerte o daños de 100.000 € a 500.000 €)" },
        { valor: 5, desc: "Grave (Lesión grave, incapacidad o daños de 1.000 € a 100.000 €)" },
        { valor: 1, desc: "Leve (Pequeñas heridas, magulladuras o daños < 1.000 €)" }
      ],
      exposicion: [
        { valor: 10, desc: "Continuamente (varias veces al día)" },
        { valor: 6, desc: "Frecuentemente (una vez al día)" },
        { valor: 3, desc: "Ocasionalmente (de una vez a la semana a una vez al mes)" },
        { valor: 2, desc: "Irregularmente (de una vez al mes a una vez al año)" },
        { valor: 1, desc: "Raramente (se sabe que ocurre)" }
      ],
      probabilidad: [
        { valor: 10, desc: "Es el resultado más probable si se presenta la situación de riesgo" },
        { valor: 6, desc: "Completamente posible (50% de probabilidad)" },
        { valor: 3, desc: "Sería una coincidencia rara" },
        { valor: 1, desc: "Nunca ha sucedido en muchos años" },
        { valor: 0.5, desc: "Prácticamente imposible" }
      ]
    },
    criterios: [
      { rango: "GP > 325", accion: "RIESGO ALTO. Corrección inmediata. Detención de la actividad.", urgencia: "🚨 Inmediata" },
      { rango: "85 < GP ≤ 325", accion: "RIESGO MEDIO. Requiere corrección urgente (en menos de 1 mes).", urgencia: "⚠️ Alta" },
      { rango: "GP ≤ 85", accion: "RIESGO BAJO. Eliminar si es posible, o mantener bajo control.", urgencia: "✅ Regular" }
    ]
  },
  {
    id: "ntp-330",
    nombre: "Evaluación Simplificada de Riesgos (NTP 330 INSST)",
    aplicacion: "Método oficial sugerido por la Guía de Evaluación de Riesgos del INSST",
    formula: "Nivel de Riesgo (NR) = Nivel de Deficiencia (ND) × Nivel de Exposición (NE) × Nivel de Consecuencias (NC)",
    parametros: {
      deficiencia: [
        { valor: 10, desc: "Muy Elevado (Factores de riesgo significativos sin medida preventiva alguna)" },
        { valor: 6, desc: "Elevado (Deficiencias importantes en medidas preventivas)" },
        { valor: 2, desc: "Medio (Deficiencia de escasa importancia)" }
      ],
      exposicion: [
        { valor: 4, desc: "Continuada (Sin interrupción o varias veces en la jornada)" },
        { valor: 3, desc: "Frecuente (Varias veces en la jornada por períodos cortos)" },
        { valor: 2, desc: "Ocasional (Alguna vez en la jornada y por poco tiempo)" },
        { valor: 1, desc: "Esporádica (De manera eventual)" }
      ]
    },
    criterios: [
      { rango: "NR I (4000 a 600)", accion: "Situación crítica. Corrección urgente o suspensión del trabajo.", urgencia: "🚨 Nivel I" },
      { rango: "NR II (500 a 120)", accion: "Corregir y adoptar medidas de control en plazo determinado.", urgencia: "⚠️ Nivel II" },
      { rango: "NR III (100 a 40)", accion: "Mejorar si es posible o justificar la efectividad de la medida.", urgencia: "🟡 Nivel III" },
      { rango: "NR IV (20 a 10)", accion: "No intervenir salvo que un análisis más detallado lo justifique.", urgencia: "🟢 Nivel IV" }
    ]
  },
  {
    id: "vla-quimicos",
    nombre: "Límites de Exposición Profesional (VLA - INSST)",
    aplicacion: "Evaluación de agentes químicos en aire según el Documento VLA del INSST (RD 374/2001)",
    formula: "Concentración Media (ED) ≤ VLA-ED (Valor Límite Ambiental - Exposición Diaria)",
    parametros: {
      definiciones: [
        { norma: "VLA-ED", desc: "Valor Límite Ambiental para Exposición Diaria (8 horas al día, 40h semanales)." },
        { norma: "VLA-EC", desc: "Valor Límite Ambiental para Corta Exposición (15 minutos máximo sin rebasar)." },
        { norma: "VLB", desc: "Valor Límite Biológico (medición en sangre u orina del trabajador)." }
      ],
      ejemplosAgentes: [
        { agente: "Sulfuro de Hidrógeno (H₂S)", vla_ed: "5 ppm (7 mg/m³)", vla_ec: "10 ppm (14 mg/m³)", efecto: "Gas asfixiante tóxico" },
        { agente: "Monóxido de Carbono (CO)", vla_ed: "20 ppm (23 mg/m³)", vla_ec: "100 ppm (115 mg/m³)", efecto: "Hipoxia tisular" },
        { agente: "Cloro (Cl₂)", vla_ed: "-", vla_ec: "0,5 ppm (1,5 mg/m³)", efecto: "Irritante respiratorio severo" },
        { agente: "Sílice Cristalina Respirable", vla_ed: "0,05 mg/m³", vla_ec: "-", efecto: "Cancerígeno / Silicosis" }
      ]
    },
    criterios: [
      { rango: "C > VLA", accion: "Exposición inaceptable. Detener trabajo y adoptar extracción localizada o EPI respiratorio aislante.", urgencia: "🚨 Peligro" }
    ]
  }
];
