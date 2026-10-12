const PRL_DATA = {
  sections: [
    {
      id: "marco-normativo",
      title: "Marco Normativo Español",
      icon: "\u2696\uFE0F",
      description: "Leyes, Reales Decretos y normativa fundamental de PRL en España",
      categories: [
        {
          id: "leyes-principales",
          title: "Leyes Principales",
          items: [
            {
              id: "ley-31-1995",
              title: "Ley 31/1995 de Prevención de Riesgos Laborales",
              type: "ley",
              status: "obligatoria",
              summary: "Es la LEY MADRE de todo. En Argentina equivale a la Ley 19.587 pero mucho más completa. Si tenés que estudiar UNA sola cosa, es esta.",
              keyPoints: [
                "Art. 14: El empresario DEBE garantizar la seguridad. Si no lo hace, multas graves.",
                "Art. 15: Principios preventivos - evitar riesgos, adaptar el trabajo a la persona, combatir en origen",
                "Art. 16: Evaluación de riesgos - VOS como técnico vas a hacer esto TODO EL DÍA",
                "Art. 19: Formación obligatoria de los trabajadores",
                "Art. 22: Vigilancia de la salud del trabajador",
                "Art. 23: Documentación obligatoria - evaluación, planificación, formación, emergencia",
                "Art. 35-40: Delegado de prevención y Comité de Seguridad y Salud",
                "Art. 44: Coordinación de empresas en obras de construcción"
              ],
              relations: ["rd-39-1997", "El RD 39/1997 te dice CÓMO aplicar esta ley en la práctica"],
              usefulLinks: [
                { text: "Texto completo - BOE (Ley 31/1995)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292" }
              ],
              comoLoUso: "Como técnico, esta ley es tu manual de obligaciones. Cuando una empresa te contrate, vos le vas a decir: 'Según el Art. 16, tengo que evaluar estos riesgos. Según el Art. 23, necesito esta documentación.' Es tu herramienta para que te tomen en serio."
            },
            {
              id: "ley-17-2011",
              title: "Ley 17/2011 de Seguridad Alimentaria",
              type: "ley",
              status: "complementaria",
              summary: "La Ley 17/2011 de Seguridad Alimentaria y Nutrición regula las condiciones de higiene, inocuidad y control sanitario a lo largo de toda la cadena alimentaria («de la granja a la mesa»).\nPara el técnico de prevención y saneamiento ambiental, esta ley es de aplicación directa en industrias agroalimentarias, mataderos, conserveras y cocinas industriales. Impone el principio de responsabilidad objetiva de los operadores económicos (Art. 28), la trazabilidad obligatoria de lotes e ingredientes hacia atrás y hacia adelante (Art. 30), la implantación del sistema de autocontrol APPCC / HACCP y Planes Generales de Higiene (Art. 31), los protocolos de limpieza y desinfección (L+D), y el control integral de plagas (DDD: Desinfección, Desinsectación y Desratización) mediante empresas y biocidas autorizados (Art. 35).",
              keyPoints: [
                "Art. 1 y 2: Objeto y principio de precaución en la protección de la salud de los consumidores en toda la cadena alimentaria.",
                "Art. 28: Responsabilidad de los operadores de empresas alimentarias en garantizar la inocuidad en todas las fases bajo su control.",
                "Art. 30: Trazabilidad obligatoria hacia atrás, interna y hacia adelante para rastrear cualquier ingrediente en cuestión de horas.",
                "Art. 31: Implantación y mantenimiento obligatorio del sistema de autocontrol basado en los 7 principios del APPCC / HACCP.",
                "Art. 35: Obligaciones de limpieza, desinfección (L+D) y control integral de plagas (DDD) en instalaciones y utillajes en contacto con alimentos.",
                "Registro de servicios biocidas (ROESB) y uso exclusivo de productos biocidas autorizados para industria alimentaria (tipo TP4).",
                "Arts. 48 y 49: Régimen sancionador específico con multas severas y clausura cautelar de instalaciones infractoras."
              ],
              relations: ["Aplicable a industria alimentaria y saneamiento"],
              usefulLinks: [
                { text: "Texto completo - BOE (Ley 17/2011)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2011-11604" }
              ],
              comoLoUso: "PROTOCOLO DE ACTUACIÓN EN INDUSTRIA ALIMENTARIA Y CONTROL DE PLAGAS:\n1. CONTROL DE PLAGAS DDD: En plantas alimentarias, utilizar cebaderos de seguridad rígidos, numerados y fijados al suelo, utilizando cebos no dispersables (bloques parafinados) y trampas de luz ultravioleta con lámina adhesiva (prohibidas las de electrocución).\n2. PREVENCIÓN DE CONTAMINACIÓN CRUZADA: Diseñar los protocolos de limpieza y desinfección (L+D) verificando que los productos de limpieza cuenten con registro de aptitud alimentaria HA.\n3. TRAZABILIDAD Y REGISTROS: Mantener al día los partes de trabajo y diagnosis de plagas con planos de ubicación de cebaderos para las auditorías de Sanidad."
            },
            {
              id: "ley-34-2007",
              title: "Ley 34/2007 de Salud Ambiental",
              type: "ley",
              status: "complementaria",
              summary: "La Ley 34/2007 de Calidad del Aire y Protección de la Atmósfera establece el marco normativo para prevenir, vigilar y reducir la contaminación atmosférica derivada de actividades industriales.\nPara el técnico de saneamiento y plantas de tratamiento, clasifica las instalaciones industriales en los Grupos A, B y C del Catálogo de Actividades Potencialmente Contaminadoras de la Atmósfera (CAPCA). Impone a los titulares la obligación de respetar los Valores Límite de Emisión (VLE) autorizados (Art. 12), someter los focos emisores a controles reglamentarios periódicos mediante Entidades de Inspección Acreditadas (ECA/OCA) (Art. 13), mantener libros de registro foliados de chimeneas y biofiltros, y fija sanciones económicas de hasta 2.000.000 de euros y clausura de instalaciones para infracciones muy graves (Arts. 30 a 33).",
              keyPoints: [
                "Art. 1 y 3: Objeto y clasificación de actividades industriales en los Grupos A, B y C del Catálogo CAPCA.",
                "Art. 12: Obligaciones de los titulares: cumplir valores límite de emisión, realizar autocontroles y mantener libros de registro foliados.",
                "Art. 13: Controles reglamentarios e inspecciones periódicas a través de Entidades de Inspección Acreditadas (ECA/OCA).",
                "Bocas de toma de muestras normalizadas en chimeneas según norma UNE-EN 15259 con plataformas de acceso seguras dotadas de barandillas.",
                "Arts. 30 a 33: Régimen sancionador ambiental: infracciones muy graves castigadas con multas de hasta 2.000.000 de euros y clausura de instalaciones.",
                "Conexión penal: El Art. 325 del Código Penal tipifica penas de prisión para emisiones contaminantes que pongan en peligro grave la salud o el medio ambiente."
              ],
              relations: ["Directamente ligada a saneamiento industrial"],
              usefulLinks: [
                { text: "Texto completo - BOE (Ley 34/2007)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-19744" }
              ],
              comoLoUso: "PROTOCOLO PARA CONTROL DE EMISIONES Y CALIDAD DEL AIRE:\n1. CATALOGACIÓN CAPCA: Comprobar el grupo CAPCA (A, B o C) de las chimeneas de calderas de biogás, motores de cogeneración o biofiltros de la depuradora EDAR.\n2. ACCESO SEGURO A TOMAS DE MUESTRAS: Verificar que las tomas de muestra en chimeneas cuenten con plataforma fija, escalera con protección dorsal o línea de vida vertical y barandilla reglamentaria para las inspecciones de la ECA.\n3. CONTROL DE REGISTROS: Archivar los informes de inspección reglamentaria de la ECA y registrar las horas de funcionamiento y cambios de filtros de carbón activo."
            }
          ]
        },
        {
          id: "reales-decretos",
          title: "Reales Decretos Clave",
          items: [
            {
              id: "rd-39-1997",
              title: "RD 39/1997 - Servicios de Prevención",
              type: "real-decreto",
              status: "obligatoria",
              summary: "El Reglamento de los Servicios de Prevención (Real Decreto 39/1997) es la norma técnica y reglamentaria madre que desarrolla operativamente la Ley 31/1995. Si la Ley establece 'qué' obligaciones tiene la empresa, este Real Decreto dicta con exactitud 'cómo' implementarlas paso a paso.\nRegula de forma exhaustiva: la integración obligatoria de la prevención en todos los niveles jerárquicos de la empresa (Art. 1); la estructura, aprobación formal y contenido preceptivo del Plan de Prevención (Art. 2); la metodología técnica para la evaluación inicial y periódica de riesgos laborales (Arts. 3 a 7); la planificación preventiva con asignación de plazos, presupuesto y responsables (Arts. 8 y 9); las modalidades de organización preventiva (asunción personal, designación de trabajadores, Servicio de Prevención Propio SPP, Servicio Ajeno SPA y Mancomunado SPM); la presencia física obligatoria del Recurso Preventivo (Art. 22 bis); el régimen de auditorías externas reglamentarias obligatorias (Arts. 29 a 33); y los tres niveles de cualificación técnica para ejercer funciones preventivas en España (Básico 30h/50h, Intermedio FP y Superior Universitario de 600 horas).",
              keyPoints: [
                "Art. 1 y 2: Integración obligatoria de la prevención en toda la línea jerárquica y formalización por escrito del Plan de Prevención con aprobación de la dirección.",
                "Arts. 3 a 7: Evaluación de riesgos por puesto de trabajo mediante métodos reconocidos del INSST (NTPs), normas UNE o ISO, con revisión preceptiva tras accidentes, daños a la salud o cambios de maquinaria.",
                "Arts. 8 y 9: Planificación preventiva obligatoria con priorización de riesgos, plazos de ejecución, asignación presupuestaria y responsables con nombre y apellidos.",
                "Arts. 10 y 11: Modalidades organizativas. Asunción personal por el empresario permitida en empresas de hasta 10 trabajadores (o 25 en un único centro) si tiene presencia habitual y no realiza tareas del Anexo I.",
                "Art. 14: Obligatoriedad de Servicio de Prevención Propio (SPP) en empresas de más de 500 trabajadores, o de más de 250 si desarrollan actividades peligrosas del Anexo I.",
                "Art. 15: El SPP debe contar con al menos dos especialidades técnicas propias (de las 4: Seguridad, Higiene, Ergonomía/Psicosociología y Medicina del Trabajo).",
                "Art. 16: Concierto con Servicios de Prevención Ajenos (SPA) acreditados para cubrir las especialidades no asumidas internamente.",
                "Art. 22 bis: Presencia preceptiva y física permanente del Recurso Preventivo en operaciones con riesgos agravados, caídas >2 m, zanjas >2 m o Anexo I.",
                "Art. 30: Auditoría reglamentaria obligatoria del sistema de prevención cada 4 años (o cada 2 años para empresas con actividades del Anexo I).",
                "Arts. 34 a 37: Capacitación para el desempeño de funciones preventivas: Nivel Básico (30h o 50h en Anexo I), Nivel Intermedio y Nivel Superior Técnico (600 horas).",
                "Anexo I: Catálogo de actividades de riesgo especial (radiaciones, cancerígenos, biológicos grupos 3 y 4, explosivos, minería, inmersión, zanjas, altura y alta tensión)."
              ],
              relations: ["Desarrolla la Ley 31/1995"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 39/1997)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1997-1853" }
              ],
              comoLoUso: "PROTOCOLO DIARIO Y GUÍA DE ACTUACIÓN DEL TÉCNICO SEGÚN EL RD 39/1997:\n1. VERIFICACIÓN DE MODALIDAD: Comprobar la modalidad organizativa preventiva de la empresa ante la Autoridad Laboral (asunción por el empresario, trabajadores designados, SPP propio o concierto con SPA).\n2. REVISIÓN DEL PLAN DE PREVENCIÓN: Verificar que el Plan de Prevención esté aprobado formalmente por la máxima dirección de la empresa y asigne tareas preventivas específicas a cada jefe de obra, encargado y mando intermedio.\n3. EJECUCIÓN DE LA EVALUACIÓN DE RIESGOS: Aplicar en cada puesto de trabajo métodos técnicos oficiales (INSST Binario o Fine). Cuantificar Probabilidad y Consecuencia. Si el riesgo no es tolerable, redactar de inmediato la Planificación Preventiva.\n4. PLANIFICACIÓN CON PRESUPUESTO: Para cada riesgo detectado, fijar la medida preventiva, el presupuesto asignado, la fecha límite de ejecución y el responsable directo de seguimiento.\n5. DESIGNACIÓN Y CONTROL DE RECURSO PREVENTIVO: En operaciones con caídas de altura, espacios confinados o zanjas, verificar que el Recurso Preventivo designado cuente con curso de 50 horas y permanezca físicamente in situ vigilando la maniobra durante todo su desarrollo.\n6. CONTROL DE AUDITORÍA REGLAMENTARIA: Si la empresa gestiona la prevención con medios propios, auditar el sistema cada 4 años (o cada 2 años si la actividad está en el Anexo I)."
            },
            {
              id: "rd-1215-1997",
              title: "RD 1215/1997 - Equipos de Trabajo",
              type: "real-decreto",
              status: "obligatoria",
              summary: "El Real Decreto 1215/1997 (que transpone la Directiva europea 2009/104/CE) regula las condiciones mínimas de seguridad y salud para la utilización por los trabajadores de TODOS los equipos de trabajo.\nLa norma abarca cualquier máquina, aparato, instrumento, instalación o vehículo utilizado en la empresa (maquinaria pesada, camiones cisterna, bombas sumergibles, herramientas manuales, andamios y escaleras). Establece la obligación de que todo equipo comercializado después del 1 de enero de 1995 ostente marcado CE y Declaración de Conformidad según el RD 1644/2008, mientras que los equipos anteriores a 1995 deben contar obligatoriamente con el Certificado de Adecuación a las disposiciones mínimas del Anexo I. Fija además las comprobaciones periódicas e inspecciones obligatorias con libro de mantenimiento, la formación teórico-práctica preceptiva para operadores de maquinaria, la consignación de energía cero (LOTO) en mantenimiento, y la prohibición expresa de elevar personas en equipos no diseñados para ello salvo excepciones estrictamente regladas.",
              keyPoints: [
                "Art. 3: Obligación del empresario de poner a disposición equipos seguros con marcado CE o adecuación certificada al Anexo I del RD 1215/1997.",
                "Art. 4: Comprobación inicial antes de la puesta en servicio y comprobaciones periódicas y tras transformaciones por personal cualificado, conservando registros documentales para la Inspección.",
                "Art. 5: Formación teórico-práctica obligatoria para operadores y disponibilidad del manual de instrucciones del fabricante en castellano.",
                "Anexo I.1: Órganos de accionamiento visibles y seguros, imposibilidad de arranque intempestivo, seta de parada de emergencia accesible y resguardos fijos o enclavados en partes móviles.",
                "Anexo I.1: Procedimiento obligatorio de consignación, bloqueo y etiquetado (LOTO: Lockout/Tagout) en operaciones de mantenimiento, engrase y limpieza.",
                "Anexo I.2: Disposiciones para equipos móviles: estructuras antivuelco ROPS, protección contra caída de objetos FOPS, cinturón de seguridad y avisador acústico de marcha atrás.",
                "Anexo I.2: Equipos de elevación: indicación visible de la Carga Máxima Admisible (CMA), limitadores de carga y pestillos de seguridad operativos en todos los ganchos.",
                "Anexo II.2: Prohibición taxativa de elevación de personas con carretillas elevadoras sobre palets o con cazos de excavadora salvo habitáculos homologados bajo estricto protocolo de emergencia.",
                "Anexo II.4: Regulación de trabajos en altura: escaleras de mano limitadas exclusivamente a accesos o trabajos puntuales de muy corta duración; andamios de más de 6 m con Plan de Montaje (PMUD) obligatorio."
              ],
              relations: ["Complementa el RD 773/1997 sobre EPIs"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 1215/1997)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1997-17824" }
              ],
              comoLoUso: "PROTOCOLO PRÁCTICO PARA INSPECCIÓN Y CONTROL DE EQUIPOS DE TRABAJO:\n1. AUDITORÍA DOCUMENTAL DEL EQUIPO: Solicitar placa de marcado CE, Declaración de Conformidad CE y manual del fabricante en castellano. Si el equipo es anterior a 1995, exigir el 'Certificado de Adecuación al RD 1215/1997' firmado por técnico titulado competente.\n2. REVISIÓN DE SEGURIDAD MECÁNICA Y PARADAS: Comprobar que transmisiones y poleas tengan resguardos fijos que impidan el acceso con los dedos; verificar que las puertas de mantenimiento tengan microinterruptores de seguridad asociados a parada; y accionar la parada de emergencia (seta) para verificar que corte la alimentación.\n3. PROTOCOLO DE CONSIGNACIÓN LOTO: Asegurarse de que en paradas de mantenimiento, limpieza o desatasco de tolvas y bombas se aplique candado personal de bloqueo eléctrico y neumático impidiendo el arranque accidental.\n4. CONTROL DE VEHÍCULOS Y MAQUINARIA PESADA: Comprobar en camiones y dumpers el funcionamiento del avisador acústico de marcha atrás, rotativo luminoso, cinturón de seguridad y estructura ROPS.\n5. PROHIBICIÓN DE PRÁCTICAS PELIGROSAS: Prohibir tajantemente subir operarios sobre las uñas de una carretilla elevadora o en el cazo de una retroexcavadora."
            },
            {
              id: "rd-773-1997",
              title: "RD 773/1997 - Equipos de Protección Individual",
              type: "real-decreto",
              status: "obligatoria",
              summary: "El Real Decreto 773/1997 fija las disposiciones mínimas sobre la elección, utilización, mantenimiento y control de los Equipos de Protección Individual (EPIs).\nConsagra el principio jurídico de que el EPI es el ÚLTIMO recurso preventivo: únicamente procede su utilización cuando los riesgos no hayan podido evitarse o limitarse suficientemente por medios técnicos de protección colectiva o medidas organizativas. Regula la obligación del empresario de suministrar gratuitamente los EPIs debidamente certificados con marcado CE (conforme al Reglamento UE 2016/425), impartir entrenamiento práctico para equipos complejos (Categoría III contra caídas y gases), reponerlos cuando se deterioren y vigilar su uso efectivo, así como el deber correlativo del trabajador de utilizarlos conforme a las instrucciones recibidas.",
              keyPoints: [
                "Art. 2: Definición de EPI y exclusiones legales (ropa de trabajo corriente, uniformes ordinarios, equipos de socorro, policía y armas de defensa).",
                "Art. 3: Principio de prioridad preventiva: la protección colectiva prima siempre sobre la individual. El EPI es el último recurso ante el riesgo residual.",
                "Arts. 4 y 5: Condiciones que deben reunir los EPIs: marcado CE según Reglamento UE 2016/425, adecuación al riesgo, ergonomía y compatibilidad física entre ellos.",
                "Art. 7: Gratuidad absoluta, suministro, mantenimiento, limpieza y reposición a cargo exclusivo del empresario. Prohibido descontar su coste al trabajador.",
                "Art. 8: Obligaciones de información y entrenamiento práctico obligatorio antes del uso de EPIs de Categoría III (arneses anticaídas y protección respiratoria).",
                "Art. 10: Obligaciones del trabajador de utilizar y cuidar correctamente los EPIs, guardarlos en el lugar asignado y comunicar desperfectos de inmediato."
              ],
              relations: ["Complementa el RD 1215/1997"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 773/1997)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1997-12735" }
              ],
              comoLoUso: "PROTOCOLO TÉCNICO DE GESTIÓN DE EPIS:\n1. ANÁLISIS DE RIESGOS RESIDUALES: Determinar qué riesgos persisten tras adoptar protecciones colectivas y consultar las normas UNE-EN aplicables (calzado S3 UNE-EN ISO 20345, guantes UNE-EN 388, arneses UNE-EN 361).\n2. DOCUMENTO DE ENTREGA FORMAL: Entregar los EPIs con registro individualizado firmado por el trabajador indicando fecha, modelo exacto, marcado CE y acuse de recibo de las instrucciones de uso.\n3. SESIÓN DE ENTRENAMIENTO PRÁCTICO: Para arneses anticaídas o máscaras con filtros, realizar una sesión práctica donde el operario se coloque el equipo, ajuste los tirantes y verifique los mosquetones.\n4. MANTENIMIENTO Y REPOSICIÓN: Inspeccionar periódicamente el estado de conservación de los EPIs y retirar de inmediato los equipos caducados o que hayan sufrido caídas previas."
            },
            {
              id: "rd-374-2001",
              title: "RD 374/2001 - Agentes Químicos",
              type: "real-decreto",
              status: "obligatoria",
              summary: "El Real Decreto 374/2001 regula la protección de los trabajadores contra los riesgos derivados de la presencia o utilización de agentes químicos peligrosos durante el trabajo.\nEstablece la obligatoriedad de evaluar los riesgos mediante las Fichas de Datos de Seguridad (FDS de 16 epígrafes normalizados) y mediciones higiénicas cuantitativas de las concentraciones en aire, comparándolas con los Valores Límite Ambientales (VLA-ED y VLA-EC) publicados oficialmente por el INSST. Exige la sustitución prioritaria de productos químicos peligrosos por alternativas inocuas, sistemas cerrados de contención, extracción localizada en origen, disponibilidad de duchas y lavaojos de emergencia a menos de 15 metros, vigilancia médica periódica y control de metabolitos mediante Valores Límite Biológicos (VLB).",
              keyPoints: [
                "Art. 2: Definiciones técnicas: agente químico peligroso (clasificado según CLP), VLA-ED (8 horas), VLA-EC (15 minutos) y Valor Límite Biológico (VLB).",
                "Art. 3: Evaluación obligatoria de riesgos mediante Fichas de Datos de Seguridad (FDS) de 16 epígrafes y mediciones cuantitativas por Higienista Nivel Superior.",
                "Art. 4: Principio de sustitución prioritaria por sustancias no peligrosas y diseño de procesos en sistema cerrado.",
                "Art. 5: Medidas técnicas: extracción localizada en foco emisor, ventilación general, reducción al mínimo de trabajadores expuestos y orden estricto.",
                "Art. 6: Planes de emergencia ante derrames, sistemas de alarma, neutralizadores químicos y duchas de seguridad y lavaojos de emergencia a menos de 15 metros.",
                "Art. 7: Vigilancia de la salud y control biológico de biomarcadores en sangre u orina conforme a protocolos médicos oficiales del Ministerio de Sanidad.",
                "Art. 9: Prohibiciones expresas de fabricación y uso de los agentes químicos cancerígenos de alta toxicidad incluidos en el Anexo III."
              ],
              relations: ["Muy relevante para saneamiento e higiene industrial"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 374/2001)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2001-8436" }
              ],
              comoLoUso: "PROTOCOLO PRÁCTICO PARA RIESGO QUÍMICO EN INSTALACIONES Y SANEAMIENTO:\n1. ARCHIVO DE FICHAS DE SEGURIDAD: Exigir y archivar en el centro de trabajo las FDS actualizadas de 16 epígrafes en castellano de cada producto químico utilizado (lejía, sosa cáustica, ácido clorhídrico, reactivos).\n2. ETIQUETADO REGLAMENTARIO: Comprobar que todos los envases y recipientes de trasvase cuenten con etiqueta CLP con pictogramas de peligro, palabras de advertencia y frases H y P. Prohibir envases de bebidas para guardar químicos.\n3. MEDICIONES HIGIÉNICAS DE GASES: En presencia de emanaciones (H₂S, cloro, amoníaco), medir concentraciones en la zona respiratoria del operario con detector calibrado y comparar contra el VLA del INSST.\n4. REVISIÓN DE DUCHAS Y LAVAOJOS: Verificar semanalmente el funcionamiento y caudal de las duchas y lavaojos de seguridad, comprobando que se encuentren despejadas y con acceso inmediato."
            },
            {
              id: "rd-664-1997",
              title: "RD 664/1997 - Agentes Biológicos",
              type: "real-decreto",
              status: "obligatoria",
              summary: "El Real Decreto 664/1997 regula la protección de los trabajadores contra los riesgos derivados de la exposición a agentes biológicos (virus, bacterias, hongos y parásitos).\nClasifica los patógenos en 4 grupos de riesgo según su peligrosidad para el ser humano y su capacidad de propagación epidémica. Regula tanto las actividades con intención deliberada (laboratorios microbiológicos) como aquellas donde la exposición es potencial o involuntaria inherente al trabajo (saneamiento, depuración de aguas residuales, alcantarillado y recogida de residuos). Impone medidas higiénicas estrictas como vestuarios con taquillas dobles (separando ropa limpia y de trabajo), prohibición de lavado doméstico con lavandería industrial a cargo de la empresa, ofrecimiento formal y gratuito de vacunas eficaces (tétanos, hepatitis A y B) y custodia de expedientes médicos durante 10 o 40 años.",
              keyPoints: [
                "Art. 2: Definición legal de agente biológico y vías de entrada al organismo (inhalatoria, dérmica, digestiva y parenteral).",
                "Art. 3: Clasificación en 4 grupos de riesgo: Grupo 1 (inocuo), Grupo 2 (enfermedad sin propagación con tratamiento), Grupo 3 (enfermedad grave con propagación y tratamiento) y Grupo 4 (alta mortalidad y propagación sin tratamiento).",
                "Art. 4: Evaluación de riesgos en actividades sin intención deliberada (redes de alcantarillado, depuración EDAR, residuos urbanos).",
                "Arts. 7 y 8: Medidas higiénicas: taquillas dobles obligatorias, prohibición de comer o beber en zonas con riesgo y lavado de uniformes a cargo de la empresa.",
                "Art. 9: Vigilancia de la salud y ofrecimiento gratuito de vacunas eficaces (tétanos-difteria, hepatitis A y hepatitis B) con registro de renuncias informadas.",
                "Art. 10: Lista de trabajadores expuestos y custodia documental durante 10 años (o 40 años en agentes persistentes o de larga latencia)."
              ],
              relations: ["Aplicable a industria alimentaria y sanitaria"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 664/1997)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1997-11144" }
              ],
              comoLoUso: "PROTOCOLO PARA EXPOSICIÓN A AGENTES BIOLÓGICOS EN SANEAMIENTO:\n1. VACUNACIÓN PREVENTIVA: Ofrecer formalmente por escrito a todo el personal de saneamiento las vacunas de Tétanos, Hepatitis A y Hepatitis B. Si el operario renuncia, archivar su declaración firmada de renuncia informada.\n2. SELECCIÓN DE EPIS: Proveer guantes estancos con resistencia mecánica y biológica (UNE-EN ISO 374-5 con marcado VIRUS), pantalla facial contra salpicaduras y mascarilla FFP2/FFP3 en bombeos con aerosoles.\n3. HIGIENE Y VESTUARIOS: Utilizar taquillas dobles para que la ropa de calle jamás toque el mono de trabajo. Al acabar el turno, depositar los uniformes en sacas para lavandería industrial concertada; jamás permitir que el operario los lave en su casa."
            },
            {
              id: "rd-486-1997",
              title: "RD 486/1997 - Lugares de Trabajo",
              type: "real-decreto",
              status: "obligatoria",
              summary: "El Real Decreto 486/1997 establece las disposiciones mínimas de seguridad y salud que deben cumplir los lugares de trabajo en España.\nFija las dimensiones mínimas estructurales de los locales (3 metros de altura, 2 m² libres de suelo por trabajador y 10 m³ de volumen no ocupado), las condiciones de las vías de evacuación y salidas de emergencia, la protección de desniveles de más de 2 metros con barandillas rígidas de 90 cm y rodapié de 15 cm, las características de escaleras fijas y de servicio, los rangos de confort termohigrométrico (17-27 °C en trabajos sedentarios, 14-25 °C en trabajos ligeros, y humedad relativa del 30-70%), los niveles mínimos reglamentarios de iluminación en lux para cada tipo de tarea visual, y las exigencias de servicios higiénicos, agua potable, vestuarios con taquillas, duchas con agua caliente y botiquín de primeros auxilios.",
              keyPoints: [
                "Art. 2 y 3: Alcance exhaustivo de lugares de trabajo (instalaciones, naves, oficinas, pasillos, vestuarios, azoteas y comedores).",
                "Anexo I.1: Dimensiones estructurales mínimas: 3 m de altura (2,5 m en oficinas), 2 m² de superficie libre y 10 m³ de volumen por trabajador.",
                "Anexo I.2: Suelos fijos, estables y no resbaladizos. Barandillas resistentes de al menos 90 cm con rodapié de 15 cm y barra intermedia en desniveles de más de 2 m.",
                "Anexo I.4: Escaleras fijas con anchura mínima de 1 m, huella entre 28-37 cm y contrahuella entre 13-20 cm.",
                "Anexo II: Orden, limpieza y vías de evacuación permanentemente despejadas de obstáculos.",
                "Anexo III: Temperatura en oficinas entre 17 y 27 °C; en trabajos ligeros entre 14 y 25 °C. Humedad relativa entre el 30% y el 70%. Renovación mínima de aire de 30 a 50 m³/h por trabajador.",
                "Anexo IV: Niveles mínimos de iluminación: 100 lux (bajas exigencias), 200 lux (medias), 500 lux (altas), 1.000 lux (muy altas) y alumbrado de emergencia de evacuación (al menos 1 lux).",
                "Anexos V y VI: Agua potable, vestuarios separados con taquillas individuales, duchas con agua caliente/fría y botiquín de primeros auxilios obligatorio (local de primeros auxilios si >50 trabajadores)."
              ],
              relations: ["Complementa la evaluación de riesgos del RD 39/1997"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 486/1997)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1997-8669" }
              ],
              comoLoUso: "PROTOCOLO DE EVALUACIÓN DE LUGARES DE TRABAJO:\n1. MEDICIÓN AMBIENTAL: Con termohigrómetro calibrado, verificar que las temperaturas se mantengan entre 17-27 °C en oficinas y 14-25 °C en talleres. En exteriores bajo alerta por calor de AEMET, aplicar medidas del RD-ley 4/2023.\n2. MEDICIÓN DE ILUMINACIÓN: Con luxómetro en el plano de trabajo, medir al menos 500 lux en despachos técnicos, 200 lux en pasillos transitados y 100 lux en almacenes.\n3. SEGURIDAD DE HUECOS Y ESCALERAS: Verificar que todas las aberturas en suelos o desniveles de más de 2 metros cuenten con barandilla perimetral de 90 cm con rodapié de 15 cm.\n4. CONTROL DE BOTIQUINES: Revisar trimestralmente el botiquín de primeros auxilios, sustituyendo apósitos caducados y retirando cualquier medicamento."
            },
            {
              id: "rd-396-2006",
              title: "RD 396/2006 - Espacios Confinados",
              type: "real-decreto",
              status: "obligatoria",
              summary: "El Real Decreto 396/2006 regula las disposiciones mínimas de seguridad y salud aplicables a los trabajos con riesgo de exposición al amianto (desamiantado de cubiertas de fibrocemento/uralita, bajantes, aislamientos y tuberías).\nExige la inscripción obligatoria de la empresa en el Registro de Empresas con Riesgo de Amianto (RERA), fija el Valor Límite Ambiental (VLA) en 0,1 fibras por centímetro cúbico medidas en 8 horas, exige la aprobación previa de un Plan de Trabajo con Amianto por la Autoridad Laboral (presentado con 45 días de antelación), impone unidades de descontaminación de 3 o 5 fases con ducha obligatoria con la máscara puesta, equipos de protección respiratoria con filtro P3 o aire asistido, monos desechables herméticos Tipo 5/6 y custodia documental del registro médico durante al menos 40 años.",
              keyPoints: [
                "Art. 3: Inscripción preceptiva en el RERA de la Comunidad Autónoma como condición indispensable para operar con amianto.",
                "Art. 4: Valor Límite Ambiental de Exposición (VLA) de 0,1 fibras/cm³ medidas en promedio de 8 horas.",
                "Art. 5: Muestreo personal continuo mediante bombas de captación analizadas por microscopía óptica de contraste de fases MTA/MA-051.",
                "Arts. 11 y 12: Obligación de redactar y obtener la aprobación formal previa del Plan de Trabajo con Amianto ante la Autoridad Laboral 45 días antes de iniciar la obra.",
                "Art. 13: Unidad móvil de descontaminación de 3 o 5 fases con ducha obligatoria manteniendo la máscara de silicona puesta durante el lavado.",
                "Arts. 16 y 18: Vigilancia de la salud post-ocupacional y custodia del archivo médico e historial laboral durante al menos 40 años por la prolongada latencia del mesotelioma."
              ],
              relations: ["CRÍTICO para saneamiento"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 604/2006 - Espacios Confinados)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-9379" }
              ],
              comoLoUso: "PROTOCOLO DE RETIRADA DE AMIANTO EN OBRAS Y SANEAMIENTO:\n1. COMPROBACIÓN RERA Y PLAN APROBADO: Verificar que la empresa contratista esté activa en el RERA y cuente con la resolución formal de APROBACIÓN del Plan de Trabajo emitida por la Autoridad Laboral.\n2. DELIMITACIÓN Y CONFINAMIENTO: Vallar y señalizar la zona con carteles de peligro por amianto. En interiores, montar burbuja estanca con depresión de aire continua y filtros absolutos HEPA.\n3. EPIS OBLIGATORIOS: Buzo desechable Tipo 5/6 estanco al polvo de partículas sólidas, máscara integral con filtro P3 o equipo motorizado y botas lisas lavables sin cordones.\n4. GESTIÓN DEL RESIDUO PELIGROSO: Humectar las placas con líquido fijador, ensacarlas en doble film de polietileno galga 400 con etiqueta oficial de residuo de amianto (LER 17 06 05*) y entregar a gestor autorizado."
            }
          ]
        },
        {
          id: "otros-reglamentos",
          title: "Otros Reglamentos Relevantes",
          items: [
            {
              id: "rd-604-2006",
              title: "RD 604/2006 - Espacios Confinados",
              type: "real-decreto",
              status: "obligatoria",
              summary: "El Real Decreto 604/2006 modifica el Reglamento de los Servicios de Prevención (RD 39/1997) y el RD 1627/1997 de obras de construcción para culminar la reforma del marco normativo iniciada con la Ley 54/2003.\nSu aportación jurídica y operativa más relevante es la regulación formal y exhaustiva de la figura del Recurso Preventivo (Artículo 22 bis): determina los tres supuestos en los que su presencia física en el tajo es legalmente obligatoria (concurrencia de riesgos agravados, actividades peligrosas del Anexo I como caídas >2 m, zanjas >2 m o confinados, y requerimiento expreso de la ITSS); define la formación mínima requerida (Nivel Básico de 50 horas); exige su permanencia continua in situ durante la maniobra peligrosa; y le otorga la potestad legal de dictar instrucciones y ordenar la paralización inmediata de las tareas ante riesgo grave e inminente.",
              keyPoints: [
                "Art. Primero. Uno: Nueva redacción del Art. 2 del RD 39/1997 para garantizar la integración real del Plan de Prevención en todos los mandos de la empresa.",
                "Art. Primero. Tres: Introducción formal del Artículo 22 bis regulando la presencia preceptiva de los Recursos Preventivos en el centro de trabajo.",
                "Supuesto 1: Concurrencia de operaciones diversas simultáneas o sucesivas que puedan agravar o modificar los riesgos del centro.",
                "Supuesto 2: Trabajos reglamentariamente considerados peligrosos (caídas de más de 2 m, sepultamiento en zanjas >2 m, confinados, alta tensión, explosivos).",
                "Supuesto 3: Requerimiento formal de presencia emitido por la Inspección de Trabajo y Seguridad Social (ITSS).",
                "Cualificación mínima: Acreditación oficial de funciones de Nivel Básico de al menos 50 horas de formación en prevención.",
                "Facultades del Recurso Preventivo: permanencia física en el tajo, vigilancia continua de los métodos seguros y potestad de paralización inmediata ante riesgo inminente."
              ],
              relations: ["CRÍTICO para saneamiento industrial"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 604/2006)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-9379" }
              ]
            },
            {
              id: "rd-665-1997",
              title: "RD 665/1997 - Agentes Cancerígenos",
              type: "real-decreto",
              status: "obligatoria",
              summary: "El Real Decreto 665/1997 regula la protección de los trabajadores contra los riesgos derivados de la exposición a agentes cancerígenos, mutágenos y reprotóxicos en el trabajo.\nImpone con carácter vinculante el principio de sustitución obligatoria del cancerígeno por alternativas inocuas siempre que sea técnicamente viable; exige que la producción o manipulación se realice en sistema cerrado hermético; y en su defecto, impone la reducción de la exposición al nivel técnicamente más bajo posible (principio ALARA: As Low As Reasonably Achievable) mediante extracción localizada en origen sin recirculación de aire. Regula medidas de higiene reforzadas (lavandería industrial a cargo de la empresa), la notificación obligatoria a la Autoridad Laboral de cantidades y operarios expuestos, y la custodia de los historiales médicos y listas de trabajadores durante al menos 40 años tras finalizar la exposición.",
              keyPoints: [
                "Art. 2: Definiciones legales: agentes clasificados como cancerígenos o mutágenos de categoría 1A y 1B (CLP), sílice cristalina respirable, humos diésel y serrín de maderas duras.",
                "Art. 4: Obligación jurídica ineludible de sustitución prioritaria del agente cancerígeno por una sustancia que no sea peligrosa.",
                "Art. 5: Producción en sistema cerrado hermético y aplicación del principio ALARA con extracción localizada de aire al exterior sin recirculación.",
                "Art. 6: Comunicación formal periódica a la Autoridad Laboral de actividades, cantidades usadas, mediciones higiénicas y trabajadores expuestos.",
                "Art. 8: Medidas higiénicas: prohibición absoluta de comer/beber, vestuarios con taquillas dobles y lavado de ropa de trabajo en lavandería industrial contratada.",
                "Arts. 9 y 10: Lista oficial de trabajadores expuestos y custodia documental obligatoria durante al menos 40 años tras el cese de la exposición."
              ],
              relations: ["Relacionado con RD 374/2001 (agentes químicos)"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 665/1997)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1997-11145" }
              ]
            }
          ]
        },
        {
          id: "constitucion-y-marco-laboral",
          title: "Constitución y Marco Laboral Sustantivo",
          items: [
            {
              id: "ce-1978-art40",
              title: "Constitución Española de 1978 - Art. 40.2",
              type: "constitucion",
              status: "fundamental",
              summary: "La Constitución Española de 1978 constituye el vértice superior de todo el ordenamiento jurídico y el fundamento supremo de la prevención de riesgos laborales en España.\nEl Artículo 40.2 impone el mandato directo a los poderes públicos de velar por la seguridad e higiene en el trabajo y garantizar el descanso necesario. Este mandato se articula conjuntamente con el Artículo 15 (derecho fundamental a la vida y a la integridad física y moral, base del reproche penal de los Arts. 316-318 del Código Penal español) y el Artículo 43 (derecho a la protección de la salud pública). Es el soporte que legitima la actuación inspectora y sancionadora del Estado y garantiza la tutela judicial de los trabajadores.",
              keyPoints: [
                "Art. 40.2 CE: Mandato constitucional a los poderes públicos de velar por la seguridad e higiene en el trabajo y garantizar el descanso necesario.",
                "Art. 15 CE: Derecho fundamental a la vida y a la integridad física: enviar a un operario a laborar sin medidas de seguridad cuando exista peligro para su vida constituye delito penal laboral.",
                "Art. 43 CE: Derecho a la protección de la salud pública tutelado por los poderes públicos mediante medidas preventivas.",
                "Art. 53 CE: Eficacia vinculante de los derechos fundamentales y directriz interpretativa de los principios rectores de la política social y económica."
              ],
              relations: ["Ley 31/1995", "Estatuto de los Trabajadores"],
              usefulLinks: [
                { text: "Constitución Española - BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" }
              ],
              comoLoUso: "APLICACIÓN DE LA CONSTITUCIÓN EN INFORMES Y PERITAJES:\n1. FUNDAMENTACIÓN DE DERECHO: En cualquier dictamen pericial judicial, informe técnico de investigación de accidentes o recurso ante la Inspección de Trabajo, citar el Art. 40.2 y 15 de la CE para dotar al informe de la máxima fuerza jurídica superior.\n2. DERECHO DE RESISTENCIA: Amparar al trabajador que interrumpe su actividad ante un peligro inminente: no comete desacato laboral, sino que ejerce la tutela constitucional de su vida consagrada en el Art. 15 de la Constitución."
            },
            {
              id: "et-rdl-2-2015",
              title: "Estatuto de los Trabajadores (RDL 2/2015) - Arts. 19 y 84",
              type: "ley",
              status: "obligatoria",
              summary: "El Estatuto de los Trabajadores (Real Decreto Legislativo 2/2015) es el texto refundido que rige el marco sustantivo de las relaciones laborales individuales y colectivas en España (el equivalente a la Ley de Contrato de Trabajo de Argentina).\nEstablece en su Art. 4.2.d el derecho fundamental del trabajador a su integridad física y a una adecuada política de prevención de riesgos laborales. Su Art. 19 regula de forma imperativa los deberes de formación teórica y práctica a cargo exclusivo del empresario en horario laboral y el deber del trabajador de cumplir las medidas preventivas. El Art. 54 avala el despido disciplinario procedente y sin indemnización por desobediencia grave a las normas de seguridad; el Art. 64 reconoce los derechos de información trimestral del Comité de Empresa en siniestralidad laboral; y el Art. 84 fija las reglas de concurrencia y primacía de los convenios colectivos del sector.",
              keyPoints: [
                "Art. 4.2.d ET: Derecho básico e irrenunciable del trabajador a su integridad física y a una adecuada política de prevención de riesgos laborales.",
                "Art. 19 ET: Deber patronal de protección eficaz, formación teórica y práctica gratuita en horario de trabajo y deber del operario de cumplir las órdenes de seguridad.",
                "Art. 54.2.d ET: Despido disciplinario procedente sin indemnización por transgresión de la buena fe contractual, indisciplina o desobediencia grave en seguridad.",
                "Art. 64 ET: Competencias y derechos de información trimestral del Comité de Empresa sobre accidentes, bajas laborales, jornadas perdidas e índices de siniestralidad.",
                "Art. 84 ET: Concurrencia de convenios: primacía del convenio sectorial en materia salarial y garantía de estándares de seguridad obligatorios que ningún convenio de empresa puede rebajar."
              ],
              relations: ["Ley 31/1995 Art. 14 y 19", "Convenios Colectivos Sectoriales"],
              usefulLinks: [
                { text: "Estatuto de los Trabajadores - BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430" }
              ],
              comoLoUso: "APLICACIÓN DEL ESTATUTO DE LOS TRABAJADORES EN EL DÍA A DÍA:\n1. FORMACIÓN AL CONTRATAR: Garantizar y documentar formalmente la formación del Art. 19 antes del primer día de trabajo efectivo del operario, computando las horas de curso como jornada retribuida.\n2. EXPEDIENTE DISCIPLINARIO POR INCUMPLIMIENTO: Si un trabajador se niega a colocarse el arnés o sabotea un resguardo, documentar la infracción por escrito con aviso formal citando el Art. 19 y 29 de la LPRL y el Art. 54 del ET como advertencia laboral vinculante.\n3. INFORME TRIMESTRAL AL COMITÉ: Preparar y exponer cada trimestre ante los Delegados de Personal o Comité de Empresa las estadísticas oficiales de siniestralidad (Índice de Frecuencia, Gravedad e Incidencia) conforme al Art. 64."
            }
          ]
        },
        {
          id: "directivas-comunitarias-ue",
          title: "Derecho Comunitario: Directivas de la Unión Europea",
          items: [
            {
              id: "directiva-89-391-cee",
              title: "Directiva Marco Europea 89/391/CEE (SST)",
              type: "directiva-ue",
              status: "fundamental",
              summary: "La Directiva madre de la Unión Europea sobre la aplicación de medidas para promover la mejora de la seguridad y de la salud de los trabajadores en el trabajo. La Ley 31/1995 es su transposición exacta al derecho español.",
              keyPoints: [
                "Estableció por primera vez en toda Europa los principios generales de prevención (evitar riesgos, evaluar los inevitables, combatir en origen).",
                "Obligación del empresario de disponer de servicios de prevención y de consultar a los trabajadores.",
                "Efecto vinculante: Ningún país de la Unión Europea puede legislar por debajo del nivel de protección fijado por esta Directiva.",
                "Armonización de normativas técnicas y directivas hijas derivadas."
              ],
              relations: ["Ley 31/1995", "RD 39/1997"],
              usefulLinks: [
                { text: "Directiva 89/391/CEE - EUR-Lex", url: "https://eur-lex.europa.eu/legal-content/ES/ALL/?uri=CELEX:31989L0391" }
              ],
              comoLoUso: "Para entender el origen de la ley española: la Ley 31/1995 no nació de la nada, es la copia adaptada que España tuvo que hacer para cumplir con la Directiva 89/391 de la UE tras entrar a la Comunidad Europea."
            },
            {
              id: "directiva-92-85-cee",
              title: "Directiva 92/85/CEE - Maternidad, Embarazo y Lactancia",
              type: "directiva-ue",
              status: "obligatoria",
              summary: "Directiva comunitaria relativa a la aplicación de medidas para promover la mejora de la seguridad y de la salud en el trabajo de la trabajadora embarazada, que haya dado a luz o en período de lactancia natural. Traspuesta en el Art. 26 de la LPRL.",
              keyPoints: [
                "Evaluación obligatoria de riesgos específicos que puedan afectar a la salud de las trabajadoras en estado de gestación o lactancia (agentes físicos, químicos, biológicos).",
                "Adaptación de condiciones de trabajo o cambio de puesto exento de riesgo sin reducción de salario.",
                "Suspensión del contrato con subsidio por riesgo durante el embarazo o lactancia si no existe puesto compatible.",
                "Prohibición de realizar trabajo nocturno o turnos perjudiciales si un informe médico lo desaconseja."
              ],
              relations: ["Art. 26 LPRL", "RD 39/1997 Anexo VII y VIII"],
              usefulLinks: [
                { text: "Directiva 92/85/CEE - EUR-Lex", url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=celex:31992L0085" }
              ],
              comoLoUso: "Si una operaria de saneamiento o recogida queda embarazada, NO puede seguir expuesta a agentes biológicos (aguas residuales), sustancias químicas o vibraciones. Se activa inmediatamente el protocolo del Art. 26 LPRL para reubicarla o tramitar la prestación por riesgo de embarazo ante la Mutua."
            },
            {
              id: "directiva-94-33-cee",
              title: "Directiva 94/33/CEE - Protección de los Jóvenes y Menores",
              type: "directiva-ue",
              status: "obligatoria",
              summary: "Directiva comunitaria relativa a la protección de los jóvenes en el trabajo (menores de 18 años). Traspuesta en el Art. 27 de la LPRL y en el Estatuto de los Trabajadores.",
              keyPoints: [
                "Evaluación de riesgos previa específica teniendo en cuenta su falta de experiencia, inmadurez y desarrollo físico incompleto.",
                "Prohibición taxativa de trabajo nocturno (entre las 22:00 y las 06:00 horas) para menores de 18 años.",
                "Prohibición de realizar horas extraordinarias.",
                "Prohibición de realizar trabajos de riesgo especial (espacios confinados, sustancias cancerígenas, alta tensión, riesgo de caída en altura)."
              ],
              relations: ["Art. 27 LPRL", "Estatuto de los Trabajadores Art. 6"],
              usefulLinks: [
                { text: "Directiva 94/33/CEE - EUR-Lex", url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=celex:31994L0033" }
              ],
              comoLoUso: "En talleres, recogida de residuos o depuradoras, si entra un aprendiz o estudiante en prácticas menor de 18 años, el técnico debe verificar que no manipule maquinaria pesada ni ingrese a zonas ATEX o confinadas."
            },
            {
              id: "directiva-91-383-cee",
              title: "Directiva 91/383/CEE - Trabajadores Temporales y ETTs",
              type: "directiva-ue",
              status: "obligatoria",
              summary: "Garantiza que los trabajadores temporales o contratados a través de Empresas de Trabajo Temporal (ETT) disfruten del MISMO nivel de protección en SST que los trabajadores indefinidos. Traspuesta en el Art. 28 de la LPRL y Ley 14/1994 de ETTs.",
              keyPoints: [
                "Igualdad de trato y derecho a idéntica protección, formación e información.",
                "Obligación de la empresa usuaria de informar a la ETT de los riesgos específicos y requerimientos de aptitud antes de la puesta a disposición.",
                "Prohibición legal de contratar trabajadores de ETT para trabajos de especial peligrosidad (radiaciones, agentes cancerígenos Categoría 1A/1B, inmersiones con equipo hiperbárico).",
                "Responsabilidad subsidiaria de la empresa usuaria en materia de prevención y accidentes."
              ],
              relations: ["Art. 28 LPRL", "RD 216/1999 sobre ETTs"],
              usefulLinks: [
                { text: "Directiva 91/383/CEE - EUR-Lex", url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=celex:31991L0383" }
              ],
              comoLoUso: "En refuerzos de verano de limpieza viaria contratados vía ETT (Adecco, Randstad, etc.), la empresa contratista debe darles la formación y los EPIs Clase 3 antes de salir a la calle el primer día."
            }
          ]
        },
        {
          id: "regimen-sancionador-lisos",
          title: "Régimen Sancionador: LISOS e Inspección de Trabajo",
          items: [
            {
              id: "lisos-rdl-5-2000",
              title: "LISOS (RDL 5/2000) - Ley sobre Infracciones y Sanciones en el Orden Social",
              type: "ley",
              status: "fundamental",
              summary: "La Ley sobre Infracciones y Sanciones en el Orden Social (LISOS, aprobada por el Real Decreto Legislativo 5/2000) es el código sancionador y disciplinario de las relaciones laborales y de la Prevención de Riesgos Laborales en España.\nTipifica con absoluta precisión todas las conductas ilícitas de las empresas en materia preventiva, estructurándolas en tres niveles de gravedad: Infracciones Leves (Art. 11), Infracciones Graves (Art. 12) e Infracciones Muy Graves (Art. 13). Fija la tabla oficial de sanciones económicas en sus grados mínimo, medio y máximo (Art. 40, con multas que alcanzan hasta los 983.736 euros), los criterios legales de graduación y agravación (Art. 39, como reincidencia, daño causado, desobediencia de requerimientos previos y volumen de facturación) y la responsabilidad solidaria entre empresas principales, contratistas y subcontratistas en centros concurrentes (Art. 42).",
              keyPoints: [
                "Art. 11: Infracciones Leves: incumplimientos formales o documentales y falta de limpieza no peligrosa. Multas de 45 € a 2.450 €.",
                "Art. 12: Infracciones Graves: no evaluar riesgos, no elaborar el plan de prevención, no impartir formación, no realizar reconocimientos médicos, no designar recurso preventivo o superar límites ambientales VLA. Multas de 2.451 € a 49.180 €.",
                "Art. 13: Infracciones Muy Graves: no paralizar trabajos ante riesgo inminente, desproteger caídas de altura o confinados, exponer a embarazadas o menores a puestos prohibidos u ocultar accidentes graves. Multas de 49.181 € a 983.736 €.",
                "Art. 39: Criterios legales de graduación: gravedad del daño, número de afectados, negligencia o dolo, desobediencia de advertencias previas de la ITSS y cifra de negocios.",
                "Art. 40: Escala de cuantías económicas actualizadas por tramos (Leves hasta 2.450 €, Graves hasta 49.180 €, Muy Graves hasta 983.736 €).",
                "Art. 42: Responsabilidad solidaria entre la empresa principal y las contratas y subcontratas en las sanciones pecuniarias cometidas en su centro de trabajo."
              ],
              relations: ["Ley 31/1995 Arts. 42-54", "Inspección de Trabajo (ITSS)"],
              usefulLinks: [
                { text: "LISOS texto refundido - BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2000-15060" }
              ],
              comoLoUso: "APLICACIÓN PRÁCTICA DE LA LISOS EN LA NEGOCIACIÓN PREVENTIVA:\n1. ARGUMENTO ECONÓMICO ANTE LA GERENCIA: Cuando la dirección o el departamento financiero rechace adquirir barandillas, reparar un camión o comprar equipos de respiración por considerarlo 'costoso', mostrarles el Art. 12 y 13 de la LISOS. La multa grave mínima es de 2.451 € y una muy grave llega a 983.736 €, enormemente superior a cualquier inversión preventiva.\n2. GESTIÓN DE REQUERIMIENTOS INSPECTORES: Si la Inspección de Trabajo realiza una visita y otorga un requerimiento formal con plazo de 15 o 30 días, subsanar las deficiencias dentro del plazo para evitar que se eleve a acta de infracción grave."
            },
            {
              id: "itss-inspeccion-trabajo",
              title: "Inspección de Trabajo y Seguridad Social (ITSS) y Paralización de Tareas",
              type: "organismo",
              status: "fundamental",
              summary: "La Inspección de Trabajo y Seguridad Social (ITSS), regulada por la Ley 23/2015, es el cuerpo de funcionarios con rango de agentes de la autoridad pública encargado de vigilar el cumplimiento de la legislación laboral y de prevención de riesgos en España.\nSus inspectores y subinspectores tienen facultades plenipotenciarias para acceder libremente a cualquier centro de trabajo a cualquier hora del día o de la noche sin previo aviso, interrogar a trabajadores a solas, tomar muestras, fotos y vídeos, y requerir documentación. Sus actas gozan de presunción de certeza legal. El Artículo 44 de la Ley 31/1995 los faculta para ordenar la paralización inmediata y fulminante de cualquier tajo o máquina ante riesgo grave e inminente, con cobro íntegro del salario por parte de los trabajadores.",
              keyPoints: [
                "Arts. 1 y 13 Ley 23/2015: Condición de autoridad pública y presunción de certeza legal de las actas de infracción de la ITSS ante los tribunales.",
                "Art. 18 Ley 23/2015: Facultades de libre acceso a cualquier hora sin preaviso, interrogatorio a solas a directivos y operarios, toma de muestras y examen de cualquier documento.",
                "Art. 21 Ley 23/2015: Medidas inspectoras: advertencia, requerimiento formal con plazo de subsanación, acta de infracción y propuesta de Recargo de Prestaciones.",
                "Propuesta de Recargo de Prestaciones de la Seguridad Social del 30% al 50% de por vida a cargo exclusivo del empresario por falta de medidas de seguridad.",
                "Art. 44 Ley 31/1995: Paralización fulminante e inmediata de tareas por riesgo grave e inminente con cobro íntegro del salario durante la detención de las actividades."
              ],
              relations: ["LISOS", "Art. 44 LPRL"],
              usefulLinks: [
                { text: "Organismo Estatal ITSS", url: "https://www.mites.gob.es/itss" }
              ],
              comoLoUso: "PROTOCOLO ANTE UNA VISITA DE LA INSPECCIÓN DE TRABAJO:\n1. RECEPCIÓN Y ATENCIÓN: Facilitar el acceso inmediato al inspector sin demoras. Avisar de urgencia al Técnico de Prevención y a los Delegados de Prevención.\n2. CARPETA DOCUMENTAL DEL ARTÍCULO 23: Exhibir la carpeta obligatoria: Plan de Prevención, Evaluación y Planificación, registros de formación de los operarios, acuses de entrega de EPIs y concierto con el SPA.\n3. SUBSANACIÓN DE REQUERIMIENTOS: Si el inspector extiende un requerimiento formal otorgando plazo (ej. 15 o 30 días), corregir todas las anomalías y presentar el informe justificativo antes de la fecha límite."
            }
          ]
        },
        {
          id: "modulos-transversales-fp",
          title: "Módulos Transversales de Formación Profesional (IPE / FOL / EIE)",
          items: [
            {
              id: "ipe-1-fol",
              title: "IPE I (Itinerario Personal para la Empleabilidad I) - Antiguo FOL",
              type: "modulo-fp",
              status: "informativa",
              summary: "El módulo troncal y transversal de Itinerario Personal para la Empleabilidad I (antiguo módulo de Formación y Orientación Laboral - FOL), regulado por el RD 659/2023 del Sistema de Formación Profesional, capacita en legislación laboral individual y colectiva, contratos vigentes tras la Reforma Laboral, estructura de nóminas, cotizaciones sociales, tipos de despido, representación sindical y prevención básica de riesgos laborales.\nSu superación oficial acredita automáticamente la cualificación y el certificado oficial de Nivel Básico en Prevención de Riesgos Laborales (50 horas) según el RD 39/1997, facultando para actuar como Recurso Preventivo.",
              keyPoints: [
                "Arts. 94 y 95 RD 659/2023: Diseño curricular y competencias profesionales del módulo troncal IPE I en la Formación Profesional española.",
                "Acreditación oficial directa del certificado de Nivel Básico de PRL (50 horas) conforme al RD 39/1997 al aprobar el módulo.",
                "Resultados de aprendizaje en prevención: identificación de condiciones de trabajo, técnicas preventivas y protocolo PAS en emergencias.",
                "Contratación laboral: contratos indefinidos ordinarios, fijos-discontinuos, temporales por circunstancias de la producción y de formación.",
                "Estructura de la nómina: devengos salariales (salario base + pluses) y deducciones (contingencias comunes 4,70%, desempleo, FP, MEI e IRPF).",
                "Indemnizaciones por despido: despido objetivo (20 días/año, máx. 12 mensualidades), improcedente (33 días/año, máx. 24 mensualidades) y disciplinario procedente (0 días)."
              ],
              relations: ["Estatuto de los Trabajadores", "Convenios Colectivos"],
              usefulLinks: [
                { text: "Currículo Oficial de FP en España", url: "https://todofp.es" }
              ],
              comoLoUso: "APLICACIÓN DEL MÓDULO IPE I:\n1. HOMOLOGACIÓN DE TÍTULO TÉCNICO: Es el módulo fundamental que convalida los conocimientos sobre el marco de relaciones laborales y seguridad en España.\n2. ACREDITACIÓN DE NIVEL BÁSICO: Habilita con su certificado de 50 horas para actuar formalmente como Recurso Preventivo en obras y centros de trabajo.\n3. LECTURA DE NÓMINAS: Interpretar la nómina propia o de los operarios para verificar que se liquiden los pluses de penosidad, toxicidad y turnicidad del convenio de saneamiento."
            },
            {
              id: "ipe-2-eie",
              title: "IPE II (Itinerario Personal para la Empleabilidad II) - Antiguo EIE",
              type: "modulo-fp",
              status: "informativa",
              summary: "El módulo de Itinerario Personal para la Empleabilidad II (antigua Empresa e Iniciativa Emprendedora - EIE), regulado por el RD 659/2023, capacita en la creación, gestión, fiscalidad y modelos de negocio de microempresas y pymes en el mercado español.\nAnaliza las formas jurídicas de empresa (Autónomo individual, Sociedad Limitada S.L. desde 1 euro, Cooperativa), los trámites censales ante la Agencia Tributaria (Hacienda Modelos 036/037, IVA trimestral Modelo 303, retenciones IRPF Modelo 130/111, Sociedades Modelo 200), la cotización en el RETA de la Seguridad Social por ingresos reales, la comunicación formal de apertura del centro de trabajo a la Autoridad Laboral autonómica y la organización de la prevención para micropymes según el RD 39/1997.",
              keyPoints: [
                "Art. 96 RD 659/2023: Ordenación curricular del módulo transversal IPE II en todos los ciclos formativos de grado medio y superior.",
                "Formas jurídicas: Autónomo individual (responsabilidad ilimitada), Sociedad Limitada S.L. (capital desde 1 € y responsabilidad limitada al capital) y Cooperativas.",
                "Obligaciones tributarias ante la AEAT: alta censal con Modelo 036/037, autoliquidación de IVA trimestral Modelo 303, pago fraccionado IRPF Modelo 130 y retenciones Modelo 111.",
                "Alta en el Régimen Especial de Trabajadores Autónomos (RETA) de la Seguridad Social con cotización por tramos de ingresos netos reales.",
                "Trámite de Comunicación de Apertura del centro de trabajo a la Dirección General de Trabajo autonómica en el plazo de 30 días tras iniciar la actividad.",
                "Modalidades de prevención en micropymes según el Art. 11 del RD 39/1997 (asunción por el empresario con menos de 10 trabajadores o concierto con SPA)."
              ],
              relations: ["RD 39/1997 Art. 11", "Emprendimiento y Consultoría PRL"],
              usefulLinks: [
                { text: "Portal Emprende - Gobierno de España", url: "https://pae.enisa.es" }
              ],
              comoLoUso: "APLICACIÓN PRÁCTICA DE IPE II PARA EJERCER DE FORMA INDEPENDIENTE:\n1. ALTA DE AUTÓNOMO TÉCNICO: Para ejercer como perito judicial de prevención o consultor técnico de saneamiento, tramitar el alta censal con el Modelo 036 (epígrafe IAE de servicios técnicos) y el alta en el RETA de la Seguridad Social.\n2. FACTURACIÓN Y FISCALIDAD: Emitir facturas reglamentarias con el 21% de IVA y deducir la retención del IRPF (15% general, o 7% para nuevos autónomos en los 3 primeros años). Liquidar trimestralmente el IVA con el Modelo 303.\n3. CONSULTORÍA PARA PYMES: Asesorar a pequeños empresarios sobre si pueden asumir personalmente la prevención (<10 trabajadores) o si deben contratar un SPA acreditado."
            }
          ]
        }
      ]
    },
    {
      id: "guias-insst",
      title: "Guías INSST",
      icon: "\uD83D\uDCDA",
      description: "Instituto Nacional de Seguridad y Salud en el Trabajo - Guías prácticas para la aplicación de la normativa",
      categories: [
        {
          id: "evaluacion-riesgos",
          title: "Evaluación de Riesgos",
          items: [
            {
              id: "guia-evaluacion-riesgos",
              title: "Guía para la Evaluación de Riesgos",
              type: "guia",
              status: "fundamental",
              summary: "Es el MÉTODO que usás para evaluar riesgos. Paso a paso, sin inventar nada. La INSST ya armó todo: vos solo tenés que seguir la receta.",
              keyPoints: [
                "Paso 1: Recorrer el lugar y ANOTAR todo lo que ves (ruido, polvo, químicos, posiciones, etc.)",
                "Paso 2: Para cada cosa que anotaste, preguntarte: ¿qué puede pasar? (el peligro)",
                "Paso 3: Calcular el riesgo = Severidad × Probabilidad",
                "  - Severidad: ¿qué tan grave es la lesión? (1=sin lesión, 5=muerte)",
                "  - Probabilidad: ¿qué tan probable es que pase? (1=casi imposible, 5=casi seguro)",
                "  - Ejemplo: un trabajador manipula ácido sin guantes → Severidad 3 (lesión con baja) × Probabilidad 4 (probable) = 12 (Riesgo ALTO)",
                "Paso 4: Si el riesgo es ALTO o MUY ALTO, parar la actividad y buscar solución",
                "Paso 5: Escribir las medidas correctivas y asignar responsables y plazos",
                "Paso 6: Revisar que las medidas funcionaron después de implementarlas"
              ],
              relations: ["Base para todo trabajo de PRL", "Complementa el RD 39/1997"],
              usefulLinks: [
                { text: "Guía INSST - Evaluación de Riesgos (PDF gratuito)", url: "https://www.insst.es" }
              ],
              comoLoUso: "EJEMPLO PRÁCTICO: Un día te mandan a evaluar una fábrica de alimentos. Entrás y ves: 1) Ruido fuerte de máquinas (escribís 'ruido'). 2) Trabajadores mojando el piso (escribís 'piso resbaladizo'). 3) Tanques de limpieza con químicos (escribís 'exposición a agentes químicos'). Para cada uno hacés la cuenta: ruido=3×4=12 (ALTO), piso=2×3=6 (MEDIO), químicos=4×3=12 (ALTO). Los dos que dieron ALTO los reportás URGENTE y proponés soluciones: silenciadores para el ruido, calzado antideslizante, guantes y mascarilla para los químicos. Eso es tu trabajo en una jornada."
            },
            {
              id: "guia-metodologia-evaluacion",
              title: "Metodología de Evaluación de Riesgos - INSST",
              type: "guia",
              status: "fundamental",
              summary: "Procedimiento sistemático para identificar, valorar y establecer medidas preventivas.",
              keyPoints: [
                "Identificación de peligros",
                "Valoración del riesgo (severidad x probabilidad)",
                "Establecimiento de medidas preventivas",
                "Seguimiento y revisión periódica"
              ],
              relations: ["Metodología aplicable a cualquier sector"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "higiene-industrial",
          title: "Higiene Industrial",
          items: [
            {
              id: "guia-ruido",
              title: "Guía del Ruido en el Trabajo",
              type: "guia",
              status: "importante",
              summary: "Prevención de la hipoacusia producida por ruido. Valores límite, métodos de medición y medidas de control.",
              keyPoints: [
                "VLE (Valor Límite de Exposición): 87 dB(A) y 140 dB(C)",
                "Acción nivel inferior: 80 dB(A)",
                "Acción nivel superior: 85 dB(A)",
                "Medición de niveles de presión sonora",
                "Protección auditiva y programa de conservación",
                "Sustitución, aislamiento y absorción"
              ],
              relations: ["RD 486/1997 y Directiva 2003/10/CE"],
              usefulLinks: []
            },
            {
              id: "guia-vibraciones",
              title: "Guía de Vibraciones Mecánicas",
              type: "guia",
              status: "importante",
              summary: "Prevención de riesgos por vibraciones mano-brazo y cuerpo entero.",
              keyPoints: [
                "Vibraciones mano-brazo (HAV): VLE 2.5 m/s²",
                "Vibraciones cuerpo entero (WBV): VLE 1.15 m/s²",
                "Síndrome del canal carpiano y de Raynaud",
                "Elección de herramientas y equipos",
                "Tiempo de exposición máximo"
              ],
              relations: ["Directiva 2002/44/CE"],
              usefulLinks: []
            },
            {
              id: "guia-agentes-quimicos",
              title: "Guía de Agentes Químicos",
              type: "guia",
              status: "importante",
              summary: "Prevención de riesgos por exposición a sustancias químicas peligrosas. Hojas de seguridad, LEP y controles.",
              keyPoints: [
                "Lectura e interpretación de Hojas de Datos de Seguridad",
                "Límites de Exposición Profesional (LEP/SCOEL)",
                "Sustitución de sustancias peligrosas",
                "Controles de ingeniería y EPIs",
                " vigilancia de la salud específica"
              ],
              relations: ["RD 374/2001"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "seguridad-lugares",
          title: "Seguridad en Lugares de Trabajo",
          items: [
            {
              id: "guia-lugares-trabajo",
              title: "Guía de Lugares de Trabajo",
              type: "guia",
              status: "importante",
              summary: "Condiciones mínimas de seguridad y salud en los lugares de trabajo. Espacios confinados, alturas, incendios.",
              keyPoints: [
                "Diseño y mantenimiento de espacios de trabajo",
                "Señalización de seguridad",
                "Protección contra incendios",
                "Evacuación y emergencias",
                "Control de accesos"
              ],
              relations: ["RD 486/1997"],
              usefulLinks: []
            },
            {
              id: "guia-espacios-confinados",
              title: "Guía de Espacios Confinados",
              type: "guia",
              status: "CRITICA",
              summary: "PARA TU TRABAJO EN SANEAMIENTO ESTO ES LO MÁS IMPORTANTE. Tanques, pozos de visita, tuberías, depósitos. Si no seguís estos pasos, la gente se muere.",
              keyPoints: [
                "Definición: espacio con acceso limitado y ventilación deficiente",
                "ANTES de entrar: permiso de trabajo + medición atmosférica",
                "Medir: oxígeno (19.5-23.5%), gases tóxicos, gases explosivos",
                "Ventilación forzada antes y durante el trabajo",
                "NUNCA entrar solo - siempre alguien afuera mirándote y comunicándose",
                "Equipo de rescate listo: arnés, cuerda, máscara con oxígeno",
                "Si la medición sale mal, NO SE ENTRA. Punto."
              ],
              relations: ["RD 396/2006", "CRÍTICO para saneamiento"],
              usefulLinks: [],
              comoLoUso: "Cada día que vayas a trabajar en un pozo o tanque, esta guía te dice exactamente qué hacer. El día que alguien diga 'no hace falta medir, ya entré antes y no pasó nada', vos le decís que eso es como jugar a la ruleta rusa. Un pozo de visita puede tener gases letales que no se ven ni se huelen."
            },
            {
              id: "guia-alturas",
              title: "Guía de Trabajo en Altura",
              type: "guia",
              status: "importante",
              summary: "Prevención de caídas en altura. Sistemas anticaídas, andamios, plataformas elevadoras.",
              keyPoints: [
                "Caídas de más de 2 metros: riesgo grave",
                "Sistemas de protección colectiva (barandillas, redes)",
                "Sistemas de protección individual (arneses, líneas de vida)",
                "Andamios: montaje, uso y desmontaje",
                "Plataformas elevadoras (PEMP)"
              ],
              relations: ["RD 1627/1997 (construcción)"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "ergonomia-psicosociologia",
          title: "Ergonomía y Psicosociología",
          items: [
            {
              id: "guia-ergonomia",
              title: "Guía de Ergonomía",
              type: "guia",
              status: "importante",
              summary: "Prevención de trastornos musculoesqueléticos (TME). Evaluación ergonómica de puestos de trabajo.",
              keyPoints: [
                "Evaluación ergonómica del puesto de trabajo",
                "Factor de riesgo: posturas forzadas, movimientos repetitivos, manejo manual de cargas",
                "Métodos de evaluación: RULA, REBA, NIOSH, OCRA",
                "Diseño ergonómico del puesto",
                "Pausas activas y rotación de tareas"
              ],
              relations: ["Directiva 92/57/CEE"],
              usefulLinks: []
            },
            {
              id: "guia-psicosociologia",
              title: "Guía de Riesgos Psicosociales",
              type: "guia",
              status: "importante",
              summary: "Estrés laboral, acoso, violencia, burnout. Evaluación y prevención de factores psicosociales.",
              keyPoints: [
                "Factores de riesgo psicosocial: carga de trabajo, control, apoyo",
                "Evaluación con cuestionarios (CIS-R, QPS-Nordic)",
                "Prevención del acoso laboral (mobbing)",
                "Conciliación y bienestar laboral",
                "Plan de actuación contra riesgos psicosociales"
              ],
              relations: ["Ley Orgánica 3/2007 de Igualdad"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "emergencias",
          title: "Emergencias y Evacuación",
          items: [
            {
              id: "guia-emergencias",
              title: "Guía de Planes de Emergencia y Evacuación",
              type: "guia",
              status: "fundamental",
              summary: "Elaboración de planes de emergencia y evacuación. Equipos de intervención, simulacros, emergencias externas.",
              keyPoints: [
                "Tipos de emergencia: incendio, derrame, explosión, evacuación",
                "Planes de emergencia según tamaño de empresa",
                "Equipos de emergencia: primeros auxilios, lucha contra incendios, evacuación",
                "Simacros y ejercicios de evacuación",
                "Comunicación con emergencias externas (112)",
                "Coordinación de emergencias multiempresa"
              ],
              relations: ["RD 39/1997 - Planificación obligatoria"],
              usefulLinks: []
            },
            {
              id: "guia-pau",
              title: "Plan de Autoprotección (PAU)",
              type: "guia",
              status: "importante",
              summary: "Planes de autoprotección obligatorios para determinadas actividades. RD 393/2007.",
              keyPoints: [
                "Evaluación del riesgo de emergencia",
                "Organización de la autoprotección",
                "Medidas de protección y actuación",
                "Simulacros obligatorios (anuales o bianuales)",
                "Comunicación a la autoridad competente"
              ],
              relations: ["RD 393/2007"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "primeros-auxilios",
          title: "Primeros Auxilios",
          items: [
            {
              id: "guia-primeros-auxilios",
              title: "Guía de Primeros Auxilios Laborales",
              type: "guia",
              status: "fundamental",
              summary: "Actuación ante accidentes laborales. RCP, hemorragias, quemaduras, intoxicaciones, fractures.",
              keyPoints: [
                "Protocolo de actuación ante accidentes",
                "RCP básica y con DEA",
                "Control de hemorragias y shock",
                "Quemaduras: clasificación y tratamiento",
                "Intoxicaciones por agentes químicos",
                "Traslado y atención prehospitalaria"
              ],
              relations: ["Obligación del empresario (Ley 31/1995)"],
              usefulLinks: []
            }
          ]
        }
      ]
    },
    {
      id: "normas-iso",
      title: "Normas ISO",
      icon: "\uD83C\uDF10",
      description: "Sistemas de Gestión internacionales aplicables a PRL, Medio Ambiente y Calidad",
      categories: [
        {
          id: "iso-45001",
          title: "ISO 45001 - Sistemas de Gestión de SSO",
          items: [
            {
              id: "iso-45001-2018",
              title: "ISO 45001:2018 - Gestión de Seguridad y Salud en el Trabajo",
              type: "norma-iso",
              status: "fundamental",
              summary: "La norma que piden TODAS las empresas grandes. No es obligatoria por ley, pero si querés trabajar en una empresa seria, te van a pedir que sepas esto. Es como el 'título' de tu conocimiento.",
              keyPoints: [
                "Estructura de 10 capítulos (la que tenés que memorizar)",
                "Cap 4: Contexto - ¿Quién es la empresa? ¿Qué riesgos tiene?",
                "Cap 5: Liderazgo - La dirección DEBE comprometerse con la seguridad",
                "Cap 6: Planificación - Identificar peligros y evaluar riesgos",
                "Cap 7: Soporte - Recursos, formación, comunicación",
                "Cap 8: Operación - Cómo controlar los riesgos día a día",
                "Cap 9: Evaluación - Medir si funciona (auditorías internas)",
                "Cap 10: Mejora continua - Siempre buscar hacerlo mejor"
              ],
              relations: ["Reemplazó a OHSAS 18001", "Compatible con ISO 14001 e ISO 9001"],
              usefulLinks: [
                { text: "ISO 45001:2018 - Página INSST (explicada en español)", url: "https://www.insst.es/normativa/normas-internacionales/iso-450012018/" }
              ],
              comoLoUso: "Cuando una empresa te contrate para implementar un sistema de gestión, vas a seguir esta norma paso a paso. Primero analizás la empresa (contexto), después evaluás los riesgos, después planificás las medidas, después verificás que funcionen, y después mejorás. Es el ciclo que se repite siempre.",
              expanded: {
                cicloPDCA: true,
                checklistAuditoria: [
                  "¿La dirección está comprometida y participa activamente?",
                  "¿Se identificaron TODOS los peligros del centro de trabajo?",
                  "¿La valoración de riesgos está actualizada?",
                  "¿Los trabajadores fueron consultados en la evaluación?",
                  "¿Hay formación registrada para cada trabajador?",
                  "¿El plan de emergencia está actualizado y se hicieron simulacros?",
                  "¿Las auditorías internas se hacen según programa?",
                  "¿Se cumplen todos los requisitos legales aplicables?",
                  "¿Los proveedores y subcontratistas están evaluados?",
                  "¿Se manejan no conformidades con acciones correctivas?",
                  "¿Hay indicadores de SST medidos y revisados?",
                  "¿Se hizo la revisión por la dirección este año?"
                ]
              }
            },
            {
              id: "iso-45002",
              title: "ISO 45002:2020 - Guía de Implementación",
              type: "norma-iso",
              status: "importante",
              summary: "Guía práctica para la implementación de ISO 45001. Incluye ejemplos y recomendaciones.",
              keyPoints: [
                "Cómo establecer el contexto de la organización",
                "Identificación de peligros y valoración de riesgos",
                "Definición de objetivos y planificación de acciones",
                "Evaluación del desempeño y mejora continua"
              ],
              relations: ["Complementa ISO 45001:2018"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "iso-14001",
          title: "ISO 14001 - Gestión Ambiental",
          items: [
            {
              id: "iso-14001-2015",
              title: "ISO 14001:2015 - Gestión Ambiental",
              type: "norma-iso",
              status: "importante",
              summary: "Sistema de gestión ambiental. Relevante para saneamiento: gestión de residuos, vertidos, emisiones.",
              keyPoints: [
                "Contexto de la organización y partes interesadas",
                "Aspectos ambientales significativos",
                "Cumplimiento legal ambiental",
                "Objetivos y metas ambientales",
                "Control operacional de aspectos ambientales",
                "Preparación y respuesta ante emergencias ambientales"
              ],
              relations: ["Complementa ISO 45001", "Muy relevante para saneamiento"],
              usefulLinks: [
                { text: "ISO 14001:2018", url: "https://www.iso.org/standard/14847.html" }
              ],
              expanded: {
                aspectosAmbientales: [
                  { aspecto: "Vertidos de aguas residuales", impacto: "Contaminación de ríos, suelo y acuíferos", control: "Tratamiento previo, control de parámetros (DBO, COT, pH, metales), registro de vertidos", norma: "RD 849/1986" },
                  { aspecto: "Residuos peligrosos", impacto: "Contaminación del suelo y agua", control: "Clasificación, almacenamiento, transporte, gestión documental", norma: "RD 833/2015" },
                  { aspecto: "Emisiones a la atmósfera", impacto: "Contaminación del aire, olores", control: "Control de olores, emisiones de H₂S, filtros, treatment de gases", norma: "Ley 34/2007" },
                  { aspecto: "Ruido y vibraciones", impacto: "Molestias a vecinos y trabajadores", control: "Medición, barreras acústicas, horarios de trabajo", norma: "RD 1299/2006" },
                  { aspecto: "Consumo de recursos", impacto: "Agotamiento de recursos naturales", control: "Eficiencia energética, reciclaje de agua, optimización de procesos", norma: "ISO 50001" },
                  { aspecto: "Gestión de lodos", impacto: "Contaminación si no se gestiona correctamente", control: "Aprovechamiento energético, compostaje, vertido controlado", norma: "RD 849/1986" }
                ]
              }
            }
          ]
        },
        {
          id: "iso-9001",
          title: "ISO 9001 - Gestión de Calidad",
          items: [
            {
              id: "iso-9001-2015",
              title: "ISO 9001:2015 - Gestión de Calidad",
              type: "norma-iso",
              status: "complementaria",
              summary: "Sistema de gestión de calidad. Útil para la gestión integral y la documentación de procesos.",
              keyPoints: [
                "Enfoque al cliente",
                "Liderazgo y compromiso",
                "Gestión por procesos",
                "Mejora continua",
                "Toma de decisiones basada en evidencia",
                "Gestión de relaciones con partes interesadas"
              ],
              relations: ["Base para sistemas integrados de gestión"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "otras-iso",
          title: "Otras Normas ISO Relevantes",
          items: [
            {
              id: "iso-45003-2021",
              title: "ISO 45003:2021 - Riesgos Psicosociales",
              type: "norma-iso",
              status: "importante",
              summary: "Primera norma ISO sobre salud psicológica y seguridad en el trabajo. Guía para identificar y gestionar riesgos psicosociales.",
              keyPoints: [
                "Identificación de factores de riesgo psicosocial",
                "Evaluación del contexto organizacional",
                "Medidas de control y prevención",
                "Vigilancia de la salud mental",
                "Cultura de seguridad psicológicamente seguro"
              ],
              relations: ["Complementa ISO 45001"],
              usefulLinks: []
            },
            {
              id: "iso-19443-2018",
              title: "ISO 19443:2018 - Gestión en Alimentos",
              type: "norma-iso",
              status: "especializado",
              summary: "Sistemas de gestión de seguridad de los alimentos según ISO 22000, aplicando principios de PRL.",
              keyPoints: [
                "Integración de PRL en sistemas de gestión de alimentos",
                "APPCC + PRL",
                "Higiene y saneamiento industrial"
              ],
              relations: ["Relevante para saneamiento alimentario"],
              usefulLinks: []
            }
          ]
        }
      ]
    },
    {
      id: "homologacion",
      title: "Título y Homologación",
      icon: "\uD83C\uDF93",
      description: "Documentación necesaria para homologar tu título de Técnico en Saneamiento y Seguridad Industrial",
      categories: [
        {
          id: "documentos-homologacion",
          title: "Documentación Necesaria",
          items: [
            {
              id: "solicitud-homologacion",
              title: "Solicitud de Equivalencia/Homologación",
              type: "documento",
              status: "CRITICO",
              summary: "El trámite que tenés que hacer para que tu título argentino sea válido en España. Sin esto, no podés ejercer legalmente.",
              keyPoints: [
                "Se hace ante el Ministerio de Educación y Formación Profesional",
                "Necesitás: título apostillado + analítico + pasaporte + tasa",
                "La tasa cuesta entre 85 y 160 EUR",
                "Puede tardar entre 3 y 12 meses",
                "Consultá si tu título tiene equivalencia en el CNAE español",
                "Podés hacer el seguimiento online del expediente"
              ],
              relations: ["Consultar en Ministerio de Educación y Formación Profesional"],
              usefulLinks: [
                { text: "Ministerio de Educación - Homologación", url: "https://www.educacion.gob.es" }
              ],
              comoLoUso: "Este trámite es como sacar el registro de conducir pero para tu título. Sin esto, tu título argentino no vale nada en España. Hacelo ANTES de ir si es posible, o apenas llegues. El Ministerio puede tardar meses, así que no lo dejes para último momento."
            },
            {
              id: "apostilla-haya",
              title: "Apostilla de La Haya",
              type: "documento",
              status: "CRITICO",
              summary: "Sello internacional que valida documentos públicos extranjeros. Obligatorio para que tu título sea reconocido en España.",
              keyPoints: [
                "Se obtiene en el país de origen (Argentina: Cancillería o Cámara de Comercio)",
                "Valida la autenticidad del documento",
                "No requiere traducción si está en español",
                "Consultar si tu título ya viene apostillado por defecto"
              ],
              relations: ["Necesario ANTES de enviar la solicitud"],
              usefulLinks: []
            },
            {
              id: "traduccion-jurada",
              title: "Traducción Jurada",
              type: "documento",
              status: "importante",
              summary: "Traducción oficial de documentos al español si están en otro idioma.",
              keyPoints: [
                "Solo la necesitás si tus documentos no están en español",
                "Traducción jurada por traductor oficial registrado en España",
                "Puede ser necesaria para analíticos en portugués u otros idiomas"
              ],
              relations: ["Argentina habla español, generalmente no se necesita"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "documentos-argentina",
          title: "Documentos de Argentina",
          items: [
            {
              id: "analitico-argentina",
              title: "Analítico / Plan de Estudios",
              type: "documento",
              status: "CRITICO",
              summary: "Certificado de todas las materias cursadas, con carga horaria y calificaciones. Fundamental para la evaluación de equivalencia.",
              keyPoints: [
                "Obtener de la institución educativa donde estudiaste",
                "Debe incluir: materias, horas, calificaciones, año de cursada",
                "Si es técnico: verificar que el título sea de nivel terciario/tecnológico",
                "Consultar si coincide con el catálogo CNAE español"
              ],
              relations: ["Solicitarlo con anticipación (puede demorar)"],
              usefulLinks: []
            },
            {
              id: "certificado-antecedentes",
              title: "Certificado de Antecedentes Penales",
              type: "documento",
              status: "importante",
              summary: "Certificado de antecedentes penales del país de origen. Puede ser requerido para ciertos trámites.",
              keyPoints: [
                "Solicitar en Registro Nacional de Reincidencia (Argentina)",
                "Tiene vigencia limitada (generalmente 6 meses)",
                "Apostillar si es necesario"
              ],
              relations: ["Consultar requisitos actualizados"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "equivalencia-profesional",
          title: "Equivalencia Profesional",
          items: [
            {
              id: "equivalencia-tecnico-superior",
              title: "Equivalencia a Técnico Superior",
              type: "documento",
              status: "fundamental",
              summary: "Proceso para que tu título argentino sea reconocido como equivalente a un Título de Técnico Superior en España.",
              keyPoints: [
                "Verificar si tu título está en el CNAE español",
                "Si no está: puede requerirse homologación o convalidación parcial",
                "Posibilidad de realizar pruebas de competencia",
                "Consultar comunidades autónomas (cada una tiene sus requisitos)",
                "El INSST puede reconocer competencias en PRL"
              ],
              relations: ["Puede requerir formación complementaria"],
              usefulLinks: [
                { text: "CNAE - Clasificación Nacional de Títulos", url: "https://www.educacion.gob.es" }
              ]
            },
            {
              id: "registro-profesional",
              title: "Registro Profesional en España",
              type: "documento",
              status: "importante",
              summary: "Inscripción en registros profesionales españoles para ejercer legalmente.",
              keyPoints: [
                "Colegio Profesional (si aplica)",
                "Registro de Empresas de Servicios de Prevención (RESP)",
                "Certificados de profesionalidad",
                "Habilitación autonómica según la comunidad"
              ],
              relations: ["Consultar requisitos según la comunidad autónoma"],
              usefulLinks: []
            }
          ]
        }
      ]
    },
    {
      id: "idioma",
      title: "Idioma",
      icon: "\uD83D\uDD03",
      description: "Catalán, vocabulario técnico PRL y redacción de informes en español peninsular",
      categories: [
        {
          id: "catalan",
          title: "Catalán",
          items: [
            {
              id: "catalan-a1-b1",
              title: "Catalán A1 a B1",
              type: "idioma",
              status: "importante",
              summary: "Si pensás trabajar en Cataluña, el conocimiento de catalán es muy valorado y en algunos casos obligatorio.",
              keyPoints: [
                "Nivel A1-A2: comprensión básica, presentaciones, situaciones cotidianas",
                "Nivel B1: conversaciones sobre temas familiares, opinión, texto sencillo",
                "Cursos gratuitos: Parla (Generalitat de Catalunya)",
                "Exámenes: Centre de Normalització Lingüística",
                "Requisito para empleo público en Cataluña"
              ],
              relations: ["Consultar si el puesto requiere catalán"],
              usefulLinks: [
                { text: "Parla - Cursos gratuitos de catalán", url: "https://parla.gencat.cat" },
                { text: "CLL - Centre de Normalització Lingüística", url: "https://www.gencat.cat/llengua/cnl/" }
              ]
            },
            {
              id: "vocabulario-catalan-prl",
              title: "Vocabulario Técnico PRL en Catalán",
              type: "idioma",
              status: "importante",
              summary: "Términos técnicos de PRL traducidos al catalán para el entorno laboral.",
              keyPoints: [
                "Prevenció de Riscos Laborals = Prevención de Riesgos Laborales",
                "Seguretat i Salut en el Treball = Seguridad y Salud en el Trabajo",
                "Avaluació de Riscos = Evaluación de Riesgos",
                "Pla de Prevenció = Plan de Prevención",
                "Equip de Protecció Individual (EPI) = EPI",
                "Riscos Laborals = Riesgos Laborales",
                "Comitè de Seguretat i Salut = Comité de Seguridad y Salud"
              ],
              relations: ["Útil para informes y comunicación con empresas catalanas"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "vocabulario-prl",
          title: "Vocabulario Técnico PRL",
          items: [
            {
              id: "vocabulario-espanol-prl",
              title: "Vocabulario Técnico PRL en Español",
              type: "idioma",
              status: "fundamental",
              summary: "Términos técnicos de PRL en español peninsular que difieren del español argentino.",
              keyPoints: [
                "Peligro (no 'peligro') = Peligro / Hazard",
                "Riesgo Laboral = Riesgo Occupational / Workplace Risk",
                "Evaluación de Riesgos = Risk Assessment",
                "Medidas Preventivas = Preventive Measures",
                "Comité de Seguridad y Salud = Health and Safety Committee",
                "Delegado de Prevención = Prevention Delegate",
                "Servicio de Prevención = Prevention Service",
                "Plan de Emergencia = Emergency Plan",
                "Espacio Confinado = Confined Space",
                "Trabajo en Altura = Working at Height"
              ],
              relations: ["Diferencias entre español argentino y peninsular"],
              usefulLinks: []
            },
            {
              id: "redaccion-informes",
              title: "Redacción de Informes de PRL",
              type: "idioma",
              status: "importante",
              summary: "Modelo y estructura de informes técnicos de PRL en español peninsular.",
              keyPoints: [
                "Estructura: Introducción, Metodología, Resultados, Conclusiones, Recomendaciones",
                "Tono formal y técnico",
                "Uso de terminología INSST",
                "Referencias normativas obligatorias",
                "Formato: informe de evaluación, informe de auditoría, plan de prevención"
              ],
              relations: ["Necesario para trabajar como técnico de PRL"],
              usefulLinks: []
            }
          ]
        }
      ]
    },
    {
      id: "aplicaciones-practicas",
      title: "Aplicaciones Prácticas",
      icon: "\uD83D\uDD27",
      description: "Modelos, plantillas y herramientas para aplicar en el día a día",
      categories: [
        {
          id: "modelos-evaluacion",
          title: "Modelos de Evaluación de Riesgos",
          items: [
            {
              id: "modelo-evaluacion-general",
              title: "Modelo de Evaluación de Riesgos General",
              type: "plantilla",
              status: "fundamental",
              summary: "Plantilla para evaluar riesgos en cualquier puesto de trabajo. Incluye matriz de valoración y plan de acción.",
              keyPoints: [
                "Identificación del puesto y tareas",
                "Listado de peligros por naturaleza",
                "Valoración: Severidad x Probabilidad = Nivel de Riesgo",
                "Medidas de prevención existentes",
                "Medidas correctivas necesarias",
                "Responsable y plazo de implantación",
                "Revisión periódica"
              ],
              relations: ["Basado en la guía INSST"],
              usefulLinks: []
            },
            {
              id: "modelo-evaluacion-quimica",
              title: "Evaluación de Riesgos por Agentes Químicos",
              type: "plantilla",
              status: "importante",
              summary: "Plantilla específica para evaluar exposición a sustancias químicas peligrosas.",
              keyPoints: [
                "Identificación de la sustancia (nombre, CAS, clasificación CLP)",
                "Vía de entrada y tipo de exposición",
                "Límites de exposición profesional (LEP/SCOEL)",
                "Medición ambiental o estimación",
                "Controles existentes y necesarios",
                "Vigilancia de la salud"
              ],
              relations: ["RD 374/2001"],
              usefulLinks: []
            },
            {
              id: "modelo-evaluacion-ergonomia",
              title: "Evaluación Ergonómica de Puesto",
              type: "plantilla",
              status: "importante",
              summary: "Plantilla de evaluación ergonómica con métodos RULA y REBA.",
              keyPoints: [
                "Descripción del puesto y tareas",
                "Posturas de trabajo observadas",
                "Movimientos repetitivos",
                "Manejo manual de cargas",
                "Evaluación RULA/REBA",
                "Medidas de mejora ergonómica"
              ],
              relations: ["Guía INSST Ergonomía"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "planes-emergencia",
          title: "Planes de Emergencia",
          items: [
            {
              id: "modelo-plan-emergencia",
              title: "Modelo de Plan de Emergencia",
              type: "plantilla",
              status: "fundamental",
              summary: "Plantilla para elaborar un plan de emergencia completo según RD 39/1997.",
              keyPoints: [
                "Identificación de la empresa y centro de trabajo",
                "Evaluación de riesgos de emergencia",
                "Organización de emergencias: alarmar, evacuar, extinction, socorrer",
                "Equipos y medios disponibles",
                "Planos de evacuación",
                "Simulacros y formación",
                "Contactos de emergencia (112, bomberos, policía)"
              ],
              relations: ["RD 39/1997 y RD 393/2007"],
              usefulLinks: []
            },
            {
              id: "modelo-plan-derrame",
              title: "Protocolo de Derrames Químicos",
              type: "plantilla",
              status: "importante",
              summary: "Procedimiento de actuación ante derrames de sustancias químicas peligrosas.",
              keyPoints: [
                "Evaluación del derrame (sustancia, cantidad, zona)",
                "Evacuación del área si es necesario",
                "Equipos de contención y absorción",
                "Procedimiento de limpieza",
                "Gestión del residuo generado",
                "Documentación del incidente"
              ],
              relations: ["Relacionado con saneamiento industrial"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "matrices-riesgo",
          title: "Matrices de Riesgo",
          items: [
            {
              id: "matriz-valoracion",
              title: "Matriz de Valoración de Riesgos",
              type: "plantilla",
              status: "fundamental",
              summary: "Matriz de severidad x probabilidad para clasificar niveles de riesgo (5x5).",
              keyPoints: [
                "Severidad: 1 (inapreciable) a 5 (muy grave)",
                "Probabilidad: 1 (improbable) a 5 (muy probable)",
                "Riesgo Bajo (1-4): medidas preventivas generales",
                "Riesgo Medio (5-9): medidas correctivas en plazo",
                "Riesgo Alto (10-19): medidas urgentes",
                "Riesgo Muy Alto (20-25): paralización inmediata"
              ],
              relations: ["Metodología INSST"],
              usefulLinks: []
            }
          ]
        },
        {
          id: "formatos-informe",
          title: "Formatos de Informe",
          items: [
            {
              id: "modelo-informe-evaluacion",
              title: "Modelo de Informe de Evaluación de Riesgos",
              type: "plantilla",
              status: "fundamental",
              summary: "Formato oficial de informe técnico para presentar resultados de evaluación de riesgos.",
              keyPoints: [
                "Portada: empresa, fecha, evaluador, alcance",
                "Introducción y objetivos",
                "Metodología utilizada",
                "Resultados por puesto/nivel",
                "Conclusiones y recomendaciones",
                "Plan de acción prioritario",
                "Anexos: fotos, mediciones, fichas técnicas"
              ],
              relations: ["Obligatorio según RD 39/1997"],
              usefulLinks: []
            },
            {
              id: "modelo-informe-auditoria",
              title: "Modelo de Informe de Auditoría PRL",
              type: "plantilla",
              status: "importante",
              summary: "Formato para informe de auditoría de sistemas de gestión de PRL.",
              keyPoints: [
                "Alcance y objetivos de la auditoría",
                "Criterios de auditoría (ISO 45001, normativa)",
                "Hallazgos: conformidades y no conformidades",
                "Evidencias documentales",
                "Recomendaciones y plan de acción",
                "Opinión global del sistema de gestión"
              ],
              relations: ["ISO 45001:2018 - Cláusula 9.2"],
              usefulLinks: []
            }
          ]
        }
      ]
    },
    {
      id: "normativa-complementaria",
      title: "Normativa Complementaria",
      icon: "\uD83D\uDCCB",
      description: "Reales Decretos y normas que complementan la normativa principal de PRL",
      categories: [
        {
          id: "reales-decretos-extra",
          title: "Reales Decretos Adicionales",
          items: [
            {
              id: "rd-216-2004",
              title: "RD 216/2004 - Atmósferas Explosivas",
              type: "real-decreto",
              status: "obligatoria",
              summary: "Si en tu centro de trabajo hay gases, vapores o polvos que pueden formar mezclas explosivas (ATEX), este RD es la norma. En saneamiento se aplica cuando trabajás en pozos con gases metano o sulfuro de hidrógeno.",
              keyPoints: [
                "Zonas ATEX: clasificar los espacios donde hay riesgo de explosión (Zona 0, 1, 2 para gases; Zona 20, 21, 22 para polvos)",
                "Equipos ATEX: todos los equipos eléctricos y mecánicos en zonas clasificadas DEBEN ser aptos ATEX",
                "Señalización obligatoria de zonas de riesgo de explosión",
                "Evaluación de riesgos específica para atmósferas explosivas",
                "Plan de emergencia ante explosión",
                "Formación de trabajadores en riesgo ATEX"
              ],
              relations: ["Complementa el RD 374/2001 (agentes químicos)", "Muy relevante en pozos de saneamiento con gases"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 216/2004)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2004-3300" }
              ],
              comoLoUso: "Cuando entrás a un pozo de saneamiento, el metano (CH₄) y el sulfuro de hidrógeno (H₂S) pueden formar mezclas explosivas. Vos medís las concentraciones con gasómetro, clasificás la zona ATEX, y te asegurás de que TODOS los equipos (herramientas, lámparas, ventilación) sean aptos para esa zona."
            },
            {
              id: "rd-1299-2006",
              title: "RD 1299/2006 - Riesgos Higiénicos",
              type: "real-decreto",
              status: "obligatoria",
              summary: "Protección contra los 6 agentes higiénicos: ruido, vibraciones, campos electromagnéticos, radiaciones ionizantes, radiaciones ópticas y fibras artificiales. En saneamiento: ruido y vibraciones son los más comunes.",
              keyPoints: [
                "Ruido: VLE = 87 dB(A). Acción inferior: 80 dB(A). Acción superior: 85 dB(A)",
                "Vibraciones mano-brazo: valor límite 2,5 m/s²",
                "Vibraciones de cuerpo entero: valor límite 1,15 m/s²",
                "Evaluación obligatoria de exposición a cada agente",
                "Vigilancia de la salud específica por agente",
                "Medidas de eliminación o reducción en origen"
              ],
              relations: ["Complementa el RD 486/1997 (lugares de trabajo)", "Relacionado con RD 39/1997"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 1299/2006)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-22486" }
              ],
              comoLoUso: "En saneamiento, el ruido de bombas, compresores y herramientas neumáticas es constante. Vos medís los niveles con sonómetro, calculás la dosis de exposición diaria, y si supera los 80 dB(A) tenés que poner silenciadores, dar protectores auditivos y hacer vigilancia de la salud."
            },
            {
              id: "rd-393-2007",
              title: "RD 393/2007 - SPAI (Planes de Autoprotección)",
              type: "real-decreto",
              status: "obligatoria",
              summary: "Sistema de Protección Civil y Atención de Emergencias. Regula los planes de autoprotección que grandes empresas e instalaciones DEBEN tener.",
              keyPoints: [
                "¿Quién lo necesita? Empresas con +500 trabajadores, instalaciones industriales, centros comerciales, hospitales",
                "Plan de autoprotección: documento con protocolos ante emergencias",
                "Equipos de emergencia interna: brigadas de evacuación, primeros auxilios, lucha contra incendios",
                "Simulacros obligatorios periódicos (mínimo 1 al año)",
                "Coordinación con servicios de emergencia externos (bomberos, policía)",
                "Clasificación de emergencias: nivel 1 (interno), nivel 2 (exterior), nivel 3 (catástrofe)"
              ],
              relations: ["Complementa los planes de emergencia del RD 39/1997"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 393/2007)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-20521" }
              ],
              comoLoUso: "Cuando una empresa grande te pida que le hagas el plan de emergencia, vos tenés que seguir este RD. Identificás los riesgos específicos (incendio, derrame químico, explosión, etc.), armás los protocolos, designás las brigadas, hacés los simulacros, y coordinás con bomberos."
            },
            {
              id: "rd-299-2006",
              title: "RD 299/2006 - Equipos de Trabajo (actualización)",
              type: "real-decreto",
              status: "complementaria",
              summary: "Modifica y actualiza el RD 1215/1997 sobre equipos de trabajo. Incluye nuevas exigencias de mantenimiento, inspección y marcado CE.",
              keyPoints: [
                "Mantenimiento preventivo según instrucciones del fabricante (obligatorio)",
                "Inspecciones periódicas obligatorias antes de cada uso y según calendario",
                "Marcado CE y declaración de conformidad del fabricante",
                "Formación específica para cada tipo de equipo",
                "Registro de inspecciones y mantenimiento",
                "Retiro de servicio de equipos que no cumplan"
              ],
              relations: ["Modifica y amplía el RD 1215/1997"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 299/2006)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-21467" }
              ],
              comoLoUso: "Vos como técnico revisás que cada equipo de trabajo tenga: 1) Mantenimiento al día, 2) Inspección periódica documentada, 3) Marcado CE visible, 4) Operario con formación. Si ves un andamio sin inspección o un montacargas sin carné, lo parás."
            },
            {
              id: "rd-1620-2011",
              title: "RD 1620/2011 - Olas de Calor",
              type: "real-decreto",
              status: "complementaria",
              summary: "Protocolo de actuación ante olas de calor. Si trabajás al aire libre en verano, esto te protege.",
              keyPoints: [
                "Aviso preventivo: T > 37°C previsible → medidas preventivas",
                "Aviso de ola de calor: 3 días seguidos T máxima > 40°C",
                "Obligaciones del empresario: agua, sombra, descansos, vigilancia sanitaria",
                "Horario de trabajo reducido en horas de máximo calor (12:30-16:30 recomendado)",
                "Vigilancia de trabajadores especialmente sensibles",
                "Protocolo de actuación ante golpe de calor"
              ],
              relations: ["Complementa el RD 486/1997 (condiciones de trabajo)"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 1620/2011)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2011-14798" }
              ],
              comoLoUso: "En verano, cuando trabajás en saneamiento exterior (alcantarillas, inspecciones, obras), el calor es un riesgo REAL. Programá salidas en horas frescas, llevá agua constante, hacé descansos cada 45 min, y vigilá a los compañeros por síntomas de golpe de calor."
            },
            {
              id: "rd-840-2003",
              title: "RD 840/2003 - Riesgos Eléctricos",
              type: "real-decreto",
              status: "obligatoria",
              summary: "Medidas de seguridad en trabajos con riesgo eléctrico. Si trabajás cerca de instalaciones eléctricas, conocé estas normas.",
              keyPoints: [
                "Distancias de seguridad: 0,5m si < 1kV; mayor si > 1kV",
                "Trabajos en instalaciones desenergizadas: protocolo LOTO (bloqueo y etiquetado)",
                "Trabajos en instalaciones energizadas: solo con autorización y EPIs especiales",
                "Tierra provisional obligatoria antes de trabajar",
                "Señalización del área de trabajo",
                "Personal habilitado: solo electricistas titulados para trabajos activos"
              ],
              relations: ["Complementa el RD 1215/1997 y el RD 374/2001"],
              usefulLinks: [
                { text: "Texto completo - BOE (RD 840/2003)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-14228" }
              ],
              comoLoUso: "Cuando hacés saneamiento en zonas con instalaciones eléctricas, siempre verificás: ¿hay cables expuestos? ¿La instalación está desenergizada? ¿Se hizo el bloqueo y etiquetado? Si no sabés si está vivo o muerto, NO TOCÁS. Llamás al electricista."
            }
          ]
        }
      ]
    },
    {
      id: "catalunya",
      title: "Normativa Cataluña",
      icon: "\uD83C\uDFF4",
      description: "Leyes y decretos autonómicos de Cataluña en materia de PRL. Obligatorios si trabajás en territorio catalán.",
      categories: [
        {
          id: "leyes-catalanas",
          title: "Legislación Autonómica Catalana",
          items: [
            {
              id: "ley-5-2007-cat",
              title: "Ley 5/2007 de Prevención de Riesgos Laborales (Cataluña)",
              type: "ley-autonomica",
              status: "obligatoria-catalunya",
              summary: "La ley de PRL específica de Cataluña. Si trabajás en Barcelona o cualquier pueblo catalán, esta ley ES OBLIGATORIA además de la estatal.",
              keyPoints: [
                "Creación del Instituto Catalán de Seguridad y Salud en el Trabajo (ICSST)",
                "Pirámide preventiva catalana: empresas, mutuas, administración catalana",
                "Coordinación entre administración central y autonómica",
                "Planes de prevención adaptados al contexto catalán",
                "Inspección de trabajo: competencia compartida con el Estado",
                "Formación en catalán para trabajadores (importante)"
              ],
              relations: ["Complementa la Ley 31/1995 a nivel autonómico", "Obligatoria si trabajás en Cataluña"],
              usefulLinks: [
                { text: "Generalitat de Catalunya - Legislación", url: "https://dogc.gencat.cat" }
              ],
              comoLoUso: "Si vas a trabajar en Barcelona, TENÉS que conocer esta ley. La diferencia principal es que Cataluña tiene su propio servicio de inspección y sus propias guías. Muchos documentos internos de empresas en Cataluña deben estar en catalán."
            },
            {
              id: "decret-183-2006-cat",
              title: "Decret 183/2006 - Coordinación en Obras (Cataluña)",
              type: "decreto-autonomico",
              status: "obligatoria-catalunya",
              summary: "Desarrollo del Plan de Seguridad y Salud en obras de construcción en Cataluña.",
              keyPoints: [
                "Coordinador de seguridad y salud obligatorio en obras > 30 días y > 500m²",
                "Plan de seguridad y salud específico para cada obra",
                "Notificación a la autoridad laboral catalana antes de iniciar obras",
                "Trabajos especiales: espacios confinados, altura, excavaciones",
                "Coordinación entre empresas contratistas y subcontratistas",
                "Control documental en catalán y castellano"
              ],
              relations: ["Versión catalana del RD 1627/1997 (coordinación en obras)"],
              usefulLinks: [
                { text: "Decret 183/2006 (DOGC)", url: "https://dogc.gencat.cat" }
              ],
              comoLoUso: "Si te contratan para hacer saneamiento en una obra en Cataluña, el coordinador de seguridad te va a pedir que cumplas con este decreto. Tus evaluaciones de riesgo y planes de emergencia deben seguir la normativa catalana además de la estatal."
            },
            {
              id: "decret-62-2010-cat",
              title: "Decret 62/2010 - Servicios de Prevención (Cataluña)",
              type: "decreto-autonomico",
              status: "obligatoria-catalunya",
              summary: "Organización de los servicios de prevención de riesgos laborales en Cataluña.",
              keyPoints: [
                "Registro de empresas de prevención en Cataluña",
                "Coordinación entre Mutua y servicios de prevención",
                "Inspección y vigilancia por la autoridad laboral catalana",
                "Formación específica para técnicos de PRL en Cataluña",
                "Certificados de profesionalidad reconocidos en Cataluña"
              ],
              relations: ["Complementa el RD 39/1997 a nivel catalán"],
              usefulLinks: [
                { text: "Decret 62/2010 (DOGC)", url: "https://dogc.gencat.cat" }
              ],
              comoLoUso: "Cuando te homologuen el título y quieras trabajar en Cataluña, vas a necesitarte registrar ante la autoridad laboral catalana. Este decreto te dice cómo hacerlo."
            },
            {
              id: "resol-1730-2018-cat",
              title: "Resolución 1730/2018 - Formación en PRL (Cataluña)",
              type: "resolucion-autonomica",
              status: "informativa",
              summary: "Baremos de formación y capacitación profesional de los técnicos de prevención en Cataluña.",
              keyPoints: [
                "Niveles de formación: Básico, Intermedio, Superior",
                "Especialidades: Higiene Industrial, Seguridad en el Trabajo, Ergonomía, Medicina del Trabajo",
                "Certificados de profesionalidad del SEPE + reconocimiento catalán",
                "Cursos específicos para cada especialidad",
                "Actualización y formación continua obligatoria"
              ],
              relations: ["Información clave para la homologación del título"],
              usefulLinks: [
                { text: "Resolución 1730/2018 (DOGC)", url: "https://dogc.gencat.cat" }
              ],
              comoLoUso: "ESTO es lo que necesitás para saber qué título homologar y qué formación adicional necesitás en Cataluña. Consultá con el SEPE catalán para saber exactamente qué documentos necesitás."
            }
          ]
        }
      ]
    },
    {
      id: "saneamiento-sector",
      title: "Saneamiento Industrial",
      icon: "\uD83E\uDDF0",
      description: "Contenido específico para el sector de saneamiento: procedimientos, riesgos sectoriales y buenas prácticas",
      categories: [
        {
          id: "procedimientos-saneamiento",
          title: "Procedimientos de Trabajo Seguro",
          items: [
            {
              id: "guia-saneamiento-industrial",
              title: "Guía de Saneamiento Industrial - INSST",
              type: "guia-sectorial",
              status: "recomendada",
              summary: "Guía específica para el sector de saneamiento industrial. Cubre riesgos, prevención y buenas prácticas.",
              keyPoints: [
                "Riesgos específicos del saneamiento: químicos, biológicos, confinados, altura",
                "EPIs específicos: guantes químicos, mascarillas, trajes, arneses",
                "Procedimientos de trabajo seguro para cada tipo de intervención",
                "Protocolos de limpieza y desinfección de instalaciones",
                "Gestión de residuos de saneamiento",
                "Inspecciones y auditorías de instalaciones"
              ],
              relations: ["Aplicación directa de todas las normativas de PRL al sector"],
              comoLoUso: "Esta guía es tu manual práctico. Cada vez que vayas a hacer un trabajo de saneamiento, consultá la guía para el procedimiento seguro."
            },
            {
              id: "protocolo-pozo-visita",
              title: "Protocolo: Trabajo en Pozos de Visita",
              type: "procedimiento",
              status: "fundamental",
              summary: "Procedimiento paso a paso para trabajar en pozos de visita de saneamiento.",
              keyPoints: [
                "1. Permisos: permiso de trabajo firmado por responsable",
                "2. Medición atmosférica: O₂ (19,5-23,5%), CH₄ (< 1% LIE), H₂S (< 10 ppm)",
                "3. Ventilación: extractor antes de entrar y durante el trabajo",
                "4. EPIs: casco, guantes, calzado de seguridad, arnés con línea de vida",
                "5. Vigilancia: persona externa con radio y equipo de rescate",
                "6. Comunicación: radio o cuerda para mantener contacto constante",
                "7. Emergencia: protocolo de rescate sin entrar sin EPI"
              ],
              relations: ["Aplicación directa del RD 604/2006", "Fundamental en saneamiento"],
              comoLoUso: "ESTE es tu procedimiento de referencia. Siempre seguí el mismo esquema. Nunca te saltes un paso aunque sea 'rápido'. Si ves a alguien saltándose un paso, PARÁ la obra."
            },
            {
              id: "protocolo-desratizacion",
              title: "Protocolo: Desratización y Control de Plagas",
              type: "procedimiento",
              status: "fundamental",
              summary: "Procedimiento seguro para trabajos de desratización y control de plagas en instalaciones industriales.",
              keyPoints: [
                "Evaluación de riesgos: químicos (plaguicidas) + biológicos (roedores, insectos)",
                "EPIs obligatorios: mascarilla, guantes, traje de protección",
                "Señalización del área tratada",
                "Plaguicidas autorizados: solo productos registrados en el Ministerio de Sanidad",
                "Registro de tratamientos aplicados",
                "Vigilancia de la salud del aplicador"
              ],
              relations: ["Aplicación del RD 374/2001 (químicos) y RD 664/1997 (biológicos)"],
              comoLoUso: "Si trabajás en desratización, estos son tus protocolos. Cada producto tiene su ficha técnica, cada aplicación se registra, y vos tenés que vigilar tu salud constantemente."
            },
            {
              id: "protocolo-limpieza-tanques",
              title: "Protocolo: Limpieza de Tanques",
              type: "procedimiento",
              status: "fundamental",
              summary: "Procedimiento para limpieza y mantenimiento de tanques de agua, residuos o productos químicos.",
              keyPoints: [
                "1. Vaciar y limpiar el tanque de residuos visibles",
                "2. Ventilación forzada (mínimo 2 horas antes de entrar)",
                "3. Medición atmosférica completa",
                "4. Desconexión y bloqueo de entradas (LOTO)",
                "5. EPIs completos: traje, mascarilla, guantes, arnés",
                "6. Persona de vigilancia externa con equipo de rescate",
                "7. Trabajo en turnos cortos (máximo 20 min dentro)"
              ],
              relations: ["Espacio confinado (RD 604/2006) + Agentes químicos (RD 374/2001)"],
              comoLoUso: "Limpiar un tanque es uno de los trabajos más peligrosos. Siempre seguí el protocolo al pie de la letra. No hay atajos."
            }
          ]
        }
      ]
    },
    {
      id: "residuos-urbanos",
      title: "Recolección de Residuos & Limpieza Viaria",
      icon: "🚛",
      description: "Normativa técnica, NTPs del INSST, prevención en camiones compactadores y convenios colectivos en España y Cataluña",
      categories: [
        {
          id: "ntp-residuos",
          title: "Normativa y Notas Técnicas INSST de Residuos",
          items: [
            {
              id: "ntp-618-residuos",
              title: "NTP 618: Recogida de Residuos Urbanos - Prevención de Riesgos",
              type: "ntp",
              status: "obligatoria",
              summary: "Guía técnica oficial del INSST para evaluar y prevenir los riesgos en la recogida de residuos urbanos (RSU) en camiones de basura y barrido.",
              keyPoints: [
                "Riesgo de atropello por camión recolector durante la marcha atrás (Cámara trasera y avisador acústico obligatorios).",
                "Atrapamiento y aplastamiento en tolva de compactación: Interbloqueo de seguridad y paradas de emergencia en laterales.",
                "EPIs obligatorios: Ropa de alta visibilidad Clase 2/3 (EN ISO 20471), calzado de seguridad antiperforación (S3) y guantes anticorte.",
                "Riesgos biológicos: Cortes por vidrios o jeringas, desinfección obligatoria de manos y vacunación (Tétanos, Hepatitis B)."
              ],
              relations: ["RD 1215/1997", "RD 773/1997", "Ley 7/2022 de Residuos"],
              comoLoUso: "Con tus 20 años de experiencia, esta NTP es tu biblia técnica en España para supervisar la flota de camiones compactadores y la seguridad de los peones de recolección."
            },
            {
              id: "ntp-958-contenedores",
              title: "NTP 958: Ergonomía en Manejo de Contenedores RSU",
              type: "ntp",
              status: "obligatoria",
              summary: "Evaluación ergonómica y prevención de sobresfuerzos al empujar, arrastrar y enganchar contenedores de carga trasera y lateral.",
              keyPoints: [
                "Límite de fuerza de empuje/arrastre: Máximo 25 kgf en plano y rampas < 5%.",
                "Ruedas y frenos de contenedores: Mantenimiento periódico obligatorio para evitar vuelcos.",
                "Carga Lateral vs Carga Trasera: Automatización para eliminar la elevación manual de peso."
              ],
              relations: ["NTP 618", "Ergonomía INSST"],
              comoLoUso: "Usalo para diseñar los procedimientos de trabajo del personal de recolección y evitar lumbalgias y lesiones musculoesqueléticas."
            },
            {
              id: "convenio-residuos-espana",
              title: "Convenio Colectivo de Recogida de Residuos y Limpieza Viaria",
              type: "convenio",
              status: "sectorial",
              summary: "Regulación laboral y salarial del sector de limpieza pública, recogida, tratamiento de residuos y limpieza de alcantarillado en España.",
              keyPoints: [
                "Pluses obligatorios: Nocturnidad, Penosidad, Peligrosidad y Festivos.",
                "Jornada nocturna reducida y descansos entre turnos.",
                "Empresas concesionarias principales: FCC Medio Ambiente, PreZero, Urbaser, Valoriza, Sorigué (operan en Vic y Cataluña)."
              ],
              relations: ["Ley 31/1995", "Agència de Residus de Catalunya (ARC)"],
              comoLoUso: "Ideal para conocer las condiciones salariales del sector y la gestión del personal en servicios urbanos."
            }
          ]
        }
      ]
    }
  ],
  timeline: [
    {
      id: "fase-1",
      title: "Fase 1: Normativa Española",
      period: "Julio - Octubre 2026",
      months: ["Jul 2026", "Ago 2026", "Sep 2026", "Oct 2026"],
      topics: ["Ley 31/1995", "RD 39/1997", "RD 1215/1997", "RD 773/1997", "RD 486/1997", "Guía Evaluación Riesgos"],
      status: "pendiente"
    },
    {
      id: "fase-2",
      title: "Fase 2: ISO y Sistemas de Gestión",
      period: "Noviembre 2026 - Marzo 2027",
      months: ["Nov 2026", "Dic 2026", "Ene 2027", "Feb 2027", "Mar 2027"],
      topics: ["ISO 45001:2018", "ISO 14001:2015", "Estructura HLS", "Auditorías internas"],
      status: "pendiente"
    },
    {
      id: "fase-3",
      title: "Fase 3: Riesgos Específicos",
      period: "Abril - Agosto 2027",
      months: ["Abr 2027", "May 2027", "Jun 2027", "Jul 2027", "Ago 2027"],
      topics: ["Agentes Químicos", "Agentes Biológicos", "Ergonomía", "Psicosociología", "Primeros Auxilios", "Espacios Confinados"],
      status: "pendiente"
    },
    {
      id: "fase-4",
      title: "Fase 4: Repaso y Práctica",
      period: "Septiembre 2027 - Enero 2028",
      months: ["Sep 2027", "Oct 2027", "Nov 2027", "Dic 2027", "Ene 2028"],
      topics: ["Repaso general", "Catalán B1", "Modelos prácticos", "Simulacros de evaluación", "Preparación homologación"],
      status: "pendiente"
    }
  ],
  vocabulario: {
    "argentino_a_peninsular": [
      { ar: "ergónomo", es: "ergónomo / técnico en prevención" },
      { ar: "higiene industrial", es: "higiene industrial" },
      { ar: "seguridad e higiene", es: "seguridad y salud en el trabajo (SST)" },
      { ar: "explosión", es: "explosión / atmósfera explosiva (ATEX)" },
      { ar: "desratización", es: "control de plagas / desratización" },
      { ar: "desinfección", es: "desinfección / tratamiento fitosanitario" },
      { ar: "lavadero", es: "zona de lavado / ducha de seguridad" },
      { ar: "cinta transportadora", es: "transportador / cinta transportadora" },
      { ar: "matafuegos", es: "extintor" },
      { ar: "encuesta de ruido", es: "medición de ruido / mapa de ruido" }
    ]
  }
};

if (typeof window !== "undefined") {
  window.PRL_DATA = PRL_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PRL_DATA;
}

