const PLANTILLAS = {
  evaluacionRiesgos: {
    titulo: "Plantilla: Evaluación de Riesgos",
    descripcion: "Modelo en blanco para evaluar riesgos en cualquier centro de trabajo. Siguiendo la metodología INSST.",
    contenido: `<h2>EVALUACIÓN DE RIESGOS LABORALES</h2>
<div style="border: 1px solid var(--border); padding: 16px; border-radius: var(--radius); margin: 12px 0;">
  <p><strong>Empresa:</strong> _______________________________________________</p>
  <p><strong>Centro de trabajo:</strong> ______________________________________</p>
  <p><strong>Puesto/Área evaluada:</strong> ___________________________________</p>
  <p><strong>Fecha de evaluación:</strong> _____________________________________</p>
  <p><strong>Evaluador:</strong> _______________________________________________</p>
  <p><strong>Nº de trabajadores afectados:</strong> ______________________________</p>
</div>

<h3>1. IDENTIFICACIÓN DE PELIGROS</h3>
<table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
  <tr style="background: var(--bg-secondary);">
    <th style="border: 1px solid var(--border); padding: 8px; text-align: left;">Nº</th>
    <th style="border: 1px solid var(--border); padding: 8px; text-align: left;">Peligro identificado</th>
    <th style="border: 1px solid var(--border); padding: 8px; text-align: left;">Tipo de peligro</th>
    <th style="border: 1px solid var(--border); padding: 8px; text-align: left;">¿Quién puede resultar afectado?</th>
  </tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;">1</td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;">2</td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;">3</td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;">4</td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;">5</td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
</table>

<h3>2. VALORACIÓN DEL RIESGO</h3>
<p><em>Riesgo = Severidad × Probabilidad</em></p>
<p><strong>Severidad:</strong> 1=sin lesión | 2=lesión leve | 3=lesión con baja | 4=lesión muy grave | 5=muerte</p>
<p><strong>Probabilidad:</strong> 1=casi imposible | 2=poco probable | 3=posible | 4=probable | 5=casi seguro</p>

<table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
  <tr style="background: var(--bg-secondary);">
    <th style="border: 1px solid var(--border); padding: 8px;">Nº</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Peligro</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Severidad (1-5)</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Probabilidad (1-5)</th>
    <th style="border: 1px solid var(--border); padding: 8px;">RIESGO (S×P)</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Nivel de riesgo</th>
  </tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;">1</td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;">2</td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;">3</td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
</table>

<p><strong>Niveles de riesgo:</strong> 1-4 = Bajo | 5-9 = Medio | 10-15 = Alto | 16-25 = Muy Alto</p>

<h3>3. MEDIDAS PREVENTIVAS Y CORRECTIVAS</h3>
<table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
  <tr style="background: var(--bg-secondary);">
    <th style="border: 1px solid var(--border); padding: 8px;">Nº Peligro</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Medida preventiva</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Responsable</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Plazo</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Estado</th>
  </tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;">1</td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;">2</td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;">3</td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
</table>

<h3>4. SEGUIMIENTO</h3>
<p><strong>Fecha de próxima revisión:</strong> ________________________________</p>
<p><strong>Firma del evaluador:</strong> _________________________ <strong>Firma del responsable:</strong> _________________________</p>`
  },
  permisoTrabajo: {
    titulo: "Plantilla: Permiso de Trabajo para Espacios Confinados",
    descripcion: "Modelo de permiso obligatorio antes de entrar a espacios confinados (pozos, tanques, tuberías).",
    contenido: `<h2>PERMISO DE TRABAJO - ESPACIO CONFINADO</h2>
<div style="border: 2px solid #e74c3c; padding: 16px; border-radius: var(--radius); margin: 12px 0; background: rgba(231,76,60,0.05);">
  <p style="color: #e74c3c; font-weight: bold;">⚠️ ESTE DOCUMENTO ES OBLIGATORIO ANTES DE ENTRAR A CUALQUIER ESPACIO CONFINADO</p>
</div>

<div style="border: 1px solid var(--border); padding: 16px; border-radius: var(--radius); margin: 12px 0;">
  <p><strong>Empresa:</strong> _______________________________________________</p>
  <p><strong>Centro de trabajo:</strong> ______________________________________</p>
  <p><strong>Ubicación del espacio confinado:</strong> __________________________</p>
  <p><strong>Tipo de espacio:</strong> ☐ Pozo de visita ☐ Tanque ☐ Tubería ☐ Cámara ☐ Otro: _______</p>
  <p><strong>Fecha:</strong> _______________ <strong>Turno:</strong> _______________</p>
</div>

<h3>1. EVALUACIÓN ATMOSFÉRICA (OBLIGATORIO)</h3>
<table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
  <tr style="background: #f8d7da;">
    <th style="border: 1px solid var(--border); padding: 8px;">Parámetro</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Valor seguro</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Medición 1 (hora: ___)</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Medición 2 (hora: ___)</th>
  </tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;"><strong>Oxígeno (O₂)</strong></td><td style="border: 1px solid var(--border); padding: 8px;">19,5% - 23,5%</td><td style="border: 1px solid var(--border); padding: 8px;">___%</td><td style="border: 1px solid var(--border); padding: 8px;">___%</td></tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;"><strong>Sulfuro de hidrógeno (H₂S)</strong></td><td style="border: 1px solid var(--border); padding: 8px;">< 10 ppm</td><td style="border: 1px solid var(--border); padding: 8px;">___ ppm</td><td style="border: 1px solid var(--border); padding: 8px;">___ ppm</td></tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;"><strong>Metano (CH₄)</strong></td><td style="border: 1px solid var(--border); padding: 8px;">< 1% LIE</td><td style="border: 1px solid var(--border); padding: 8px;">___%</td><td style="border: 1px solid var(--border); padding: 8px;">___%</td></tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;"><strong>Monóxido de carbono (CO)</strong></td><td style="border: 1px solid var(--border); padding: 8px;">< 25 ppm</td><td style="border: 1px solid var(--border); padding: 8px;">___ ppm</td><td style="border: 1px solid var(--border); padding: 8px;">___ ppm</td></tr>
</table>

<h3>2. VENTILACIÓN</h3>
<p>☐ Se ventiló el espacio con extractor durante ______ minutos</p>
<p>☐ Se verificó la ventilación con segunda medición</p>
<p>☐ Se mantendrá ventilación durante todo el trabajo</p>

<h3>3. EPIs</h3>
<p>☐ Casco con barbilla &nbsp; ☐ Guantes &nbsp; ☐ Mascarilla/filtro: _________ &nbsp; ☐ Calzado seguridad</p>
<p>☐ Arnés con línea de vida &nbsp; ☐ Radio de comunicación &nbsp; ☐ Detector de gases personal</p>

<h3>4. PERSONAL</h3>
<table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
  <tr style="background: var(--bg-secondary);">
    <th style="border: 1px solid var(--border); padding: 8px;">Nombre</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Función</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Firma</th>
  </tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;">Trabajador que entra</td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;">Vigilante externo</td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;">Responsable de seguridad</td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
</table>

<h3>5. EQUIPO DE RESCATE</h3>
<p>☐ Trípode con polea &nbsp; ☐ Arnés de rescate &nbsp; ☐ Oxígeno de emergencia &nbsp; ☐ Botiquín</p>

<h3>6. AUTORIZACIÓN</h3>
<p><strong>¿Las mediciones son correctas?</strong> ☐ SÍ ☐ NO (si NO, NO SE PERMITE LA ENTRADA)</p>
<p><strong>¿Se cumplieron todas las medidas?</strong> ☐ SÍ ☐ NO</p>
<p><strong>AUTORO DE TRABAJO PERMITIDO:</strong> ☐ SÍ ☐ NO</p>
<p><strong>Fecha/hora de inicio:</strong> _______________ <strong>Fecha/hora de fin:</strong> _______________</p>
<p><strong>Firma del responsable:</strong> _________________________</p>

<div style="border: 1px solid #f39c12; padding: 12px; border-radius: var(--radius); margin-top: 16px; background: rgba(243,156,18,0.05);">
  <p style="color: #f39c12; font-weight: bold;">RECUERDA: SI LAS MEDICIONES NO SON CORRECTAS, NO SE PERMITE LA ENTRADA. SI HAY ALGUNA DUDA, NO SE PERMITE LA ENTRADA.</p>
</div>`
  },
  registroIncidencias: {
    titulo: "Plantilla: Registro de Incidencias y Cuasi Accidentes",
    descripcion: "Modelo para registrar incidentes, cuasi accidentes y condiciones inseguras detectadas.",
    contenido: `<h2>REGISTRO DE INCIDENCIAS</h2>
<div style="border: 1px solid var(--border); padding: 16px; border-radius: var(--radius); margin: 12px 0;">
  <p><strong>Nº de incidencia:</strong> INC-________-________</p>
  <p><strong>Fecha del hecho:</strong> _______________ <strong>Hora:</strong> _______________</p>
  <p><strong>Fecha del registro:</strong> _______________</p>
  <p><strong>Centro de trabajo:</strong> ______________________________________</p>
  <p><strong>Área/Zona:</strong> ______________________________________________</p>
</div>

<h3>1. TIPO DE INCIDENCIA</h3>
<p>☐ Accidente de trabajo (con baja) &nbsp; ☐ Accidente sin baja &nbsp; ☐ Cuasi accidente</p>
<p>☐ Condición insegura &nbsp; ☐ Condición insegura + práctica insegura &nbsp; ☐ Enfermedad profesional</p>

<h3>2. PERSONA AFECTADA</h3>
<p><strong>Nombre:</strong> _________________________ <strong>Nº empleado:</strong> _______________</p>
<p><strong>Puesto de trabajo:</strong> _________________________ <strong>Antigüedad:</strong> _______________</p>
<p><strong>Edad:</strong> _______ <strong>Sexo:</strong> ☐ M ☐ H</p>

<h3>3. DESCRIPCIÓN DEL HECHO</h3>
<p><strong>¿Qué ocurrió?</strong></p>
<p style="border: 1px solid var(--border); padding: 12px; min-height: 80px; border-radius: var(--radius);"></p>

<p><strong>¿Dónde ocurrió exactamente?</strong></p>
<p style="border: 1px solid var(--border); padding: 12px; min-height: 40px; border-radius: var(--radius);"></p>

<p><strong>¿Cuándo ocurrió?</strong> Día: _______ Hora: _______</p>

<h3>4. LESIONES</h3>
<p>☐ Sin lesión visible &nbsp; ☐ Lesión leve (sin baja) &nbsp; ☐ Lesión con baja</p>
<p>☐ Lesión grave (hospitalización) &nbsp; ☐ Secuelas permanentes &nbsp; ☐ Muerte</p>
<p><strong>Tipo de lesión:</strong> ______________________________________________</p>
<p><strong>Parte del cuerpo afectada:</strong> __________________________________</p>

<h3>5. CAUSAS IDENTIFICADAS</h3>
<p><strong>Causa inmediata:</strong></p>
<p>☐ Acto inseguro &nbsp; ☐ Condición insegura &nbsp; ☐ Falta de EPI &nbsp; ☐ Error humano</p>
<p>☐ Fallo de equipo &nbsp; ☐ Falta de procedimiento &nbsp; ☐ Otro: _______________</p>

<p><strong>Causa raíz:</strong></p>
<p>☐ Falta de formación &nbsp; ☐ Falta de supervisión &nbsp; ☐ Falta de recursos</p>
<p>☐ Organización deficiente &nbsp; ☐ Cultura de seguridad &nbsp; ☐ Otro: _______________</p>

<h3>6. MEDIDAS CORRECTIVAS INMEDIATAS</h3>
<p style="border: 1px solid var(--border); padding: 12px; min-height: 60px; border-radius: var(--radius);"></p>

<h3>7. MEDIDAS PREVENTIVAS A LARGO PLAZO</h3>
<p style="border: 1px solid var(--border); padding: 12px; min-height: 60px; border-radius: var(--radius);"></p>

<h3>8. SEGUIMIENTO</h3>
<table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
  <tr style="background: var(--bg-secondary);">
    <th style="border: 1px solid var(--border); padding: 8px;">Fecha</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Acción realizada</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Responsable</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Estado</th>
  </tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
</table>

<p><strong>Firma del responsable:</strong> _________________________ <strong>Fecha:</strong> _______________</p>
<p><strong>Firma del trabajador:</strong> _________________________ <strong>Fecha:</strong> _______________</p>`
  },
  planPrevencion: {
    titulo: "Plantilla: Estructura de Plan de Prevención",
    descripcion: "Modelo de estructura para un Plan de Prevención de Riesgos Laborales según RD 39/1997.",
    contenido: `<h2>PLAN DE PREVENCIÓN DE RIESGOS LABORALES</h2>
<div style="border: 1px solid var(--border); padding: 16px; border-radius: var(--radius); margin: 12px 0;">
  <p><strong>Empresa:</strong> _______________________________________________</p>
  <p><strong>CIF:</strong> _______________ <strong>Nº de trabajadores:</strong> _______________</p>
  <p><strong>Actividad principal:</strong> ____________________________________</p>
  <p><strong>Fecha de elaboración:</strong> __________________________________</p>
  <p><strong>Fecha de aprobación:</strong> __________________________________</p>
  <p><strong>Revisión:</strong> ☐ Anual ☐ Por cambios significativos</p>
</div>

<h3>CONTENIDO DEL PLAN (según Art. 16 Ley 31/1995)</h3>

<h4>1. DETERMINACIÓN DE LA POLÍTICA DE PREVENCIÓN</h4>
<p style="border: 1px solid var(--border); padding: 12px; min-height: 60px; border-radius: var(--radius);">
  Compromiso de la dirección con la prevención de riesgos laborales...
</p>

<h4>2. ORGANIZACIÓN DE LA PREVENCIÓN</h4>
<p><strong>Modelo de organización:</strong></p>
<p>☐ Servicio de prevención propio &nbsp; ☐ Servicio de prevención ajeno &nbsp; ☐ Autoprevención</p>
<p><strong>Responsable de seguridad y salud:</strong> _________________________</p>
<p><strong>Técnico de prevención:</strong> _________________________</p>
<p><strong>Delegado de prevención:</strong> _________________________</p>

<h4>3. EVALUACIÓN DE RIESGOS</h4>
<p style="border: 1px solid var(--border); padding: 12px; min-height: 60px; border-radius: var(--radius);">
  Metodología de evaluación de riesgos utilizada...
</p>

<h4>4. PLANIFICACIÓN DE LA ACTIVIDAD PREVENTIVA</h4>
<table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
  <tr style="background: var(--bg-secondary);">
    <th style="border: 1px solid var(--border); padding: 8px;">Riesgo</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Medida preventiva</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Prioridad</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Responsable</th>
    <th style="border: 1px solid var(--border); padding: 8px;">Plazo</th>
  </tr>
  <tr><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td><td style="border: 1px solid var(--border); padding: 8px;"></td></tr>
</table>

<h4>5. FORMACIÓN DE TRABAJADORES</h4>
<p style="border: 1px solid var(--border); padding: 12px; min-height: 60px; border-radius: var(--radius);">
  Programa de formación: inducción, específica, continua...
</p>

<h4>6. EMERGENCIAS</h4>
<p style="border: 1px solid var(--border); padding: 12px; min-height: 60px; border-radius: var(--radius);">
  Plan de emergencia y evacuación: dotación, alarmas, simulacros...
</p>

<h4>7. VIGILANCIA DE LA SALUD</h4>
<p style="border: 1px solid var(--border); padding: 12px; min-height: 60px; border-radius: var(--radius);">
  Programa de vigilancia de la salud: reconocimientos médicos, periodicidad...
</p>

<h4>8. DOCUMENTACIÓN</h4>
<p>☐ Evaluación de riesgos &nbsp; ☐ Plan de prevención &nbsp; ☐ Plan de emergencia</p>
<p>☐ Registro de formación &nbsp; ☐ Registro de vigilancia de la salud &nbsp; ☐ Cuaderno de obra</p>

<h4>9. AUDITORÍA</h4>
<p>☐ Auditoría interna realizada por: _______________ Fecha: _______________</p>
<p>☐ Auditoría externa realizada por: _______________ Fecha: _______________</p>

<p><strong>Firma del empresario:</strong> _________________________ <strong>Fecha:</strong> _______________</p>`
  }
};
