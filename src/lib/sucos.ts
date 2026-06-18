// Biblioteca de sucos — 50 receitas naturais, bilíngue (PT/ES), SEM foto.
// Organizadas por objetivo. Usadas na rota /sucos (lista + filtros).
// O "Suco Sagrado" continua sendo o ritual destaque (rota /suco-sagrado).

export type SucoCat = "desinflamar" | "energia" | "sono" | "detox" | "imunidade";

export interface Suco {
  id: string;
  cat: SucoCat;
  nome: { pt: string; es: string };
  beneficio: { pt: string; es: string };
  ingredientes: { pt: string[]; es: string[] };
  preparo: { pt: string[]; es: string[] };
}

export const sucoCats: { id: SucoCat; pt: string; es: string; emoji: string }[] = [
  { id: "desinflamar", pt: "Desinflamar", es: "Desinflamar", emoji: "🌿" },
  { id: "energia", pt: "Energia", es: "Energía", emoji: "☀️" },
  { id: "sono", pt: "Sono & Calma", es: "Sueño y Calma", emoji: "🌙" },
  { id: "detox", pt: "Detox & Fígado", es: "Detox e Hígado", emoji: "💧" },
  { id: "imunidade", pt: "Imunidade", es: "Inmunidad", emoji: "🛡️" },
];

// Passos padrão reaproveitados (liquidificador / infusão).
const BATER_PT = [
  "Bata todos os ingredientes com 200 ml de água gelada até ficar homogêneo.",
  "Coe se preferir e sirva imediatamente, de preferência em jejum.",
];
const BATER_ES = [
  "Licúa todos los ingredientes con 200 ml de agua fría hasta que quede homogéneo.",
  "Cuela si prefieres y sirve de inmediato, preferiblemente en ayunas.",
];
const CHA_PT = [
  "Prepare a infusão com água quente e deixe amornar por 5 minutos.",
  "Misture o mel e o limão.",
  "Beba morno, devagar, antes de dormir.",
];
const CHA_ES = [
  "Prepara la infusión con agua caliente y deja entibiar 5 minutos.",
  "Mezcla la miel y el limón.",
  "Bebe tibio, despacio, antes de dormir.",
];

