const CUADERNILLO = {
  titulo: "MANUAL Y CUADERNILLO DE ESTUDIO PRL ESPAÑA",
  subtitulo: "Guía de campo para Técnico de Prevención de Riesgos Laborales — Argentina → España",
  autor: "Técnico en Higiene y Seguridad Laboral",
  version: "Edición Impresa Completa 2026",
  secciones: [
    {
      titulo: "Capítulo 1: Marco Normativo Español — La Ley 31/1995 de PRL",
      icono: "📜",
      contenido: `LA LEY 31/1995 es la norma marco de la Prevención de Riesgos Laborales en España.

ARTÍCULOS FUNDAMENTALES QUE DEBES MEMORIZAR:
- ART. 14 — Derecho a la protección: Todo trabajador tiene derecho a una protección eficaz en materia de seguridad y salud en el trabajo. La empresa tiene el deber correlativo de protección.
- ART. 15 — Los 9 Principios de la Acción Preventiva:
  1. Evitar los riesgos.
  2. Evaluar los riesgos que no se puedan evitar.
  3. Combatir los riesgos en su origen.
  4. Adaptar el trabajo a la persona (puestos de trabajo, equipos, métodos).
  5. Tener en cuenta la evolución de la técnica.
  6. Sustituir lo peligroso por lo que entrañe poco o ningún peligro.
  7. Planificar la prevención en un conjunto coherente.
  8. Adoptar medidas que antepongan la protección colectiva a la individual.
  9. Dar las debidas instrucciones a los trabajadores.
- ART. 16 — Evaluación de riesgos y Planificación de la Actividad Preventiva.
- ART. 19 — Formación de los trabajadores (mínimo 10h obligatorias dentro de la jornada laboral).
- ART. 21 — Riesgo grave e inminente: El trabajador o sus representantes pueden paralizar la actividad sin represalias.
- ART. 29 — Obligaciones de los trabajadores en materia de prevención.
- ART. 35 — Delegados de Prevención y Comité de Seguridad y Salud.`,
      ejercicios: [
        {
          pregunta: "1.1. Según el Art. 15 de la Ley 31/1995, ¿qué principio de acción preventiva prima sobre los demás?",
          opciones: ["a) La entrega inmediata de EPIs a cada trabajador.", "b) Anteponer la protección colectiva a la individual.", "c) La sanción de actos inseguros sin aviso previo."],
          respuestaCorrecta: "b",
          explicacion: "El principio 8 del Art. 15 establece expresamente anteponer la protección colectiva (ej. barandillas, redes, extracción de aire) a la individual (EPIs)."
        },
        {
          pregunta: "1.2. ¿Qué artículo autoriza la paralización inmediata del trabajo ante un peligro inminente?",
          opciones: ["a) Artículo 14", "b) Artículo 21", "c) Artículo 35"],
          respuestaCorrecta: "b",
          explicacion: "El Art. 21 regula el Riesgo Grave e Inminente, permitiendo detener la actividad sin que la empresa pueda sancionar al trabajador."
        }
      ]
    },
    {
      titulo: "Capítulo 2: Reales Decretos Fundamentales (RDs)",
      icono: "⚖️",
      contenido: `RECONOCIMIENTO Y APLICACIÓN DE REALES DECRETOS CLAVE:

- RD 39/1997 — Reglamento de los Servicios de Prevención (SPP, SPA, Servicio Mancomunado).
- RD 486/1997 — Disposiciones mínimas de seguridad y salud en los LUGARES DE TRABAJO.
- RD 1215/1997 — Utilización por los trabajadores de los EQUIPOS DE TRABAJO (Máquinas y herramientas).
- RD 773/1997 — Utilización por los trabajadores de EQUIPOS DE PROTECCIÓN INDIVIDUAL (EPIs).
- RD 485/1997 — SEÑALIZACIÓN de seguridad y salud en el trabajo.
- RD 374/2001 — Protección frente a los riesgos relacionados con AGENTES QUÍMICOS.
- RD 604/2006 y Guía INSST — Trabajos en ESPACIOS CONFINADOS.
- RD 217/2004 — TRABAJOS EN ALTURA y uso de andamios.
- RD 1299/2006 — Cuadro de ENFERMEDADES PROFESIONALES en la Seguridad Social.

RÉGIMEN DE SANCIONES DE LA INSPECCIÓN DE TRABAJO (ITSS):
- Leves: 40 € a 2.045 €
- Graves: 2.046 € a 40.985 €
- Muy Graves: 40.986 € a 819.780 €`,
      ejercicios: [
        {
          pregunta: "2.1. ¿Qué Real Decreto regula las condiciones y marcado CE obligatorio de los EPIs?",
          opciones: ["a) RD 1215/1997", "b) RD 773/1997", "c) RD 486/1997"],
          respuestaCorrecta: "b",
          explicacion: "El RD 773/1997 es la norma de referencia sobre el uso y mantenimiento de los EPIs en el centro de trabajo."
        }
      ]
    },
    {
      titulo: "Capítulo 3: Protocolo en Espacios Confinados y Saneamiento",
      icono: "⚠️",
      contenido: `PASOS INNEGOCIABLES EN POZOS, ALCANTARILLAS Y ARQUETAS:

1. MEDICIÓN ATMOSFÉRICA PREVIA (Con detector de 4 gases calibrated):
   - Oxígeno (O₂): 19,5% a 23,5%. (Bajo 19,5% = asfixia por deficiencia).
   - Sulfuro de Hidrógeno (H₂S): Máximo 5 ppm (VLA-ED). A 100 ppm anula el nervio olfativo.
   - Monóxido de Carbono (CO): Máximo 20 ppm.
   - Metano / Gases Inflamables (LEL): Máximo 10% del Límite Inferior de Explosividad.

2. VENTILACIÓN FORZADA CONTINUADA:
   - Soplado o extracción limpia durante al menos 15 minutos antes de la entrada.

3. RECURSO PREVENTIVO Y RESCATE EN EXTERIOR:
   - Jamás ingresar sin vigilante exterior equipado con trípode, enclavamiento y arnés conectado al trabajador.
   - Si se produce un desmayo: ¡NUNCA ENTRAR A CIEGAS! Llamar al 112 inmediatamente.`,
      ejercicios: [
        {
          pregunta: "3.1. ¿Cuál es el rango seguro de concentración de Oxígeno para autorizar el ingreso a un pozo?",
          opciones: ["a) 15% a 18%", "b) 19.5% a 23.5%", "c) 25% a 30%"],
          respuestaCorrecta: "b",
          explicacion: "Valores inferiores al 19.5% generan asfixia inmediata, mientras que valores superiores a 23.5% generan riesgo extremo de incendio o explosión."
        }
      ]
    },
    {
      titulo: "Capítulo 4: Métodos de Evaluación INSST (Fine, NTP 330, VLA)",
      icono: "📊",
      contenido: `MÉTODOS OFICIALES DE EVALUACIÓN DE RIESGO:

- MÉTODO FINE: Grado de Peligrosidad (GP) = Consecuencias × Exposición × Probabilidad.
  * GP > 325: Riesgo Alto / Suspensión Inmediata.
  * 85 < GP ≤ 325: Riesgo Medio / Corrección Urgente.
  * GP ≤ 85: Riesgo Bajo / Control Periódico.

- NTP 330 INSST: Nivel de Riesgo (NR) = Nivel de Deficiencia × Nivel de Exposición × Nivel de Consecuencias.

- LÍMITES VLA (Agentes Químicos):
  * VLA-ED: Exposición Diaria en jornada de 8h.
  * VLA-EC: Corta Exposición en período de 15 minutos.`,
      ejercicios: [
        {
          pregunta: "4.1. En el método Fine, si el Grado de Peligrosidad (GP) da un resultado de 400, ¿cuál es la acción requerida?",
          opciones: ["a) Planificar mejoras a un año.", "b) Corrección urgente en menos de un mes.", "c) Detención inmediata de la actividad."],
          respuestaCorrecta: "c",
          explicacion: "Todo valor de GP superior a 325 exige corrección inmediata e interrupción de la tarea riesgosa."
        }
      ]
    },
    {
      titulo: "Capítulo 5: Comparativa e Equivalencias Argentina (AR) vs España (ES)",
      icono: "🔄",
      contenido: `GLOSARIO Y EQUIVALENCIAS DIRECTAS ENTRE AMBOS PAÍSES:

- SRT (Argentina)  ➜  INSST / ITSS (España)
- ART (Argentina)  ➜  Mutua Colaboradora de la Seguridad Social (España)
- Ley 24.557 (Argentina)  ➜  Ley 31/1995 de PRL (España)
- EPP (Argentina)  ➜  EPI (Equipo de Protección Individual) (España)
- Matafuegos (Argentina)  ➜  Extintores de Incendio (España)
- Relevamiento de Riesgos (Argentina)  ➜  Evaluación de Riesgos Laborales (España)
- Matrícula Profesional (Argentina)  ➜  Acreditación de Técnico Superior en Prevención (España)`,
      ejercicios: [
        {
          pregunta: "5.1. ¿Cómo se denomina en España al equivalente a la ART de Argentina?",
          opciones: ["a) Aseguradora de Riesgos", "b) Mutua Colaboradora de la Seguridad Social", "c) Sindicato de Trabajadores"],
          respuestaCorrecta: "b",
          explicacion: "Las Mutuas en España colaboran con la Seguridad Social en la gestión de accidentes de trabajo y enfermedades profesionales."
        }
      ]
    },
    {
      titulo: "Capítulo 6: Solucionario y Respuestas del Cuadernillo",
      icono: "✅",
      contenido: `CLAVE DE RESPUESTAS A LOS EJERCICIOS DEL MANUAL:

- Capítulo 1 (Ley 31/1995):
  * 1.1: Opción b (Protección colectiva sobre individual).
  * 1.2: Opción b (Art. 21 - Riesgo Grave e Inminente).

- Capítulo 2 (Reales Decretos):
  * 2.1: Opción b (RD 773/1997 de EPIs).

- Capítulo 3 (Espacios Confinados):
  * 3.1: Opción b (19.5% a 23.5% de Oxígeno).

- Capítulo 4 (Métodos INSST):
  * 4.1: Opción c (Detención inmediata si GP > 325).

- Capítulo 5 (AR vs ES):
  * 5.1: Opción b (Mutua Colaboradora de la Seguridad Social).`
    }
  ]
};
