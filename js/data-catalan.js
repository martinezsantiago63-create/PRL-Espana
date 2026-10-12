const CATALA_VOCABULARIO = [
  // SEGURETAT I HIGIENE
  { catala: "Seguretat i Salut Laboral", castella: "Seguridad y Salud en el Trabajo", pron: "se-gu-re-TAT i sa-LUT la-bo-RAL", categoria: "General" },
  { catala: "Prevenció de Riscos Laborals", castella: "Prevención de Riesgos Laborales", pron: "pre-ven-SIÓ de RIS-kos la-bo-RALS", categoria: "General" },
  { catala: "Risc laboral", castella: "Riesgo laboral", pron: "RISK la-bo-RAL", categoria: "General" },
  { catala: "Perill", castella: "Peligro", pron: "pe-RILY", categoria: "General" },
  { catala: "Dany", castella: "Daño", pron: "DANY (ny suena como ñ)", categoria: "General" },
  { catala: "Accident de treball", castella: "Accidente de trabajo", pron: "ak-zi-DENT de tre-BALY", categoria: "General" },
  { catala: "Malaltia professional", castella: "Enfermedad profesional", pron: "ma-LAL-ti-a pro-fe-SIO-NAL", categoria: "General" },
  { catala: "Incapacitat temporal", castella: "Incapacidad temporal", pron: "in-ka-pa-si-TAT tem-po-RAL", categoria: "General" },
  { catala: "Mort de treballador", castella: "Muerte del trabajador", pron: "MORT de tre-ba-lla-DOR", categoria: "General" },

  // EQUIPAMENT
  { catala: "Equip de Protecció Individual (EPI)", castella: "Equipo de Protección Individual (EPI)", pron: "e-KIP de pro-te-SIÓ in-di-wi-DUAL", categoria: "Equipamiento" },
  { catala: "Equip de Protecció Col·lectiva (EPC)", castella: "Equipo de Protección Colectiva (EPC)", pron: "e-KIP de pro-te-SIÓ ko-lek-TI-va", categoria: "Equipamiento" },
  { catala: "Casell de seguretat", castella: "Casco de seguridad", pron: "ka-SELY de se-gu-re-TAT", categoria: "Equipamiento" },
  { catala: "Ulleres de seguretat", castella: "Gafas de seguridad", pron: "u-YE-res de se-gu-re-TAT", categoria: "Equipamiento" },
  { catala: "Protecció auricular", castella: "Protección auricular", pron: "pro-te-SIÓ au-ri-ku-LAR", categoria: "Equipamiento" },
  { catala: "Màscara", castella: "Mascarilla", pron: "MAS-ka-ra", categoria: "Equipamiento" },
  { catala: "Guants de seguretat", castella: "Guantes de seguridad", pron: "GWANTS de se-gu-re-TAT", categoria: "Equipamiento" },
  { catala: "Calçat de seguretat", castella: "Calzado de seguridad", pron: "kal-SAT de se-gu-re-TAT", categoria: "Equipamiento" },
  { catala: "Arnes de seguretat", castella: "Arnés de seguridad", pron: "ar-NES de se-gu-re-TAT", categoria: "Equipamiento" },
  { catala: "Detector de gasos", castella: "Detector de gases", pron: "dek-TOR de GA-sos", categoria: "Equipamiento" },

  // ESPAIS CONFINATS
  { catala: "Espai confinat", castella: "Espacio confinado", pron: "es-PAI kon-fi-NAT", categoria: "Espacios Confinados", nota: "MUY importante en saneamiento" },
  { catala: "Permís de treball", castella: "Permiso de trabajo", pron: "per-MIS de tre-BALY", categoria: "Espacios Confinados" },
  { catala: "Vigilància atmosfèrica", castella: "Vigilancia atmosférica", pron: "wi-i-LAN-si-a at-mos-FE-ri-ka", categoria: "Espacios Confinados" },
  { catala: "Ventilació forçada", castella: "Ventilación forzada", pron: "ben-ti-la-SIÓ for-SA-da", categoria: "Espacios Confinados" },
  { catala: "Rescat", castella: "Rescate", pron: "res-KAT", categoria: "Espacios Confinados" },
  { catala: "Pou de bombeig", castella: "Pozo de bombeo", pron: "PU de bom-BEIG", categoria: "Espacios Confinados", nota: "Muy común en saneamiento" },
  { catala: "Dipòsit", castella: "Depósito", pron: "di-PO-sit", categoria: "Espacios Confinados" },
  { catala: "Càmera d'inspecció", castella: "Cámara de inspección", pron: "KA-me-ra din-spek-SIÓ", categoria: "Espacios Confinados" },
  { catala: "Túnel de col·lector", castella: "Túnel de colector", pron: "tu-NEL de ko-lek-TOR", categoria: "Espacios Confinados" },

  // AVALUACIÓ
  { catala: "Avaluació de riscos", castella: "Evaluación de riesgos", pron: "a-ba-la-SIÓ de RIS-kos", categoria: "Evaluación", nota: "avaluació = evaluación" },
  { catala: "Pla de prevenció", castella: "Plan de prevención", pron: "PLA de pre-ven-SIÓ", categoria: "Evaluación" },
  { catala: "Mesures preventives", castella: "Medidas preventivas", pron: "me-SU-res pre-BEN-ti-ves", categoria: "Evaluación" },
  { catala: "Mesures correctives", castella: "Medidas correctivas", pron: "me-SU-res ko-rek-TI-ves", categoria: "Evaluación" },
  { catala: "Risc greu", castella: "Riesgo grave", pron: "RISK GREU", categoria: "Evaluación" },
  { catala: "Risc molt greu", castella: "Riesgo muy grave", pron: "RISK MOLK GREU", categoria: "Evaluación" },
  { catala: "Perill imminent", castella: "Peligro inminente", pron: "pe-RILY i-mi-NENT", categoria: "Evaluación" },
  { catala: "Gravetat", castella: "Severidad", pron: "gra-ve-TAT", categoria: "Evaluación" },
  { catala: "Probabilitat", castella: "Probabilidad", pron: "pro-ba-bi-li-TAT", categoria: "Evaluación" },

  // FORMACIÓ
  { catala: "Formació en prevenció", castella: "Formación en prevención", pron: "for-ma-SIÓ en pre-ven-SIÓ", categoria: "Formación" },
  { catala: "Formació obligatòria", castella: "Formación obligatoria", pron: "for-ma-SIÓ o-bli-ga-TÓ-ri-a", categoria: "Formación" },
  { catala: "Simulacre d'evacuació", castella: "Simulacro de evacuación", pron: "si-mu-LA-kre de-e-va-ku-a-SIÓ", categoria: "Formación" },
  { catala: "Primeres auxilis", castella: "Primeros auxilios", pron: "pri-ME-res au-SI-lis", categoria: "Formación" },
  { catala: "RCP (Reanimació Cardiopulmonar)", castella: "RCP (Reanimación Cardiopulmonar)", pron: "ER-KE-PE re-a-ni-ma-SIÓ kar-dio-pul-mo-NAR", categoria: "Formación" },

  // RISCOS ESPECÍFICS
  { catala: "Risc químic", castella: "Riesgo químico", pron: "RISK KI-mik", categoria: "Riesgos" },
  { catala: "Risc biològic", castella: "Riesgo biológico", pron: "RISK bi-o-LO-jik", categoria: "Riesgos", nota: "Muy relevante en saneamiento" },
  { catala: "Risc físic", castella: "Riesgo físico", pron: "RISK FI-sik", categoria: "Riesgos" },
  { catala: "Risc ergonòmic", castella: "Riesgo ergonómico", pron: "RISK er-go-NÓ-mik", categoria: "Riesgos" },
  { catala: "Risc psicosocial", castella: "Riesgo psicosocial", pron: "RISK psi-ko-so-SIAL", categoria: "Riesgos" },
  { catala: "Soroll", castella: "Ruido", pron: "so-ROLY", categoria: "Riesgos" },
  { catala: "Vibracions", castella: "Vibraciones", pron: "bi-bra-SIONS", categoria: "Riesgos" },
  { catala: "Temperatures extremes", castella: "Temperaturas extremas", pron: "tem-pe-ra-TU-res eks-TRE-mes", categoria: "Riesgos" },
  { catala: "Pols", castella: "Polvo", pron: "POLS", categoria: "Riesgos" },
  { catala: "Gasos tòxics", castella: "Gases tóxicos", pron: "GA-sos TÓ-xiks", categoria: "Riesgos" },
  { catala: "Sulfur d'hidrogen (H₂S)", castella: "Sulfuro de hidrógeno (H₂S)", pron: "sul-FUR di-dro-GEN", categoria: "Riesgos", nota: "El gas más peligroso en saneamiento" },
  { catala: "Metà (CH₄)", castella: "Metano (CH₄)", pron: "me-TA", categoria: "Riesgos" },
  { catala: "Monòxid de carboni (CO)", castella: "Monóxido de carbono (CO)", pron: "mo-NÓ-xid de kar-BONI", categoria: "Riesgos" },

  // INSPECCIÓ I CONTROL
  { catala: "Inspecció de Treball", castella: "Inspección de Trabajo", pron: "in-spek-SIÓ de tre-BALY", categoria: "Inspección" },
  { catala: "Acta d'infracció", castella: "Acta de infracción", pron: "AK-ta din-fRAK-siÓ", categoria: "Inspección" },
  { catala: "Sanció", castella: "Sanción", pron: "san-SIÓ", categoria: "Inspección" },
  { catala: "Infracció greu", castella: "Infracción grave", pron: "in-fRAK-siÓ GREU", categoria: "Inspección" },

  // EMERGÈNCIES
  { catala: "Pla d'emergència", castella: "Plan de emergencia", pron: "PLA de-me-RJEN-si-a", categoria: "Emergencias" },
  { catala: "Evacuació", castella: "Evacuación", pron: "e-va-ku-a-SIÓ", categoria: "Emergencias" },
  { catala: "Alarma", castella: "Alarma", pron: "a-LAR-ma", categoria: "Emergencias" },
  { catala: "Extintor", castella: "Extintor", pron: "eks-TIN-tor", categoria: "Emergencias" },
  { catala: "Boca d'incendi", castella: "Boca de incendio", pron: "BO-ka din-SEN-di", categoria: "Emergencias" },
  { catala: "Punt de reunió", castella: "Punto de reunión", pron: "PUNT de re-u-NIÓ", categoria: "Emergencias" },
  { catala: "Senyal d'emergència", castella: "Señal de emergencia", pron: "se-NYAL de-me-RJEN-si-a", categoria: "Emergencias" },
  { catala: "Trucar al 112", castella: "Llamar al 112", pron: "tru-KAR al u-SENT-e", categoria: "Emergencias", nota: "Número de emergencias en toda España" },

  // DOCUMENTACIÓ
  { catala: "Fitxa de dades de seguretat (FDS)", castella: "Ficha de datos de seguridad (FDS)", pron: "FIT-xa de DA-des de se-gu-re-TAT", categoria: "Documentación", nota: "La FDS es OBLIGATORIA para cada químico" },
  { catala: "Registre d'accidents", castella: "Registro de accidentes", pron: "re-JIS-tre dak-zi-DENTS", categoria: "Documentación" },
  { catala: "Part d'accident", castella: "Parte de accidente", pron: "PART dak-zi-DENT", categoria: "Documentación" },
  { catala: "Llibre de visites", castella: "Libro de visitas", pron: "YI-bre de BI-si-tes", categoria: "Documentación" },
  { catala: "Informe d'avaluació", castella: "Informe de evaluación", pron: "in-FOR-me da-ba-la-SIÓ", categoria: "Documentación" },

  // LLOC DE TREBALL
  { catala: "Lloc de treball", castella: "Puesto de trabajo", pron: "LYOK de tre-BALY", categoria: "Puesto de trabajo" },
  { catala: "Zona de risc", castella: "Zona de riesgo", pron: "SO-na de RISK", categoria: "Puesto de trabajo" },
  { catala: "Zona restringida", castella: "Zona restringida", pron: "SO-na res-trin-GI-da", categoria: "Puesto de trabajo" },
  { catala: "Senyalització de seguretat", castella: "Señalización de seguridad", pron: "se-nyal-it-za-SIÓ de se-gu-re-TAT", categoria: "Puesto de trabajo" },
  { catala: "Senyal de perill", castella: "Señal de peligro", pron: "se-NYAL de pe-RILY", categoria: "Puesto de trabajo" },
  { catala: "Senyal d'obligació", castella: "Señal de obligación", pron: "se-NYAL do-bli-ga-SIÓ", categoria: "Puesto de trabajo" },
  { catala: "Senyal de prohibició", castella: "Señal de prohibición", pron: "se-NYAL de pro-i-bi-SIÓ", categoria: "Puesto de trabajo" },
  { catala: "Barana de seguretat", castella: "Barandilla de seguridad", pron: "ba-RA-na de se-gu-re-TAT", categoria: "Puesto de trabajo" },
  { catala: "Escala fixa", castella: "Escalera fija", pron: "es-KA-la FIKS", categoria: "Puesto de trabajo" },

  // ORGANITZACIÓ
  { catala: "Comitè de Seguretat i Salut", castella: "Comité de Seguridad y Salud", pron: "ko-MI-te de se-gu-re-TAT i sa-LUT", categoria: "Organización", nota: "Equivalente al CTS en Argentina" },
  { catala: "Delegat de prevenció", castella: "Delegado de prevención", pron: "de-le-GAT de pre-ven-SIÓ", categoria: "Organización" },
  { catala: "Servei de prevenció", castella: "Servicio de prevención", pron: "SER-vei de pre-ven-SIÓ", categoria: "Organización" },
  { catala: "Tècnic de prevenció", castella: "Técnico de prevención", pron: "TEK-nik de pre-ven-SIÓ", categoria: "Organización" },
  { catala: "Responsable de seguretat", castella: "Responsable de seguridad", pron: "res-pon-SA-ble de se-gu-re-TAT", categoria: "Organización" },
  { catala: "Vigilància de la salut", castella: "Vigilancia de la salud", pron: "wi-i-LAN-si-a de la sa-LUT", categoria: "Organización" },
  { catala: "Revisió mèdica", castella: "Revisión médica", pron: "re-bi-SIÓ ME-di-ka", categoria: "Organización" },

  // FRASES ÚTILS
  { catala: "Cal posar-se l'EPI", castella: "Hay que ponerse el EPI", pron: "KAL po-ZAR-se le-PI", categoria: "Frases", nota: "Expresión diaria" },
  { catala: "No es pot treballar sense permís", castella: "No se puede trabajar sin permiso", pron: "no es POT tre-BAL-yar SENS per-MIS", categoria: "Frases" },
  { catala: "Aturar el treball per perill greu", castella: "Detener el trabajo por peligro grave", pron: "a-tu-RAR el tre-BALY per pe-RILY GREU", categoria: "Frases", nota: "Derecho del trabajador (Art. 21 Ley 31/1995)" },
  { catala: "On és el punt de reunió?", castella: "¿Dónde es el punto de reunión?", pron: "ON es el PUNT de re-u-NIÓ?", categoria: "Frases" },
  { catala: "Hi ha gasos en aquest espai?", castella: "¿Hay gases en este espacio?", pron: "I a GA-sos en a-KWEST es-PAI?", categoria: "Frases" },
  { catala: "Necessito un detector de gasos", castella: "Necesito un detector de gases", pron: "ne-SSI-to un dek-TOR de GA-sos", categoria: "Frases" },
  { catala: "Aquest espai és confinat?", castella: "¿Este espacio es confinado?", pron: "a-KWEST es-PAI es kon-fi-NAT?", categoria: "Frases" },
  { catala: "Quin és el límit de exposició?", castella: "¿Cuál es el límite de exposición?", pron: "KIN es el LI-mit de eks-po-si-SIÓ?", categoria: "Frases" },
  { catala: "Cal ventilar l'espai", castella: "Hay que ventilar el espacio", pron: "KAL ben-ti-LAR les-PAI", categoria: "Frases" },
  { catala: "On és la sortida d'emergència?", castella: "¿Dónde está la salida de emergencia?", pron: "ON es la sor-TI-da de-me-RJEN-si-a?", categoria: "Frases" },
  { catala: "Truqueu al 112!", castella: "¡Llamad al 112!", pron: "tru-KEU al u-SENT-e!", categoria: "Frases" },
  { catala: "Tinc una fuita de gas", castella: "Tengo una fuga de gas", pron: "TINK u-na FUI-ta de GAS", categoria: "Frases" },
  { catala: "Necessito l'FDS d'aquest producte", castella: "Necesito la FDS de este producto", pron: "ne-SSI-to lef-DE-ES da-KWEST pro-DUK-te", categoria: "Frases" },
  { catala: "El treball està aturat fins a nou avís", castella: "El trabajo está detenido hasta nuevo aviso", pron: "el tre-BALY es-TA a-tu-RAT FINS a no-u a-VIS", categoria: "Frases" },

  // NÚMERS
  { catala: "Zero", castella: "Cero", pron: "SE-ro", categoria: "Números" },
  { catala: "Un / Una", castella: "Uno / Una", pron: "UN / U-na", categoria: "Números" },
  { catala: "Dos / Dues", castella: "Dos", pron: "DOS / DUES", categoria: "Números" },
  { catala: "Tres", castella: "Tres", pron: "TRES", categoria: "Números" },
  { catala: "Quatre", castella: "Cuatro", pron: "KA-tre", categoria: "Números" },
  { catala: "Cinc", castella: "Cinco", pron: "SINK", categoria: "Números" },
  { catala: "Sis", castella: "Seis", pron: "SIS", categoria: "Números" },
  { catala: "Set", castella: "Siete", pron: "SET", categoria: "Números" },
  { catala: "Vuit", castella: "Ocho", pron: "BUIT", categoria: "Números" },
  { catala: "Nou", castella: "Nueve", pron: "NOU", categoria: "Números" },
  { catala: "Deu", castella: "Diez", pron: "DEU", categoria: "Números" },

  // SENYALS
  { catala: "Perill! No pasar!", castella: "¡Peligro! ¡No pasar!", pron: "pe-RILY! no pa-SAR!", categoria: "Señales", nota: "Señal de prohibición" },
  { catala: "Ordre: Posar-se l'EPI", castella: "Orden: Ponerse el EPI", pron: "OR-dre po-ZAR-se le-PI", categoria: "Señales", nota: "Señal de obligación" },
  { catala: "Perill: Productes químics", castella: "Peligro: Productos químicos", pron: "pe-RILY pro-DUK-tes KI-miks", categoria: "Señales" },
  { catala: "Sortida d'emergència", castella: "Salida de emergencia", pron: "sor-TI-da de-me-RJEN-si-a", categoria: "Señales" },
  { catala: "Extintor", castella: "Extintor", pron: "eks-TIN-tor", categoria: "Señales" },
  { catala: "Primer auxili", castella: "Primer auxilio", pron: "pri-MER au-SI-li", categoria: "Señales" },

  // OBRA I SANEAMENT
  { catala: "Obra", castella: "Obra", pron: "OB-ra", categoria: "Obra y Saneamiento" },
  { catala: "Obra civil", castella: "Obra civil", pron: "OB-ra si-VIL", categoria: "Obra y Saneamiento" },
  { catala: "Xarxa de sanejament", castella: "Red de saneamiento", pron: "SHAR-ka de sa-ne-DAMENT", categoria: "Obra y Saneamiento", nota: "Muy usado en Cataluña" },
  { catala: "Col·lector", castella: "Colector", pron: "ko-lek-TOR", categoria: "Obra y Saneamiento" },
  { catala: "Pou de visita", castella: "Pozo de visita", pron: "PU de BI-si-ta", categoria: "Obra y Saneamiento", nota: "El más común en saneamiento" },
  { catala: "Tapa de pou", castella: "Tapa de pozo", pron: "TA-pa de PU", categoria: "Obra y Saneamiento" },
  { catala: "Tub d'aigües residuals", castella: "Tubería de aguas residuales", pron: "TUB dai-GU-es re-ZI-dwals", categoria: "Obra y Saneamiento" },
  { catala: "Tub de clavegueram", castella: "Tubería de alcantarillado", pron: "TUB de kla-we-GUE-ram", categoria: "Obra y Saneamiento" },
  { catala: "Estació de bombament", castella: "Estación de bombeo", pron: "es-ta-SIÓ de bom-BAMENT", categoria: "Obra y Saneamiento" },
  { catala: "Fossa sèptica", castella: "Fosa séptica", pron: "FO-sa SEP-ti-ka", categoria: "Obra y Saneamiento", nota: "¡Cuidado! Espacio confinado mortal" },
  { catala: "Fossa negra", castella: "Fosa negra (pozo séptico)", pron: "FO-sa NE-gra", categoria: "Obra y Saneamiento" },
  { catala: "Desguàs", castella: "Desagüe", pron: "des-GUAS", categoria: "Obra y Saneamiento" },
  { catala: "Aigua residual", castella: "Agua residual", pron: "ai-GUA re-zi-DWAL", categoria: "Obra y Saneamiento" },
  { catala: "Aigua pluvial", castella: "Agua pluvial", pron: "ai-GUA plu-BIAL", categoria: "Obra y Saneamiento" },
  { catala: "Llot", castella: "Lodo", pron: "LYOT", categoria: "Obra y Saneamiento" },
  { catala: "Tractament d'aigües", castella: "Tratamiento de aguas", pron: "trak-TA-MENT dai-GU-es", categoria: "Obra y Saneamiento" },

  // COMUNICACIÓ A L'OBRA
  { catala: "Bon dia, company!", castella: "¡Buenos días, compañero!", pron: "BON dia, kom-pa-NYI!", categoria: "Comunicación en Obra" },
  { catala: "Que tal?", castella: "¿Qué tal?", pron: "KE tal?", categoria: "Comunicación en Obra" },
  { catala: "Com es diu això?", castella: "¿Cómo se dice esto?", pron: "KOM es DIU a-SHÓ?", categoria: "Comunicación en Obra" },
  { catala: "No ho entenc", castella: "No lo entiendo", pron: "no u e-NENG", categoria: "Comunicación en Obra" },
  { catala: "M'ho pot explicar?", castella: "¿Me lo puede explicar?", pron: "MO pot eks-pli-KAR?", categoria: "Comunicación en Obra" },
  { catala: "On és el cap d'obra?", castella: "¿Dónde está el jefe de obra?", pron: "ON es el KAP DOB-ra?", categoria: "Comunicación en Obra" },
  { catala: "Necessito ajuda", castella: "Necesito ayuda", pron: "ne-SSI-to a-DJU-da", categoria: "Comunicación en Obra" },
  { catala: "Soc tècnic de sanejament", castella: "Soy técnico de saneamiento", pron: "SOK TEK-nik de sa-ne-DAMENT", categoria: "Comunicación en Obra" },
  { catala: "Treballo en prevenció de riscos", castella: "Trabajo en prevención de riesgos", pron: "tre-BAL-yo en pre-ven-SIÓ de RIS-kos", categoria: "Comunicación en Obra" },
  { catala: "Cal revisar l'equipament", castella: "Hay que revisar el equipamiento", pron: "KAL re-bi-SAR le-ki-pa-MENT", categoria: "Comunicación en Obra" },
  { catala: "Això és perillós!", castella: "¡Esto es peligroso!", pron: "a-SHÓ es pe-ri-LIÓS!", categoria: "Comunicación en Obra" },
  { catala: "Espereu un moment, si us plau", castella: "Espere un momento, por favor", pron: "es-PE-reu un mo-MENT, si us PLOU", categoria: "Comunicación en Obra" },
  { catala: "Ja ho faig", castella: "Ya lo hago", pron: "YA u FAIG", categoria: "Comunicación en Obra" },
  { catala: "Estic d'acord", castella: "Estoy de acuerdo", pron: "es-TIK da-KORD", categoria: "Comunicación en Obra" },
  { catala: "No estic d'acord", castella: "No estoy de acuerdo", pron: "no es-TIK da-KORD", categoria: "Comunicación en Obra" },

  // RESIDUS I CAMIONS (VIC / OSONA)
  { catala: "Camió compactador de residus", castella: "Camión compactador de residuos", pron: "ka-MIÓ kom-pak-ta-DOR de re-ZI-dus", categoria: "Residus i Camions (Vic/Osona)", nota: "Término oficial en contratas de Vic" },
  { catala: "Camió de la brossa", castella: "Camión de la basura (coloquial)", pron: "ka-MIÓ de la BROS-sa", categoria: "Residus i Camions (Vic/Osona)" },
  { catala: "Recollida porta a porta (PaP)", castella: "Recogida puerta a puerta", pron: "re-ko-LYI-da POR-ta a POR-ta", categoria: "Residus i Camions (Vic/Osona)", nota: "Modelo predominante en la comarca de Osona" },
  { catala: "Cubell xipat d'orgànica", castella: "Cubo con chip de orgánica", pron: "ku-BELY shi-PAT dor-GA-ni-ka", categoria: "Residus i Camions (Vic/Osona)" },
  { catala: "Tremuja de càrrega i pala", castella: "Tolva de carga y pala prensadora", pron: "tre-MU-ja de KAR-re-ga i PA-la", categoria: "Residus i Camions (Vic/Osona)", nota: "Punto crítico de atrapamiento" },
  { catala: "Polsador de parada d'emergència (bolet)", castella: "Pulsador de parada de emergencia (seta)", pron: "pol-sa-DOR de pa-RA-da de-mer-JEN-si-a (bo-LET)", categoria: "Residus i Camions (Vic/Osona)" },
  { catala: "Estrep posterior amb sensor", castella: "Estribo trasero con sensor de presencia", pron: "es-TREP pos-te-RIOR am sen-SOR", categoria: "Residus i Camions (Vic/Osona)", nota: "Corta velocidad a >30 km/h según UNE-EN 1501" },
  { catala: "Maniobra de marxa enrere", castella: "Maniobra de marcha atrás", pron: "ma-ni-OB-ra de MAR-sha en-RE-re", categoria: "Residus i Camions (Vic/Osona)", nota: "Causa principal de atropello grave" },
  { catala: "Avisador acústic i càmera de visió", castella: "Avisador acústico y cámara de visión", pron: "a-vi-za-DOR a-KUS-tik i KA-me-ra de vi-ZIÓ", categoria: "Residus i Camions (Vic/Osona)" },
  { catala: "Fracció orgànica (FORM)", castella: "Fracción orgánica (restos de comida)", pron: "frak-SIÓ or-GA-ni-ka", categoria: "Residus i Camions (Vic/Osona)" },
  { catala: "Fracció rebuig / resta", castella: "Fracción resto (no reciclable)", pron: "frak-SIÓ re-BUIG / RES-ta", categoria: "Residus i Camions (Vic/Osona)" },
  { catala: "Envasos lleugers", castella: "Envases ligeros (plásticos, latas)", pron: "en-VA-zos lyeu-JERS", categoria: "Residus i Camions (Vic/Osona)" },
  { catala: "Paper i cartró", castella: "Papel y cartón", pron: "pa-PER i kar-TRO", categoria: "Residus i Camions (Vic/Osona)" },
  { catala: "Vidre", castella: "Vidrio", pron: "BI-dre", categoria: "Residus i Camions (Vic/Osona)" },
  { catala: "Deixalleria municipal de Vic", castella: "Punto limpio municipal de Vic", pron: "de-sha-lye-RI-a mu-ni-si-PAL de BIK", categoria: "Residus i Camions (Vic/Osona)", nota: "Centro de reciclaje y residuos especiales" },
  { catala: "Deixalleria mòbil", castella: "Punto limpio móvil", pron: "de-sha-lye-RI-a MO-bil", categoria: "Residus i Camions (Vic/Osona)" },
  { catala: "Brossaire / Peó de recollida", castella: "Basurero / Peón de recogida", pron: "bros-SAI-re / pe-Ó de re-ko-LYI-da", categoria: "Residus i Camions (Vic/Osona)" },
  { catala: "Xofer / Conductor del camió", castella: "Chófer / Conductor del camión", pron: "sho-FER / kon-duk-TOR del ka-MIÓ", categoria: "Residus i Camions (Vic/Osona)" },
  { catala: "Granota d'alta visibilitat Classe 3", castella: "Mono/mameluco de alta visibilidad Clase 3", pron: "gra-NO-ta dal-ta vi-zi-bi-li-TAT KLAS-se 3", categoria: "Residus i Camions (Vic/Osona)" },
  { catala: "Guants contra punxades i talls", castella: "Guantes contra pinchazos y cortes (EN 388)", pron: "GWANTS KON-tra pun-SHA-des i TALYS", categoria: "Residus i Camions (Vic/Osona)", nota: "Vital contra jeringuillas en bolsas" },
  { catala: "Contenidor soterrat", castella: "Contenedor soterrado", pron: "kon-te-ni-DOR so-ter-RAT", categoria: "Residus i Camions (Vic/Osona)" },
  { catala: "Contenidor de càrrega bilateral", castella: "Contenedor de carga bilateral", pron: "kon-te-ni-DOR de KAR-re-ga bi-la-te-RAL", categoria: "Residus i Camions (Vic/Osona)" },

  // SANEJAMENT I EDAR (OSONA)
  { catala: "Estació Depuradora d'Aigües Residuals (EDAR)", castella: "Estación Depuradora de Aguas Residuales (EDAR)", pron: "es-ta-SIÓ de-pu-ra-DO-ra dai-GU-es re-zi-DWALS", categoria: "Sanejament i EDAR", nota: "EDAR de Vic y depuradoras comarcales" },
  { catala: "Reixa de desbast mecànic", castella: "Reja de desbaste mecánico", pron: "REI-sha de dez-BAST me-KA-nik", categoria: "Sanejament i EDAR" },
  { catala: "Tamís rotatiu", castella: "Tamiz rotativo", pron: "ta-MIS ro-ta-TIU", categoria: "Sanejament i EDAR" },
  { catala: "Decantador primari i secundari", castella: "Decantador primario y secundario", pron: "de-kan-ta-DOR pri-MA-ri i se-kun-DA-ri", categoria: "Sanejament i EDAR" },
  { catala: "Reactor biològic de fangs activats", castella: "Reactor biológico de lodos activados", pron: "re-ak-TOR bi-o-LO-jik de FANGS ak-ti-VATS", categoria: "Sanejament i EDAR" },
  { catala: "Digestor anaerobi de fangs", castella: "Digestor anaerobio de lodos", pron: "di-zhes-TOR a-na-e-RO-bi de FANGS", categoria: "Sanejament i EDAR", nota: "Zona con alto riesgo de explosión ATEX (metano)" },
  { catala: "Centrífuga de deshidratació de fangs", castella: "Centrífuga de deshidratación de lodos", pron: "sen-TRI-fu-ga de dez-i-dra-ta-SIÓ de FANGS", categoria: "Sanejament i EDAR" },
  { catala: "Pou de bombeig d'aigües fecals", castella: "Pozo de bombeo de aguas fecales", pron: "PU de bom-BEIG dai-GU-es fe-KALS", categoria: "Sanejament i EDAR", nota: "Espacio confinado con riesgo de H₂S" },
  { catala: "Clavegueram municipal", castella: "Alcantarillado municipal", pron: "kla-ve-gue-RAM mu-ni-si-PAL", categoria: "Sanejament i EDAR" },
  { catala: "Sulfur d'hidrogen / Àcid sulfhídric (H₂S)", castella: "Sulfuro de hidrógeno / Ácido sulfhídrico", pron: "sul-FUR di-dro-JEN / A-sid sulf-HI-drik", categoria: "Sanejament i EDAR", nota: "Olor a huevos podridos; bloquea el olfato a >50 ppm" },
  { catala: "Atmosfera pobra d'oxigen (< 19,5%)", castella: "Atmósfera deficiente de oxígeno (< 19,5%)", pron: "at-mos-FE-ra PO-bra dok-SI-zhen", categoria: "Sanejament i EDAR" },
  { catala: "Botes d'aigua de seguretat S5", castella: "Botas de agua de seguridad S5", pron: "BO-tes dai-GUA de se-gu-re-TAT ES-SINK", categoria: "Sanejament i EDAR", nota: "Impermeables con puntera y plantilla antiperforación" },
  { catala: "Guants de nitril amb certificació vírica", castella: "Guantes de nitrilo contra virus (EN 374-5)", pron: "GWANTS de ni-TRIL am ser-ti-fi-ka-SIÓ VI-ri-ka", categoria: "Sanejament i EDAR" },
  { catala: "Bacteri de la Leptospira (orina de rata)", castella: "Bacteria de Leptospira (orina de rata)", pron: "bak-TE-ri de la lep-toz-PI-ra", categoria: "Sanejament i EDAR" },
  { catala: "Virus de l'Hepatitis A", castella: "Virus de la Hepatitis A", pron: "VI-rus de lep-a-TI-tis A", categoria: "Sanejament i EDAR" },
  { catala: "Equip de respiració autònom (ERA)", castella: "Equipo de respiración autónomo (ERA)", pron: "e-KIP de res-pi-ra-SIÓ au-TO-nom", categoria: "Sanejament i EDAR" },
  { catala: "Trípode de rescat amb tornalet", castella: "Trípode de rescate con torno", pron: "TRI-po-de de res-KAT am tor-na-LET", categoria: "Sanejament i EDAR" },

  // INDÚSTRIA CÀRNIA I AGROALIMENTÀRIA (VIC / OSONA)
  { catala: "Escorxador industrial", castella: "Matadero industrial", pron: "es-kor-sha-DOR in-dus-tri-AL", categoria: "Indústria Càrnia (Osona)", nota: "Sector industrial número 1 en la comarca de Osona" },
  { catala: "Sala de desfer / Sala de despecejament", castella: "Sala de despiece", pron: "SA-la de dez-FER / dez-pe-se-zha-MENT", categoria: "Indústria Càrnia (Osona)" },
  { catala: "Fàbrica d'embotits", castella: "Fábrica de embutidos", pron: "FA-bri-ka dem-bo-TITS", categoria: "Indústria Càrnia (Osona)", nota: "Típica industria tradicional de Vic" },
  { catala: "Terra relliscós / Paviment antilliscant", castella: "Suelo resbaladizo / Pavimento antideslizante", pron: "TER-ra re-lyi-SKOS / pa-vi-MENT an-ti-lyis-KANT", categoria: "Indústria Càrnia (Osona)" },
  { catala: "Ganivet de degollament", castella: "Cuchillo de degüello", pron: "ga-ni-VET de de-go-lya-MENT", categoria: "Indústria Càrnia (Osona)" },
  { catala: "Guant de malla metàl·lica", castella: "Guante de malla metálica (cota de malla)", pron: "GWANT de MA-lya me-TA-li-ka", categoria: "Indústria Càrnia (Osona)" },
  { catala: "Davantal de protecció de cuir o cota", castella: "Delantal de protección de cuero o cota", pron: "da-van-TAL de pro-tek-SIÓ de KUIR", categoria: "Indústria Càrnia (Osona)" },
  { catala: "Cambra frigorífica (ambient fred)", castella: "Cámara frigorífica (ambiente frío)", pron: "KAM-bra fri-go-RI-fi-ka", categoria: "Indústria Càrnia (Osona)" },
  { catala: "Neteja i desinfecció amb aigua a pressió", castella: "Limpieza y desinfección con hidrolimpiadora", pron: "ne-TE-zha i dez-in-fek-SIÓ am ai-GUA a pre-SIÓ", categoria: "Indústria Càrnia (Osona)" },
  { catala: "Bassa de purins (gasos amoníac i metà)", castella: "Balsa de purines (gases amoníaco y metano)", pron: "BAS-sa de pu-RINS", categoria: "Indústria Càrnia (Osona)" },

  // GESTIÓ TÈCNICA I ICSSL
  { catala: "Institut Català de Seguretat i Salut Laboral (ICSSL)", castella: "Instituto Catalán de Seguridad y Salud Laboral", pron: "in-sti-TUT ka-ta-LA de se-gu-re-TAT i sa-LUT la-bo-RAL", categoria: "Gestió i ICSSL", nota: "Organismo técnico oficial de la Generalitat" },
  { catala: "Consell Comarcal d'Osona", castella: "Consejo Comarcal de Osona", pron: "kon-SELY ko-mar-KAL do-ZO-na", categoria: "Gestió i ICSSL", nota: "Entidad supramunicipal en Vic" },
  { catala: "Mancomunitat La Plana", castella: "Mancomunidad La Plana", pron: "man-ko-mu-ni-TAT la PLA-na", categoria: "Gestió i ICSSL", nota: "Gestora pública de residuos y servicios comarcales" },
  { catala: "Ajuntament de Vic", castella: "Ayuntamiento de Vic", pron: "a-zhun-ta-MENT de BIK", categoria: "Gestió i ICSSL" },
  { catala: "Plec de prescripcions tècniques (PPT)", castella: "Pliego de prescripciones técnicas", pron: "PLEK de prez-krip-si-ONS TEK-ni-kes", categoria: "Gestió i ICSSL", nota: "Documento que fija los requisitos de seguridad en contratas" },
  { catala: "Plec de clàusules administratives (PCAP)", castella: "Pliego de cláusulas administrativas", pron: "PLEK de KLAW-zu-les ad-mi-nis-tra-TI-ves", categoria: "Gestió i ICSSL" },
  { catala: "Coordinació d'Activitats Empresarials (CAE)", castella: "Coordinación de Actividades Empresariales (CAE)", pron: "ko-or-di-na-SIÓ dak-ti-vi-TATS em-pre-za-ri-ALS", categoria: "Gestió i ICSSL" },
  { catala: "Xerrada de seguretat de 5 minuts", castella: "Charla de seguridad de 5 minutos (Toolbox talk)", pron: "sher-RA-da de se-gu-re-TAT de sink mi-NUTS", categoria: "Gestió i ICSSL" },
  { catala: "Full d'autorització de treball (FAT)", castella: "Hoja de permiso de trabajo especial", pron: "FULY daw-to-rit-za-SIÓ de tre-BALY", categoria: "Gestió i ICSSL" },
  { catala: "Comitè de Seguretat i Salut (CSS)", castella: "Comité de Seguridad y Salud", pron: "ko-mi-TE de se-gu-re-TAT i sa-LUT", categoria: "Gestió i ICSSL" },
  { catala: "Delegat o Delegada de Prevenció", castella: "Delegado o Delegada de Prevención", pron: "de-le-GAT o de-le-GA-da de pre-ven-SIÓ", categoria: "Gestió i ICSSL" },

  // FRASES PER A LA XERRADA DE SEGURETAT (5 MINUTS)
  { catala: "Bon dia a tothom! Avui farem la xerrada de seguretat abans de sortir.", castella: "¡Buenos días a todos! Hoy haremos la charla de seguridad antes de salir.", pron: "BON DIA a to-TOM! a-VUI fa-REM la sher-RA-da de se-gu-re-TAT a-BANS de sor-TIR.", categoria: "Frases de Seguretat" },
  { catala: "Reviseu que tothom porti la granota d'alta visibilitat de classe 3.", castella: "Revisad que todos lleven el mono de alta visibilidad clase 3.", pron: "re-vi-ZEU ke to-TOM POR-ti la gra-NO-ta dal-ta vi-zi-bi-li-TAT de KLAS-se 3.", categoria: "Frases de Seguretat" },
  { catala: "Està totalment prohibit viatjar a l'estrep a més de 30 km/h o fent marxa enrere.", castella: "Está totalmente prohibido viajar en el estribo a más de 30 km/h o marcha atrás.", pron: "es-TA to-tal-MENT pro-i-BIT vi-ad-ZHAR a les-TREP a MES de 30 per HO-ra o FENT MAR-sha en-RE-re.", categoria: "Frases de Seguretat" },
  { catala: "Si heu de baixar a un pou, primer mesurem gasos amb el detector portàtil.", castella: "Si tenéis que bajar a un pozo, primero medimos gases con el detector portátil.", pron: "SI EU de bai-SHAR a un PU, pri-MER me-zu-REM GA-zos am el dek-TOR por-TA-til.", categoria: "Frases de Seguretat" },
  { catala: "No fiqueu mai les mans a la tremuja amb la premsa compactadora en marxa.", castella: "No metáis nunca las manos en la tolva con la prensa compactadora en marcha.", pron: "NO fi-KEU MAI les MANS a la tre-MU-zha am la PREM-sa kom-pak-ta-DO-ra en MAR-sha.", categoria: "Frases de Seguretat" },
  { catala: "Qualsevol anomalia mecànica al camió, s'ha d'avisar immediatament al cap d'equip.", castella: "Cualquier anomalía mecánica en el camión se debe avisar inmediatamente al jefe de equipo.", pron: "kwal-se-VOL a-no-ma-LI-a me-KA-ni-ka al ka-MIÓ sa da-vi-ZAR im-me-di-a-ta-MENT al KAP de-KIP.", categoria: "Frases de Seguretat" },
  { catala: "Recordeu que teniu dret a aturar la feina si detecteu un risc greu i imminent.", castella: "Recordad que tenéis derecho a parar el trabajo si detectáis un riesgo grave e inminente.", pron: "re-kor-DEU ke te-NIU DRET a a-tu-RAR la FEI-na si de-tek-TEU un RISK GREU i im-mi-NENT.", categoria: "Frases de Seguretat" }
];

