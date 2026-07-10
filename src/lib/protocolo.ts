// ─── 7-Day Anti-Inflammatory Protocol (upsell) ──────────────────────────────
// Complete e-book content, English only.

export interface Refeicao {
  rotulo: string; // "Café da manhã" / "Almoço" / "Ceia"
  titulo: string;
  rendimento?: string;
  tempo?: string;
  ingredientes: string[];
  preparo: string[];
  substituicoes?: string;
  nota?: string;
}

export interface Dia {
  numero: number;
  nome: string;
  versiculo: string;
  versiculoRef: string;
  intro: string;
  aoAcordar: string;
  refeicoes: Refeicao[];
  hidratacao: string;
  ritual?: boolean;
  ciencia?: string;
  snacks?: string[];
}

export interface ItemFreio {
  nome: string;
  texto: string;
}

export interface SecaoCompras {
  titulo: string;
  itens: string[];
}

export interface FaseEspera {
  titulo: string;
  texto: string;
}

export interface Pergunta {
  q: string;
  a: string;
}

export interface ProtocoloContent {
  // Chrome
  nav: string;
  badge: string;
  unlocked: string;
  title: string;
  author: string;
  subtitle: string;
  back: string;
  diasTitulo: string;
  diasSub: string;
  guiaTitulo: string;
  guiaSub: string;
  voltarDias: string;
  comecarDia1: string;
  lerMais: string;
  lerMenos: string;

  // Seções (rótulos)
  secAbertura: string;
  secComoFunciona: string;
  secAguaJordao: string;
  secDias: string;
  secCompras: string;
  secGuia: string;
  secRitual: string;
  secEsperar: string;
  secErros: string;
  secMitos: string;
  secFaq: string;
  secFinal: string;
  diaLabel: string;

  // Rótulos internos
  lblIngredientes: string;
  lblPreparo: string;
  lblSubstituicoes: string;
  lblAoAcordar: string;
  lblHidratacao: string;
  lblPorque: string;
  lblCiencia: string;
  lblSnacks: string;
  lblDicaBeatriz: string;

  // Mitos
  mitos: ItemFreio[];

  // Abertura
  aberturaTitulo: string;
  aberturaTexto: string[];
  compromissos: { titulo: string; texto: string }[];
  aberturaAviso: string;
  aberturaAssinatura: string;

  // Como funciona
  comoFuncionaTexto: string[];
  fases: { titulo: string; texto: string }[];
  estrutura: { rotulo: string; texto: string }[];

  // Água do Jordão
  aguaVersiculo: string;
  aguaVersiculoRef: string;
  aguaTexto: string;
  aguaRendimento: string;
  aguaIngredientes: string[];
  aguaPreparo: string[];
  aguaPorque: string;
  aguaDica: string;

  // Dias
  dias: Dia[];

  // Lista de compras
  comprasIntro: string;
  comprasSecoes: SecaoCompras[];
  comprasDica: string;

  // Guia de alimentos
  guiaSoltamTitulo: string;
  guiaSoltam: ItemFreio[];
  guiaTravamTitulo: string;
  guiaTravam: ItemFreio[];
  guiaDica: string;

  // Ritual de drenagem
  ritualVersiculo: string;
  ritualVersiculoRef: string;
  ritualIntro: string;
  ritualPartes: {
    titulo: string;
    intro?: string;
    ingredientes?: string[];
    passos?: string[];
    fecho?: string;
  }[];
  ritualImportante: string;

  // O que esperar
  esperarFases: FaseEspera[];

  // Erros
  erros: ItemFreio[];

  // FAQ
  faq: Pergunta[];

  // Palavra final
  finalTexto: string[];
  finalAssinatura: string;
}

