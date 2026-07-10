// ─── The Family Table Guide (upsell 2 — premium) ────────────────────────────
// How the whole family eats well without suspecting. English only.

export interface ParTexto {
  nome: string;
  texto: string;
}

export interface ReceitaMesa {
  titulo: string;
  tempo: string;
  rende: string;
  ingredientes: string[];
  preparo: string[];
}

export interface Categoria {
  id: string;
  titulo: string;
  desafio: string;
  suaVersao: string;
  versaoFamilia: ParTexto[];
  tecnica: string;
  porque: string;
  receitas: ReceitaMesa[];
}

export interface MotivoCrianca {
  titulo: string;
  solucao: string;
}

export interface Swap {
  de: string;
  para: string;
}

export interface PratoDomingo {
  titulo: string;
  texto: string;
  ingredientes: string[];
  preparo: string[];
}

export interface Fase {
  fase: string;
  titulo: string;
  itens: string[];
  texto: string;
}

export interface MesaContent {
  // Chrome
  badge: string;
  unlocked: string;
  title: string;
  author: string;
  subtitle: string;
  back: string;

  // Abertura
  aberturaTitulo: string;
  aberturaTexto: string[];
  compromissos: ParTexto[];
  aberturaAssinatura: string;

  // Lógica — 4 pilares
  secLogica: string;
  logicaIntro: string;
  pilares: ParTexto[];

  // Parte 1 — categorias
  secCategorias: string;
  categoriasSub: string;
  lblDesafio: string;
  lblSuaVersao: string;
  lblVersaoFamilia: string;
  lblTecnica: string;
  lblPorque: string;
  lblReceitas: string;
  lblIngredientes: string;
  lblPreparo: string;
  categorias: Categoria[];

  // Parte 2 — engana o paladar
  secPaladar: string;
  paladarIntro: string;
  saborTitulo: string;
  truquesSabor: ParTexto[];
  texturaTitulo: string;
  truquesTextura: ParTexto[];
  regraOuroTitulo: string;
  regraOuro: string;

  // Parte 3 — crianças
  secCriancas: string;
  criancasIntro: string;
  motivosTitulo: string;
  motivos: MotivoCrianca[];
  estrategiasTitulo: string;
  estrategias: ParTexto[];
  lancheTitulo: string;
  lancheIntro: string;
  swaps: Swap[];
  lancheRegra: string;

  // Parte 4 — mesa de domingo
  secDomingo: string;
  domingoIntro: string;
  pratos: PratoDomingo[];
  domingoOrientacao: string;

  // Bônus — transição invisível
  secBonus: string;
  bonusVersiculo: string;
  bonusIntro: string;
  fases: Fase[];
  regrasTitulo: string;
  regras: ParTexto[];

  // Palavra final
  secFinal: string;
  finalTexto: string[];
  finalAssinatura: string;

  // Guia chrome
  guiaTitulo: string;
  guiaSub: string;
  voltar: string;
}

