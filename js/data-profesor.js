const PROFESOR_LECCIONES = [
  {
    id: "leccion-1",
    titulo: "El Sistema de Prevención en España",
    modulo: "Fundamentos",
    duracion: "25 min",
    icono: "🏛️",
    objetivos: [
      "Entender cómo está organizada la prevención en España",
      "Conocer quiénes son los actores principales",
      "Entender la diferencia entre empresa, trabajador y servicio de prevención",
      "Saber a quién acudir cuando hay un problema"
    ],
    secciones: [
      {
        tipo: "narrativa",
        contenido: `Profesor: «Bienvenido a esta primera lección. Vamos a empezar por lo básico pero lo más importante: entender CÓMO funciona el sistema de prevención en España. 

Mirá, en Argentina conocemos la Ley de Riesgos del Trabajo (Ley 24.557) y las ART. En España el sistema es diferente pero tiene una lógica muy clara. Si la entendés, todo lo demás se facilita.

La clave es esta: en España, LA EMPRESA es la responsable principal de la seguridad. No hay una ART que venga a controlarte. La empresa tiene que organizar su propia prevención. Esto es fundamental porque cambia todo tu rol como técnico.»`
      },
      {
        tipo: "concepto-clave",
        titulo: "Los 4 pilares del sistema español",
        contenido: `1. LA EMPRESA: Es la responsable principal. DEBE tener un Plan de Prevención, evaluar riesgos, formar a sus trabajadores y buscar un Servicio de Prevención si no tiene profesional interno.

2. EL SERVICIO DE PREVENCIÓN: Son empresas especializadas que asesoran a las empresas. Pueden ser ajenos (una empresa externa) o propios (cuando la empresa es grande y tiene su propio servicio). Acá es donde trabajás vos como técnico.

3. LA INSPECCIÓN DE TRABAJO: Son los inspectores del gobierno que van a las empresas a verificar que cumplan las normas. Si ves a un inspector, es serio.

4. LA AUTORIDAD LABORAL: El Ministerio de Trabajo y sus delegaciones autonómicas. Son los que ponen las normas y coordinan todo.`
      },
      {
        tipo: "comparativa",
        titulo: "Argentina vs España",
        contenido: `ARGENTINA: Empresa + ART + Inspección + Seguridad/Higiene
ESPAÑA: Empresa + Servicio de Prevención + Inspección + Prevencionista

La diferencia principal: en Argentina la ART controla y sanciona. En España la empresa se autocontrola y la Inspección verifica. Vos como prevencionista en España trabajás PARA la empresa o PARA un servicio de prevención, no para una aseguradora.`
      },
      {
        tipo: "ejemplo",
        titulo: "Caso práctico",
        contenido: `Imaginate que sos técnico en saneamiento y te contratan para evaluar una fábrica de conservas en Valencia.

En Argentina: la ART te mandaría, harías la evaluación, y si hay riesgos graves le avisarías a la ART que podría parar la producción.

En España: la empresa te contrata directamente (o a través de un servicio de prevención). VOS hacés la evaluación, le decís a la empresa qué hay que arreglar, y la empresa decide cuándo y cómo arreglarlo. La Inspección de Trabajo puede llegar a venir si alguien denuncia o en una inspección rutinaria, y si no se hizo la evaluación, la empresa tiene un GRAVE problema.

¿Ves la diferencia? En España tenés más responsabilidad directa con la empresa.»`
      },
      {
        tipo: "pregunta",
        pregunta: "¿Quién es el responsable principal de la prevención en España?",
        opciones: [
          "La Inspección de Trabajo",
          "El servicio de prevención",
          "La empresa",
          "El Ministerio de Trabajo"
        ],
        correcta: 2,
        explicacion: "La empresa es la responsable principal. La Inspección verifica, el servicio de prevención asesora, pero la responsabilidad final es de la empresa. Esto es diferente a Argentina donde la ART tiene un rol más activo."
      },
      {
        tipo: "pregunta",
        pregunta: "Si trabajás como prevencionista en un servicio de prevención, ¿para quién trabajás?",
        opciones: [
          "Para la Inspección de Trabajo",
          "Para las empresas cliente del servicio",
          "Para el Ministerio de Trabajo",
          "Para los trabajadores directamente"
        ],
        correcta: 1,
        explicacion: "Trabajás para las empresas que contratan tus servicios. Les asesorás, evaluás riesgos, formás a los trabajadores. Tu trabajo es que esas empresas cumplan la normativa."
      },
      {
        tipo: "pregunta",
        pregunta: "¿Qué pasa si una empresa no cumple con la prevención en España?",
        opciones: [
          "La ART la sanciona",
          "Nada, no hay consecuencias",
          "La Inspección de Trabajo puede sancionarla con multas graves",
          "El sindicato la cierra"
        ],
        correcta: 2,
        explicacion: "La Inspección de Trabajo puede poner multas que van desde 60€ hasta 600.000€ en infracciones muy graves. Además puede paralizar la actividad si hay riesgo grave e inminente."
      },
      {
        tipo: "resumen",
        contenido: `Puntos para recordar:
• La empresa es LA responsable de la prevención
• El servicio de prevención asesora y ejecuta
• La Inspección de Trabajo controla y sanciona
• Vos como prevencionista trabajás para la empresa o servicio de prevención
• En España el sistema es más de autocontrol empresarial que en Argentina`
      }
    ]
  },
  {
    id: "leccion-2",
    titulo: "La Ley 31/1995 — La madre de todas las normas",
    modulo: "Fundamentos",
    duracion: "30 min",
    icono: "⚖️",
    objetivos: [
      "Entender la estructura de la Ley 31/1995",
      "Conocer los derechos y obligaciones de cada actor",
      "Entender los principios de prevención",
      "Saber cuándo se aplica cada artículo"
    ],
    secciones: [
      {
        tipo: "narrativa",
        contenido: `Profesor: «Ahora vamos con LA ley que lo contiene todo. La Ley 31/1995 de Prevención de Riesgos Laborales. Es como la Constitución de la prevención en España. Todo lo demás (reales decretos, normas UNE, guías INSST) nacen de esta ley.

Voy a ser honesto con vos: esta ley tiene 57 artículos y 5 disposiciones adicionales. Nadie la lee entera de corrido. Lo que tenés que hacer es ENTENDER la lógica y SABER BUSCAR cuando la necesites. Yo te voy a explicar la lógica.»

La ley se divide en estas partes:
- Capítulo I: Disposiciones generales (Art. 1-6) — Qué es prevención, quién hace qué
- Capítulo II: Principios de la acción preventiva (Art. 15) — Los 10 mandamientos
- Capítulo III: Derechos y obligaciones (Art. 17-29) — Qué puede y qué debe cada uno
- Capítulo IV: Planificación (Art. 16) — Plan de Prevención
- Capítulo V: Evaluación de riesgos (Art. 21-24) — El corazón de tu trabajo
- Capítulo VI: Información y formación (Art. 17-18)
- Capítulo VII: Vigilancia de la salud (Art. 22)
- Capítulo VIII: Participación de los trabajadores (Art. 23)
- Capítulo IX: Atención de emergencias (Art. 20)
- Capítulo X: Coordinación de actividades (Art. 24)
- Capítulo XI: Responsabilidades y sanciones (Art. 43-57)`
      },
      {
        tipo: "concepto-clave",
        titulo: "Los 10 Principios de Prevención (Art. 15) — ¡MEMORIALOS!",
        contenido: `Estos 10 principios son la base de TODO. Si los entendés, podés resolver cualquier situación:

1. Evitar los riesgos — Primero: ¿se puede eliminar el peligro? Si sí, eliminate.
2. Evaluar los riesgos que no se pueden evitar — Si no podés eliminarlo, midelo.
3. Combatir los riesgos en su origen — No pongas una máquina ruidosa y después des de auriculares. Arreglá la máquina.
4. Adaptar el trabajo a la persona — No obligues al trabajador a adaptarse al trabajo, adaptá el trabajo a él.
5. Tener en cuenta la evolución técnica — Las cosas mejoran, actualizá.
6. Sustituir lo peligroso por lo que implique menos peligro — Si hay un químico peligroso, buscá una alternativa menos peligrosa.
7. Planificar la prevención — No improvisar, todo tiene que estar planificado.
8. Dar prioridad a las medidas colectivas sobre las individuales — Primero arreglar el ambiente de trabajo, después ponerse protectores personales.
9. Dar instrucciones adecuadas a los trabajadores — No sirve de nada arreglar algo si el trabajador no sabe cómo usarlo.
10. Contener los riesgos que no se puedan eliminar — Si al final queda algo, que el daño sea el menor posible.`
      },
      {
        tipo: "ejemplo",
        titulo: "Los 10 principios aplicados a saneamiento",
        contenido: `Imaginate que tenés que evaluar el riesgo de exposición a gases tóxicos en una planta de tratamiento de aguas residuales.

Principio 1 (Evitar): ¿Se puede cerrar el tanque? Sí → Se cierra.
Principio 3 (Origen): En vez de poner extractores, ¿se puede reducir la generación de gas? A veces sí, mejorando la ventilación del proceso.
Principio 6 (Sustituir): El cloro gaseoso es peligroso. ¿Se puede usar hipoclorito de sodio líquido? Sí → Menos peligroso.
Principio 8 (Colectivas > Individuales): Primero detector de gases y ventilación. Después mascarilla como último recurso.
Principio 9 (Formación): El trabajador tiene que saber qué hacer si suena la alarma.

¿Ves cómo los 10 principios te dan un MAPA para resolver el problema?»`
      },
      {
        tipo: "pregunta",
        pregunta: "Según el Art. 15, ¿cuál es el PRIMER paso al enfrentar un riesgo laboral?",
        opciones: [
          "Poner protección personal al trabajador",
          "Evaluar el nivel de riesgo",
          "Evitar el riesgo eliminando el peligro",
          "Avisar al servicio de prevención"
        ],
        correcta: 2,
        explicacion: "El primer principio es EVITAR los riesgos. Antes de evaluar, antes de poner EPIs, hay que preguntarse: ¿se puede eliminar el peligro? Si se puede, eso es lo que hay que hacer primero."
      },
      {
        tipo: "pregunta",
        pregunta: "Si no podés eliminar un riesgo, ¿qué hacés SEGÚN los principios de prevención?",
        opciones: [
          "Ponerle un EPI al trabajador y listo",
          "Avisarle a la empresa que hay un riesgo",
          "Evaluar el riesgo y combatirlo en su origen",
          "Cambiar de actividad"
        ],
        correcta: 2,
        explicacion: "Si no podés eliminarlo, lo evaluás (principio 2) y buscás combatirlo en su origen (principio 3). Los EPIs son el último recurso, no la primera opción."
      },
      {
        tipo: "pregunta",
        pregunta: "¿Por qué las medidas colectivas tienen prioridad sobre las individales?",
        opciones: [
          "Porque son más baratas",
          "Porque protegen a todos los trabajadores, no solo a uno",
          "Porque son más fáciles de implementar",
          "Porque lo dice la ley sin explicación"
        ],
        correcta: 1,
        explicacion: "Una medida colectiva (como una barandilla, una ventilación, un silenciador) protege a TODOS los que están ahí. Un EPI solo protege al que lo lleva puesto, y depende de que lo use bien. Por eso primero lo colectivo, después lo individual."
      },
      {
        tipo: "resumen",
        contenido: `Puntos para recordar:
• La Ley 31/1995 es la ley MADRE de la prevención en España
• El Art. 15 tiene los 10 principios de prevención: memorizalos
• Primero evitar, después evaluar, después combatir en origen
• Las medidas colectivas SIEMPRE antes que las individales
• El Plan de Prevención es obligatorio para toda empresa`
      }
    ]
  },
  {
    id: "leccion-3",
    titulo: "Evaluación de Riesgos — Tu trabajo diario",
    modulo: "En la Práctica",
    duracion: "35 min",
    icono: "🔍",
    objetivos: [
      "Saber hacer una Evaluación de Riesgos paso a paso",
      "Conocer la metodología matrix de valoración",
      "Entender cuándo y cómo actualizar una evaluación",
      "Saber documentar y registrar resultados"
    ],
    secciones: [
      {
        tipo: "narrativa",
        contenido: `Profesor: «Esta es LA lección más importante de todas. Si solo aprendés una cosa de este curso, que sea esta: CÓMO se hace una Evaluación de Riesgos. Porque esto es lo que vas a hacer TODOS LOS DÍAS como prevencionista.

La Evaluación de Riesgos no es un trámite. Es una HERRAMIENTA para salvar vidas. Cuando vos evaluás un riesgo, estás diciendo: "este peligro puede matar o herir a alguien, y hay que hacer algo". Tomatelo en serio.

La metodología está en el RD 39/1997, Anexo IV. Pero yo te la voy a explicar como se hace en la práctica, no como está escrita en la norma.»`
      },
      {
        tipo: "concepto-clave",
        titulo: "Los 5 pasos de la Evaluación de Riesgos",
        contenido: `PASO 1: IDENTIFICAR LOS PELIGROS
Recorré el lugar de trabajo. Mirá todo. Escuchá, olé (con cuidado), observá. Anotá TODO lo que pueda ser un peligro: máquinas, químicos, ruido, posiciones forzadas, sustancias, temperatura, iluminación...

PASO 2: DETERMINAR QUIÉN SE EXPONE
No basta con decir "hay ruido". ¿Quién se expone? ¿El operario de la máquina? ¿El que pasa por ahí? ¿El que trabaja 8 horas ahí o el que pasa 5 minutos?

PASO 3: VALORAR EL RIESGO
Aquí viene la parte técnica. Usás una MATRIZ de valoración:
Severidad (consecuencia) × Probabilidad (exposición) = Nivel de Riesgo

SEVERIDAD:
1 = Sin lesión (molestia pasajera)
2 = Lesión leve (curación en < 15 días)
3 = Lesión con baja (15-60 días)
4 = Lesión grave (más de 60 días, invalidez parcial)
5 = Muerte o invalidez permanente

PROBABILIDAD:
1 = Raramente (exposición ocasional, menos de 1 vez/mes)
2 = Ocasional (1 vez/mes a 1 vez/semana)
3 | Frecuente (1 vez/día, pocas horas)
4 | Muy frecuente (varias horas/día, a diario)
5 | Casi seguro (toda la jornada, siempre)

NIVEL DE RIESGO = Severidad × Probabilidad

1-4: Riesgo BAJO → vigilancia periódica
5-9: Riesgo MEDIO → acciones preventivas
10-15: Riesgo ALTO → acciones urgentes
16-25: Riesgo MUY ALTO → parar la actividad inmediatamente

PASO 4: DECIDIR QUÉ HACER
Según el nivel de riesgo, establecé medidas correctivas. SIEMPRE con responsable y plazo.

PASO 5: REGISTRAR Y REVISAR
Todo se documenta. Y se revisa periódicamente o cuando cambian las condiciones.`
      },
      {
        tipo: "ejemplo",
        titulo: "Caso práctico completo: Planta de saneamiento",
        contenido: `VAMOS A EVALUAR una estación de bombeo de aguas residuales.

PELIGRO 1: Gases tóxicos (H₂S, metano) en el pozo de bombeo
- ¿Quién se expone? El operario que hace mantenimiento en el pozo (2 personas, 4 horas/mes)
- Severidad: 5 (el H₂S puede matar en minutos)
- Probabilidad: 2 (ocasional, 4 horas/mes)
- Riesgo: 5 × 2 = 10 → ALTO
- MEDIDA: Detector de gases portátil obligatorio + ventilación forzada + permiso de trabajo confinado + formación específica
- Responsable: Jefe de mantenimiento. Plazo: inmediato

PELIGRO 2: Ruido del grupo bombeador (95 dB)
- ¿Quién se expone? Operario de control (8 horas/día)
- Severidad: 3 (pérdida auditiva progresiva)
- Probabilidad: 4 (muy frecuente, a diario)
- Riesgo: 3 × 4 = 12 → ALTO
- MEDIDA: Insonorización de la sala + auriculares como medida temporal
- Responsable: Ingeniero de planta. Plazo: 2 meses

PELIGRO 3: Resbalones en zona húmeda
- ¿Quién se expone? Todos los operarios (pasan por ahí 10 veces/día)
- Severidad: 2 (caída, golpe leve)
- Probabilidad: 4 (muy frecuente)
- Riesgo: 2 × 4 = 8 → MEDIO
- MEDIDA: Suelo antideslizante + señalización + calzado de seguridad
- Responsable: Encargado de mantenimiento. Plazo: 1 mes

¿Ves cómo funciona? Identificás, valorás, decidís y documentás. Eso es tu trabajo.»`
      },
      {
        tipo: "pregunta",
        pregunta: "Si un químico puede causar la muerte (Severidad 5) y el trabajador se expone 1 vez al mes (Probabilidad 2), ¿cuál es el nivel de riesgo?",
        opciones: [
          "BAJO (10)",
          "MEDIO (7)",
          "ALTO (10)",
          "MUY ALTO (15)"
        ],
        correcta: 2,
        explicacion: "5 × 2 = 10. Riesgo ALTO. Incluso con poca exposición, si la consecuencia es la muerte, el riesgo es alto. Hay que actuar de forma URGENTE."
      },
      {
        tipo: "pregunta",
        pregunta: "¿Cuándo DEBES revisar una Evaluación de Riesgos?",
        opciones: [
          "Solo cuando la empresa lo pida",
          "Cada 5 años como máximo",
          "Cuando cambien las condiciones de trabajo, cuando haya un accidente, o periódicamente",
          "Nunca, una vez hecha queda"
        ],
        correcta: 2,
        explicacion: "La evaluación se revisa: cuando cambian las condiciones de trabajo, cuando hay un accidente o incidente, cuando cambia la organización del trabajo, y periódicamente (la frecuencia la marca la propia evaluación)."
      },
      {
        tipo: "pregunta",
        pregunta: "Un trabajador se expone a 90 dB durante toda la jornada. Severidad = 3, Probabilidad = 4. ¿Qué nivel de riesgo es?",
        opciones: [
          "BAJO (7)",
          "MEDIO (7)",
          "ALTO (12)",
          "MUY ALTO (15)"
        ],
        correcta: 2,
        explicacion: "3 × 4 = 12 → ALTO. El ruido de 90 dB durante toda la jornada es un riesgo ALTO. Hay que tomar medidas URGENTES: insonorización, reducción en origen, y EPIs como medida temporal."
      },
      {
        tipo: "resumen",
        contenido: `Puntos para recordar:
• La evaluación de riesgos es TU TRABAJO PRINCIPAL
• 5 pasos: Identificar → Quién se expone → Valorar → Decidir → Registrar
• Severidad × Probabilidad = Nivel de Riesgo
• Bajo (1-4), Medio (5-9), Alto (10-15), Muy Alto (16-25)
• SIEMPRE registrar y revisar periódicamente
• La evaluación es un DOCUMENTO VIVO, no un trámite`
      }
    ]
  },
  {
    id: "leccion-4",
    titulo: "El Plan de Prevención — El documento rey",
    modulo: "En la Práctica",
    duracion: "25 min",
    icono: "📋",
    objetivos: [
      "Entender qué es y para qué sirve el Plan de Prevención",
      "Conocer sus elementos obligatorios",
      "Saber cuándo es obligatorio",
      "Entender cómo se actualiza"
    ],
    secciones: [
      {
        tipo: "narrativa",
        contenido: `Profesor: «Si la Evaluación de Riesgos es lo que hacés todos los días, el Plan de Prevención es el DOCUMENTO que todo lo coordina. Es como el mapa general de la seguridad en la empresa.

El Plan de Prevención es obligatorio para TODA empresa con trabajadores. Sin excepción. Si una empresa tiene 1 trabajador, necesita Plan de Prevención. Y no es un papel que se firma y se guarda en un cajón: es un documento vivo que se actualiza constantemente.

El artículo 16 de la Ley 31/1995 lo define. Pero yo te voy a decir qué contiene en la práctica.»`
      },
      {
        tipo: "concepto-clave",
        titulo: "Los 8 elementos del Plan de Prevención",
        contenido: `1. Política de prevención — La dirección se compromete con la seguridad. Firma de la dirección.

2. Organización y recursos — Quién es responsable de qué, qué medios hay.

3. Identificación de riesgos — La Evaluación de Riesgos (que ya aprendiste).

4. Planificación de la actividad preventiva — Qué hacer, cuándo, quién, con qué recursos.

5. Formación de los trabajadores — Plan de formación: quién, qué, cuándo.

6. Comunicación y participación — Cómo se comunica la información entre dirección, prevencionistas y trabajadores. El Comité de Seguridad y Salud.

7. Documentación — Todo lo que se genera se archiva: evaluaciones, planes, formación, incidencias.

8. Vigilancia de la salud — Plan de vigilancia de la salud de los trabajadores.

Estos 8 elementos son OBLIGATORIOS. Si falta alguno, el Plan está incompleto.»`
      },
      {
        tipo: "ejemplo",
        titulo: "Caso práctico: Plan de Prevención de una empresa de saneamiento",
        contenido: `Empresa "Aguas Limpias S.L." — 45 trabajadores — Servicio de saneamiento industrial

POLÍTICA: "Aguas Limpias se compromete a proporcionar un entorno de trabajo seguro..." Firmado por el Director General.

ORGANIZACIÓN:
- Director de Seguridad: Juan García (Técnico Superior PRL)
- Delegados de prevención: María (planta 1), Pedro (planta 2), Ana (mantenimiento)
- Comité de Seguridad y Salud: reunión trimestral

RIESGOS IDENTIFICADOS: (Aquí van todas las Evaluaciones de Riesgos)
- Exposición a agentes químicos: riesgo ALTO
- Ruido: riesgo MEDIO
- Espacios confinados: riesgo MUY ALTO
- Caídas en altura: riesgo ALTO
- Electricidad: riesgo MEDIO

PLAN DE ACTIVIDAD:
- Enero: Formación en riesgos químicos (todo el personal)
- Febrero: Simulacro de evacuación
- Marzo: Revisión de EPIs
- Abril: Evaluación de riesgos actualizada
... etc.

FORMACIÓN: Plan anual de formación con 40 horas mínimo por trabajador

DOCUMENTACIÓN: Archivo en oficina central + copia digital

¿Ves? No es solo un papel, es TODO lo que la empresa hace para proteger a sus trabajadores.»`
      },
      {
        tipo: "pregunta",
        pregunta: "¿Cuándo es obligatorio el Plan de Prevención?",
        opciones: [
          "Solo si la empresa tiene más de 50 trabajadores",
          "Solo si la empresa tiene riesgos graves",
          "Para toda empresa con trabajadores, sin excepción",
          "Solo si la Inspección lo pide"
        ],
        correcta: 2,
        explicacion: "El Plan de Prevención es obligatorio para TODA empresa con trabajadores, sin importar el tamaño ni el sector. Es el documento base de toda la prevención."
      },
      {
        tipo: "pregunta",
        pregunta: "¿Cuál de estos NO es un elemento obligatorio del Plan de Prevención?",
        opciones: [
          "Evaluación de riesgos",
          "Plan de formación",
          "Póliza de seguro de la empresa",
          "Comunicación y participación"
        ],
        correcta: 2,
        explicacion: "La póliza de seguro NO es parte del Plan de Prevención. Los 8 elementos son: política, organización, identificación de riesgos, planificación, formación, comunicación, documentación y vigilancia de la salud."
      },
      {
        tipo: "resumen",
        contenido: `Puntos para recordar:
• El Plan de Prevención es OBLIGATORIO para toda empresa
• Tiene 8 elementos obligatorios
• Es un documento VIVO que se actualiza constantemente
• La Evaluación de Riesgos es parte del Plan
• Sin Plan de Prevención = infracción GRAVE
• El Plan coordina TODO lo relacionado con prevención`
      }
    ]
  },
  {
    id: "leccion-5",
    titulo: "Espacios Confinados — Lo más peligroso que vas a encontrar",
    modulo: "Especialización",
    duracion: "30 min",
    icono: "⚠️",
    objetivos: [
      "Entender qué es un espacio confinado según la normativa española",
      "Conocer los riesgos específicos",
      "Saber el procedimiento de trabajo seguro",
      "Entender el RD 396/2006 como herramienta de trabajo"
    ],
    secciones: [
      {
        tipo: "narrativa",
        contenido: `Profesor: «Esta lección es ESPECIALMENTE importante para vos como técnico en saneamiento. Los espacios confinados son donde más mueren trabajadores en España. Y en saneamiento, vas a estar en espacios confinados CONSTANTEMENTE: pozos de bombeo, depósitos, túneles, fosas sépticas...

El RD 396/2006 es la norma que regula el trabajo en espacios confinados en España. Es MUY estricto y por buen motivo. Vamos a verlo como si fuera tu mano derecha.»

Dato alarmante: Según la INSST, el 60% de las muertes en espacios confinados ocurren cuando alguien intenta RESCATAR a otro trabajador sin los medios adecuados. El instinto natural es entrar a ayudar, pero sin protección, entrás a morir también.»`
      },
      {
        tipo: "concepto-clave",
        titulo: "¿Qué es un espacio confinado?",
        contenido: `Según el RD 396/2006, es un espacio con:
1. Acceso o salida limitada — No podés salir fácil
2. No diseñado para ocupación continua — No se trabaja ahí normalmente
3. Riesgo de atmósfera peligrosa — Puede haber gases tóxicos, falta de oxígeno, o atmósfera inflamable

EJEMPLOS EN SANEAMIENTO:
✓ Pozos de bombeo
✓ Depósitos de agua
✓ Cámaras de inspección
✓ Túneles de colectores
✓ Fosas sépticas
✓ Tanques de tratamiento
✓ Cisternas
✓ Silos

NO SON ESPACIOS CONFINADOS (aunque parezcan):
✗ Cámaras frigoríficas grandes (tienen salida fácil)
✗ Túneles de metro (diseñados para ocupación)
✗ Almacenes (acceso fácil)»`
      },
      {
        tipo: "concepto-clave",
        titulo: "Los 3 peligros mortales de los espacios confinados",
        contenido: `PELIGRO 1: FALTA DE OXÍGENO
El aire normal tiene 21% de oxígeno. En un espacio confinado puede bajar a menos del 17%. A menos del 16%, perdés el conocimiento. A menos del 10%, morís en minutos.

PELIGRO 2: GASES TÓXICOS
El H₂S (sulfuro de hidrógeno) es el más peligroso en saneamiento. Huele a huevos podridos a bajas concentraciones, pero a altas concentraciones APAGA tu olfato y te mata sin que te des cuenta. El CO (monóxido de carbono) es inodoro y también mata.

PELIGRO 3: ATMÓSFERA INFLAMABLE
El metano (CH₄) es común en saneamiento. A cierta concentración EXPLOTA con una chispa.

LA REGLA DE ORO: NUNCA entres a un espacio confinado sin permiso de trabajo, medición de atmósfera y medios de rescate.»`
      },
      {
        tipo: "ejemplo",
        titulo: "El procedimiento que DEBES seguir (RD 396/2006)",
        contenido: `ANTECEDENTES: Hay que hacer una reparación en un pozo de bombeo de 4 metros de profundidad.

PASO 1: PERMISO DE TRABAJO
El responsable de seguridad emite un permiso de trabajo escrito que indica:
- Qué se va a hacer
- Riesgos identificados
- Medidas de prevención
- Medios de rescate
- Persona responsable

PASO 2: MEDICIÓN DE ATMÓSFERA
ANTES de entrar, se mide con detector portátil:
- O₂: 21% (accept range: 19.5-23.5%)
- H₂S: 0 ppm (límite: 10 ppm)
- CH₄: 0% (límite: 1%)
- CO: 0 ppm (límite: 30 ppm)

PASO 3: VENTILACIÓN
Se ventila el espacio con ventilación forzada hasta que las mediciones sean correctas.

PASO 4: VIGÍA
Siempre hay un vigilante FUERA del espacio con:
- Arneses y cuerdas para rescate
- Detector de gases
- Comunicación directa con los trabajadores dentro
- Mascarilla de rescate lista

PASO 5: EQUIPO DE ENTRADA
Los trabajadores entran con:
- Arneses de seguridad
- Detector de gases personal
- Comunicación
- Equipo de rescate rápido

PASO 6: TRABAJO Y MONITOREO CONTINUO
El vigilante mide la atmósfera periódicamente. Si algo cambia, se SACA a todos INMEDIATAMENTE.

PASO 7: SALIDA Y CIERRE
Todos salen, se cierra el acceso, se firma la finalización del permiso.

¿NOTASTE? Entras con todo planificado. Nada de "bajate rápido a ver qué pasa".»`
      },
      {
        tipo: "pregunta",
        pregunta: "¿Qué porcentaje de oxígeno en el aire es peligroso?",
        opciones: [
          "Menos del 21%",
          "Menos del 19.5%",
          "Menos del 16%",
          "Cualquier nivel bajo el 25%"
        ],
        correcta: 1,
        explicacion: "El nivel seguro es entre 19.5% y 23.5%. Por debajo de 19.5% es peligroso. Por debajo de 16% perdés el conocimiento. Por debajo de 10% es mortal en minutos."
      },
      {
        tipo: "pregunta",
        pregunta: "¿Por qué el H₂S (sulfuro de hidrógeno) es tan peligroso?",
        opciones: [
          "Porque es inodoro",
          "Porque a altas concentraciones apaga el olfato y no sentís el peligro",
          "Porque es inflamable",
          "Porque solo se encuentra en fábricas químicas"
        ],
        correcta: 1,
        explicacion: "El H₂S huele a huevos podridos a bajas concentraciones (lo sentís), pero a concentraciones altas paraliza el olfato. Es decir, dejás de olerlo justo cuando es más peligroso. Esto mata a muchos trabajadores."
      },
      {
        tipo: "pregunta",
        pregunta: "Según el RD 396/2006, ¿qué pasa si alguien cae inconsciente en un espacio confinado?",
        opciones: [
          "Entrás a rescatarlo rápido",
          "Avisás al vigilante y usás el sistema de rescate con arneses",
          "Esperás a que se despierte",
          "Llamás a los bomberos y esperás"
        ],
        correcta: 1,
        explicacion: "NUNCA entrás a rescatar sin medios. Activás el sistema de rescate con arneses y cuerdas que tiene el vigilante. El 60% de las muertes en espacios confinados son personas que entraron a rescatar sin protección."
      },
      {
        tipo: "resumen",
        contenido: `Puntos para recordar:
• Los espacios confinados son donde más se muere en España
• RD 396/2006 es tu biblia para este tema
• 3 peligros: falta de O₂, gases tóxicos (H₂S), atmósfera inflamable
• SIEMPRE: permiso → medición → ventilación → vigilante → equipo → rescate
• NUNCA entrés sin permiso de trabajo y medición previa
• El 60% de muertes son intentos de rescate sin protección`
      }
    ]
  },
  {
    id: "leccion-6",
    titulo: "EPIs — La última defensa del trabajador",
    modulo: "En la Práctica",
    duracion: "20 min",
    icono: "🦺",
    objetivos: [
      "Entender el marco legal de los EPIs en España",
      "Saber qué EPIs se usan en cada situación",
      "Conocer las normas UNE-EN relevantes",
      "Entender cuándo y cómo seleccionar un EPI"
    ],
    secciones: [
      {
        tipo: "narrativa",
        contenido: `Profesor: «Los Equipos de Protección Individual son la ÚLTIMA línea de defensa. Ya lo dijimos en los principios de prevención: primero evitar, después medidas colectivas, y al final los EPIs. Pero cuando los necesitás, tienen que ser los CORRECTOS.

En España, la norma que regula los EPIs es el RD 1407/1992 y la directiva europea 89/686/CEE (ahora reemplazada por el Reglamento 2016/425). La clave es: la EMPRESA debe proporcionar los EPIs GRATUITAMENTE y el TRABAJADOR debe usarlos.

Como prevencionista, tu trabajo es: aconsejar qué EPIs son necesarios, verificar que se cumplan las normas, y formar a los trabajadores en su uso.»`
      },
      {
        tipo: "concepto-clave",
        titulo: "EPIs obligatorios en saneamiento y su normativa",
        contenido: `CABEZA:
- Casco de seguridad (UNE-EN 397) — Obligatorio en toda obra y zona de riesgo de caída de objetos
- Casco con barbilla (UNE-EN 397) — Cuando hay riesgo de caída al vacío

OJOS Y CARA:
- Gafas de seguridad (UNE-EN 166) — Partículas voladoras, polvo
- Pantalla facial (UNE-EN 166) — Soldadura, chispas, químicos

OÍDOS:
- Tapones (UNE-EN 352) — Ruido moderado
- Auriculares (UNE-EN 352) — Ruido fuerte (>85 dB)

RESPIRACIÓN:
- Mascarilla FFP1 (UNE-EN 149) — Polvo no tóxico
- Mascarilla FFP2 (UNE-EN 149) — Polvo tóxico, asbestos
- Mascarilla FFP3 (UNE-EN 149) — Agentes biológicos, alta concentración
- Mascarilla con filtro químico — Gases tóxicos
- Aparato respiratorio autónomo (SCBA) (UNE-EN 136) — Espacios confinados, gases

MANOS:
- Guantes antipunzantes (UNE-EN 388) — Riesgo de corte
- Guantes químicos (UNE-EN 374) — Productos químicos
- Guantes dieléctricos (UNE-EN 60903) — Riesgo eléctrico

PIES:
- Calzado de seguridad (UNE-EN ISO 20345) — Punta de acero
- Botas de agua (UNE-EN ISO 20345) — Zonas inundadas

CUERPO:
- Arneses (UNE-EN 361) — Caídas en altura
- Traje de protección química (UNE-EN 14602) — Químicos
- Traje de alta visibilidad (UNE-EN ISO 20471) — Tráfico, obras

NOTA IMPORTANTE: Todos los EPIs DEBEN llevar la marca CE. Si no tiene marca CE, no cumple normativa europea y no se puede usar.»`
      },
      {
        tipo: "ejemplo",
        titulo: "Cómo elegir el EPI correcto",
        contenido: `Situación: Un trabajador va a entrar a un pozo de bombeo para hacer una reparación.

¿Qué EPIs necesita?

1. CASCO (UNE-EN 397) — Siempre en espacios confinados
2. ARNES CON LINEA DE VIDA (UNE-EN 361) — Para rescate
3. DETECTOR DE GASES PORTÁTIL — No es EPI pero es obligatorio
4. APARATO RESPIRATORIO con filtro — Si la atmósfera no es segura
5. GUANTES DE SEGURIDAD (UNE-EN 388) — Para manipular
6. CALZADO DE SEGURIDAD (UNE-EN ISO 20345) — Siempre
7. GAFAS DE SEGURIDAD (UNE-EN 166) — Si hay riesgo de salpicadura

¿Qué NO necesita?
- No necesita chaqueta de alta visibilidad (no hay tráfico)
- No necesita auriculares (no hay ruido)
- No necesita pantalla facial (no hay chispas)

¿Ves? No es "ponete todo". Es: IDENTIFICÁ el riesgo → ELEGÍ el EPI adecuado → VERIFICÁ que cumpla norma → FORMÁ al trabajador.»`
      },
      {
        tipo: "pregunta",
        pregunta: "¿Qué marca DEBE tener un EPI para ser legal en España?",
        opciones: [
          "Marca ISO",
          "Marca CE",
          "Marca UNE",
          "Marca INSST"
        ],
        correcta: 1,
        explicacion: "Todos los EPIs deben llevar la marca CE (Conformité Européenne). Sin esa marca, el EPI no cumple la directiva europea y no se puede usar profesionalmente. Si ves un casco sin marca CE, no lo uses."
      },
      {
        tipo: "pregunta",
        pregunta: "¿Quién debe proporcionar los EPIs a los trabajadores?",
        opciones: [
          "El trabajador se los compra",
          "El sindicato los provee",
          "La empresa, de forma gratuita",
          "El servicio de prevención"
        ],
        correcta: 2,
        explicacion: "La empresa DEBE proporcionar los EPIs de forma gratuita. El trabajador tiene la obligación de USARLOS y CUIDARLOS. Si la empresa no los da, está cometiendo una infracción grave."
      },
      {
        tipo: "resumen",
        contenido: `Puntos para recordar:
• Los EPIs son la ÚLTIMA línea de defensa
• Marca CE obligatoria para todos
• La empresa los da GRATIS, el trabajador los USA
• Elegí el EPI según el RIESGO IDENTIFICADO
• Cada EPI tiene su norma UNE-EN específica
• Formá al trabajador en uso, limpieza y mantenimiento`
      }
    ]
  },
  {
    id: "leccion-7",
    titulo: "Planes de Emergencia y Evacuación",
    modulo: "practica",
    duracion: "25 min",
    icono: "🚨",
    objetivos: [
      "Entender qué es un plan de emergencia y cuándo es obligatorio",
      "Saber cómo se estructura un plan de emergencia",
      "Conocer los tipos de emergencias en sectores industriales",
      "Aprender el protocolo de evacuación"
    ],
    secciones: [
      {
        tipo: "narrativa",
        contenido: `Profesor: «Vamos a hablar de algo que NADIE quiere que pase pero que TODOS tienen que tener preparado: las emergencias.

Un plan de emergencia es el documento que dice QUÉ HACER cuando las cosas salen mal. Incendio, explosión, derrame de químicos, accidente grave... Todo está escrito AHÍ.

¿Es obligatorio? Depende. Si tu empresa tiene riesgos graves (químicos, explosivos, espacios confinados, más de 50 trabajadores en ciertos sectores), SÍ. Y si trabajás en saneamiento, tenés riesgos de: intoxicación por gases, ahogamiento, explosiones de metano, caídas a profundidad...

¿Sabés qué hacer si escuchás la alarma? Muchos trabajadores se paniquean o hacen cosas incorrectas. El plan de emergencia es como un guion de película: todos saben su rol.»`
      },
      {
        tipo: "concepto-clave",
        titulo: "Estructura de un Plan de Emergencia",
        contenido: `Todo plan de emergencia tiene estas partes:

1. IDENTIFICACIÓN DE EMERGENCIAS POSIBLES
- ¿Qué puede salir mal en ESTA empresa?
- Incendio, explosión, derrame, accidente grave, derrumbe

2. ORGANIZACIÓN
- Equipo de emergencia (quién hace qué)
- Cadena de mando (quién avisa a quién)
- Números de contacto (112, bomberos, hospital)

3. PROCEDIMIENTOS
- Alarma: cómo se activa, quién la activa
- Evacuación: rutas, puntos de reunión, conteo de personal
- Primeros auxilios: quién está habilitado
- Extinción: quién usa los extintores
- Rescate: quién entra (solo con equipo y formación)

4. MEDIOS MATERIALES
- Extintores, bocas de incendio
- Alarmas, megáfonos
- Botiquines, camillas
- Señalización de emergencia

5. FORMACIÓN Y SIMULACROS
- Capacitación periódica
- Simulacros al menos 1 vez al año
- Evaluación de resultados`
      },
      {
        tipo: "ejemplo",
        titulo: "Caso práctico: Emergencia en estación de bombeo",
        contenido: `SITUACIÓN: Se detecta una fuga de gas en una estación de bombeo de aguas residuales. Un trabajador se desmaya.

LO QUE SE HACE (según el plan):
1. EL TRABAJADOR que ve el desmayo NO ENTRA al espacio confinado
2. ACTIVA la alarma (pulsador de emergencia)
3. EL VIGILANTE confirma la emergencia por radio
4. EL JEFE DE EQUIPO activa el protocolo de evacuación parcial
5. EL EQUIPO DE RESCATE (2 personas con EPIs de respiración y arneses) entra a rescatar
6. EL MÉDICO del trabajo atiende al trabajador en el punto de reunión
7. SE LLAMA al 112
8. SE REGISTRA el accidente en el libro de registro

TIEMPO total: menos de 5 minutos si todos saben su rol.»`
      },
      {
        tipo: "pregunta",
        pregunta: "¿Cuántas veces al año se debe hacer un simulacro de emergencia como mínimo?",
        opciones: [
          "Una vez cada 2 años",
          "Al menos una vez al año",
          "Solo cuando la Inspección lo pide",
          "No es obligatorio hacer simulacros"
        ],
        correcta: 1,
        explicacion: "El Real Decreto 39/1997 y sus actualizaciones establecen que los simulacros de emergencia se deben realizar al menos una vez al año. En empresas con riesgos graves, pueden ser más frecuentes."
      }
    ]
  },
  {
    id: "leccion-8",
    titulo: "Coordinación de Empresas en Obras",
    modulo: "practica",
    duracion: "20 min",
    icono: "🏗️",
    objetivos: [
      "Entender qué es la coordinación de actividades preventivas",
      "Saber quién es el Coordinador de Seguridad",
      "Conocer las obligaciones de cada empresa en una obra",
      "Comprender la responsabilidad solidaria"
    ],
    secciones: [
      {
        tipo: "narrativa",
        contenido: `Profesor: «Si trabajás en saneamiento, es MUY probable que termines trabajando en una obra de construcción. Y en una obra, hay MUCHAS empresas trabajando al mismo tiempo: albañiles, electricistas, fontaneros, gasistas, tu empresa de saneamiento...

¿Qué pasa si cada uno hace la seguridad por su cuenta? ¡CAOS! Nadie sabe qué riesgos genera el otro. Por eso existe la COORDINACIÓN DE ACTIVIDADES PREVENTIVAS.

Es simple: ALGUIEN tiene que coordinar la seguridad de TODOS. Y ese alguien es el Coordinador de Seguridad y Salud, que es obligatorio en obras de más de un año o más de 500 m².»`
      },
      {
        tipo: "concepto-clave",
        titulo: "El Coordinador de Seguridad y Salud",
        contenido: `¿Quién es? Un técnico habilitado (arquitecto, ingeniero, o técnico superior en prevención) que la empresa CONTRATA para coordinar la seguridad de TODA la obra.

¿Qué hace?
• Revisa los planes de seguridad de CADA empresa que entra a la obra
• Identifica riesgos que SURGEN de la interacción entre empresas
• Coordina las medidas preventivas compartidas
• Supervisa que se cumplan las normas
• Informa al director de la obra de incidencias

¿Cuándo es obligatorio?
• Obras con duración prevista > 1 año
• Obras con > 500 m² de superficie

¿Quién lo paga?
• El dueño de la obra (promotor). Se incluye en el presupuesto.»`
      },
      {
        tipo: "ejemplo",
        titulo: "Caso práctico: Saneamiento en obra de edificación",
        contenido: `SITUACIÓN: Sos técnico de saneamiento en una obra de un edificio de 8 pisos. Ya están los albañiles, los electricistas, y ahora entra tu empresa para hacer las instalaciones de agua y desagüe.

LO QUE TENÉS QUE HACER ANTES DE EMPEZAR:
1. ENTREGAR tu plan de prevención al Coordinador
2. RECIBIR la información de riesgos de la obra (planos, niveles, accesos)
3. IDENTIFICAR riesgos COMPARTIDOS:
   - Trabajo en altura (albañiles arriba de vos)
   - Ruido (albañiles taladrando mientras vos instalás)
   - Polvo (corte de paredes para instalaciones)
   - Riesgo de caída de objetos (desde niveles superiores)
4. COORDINAR con los otros jefes de equipo:
   - Horarios de trabajo que se superponen
   - Zonas comunes de paso
   - Almacenamiento de materiales

DURANTE LA OBRA:
• Asistir a las reuniones de coordinación (semanales o quincenales)
• Reportar al Coordinador cualquier incidencia
• Mantener tu zona de trabajo ordenada para que otros no tengan riesgos

Esto NO es opcional. Si no coordinás, y alguien se lastima por tu culpa, respondés SOLIDARIAMENTE con las otras empresas.»`
      },
      {
        tipo: "comparativa",
        titulo: "Argentina vs España en coordinación",
        contenido: `ARGENTINA:
• El Coordinador de Prevención existe pero se cumple poco
• En obras chicas, casi nunca lo designan
• Si hay accidente, la ART investiga después

ESPAÑA:
• El Coordinador es OBLIGATORIO y CONTROLADO
• La Inspección de Trabajo hace visitas frecuentes a obras
• Si no hay Coordinador, la obra puede ser PARALIZADA
• El promotor (dueño) responde SOLIDARIAMENTE

COMO TÉCNICO argentino en España: vas a notar que en las obras todo es más organizado. Los permisos, las reuniones, la documentación. No es burocracia inútil, es prevención.»`
      },
      {
        tipo: "resumen",
        contenido: `Puntos clave:
• En obras grandes, HAY que tener Coordinador de Seguridad
• Tu empresa (saneamiento) DEBE entregar su plan de prevención al Coordinador
• COORDINÁ con las otras empresas: ruido, polvo, altura, accesos
• Si no coordinás y hay accidente, respondés solidariamente
• Las reuniones de coordinación son OBLIGATORIAS, no opcionales`
      }
    ]
  },
  {
    id: "leccion-9",
    titulo: "Trabajo en Altura y Prevención de Caídas",
    modulo: "especializacion",
    duracion: "30 min",
    icono: "🏗️",
    objetivos: [
      "Entender qué se considera trabajo en altura en España",
      "Conocer el RD 2177/2004 sobre trabajo en altura",
      "Saber qué EPIs son obligatorios para trabajo en altura",
      "Aprender el protocolo de trabajo con arnés"
    ],
    secciones: [
      {
        tipo: "narrativa",
        contenido: `Profesor: «Las caídas son la PRIMERA causa de muerte laboral en España. Y en saneamiento, trabajás en altura más de lo que pensás: techos de naves industriales, cubiertas, azoteas para instalar sistemas de ventilación, andamios...

¿Qué es trabajo en altura? Según el RD 2177/2004, es cualquier trabajo donde hay riesgo de caída de una altura de 2 metros o más.

¿Y en saneamiento? Si cambiás un filtro en el techo de una fábrica, si instalás tuberías en una nave industrial, si revisás una torre de refrigeración... todo eso es trabajo en altura.»`
      },
      {
        tipo: "concepto-clave",
        titulo: "Las 3 opciones para trabajar en altura",
        contenido: `OPCIÓN 1: PROTECCIÓN COLECTIVA (la mejor)
• Barandillas de al menos 90 cm
• Redes de seguridad debajo
• Plataformas elevadoras con barandilla
• Si es posible, usá ESTA opción

OPCIÓN 2: TRABAJO CON ANDAMIOS
• Andamios homologados con barandilla y rodapié
• Revisión antes de cada uso
• No sobrecargar
• Solo personal formado

OPCIÓN 3: PROTECCIÓN INDIVIDUAL (el EPI)
• Arnés anticaídas con absorbedor de impactos
• Línea de vida o guía de anclaje
• Punto de anclaje certificado (mínimo 1000 kg de resistencia)
• Solo cuando NO se puede usar protección colectiva

REGLA: Si podés hacer el trabajo SIN subirte a nada, MEJOR. Primero pensá: ¿se puede hacer desde abajo?»`
      },
      {
        tipo: "ejemplo",
        titulo: "Caso práctico: Cambio de filtro en techo de naves",
        contenido: `SITUACIÓN: Tenés que cambiar los filtros de una torre de ventilación industrial. Los filtros están a 4 metros de altura, sobre la cubierta de la nave.

LO QUE HACÉS:
1. ANTES: Evaluás el riesgo de caída (4 metros = obligatorio protección)
2. Verificás si hay puntos de anclaje certificados en la cubierta
3. Si NO hay puntos de anclaje → PEDÍ que instalen (protección colectiva primero)
4. Si hay puntos → usás arnés + línea de vida + absorbedor
5. Verificás el arnés: sin roturas, hebillas funcionando, absorbedor sin abrir
6. Te anclás SIEMPRE antes de subirte al borde
7. Trabajás con las 3 puntos de contacto (2 manos 1 pie o 2 pies 1 mano)
8. Al bajar, DESANCLÁS cuando estás en zona segura

LO QUE NO HACÉS JAMÁS:
✗ Trabajar sin arnés porque "es solo un ratito"
✗ Anclarte a una cañería (no resiste 1000 kg)
✗ Bajar del andamio por el lado (siempre por la escalera)»`
      },
      {
        tipo: "pregunta",
        pregunta: "¿Cuál es la altura mínima para que se apliquen las normas de trabajo en altura?",
        opciones: [
          "1 metro",
          "1.5 metros",
          "2 metros",
          "3 metros"
        ],
        correcta: 2,
        explicacion: "Según el RD 2177/2004, las normas de prevención de caídas se aplican a partir de 2 metros de altura. Por debajo de 2 metros, se evalúa caso a caso."
      },
      {
        tipo: "resumen",
        contenido: `Puntos clave:
• Las caídas son la causa #1 de muerte laboral en España
• Trabajo en altura = desde 2 metros o más
• Primero protección COLECTIVA, después INDIVIDUAL
• Arnés con absorbedor, línea de vida, punto de anclaje certificado (1000 kg)
• SIEMPRE verificar el equipo antes de usarlo
• Si trabajás en saneamiento en techos/andamios, esto es TU día a día`
      }
    ]
  },
  {
    id: "leccion-10",
    titulo: "Agentes Químicos y Cancerígenos en Saneamiento",
    modulo: "especializacion",
    duracion: "35 min",
    icono: "⚗️",
    objetivos: [
      "Identificar los agentes químicos más peligrosos en saneamiento",
      "Entender la Ficha de Datos de Seguridad (FDS)",
      "Conocer el RD 374/2001 (químicos) y RD 665/1997 (cancerígenos)",
      "Saber qué hacer en caso de derrame o exposición"
    ],
    secciones: [
      {
        tipo: "narrativa",
        contenido: `Profesor: «En saneamiento, trabajás con sustancias químicas TODOS LOS DÍAS. Y no son trivialidades: son ácidos, hipoclorito, cloro, sulfuro de hidrógeno, metano...

¿Sabés qué hay en el agua residual? De todo: residuos industriales, productos de limpieza, medicamentos, metales pesados. Y cuando limpiás un desagüe o una cámara, estás expuesto a TODO eso.

El RD 374/2001 regula los agentes químicos peligrosos. El RD 665/1997 regula los cancerígenos. Y en saneamiento, tenés riesgos de AMBOS.

Vamos a ver los químicos más peligrosos que vas a encontrar en tu laburo.»`
      },
      {
        tipo: "concepto-clave",
        titulo: "Los químicos más peligrosos en saneamiento",
        contenido: `1. ÁCIDO CLORHÍDRICO (HCl)
• Uso: limpieza de depósitos, desincrustación de tuberías
• Peligro: quemaduras químicas, daño respiratorio
• EPI: guantes anticuímicos, gafas, mascarilla con filtro

2. HIPOCLORITO SÓDICO (lejía industrial)
• Uso: desinfección de aguas, potabilización
• Peligro: corrosivo, libera cloro gaseoso si se mezcla con ácido
• NUNCA mezclar lejía con ácido = GAS CLORO MORTAL

3. SULFURO DE HIDRÓGENO (H₂S)
• Se genera espontáneamente en aguas residuales
• Huele a huevos podridos (a bajas concentraciones)
• A altas concentraciones APAGA el olfato → te mata sin que te des cuenta
• Límite: 0 ppm (cero)

4. METANO (CH₄)
• Se genera por descomposición orgánica
• ES INODORO (no lo sentís)
• EXPLOTA al 5-15% en el aire
• Causa explosiones en pozos y cámaras

5. MONÓXIDO DE CARBONO (CO)
• Inodoro, incoloro
• Se genera por combustión incompleta
• Muy peligroso en espacios confinados con motores diésel

6. FORMALDEHÍDO (HCHO)
• Cancerígeno confirmado (RD 665/1997)
• Presente en algunos tratamientos de aguas
• Irrita ojos, nariz, garganta. Cáncer a largo plazo»`
      },
      {
        tipo: "concepto-clave",
        titulo: "La Ficha de Datos de Seguridad (FDS)",
        contenido: `La FDS es tu BIBLIA cuando trabajás con químicos. Tiene 16 puntos:

1. Identificación del producto
2. Identificación de peligros
3. Composición
4. Primeros auxilios
5. Medidas de lucha contra incendios
6. Medidas en caso de vertido accidental
7. Manipulación y almacenamiento
8. Controles de exposición
9. Propiedades físicas y químicas
10. Estabilidad y reactividad
11. Información toxicológica
12. Información ecológica
13. Consideraciones relativas al transporte
14. Información reglamentaria
15. Otra información
16. Identificación del fabricante

SIEMPRE pedí la FDS de cada químico que uses. Si no la tenés, estás trabajando a ciegas.»`
      },
      {
        tipo: "ejemplo",
        titulo: "Caso práctico: Derrame de hipoclorito en planta de tratamiento",
        contenido: `SITUACIÓN: Se derramaron 20 litros de hipoclorito concentrado (150 g/l) en la sala de dosificación. El olor es fuerte.

PROTOCOLO DE ACTUACIÓN:
1. NO ENTRAR sin EPI (guantes, gafas, mascarilla con filtro para gases ácidos)
2. CORTAR la ventilación del sector para que no se expanda
3. VENTILAR abriendo puertas y ventanas exteriores
4. AISLAR la zona (cinta de peligro, nadie entra)
5. CONTENER el derrame con material absorbente (no se lava con agua)
6. RECUBRIR con absorbente químico específico
7. RECOGER en bidón homologado para residuos peligrosos
8. ETIQUETAR el bidón con tipo de producto y cantidad
9. LIMPIAR el area con agua y jabón abundante
10. REGISTRAR el incidente en el libro de registro

SI HAY PERSONAL EXPUESTO:
• Sacarlo al aire libre
• Quitarle la ropa contaminada
• Lavar la piel con agua abundante 15 minutos
• Llamar al 112 si hay síntomas»`
      },
      {
        tipo: "resumen",
        contenido: `Puntos clave para el examen:
• FDS = obligatoria para cada químico. 16 puntos.
• NUNCA mezclar lejía + ácido = gas cloro mortal
• H₂S apaga tu olfato a altas concentraciones = TRAMPA MORTAL
• Metano EXPLOTA al 5-15% = sin chispas cerca
• Cancerígenos: vigilancia de la salud REFORZADA
• En derrames: primero tu seguridad, después el plan de emergencia
• SIEMPRE pedí la FDS antes de usar cualquier químico`
      }
    ]
  }
];

const PROFESOR_MODULOS = [
  { id: "fundamentos", titulo: "Fundamentos", icono: "🏛️", descripcion: "Bases del sistema de prevención español" },
  { id: "practica", titulo: "En la Práctica", icono: "🔧", descripcion: "Lo que hacés como prevencionista día a día" },
  { id: "especializacion", titulo: "Especialización", icono: "⚠️", descripcion: "Temas críticos para tu sector" }
];