export const protocoloContent: ProtocoloContent = {
  nav: "Anti-Inflam.",
  badge: "Exclusive",
  unlocked: "✦ You unlocked this bonus",
  title: "7-Day Anti-Inflammatory Protocol",
  author: "By Beatriz Morales — Christian Nutritionist",
  subtitle: "The seven days that release your body's response.",
  back: "Back",
  diasTitulo: "Your 7 days",
  diasSub: "Tap a day to see the full menu.",
  guiaTitulo: "Complete guide",
  guiaSub: "Everything you need to know, when you need it.",
  voltarDias: "All days",
  comecarDia1: "Start with Day 1 →",
  lerMais: "Read more",
  lerMenos: "Read less",

  secAbertura: "Read this before you begin",
  secComoFunciona: "How the protocol works",
  secAguaJordao: "The Jordan Water",
  secDias: "The 7 days",
  secCompras: "Shopping list",
  secGuia: "Food guide",
  secRitual: "Secret bonus · Drainage Ritual",
  secEsperar: "What to expect in each phase",
  secErros: "Mistakes that stall the protocol",
  secMitos: "Myths and truths",
  secFaq: "Questions every woman asks",
  secFinal: "A final word",
  diaLabel: "Day",

  lblIngredientes: "Ingredients",
  lblPreparo: "Instructions",
  lblSubstituicoes: "Substitutions",
  lblAoAcordar: "On waking",
  lblHidratacao: "Hydration and movement",
  lblCiencia: "What's happening in your body today",
  lblSnacks: "If hunger hits: allowed snacks",
  lblPorque: "Why it works",
  lblDicaBeatriz: "Beatriz's Tip",

  aberturaTitulo: "Dear friend,",
  aberturaTexto: [
    "If you're reading this, it's because you decided not to wait. You decided your body deserves to respond now — not three months from now.",
    "This protocol is not a fad diet. It's not a sacrifice. It's not going hungry. It's a short, intentional period in which you give your body exactly what it needs to release the \"handbrake\" of accumulated inflammation — the kind that settles in after years of eating what the industry invented, and that no amount of willpower alone can overcome.",
    "Think of Naaman, the general who dipped seven times in the Jordan River. Not thirty dips. Not one. Seven, in the right order, in obedience. And his flesh was renewed like a child's. These are your seven dips.",
  ],
  compromissos: [
    {
      titulo: "Follow the order of the days",
      texto:
        "Each day was designed to prepare the next. The first ones cleanse, the middle ones drain, the last ones stabilize. Don't skip, don't mix them up, don't try to jump ahead.",
    },
    {
      titulo: "Start with the Jordan Water",
      texto:
        "Every morning. It's the gesture that opens the day and activates everything else. This step is never skipped.",
    },
    {
      titulo: "Drink water all day long",
      texto:
        "A lot of it. It seems contradictory, but the body only releases retained fluid when it receives clean fluid in abundance. Whoever drinks little swells more.",
    },
    {
      titulo: "Be gentle with yourself",
      texto:
        "There will be easier days and days when the body complains a little. That's normal, and I'll explain why on each day. Trust the process.",
    },
  ],
  aberturaAviso:
    "A note of caution: this protocol uses only natural, safe foods in balanced amounts. But if you have any health condition, are diabetic, hypertensive, pregnant, breastfeeding, or take ongoing medication, talk to your doctor before starting. This material is a food guide; it does not replace individual medical advice.",
  aberturaAssinatura: "With faith and care, Beatriz",

  comoFuncionaTexto: [
    "When you understand the \"why,\" you don't quit halfway. Accumulated chronic inflammation works like a handbrake pulled up in your body: it holds fluid in the tissues (the puffiness in your face, ankles, belly), locks the joints, and steals your energy, because the body spends resources trying to put out a silent fire that never stops.",
    "These seven days attack that in three phases:",
  ],
  fases: [
    {
      titulo: "Phase 1 — Preparation and cleansing (Days 1 and 2)",
      texto:
        "The body stops receiving what inflames it and begins to open the floodgates. You'll use the bathroom more often. It's the retained fluid starting to leave.",
    },
    {
      titulo: "Phase 2 — Intense drainage (Days 3 and 4)",
      texto:
        "The peak. This is when the body truly lets go. Day 3 brings the Drainage Ritual (your bonus) to amplify that moment. This is where you see the first real change in the mirror.",
    },
    {
      titulo: "Phase 3 — Stabilization (Days 5, 6, and 7)",
      texto:
        "The body reorganizes around the new pattern. Energy rises, sleep improves, and you prepare for the transition to the Biblical Nutrition Method, where you'll live from here on out.",
    },
  ],
  estrutura: [
    { rotulo: "On waking", texto: "the Jordan Water, on an empty stomach" },
    { rotulo: "Breakfast", texto: "light and anti-inflammatory, sustains without weighing you down" },
    { rotulo: "Lunch", texto: "the main meal, complete and colorful" },
    { rotulo: "Dinner", texto: "intentionally light, so the body rests and drains during sleep" },
    { rotulo: "Throughout the day", texto: "water, and an optional gentle walk" },
  ],

  aguaVersiculo: "...his flesh was restored like the flesh of a little child, and he was clean.",
  aguaVersiculoRef: "2 Kings 5:14",
  aguaTexto:
    "This is the drink that opens each of the seven days. Take it on an empty stomach, in slow sips, seated, before anything else — before coffee, before your phone, before the rush.",
  aguaRendimento: "1 serving · 5 minutes",
  aguaIngredientes: [
    "250 ml (1 cup) warm water (truly warm, never boiling)",
    "Juice of half a lemon",
    "½ inch fresh ginger, grated",
    "1 pinch of ground turmeric",
  ],
  aguaPreparo: [
    "Warm the water until it's warm to the touch (about 100°F — you can hold the glass comfortably).",
    "Grate the fresh ginger directly into the glass.",
    "Squeeze in the half lemon.",
    "Add the pinch of turmeric and stir well.",
    "Drink slowly, in sips, over about 5 minutes. Don't down it all at once.",
  ],
  aguaPorque:
    "Ginger and turmeric are the two most-studied anti-inflammatory foods in science. Warm lemon on an empty stomach stimulates digestion and helps the liver cleanse. On some days you'll add an extra ingredient to the base — it's always noted at the top of the day.",
  aguaDica:
    "If the ginger burns too much at first, start with less (a quarter inch) and build up over the week. Your palate adjusts, and soon you'll miss it if it's not there.",

  dias: [
    {
      numero: 1,
      nome: "The Preparation",
      versiculo: "Wash yourselves and be clean; remove the evil of your deeds.",
      versiculoRef: "Isaiah 1:16",
      intro:
        "Dear friend, today the body begins to understand that something has changed. Don't expect fireworks today — expect the beginning. Lightness comes slowly, and today you plant its seed. You may feel a little hungrier than usual. Drink water, breathe, and stay steady.",
      aoAcordar: "Jordan Water (base)",
      refeicoes: [
        {
          rotulo: "Breakfast",
          titulo: "Golden oatmeal with apple and cinnamon",
          rendimento: "1 serving · 10 minutes",
          ingredientes: [
            "3 tablespoons rolled oats",
            "200 ml (¾ cup) water (or 150 ml water + 50 ml plant milk)",
            "Half an apple, in small cubes",
            "1 generous pinch of cinnamon",
            "1 teaspoon honey",
            "5 walnuts, chopped",
            "1 pinch of turmeric (optional)",
          ],
          preparo: [
            "In a small pot, bring the oats and water to medium heat.",
            "Cook for 4 to 5 minutes, stirring, until thickened.",
            "In the last 2 minutes, stir in the cubed apple and the cinnamon.",
            "Turn off the heat, transfer to a bowl, and finish with the honey and chopped walnuts on top.",
          ],
          substituicoes:
            "No oats? Quinoa flakes or tapioca. No walnuts? Almonds, peanuts, or sunflower seeds. No apple? Pear or banana.",
        },
        {
          rotulo: "Lunch",
          titulo: "Herb chicken with steamed vegetables and brown rice",
          rendimento: "1 serving · 30 minutes",
          ingredientes: [
            "1 chicken breast fillet (about 5 oz)",
            "2 garlic cloves, crushed",
            "1 sprig rosemary (or 1 teaspoon dried)",
            "Juice of half a lemon",
            "1 cup broccoli florets",
            "1 carrot, sliced",
            "1 zucchini, in half-moons",
            "3 tablespoons cooked brown rice",
            "Extra virgin olive oil, salt, and pepper to taste",
          ],
          preparo: [
            "Season the chicken with garlic, rosemary, lemon juice, salt, and pepper. Let it take on flavor for 10 minutes.",
            "Heat a skillet with a drizzle of oil over medium-high heat. Cook the chicken for 5 to 6 minutes per side.",
            "Steam the vegetables for 6 to 8 minutes — firm and bright in color, never mushy.",
            "Build the plate: brown rice, vegetables, and sliced chicken.",
            "Finish with a generous drizzle of raw oil on top and a little more lemon.",
          ],
          substituicoes:
            "Don't eat chicken? White fish or boiled eggs. No brown rice? Quinoa or boiled potato.",
        },
        {
          rotulo: "Dinner",
          titulo: "Light zucchini and mint soup",
          rendimento: "1 serving · 20 minutes",
          ingredientes: [
            "2 medium zucchini, cubed",
            "Half an onion, chopped",
            "1 garlic clove",
            "400 ml (1⅔ cups) water",
            "Fresh mint leaves",
            "Olive oil, salt, and pepper to taste",
          ],
          preparo: [
            "Sauté the onion and garlic in a drizzle of oil until translucent.",
            "Add the zucchini and sauté for 2 minutes.",
            "Add the water, season, and cook for 12 minutes.",
            "Blend until smooth and creamy.",
            "Return to the pot, adjust the salt, and finish with chopped fresh mint and a drizzle of oil.",
          ],
          substituicoes: "No zucchini? Chayote or cauliflower work just as well.",
        },
      ],
      hidratacao:
        "Drink at least 2 liters (8 cups) of water throughout the day. If you can, take a gentle 15-minute walk — not to burn calories, but to get the circulation going and help the body open the floodgates.",
      ciencia:
        "Today the body gets the first shock of new information: less sodium, less sugar, less refined oil. In the first 24 hours it's still 'holding' fluid out of habit, so don't expect the de-bloating now — expect the switch to flip. The ginger and turmeric in the Jordan Water start lowering inflammation markers, and the fiber from the oats and vegetables begins to feed the gut. The mild hunger you feel is the body looking for its usual sugar and not finding it. It's normal, and it passes.",
      snacks: [
        "1 fruit (apple, pear, or a handful of grapes) with 3 walnuts",
        "Carrot or cucumber sticks with a drizzle of oil and lemon",
        "1 cup of ginger tea with mint, unsweetened",
      ],
    },
    {
      numero: 2,
      nome: "The Cleansing Begins",
      versiculo: "Wash yourselves and be clean; remove the evil of your deeds.",
      versiculoRef: "Isaiah 1:16",
      intro:
        "Today you may feel the body at work — more trips to the bathroom, less weight in the belly, maybe a slight headache in the late afternoon. Relax: it's the body freeing itself from the excess sodium and sugar it was used to. It's the discomfort of someone cleaning house, not someone getting sick. Drink more water. Tomorrow it passes.",
      aoAcordar: "Jordan Water (base) + 3 mint leaves, crushed",
      refeicoes: [
        {
          rotulo: "Breakfast",
          titulo: "Plain yogurt with chia, berries, and honey",
          rendimento: "1 serving · 5 minutes (+ 5 to rest)",
          ingredientes: [
            "1 container plain whole-milk yogurt, unsweetened (about 6 oz)",
            "1 tablespoon chia seeds",
            "1 handful of berries (fresh or frozen)",
            "1 teaspoon honey",
            "1 tablespoon unsweetened granola (optional)",
          ],
          preparo: [
            "In a bowl, stir the chia into the yogurt and let rest 5 minutes.",
            "Add the berries on top.",
            "Finish with the honey and, if you like, the granola.",
          ],
          substituicoes: "No berries? Any chopped fruit. No chia? Ground flaxseed.",
        },
        {
          rotulo: "Lunch",
          titulo: "Baked white fish with leafy salad and chickpeas",
          rendimento: "1 serving · 25 minutes",
          ingredientes: [
            "1 white fish fillet (tilapia, hake, or whiting — about 5 oz)",
            "Juice of half a lemon",
            "1 garlic clove, crushed",
            "1 sprig thyme or rosemary",
            "2 cups mixed greens",
            "3 tablespoons cooked chickpeas",
            "Half a tomato, cubed",
            "Half a cucumber, cubed",
            "Olive oil, salt, and pepper to taste",
          ],
          preparo: [
            "Preheat the oven to 400°F (200°C).",
            "Season the fish with lemon, garlic, salt, pepper, and the herb. Place on a tray with a drizzle of oil.",
            "Bake for 15 minutes, until the flesh flakes apart.",
            "Build the salad: greens, chickpeas, tomato, and cucumber. Season with oil, lemon, and salt.",
            "Serve the fish over or beside the salad.",
          ],
          substituicoes:
            "No fish? Grilled chicken or 2 boiled eggs. No chickpeas? Cooked lentils or white beans.",
        },
        {
          rotulo: "Dinner",
          titulo: "Light collard green soup",
          rendimento: "1 serving · 25 minutes",
          ingredientes: [
            "1 bunch collard greens (or cabbage), in very thin ribbons",
            "1 small potato, cubed",
            "Half an onion, chopped",
            "1 garlic clove",
            "400 ml (1⅔ cups) water",
            "Olive oil, salt, and pepper to taste",
          ],
          preparo: [
            "Sauté the onion and garlic in a drizzle of oil.",
            "Add the potato and water, cook for 15 minutes until soft.",
            "Blend and return to the pot.",
            "Stir in the very thinly sliced greens and cook just 3 minutes — they should stay bright green.",
            "Finish with oil and adjust the salt.",
          ],
          substituicoes: "The potato can be swapped for arracacha or half a cup of squash.",
        },
      ],
      hidratacao:
        "2 liters (8 cups) of water. If you crave something sweet (and you will today), don't fight it — eat a fruit or a date. Substituting is smarter than resisting.",
      ciencia:
        "The slight headache and sugar craving today have a name: withdrawal. Your brain was used to regular doses of sugar and sodium, which trigger the same reward circuits as an addictive substance. When you cut them, it protests for 24 to 48 hours — it's the peak of discomfort and also the clearest sign that it's working. The kidneys, now with less sodium, start releasing the retained fluid: that's why you're going to the bathroom more. Today's chia and yogurt stabilize blood sugar and hold off hunger.",
      snacks: [
        "1 plain whole-milk yogurt with cinnamon",
        "1 date or 2 prunes (calms the sweet craving instantly)",
        "1 handful of frozen berries",
      ],
    },
    {
      numero: 3,
      nome: "The Peak of Drainage",
      versiculo: "Wash, and you will be clean.",
      versiculoRef: "2 Kings 5:13",
      ritual: true,
      intro:
        "Dear friend, today is the most important day of the whole week. It's when the body truly lets go. That's why, tonight, you'll do the Day 3 Drainage Ritual — the bonus I saved for you (see the Ritual section). Most women wake up on Day 4 with a visibly lighter face. Today is the turning point.",
      aoAcordar: "Jordan Water (base) + 1 extra pinch of turmeric",
      refeicoes: [
        {
          rotulo: "Breakfast",
          titulo: "Morning green smoothie",
          rendimento: "1 serving · 5 minutes",
          ingredientes: [
            "1 kale leaf, stem removed",
            "Half a green apple",
            "Juice of 1 orange",
            "½ inch fresh ginger",
            "200 ml (¾ cup) cold water",
            "5 mint leaves",
            "1 teaspoon honey (optional)",
          ],
          preparo: [
            "Put all the ingredients in the blender.",
            "Blend for 1 minute, until smooth.",
            "Drink it right away, unstrained if you can (the fiber is part of the benefit).",
          ],
          substituicoes: "No kale? Spinach. No green apple? Regular apple or half a cucumber.",
        },
        {
          rotulo: "Lunch",
          titulo: "Quinoa bowl with roasted vegetables and shredded chicken",
          rendimento: "1 serving · 35 minutes",
          ingredientes: [
            "3 tablespoons cooked quinoa",
            "1 chicken breast fillet (5 oz), cooked and shredded",
            "Half a small squash, cubed",
            "Half a red onion, in wedges",
            "Half a bell pepper, in strips",
            "1 handful of arugula",
            "Olive oil, turmeric, salt, and pepper to taste",
            "Lemon juice",
          ],
          preparo: [
            "Preheat the oven to 400°F (200°C). Spread the squash, red onion, and bell pepper on a tray, drizzle with oil, salt, pepper, and a pinch of turmeric. Roast for 25 minutes.",
            "Cook the seasoned chicken in water or on a skillet, and shred it.",
            "Build the bowl: quinoa as the base, roasted vegetables, shredded chicken, and fresh arugula on top.",
            "Finish with raw oil and a squeeze of lemon.",
          ],
          substituicoes:
            "No quinoa? Brown rice. No chicken? Roasted chickpeas (a complete vegetarian version).",
        },
        {
          rotulo: "Dinner",
          titulo: "Roasted tomato and basil soup",
          rendimento: "1 serving · 30 minutes",
          ingredientes: [
            "4 ripe tomatoes, halved",
            "Half an onion",
            "1 garlic clove, unpeeled",
            "300 ml (1¼ cups) hot water",
            "Fresh basil leaves",
            "1 teaspoon honey (balances the acidity)",
            "Olive oil, salt, and pepper to taste",
          ],
          preparo: [
            "Preheat the oven to 400°F (200°C). Roast the tomatoes, onion, and unpeeled garlic, drizzled with oil, salt, and pepper, for 20 minutes.",
            "Squeeze the garlic out of its skin. Transfer everything to the blender with the hot water and half the basil. Blend.",
            "Return to the pot, add the honey, adjust the salt, and heat for 3 minutes.",
            "Serve with the rest of the fresh basil and a drizzle of oil.",
          ],
          substituicoes: "",
          nota: "Tonight: do the Day 3 Drainage Ritual (see the Ritual section).",
        },
      ],
      hidratacao:
        "2 to 2.5 liters (8 to 10 cups) of water today — it's drainage day, the body needs clean fluid to release the retained fluid. A gentle 20-minute walk, if possible, helps a lot today.",
      ciencia:
        "Today is the peak of drainage. With sodium low for two days, the body finally flips the hormonal switch that was holding water (aldosterone gives way) and starts eliminating the accumulated fluid for real. That's why the evening Drainage Ritual falls right here: the warmth of the foot bath dilates the vessels and the self-massage pushes the lymph upward, adding to the work the body is already doing inside. The morning green smoothie delivers chlorophyll, magnesium, and potassium — the trio that balances sodium and de-bloats. Drinking plenty of water today isn't contradictory: it's what gives the body permission to release the rest.",
      snacks: [
        "1 glass of natural coconut water (replenishes potassium)",
        "Cucumber and celery sticks with hummus",
        "1 orange or mandarin",
      ],
    },
    {
      numero: 4,
      nome: "The Stabilization",
      versiculo: "Those who hope in the Lord will renew their strength.",
      versiculoRef: "Isaiah 40:31",
      intro:
        "After yesterday's peak, today the body reorganizes. This is usually the morning of the first big surprise in the mirror — a slimmer face, less puffy eyes. Energy tends to rise, and many women say they slept through the whole night. You're watching the handbrake release.",
      aoAcordar: "Jordan Water (base)",
      refeicoes: [
        {
          rotulo: "Breakfast",
          titulo: "Scrambled eggs with tomato and sourdough bread",
          rendimento: "1 serving · 10 minutes",
          ingredientes: [
            "2 eggs",
            "1 tomato, seeded and cubed",
            "1 slice sourdough bread",
            "Oregano, salt, and pepper to taste",
            "Olive oil",
            "Chives or parsley, chopped (optional)",
          ],
          preparo: [
            "Lightly beat the eggs with salt and pepper.",
            "In a skillet with a drizzle of oil, sauté the tomato for 2 minutes.",
            "Add the eggs and stir over low heat until creamy (don't let them dry out).",
            "Finish with oregano and fresh herbs.",
            "Serve with the lightly toasted slice of bread.",
          ],
          substituicoes: "Don't eat eggs? Scrambled tofu with turmeric is very similar and nutritious.",
        },
        {
          rotulo: "Lunch",
          titulo: "Braised lentils with brown rice and carrot salad",
          rendimento: "1 serving · 25 minutes (with lentils already cooked)",
          ingredientes: [
            "4 tablespoons cooked lentils",
            "Half an onion, chopped",
            "1 garlic clove",
            "1 pinch of cumin",
            "2 tablespoons cooked brown rice",
            "1 carrot, grated",
            "Leafy greens to taste",
            "Olive oil, lemon, salt, and pepper",
          ],
          preparo: [
            "Sauté the onion and garlic in oil until lightly golden.",
            "Add the cooked lentils and cumin. Sauté for 3 minutes, adjusting the salt.",
            "Build the plate with brown rice, braised lentils, and a grated-carrot salad with greens.",
            "Season the salad with oil, lemon, and salt.",
          ],
          substituicoes: "No lentils? Beans or chickpeas. The carrot can be swapped for grated beet.",
        },
        {
          rotulo: "Dinner",
          titulo: "Creamy squash soup with ginger",
          rendimento: "1 serving · 25 minutes",
          ingredientes: [
            "300 g (10 oz) squash, cubed",
            "Half an onion",
            "½ inch fresh ginger",
            "350 ml (1½ cups) water",
            "Olive oil, salt, and pepper to taste",
            "Toasted pumpkin seeds to finish (optional)",
          ],
          preparo: [
            "Sauté the onion and ginger in a drizzle of oil.",
            "Add the squash and water, cook for 15 minutes until very soft.",
            "Blend until smooth and velvety.",
            "Return to the pot, adjust the salt, finish with oil and pumpkin seeds.",
          ],
          substituicoes: "The squash can be swapped for carrot or arracacha.",
        },
      ],
      hidratacao:
        "Keep the 2 liters (8 cups). Notice how thirst feels different when the body is truly hydrated — it stops storing water.",
      ciencia:
        "After yesterday's peak, today the body reorganizes into the new balance — and that's why the morning of Day 4 brings the first big surprise in the mirror. Inflammation dropped enough for the face to slim and the eyes to de-puff. Energy rises because blood sugar stopped doing a roller coaster: without the spikes and crashes, the body has steady fuel all day. Many women report sleeping through the whole night for the first time in months — better sleep is a direct consequence of less inflammation and stable blood sugar. Today's lentils and eggs sustain that energy with real protein.",
      snacks: [
        "1 boiled egg with a pinch of salt and pepper",
        "1 handful of almonds or walnuts",
        "Apple slices with cinnamon",
      ],
    },
    {
      numero: 5,
      nome: "Lightness Settles In",
      versiculo: "My people will be filled with my goodness, says the Lord.",
      versiculoRef: "Jeremiah 31:14",
      intro:
        "Dear friend, by now the swelling has eased quite a bit. Clothes start to fit differently. That's why today's menu becomes a little more generous: the body is already responding and deserves to be celebrated, not punished. Caring for yourself was never about deprivation. It's about choosing well.",
      aoAcordar: "Jordan Water (base) + 3 mint leaves",
      refeicoes: [
        {
          rotulo: "Breakfast",
          titulo: "Tapioca crepe filled with fresh cheese and tomato",
          rendimento: "1 serving · 10 minutes",
          ingredientes: [
            "1 egg",
            "2 tablespoons tapioca starch",
            "1 tablespoon water",
            "1 slice fresh white cheese",
            "Half a tomato, thinly sliced",
            "Oregano, salt, and oil to taste",
          ],
          preparo: [
            "In a bowl, whisk the egg with the tapioca starch, water, and a pinch of salt into a smooth batter.",
            "Heat a nonstick skillet with a drizzle of oil over medium heat.",
            "Pour in the batter, spread it well, and cook 2 minutes per side.",
            "Fill half with the cheese and tomato, sprinkle with oregano, fold in half, and serve.",
          ],
          substituicoes: "No white cheese? Ricotta or chickpea spread. No tomato? Sautéed spinach leaves.",
        },
        {
          rotulo: "Lunch",
          titulo: "Pan-seared fish with squash purée and steamed broccoli",
          rendimento: "1 serving · 30 minutes",
          ingredientes: [
            "1 fish fillet (5 oz)",
            "Juice of half a lemon",
            "1 garlic clove",
            "250 g (9 oz) squash, cubed",
            "1 cup broccoli florets",
            "Olive oil, nutmeg, salt, and pepper to taste",
          ],
          preparo: [
            "Season the fish with lemon, garlic, salt, and pepper. Set aside.",
            "Cook the squash in water until very soft (about 15 minutes). Drain and mash with a fork, adding oil, salt, and a pinch of nutmeg, into a purée.",
            "Steam the broccoli for 6 minutes.",
            "Sear the fish in a hot skillet with a drizzle of oil, 4 minutes per side.",
            "Build the plate: purée as the base, fish on top, broccoli on the side. Finish with raw oil.",
          ],
          substituicoes:
            "The squash purée can be swapped for potato or cauliflower purée. The fish can be chicken.",
        },
        {
          rotulo: "Dinner",
          titulo: "Warm chickpea salad",
          rendimento: "1 serving · 15 minutes",
          ingredientes: [
            "4 tablespoons cooked chickpeas (warm)",
            "Half a tomato, cubed",
            "Half a red onion, finely chopped",
            "1 tablespoon chopped fresh parsley",
            "1 teaspoon cumin",
            "Olive oil, lemon, salt, and pepper to taste",
          ],
          preparo: [
            "Gently warm the cooked chickpeas.",
            "In a bowl, mix the warm chickpeas with the tomato, red onion, and parsley.",
            "Season with oil, lemon, cumin, salt, and pepper.",
            "Mix well and serve still warm — the heat helps the chickpeas absorb the flavor better.",
          ],
          substituicoes: "The chickpeas can be swapped for warm lentils or white beans.",
        },
      ],
      hidratacao:
        "Keep the 2 liters (8 cups) of water. Today, try on that clothing that felt tight at the start of the week — just to feel, in your body, what's happening.",
      ciencia:
        "By now inflammation has eased quite a bit and the body has settled into cruising speed. The palate has started to retrain: foods that seemed 'bland' on Day 1 now have flavor, because your receptors are no longer saturated with sugar and sodium. That's why today's menu can be more generous without guilt — a body that responds deserves to be nourished, not punished. The tapioca crepe and chickpeas bring protein and fiber that keep you full for a long time. Eating enough is what prevents the rebound effect: deprivation breeds compensation, balance breeds constancy.",
      snacks: [
        "Small tapioca crepe with white cheese",
        "1 handful of crunchy roasted chickpeas",
        "1 seasonal fruit with peanut butter",
      ],
    },
    {
      numero: 6,
      nome: "Preparing for the New Life",
      versiculo: "See, I am doing a new thing; now it springs up.",
      versiculoRef: "Isaiah 43:19",
      intro:
        "Two days left, dear friend. Today an important realization arrives: this was never a temporary sacrifice that ends and returns everything to how it was. It was a new beginning. Your body has already learned the way. Today, as you cook, start thinking about how to carry this into your life after Day 7.",
      aoAcordar: "Jordan Water (base)",
      refeicoes: [
        {
          rotulo: "Breakfast",
          titulo: "Oatmeal with banana and cinnamon",
          rendimento: "1 serving · 10 minutes",
          ingredientes: [
            "3 tablespoons rolled oats",
            "200 ml (¾ cup) water or plant milk",
            "Half a banana, mashed",
            "1 generous pinch of cinnamon",
            "5 walnuts, chopped",
            "1 teaspoon honey (optional)",
          ],
          preparo: [
            "Cook the oats with the liquid over medium heat for 5 minutes, stirring.",
            "In the last 2 minutes, add the mashed banana and the cinnamon.",
            "Serve with the walnuts and, if you like, a drizzle of honey.",
          ],
          substituicoes: "The banana can be swapped for apple or pear. The oats can be swapped for quinoa flakes.",
        },
        {
          rotulo: "Lunch",
          titulo: "Mild coconut-curry chicken with brown rice",
          rendimento: "1 serving · 30 minutes",
          ingredientes: [
            "1 chicken breast fillet (5 oz), cubed",
            "1 teaspoon curry powder",
            "Half a teaspoon turmeric",
            "100 ml (⅓ cup) coconut milk",
            "Half an onion, chopped",
            "1 garlic clove",
            "Half a carrot, in small cubes",
            "Half a zucchini, cubed",
            "2 tablespoons cooked brown rice",
            "Oil, salt, and pepper to taste",
            "Cilantro or parsley to finish",
          ],
          preparo: [
            "Sauté the onion and garlic in oil until golden.",
            "Add the cubed chicken and sear for 5 minutes.",
            "Stir in the curry and turmeric, stirring for 1 minute to release the aroma.",
            "Add the carrot, zucchini, and coconut milk. Simmer over low heat for 10 minutes.",
            "Adjust the salt, finish with cilantro or parsley, and serve with the brown rice.",
          ],
          substituicoes:
            "The chicken can be swapped for firm fish or chickpeas. The coconut milk can be halved.",
        },
        {
          rotulo: "Dinner",
          titulo: "Mixed vegetable soup",
          rendimento: "1 serving · 25 minutes",
          ingredientes: [
            "1 carrot, cubed",
            "1 zucchini, cubed",
            "1 small chayote, cubed",
            "Half an onion",
            "1 garlic clove",
            "400 ml (1⅔ cups) water",
            "1 tablespoon fresh parsley",
            "Oil, salt, and pepper to taste",
          ],
          preparo: [
            "Sauté the onion and garlic in oil.",
            "Add all the vegetables and sauté for 3 minutes.",
            "Pour in the water, season, and cook for 15 minutes.",
            "Blend half the soup and return it to the pot — this gives it body while keeping chunks to chew.",
            "Finish with fresh parsley and oil.",
          ],
          substituicoes: "Use any vegetables you have at home — this soup is a healthy fridge clean-out.",
        },
      ],
      hidratacao:
        "2 liters (8 cups) of water. Today, mentally set aside (or write down) three recipes from the Biblical Nutrition Method you'll make next week. The transition begins in the head before it begins in the kitchen.",
      ciencia:
        "What happened in six days wasn't just de-bloating: you reprogrammed habits. The brain forms a new routine in one or two weeks of repetition, and you're already halfway there. The gut bacteria have changed too — fed on real fiber instead of sugar, the population that reduces inflammation grew, and you feel it in better digestion and less gas. Today's curry brings turmeric with good fat from the coconut milk and a pinch of pepper: the exact combination that multiplies the absorption of anti-inflammatory curcumin. Today the body already knows the way — it just needs you to decide to keep walking it.",
      snacks: [
        "1 cup of vegetable soup from dinner (make extra)",
        "1 handful of pumpkin or sunflower seeds",
        "1 banana with cinnamon",
      ],
    },
    {
      numero: 7,
      nome: "The Renewal",
      versiculo: "Jesus took the loaves, and having given thanks, distributed them.",
      versiculoRef: "John 6:11",
      intro:
        "The seventh dip, dear friend. Today you close the cycle. Stand in front of the mirror this morning and compare calmly: the woman of today and the woman of Day 1. It's not vanity — it's gratitude. Today the menu is the most abundant and beautiful of the week, because it's a day of celebration. You've earned it.",
      aoAcordar: "Complete Jordan Water (base + 1 pinch of turmeric + 3 mint leaves)",
      refeicoes: [
        {
          rotulo: "Breakfast",
          titulo: "Yogurt bowl with fruit, honey, and granola",
          rendimento: "1 serving · 5 minutes",
          ingredientes: [
            "1 container plain whole-milk yogurt, unsweetened",
            "Assorted chopped fruit (banana, strawberry, papaya, mango)",
            "1 tablespoon honey",
            "2 tablespoons unsweetened granola",
            "1 teaspoon chia seeds (optional)",
          ],
          preparo: [
            "In a pretty glass or bowl, put the yogurt as the base.",
            "Arrange the fruit on top, in colorful layers.",
            "Finish with the honey, the granola, and the chia.",
            "Eat calmly. Today is a day to savor, not to rush.",
          ],
          substituicoes: "Use the seasonal fruits you love most.",
        },
        {
          rotulo: "Lunch",
          titulo: "Baked salmon with colorful vegetables and quinoa",
          rendimento: "1 serving · 30 minutes",
          ingredientes: [
            "1 salmon portion (5 oz)",
            "Juice of half a lemon",
            "1 sprig dill (or rosemary)",
            "Half a red bell pepper, in strips",
            "Half a zucchini, in half-moons",
            "Half a carrot, sliced",
            "3 tablespoons cooked quinoa (or brown rice)",
            "Olive oil, salt, and pepper to taste",
          ],
          preparo: [
            "Preheat the oven to 400°F (200°C).",
            "Season the salmon with lemon, salt, pepper, and the dill.",
            "On a tray, spread the vegetables drizzled with oil and salt. Place the salmon on top.",
            "Bake for 18 to 20 minutes, until the salmon is opaque outside and the vegetables are soft.",
            "Serve with the quinoa on the side and a drizzle of raw oil over everything.",
          ],
          substituicoes:
            "No salmon? Any fish or a good chicken fillet. No quinoa? Brown rice or potato.",
        },
        {
          rotulo: "Dinner",
          titulo: "Daniel's Broth (light lentils)",
          rendimento: "1 serving · 30 minutes",
          ingredientes: [
            "3 tablespoons lentils",
            "1 carrot, in small cubes",
            "Half an onion, chopped",
            "1 garlic clove",
            "1 pinch of cumin",
            "400 ml (1⅔ cups) water",
            "1 tablespoon fresh parsley and cilantro",
            "Olive oil, salt, and pepper",
            "Lemon juice to finish",
          ],
          preparo: [
            "Sauté the onion and garlic in oil. Add the cumin.",
            "Add the lentils, carrot, and water. Cook for 25 minutes, until soft.",
            "Adjust the salt, finish with parsley, cilantro, and a squeeze of lemon.",
            "Serve hot.",
          ],
          substituicoes: "The lentils can be swapped for chickpeas or beans.",
          nota: "Daniel's Broth closes your week, connecting you to the story that started it all — the young man who, eating simply, was healthier than the kings.",
        },
      ],
      hidratacao:
        "Keep up the hydration. And today, before sleeping, say a prayer of gratitude for the body that responded. Tomorrow the new life begins — straight into the Biblical Nutrition Method.",
      ciencia:
        "On the seventh day, what you feel isn't just physical lightness — it's the proof of a principle: the body was designed to heal when you stop getting in its way. In one week, inflammation markers dropped, retained fluid left, blood sugar stabilized, sleep improved, and the palate was retrained. None of that was magic or deprivation: it was real food, water, and rest, in the right order. Today's salmon closes the week with the highest dose of omega-3 in the protocol. From tomorrow on, the secret is simply not to go back — and the Biblical Nutrition Method is the way to keep, forever, what you released in seven days.",
      snacks: [
        "Small yogurt bowl with fruit and honey",
        "1 handful of walnuts or almonds",
        "Fresh or dried figs with a drizzle of honey",
      ],
    },
  ],

  comprasIntro:
    "Organized by section of the market, so you buy everything at once, spend little, and don't waste. The amounts are for 1 person over the 7 days — multiply if someone joins you.",
  comprasSecoes: [
    {
      titulo: "Fruit",
      itens: [
        "Lemons — 8 to 10",
        "Apples — 3 (1 of them green)",
        "Bananas — 2",
        "Orange — 1",
        "Berries — 2 small containers (fresh or frozen)",
        "Assorted seasonal fruit for Day 7 — to taste",
      ],
    },
    {
      titulo: "Vegetables",
      itens: [
        "Fresh ginger — 1 large root",
        "Zucchini — 4",
        "Broccoli — 2 heads",
        "Carrots — 6",
        "Squash — 1 large piece",
        "Kale or cabbage — 2 bunches",
        "Tomatoes — 10",
        "Onions — 4",
        "Red onions — 2",
        "Red bell peppers — 2",
        "Chayote — 1",
        "Potato — 1 small",
        "Garlic — 1 head",
        "Cucumbers — 2",
        "Mixed greens (lettuce, arugula, spinach) — 3 bunches",
      ],
    },
    {
      titulo: "Fresh herbs",
      itens: [
        "Mint — 2 bunches",
        "Basil — 1 bunch",
        "Parsley — 1 bunch",
        "Cilantro — 1 bunch",
        "Rosemary — 1 bunch",
        "Thyme — 1 bunch",
        "Dill — 1 bunch",
      ],
    },
    {
      titulo: "Proteins",
      itens: [
        "Chicken breast fillet — 5 portions (about 1.6 lb)",
        "White fish (tilapia/whiting) — 2 fillets",
        "Salmon — 1 portion",
        "Eggs — 1 dozen",
      ],
    },
    {
      titulo: "Grains, cereals, and seeds",
      itens: [
        "Rolled oats — 1 package",
        "Quinoa — 1 small package",
        "Brown rice — 1 package",
        "Lentils — 1 package",
        "Chickpeas — dried or canned",
        "Tapioca starch — 1 small package",
        "Unsweetened granola — 1 package",
        "Walnuts — 1 small package",
        "Chia seeds — 1 small package",
        "Pumpkin seeds — optional",
      ],
    },
    {
      titulo: "Dairy",
      itens: [
        "Plain whole-milk yogurt, unsweetened — 4 to 5 containers",
        "Fresh white cheese — 1 small piece",
      ],
    },
    {
      titulo: "Pantry and seasonings",
      itens: [
        "Extra virgin olive oil — buy a good one",
        "Ground turmeric",
        "Ground cinnamon",
        "Cumin",
        "Curry powder",
        "Nutmeg",
        "Dried oregano",
        "Pure honey — 1 jar",
        "Coconut milk — 1 small can",
        "Sourdough bread — 1 loaf",
        "Salt and black pepper",
      ],
    },
    {
      titulo: "For the Drainage Ritual (Day 3)",
      itens: ["Coarse salt or Epsom salt — 1 small package"],
    },
  ],
  comprasDica:
    "Beatriz's tip: buy the vegetables and herbs at the start of the week, but if you can, make a quick second trip to the market on Day 4 to restock leaves and fresh herbs. Freeze any leftover protein in portions.",

  guiaSoltamTitulo: "The 5 that RELEASE the inflammation handbrake",
  guiaSoltam: [
    {
      nome: "Ginger",
      texto:
        "The most-studied anti-inflammatory root in nature. Gingerol acts directly on inflammatory processes. It's in your Jordan Water every day. Use it without fear, always.",
    },
    {
      nome: "Turmeric",
      texto:
        "Curcumin is one of the most potent natural anti-inflammatories. The body absorbs it much better combined with black pepper and a good fat — so whenever you use it, add a pinch of pepper and a drizzle of oil.",
    },
    {
      nome: "Extra virgin olive oil",
      texto:
        "It contains oleocanthal, which acts like a gentle anti-inflammatory. Always use it raw, drizzled over finished dishes — heat reduces its properties. A good oil is the most important investment in the kitchen.",
    },
    {
      nome: "Dark leafy greens",
      texto:
        "Kale, arugula, spinach. Rich in water, fiber, magnesium, and antioxidants. They help drain retained fluid and feed the good gut bacteria.",
    },
    {
      nome: "Fish, especially salmon",
      texto:
        "Omega-3 is the nutrient that most directly fights cellular inflammation. It's the chemical opposite of the industry's inflammatory oils. Keep the habit 2 to 3 times a week.",
    },
  ],
  guiaTravamTitulo: 'The 5 that KEEP the handbrake pulled (even if they seem "healthy")',
  guiaTravam: [
    {
      nome: "Artificial sweeteners",
      texto:
        'The "zero" soda, the "diet" juice, the sweetened "light" yogurt. They keep inflammation active and disrupt the gut. During the 7 days, eliminate them completely.',
    },
    {
      nome: 'Industrial "whole grain" breads and crackers',
      texto:
        'The word "whole grain" is misleading. Many have hidden sugar, refined oils, and additives. Only real sourdough bread passes in the protocol.',
    },
    {
      nome: 'Sweetened and "fruit" yogurts',
      texto:
        "Many have as much sugar as a dessert. Always use plain whole-milk yogurt with no sugar, and sweeten it yourself with fruit and honey.",
    },
    {
      nome: "Excess salt and processed meats",
      texto:
        "Excess sodium is the biggest culprit in fluid retention. Watch out for ham, sausage, salty snacks, bouillon cubes, and industrial sauces. Season with herbs, garlic, lemon, and oil.",
    },
    {
      nome: "Refined vegetable oils",
      texto:
        "Soybean, corn, canola, sunflower. Highly inflammatory, they're in most processed foods and fried foods. During the protocol, use only olive oil.",
    },
  ],
  guiaDica:
    "You don't need to memorize lists. The rule is simple: the closer to the way God created it, the better. If it came from a plant, an animal, the earth — it's fine. If it came from a factory, with a name you can't pronounce, be wary.",

  ritualVersiculo: "Wash, and you will be clean.",
  ritualVersiculoRef: "2 Kings 5:13",
  ritualIntro:
    "This is the resource I use personally, saved as a surprise for you. It's done just once, on the night of Day 3 — at the peak of drainage. It's three parts, in sequence, at bedtime. Set aside about 40 minutes just for yourself. Close the door, silence the phone. This is your moment.",
  ritualPartes: [
    {
      titulo: "Part 1 — The Drainage Tea (make it first)",
      ingredientes: [
        "300 ml (1¼ cups) water",
        "½ inch ginger, sliced",
        "3 sprigs fresh mint",
        "1 cinnamon stick",
        "Juice of half a lemon",
      ],
      passos: [
        "Boil the water with the ginger, cinnamon, and mint for 5 minutes.",
        "Turn off the heat, cover, and steep for 5 more minutes.",
        "Strain and add the lemon juice.",
        "Drink it warm, in slow sips, while you do Part 2.",
      ],
    },
    {
      titulo: "Part 2 — The Herbal Foot Bath",
      intro:
        "You'll need: 1 large basin with warm water, 2 tablespoons coarse salt (or Epsom salt), 1 handful of fresh rosemary and mint.",
      passos: [
        "Dissolve the salt in the warm water in the basin.",
        "Add the rosemary and mint, lightly pressing the leaves to release the aroma.",
        "Soak your feet for 15 to 20 minutes, while you drink the tea.",
        "Use the time to breathe deeply, pray, or simply stay in silence.",
      ],
    },
    {
      titulo: "Part 3 — The Drainage Self-Massage",
      intro:
        "After drying your feet well, with a bit of oil or lotion on your hands to glide:",
      passos: [
        "Start at the ankles and move up toward the knees, always from bottom to top, with gentle, firm pressure. Never top to bottom.",
        "Do 10 long strokes on each leg, from ankle to knee.",
        "Then, from the knee up to the groin, 10 more strokes on each leg.",
        "Finally, with both hands on your belly, make gentle clockwise circles — 20 times.",
      ],
      fecho:
        "Before lying down, drink one more glass of water. Sleep with your legs slightly elevated (a pillow under your feet). On the morning of Day 4, look at your face, ankles, and belly.",
    },
  ],
  ritualImportante:
    "This ritual can be repeated once a week, whenever you feel the body more swollen — after a trip, the holidays, a stressful stretch. It's yours forever.",

  esperarFases: [
    {
      titulo: "Days 1 and 2",
      texto:
        "You may feel a little hungrier, crave something sweet, and maybe get a slight headache on Day 2. It's the body weaning off the excess sugar and sodium. It's temporary and it's a good sign. Drink more water.",
    },
    {
      titulo: "Days 3 and 4",
      texto:
        "The peak of drainage. You'll use the bathroom more often. On the morning of Day 4, the first big surprise in the mirror usually arrives. Energy starts to rise.",
    },
    {
      titulo: "Days 5, 6, and 7",
      texto:
        'Lightness settled in, better sleep, more energy, clothes that fit differently. The feeling stops being "effort" and becomes "how did I live without this?".',
    },
  ],

  erros: [
    {
      nome: "Drinking too little water",
      texto:
        "Mistake number one. Without clean water in abundance, the body doesn't release retained fluid. Whoever drinks little swells more.",
    },
    {
      nome: "Skipping the Jordan Water",
      texto:
        "It opens the day and activates the cleansing metabolism. Skipping it takes the foundation out of the protocol.",
    },
    {
      nome: "Snacking between meals",
      texto:
        "The body needs intervals to drain. If hunger presses, drink water or an herbal tea, and eat a fruit if necessary.",
    },
    {
      nome: "Using too much salt",
      texto:
        "Sodium is the enemy of de-bloating. Season with herbs, garlic, lemon, and oil — the palate retrains in a few days.",
    },
    {
      nome: "Quitting on Day 2",
      texto:
        "Day 2 is usually the hardest. Whoever gets through Day 2 reaches Day 4 and sees the result. Hold firm — it's just one day.",
    },
  ],

  mitos: [
    {
      nome: '"Eating fat makes you gain weight and inflames."',
      texto:
        "Myth. Good fat — olive oil, avocado, nuts, omega-3 from fish — is actually anti-inflammatory and keeps you full. What inflames are the refined vegetable oils (soybean, corn, canola) and the fat hidden in ultra-processed foods. Don't fear the drizzle of raw oil: it's medicine.",
    },
    {
      nome: '"Fruit has too much sugar; better to cut it out."',
      texto:
        "Myth. The sugar in fruit comes wrapped in fiber, water, and antioxidants, so it enters the bloodstream slowly — nothing like pure refined sugar. Whole fruit is allowed and encouraged. The only caution is with excessive strained juice, which loses the fiber.",
    },
    {
      nome: '"Swelling is just fat; you just need to eat less."',
      texto:
        "Myth. Much of what you call 'fat' in the face, hands, and belly is fluid retained by inflammation and excess sodium. That's why de-bloating shows up in a few days when you cut ultra-processed food and drink more water — too fast to be real fat.",
    },
    {
      nome: '"A green-juice detox for days is what cleanses the body."',
      texto:
        "Myth. What 'detoxes' the body is the liver and kidneys, every day — they don't need a juice fast. What helps is stopping overloading them with what inflames and giving real food, with fiber and water. This protocol isn't a fast: you eat three complete meals.",
    },
    {
      nome: '"Skipping a meal speeds up the result."',
      texto:
        "Myth. Skipping meals usually leads to uncontrolled hunger afterward, an energy drop, and loss of muscle mass. The body de-bloats better with balanced meals and intervals — not with deprivation. Eating well is what retrains the metabolism.",
    },
    {
      nome: '"If I didn\'t lose weight on the scale, it didn\'t work."',
      texto:
        "Myth. The scale measures water, muscle, gut, and fat all together — it's the worst measure in the first days. Look at your face, your rings, how your clothes fall, your energy, and your sleep. The real result of the protocol is that the body gets unstuck; the number comes later.",
    },
  ],

  faq: [
    {
      q: "Can I drink coffee during the protocol?",
      a: "Yes, one a day, without sugar (or sweetened with a drizzle of honey). Just don't replace the Jordan Water with coffee — drink the water first, coffee after.",
    },
    {
      q: "What if I slip up at one meal?",
      a: "Don't quit over one slip. Slipped up at lunch? Get back on track at the next meal. The protocol only breaks if you use the mistake as an excuse to stop.",
    },
    {
      q: "Can I repeat the protocol afterward?",
      a: "Yes. It was made to be repeated whenever you feel your body heavy again. Many women do it once a month.",
    },
    {
      q: "Will I go hungry?",
      a: "No. You'll eat three complete meals a day. The difference is the quality of what goes in, not the quantity that's missing.",
    },
    {
      q: "Can my family do it?",
      a: "Yes, and it's great. Just multiply the amounts on the shopping list.",
    },
    {
      q: "I didn't see as much result as I expected. What do I do?",
      a: "Every body responds in its own time, and 7 days is a start. Review the mistakes that stall it — a smaller result is almost always tied to too little water or too much salt. And the deep result comes from continuing with the Biblical Nutrition Method.",
    },
  ],

  finalTexto: [
    "Dear friend, you completed the seven dips. What you did in these seven days wasn't a crash diet. You taught your body to work without the handbrake pulled. You released the inflammation that had been holding you back for years. And you proved to yourself that you can.",
    "Now comes the part that truly changes a life: continuity. The Protocol was the starting line. The Biblical Nutrition Method is the road — the way of living and eating that keeps your body light, energized, and at peace, forever.",
    "Starting tomorrow, open your Method and choose a recipe for breakfast. One step at a time, just as you did here. And whenever the body starts to feel heavy again, come back to the seven dips. They'll always be here, waiting for you.",
    "May God keep renewing your body, your energy, and your heart. You cared for the temple He entrusted to you. And that, dear friend, is a form of worship.",
  ],
  finalAssinatura: "With faith and care, Beatriz Morales — Christian Nutritionist",
};
