const AIProfesor = {
  API_URL: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",

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
        respuesta: local || "No encontré una respuesta en mi base de conocimientos. Para respuestas más completas, configurá una API key de Google Gemini en ⚙️ Ajustes. Es gratis en aistudio.google.com"
      };
    }

    const contextoPRL = `Sos un profesor experto en Prevención de Riesgos Laborales (PRL) en España. Explicás de forma simple, directa, en argentino. Tus alumnos son técnicos argentinos que quieren trabajar en España. Respondé siempre en español argentino, de forma clara y práctica. Si te preguntan sobre una ley, explicá qué dice y cómo se aplica en la vida real. Si no sabés algo, decilo.`;

    try {
      const resp = await fetch(`${this.API_URL}?key=${this.getApiKey()}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: contextoPRL + "\n\nPregunta del alumno: " + pregunta }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
            topP: 0.9
          }
        })
      });

      if (!resp.ok) {
        if (resp.status === 400 || resp.status === 403) {
          this.setApiKey("");
          return {
            fuente: "error",
            respuesta: "La API key parece ser inválida. Revisala en ⚙️ Ajustes y generá una nueva en aistudio.google.com"
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
  }
};
