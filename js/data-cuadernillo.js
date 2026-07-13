const CUADERNILLO = {
  titulo: "Cuadernillo de Estudio PRL en España",
  subtitulo: "Guía de campo para técnico de saneamiento — Argentina → España",
  secciones: [
    {
      titulo: "1. Marco Normativo Español — Lo que tenés que saber",
      icono: "📜",
      contenido: `LA LEY 31/1995 es tu biblia. Es la Ley de Prevención de Riesgos Laborales. Estudiá estos artículos:

ART. 14 — Derecho a la protección. Todo trabajador tiene derecho a que le protejan su vida y salud.
ART. 15 — Los 10 principios preventivos. Memorizalos: evitar riesgos, evaluar los que no se pueden evitar, combatir en origen, adaptar el trabajo a la persona, etc.
ART. 16 — Evaluación de riesgos. OBLIGATORIA para toda empresa. El técnico de PRL la hace.
ART. 19 — Formación obligatoria. Mínimo 10 horas para trabajadores nuevos.
ART. 21 — Riesgo grave e inminente. El trabajador puede PARAR el trabajo si hay peligro mortal.
ART. 29 — Plan de prevención. Documento que toda empresa DEBE tener.
ART. 35 — Delegados de Prevención. Los trabajadores eligen a sus representantes.
ART. 38 — Comité de Seguridad y Salud. Reunión trimestral obligatoria.`,
      notasEspacio: true
    },
    {
      titulo: "2. Reales Decretos Clave — Memorizá estos números",
      icono: "⚖️",
      contenido: `RD 39/1997 — Servicios de Prevención (quién puede hacer prevención)
RD 1215/1997 — Uso de equipos de trabajo (máquinas, herramientas)
RD 773/1997 — Uso de EPIs (EQUIPO DE PROTECCIÓN INDIVIDUAL)
RD 486/1997 — Señalización de seguridad
RD 604/2006 — ESPACIOS CONFINADOS (el más importante para saneamiento)
RD 374/2001 — Agentes químicos peligrosos
RD 216/2004 — ATEX (atmósferas explosivas)
RD 1299/2006 — Riesgos higiénicos (ruido, vibraciones, temperaturas)
RD 393/2007 — SPAI (planes de autoprotección)
RD 299/2006 — Actualización equipos de trabajo
RD 1620/2011 — Olas de calor
RD 840/2003 — Trabajos con riesgo eléctrico
RD 217/2004 — Trabajo en altura
RD 849/1986 — Vertidos al dominio público hidráulico

MULTAS: Leves hasta 3.000€ | Graves hasta 150.000€ | Muy graves hasta 300.000€`,
      notasEspacio: true
    },
    {
      titulo: "3. Espacios Confinados — Tu día a día en saneamiento",
      icono: "⚠️",
      contenido: `ANTES DE ENTRAR A CUALQUIER POZO O ESPACIO CONFINADO:

PASO 1: Medí la atmósfera
- O₂: mínimo 19.5%, máximo 23.5%
- H₂S: máximo 10 ppm
- CO: máximo 50 ppm
- LEL (metano): máximo 10% del LEL
- CO₂: máximo 5.000 ppm

PASO 2: Ventilá forzadamente mínimo 15 minutos

PASO 3: Sacá los residuos/gases acumulados

PASO 4: Tené el equipo de rescate listo AFUERA

PASO 5: Llevá detector de gases encendido

REGLA DE ORO: NUNCA ENTRÉS SOLO. SIEMPRE con 1 persona de fuera.

Si ves a alguien desmayado adentro: NO ENTRES. Llamá al 112.
El 80% de las muertes son personas que entraron a rescatar.`,
      notasEspacio: true
    },
    {
      titulo: "4. Agentes Químicos — Lo que no podés ignorar",
      icono: "🧪",
      contenido: `H₂S (Sulfuro de hidrógeno):
- Huele a huevos podridos a bajas concentraciones
- A 100+ ppm ANULA EL OLFATO (no lo sentís más)
- A 300+ ppm mata en minutos
- SIEMPRE medí con detector

CLORO (Cl₂):
- Gas verde-amarillento, olor fuerte
- A 10 ppm irrita
- A 100+ ppm puede matar
- NUNCA mezclar lejía con ácido (produce cloro)

METANO (CH₄):
- Incoloro, inodoro, inflamable
- A 5% en aire EXPLOTA
- Desplaza el oxígeno (te asfixiás sin darte cuenta)

REGLA: Si no medís, estás adivinando. Y adivinar en saneamiento mata.

FICHA DE DATOS DE SEGURIDAD (FDS):
- SIEMPRE pedí la FDS antes de usar cualquier producto
- Tiene: peligros, primeros auxilios, almacenamiento, disposición final
- Si no tenés la FDS, no uses el producto`,
      notasEspacio: true
    },
    {
      titulo: "5. Equipos de Protección — Tu última línea de defensa",
      icono: "🛡️",
      contenido: `EPIs OBLIGATORIOS en saneamiento:

CASCO: Siempre. Caídas de objetos, golpes con estructuras.
CALZADO DE SEGURIDAD: Con punta de acero y suela antideslizante.
GUANTES: Según riesgo (químicos, corte, calor).
GAFAS DE SEGURIDAD: Siempre que haya riesgo de salpicaduras o partículas.
PROTECCIÓN AUDITIVA: Si hay ruido >85 dB (sirenas, maquinaria).
DETECTOR DE GASES: SIEMPRE en espacios confinados.
ARNÉS: Si trabajás a >2 metros de altura.

EN ESPACIOS CONFINADOS ADICIONAL:
- Traje completo impermeable
- Máscara con filtro o autónoma (SCBA)
- Equipo de rescate con eslinga
- Comunicación por radio

REGLA: Un EPI que no usás es un EPI que no existe.`,
      notasEspacio: true
    },
    {
      titulo: "6. Argentina vs España — Diferencias clave",
      icono: "🔄",
      contenido: `PREVENCIÓN:
AR: ART (Aseguradora de Riesgos del Trabajo) supervisa
ES: Autoridad laboral + Inspección de Trabajo (más estricto)

RESPONSABILIDAD:
AR: Civil y administrativa (la ART responde)
ES: Civil + Penal + Administrativa ACUMULABLES (responde el empresario)

TÍTULO PROFESIONAL:
AR: Matrícula del Consejo Profesional (obligatorio)
ES: Registro ante CC.AA. (obligatorio, NO hay colegio profesional)

FISCALIZACIÓN:
AR: ART + Superintendencia de Riesgos del Trabajo
ES: Inspección de Trabajo (pueden parar la obra INMEDIATAMENTE)

SANCIONES:
AR: Multas de la ART
ES: Hasta 300.000€ por infracción muy grave + responsabilidad penal

FORMACIÓN:
AR: Capacitación obligatoria (24h/año según convenio)
ES: Formación obligatoria (mínimo 10h para nuevos, renovación cada 3 años)`,
      notasEspacio: true
    },
    {
      titulo: "7. Cataluña — Normativa específica",
      icono: "🏴",
      contenido: `LEY 5/2007 — Ley de prevención de riesgos laborales de Cataluña
DECRET 183/2006 — Coordinación de actividades preventivas en obras
DECRET 62/2010 — Organización de servicios de prevención
RESOLUCIÓ 1730/2018 — Baremos de formación de técnicos

REGISTRO PROFESIONAL:
- Se registra ante el ICSST (Institut Català de Seguretat i Salut en el Treball)
- Formulario online en la web del ICSST
- Necesitás: título homologado + DNI/NIE + solicitud
- En 2-4 semanas tenés el certificado

HOMOLOGACIÓN DE TÍTULOS EXTRANJEROS:
1. Pedí cita en el Ministerio de Educación
2. Presentá: título apostillado + traducción jurada + DNI/NIE
3. Esperá 6-12 meses
4. Mientras tanto, podés trabajar con homologación provisional

IDIOMA:
- No es obligatorio el catalán para sector privado
- MUY recomendado para communicate con compañeros
- Programa Parla: cursos gratuitos de catalán`,
      notasEspacio: true
    },
    {
      titulo: "8. Convenio Colectivo — Tus derechos laborales",
      icono: "💰",
      contenido: `SALARIO MÍNIMO (varía por categoría y convenio):
- Técnico de PRL en saneamiento: 28.000€ - 42.000€ brutos/año según experiencia
- Auxiliar: 20.000€ - 28.000€ brutos/año

JORNADA:
- Máximo 40 horas/semana en cómputo anual
- 1.800 horas/año como máximo

VACACIONES:
- Mínimo 30 días naturales al año (22 días laborables)

PAGAS EXTRAS:
- 2 pagas extras: junio y diciembre
- Cada una = 1/12 del salario anual

PERMISOS RETRIBUIDOS:
- Matrimonio: 15 días
- Nacimiento de hijo: 3 días
- Hospitalización familiar: 2 días
- Fallecimiento familiar: 2-4 días
- Mudanza: 1 día

HORAS EXTRAS:
- Máximo 80/año
- 1ª hora: +75% | 2ª hora en adelante: +100%

TRABAJO NOCTURNO (22:00-06:00): +30%
TRABAJO EN FESTIVOS: +75%

FORMACIÓN: La empresa DEBE dar 20 horas/año de formación`,
      notasEspacio: true
    },
    {
      titulo: "9. Permisos de Trabajo — Checklist para cada tarea",
      icono: "✅",
      contenido: `ANTES DE CADA TAREA, VERIFICÁ:

□ Permisos de trabajo firmados
□ Evaluación de riesgos actualizada para esa tarea
□ EPIs en buen estado
□ Detector de gases calibrado y encendido (espacios confinados)
□ Plan de emergencia actualizado
□ Comunicación con el encargado de obra
□ Señalización del área de trabajo
□ Equipo de rescate disponible (espacios confinados)
□ Ventilación adecuada (espacios confinados)
□ Documentación de productos químicos (FDS)

SI ALGO FALTA, NO EMPIECES EL TRABAJO.
Recordá: tu derecho a parar el trabajo si hay peligro grave e inminente (Art. 21 Ley 31/1995).`,
      notasEspacio: true
    },
    {
      titulo: "10. Vocabulario Catalán para Obra — Las 30 más usadas",
      icono: "🗣️",
      contenido: `SEGUENT I HIGIENE LABORAL = Seguridad y Salud en el Trabajo
PREVENCIÓ DE RISCOS LABORALS = Prevención de Riesgos Laborals
ESPAI CONFINAT = Espacio confinado
POU DE BOMBAMENT = Pozo de bombeo
POU DE VISITA = Pozo de visita
TAPA DE POU = Tapa de pozo
COL·LECTOR = Colector
XARXA DE SANEJAMENT = Red de saneamiento
FITXA DE DADES DE SEGURETAT (FDS) = Ficha de datos de seguridad
DETECTOR DE GASOS = Detector de gases
CAL POSAR-SE L'EPI = Hay que ponerse el EPI
NO ES POT TREBALLAR SENSE PERMÍS = No se puede trabajar sin permiso
ATURAR EL TREBALL PER PERILL GREU = Detener el trabajo por peligro grave
TRUCAR AL 112 = Llamar al 112
BON DIA, COMPANY! = ¡Buenos días, compañero!
NO HO ENTENC = No lo entiendo
SOC TÈCNIC DE SANEJAMENT = Soy técnico de saneamiento
ESTIC D'ACORD = Estoy de acuerdo
AIgua RESIDUAL = Agua residual
FOSSA SÈPTICA = Fosa séptica (¡espacio confinado!)
ESTACIÓ DE BOMBAMENT = Estación de bombeo
LLOT = Lodo
DESGUÀS = Desagüe
OBRA CIVIL = Obra civil
CAL REVISAR L'EQUIPAMENT = Hay que revisar el equipamiento
AIXÒ ÉS PERILLOS! = ¡Esto es peligroso!
SORTIDA D'EMERGÈNCIA = Salida de emergencia
ON ÉS EL CAP D'OBRA? = ¿Dónde está el jefe de obra?
NECESSITO AJUDA = Necesito ayuda
TREBALLO EN PREVENCIÓ DE RISCOS = Trabajo en prevención de riesgos`,
      notasEspacio: true
    },
    {
      titulo: "11. Emergencias — Protocolo rápido",
      icono: "🚨",
      contenido: `SI HAY ACCIDENTE:
1. Llamá al 112 INMEDIATAMENTE
2. Asegurá la zona (señalización)
3. NO movas a la víctima si sospechás lesión de columna
4. Si hay incendio: evacuá y usá extintor SOLO si es seguro
5. Si hay gas: ventilá y NO enciendas luces ni chispas
6. Comunicá al encargado de obra
7. Redactá parte de accidente

SI HAY FUGA DE QUÍMICOS:
1. Ventilá el área
2. Usá EPI completo (máscara, guantes, traje)
3. Cerrá la fuente si es seguro
4. Llamá al 112
5. No dejes que entren personas sin EPI

SI HAY RIESGO GRAVE E INMINENTE:
1. Pará el trabajo (Art. 21 Ley 31/1995)
2. Comunicá al encargado
3. Si la empresa no actúa, podés denunciar a Inspección de Trabajo
4. Tus datos están protegidos (no te pueden sancionar)`,
      notasEspacio: true
    }
  ]
};
