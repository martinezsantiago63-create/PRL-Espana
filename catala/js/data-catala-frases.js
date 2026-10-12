const DATA_CATALA_FRASES = [
  {
    categoria: "🌟 Frases Base i Vida Diària",
    icono: "☀️",
    frases: [
      {
        id: "fb-1",
        catala: "L'home menja pomes",
        castella: "El hombre come manzanas",
        situacion: "Vida Cotidiana",
        pron: "L'O-me MEN-zha PO-mes",
        desglossament: [
          { cat: "L'home", es: "El hombre", gram: "Artículo 'el' apostrofado ante hache + sustantivo 'home'", fon: "La hache es muda. La 'o' es abierta." },
          { cat: "menja", es: "come", gram: "Verbo 'menjar' (comer), 3ª pers. presente", fon: "La 'j' suena suave (como la 'j' francesa o 'll' porteña)." },
          { cat: "pomes", es: "manzanas", gram: "Sustantivo femenino plural (singular: poma)", fon: "La 'e' final átona suena a vocal neutra." }
        ],
        consellFonetica: "En Vic (Cataluña Central), la terminación '-es' no suena como 'es' pura en español, sino con una vocal neutra suave entre 'a' y 'e'."
      },
      {
        id: "fb-2",
        catala: "La dona beu aigua fresca",
        castella: "La mujer bebe agua fresca",
        situacion: "Vida Cotidiana",
        pron: "La DO-na BEU AI-gwa FRES-ka",
        desglossament: [
          { cat: "La dona", es: "La mujer", gram: "Artículo femenino 'la' + 'dona' (mujer)", fon: "Dona significa mujer; 'senyora' es señora." },
          { cat: "beu", es: "bebe", gram: "Verbo 'beure' (beber), 3ª pers. presente", fon: "El diptongo 'eu' se pronuncia junto y rápido." },
          { cat: "aigua", es: "agua", gram: "Sustantivo femenino", fon: "Se pronuncia 'ai-gwa'." },
          { cat: "fresca", es: "fresca / fría", gram: "Adjetivo femenino", fon: "Concuerda con aigua." }
        ],
        consellFonetica: "'Aigua fresca' es agua fría natural."
      },
      {
        id: "fb-3",
        catala: "Bon dia! Com va tot?",
        castella: "¡Buenos días! ¿Cómo va todo?",
        situacion: "Saludo habitual",
        pron: "BON DI-a! KOM BA TOT?",
        desglossament: [
          { cat: "Bon dia", es: "Buenos días", gram: "Fórmula de saludo matutino (se usa hasta el almuerzo)", fon: "La 'n' final se une suavemente a 'dia'." },
          { cat: "Com va", es: "¿Cómo va?", gram: "Adverbio interrogativo 'com' + verbo 'anar' (ir)", fon: "La 'v' suena como 'b' suave." },
          { cat: "tot", es: "todo", gram: "Pronombre indefinido", fon: "La 't' final suena clara." }
        ],
        consellFonetica: "En Cataluña es el saludo más común y amigable al entrar a un negocio o cruzarte con alguien."
      },
      {
        id: "fb-4",
        catala: "Em dic Martín i vinc de l'Argentina",
        castella: "Me llamo Martín y vengo de Argentina",
        situacion: "Presentación personal",
        pron: "EM DIK Mar-TIN i BINK de lar-zhen-TI-na",
        desglossament: [
          { cat: "Em dic", es: "Me llamo", gram: "Pronombre 'em' (me) + verbo 'dir-se' (llamarse)", fon: "Dic se pronuncia 'dik'." },
          { cat: "i", es: "y", gram: "Conjunción copulativa (idéntica al castellano)", fon: "Suena 'i'." },
          { cat: "vinc", es: "vengo", gram: "1ª persona presente del verbo 'venir'", fon: "Termina en 'nk'." },
          { cat: "de l'Argentina", es: "de Argentina", gram: "Preposición 'de' apostrofada ante vocal + país", fon: "Se une: de-lar-zhen-ti-na." }
        ],
        consellFonetica: "Para presentarte siempre usás 'Em dic...' (literalmente: me digo)."
      },
      {
        id: "fb-5",
        catala: "Avui fa molt de fred a la plaça",
        castella: "Hoy hace mucho frío en la plaza",
        situacion: "El clima y la ciudad",
        pron: "a-VUI FA MOLT de FRET a la PLA-sa",
        desglossament: [
          { cat: "Avui", es: "Hoy", gram: "Adverbio de tiempo fundamental", fon: "Se pronuncia 'a-vui'." },
          { cat: "fa", es: "hace", gram: "Verbo 'fer' (hacer)", fon: "Corto y claro." },
          { cat: "molt de fred", es: "mucho frío", gram: "Estructura partitiva catalana: molt + de + sustantivo", fon: "La 'd' final de fred suena casi como 't'." },
          { cat: "a la plaça", es: "en la plaza", gram: "Preposición 'a' (en) + plaça (plaza con ce trencada ç)", fon: "La 'ç' suena como 's'." }
        ],
        consellFonetica: "Vic es famosa por su niebla (*la boira de Vic*) y el frío en invierno."
      }
    ]
  },

  {
    categoria: "🛒 Al Mercat i al Supermercat",
    icono: "🥖",
    frases: [
      {
        id: "sm-1",
        catala: "Quant val un quilo de pomes i una barra de pa?",
        castella: "¿Cuánto cuesta un kilo de manzanas y una barra de pan?",
        situacion: "Hacer compras",
        pron: "KWANT BAL UN KI-lo de PO-mes i U-na BAR-ra de PA?",
        desglossament: [
          { cat: "Quant val", es: "¿Cuánto cuesta / vale?", gram: "Adverbio interrogativo + verbo 'valer'", fon: "Val suena 'bal'." },
          { cat: "un quilo de", es: "un kilo de", gram: "Medida", fon: "Igual que en castellano." },
          { cat: "pomes", es: "manzanas", gram: "Femenino plural", fon: "Vocal neutra final." },
          { cat: "i una barra de pa", es: "y una barra de pan", gram: "Pan en catalán es 'pa' (sin la n)", fon: "'Pa' suena corto." }
        ],
        consellFonetica: "Para preguntar precios siempre se dice 'Quant val?' o 'Quant costa?'."
      },
      {
        id: "sm-2",
        catala: "Em posa tres-cents grams de formatge, si us plau?",
        castella: "¿Me pone trescientos gramos de queso, por favor?",
        situacion: "Fiambrería o charcutería",
        pron: "EM PO-za TRES-SENS GRAMS de for-MA-dzhe, si us PLOU?",
        desglossament: [
          { cat: "Em posa", es: "¿Me pone...?", gram: "Fórmula educada de pedir algo en el mostrador", fon: "Voz de cortesía." },
          { cat: "tres-cents grams", es: "trescientos gramos", gram: "Cantidad", fon: "Se escribe con guion." },
          { cat: "de formatge", es: "de queso", gram: "Queso = formatge", fon: "La 'tg' suena como 'dzh'." },
          { cat: "si us plau", es: "por favor", gram: "La fórmula universal de cortesía", fon: "Suena 'si us plou'." }
        ],
        consellFonetica: "En Osona los quesos artesanos son famosos. Pedir 'formatge' es básico."
      },
      {
        id: "sm-3",
        catala: "On puc trobar la llet i l'oli d'oliva?",
        castella: "¿Dónde puedo encontrar la leche y el aceite de oliva?",
        situacion: "Pasillos del supermercado",
        pron: "ON PUK tro-BAR la LYET i LO-li do-LI-va?",
        desglossament: [
          { cat: "On puc trobar", es: "¿Dónde puedo encontrar?", gram: "On (dónde) + puc (puedo, de poder) + trobar (encontrar)", fon: "Puc suena 'puk'." },
          { cat: "la llet", es: "la leche", gram: "En catalán leche es femenino: 'la llet'", fon: "Llet suena 'lyet'." },
          { cat: "i l'oli d'oliva", es: "y el aceite de oliva", gram: "Aceite = 'oli' (masculino)", fon: "Apostrofado 'l'oli d'oliva'." }
        ],
        consellFonetica: "En catalán, aceite es 'oli' (del latín oleum) y leche es 'llet'."
      },
      {
        id: "sm-4",
        catala: "Puc pagar amb targeta o només en efectiu?",
        castella: "¿Puedo pagar con tarjeta o solo en efectivo?",
        situacion: "En la caja",
        pron: "PUK pa-GAR am tar-ZHE-ta o no-MES en e-fek-TIU?",
        desglossament: [
          { cat: "Puc pagar", es: "¿Puedo pagar?", gram: "Verbo poder + pagar", fon: "Puc = puk." },
          { cat: "amb targeta", es: "con tarjeta", gram: "'Amb' significa 'con'. Targeta = tarjeta", fon: "'Amb' se pronuncia 'am'." },
          { cat: "o només", es: "o solamente", gram: "Només = solo / solamente", fon: "Acento abierto en la 'è'." },
          { cat: "en efectiu", es: "en efectivo", gram: "Dinero en mano", fon: "Efectiu termina en 'iu'." }
        ],
        consellFonetica: "Palabra de oro: 'AMB' significa 'CON' y se pronuncia casi como 'am'."
      }
    ]
  },

  {
    categoria: "☕ Al Bar i al Restaurant",
    icono: "☕",
    frases: [
      {
        id: "bar-1",
        catala: "Faci'm un tallat descafeïnat i un croissant, si us plau",
        castella: "Hágame un cortado descafeinado y un cruasán, por favor",
        situacion: "Desayuno en el bar",
        pron: "FA-sim un ta-LYAT dez-ka-fe-i-NAT i un krwa-SAN, si us PLOU",
        desglossament: [
          { cat: "Faci'm", es: "Hágame / póngame", gram: "Imperativo formal de cortesía del verbo fer (hacer)", fon: "Faci-m." },
          { cat: "un tallat", es: "un cortado", gram: "Café con un chorrito de leche (el clásico cortado)", fon: "Tallat suena 'ta-lyat'." },
          { cat: "descafeïnat", es: "descafeinado", gram: "Con diéresis para separar sílabas", fon: "Des-ka-fe-i-nat." },
          { cat: "i un croissant", es: "y una medialuna / cruasán", gram: "Bollería clásica de desayuno", fon: "Pronunciación francesa adaptada." }
        ],
        consellFonetica: "Tip de café en Cataluña: café solo = 'un cafè sol'; cortado = 'un tallat'; café con leche = 'un cafè amb llet'."
      },
      {
        id: "bar-2",
        catala: "Quant és tot plegat? El compte, si us plau",
        castella: "¿Cuánto es todo junto? La cuenta, por favor",
        situacion: "Pagar en el bar",
        pron: "KWANT ES TOT ple-GAT? el KOMP-te, si us PLOU",
        desglossament: [
          { cat: "Quant és", es: "¿Cuánto es?", gram: "Interrogativo + verbo ser", fon: "Quant és." },
          { cat: "tot plegat", es: "todo junto / en total", gram: "Locución idiomática catalana muy típica", fon: "Tot ple-gat." },
          { cat: "El compte", es: "La cuenta", gram: "En catalán cuenta es masculino: 'el compte'", fon: "No confundir con conte (cuento)." }
        ],
        consellFonetica: "'Tot plegat' se usa todos los días para decir 'todo junto'."
      },
      {
        id: "bar-3",
        catala: "Teniu menú del dia? Què hi ha de primer plat?",
        castella: "¿Tenéis menú del día? ¿Qué hay de primer plato?",
        situacion: "Almuerzo en el restaurante",
        pron: "te-NIU me-NU del DI-a? KE i A de pri-MER PLAT?",
        desglossament: [
          { cat: "Teniu", es: "¿Tenéis?", gram: "Verbo tenir (tener), 2ª pers. plural", fon: "Te-niu." },
          { cat: "menú del dia", es: "menú del día", gram: "El menú cerrado económico de mediodía", fon: "Me-nu del di-a." },
          { cat: "Què hi ha", es: "¿Qué hay?", gram: "Què (qué) + hi ha (hay)", fon: "Suena 'ke-i-a'." },
          { cat: "de primer plat", es: "de primer plato", gram: "Plato en catalán es 'plat'", fon: "Pri-mer plat." }
        ],
        consellFonetica: "En Cataluña el menú del día casi siempre incluye primer plat, segon plat, postre, pa i beguda (bebida)."
      }
    ]
  },

  {
    categoria: "🚶 Pel Carrer i Direccions a Vic",
    icono: "🗺️",
    frases: [
      {
        id: "dir-1",
        catala: "Per anar a l'estació de tren, vaig bé per aquí?",
        castella: "Para ir a la estación de tren, ¿voy bien por aquí?",
        situacion: "Orientarse en la ciudad",
        pron: "per a-NAR a les-ta-SIÓ de TREN, BAIG BE per a-KI?",
        desglossament: [
          { cat: "Per anar a", es: "Para ir a", gram: "Preposición per + infinitivo anar (ir)", fon: "Per a-nar." },
          { cat: "l'estació de tren", es: "la estación de tren", gram: "Estación = estació", fon: "Les-ta-si-o de tren." },
          { cat: "vaig bé", es: "¿voy bien?", gram: "Vaig (1ª pers. de anar) + bé (bien)", fon: "Vaig suena 'baich'." },
          { cat: "per aquí", es: "por aquí", gram: "Adverbio de lugar", fon: "Per a-ki." }
        ],
        consellFonetica: "La palabra 'vaig' (voy) termina en '-ig' y suena exactamente como 'baich'."
      },
      {
        id: "dir-2",
        catala: "Heu de continuar tot recte i girar al primer carrer a la dreta",
        castella: "Tiene que continuar todo recto y doblar en la primera calle a la derecha",
        situacion: "Seguir instrucciones de calle",
        pron: "EU de kon-ti-nw-AR TOT REK-te i zhi-RAR al pri-MER kar-RER a la DRE-ta",
        desglossament: [
          { cat: "Heu de continuar", es: "Tiene que / habéis de continuar", gram: "Fórmula de obligación de cortesía", fon: "Eu de kon-ti-nu-ar." },
          { cat: "tot recte", es: "todo derecho / todo recto", gram: "Locución de dirección", fon: "Tot rek-te." },
          { cat: "i girar", es: "y doblar / girar", gram: "Girar = doblar", fon: "Girar suena con 'j' suave." },
          { cat: "al primer carrer", es: "en la primera calle", gram: "Calle en catalán es 'carrer' (masculino)", fon: "Kar-rer." },
          { cat: "a la dreta", es: "a la derecha", gram: "Dreta = derecha; esquerra = izquierda", fon: "Dre-ta." }
        ],
        consellFonetica: "Regla de oro: 'Dreta' es derecha, y 'Esquerra' es izquierda."
      },
      {
        id: "dir-3",
        catala: "On és la parada d'autobús més propera?",
        castella: "¿Dónde está la parada de autobús más cercana?",
        situacion: "Transporte urbano",
        pron: "ON ES la pa-RA-da daw-to-BUS MES pro-PE-ra?",
        desglossament: [
          { cat: "On és", es: "¿Dónde está?", gram: "Interrogativo de lugar", fon: "On és." },
          { cat: "la parada d'autobús", es: "la parada de autobús", gram: "Sustantivo compuesto", fon: "Daw-to-bus." },
          { cat: "més propera", es: "más cercana / próxima", gram: "Més (más) + propera (cercana / próxima)", fon: "Mes pro-pe-ra." }
        ],
        consellFonetica: "'Proper' (masculino) y 'propera' (femenino) significan cercano o próximo."
      }
    ]
  },

  {
    categoria: "🏥 Al Metge, Farmàcia i Tràmits",
    icono: "🏥",
    frases: [
      {
        id: "med-1",
        catala: "Voldria demanar hora amb el metge de capçalera",
        castella: "Quisiera pedir turno con el médico de cabecera",
        situacion: "En el centro de salud (CAP)",
        pron: "vol-DRI-a de-ma-NAR O-ra am el MED-zhe de kap-sa-LE-ra",
        desglossament: [
          { cat: "Voldria", es: "Quisiera / desearía", gram: "Condicional de cortesía del verbo voler (querer)", fon: "Vol-dri-a." },
          { cat: "demanar hora", es: "pedir turno / cita médica", gram: "En Cataluña nunca se dice 'pedir turno', se dice 'demanar hora'", fon: "De-ma-nar o-ra." },
          { cat: "amb el metge", es: "con el médico", gram: "Médico = metge", fon: "Med-zhe." },
          { cat: "de capçalera", es: "de cabecera (médico de familia)", gram: "El médico asignado en tu ambulatorio", fon: "De kap-sa-le-ra." }
        ],
        consellFonetica: "En España vas al 'CAP' (*Centre d'Atenció Primària*). La expresión fija es 'demanar hora'."
      },
      {
        id: "med-2",
        catala: "Em fa mal el cap i tinc una mica de febre",
        castella: "Me duele la cabeza y tengo un poco de fiebre",
        situacion: "Explicar síntomas",
        pron: "EM FA MAL el KAP i TINK U-na MI-ka de FE-bre",
        desglossament: [
          { cat: "Em fa mal", es: "Me duele", gram: "Literalmente: me hace daño (fer mal = doler)", fon: "Em fa mal." },
          { cat: "el cap", es: "la cabeza", gram: "Cabeza = el cap (masculino)", fon: "El kap." },
          { cat: "i tinc", es: "y tengo", gram: "Tinc (1ª pers. de tenir)", fon: "Tink." },
          { cat: "una mica de", es: "un poco de", gram: "Locución adverbial muy usada: una mica = un poco", fon: "U-na mi-ka de." },
          { cat: "febre", es: "fiebre", gram: "Sustantivo femenino", fon: "Fe-bre." }
        ],
        consellFonetica: "Para decir 'me duele la espalda' se dice 'Em fa mal l'esquena'."
      },
      {
        id: "med-3",
        catala: "Vinc a empadronar-me a l'Ajuntament de Vic",
        castella: "Vengo a empadronarme al Ayuntamiento de Vic",
        situacion: "Trámite legal indispensable",
        pron: "BINK a em-pa-dro-NAR-me a la-zhun-ta-MENT de BIK",
        desglossament: [
          { cat: "Vinc a", es: "Vengo a", gram: "Verbo venir en primera persona", fon: "Bink a." },
          { cat: "empadronar-me", es: "empadronarme", gram: "El registro municipal de tu domicilio (padrón)", fon: "Em-pa-dro-nar-me." },
          { cat: "a l'Ajuntament", es: "en el Ayuntamiento", gram: "Alcaldía / Municipalidad = Ajuntament", fon: "A la-zhun-ta-ment." },
          { cat: "de Vic", es: "de Vic", gram: "La ciudad donde vas a vivir", fon: "De Bik." }
        ],
        consellFonetica: "El empadronamiento es el primer trámite legal obligatorio que harás al llegar a Vic para tener médico y servicios."
      }
    ]
  },

  {
    categoria: "🏠 Habitatge, Lloguer i Convivència",
    icono: "🔑",
    frases: [
      {
        id: "hab-1",
        catala: "Truco pel pis de lloguer que he vist anunciat",
        castella: "Llamo por el departamento en alquiler que he visto publicado",
        situacion: "Buscar alquiler",
        pron: "TRU-ku pel PIS de lyo-GWER ke E BIST a-nun-si-AT",
        desglossament: [
          { cat: "Truco", es: "Llamo (por teléfono)", gram: "Verbo 'trucar' = llamar por teléfono", fon: "Tru-ku." },
          { cat: "pel pis", es: "por el piso / departamento", gram: "Pel = contracción de per + el. Pis = departamento", fon: "Pel pis." },
          { cat: "de lloguer", es: "en alquiler", gram: "Lloguer = alquiler / renta", fon: "Lyo-gwer." },
          { cat: "que he vist anunciat", es: "que he visto anunciado", gram: "Participio de veure (ver) + anunciat", fon: "Ke e bist a-nun-si-at." }
        ],
        consellFonetica: "Ojo: en catalán 'trucar' es llamar por teléfono. 'Lloguer' es alquiler."
      },
      {
        id: "hab-2",
        catala: "Les despeses de llum, aigua i gas estan incloses al preu?",
        castella: "¿Los gastos de luz, agua y gas están incluidos en el precio?",
        situacion: "Preguntar condiciones del alquiler",
        pron: "les dez-PE-zes de LYUM, AI-gwa i GAS es-TAN in-KLO-zes al PREU?",
        desglossament: [
          { cat: "Les despeses", es: "Los gastos / expensas", gram: "Despesa = gasto / expensa", fon: "Dez-pe-zes." },
          { cat: "de llum, aigua i gas", es: "de luz, agua y gas", gram: "Luz = llum (femenino: la llum)", fon: "Lyum, ai-gwa i gas." },
          { cat: "estan incloses", es: "están incluidos", gram: "Concordancia en femenino plural", fon: "Es-tan in-klo-zes." },
          { cat: "al preu", es: "en el precio", gram: "Preu = precio", fon: "Al preu." }
        ],
        consellFonetica: "'Llum' es femenino en catalán (*la llum* = la luz)."
      }
    ]
  }
];
