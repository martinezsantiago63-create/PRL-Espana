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
  { catala: "No estic d'acord", castella: "No estoy de acuerdo", pron: "no es-TIK da-KORD", categoria: "Comunicación en Obra" }
];

const CATALA_CONCEPTES = [
  {
    titulo: "Reglas de pronunciación del catalán",
    contingut: `LA "X" se pronuncia como "SH" en inglés:
- "Fixa" → "FIKS" (no "fiksa")
- "Sortida" → "sor-TI-da" (no "sor-ti-da")

LA "J" suena suave, como la "j" francesa:
- "Jornada" → "jor-NA-da"

LA "NY" se pronuncia como "Ñ" en español:
- "Any" → "ANY" (como "año")
- "Senyal" → "se-NYAL" (como "señal")

LA "L·L" (l geminada) tiene un sonido especial:
- "Celler" → "se-YER" (no "se-LLER")
- "Col·laboració" → "ko-lla-bo-ra-SIÓ"

LA "V" y la "B" suenan igual en catalán (como "b" suave):
- "Vint" → "BINT"
- "Bé" → "BE"

LA "G" antes de "e" o "i" suena como "J":
- "Gent" → "JENT"
- "Girar" → "JI-RAR"

LA "IG" al final se pronuncia como "CH":
- "Baig" → "BAICH"
- "Faig" → "FAICH"

ELS/A/LA/LES (artículos):
- "El treball" = "El trabajo"
- "La feina" = "El trabajo (femenino)"
- "Els treballadors" = "Los trabajadores"
- "Les eines" = "Las herramientas"

HOY = AVUI (no "hoy")
MAÑANA = DEMÀ
TRABAJO = TREBALL
GRACIAS = GRÀCIES
POR FAVOR = SI US PLAU
BUENOS DÍAS = BON DÍAS
ADIOS = ADÉU`
  },
  {
    titulo: "Diferències clau amb el castellà",
    contingut: `EL CATALÁN NO ES ESPAÑOL CON ACENTO. Es una lengua diferente:

VOSOTROS = VOSALTRES (pero se usa menos, más "vostè" = usted)
HOY = AVUI
MAÑANA = DEMÀ
TRABAJO = TREBALL
SEGURO = SEGURETAT
RIESGO = RISC
PELIGRO = PERILL
NECESITO = NECESSITO
GRACIAS = GRÀCIES
POR FAVOR = SI US PLAU
BUENOS DÍAS = BON DÍAS
BUENAS NOCHES = BONA NIT
HASTA LUEGO = fins ara
ADELANTO = endavant
ATRÁS = enrere`
  }
];
