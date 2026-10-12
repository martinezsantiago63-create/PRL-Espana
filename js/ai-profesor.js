const AIProfesor = {
  getModel() {
    return localStorage.getItem("prl_gemini_model") || "gemini-1.5-pro";
  },

  setModel(model) {
    localStorage.setItem("prl_gemini_model", model);
  },

  getApiUrl() {
    const model = this.getModel();
    return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  },

  IMAGEN_URL: "https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict",

  getApiKey() {
    return localStorage.getItem("prl_gemini_key") || "";
  },

  setApiKey(key) {
    localStorage.setItem("prl_gemini_key", key.trim());
  },

  hasApiKey() {
    return this.getApiKey().length > 10;
  },

  async preguntar(pregunta) {
    if (!this.hasApiKey()) {
      const local = buscarRespuesta(pregunta);
      return {
        fuente: "base-local",
        respuesta: local || "No encontré una respuesta en mi base de conocimientos. Para respuestas con la IA de tu cuenta Google (Gemini 1.5 Pro / 2.0 Flash), configurá tu API Key en ⚙️ Ajustes. Es gratis en aistudio.google.com"
      };
    }

    const contextoPRL = `Sos un profesor experto en Prevención de Riesgos Laborales (PRL) en España. Explicás de forma simple, directa, en argentino. Tus alumnos son técnicos argentinos que quieren trabajar en España. Respondé siempre en español argentino, de forma clara y práctica. Si te preguntan sobre una ley, explicá qué dice y cómo se aplica en la vida real. Si no sabés algo, decilo.`;

    try {
      const resp = await fetch(`${this.getApiUrl()}?key=${this.getApiKey()}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: contextoPRL + "\n\nPregunta del alumno: " + pregunta }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048,
            topP: 0.95
          }
        })
      });

      if (!resp.ok) {
        if (resp.status === 400 || resp.status === 403) {
          this.setApiKey("");
          return {
            fuente: "error",
            respuesta: "La API key parece ser inválida. Revisala en ⚙️ Ajustes y generá una nueva en aistudio.google.com con tu cuenta de Google."
          };
        }
        throw new Error("API error: " + resp.status);
      }

      const data = await resp.json();
      const texto = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (texto) {
        return { fuente: "gemini", respuesta: texto };
      }

      return {
        fuente: "gemini-vacio",
        respuesta: "No pude generar una respuesta. Intentá de nuevo."
      };

    } catch (err) {
      const local = buscarRespuesta(pregunta);
      return {
        fuente: "fallback",
        respuesta: local
          ? "⚠️ No pude conectar con la IA, pero tengo esto en mi base de conocimientos:\n\n" + local
          : "⚠️ No hay conexión a internet y no encontré la respuesta en mi base local. Verificá tu conexión y probá de nuevo."
      };
    }
  },

  async generarImagenConGoogle(promptText) {
    if (!this.hasApiKey()) {
      return null;
    }
    try {
      const resp = await fetch(`${this.IMAGEN_URL}?key=${this.getApiKey()}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          instances: [{ prompt: promptText }],
          parameters: { sampleCount: 1, aspectRatio: "1:1" }
        })
      });

      if (!resp.ok) return null;
      const data = await resp.json();
      const base64 = data.predictions?.[0]?.bytesBase64Encoded;
      const mime = data.predictions?.[0]?.mimeType || "image/png";
      if (base64) {
        return `data:${mime};base64,${base64}`;
      }
      return null;
    } catch (e) {
      return null;
    }
  },

  async generarEstructuraLamina(tema) {
    const promptJSON = `Sos un experto en Prevención de Riesgos Laborales (PRL) en España. Generá una lámina de estudio completa para el tema de seguridad laboral: "${tema}".
Devolvé ÚNICAMENTE un objeto JSON válido (sin formato markdown ni texto adicional) con esta estructura exacta:
{
  "titulo": "Título breve y profesional",
  "subtitulo": "Subtítulo explicativo con Real Decreto o Ley aplicable en España",
  "categoria": "Categoría (ej: Seguridad en el Trabajo, Higiene Industrial, Ergonomía)",
  "resumen": "Resumen técnico de 2 a 3 oraciones sobre este riesgo en España.",
  "columnas": {
    "acto": {
      "titulo": "⚠️ MEDIDAS PREVENTIVAS / OBLIGACIONES",
      "puntos": ["Punto 1", "Punto 2", "Punto 3", "Punto 4"]
    },
    "condicion": {
      "titulo": "🚨 RIESGOS PRINCIPALES Y EQUIPOS",
      "puntos": ["Punto 1", "Punto 2", "Punto 3", "Punto 4"]
    }
  },
  "claves": ["Clave o norma 1", "Clave o norma 2", "Clave o norma 3"]
}`;

    if (!this.hasApiKey()) {
      return {
        titulo: tema,
        subtitulo: `Guía de seguridad para ${tema} en España`,
        categoria: "Prevención General",
        resumen: `Lámina de estudio sobre ${tema}. Para contenido completo por IA, ingresá tu clave de Google.`,
        columnas: {
          acto: { titulo: "⚠️ OBLIGACIONES Y PREVENCIÓN", puntos: [`Usar EPIs para ${tema}`, `Seguir protocolo de seguridad`, `Formación previa Art. 19 LPRL`] },
          condicion: { titulo: "🚨 CONDICIONES Y EQUIPOS", puntos: [`Revisar equipos antes del uso`, `Verificar señalización`, `Evitar zonas de peligro`] }
        },
        claves: [`Revisar Real Decreto aplicable`, `Consultar Guía INSST`, `Verificar marcado CE`]
      };
    }

    try {
      const resp = await fetch(`${this.getApiUrl()}?key=${this.getApiKey()}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptJSON }] }],
          generationConfig: { temperature: 0.3, maxOutputTokens: 2000 }
        })
      });
      if (!resp.ok) throw new Error("API Error");
      const data = await resp.json();
      let text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
      text = text.replace(/```json/g, "").replace(/```/g, "").trim();
      return JSON.parse(text);
    } catch (e) {
      return {
        titulo: tema,
        subtitulo: `Lámina didáctica de PRL para ${tema}`,
        categoria: "Prevención de Riesgos",
        resumen: `Resumen de seguridad laboral sobre ${tema} según la normativa española.`,
        columnas: {
          acto: { titulo: "⚠️ OBLIGACIONES", puntos: [`Aplicar medidas preventivas`, `Usar EPIs obligatorios`, `Reportar anomalías`] },
          condicion: { titulo: "🚨 FACTORES DE RIESGO", puntos: [`Supervisar equipos`, `Verificar entorno seguro`, `Señalizar área`] }
        },
        claves: [`Cumplir Ley 31/1995`, `Aplicar principios preventivos`]
      };
    }
  }
};
