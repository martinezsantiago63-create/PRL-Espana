# GUÍA MAESTRA: CÓMO GENERAR LOS PODCASTS EN NOTEBOOKLM
## Para el Programa de Estudio y Ejercicio de PRL en España

Esta carpeta contiene **todo el contenido íntegro y exhaustivo de tu aplicación de estudio**, formateado y estructurado específicamente como fuentes de conocimiento técnico de alta fidelidad para **Google NotebookLM** (o Gemini 1.5 Pro / Claude 3.5 Sonnet).

---

### ¿Por qué este formato funciona tan bien en NotebookLM?
NotebookLM no inventa información de la nada: **reflexiona y debate exclusivamente sobre las fuentes que le cargues**.
* Si le das un resumen de 2 párrafos, genera un podcast superficial de 3 minutos.
* Si le das **estos dossiers exhaustivos** (con artículos de ley exactos, contrastes entre Argentina y España, multas en euros de la LISOS, cifras de ruido, ppm de gases, límites de lux y procedimientos de inspección), **genera un podcast de nivel clase magistral**, profundo, apasionado y lleno de datos reales de campo.

---

### PASO A PASO PARA GENERAR TUS PODCASTS EN NOTEBOOKLM

#### Paso 1: Crear el Cuaderno
1. Entrá a [https://notebooklm.google.com/](https://notebooklm.google.com/) con tu cuenta de Google.
2. Hacé clic en **"Nuevo cuaderno"** (+ New Notebook).
3. Nombralo: `PRL España - Formación Profesional y Práctica`.

#### Paso 2: Cargar las Fuentes
Podés subir los archivos Markdown (`.md`) o copiar su texto directamente:
* **Opción A (Por Temas / Episodios independientes):** Creás un cuaderno para cada módulo (ej. un cuaderno para *Ley 31/1995*, otro para *Espacios Confinados*, etc.) y subís el archivo correspondiente.
* **Opción B (Todo el programa junto):** Subís los 10 archivos temáticos o el archivo `DOSSIER_MAESTRO_COMPLETO_PRL_ESPANA_NOTEBOOKLM.md` en un solo cuaderno. NotebookLM admite hasta 50 fuentes por cuaderno.

#### Paso 3: Configurar el Audio Overview (Prompt de Personalización)
Cuando vayas a generar la conversación hablada (Audio Overview / Deep Dive conversation):
1. En el panel derecho de NotebookLM, hacé clic en **"Personalizar"** (Customize) antes de presionar Generar.
2. Pegá el siguiente **Prompt Maestro de Personalización**:

```text
Crea un podcast conversacional profundo, exhaustivo y apasionado de debate técnico profesional entre dos conductores expertos en Prevención de Riesgos Laborales:

- CONDUCTOR 1 (Martín): Técnico de Higiene y Seguridad de origen argentino con 20 años de experiencia en recolección de residuos, limpieza viaria y saneamiento. Hace preguntas agudas, busca la aplicación real en el terreno de trabajo y compara constantemente con la Ley 19.587 y el sistema de ART de Argentina, señalando las diferencias prácticas.
- CONDUCTORA 2 (Elena): Especialista senior de PRL en España y experta en normativa comunitaria europea. Conoce los detalles de la Ley 31/1995, los Reales Decretos técnicos, el funcionamiento de los SPA y la severidad de la Inspección de Trabajo (ITSS). Explica con claridad pedagógica y rigor legal.

PAUTAS OBLIGATORIAS:
1. No omitas ningún dato técnico ni número: menciona artículos de ley específicos, sanciones exactas en euros de la LISOS, niveles de ruido en dBA, concentraciones de gases en ppm (H2S, CH4, O2), iluminación en lux y plazos legales.
2. Tono: Charla natural, fluida, de café entre colegas apasionados, con repreguntas, momentos de reflexión, ejemplos de accidentes reales y consejos prácticos para inspecciones.
3. No hagas resúmenes rápidos: profundiza en cada concepto, explicando el "por qué" de la ley y cómo se aplica frente a un empresario o inspector.
```

3. Hacé clic en **"Generar"**.
4. En unos 3 a 5 minutos, NotebookLM creará un episodio de audio completo con voces de locutores profesionales debatiendo todo tu temario.

#### Paso 4: Descargar el Audio para tu App
1. Hacé clic en los tres puntitos del reproductor de NotebookLM y seleccioná **"Descargar audio"** (Download).
2. Guardá el archivo como `episodio-1.mp3`, `episodio-2.mp3`, etc., dentro de tu carpeta de la app `PRL-Espana/audio/podcasts/`.
3. ¡Tu app podrá reproducir el archivo de alta calidad con sonido de estudio!

---

### ÍNDICE DE ARCHIVOS DISPONIBLES EN ESTA CARPETA

* **`01_EL_SISTEMA_ESPANOL_VS_ARGENTINA_Y_LEY_31-1995.md`**: El choque de modelos (sin ART, deber del empresario, Artículos 14, 15, 16, 23, 24, 29).
* **`02_REGLAMENTO_SERVICIOS_PREVENCION_RD_39-1997_Y_ESPECIALIDADES.md`**: Las 4 especialidades, modalidades preventivas, SPP vs SPA, niveles formativos y auditorías.
* **`03_LUGARES_DE_TRABAJO_RD_486-1997_Y_SENALIZACION_RD_485-1997.md`**: Alturas mínimas, pasillos, escaleras, temperaturas (14-27 °C), lux y colores de seguridad.
* **`04_EQUIPOS_DE_TRABAJO_RD_1215-1997_Y_EPIS_RD_773-1997.md`**: Marcado CE, resguardos, consignación LOTO, PEMP y las 3 categorías de EPIs.
* **`05_CONSTRUCCION_RD_1627-1997_Y_RECURSOS_PREVENTIVOS.md`**: Coordinadores de seguridad, ESS vs EBSS, PSS, Libro de Incidencias y presencia del Recurso Preventivo.
* **`06_HIGIENE_INDUSTRIAL_RUIDO_QUIMICOS_Y_BIOLOGICOS_RD_664-1997.md`**: Límites de ruido (80, 85, 87 dBA), VLA químicos, Fichas de Seguridad REACH y los 4 grupos biológicos.
* **`07_SANEAMIENTO_ALCANTARILLADO_Y_ESPACIOS_CONFINADOS.md`**: Protocolo de entrada, los gases letales (H2S, Metano, O2), ventilación forzada y recolección de residuos urbanos.
* **`08_INVESTIGACION_DE_ACCIDENTES_ARBOL_DE_CAUSAS_Y_RESPONSABILIDAD_JURIDICA.md`**: El Árbol de Causas, multas LISOS, recargo de prestaciones (30-50%) y penas de prisión (Art. 316 CP).
* **`09_METODOS_EVALUACION_INSST_NTP_330_Y_MATRIZ_BINARIA.md`**: Matriz de riesgos INSST, Método Fine, métodos ergonómicos (REBA, RULA, NIOSH) y CoPsoQ.
* **`10_CATALUNYA_TREBALL_HOMOLOGACION_Y_MERCADO_LABORAL.md`**: Organismos en Cataluña (ICSSL, Treball), salarios de convenio, vocabulario catalán de obra y homologación del título.
* **`11_ARTICULADO_LITERAL_BOE_Y_LEGISLACION_OFICIAL.md`**: Texto íntegro y literal oficial publicado en el BOE/DOUE de todos los artículos clave de la Ley 31/1995, RD 39/1997, RD 1215/1997, RD 773/1997, RD 374/2001, RD 664/1997, RD 486/1997, RD 396/2006, RD 604/2006, RD 665/1997, LISOS RDL 5/2000, Estatuto de los Trabajadores, Constitución Española y Directivas Europeas con sus aplicaciones técnicas de campo.: Organismos en Cataluña (ICSSL, Treball), salarios de convenio, vocabulario catalán de obra y homologación del título.
* **`DOSSIER_MAESTRO_COMPLETO_PRL_ESPANA_NOTEBOOKLM.md`**: Documento gigante consolidado que agrupa todo el temario en un solo texto continuo.