export const mesaContent: MesaContent = {
  badge: "Premium Guide",
  unlocked: "✦ You unlocked The Family Table Guide",
  title: "The Family Table Guide",
  author: "By Beatriz Morales — Christian Nutritionist",
  subtitle: "How your whole family eats well — without suspecting a thing.",
  back: "Back",

  aberturaTitulo: "Dear friend,",
  aberturaTexto: [
    "Let me guess. You got excited about the Biblical Nutrition Method, felt the difference in your body, and then the thought arrived: how do I get my family to eat this way too? Cooking one thing for yourself and another for them is unsustainable.",
    "The truth no one tells you: your husband and your kids don't reject healthy food because it's healthy. They reject it because it was served in a way that gives the game away — bland, flavorless. The problem was never the ingredient. It was the presentation, the seasoning, and the technique.",
    "Here you'll learn to bring every principle of the Method to the table in a way that wins over the pickiest palate in the house. One single meal. One single pot. A whole family eating the same thing — and only you knowing what's behind it.",
    "In the Bible, the table was never a place of separation. In Acts, the Christians broke bread in their homes with gladness and simplicity of heart. This guide gives that back to your table.",
  ],
  compromissos: [
    {
      nome: "Don't announce the change",
      texto:
        'Don\'t walk in saying "now we\'re going to eat healthy." That trips everyone\'s alarm. Just cook — and let the flavor do the talking.',
    },
    {
      nome: "Start with what they already love",
      texto:
        "Don't impose new, strange dishes. Take the household favorites and improve them from the inside. Easier, and it works better.",
    },
    {
      nome: "Be patient with the palate",
      texto:
        "A palate used to ultra-processed food takes weeks to retrain. Move at the household's pace. The secret bonus is the strategy for the hard cases.",
    },
  ],
  aberturaAssinatura: "With faith and care, Beatriz",

  secLogica: "Why this works",
  logicaIntro:
    "The whole strategy rests on four pillars. Understand the principle before the techniques.",
  pilares: [
    {
      nome: "1 · Start from the base they already accept",
      texto:
        "Every family has already-approved dishes (chicken and rice, meat and potatoes, Sunday pasta). Instead of fighting that repertoire, the Family Table improves it from the inside. The dish looks the same — but the version that reaches the table is the healthy one.",
    },
    {
      nome: "2 · Flavor comes from seasoning, not from processed products",
      texto:
        "Fresh herbs, garlic, olive oil, lemon, spices, and the right cooking time deliver a flavor just as intense — and far deeper. You don't serve bland food. You serve real food, well seasoned.",
    },
    {
      nome: "3 · Texture is half the battle",
      texto:
        "Much of the rejection (especially from kids) isn't about flavor — it's about texture. Soft, watery vegetables get rejected instantly. The same vegetable, crispy and golden, gets devoured.",
    },
    {
      nome: "4 · The transition is invisible and gradual",
      texto:
        "You don't change everything at once. You change one ingredient per week, without anyone noticing. By the time the family realizes it, they've been eating differently for a month — and enjoying it. It's the essence of the secret bonus.",
    },
  ],

  secCategorias: "The 5 family adaptations",
  categoriasSub:
    "Tap a category: the healthy base is the same, only the way of serving changes.",
  lblDesafio: "The challenge",
  lblSuaVersao: "Your version",
  lblVersaoFamilia: "The family's version",
  lblTecnica: "The key technique",
  lblPorque: "Why it works (the science)",
  lblReceitas: "Complete recipes",
  lblIngredientes: "Ingredients",
  lblPreparo: "Instructions",
  categorias: [
    {
      id: "lentilhas",
      titulo: "Lentils and grains",
      desafio:
        'Lentils and chickpeas are among the most nutritious and biblical foods there are — but served as "bland brown soup," they get rejected on sight.',
      suaVersao: "Simple cooked lentils, with onion and herbs, in a bowl.",
      versaoFamilia: [
        {
          nome: 'Turn them into "meatballs" or burgers',
          texto:
            "Cooked and drained lentils, mashed with seasonings, an egg, and oat flour, shaped into balls or patties and baked until golden. The kid eats with their hands, the husband thinks it's a meatball.",
        },
        {
          nome: "Hide them in what's already approved",
          texto:
            "Cooked lentils processed into the meat sauce for pasta. They disappear into the texture, thicken it, and double the nutritional value of the favorite dish.",
        },
        {
          nome: "Make them a filling",
          texto:
            "Lentils with cumin and tomato become a filling for crepes, pies, pita. The familiar format welcomes the new ingredient.",
        },
      ],
      tecnica:
        'Always brown the onion slowly first. The caramelized-onion base completely masks the "grain taste" that some people reject.',
      porque:
        "Lentils and chickpeas are complete plant protein when combined with a grain (rice, bread) — they form all the amino acids the body needs, without the inflammatory fat of processed meat. They're rich in soluble fiber, which feeds the good gut bacteria and keeps blood sugar stable (without the spike-and-crash that makes kids hungry and irritable). Their plant iron absorbs better alongside vitamin C — that's why a squeeze of lemon at the end isn't just flavor, it's nutrition. In the Bible, it was with a plate of lentils that Jacob fed Esau (Genesis 25): simple, cheap, plentiful food that sustains a whole household.",
      receitas: [
        {
          titulo: "Golden lentil meatballs (baked)",
          tempo: "35 minutes",
          rende: "4 servings (≈ 20 meatballs)",
          ingredientes: [
            "2 cups cooked, well-drained lentils",
            "1 medium onion, grated and sautéed until golden",
            "2 garlic cloves, crushed",
            "1 egg",
            "4 tablespoons oat flour (or whole wheat breadcrumbs)",
            "2 tablespoons chopped parsley",
            "1 teaspoon cumin",
            "1 teaspoon sweet paprika",
            "Salt, pepper, and olive oil",
          ],
          preparo: [
            "Preheat the oven to 400°F (200°C) and line a baking sheet with parchment.",
            "Mash the lentils with a fork into a coarse paste (leave some pieces for texture).",
            "Mix in the golden onion, garlic, egg, flour, parsley, and seasonings. The mixture should be moldable — if it's soft, add 1 more tablespoon of flour.",
            "Shape walnut-sized balls, place on the sheet, and brush with oil.",
            "Bake 25 minutes, turning halfway, until golden outside.",
            "Serve with homemade tomato sauce over pasta, or in bread as a 'meatball.'",
          ],
        },
        {
          titulo: "Chickpea and carrot burger",
          tempo: "30 minutes",
          rende: "6 burgers",
          ingredientes: [
            "2 cups cooked chickpeas",
            "1 medium carrot, finely grated",
            "Half an onion, grated",
            "1 egg",
            "5 tablespoons rolled oats",
            "1 teaspoon cumin",
            "1 teaspoon turmeric",
            "Cilantro or parsley to taste, salt, and oil",
          ],
          preparo: [
            "Process the chickpeas with the egg into a coarse paste.",
            "Mix in the carrot, onion, oats, and seasonings. Let rest 10 minutes (the oats absorb moisture and bind).",
            "Shape patties about ½ inch thick.",
            "Sear in a skillet with a drizzle of oil, 4 minutes per side, OR bake at 400°F (200°C) for 20 minutes.",
            "Build on sourdough bread with greens, tomato, and a lemon-yogurt sauce.",
          ],
        },
      ],
    },
    {
      id: "peixes",
      titulo: "Fish",
      desafio:
        'Many families wrinkle their noses: "strong smell," "full of bones," "tastes fishy." But fish is one of the most anti-inflammatory proteins there is.',
      suaVersao: "Baked fish fillet with oil, lemon, and herbs.",
      versaoFamilia: [
        {
          nome: "Bread it in the oven",
          texto:
            'Fish dipped in egg and then in whole wheat breadcrumbs with cheese and herbs, baked until crispy. It becomes "breaded fish" — no frying and no ultra-processed food.',
        },
        {
          nome: "Turn it into fingers",
          texto:
            'Cut into strips, season, bread, and bake. Serve with a lemon-yogurt dipping sauce. It becomes a snack, not "a fish dinner."',
        },
        {
          nome: "Disguise it in the sauce",
          texto:
            'Flaked fish in homemade tomato sauce, over pasta or rice, loses the "plain fish" look.',
        },
      ],
      tecnica:
        "Lemon and fresh herbs (dill and parsley) eliminate the strong smell. Season ahead and never overcook — dry fish is what earns the bad reputation.",
      porque:
        "Fish is the most anti-inflammatory protein on the table thanks to omega-3 (EPA and DHA), which the body uses to 'switch off' cellular inflammation — the chemical opposite of the soybean and corn oils in ultra-processed food. DHA is literally raw material for a child's developing brain, which is why fish 2 to 3 times a week is one of the best habits a family can have. The 'fishy smell' that turns people away comes from oxidation when fish is old or overcooked — fresh fish, seasoned with lemon and baked just right, doesn't have it. Fish is a deep symbol in Scripture: from the disciples' fishing to the multiplication that fed the multitude.",
      receitas: [
        {
          titulo: "Oven-breaded fish (no frying)",
          tempo: "25 minutes",
          rende: "4 servings",
          ingredientes: [
            "4 white fish fillets (tilapia, hake, or whiting)",
            "1 beaten egg",
            "1 cup whole wheat breadcrumbs",
            "4 tablespoons grated Parmesan",
            "1 teaspoon oregano",
            "Zest of half a lemon",
            "Juice of half a lemon, salt, pepper, and oil",
          ],
          preparo: [
            "Preheat the oven to 425°F (220°C). Season the fillets with lemon, salt, and pepper.",
            "Mix the breadcrumbs, Parmesan, oregano, and lemon zest on a plate.",
            "Dip each fillet in the egg, then in the crispy mixture, pressing well.",
            "Place on a parchment-lined tray and drizzle with oil.",
            "Bake 15 to 18 minutes, until the crust is golden. It becomes 'breaded fish' the kid eats with their hands.",
          ],
        },
        {
          titulo: "Fish fingers with yogurt sauce",
          tempo: "20 minutes",
          rende: "4 servings (snack)",
          ingredientes: [
            "500 g (1 lb) fish fillet, in strips",
            "1 egg + half a cup of whole wheat breadcrumbs with herbs",
            "For the sauce: 1 container plain yogurt, juice of half a lemon, 1 tablespoon chopped parsley, salt",
            "Oil, salt, and pepper",
          ],
          preparo: [
            "Season the strips with salt, pepper, and a little lemon.",
            "Bread in egg and breadcrumbs and bake at 425°F (220°C) for 12 to 15 minutes (or sear quickly in a skillet with oil).",
            "Mix the yogurt sauce ingredients.",
            "Serve the fingers with the dipping sauce — it becomes a household snack, not 'a fish dinner.'",
          ],
        },
      ],
    },
    {
      id: "legumes",
      titulo: "Vegetables",
      desafio:
        "The biggest battlefield, especially with kids. Poorly prepared vegetables are the most rejected food in the world.",
      suaVersao: "Steamed vegetables, with oil and salt.",
      versaoFamilia: [
        {
          nome: "Roast, don't boil in water",
          texto:
            'Oven-roasted vegetables with oil come out golden, crispy, and sweet. Roasted carrot, zucchini, squash, and broccoli get devoured even by whoever "doesn\'t eat vegetables."',
        },
        {
          nome: "Grate them and hide them",
          texto:
            "Finely grated carrot, zucchini, and beet disappear into sauces, cakes, crepes, meatballs, and rice. The family eats vegetables without seeing a single piece.",
        },
        {
          nome: "Turn them into velvety soup",
          texto:
            "Blended into a creamy soup, finished with oil, they lose the texture that scares people and gain the creaminess that comforts.",
        },
        {
          nome: 'Transform them into "fries"',
          texto:
            'Zucchini, carrot, and squash cut into sticks, seasoned and roasted until golden, become "the household fries."',
        },
      ],
      tecnica:
        "Browning is everything. Vegetables roasted until golden develop natural sugar (caramelization) that transforms the flavor. Boiled in water, they lose color, flavor, and texture.",
      porque:
        "Colorful vegetables carry the phytochemicals that fight inflammation — the red of tomato (lycopene), the orange of carrot and squash (beta-carotene), the dark green of collards (lutein and magnesium). The more colors on the plate, the broader the antioxidant shield. Their fiber is 'food' for the good gut bacteria, and a balanced gut means less inflammation throughout the body and even a better mood. The secret is the way of preparing them: boiling in water throws away nutrients and color; roasting or sautéing until golden preserves everything and creates the natural sugar (caramelization) that makes even whoever 'doesn't eat vegetables' devour them. Eating what the earth gives, in variety, is returning to the table of Eden — 'every plant yielding seed' (Genesis 1:29).",
      receitas: [
        {
          titulo: "Crispy roasted vegetable sticks",
          tempo: "30 minutes",
          rende: "4 servings",
          ingredientes: [
            "2 carrots, in sticks",
            "1 zucchini, in sticks",
            "Half a squash, in sticks",
            "2 tablespoons olive oil",
            "1 teaspoon sweet paprika",
            "Half a teaspoon garlic powder",
            "Salt and oregano",
          ],
          preparo: [
            "Preheat the oven to 425°F (220°C).",
            "Toss all the sticks with the oil and seasonings in a bowl, until well coated.",
            "Spread on a tray in a single layer (don't crowd — otherwise they steam instead of browning).",
            "Bake 22 to 25 minutes, turning halfway, until the tips are golden and crispy.",
            "Serve as 'household fries,' with yogurt sauce or hummus for dipping.",
          ],
        },
        {
          titulo: "Tomato sauce with hidden vegetables",
          tempo: "30 minutes",
          rende: "sauce for 4-6 servings of pasta",
          ingredientes: [
            "6 ripe tomatoes (or 1 can of peeled tomatoes)",
            "1 carrot, finely grated",
            "1 zucchini, finely grated",
            "1 onion and 3 garlic cloves",
            "1 pinch of honey (balances the acidity)",
            "Fresh basil, oil, and salt",
          ],
          preparo: [
            "Brown the onion and garlic in oil, unhurried.",
            "Add the grated carrot and zucchini and sauté 5 minutes — they gradually vanish into the texture.",
            "Stir in the chopped tomatoes, honey, and salt. Simmer over low heat 20 minutes.",
            "Blend everything smooth (so no one sees the vegetables).",
            "Finish with basil and a drizzle of raw oil. The family eats a whole serving of vegetables without noticing.",
          ],
        },
      ],
    },
    {
      id: "paes",
      titulo: "Breads and sourdough",
      desafio:
        "The family is addicted to soft, white factory bread. Denser sourdough bread can feel unfamiliar at first.",
      suaVersao: "Plain sourdough bread, sliced.",
      versaoFamilia: [
        {
          nome: "Start with what looks like a treat",
          texto:
            "Use the bread for what they already love: toast with oil and herbs, mini pizzas on the slice, stuffed rolls. The familiar format welcomes it.",
        },
        {
          nome: "Make the sweet afternoon roll",
          texto:
            "Bread lightly sweetened with honey and cinnamon, served warm at snack time, wins the kids over and replaces store-bought cake.",
        },
        {
          nome: "Gradual color transition",
          texto:
            "Start by mixing white and whole wheat flour half and half, increasing the whole wheat over the weeks. The palate adjusts without noticing.",
        },
      ],
      tecnica:
        "Warm bread wins anyone over. Always serve it slightly warm, with a good oil or homemade spread. The warmth and the aroma do half the work.",
      porque:
        "Factory bread is soft because it contains sugar, refined oil, and additives that speed up production — and that's exactly what inflames and hooks you. Sourdough uses only flour, water, and salt, slowly fermented by wild bacteria and yeasts. That long fermentation 'pre-digests' part of the gluten and starch, lowers the glycemic index (no sugar spike), and produces acids the gut loves. It's the same principle as the bread that sustained whole peoples in Scripture: simple, living, made with time. The transition works best through color: start half whole wheat, half white, and darken it little by little — the palate keeps up without rebelling.",
      receitas: [
        {
          titulo: "Mini pizzas on a slice of bread",
          tempo: "15 minutes",
          rende: "4 servings",
          ingredientes: [
            "4 slices sourdough bread",
            "Homemade tomato sauce (from the hidden-vegetables recipe)",
            "White cheese or mozzarella, thinly sliced",
            "Oregano, oil, and basil leaves",
            "Optional: tomato slices, corn, shredded chicken",
          ],
          preparo: [
            "Preheat the oven to 400°F (200°C).",
            "Spread a tablespoon of tomato sauce on each slice of bread.",
            "Top with the cheese and whatever the family wants.",
            "Sprinkle with oregano and drizzle with oil.",
            "Bake 8 to 10 minutes, until the cheese melts. Serve warm — it becomes a healthy 'household pizza.'",
          ],
        },
        {
          titulo: "Sweet afternoon roll with honey and cinnamon",
          tempo: "15 minutes",
          rende: "4 servings",
          ingredientes: [
            "4 slices sourdough bread",
            "1 tablespoon honey",
            "1 teaspoon cinnamon",
            "1 tablespoon butter (or mild oil)",
            "Optional: thin banana or apple slices",
          ],
          preparo: [
            "Heat a skillet over medium heat with the butter.",
            "Brown the bread slices on both sides until lightly crispy.",
            "Spread the honey and sprinkle the cinnamon while still hot.",
            "If you like, top with thinly sliced banana or apple.",
            "Serve warm at snack time — it replaces store-bought cake and wins the kids over.",
          ],
        },
      ],
    },
    {
      id: "sobremesas",
      titulo: "Desserts",
      desafio:
        "The family is addicted to refined sugar. Cutting out sweets all at once breeds rebellion.",
      suaVersao: "Fruit with honey, desserts sweetened with dates.",
      versaoFamilia: [
        {
          nome: "Use natural sweetness in the form they already like",
          texto:
            "Mashed banana with cinnamon, baked, becomes a warm dessert. Baked apple with honey and walnuts looks like a tart. Blended, frozen fruit becomes homemade ice cream.",
        },
        {
          nome: "Hide the vegetable in the dessert",
          texto:
            "Carrot cake, beet-and-cocoa cake, squash brownie — sweetened with honey or dates. The kid eats vegetables thinking it's dessert.",
        },
        {
          nome: 'Make the household "truffle"',
          texto:
            "Dates processed with cocoa and nut butter become a little rolled treat that replaces the store-bought chocolate, with no refined sugar.",
        },
      ],
      tecnica:
        'Never announce "it\'s sugar-free." Serve it as a normal dessert. The sweetness of fruit and dates satisfies — but if you warn people it\'s "healthy" first, the brain has already decided it won\'t like it.',
      porque:
        "Refined sugar enters the bloodstream pure and fast, giving an energy spike followed by the crash (which breeds more hunger, irritability, and the cycle of addiction). The natural sweetness of fruit and dates comes 'wrapped' in fiber, which lets the sugar enter slowly — satisfying without the roller-coaster effect. The date, besides sweetening, brings potassium, magnesium, and iron; baked banana and apple concentrate their sweetness with heat, without needing a single gram of factory sugar. And there's a hidden advantage: when you sweeten a cake with a vegetable (carrot, beet, squash), the kid eats a serving of fiber and antioxidants thinking it's a treat. God celebrated sweetness — 'eat honey, my son, for it is good' (Proverbs 24:13) — the point is to trade dead sweetness for living sweetness.",
      receitas: [
        {
          titulo: "Date and cocoa truffles",
          tempo: "15 minutes (+ 20 in the fridge)",
          rende: "≈ 15 truffles",
          ingredientes: [
            "1 cup pitted dates",
            "3 tablespoons 100% cocoa powder",
            "2 tablespoons peanut or nut butter",
            "1 pinch of salt",
            "Cocoa or shredded coconut for coating",
          ],
          preparo: [
            "If the dates are dry, soak them in hot water 10 minutes and drain.",
            "Process the dates, cocoa, nut butter, and salt into a sticky mass.",
            "Refrigerate 20 minutes to firm up.",
            "Roll into balls and coat in cocoa or shredded coconut.",
            "Replaces the party chocolate with no refined sugar — no one notices the difference.",
          ],
        },
        {
          titulo: "Baked apple with honey, cinnamon, and walnuts",
          tempo: "30 minutes",
          rende: "4 servings",
          ingredientes: [
            "4 apples",
            "2 tablespoons honey",
            "1 teaspoon cinnamon",
            "4 tablespoons chopped walnuts",
            "Optional: plain yogurt to serve",
          ],
          preparo: [
            "Preheat the oven to 350°F (180°C). Core the apples without cutting all the way through (forming a 'little basket').",
            "Fill each apple with walnuts, a drizzle of honey, and cinnamon.",
            "Place on a tray with a finger of water in the bottom.",
            "Bake 25 minutes, until the apple is soft and fragrant.",
            "Serve warm, with a spoonful of yogurt on top. It looks like a restaurant tart.",
          ],
        },
      ],
    },
  ],

  secPaladar: "Fool the Palate",
  paladarIntro:
    "Your toolbox. Flavor and texture tricks that turn healthy food into irresistible food. Memorize three or four and you'll never serve a bland dish again.",
  saborTitulo: "FLAVOR tricks",
  truquesSabor: [
    {
      nome: "Slowly browned onion and garlic",
      texto:
        'Almost every savory dish starts better with onion sautéed slowly, over low heat, until golden and sweet. It gives a depth that disguises any "strange" ingredient. Never rush that step.',
    },
    {
      nome: "The final 'salt' is acid",
      texto:
        'When it seems like something\'s "missing," it\'s almost never more salt — it\'s acidity. A squeeze of lemon or a splash of apple cider vinegar at the end wakes up the whole flavor.',
    },
    {
      nome: "The natural umami layer",
      texto:
        "Cooked ripe tomato, browned mushrooms, grated aged cheese, roasted garlic. Add one of those layers and the dish gains the body that hooks you.",
    },
    {
      nome: "The good fat that gives pleasure",
      texto:
        "Raw olive oil finishing the dish delivers the pleasure that makes the family want seconds — and it's anti-inflammatory. Don't skimp on the final drizzle.",
    },
    {
      nome: "Fresh herbs instead of powdered seasoning",
      texto:
        "Fresh parsley, cilantro, mint, basil, and chives at the end bring a freshness and aroma no powdered seasoning can reach. The cheapest secret in the kitchen.",
    },
    {
      nome: "The sweetness that balances",
      texto:
        'A pinch of honey or caramelized onion in the tomato sauce cuts the acidity and leaves the sauce "round," like a restaurant\'s.',
    },
  ],
  texturaTitulo: "TEXTURE tricks",
  truquesTextura: [
    {
      nome: "Brown it to create crunch",
      texto:
        "Roast vegetables, grains, and proteins until browned at the edges. The contrast between the crispy outside and the soft inside makes the food get devoured.",
    },
    {
      nome: "Process to hide",
      texto:
        "Vegetables processed or grated very fine disappear into sauces, doughs, meatballs, and cakes. When the texture disappears, the rejection disappears with it.",
    },
    {
      nome: "Bread it in the oven instead of frying",
      texto:
        "The breaded, baked crust delivers the frying experience without the inflammatory oil. Use whole wheat breadcrumbs with cheese and herbs.",
    },
    {
      nome: "The cream that comforts",
      texto:
        "Creamy soups, purées, and sauces welcome the palate and disguise vegetables that would be rejected in pieces. Blend well and finish with oil.",
    },
    {
      nome: "The contrast on the plate",
      texto:
        "A plate with only one texture gets tiring. Combine creamy with crunchy: purée with toasted seeds, soup with sourdough croutons.",
    },
  ],
  regraOuroTitulo: "The golden rule",
  regraOuro:
    'Never announce that the food is "healthy," "fit," "diet," or "sugar-free" before serving. The brain decides whether it will like it before tasting, based on what you tell it. Serve it as normal, delicious food. Let them love it first. Praise comes before the reveal.',

  secCriancas: "The Kids' Notebook",
  criancasIntro:
    "Getting a child to eat real food doesn't have to be war. Most of the rejection isn't about the food — it's about the form, the presentation, and the pressure.",
  motivosTitulo: "Why the child rejects (and what to do)",
  motivos: [
    {
      titulo: "Rejection by texture",
      solucao:
        "Kids are sensitive to soft, watery textures. Offer it crispy, dry, in sticks, or breaded in the oven. The same vegetable they spit out boiled, they eat roasted.",
    },
    {
      titulo: "Rejection by appearance",
      solucao:
        'Strange color and visible pieces trigger the "I don\'t want it." Hide it (grated in sauces and doughs) or make it fun (shapes, bright colors, faces on the plate).',
    },
    {
      titulo: "Rejection by pressure",
      solucao:
        "The more you insist, the more the child associates the food with something bad. Offer it without pressure, over and over. They may need to see the food 8 to 15 times before accepting it. Patience wins.",
    },
  ],
  estrategiasTitulo: "The practical strategies",
  estrategias: [
    {
      nome: "Hide it in the favorites",
      texto:
        'Carrot and zucchini in the pasta sauce, lentils in the burger, cauliflower in the purée, spinach in the pancake ("Hulk pancake").',
    },
    {
      nome: "Let the child take part",
      texto:
        "A child eats what they help make. Let them wash, mix, build the plate. Involvement breaks down resistance.",
    },
    {
      nome: "Give them fun names",
      texto:
        '"Little trees" (broccoli), "magic sticks" (roasted carrot), "fruit ice cream" (blended frozen banana).',
    },
    {
      nome: "Use a dipping sauce",
      texto:
        "Homemade yogurt, mild hummus, tomato sauce — and vegetable sticks become a game, not an obligation.",
    },
    {
      nome: "Serve a little, without pressure",
      texto:
        "A small portion beside what they already eat, without forcing. The child tries it out of curiosity; acceptance grows over time.",
    },
    {
      nome: "Be the example at the table",
      texto:
        "The child copies what they see. If you eat the vegetables with pleasure, they'll want to do the same. The family table is the best classroom.",
    },
  ],
  lancheTitulo: "The afternoon snack and the lunchbox",
  lancheIntro:
    "The weak spot is usually the lunchbox. Substitute little by little — never remove without replacing:",
  swaps: [
    { de: "Filled cookie", para: "Sourdough bread with homemade spread, or banana cake" },
    { de: "Juice box", para: "Chopped fruit or fresh juice" },
    { de: "Bag of snacks", para: "Crunchy roasted chickpeas, or roasted vegetable chips" },
    { de: "Candy and sweets", para: "Stuffed date, dried fruit, date-and-cocoa treat" },
  ],
  lancheRegra:
    "The rule: never remove without replacing. Every time you take away a processed item, put a delicious homemade version in its place. The child doesn't feel they lost something — they feel they gained.",

  secDomingo: "The Sunday Table",
  domingoIntro:
    "Biblical dishes that impress even the pickiest person — and that no one imagines are healthy. Show, without a word, that real food can be the best on the table.",
  pratos: [
    {
      titulo: "Lamb (or roast) with field herbs",
      texto:
        "The centerpiece of the biblical feast. Meat roasted slowly with garlic, rosemary, thyme, mint, and oil, bathed in its own juices. The house fills with the aroma and the meat falls apart. Serve it with roasted vegetables around it. They'll think it's a banquet — and it is.",
      ingredientes: [
        "1.5 kg (3⅓ lb) leg of lamb (or pork roast)",
        "6 garlic cloves, crushed",
        "2 sprigs rosemary and 2 of thyme",
        "1 handful of fresh mint",
        "Juice of 1 lemon",
        "4 tablespoons olive oil",
        "1 cup vegetable broth or water",
        "Vegetables to roast around it (potato, carrot, onion, squash)",
        "Coarse salt and pepper",
      ],
      preparo: [
        "Make a paste with the garlic, chopped herbs, lemon, oil, salt, and pepper. Rub it all over the meat, even under the skin. Marinate 2 hours to overnight in the fridge.",
        "Preheat the oven to 325°F (160°C) (slow roasting is the secret to tenderness).",
        "Place the meat in a deep pan, pour the broth into the bottom, and cover with foil.",
        "Roast 2½ to 3 hours, basting the meat with its own juices every 40 minutes.",
        "Scatter the vegetables around it in the last hour.",
        "Remove the foil in the last 20 minutes and raise to 400°F (200°C) to brown.",
        "Let rest 15 minutes before carving — the meat falls apart on the fork.",
      ],
    },
    {
      titulo: "Golden whole chicken with lemon and herbs",
      texto:
        "More accessible, just as impressive. Seasoned with a garlic-herb-oil paste, roasted until the skin is golden and crispy. Secret: loosen the skin and season underneath, and let it rest before carving. It's the dish that makes your mother-in-law ask for the recipe.",
      ingredientes: [
        "1 whole chicken (≈ 4 lb)",
        "5 garlic cloves, crushed",
        "Juice of 1 lemon + 1 lemon cut in half",
        "2 tablespoons olive oil",
        "1 tablespoon chopped rosemary and thyme",
        "1 teaspoon paprika",
        "Salt and pepper",
      ],
      preparo: [
        "Pat the chicken very dry with paper towels (dry skin = crispy skin).",
        "Mix the garlic, herbs, lemon juice, oil, paprika, salt, and pepper.",
        "With your fingers, carefully loosen the skin over the breast and thighs and spread half the paste underneath. Rub the rest outside and inside.",
        "Place the lemon halves inside the chicken. Marinate 1 hour (or overnight).",
        "Roast at 400°F (200°C) for 1 hour 10 minutes to 1 hour 30 minutes, basting halfway, until the skin is golden and the juices run clear when you pierce the thigh.",
        "Let rest 15 minutes before carving, so the meat doesn't dry out.",
      ],
    },
    {
      titulo: "Grand board of breads, spreads, and olives",
      texto:
        "A sophisticated starter and pure biblical food: sourdough bread, hummus, baba ghanoush, herb oil, olives, tomatoes, white cheese. Everyone dips and shares. It's the table of Acts.",
      ingredientes: [
        "Sourdough bread, sliced and lightly toasted",
        "Hummus: 1 can chickpeas, 2 tablespoons tahini, juice of 1 lemon, 1 garlic clove, oil and salt",
        "Baba ghanoush: 1 roasted eggplant, 1 tablespoon tahini, lemon, garlic, and oil",
        "Olives, cherry tomatoes, cucumber, and white cheese in cubes",
        "Herb oil for drizzling",
      ],
      preparo: [
        "Hummus: blend the drained chickpeas with the tahini, lemon, garlic, salt, and oil into a smooth cream (add ice water to fluff it up).",
        "Baba ghanoush: roast the whole eggplant at 400°F (200°C) for 40 minutes until soft, scoop out the flesh, and mash with tahini, lemon, garlic, and oil.",
        "Lightly toast the bread slices and drizzle with oil.",
        "Arrange everything on a large board: the spreads in little bowls, the vegetables and cheese around, the olives scattered.",
        "Serve in the center of the table for everyone to share — it's the communion of Acts, where they broke bread together.",
      ],
    },
    {
      titulo: "Whole roasted fish for the table",
      texto:
        "A whole fish roasted with lemon, herbs, and oil, brought out on the tray, has an enormous visual impact — and it's easier than it looks. A deep symbol in Scripture. Serve it with rice and colorful vegetables.",
      ingredientes: [
        "1 whole cleaned fish (≈ 2.5 lb — sea bass, snapper, or tilapia)",
        "2 lemons (1 sliced, 1 juiced)",
        "1 bunch fresh parsley and dill",
        "4 garlic cloves, sliced",
        "4 tablespoons olive oil",
        "Coarse salt and pepper",
      ],
      preparo: [
        "Preheat the oven to 400°F (200°C). Make 3 diagonal cuts on each side of the fish.",
        "Season inside and out with salt, pepper, lemon juice, and oil.",
        "Stuff the belly with lemon slices, garlic, and the herb sprigs; tuck a little herb into the cuts.",
        "Place on a lined tray and drizzle with more oil.",
        "Roast 30 to 35 minutes, until the flesh releases easily from the bone.",
        "Bring it whole to the table on the tray, with rice and colorful vegetables around it — restaurant-level visual impact.",
      ],
    },
    {
      titulo: "Fig, honey, and walnut dessert",
      texto:
        "Close with the most biblical dessert there is: figs roasted with honey and walnuts, served with yogurt or natural cream. It looks restaurant-worthy, comes together in 15 minutes, without a single gram of refined sugar.",
      ingredientes: [
        "8 fresh figs (or dried, rehydrated)",
        "3 tablespoons honey",
        "4 tablespoons chopped walnuts",
        "1 pinch of cinnamon",
        "Plain yogurt or ricotta to serve",
      ],
      preparo: [
        "Preheat the oven to 375°F (190°C). Cut a cross into the top of the figs, without separating the base.",
        "Open them slightly and drizzle honey inside; sprinkle with cinnamon.",
        "Place on a tray and roast 10 to 12 minutes, until soft and the honey bubbles.",
        "Scatter the walnuts on top and return to the oven for 2 minutes.",
        "Serve warm over a spoonful of yogurt or ricotta. Biblical sweetness in 15 minutes.",
      ],
    },
  ],
  domingoOrientacao:
    "Before serving, gather the family, read a short verse, and say a prayer of gratitude. Turn Sunday into communion, not just a meal. That's how the table becomes the heart of the home again.",

  secBonus: "Secret Bonus · The Invisible Transition",
  bonusVersiculo:
    '"Do not despise the day of small beginnings." — inspired by Zechariah 4:10',
  bonusIntro:
    'My personal strategy for the hardest case: the husband (or child) who "won\'t eat anything different." The mistake almost every woman makes is changing everything at once and breeding rebellion. The Invisible Transition does the opposite: gradual, silent, in 4 phases over 4 to 6 weeks. No one notices it happening — until it\'s already done.',
  fases: [
    {
      fase: "Week 1",
      titulo: "The invisible change of the invisible",
      itens: [
        "Frying oil → olive oil",
        "Regular salt → herb-seasoned salt",
        "Bouillon cube → real garlic, onion, and herbs",
        "Sugar in coffee/juice → cut it in half",
      ],
      texto:
        "No one notices any change. But the body already receives less inflammation and the palate quietly begins to retrain.",
    },
    {
      fase: "Weeks 2 and 3",
      titulo: "The silent addition",
      itens: [
        "Grated vegetable inside the meat sauce",
        "Processed lentils inside the burger",
        "Half a portion of whole grain mixed with white flour",
        "A colorful salad beside the usual plate, without forcing",
      ],
      texto:
        "The person keeps eating what they like. You enrich it from the inside and plant the new thing beside it, without pressure.",
    },
    {
      fase: "Weeks 4 and 5",
      titulo: "The gradual substitution",
      itens: [
        "Oven-breaded fish instead of the processed kind",
        "Roasted, golden vegetables instead of fries",
        "Fruit dessert instead of the packaged sweet",
        "Warm sourdough bread instead of factory bread",
      ],
      texto:
        "Each substitution keeps the familiar format (breaded, roasted, sweet, bread), so the resistance is minimal.",
    },
    {
      fase: "Week 6 onward",
      titulo: "The single table, consolidated",
      itens: [],
      texto:
        'Without anyone noticing the process, the family already eats the Family Table at most meals. The palate was retrained. The husband who "wouldn\'t eat anything different" now asks for your breaded fish and thinks it was always this way.',
    },
  ],
  regrasTitulo: "The three golden rules",
  regras: [
    {
      nome: "Never announce",
      texto:
        'The moment you say "I\'m making you eat healthy," the game is over. Just cook. Let the flavor convince them.',
    },
    {
      nome: "Never back down over an isolated complaint",
      texto:
        "There will be a day when someone complains. Don't dismantle everything. Stay firm and gentle. One complaint isn't a defeat.",
    },
    {
      nome: "Harvest the praise before revealing",
      texto:
        "Wait for the husband to praise the dish a few times. Only then, if you want, tell him it's healthy. Praise already given can't be taken back — and the reveal becomes pride, not resistance.",
    },
  ],

  secFinal: "A final word",
  finalTexto: [
    'Dear friend, you now hold what was missing for the Biblical Nutrition Method to fit into your real life. Caring for yourself should never mean eating alone, cooking twice, or becoming the "odd one out" of the family.',
    "You don't have to choose between your health and your family. With the Family Table it's all the same: one pot, one table, everyone eating well — and you in silent command, caring for each of them through food.",
    "The virtuous woman of Proverbs 31 \"provides food for her household.\" She nourished the whole house, with wisdom, with her own hands. That's exactly what you're doing now.",
    "Start slowly, with what they already love, and let the flavor do the work. May God bless your kitchen, your table, and every person who sits at it.",
  ],
  finalAssinatura: "With faith and care, Beatriz Morales — Christian Nutritionist",

  guiaTitulo: "The complete guide",
  guiaSub: "Everything you need, organized to check whenever you want.",
  voltar: "Back to the start",
};