const CATALA_CONCEPTES = [
  {
    titulo: "📍 El Context Laboral de Vic i la Comarca d'Osona (Residus, Sanejament i Català)",
    contingut: `VIC (Capital d'Osona, Catalunya Central) és una de les ciutats amb més forta personalitat catalana i amb un teixit industrial i de serveis públics extraordinari:

1. LA REALITAT LINGÜÍSTICA A VIC:
A Vic i tota la comarca d'Osona, el català és la llengua d'ús habitual al carrer, a les empreses municipals, a les reunions de comitès de seguretat i a les concessions públiques. 
No necessites un català perfecte per començar, però DEMOSTRAR INTERÈS I CONÈIXER EL VOCABULARI TÈCNIC de seguretat et guanya el respecte immediat dels treballadors, dels encarregats i de l'administració.

2. EL MODEL DE RESIDUS A OSONA (PIONER A CATALUNYA):
Osona és coneguda a tota Europa pel seu sistema de "Recollida Porta a Porta" (PaP) gestionat per la Mancomunitat La Plana i el Consell Comarcal d'Osona.
- Els operaris no recullen només contenidors grossos al carrer; recullen cubells xipats habitatge per habitatge.
- Això requereix camions bi-compartimentats, xofers i peons amb molt contacte amb la ciutadania i procediments de seguretat molt estrictes contra sobreesforços ergonòmics i atropellaments en carrers estrets del casc antic de Vic.

3. LA POTÈNCIA INDUSTRIAL CÀRNIA I SANEJAMENT:
A Vic i voltants (Gurb, Les Masies de Voltregà, Manlleu) hi ha la major concentració d'escorxadors i indústria agroalimentària de Catalunya (porcí, embotits tradicionals, Casa Tarradellas, etc.):
- Totes aquestes indústries disposen de macro-depuradores pròpies (EDAR industrial) que tracten milers de metres cúbics d'aigües amb alt contingut orgànic i greixos.
- La demanda de Tècnics de PRL i Sanejament que sàpiguen gestionar espais confinats, risc biològic, gasos H₂S i maquinària de tall és CONSTANT i molt ben pagada.

4. COM APRENDRE CATALÀ DE FRANC (GRATIS):
El Consorci per a la Normalització Lingüística (CPNL) té oficina pròpia a Vic (Carrer de la Ciutat de Vic). 
Ofereix cursos gratuïts des del nivell Inicial i Bàsic 1 fins al C1. A més, a la plataforma 'Parla.cat' pots anar practicant des d'Argentina des d'ara mateix.`
  },
  {
    titulo: "Regles de pronunciació del català aplicades a la prevenció",
    contingut: `LA "X" es pronuncia com "SH" en anglès o "CH" suau:
- "Xerrada" → "SHER-ra-da" (charla de seguridad)
- "Xarxa" → "SHAR-sha" (red de saneamiento)
- "Fixa" → "FIKS"

LA "J" i la "G" (davant e/i) sonen com la "j" francesa o la "ll" argentina forta:
- "Jornada" → "zhor-NA-da"
- "Digestor" → "di-zhes-TOR"

LA "NY" és exactament la "Ñ" castellana:
- "Dany laboral" → "DA-ñy" (daño)
- "Senyalització" → "se-ñya-lit-za-SIÓ"

LA "L·L" (ela geminada) es pronuncia allargant la l:
- "Metàl·lica" → "me-TAL-li-ka"
- "Col·lector" → "kol-lek-TOR"

LA "TG" i "TJ" sonen com "DJ":
- "Neteja" → "ne-TE-zha" (limpieza)
- "Bombeig" → "bom-BECH" (bombeo)`
  },
  {
    titulo: "Diferències clau de termes laborals i salarials",
    contingut: `En el conveni i en el contracte de treball a Catalunya veuràs aquests termes:

FEINA = Trabajo / Tarea
SOU = Sueldo / Salario
NÒMINA = Recibo de sueldo
PLUS DE PENOSITAT I TOXICITAT = Plus de penosidad y toxicidad (20-25%)
PLUS DE NOCTURNITAT = Plus por trabajar de noche
HORA EXTRAORDINÀRIA = Hora extra
DESCANS SETMANAL = Descanso semanal
BAIXA MÈDICA = Baja por incapacidad temporal (accidente o enfermedad)
ALTA MÈDICA = Reincorporación tras la baja
ACOMIADAMENT = Despido
FINIQUET = Liquidación final de haberes`
  }
];