export const sucos: Suco[] = [
  // ───────────────────────── DESINFLAMAR ─────────────────────────
  {
    id: "verde-do-jordao",
    cat: "desinflamar",
    nome: { pt: "Verde do Jordão", es: "Verde del Jordán" },
    beneficio: {
      pt: "Reduz o inchaço e acalma o intestino logo na primeira semana.",
      es: "Reduce la hinchazón y calma el intestino desde la primera semana.",
    },
    ingredientes: {
      pt: ["1 folha de couve", "1 fatia de abacaxi", "1 rodela de gengibre", "Suco de 1 limão", "Hortelã a gosto"],
      es: ["1 hoja de col rizada", "1 rodaja de piña", "1 rodaja de jengibre", "Jugo de 1 limón", "Hierbabuena al gusto"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "dourado-anti-inflamatorio",
    cat: "desinflamar",
    nome: { pt: "Dourado Anti-Inflamatório", es: "Dorado Antiinflamatorio" },
    beneficio: {
      pt: "Cúrcuma e gengibre baixam a inflamação do corpo inteiro.",
      es: "Cúrcuma y jengibre bajan la inflamación de todo el cuerpo.",
    },
    ingredientes: {
      pt: ["1 cenoura", "Suco de 2 laranjas", "1 c. de chá de cúrcuma", "1 rodela de gengibre", "1 pitada de pimenta-do-reino"],
      es: ["1 zanahoria", "Jugo de 2 naranjas", "1 cdta de cúrcuma", "1 rodaja de jengibre", "1 pizca de pimienta negra"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "abacaxi-hortela",
    cat: "desinflamar",
    nome: { pt: "Abacaxi com Hortelã", es: "Piña con Hierbabuena" },
    beneficio: {
      pt: "A bromelina do abacaxi ajuda a desinchar e digerir.",
      es: "La bromelina de la piña ayuda a desinflamar y digerir.",
    },
    ingredientes: {
      pt: ["2 fatias de abacaxi", "Hortelã a gosto", "1 rodela de gengibre", "200 ml de água de coco"],
      es: ["2 rodajas de piña", "Hierbabuena al gusto", "1 rodaja de jengibre", "200 ml de agua de coco"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "curcuma-limao",
    cat: "desinflamar",
    nome: { pt: "Cúrcuma & Limão", es: "Cúrcuma y Limón" },
    beneficio: {
      pt: "Shot matinal que acorda o fígado e combate a inflamação.",
      es: "Shot matutino que despierta el hígado y combate la inflamación.",
    },
    ingredientes: {
      pt: ["Suco de 1 limão", "1 c. de chá de cúrcuma", "1 c. de chá de mel", "1 pitada de pimenta-do-reino", "200 ml de água morna"],
      es: ["Jugo de 1 limón", "1 cdta de cúrcuma", "1 cdta de miel", "1 pizca de pimienta negra", "200 ml de agua tibia"],
    },
    preparo: {
      pt: ["Misture tudo na água morna até dissolver.", "Beba em jejum, de uma vez."],
      es: ["Mezcla todo en el agua tibia hasta disolver.", "Bebe en ayunas, de una vez."],
    },
  },
  {
    id: "pepino-refrescante",
    cat: "desinflamar",
    nome: { pt: "Pepino Refrescante", es: "Pepino Refrescante" },
    beneficio: {
      pt: "Hidrata fundo e reduz a retenção de líquido.",
      es: "Hidrata profundo y reduce la retención de líquido.",
    },
    ingredientes: {
      pt: ["1/2 pepino", "Suco de 1 limão", "Hortelã a gosto", "1 maçã verde"],
      es: ["1/2 pepino", "Jugo de 1 limón", "Hierbabuena al gusto", "1 manzana verde"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "gengibre-maca",
    cat: "desinflamar",
    nome: { pt: "Gengibre & Maçã", es: "Jengibre y Manzana" },
    beneficio: {
      pt: "Aquece, desincha e regula a digestão.",
      es: "Calienta, desinflama y regula la digestión.",
    },
    ingredientes: {
      pt: ["1 maçã", "1 rodela de gengibre", "Suco de 1/2 limão", "Canela a gosto"],
      es: ["1 manzana", "1 rodaja de jengibre", "Jugo de 1/2 limón", "Canela al gusto"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "beterraba-profunda",
    cat: "desinflamar",
    nome: { pt: "Beterraba Profunda", es: "Remolacha Profunda" },
    beneficio: {
      pt: "Antioxidante poderoso que melhora a circulação.",
      es: "Antioxidante poderoso que mejora la circulación.",
    },
    ingredientes: {
      pt: ["1/2 beterraba", "Suco de 2 laranjas", "1 rodela de gengibre"],
      es: ["1/2 remolacha", "Jugo de 2 naranjas", "1 rodaja de jengibre"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "cenoura-laranja",
    cat: "desinflamar",
    nome: { pt: "Cenoura & Laranja", es: "Zanahoria y Naranja" },
    beneficio: {
      pt: "Betacaroteno e vitamina C para a pele e a imunidade.",
      es: "Betacaroteno y vitamina C para la piel y la inmunidad.",
    },
    ingredientes: {
      pt: ["1 cenoura", "Suco de 2 laranjas", "1 pitada de cúrcuma"],
      es: ["1 zanahoria", "Jugo de 2 naranjas", "1 pizca de cúrcuma"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "couve-suave",
    cat: "desinflamar",
    nome: { pt: "Couve Suave", es: "Col Suave" },
    beneficio: {
      pt: "Clorofila e fibra que alimentam o intestino bom.",
      es: "Clorofila y fibra que alimentan el intestino sano.",
    },
    ingredientes: {
      pt: ["1 folha de couve", "1 maçã", "Suco de 1 limão", "200 ml de água"],
      es: ["1 hoja de col rizada", "1 manzana", "Jugo de 1 limón", "200 ml de agua"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "melancia-gengibre",
    cat: "desinflamar",
    nome: { pt: "Melancia & Gengibre", es: "Sandía y Jengibre" },
    beneficio: {
      pt: "Diurético natural que desincha sem peso.",
      es: "Diurético natural que desinflama sin pesadez.",
    },
    ingredientes: {
      pt: ["2 fatias de melancia", "1 rodela de gengibre", "Hortelã a gosto"],
      es: ["2 rodajas de sandía", "1 rodaja de jengibre", "Hierbabuena al gusto"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },

  // ───────────────────────── ENERGIA ─────────────────────────
  {
    id: "sol-da-manha",
    cat: "energia",
    nome: { pt: "Sol da Manhã", es: "Sol de la Mañana" },
    beneficio: {
      pt: "Energia limpa para começar o dia sem café.",
      es: "Energía limpia para empezar el día sin café.",
    },
    ingredientes: {
      pt: ["Suco de 2 laranjas", "1 cenoura", "1 maçã", "1 rodela de gengibre"],
      es: ["Jugo de 2 naranjas", "1 zanahoria", "1 manzana", "1 rodaja de jengibre"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "verde-vital",
    cat: "energia",
    nome: { pt: "Verde Vital", es: "Verde Vital" },
    beneficio: {
      pt: "Ferro e potássio que sustentam a energia o dia todo.",
      es: "Hierro y potasio que sostienen la energía todo el día.",
    },
    ingredientes: {
      pt: ["1 punhado de espinafre", "1 banana", "1 maçã", "200 ml de água de coco"],
      es: ["1 puñado de espinaca", "1 banano", "1 manzana", "200 ml de agua de coco"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "banana-aveia",
    cat: "energia",
    nome: { pt: "Banana & Aveia", es: "Banano y Avena" },
    beneficio: {
      pt: "Saciedade longa e energia estável, sem pico de açúcar.",
      es: "Saciedad larga y energía estable, sin pico de azúcar.",
    },
    ingredientes: {
      pt: ["1 banana", "2 c. de sopa de aveia", "200 ml de leite vegetal", "Canela a gosto"],
      es: ["1 banano", "2 cdas de avena", "200 ml de leche vegetal", "Canela al gusto"],
    },
    preparo: {
      pt: ["Bata tudo até virar um creme liso.", "Sirva na hora, polvilhando canela."],
      es: ["Licúa todo hasta una crema lisa.", "Sirve al momento, espolvoreando canela."],
    },
  },
  {
    id: "beterraba-energetica",
    cat: "energia",
    nome: { pt: "Beterraba Energética", es: "Remolacha Energética" },
    beneficio: {
      pt: "Aumenta o fôlego e a disposição física.",
      es: "Aumenta el aliento y la disposición física.",
    },
    ingredientes: {
      pt: ["1/2 beterraba", "1 maçã", "Suco de 1 laranja"],
      es: ["1/2 remolacha", "1 manzana", "Jugo de 1 naranja"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "abacaxi-tropical",
    cat: "energia",
    nome: { pt: "Abacaxi Tropical", es: "Piña Tropical" },
    beneficio: {
      pt: "Refrescante e cheio de vitamina C para o ânimo.",
      es: "Refrescante y lleno de vitamina C para el ánimo.",
    },
    ingredientes: {
      pt: ["2 fatias de abacaxi", "Suco de 1 laranja", "Hortelã a gosto"],
      es: ["2 rodajas de piña", "Jugo de 1 naranja", "Hierbabuena al gusto"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "maca-canela",
    cat: "energia",
    nome: { pt: "Maçã & Canela", es: "Manzana y Canela" },
    beneficio: {
      pt: "Estabiliza o açúcar do sangue e dá energia calma.",
      es: "Estabiliza el azúcar en sangre y da energía calma.",
    },
    ingredientes: {
      pt: ["2 maçãs", "1 c. de chá de canela", "Suco de 1/2 limão", "200 ml de água"],
      es: ["2 manzanas", "1 cdta de canela", "Jugo de 1/2 limón", "200 ml de agua"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "manga-dourada",
    cat: "energia",
    nome: { pt: "Manga Dourada", es: "Mango Dorado" },
    beneficio: {
      pt: "Doce natural que recarrega depois do exercício.",
      es: "Dulce natural que recarga después del ejercicio.",
    },
    ingredientes: {
      pt: ["1/2 manga", "Suco de 1 laranja", "1 pitada de cúrcuma"],
      es: ["1/2 mango", "Jugo de 1 naranja", "1 pizca de cúrcuma"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "uva-limao",
    cat: "energia",
    nome: { pt: "Uva & Limão", es: "Uva y Limón" },
    beneficio: {
      pt: "Antioxidantes que renovam a energia das células.",
      es: "Antioxidantes que renuevan la energía de las células.",
    },
    ingredientes: {
      pt: ["1 punhado de uvas roxas", "Suco de 1 limão", "200 ml de água"],
      es: ["1 puñado de uvas moradas", "Jugo de 1 limón", "200 ml de agua"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "cenoura-power",
    cat: "energia",
    nome: { pt: "Cenoura Power", es: "Zanahoria Power" },
    beneficio: {
      pt: "Vitamina A e energia para o foco da manhã.",
      es: "Vitamina A y energía para el enfoque de la mañana.",
    },
    ingredientes: {
      pt: ["2 cenouras", "1 maçã", "1 rodela de gengibre", "Suco de 1/2 limão"],
      es: ["2 zanahorias", "1 manzana", "1 rodaja de jengibre", "Jugo de 1/2 limón"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "verde-despertar",
    cat: "energia",
    nome: { pt: "Verde Despertar", es: "Verde Despertar" },
    beneficio: {
      pt: "Substitui o café com energia leve e clara.",
      es: "Sustituye el café con energía ligera y clara.",
    },
    ingredientes: {
      pt: ["1 maçã verde", "1 punhado de espinafre", "Suco de 1 limão", "1 rodela de gengibre"],
      es: ["1 manzana verde", "1 puñado de espinaca", "Jugo de 1 limón", "1 rodaja de jengibre"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },

  // ───────────────────────── SONO & CALMA ─────────────────────────
  {
    id: "calmaria-da-noite",
    cat: "sono",
    nome: { pt: "Calmaria da Noite", es: "Calma de la Noche" },
    beneficio: {
      pt: "Relaxa o corpo e prepara para um sono profundo.",
      es: "Relaja el cuerpo y prepara para un sueño profundo.",
    },
    ingredientes: {
      pt: ["1 maçã", "Algumas folhas de alface", "Hortelã a gosto", "200 ml de água"],
      es: ["1 manzana", "Unas hojas de lechuga", "Hierbabuena al gusto", "200 ml de agua"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "camomila-mel",
    cat: "sono",
    nome: { pt: "Camomila & Mel", es: "Manzanilla y Miel" },
    beneficio: {
      pt: "Infusão clássica que acalma a mente antes de dormir.",
      es: "Infusión clásica que calma la mente antes de dormir.",
    },
    ingredientes: {
      pt: ["1 sachê de camomila", "1 c. de chá de mel", "Suco de 1/2 limão", "250 ml de água quente"],
      es: ["1 bolsita de manzanilla", "1 cdta de miel", "Jugo de 1/2 limón", "250 ml de agua caliente"],
    },
    preparo: { pt: CHA_PT, es: CHA_ES },
  },
  {
    id: "maracuja-sereno",
    cat: "sono",
    nome: { pt: "Maracujá Sereno", es: "Maracuyá Sereno" },
    beneficio: {
      pt: "Calmante natural que reduz a ansiedade da noite.",
      es: "Calmante natural que reduce la ansiedad de la noche.",
    },
    ingredientes: {
      pt: ["Polpa de 1 maracujá", "1 c. de chá de mel", "250 ml de água"],
      es: ["Pulpa de 1 maracuyá", "1 cdta de miel", "250 ml de agua"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "banana-maca-noturna",
    cat: "sono",
    nome: { pt: "Banana & Maçã Noturna", es: "Banano y Manzana Nocturna" },
    beneficio: {
      pt: "Magnésio e triptofano que ajudam a relaxar.",
      es: "Magnesio y triptófano que ayudan a relajar.",
    },
    ingredientes: {
      pt: ["1 banana", "1 maçã", "Canela a gosto", "200 ml de leite vegetal"],
      es: ["1 banano", "1 manzana", "Canela al gusto", "200 ml de leche vegetal"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "alface-limao",
    cat: "sono",
    nome: { pt: "Alface & Limão", es: "Lechuga y Limón" },
    beneficio: {
      pt: "A alface tem efeito calmante leve e natural.",
      es: "La lechuga tiene un efecto calmante leve y natural.",
    },
    ingredientes: {
      pt: ["Algumas folhas de alface", "Suco de 1 limão", "1 maçã", "200 ml de água"],
      es: ["Unas hojas de lechuga", "Jugo de 1 limón", "1 manzana", "200 ml de agua"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "cereja-tranquila",
    cat: "sono",
    nome: { pt: "Cereja Tranquila", es: "Cereza Tranquila" },
    beneficio: {
      pt: "Fonte natural de melatonina para o sono.",
      es: "Fuente natural de melatonina para el sueño.",
    },
    ingredientes: {
      pt: ["1 punhado de cerejas sem caroço", "Suco de 1/2 limão", "200 ml de água"],
      es: ["1 puñado de cerezas sin hueso", "Jugo de 1/2 limón", "200 ml de agua"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "erva-doce-calmante",
    cat: "sono",
    nome: { pt: "Erva-Doce Calmante", es: "Hinojo Calmante" },
    beneficio: {
      pt: "Acalma o estômago e o corpo no fim do dia.",
      es: "Calma el estómago y el cuerpo al final del día.",
    },
    ingredientes: {
      pt: ["1 c. de sopa de erva-doce", "1 c. de chá de mel", "250 ml de água quente"],
      es: ["1 cda de hinojo", "1 cdta de miel", "250 ml de agua caliente"],
    },
    preparo: { pt: CHA_PT, es: CHA_ES },
  },
  {
    id: "pera-suave",
    cat: "sono",
    nome: { pt: "Pera Suave", es: "Pera Suave" },
    beneficio: {
      pt: "Doce leve que não pesa antes de dormir.",
      es: "Dulce ligero que no pesa antes de dormir.",
    },
    ingredientes: {
      pt: ["1 pera", "Algumas folhas de alface", "200 ml de água", "Hortelã a gosto"],
      es: ["1 pera", "Unas hojas de lechuga", "200 ml de agua", "Hierbabuena al gusto"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "mel-hortela-noite",
    cat: "sono",
    nome: { pt: "Mel & Hortelã", es: "Miel y Hierbabuena" },
    beneficio: {
      pt: "Bebida morna que relaxa a garganta e a mente.",
      es: "Bebida tibia que relaja la garganta y la mente.",
    },
    ingredientes: {
      pt: ["1 c. de chá de mel", "Hortelã fresca", "Suco de 1/2 limão", "250 ml de água morna"],
      es: ["1 cdta de miel", "Hierbabuena fresca", "Jugo de 1/2 limón", "250 ml de agua tibia"],
    },
    preparo: { pt: CHA_PT, es: CHA_ES },
  },
  {
    id: "lavanda-doce",
    cat: "sono",
    nome: { pt: "Lavanda Doce", es: "Lavanda Dulce" },
    beneficio: {
      pt: "Aroma e infusão que induzem o relaxamento.",
      es: "Aroma e infusión que inducen la relajación.",
    },
    ingredientes: {
      pt: ["1 c. de chá de lavanda culinária", "1 c. de chá de mel", "250 ml de água quente"],
      es: ["1 cdta de lavanda culinaria", "1 cdta de miel", "250 ml de agua caliente"],
    },
    preparo: { pt: CHA_PT, es: CHA_ES },
  },

  // ───────────────────────── DETOX & FÍGADO ─────────────────────────
  {
    id: "detox-verde",
    cat: "detox",
    nome: { pt: "Detox Verde", es: "Detox Verde" },
    beneficio: {
      pt: "Limpa o organismo e dá leveza pela manhã.",
      es: "Limpia el organismo y da ligereza por la mañana.",
    },
    ingredientes: {
      pt: ["1 folha de couve", "1/2 pepino", "Suco de 1 limão", "1 rodela de gengibre", "Salsinha a gosto"],
      es: ["1 hoja de col rizada", "1/2 pepino", "Jugo de 1 limón", "1 rodaja de jengibre", "Perejil al gusto"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "limao-salsinha",
    cat: "detox",
    nome: { pt: "Limão & Salsinha", es: "Limón y Perejil" },
    beneficio: {
      pt: "Diurético potente que ajuda os rins a limpar.",
      es: "Diurético potente que ayuda a los riñones a limpiar.",
    },
    ingredientes: {
      pt: ["Suco de 1 limão", "1 punhado de salsinha", "1 rodela de gengibre", "200 ml de água"],
      es: ["Jugo de 1 limón", "1 puñado de perejil", "1 rodaja de jengibre", "200 ml de agua"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "beterraba-purificadora",
    cat: "detox",
    nome: { pt: "Beterraba Purificadora", es: "Remolacha Purificadora" },
    beneficio: {
      pt: "Apoia o fígado e renova o sangue.",
      es: "Apoya el hígado y renueva la sangre.",
    },
    ingredientes: {
      pt: ["1/2 beterraba", "1 cenoura", "Suco de 1 limão", "1 rodela de gengibre"],
      es: ["1/2 remolacha", "1 zanahoria", "Jugo de 1 limón", "1 rodaja de jengibre"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "clorofila-pura",
    cat: "detox",
    nome: { pt: "Clorofila Pura", es: "Clorofila Pura" },
    beneficio: {
      pt: "Verde concentrado que oxigena e desintoxica.",
      es: "Verde concentrado que oxigena y desintoxica.",
    },
    ingredientes: {
      pt: ["1 folha de couve", "1 punhado de espinafre", "1/2 pepino", "Suco de 1 limão"],
      es: ["1 hoja de col rizada", "1 puñado de espinaca", "1/2 pepino", "Jugo de 1 limón"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "maca-verde-detox",
    cat: "detox",
    nome: { pt: "Maçã Verde Detox", es: "Manzana Verde Detox" },
    beneficio: {
      pt: "Refresca e elimina o excesso de toxinas.",
      es: "Refresca y elimina el exceso de toxinas.",
    },
    ingredientes: {
      pt: ["1 maçã verde", "1/2 pepino", "Hortelã a gosto", "Suco de 1 limão"],
      es: ["1 manzana verde", "1/2 pepino", "Hierbabuena al gusto", "Jugo de 1 limón"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "gengibre-curcuma-detox",
    cat: "detox",
    nome: { pt: "Gengibre & Cúrcuma Detox", es: "Jengibre y Cúrcuma Detox" },
    beneficio: {
      pt: "Shot quente que ativa o metabolismo e limpa.",
      es: "Shot caliente que activa el metabolismo y limpia.",
    },
    ingredientes: {
      pt: ["1 rodela de gengibre", "1 c. de chá de cúrcuma", "Suco de 1 limão", "200 ml de água morna"],
      es: ["1 rodaja de jengibre", "1 cdta de cúrcuma", "Jugo de 1 limón", "200 ml de agua tibia"],
    },
    preparo: {
      pt: ["Misture tudo na água morna.", "Beba em jejum, de uma vez."],
      es: ["Mezcla todo en el agua tibia.", "Bebe en ayunas, de una vez."],
    },
  },
  {
    id: "abacaxi-hortela-detox",
    cat: "detox",
    nome: { pt: "Abacaxi & Hortelã Detox", es: "Piña y Hierbabuena Detox" },
    beneficio: {
      pt: "Desincha e ajuda a eliminar o que sobra.",
      es: "Desinflama y ayuda a eliminar lo que sobra.",
    },
    ingredientes: {
      pt: ["2 fatias de abacaxi", "Hortelã a gosto", "1/2 pepino", "200 ml de água"],
      es: ["2 rodajas de piña", "Hierbabuena al gusto", "1/2 pepino", "200 ml de agua"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "limpeza-do-jejum",
    cat: "detox",
    nome: { pt: "Limpeza do Jejum", es: "Limpieza del Ayuno" },
    beneficio: {
      pt: "Primeiro gole do dia que desperta o sistema digestivo.",
      es: "Primer sorbo del día que despierta el sistema digestivo.",
    },
    ingredientes: {
      pt: ["Suco de 1 limão", "1 rodela de gengibre", "1 pitada de pimenta-caiena", "250 ml de água morna"],
      es: ["Jugo de 1 limón", "1 rodaja de jengibre", "1 pizca de pimienta de cayena", "250 ml de agua tibia"],
    },
    preparo: {
      pt: ["Misture tudo na água morna.", "Beba em jejum, 20 min antes do café da manhã."],
      es: ["Mezcla todo en el agua tibia.", "Bebe en ayunas, 20 min antes del desayuno."],
    },
  },
  {
    id: "couve-abacaxi",
    cat: "detox",
    nome: { pt: "Couve & Abacaxi", es: "Col y Piña" },
    beneficio: {
      pt: "Clássico verde que limpa e desincha ao mesmo tempo.",
      es: "Clásico verde que limpia y desinflama a la vez.",
    },
    ingredientes: {
      pt: ["1 folha de couve", "2 fatias de abacaxi", "Suco de 1 limão", "1 rodela de gengibre"],
      es: ["1 hoja de col rizada", "2 rodajas de piña", "Jugo de 1 limón", "1 rodaja de jengibre"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "aipo-verde",
    cat: "detox",
    nome: { pt: "Aipo Verde", es: "Apio Verde" },
    beneficio: {
      pt: "Hidrata, alcaliniza e reduz a retenção.",
      es: "Hidrata, alcaliniza y reduce la retención.",
    },
    ingredientes: {
      pt: ["2 talos de aipo", "1 maçã verde", "Suco de 1 limão", "1/2 pepino"],
      es: ["2 tallos de apio", "1 manzana verde", "Jugo de 1 limón", "1/2 pepino"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },

  // ───────────────────────── IMUNIDADE ─────────────────────────
  {
    id: "escudo-de-citricos",
    cat: "imunidade",
    nome: { pt: "Escudo de Cítricos", es: "Escudo de Cítricos" },
    beneficio: {
      pt: "Bomba de vitamina C para blindar o corpo.",
      es: "Bomba de vitamina C para blindar el cuerpo.",
    },
    ingredientes: {
      pt: ["Suco de 1 laranja", "Suco de 1 limão", "1 punhado de acerola", "1 c. de chá de mel"],
      es: ["Jugo de 1 naranja", "Jugo de 1 limón", "1 puñado de acerola", "1 cdta de miel"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "acerola-laranja",
    cat: "imunidade",
    nome: { pt: "Acerola & Laranja", es: "Acerola y Naranja" },
    beneficio: {
      pt: "Uma das maiores fontes de vitamina C da natureza.",
      es: "Una de las mayores fuentes de vitamina C de la naturaleza.",
    },
    ingredientes: {
      pt: ["1 punhado de acerolas", "Suco de 2 laranjas", "1 c. de chá de mel"],
      es: ["1 puñado de acerolas", "Jugo de 2 naranjas", "1 cdta de miel"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "gengibre-mel-imune",
    cat: "imunidade",
    nome: { pt: "Gengibre & Mel", es: "Jengibre y Miel" },
    beneficio: {
      pt: "Aquece e protege a garganta nos dias frios.",
      es: "Calienta y protege la garganta en días fríos.",
    },
    ingredientes: {
      pt: ["1 rodela de gengibre", "1 c. de chá de mel", "Suco de 1 limão", "250 ml de água morna"],
      es: ["1 rodaja de jengibre", "1 cdta de miel", "Jugo de 1 limón", "250 ml de agua tibia"],
    },
    preparo: { pt: CHA_PT, es: CHA_ES },
  },
  {
    id: "laranja-curcuma-imune",
    cat: "imunidade",
    nome: { pt: "Laranja & Cúrcuma Imune", es: "Naranja y Cúrcuma Inmune" },
    beneficio: {
      pt: "Dupla anti-inflamatória que fortalece as defesas.",
      es: "Dúo antiinflamatorio que fortalece las defensas.",
    },
    ingredientes: {
      pt: ["Suco de 2 laranjas", "1 c. de chá de cúrcuma", "1 c. de chá de mel", "1 pitada de pimenta-do-reino"],
      es: ["Jugo de 2 naranjas", "1 cdta de cúrcuma", "1 cdta de miel", "1 pizca de pimienta negra"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "limao-alho",
    cat: "imunidade",
    nome: { pt: "Limão & Alho Protetor", es: "Limón y Ajo Protector" },
    beneficio: {
      pt: "Antibiótico natural forte para os primeiros sinais de gripe.",
      es: "Antibiótico natural fuerte para los primeros signos de gripe.",
    },
    ingredientes: {
      pt: ["Suco de 1 limão", "1 dente de alho pequeno", "1 c. de chá de mel", "250 ml de água morna"],
      es: ["Jugo de 1 limón", "1 diente de ajo pequeño", "1 cdta de miel", "250 ml de agua tibia"],
    },
    preparo: {
      pt: ["Amasse o alho e misture tudo na água morna.", "Deixe descansar 2 min e beba."],
      es: ["Machaca el ajo y mezcla todo en el agua tibia.", "Deja reposar 2 min y bebe."],
    },
  },
  {
    id: "morango-acerola",
    cat: "imunidade",
    nome: { pt: "Morango & Acerola", es: "Fresa y Acerola" },
    beneficio: {
      pt: "Antioxidantes e vitamina C num só copo.",
      es: "Antioxidantes y vitamina C en un solo vaso.",
    },
    ingredientes: {
      pt: ["1 punhado de morangos", "1 punhado de acerolas", "Suco de 1 laranja"],
      es: ["1 puñado de fresas", "1 puñado de acerolas", "Jugo de 1 naranja"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "goiaba-vitamina",
    cat: "imunidade",
    nome: { pt: "Goiaba Vitaminada", es: "Guayaba Vitaminada" },
    beneficio: {
      pt: "A goiaba tem ainda mais vitamina C que a laranja.",
      es: "La guayaba tiene aún más vitamina C que la naranja.",
    },
    ingredientes: {
      pt: ["1 goiaba", "Suco de 1 laranja", "Suco de 1/2 limão"],
      es: ["1 guayaba", "Jugo de 1 naranja", "Jugo de 1/2 limón"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "roma-protetora",
    cat: "imunidade",
    nome: { pt: "Romã Protetora", es: "Granada Protectora" },
    beneficio: {
      pt: "Fruta bíblica rica em antioxidantes que defendem o corpo.",
      es: "Fruta bíblica rica en antioxidantes que defienden el cuerpo.",
    },
    ingredientes: {
      pt: ["Sementes de 1 romã", "Suco de 1 laranja", "Suco de 1/2 limão"],
      es: ["Semillas de 1 granada", "Jugo de 1 naranja", "Jugo de 1/2 limón"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "kiwi-laranja",
    cat: "imunidade",
    nome: { pt: "Kiwi & Laranja", es: "Kiwi y Naranja" },
    beneficio: {
      pt: "Vitamina C dupla que estimula as defesas.",
      es: "Vitamina C doble que estimula las defensas.",
    },
    ingredientes: {
      pt: ["1 kiwi", "Suco de 2 laranjas", "1 c. de chá de mel"],
      es: ["1 kiwi", "Jugo de 2 naranjas", "1 cdta de miel"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
  {
    id: "caju-mel",
    cat: "imunidade",
    nome: { pt: "Caju & Mel", es: "Marañón y Miel" },
    beneficio: {
      pt: "O suco de caju é riquíssimo em vitamina C.",
      es: "El jugo de marañón es riquísimo en vitamina C.",
    },
    ingredientes: {
      pt: ["2 cajus (a fruta)", "Suco de 1 laranja", "1 c. de chá de mel", "200 ml de água"],
      es: ["2 marañones (la fruta)", "Jugo de 1 naranja", "1 cdta de miel", "200 ml de agua"],
    },
    preparo: { pt: BATER_PT, es: BATER_ES },
  },
];
