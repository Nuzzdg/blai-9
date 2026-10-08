export const menuCategories = [
  { id: 'all', label: 'Everything' },
  { id: 'pinchos', label: 'Pinchos' },
  { id: 'tapas', label: 'Tapas' },
  { id: 'drinks', label: 'Drinks' },
];

export const menuItems = [
  {
    name: 'Beef dumplings', category: 'pinchos', price: 2.8,
    allergens: ['Gluten', 'Dairy', 'Soy', 'Sulphur Dioxide and Sulphites'], traces: [],
  },
  {
    name: 'Blinis with escalivada and goat cheese', category: 'pinchos', price: 1.9, vegetarian: true,
    allergens: ['Gluten', 'Egg', 'Dairy', 'Sulphur Dioxide and Sulphites'], traces: ['Sesame', 'Soy', 'Mustard', 'Nuts'],
  },
  {
    name: 'Blinis with smoked salmon', category: 'pinchos', price: 2.8,
    allergens: ['Gluten', 'Egg', 'Dairy'], traces: ['Sesame', 'Soy', 'Mustard'],
  },
  {
    name: 'Blinis with ham', category: 'pinchos', price: 1.9,
    allergens: ['Gluten', 'Egg', 'Dairy'], traces: ['Sesame', 'Soy', 'Mustard'],
  },
  {
    name: 'Beef kebab', category: 'pinchos', price: 1.9,
    allergens: ['Gluten', 'Dairy', 'Soy', 'Mustard', 'Celery', 'Egg'], traces: [],
  },
  {
    name: 'Spinach piadina', category: 'pinchos', price: 1.9,
    allergens: ['Dairy', 'Gluten', 'Nuts'], traces: ['Soy', 'Mustard'],
  },
  {
    name: 'Ham and cheese piadina', category: 'pinchos', price: 1.9,
    allergens: ['Gluten', 'Dairy', 'Soy'], traces: ['Egg', 'Mustard'],
  },
  {
    name: 'Mushroom and bacon piadina', category: 'pinchos', price: 1.9,
    allergens: ['Gluten', 'Egg', 'Dairy', 'Soy'], traces: ['Mustard'],
  },
  {
    name: 'Vegetable roll', category: 'pinchos', price: 1.9, vegetarian: true,
    allergens: ['Gluten', 'Soy', 'Egg', 'Dairy', 'Nuts', 'Sulphur Dioxide and Sulphites'], traces: ['Mustard'],
  },
  {
    name: 'Veal bao bun with truffle sauce', category: 'pinchos', price: 3.6,
    allergens: ['Gluten', 'Dairy', 'Egg'], traces: ['Nuts', 'Sesame', 'Soy', 'Mustard', 'Crustaceans', 'Fish', 'Celery'],
  },
  {
    name: 'Double cheeseburger', category: 'pinchos', price: 2.8,
    allergens: ['Gluten', 'Dairy', 'Sesame', 'Soy', 'Sulphur Dioxide and Sulphites', 'Egg', 'Mustard'], traces: ['Nuts', 'Peanut'],
  },
  {
    name: 'Creole chorizo bomba with gaucha sauce', category: 'pinchos', price: 2.8,
    allergens: ['Egg', 'Gluten', 'Dairy'], traces: ['Soy', 'Sulphur Dioxide and Sulphites'],
  },
  {
    name: 'Falafel in pita bread', category: 'pinchos', price: 2.8, vegetarian: true,
    allergens: ['Gluten', 'Egg', 'Dairy'], traces: ['Soy', 'Mustard', 'Crustaceans', 'Fish', 'Molluscs'],
  },
  {
    name: 'Spicy red roll', category: 'pinchos', price: 2.8,
    allergens: ['Gluten', 'Dairy', 'Egg'], traces: ['Soy', 'Mustard'],
  },
  {
    name: 'Tempura prawn with kimchi mayonnaise', category: 'pinchos', price: 2.8,
    allergens: ['Egg'], traces: [],
  },
  {
    name: 'Mixed croquettes (ham and cooked meat)', category: 'pinchos', price: 1.9,
    allergens: ['Gluten', 'Egg', 'Dairy', 'Soy'], traces: ['Mustard', 'Crustaceans', 'Fish', 'Molluscs', 'Celery'],
  },
  {
    name: 'Mushroom croquette', category: 'pinchos', price: 1.9,
    allergens: ['Gluten', 'Egg', 'Dairy', 'Nuts', 'Soy', 'Sulphur Dioxide and Sulphites'], traces: ['Mustard', 'Crustaceans', 'Fish', 'Molluscs', 'Celery'],
  },
  {
    name: 'Chicken flauta with dill mayonnaise', category: 'pinchos', price: 1.9,
    allergens: ['Gluten', 'Dairy', 'Egg'], traces: ['Soy', 'Mustard'],
  },
  {
    name: 'Churro with chocolate', category: 'pinchos', price: 1.9,
    allergens: ['Gluten', 'Nuts', 'Soy', 'Dairy'], traces: ['Egg', 'Mustard', 'Crustaceans', 'Fish', 'Molluscs', 'Celery'],
  },
  {
    name: 'Mini chicken burrito with cilantro', category: 'pinchos', price: 1.9,
    allergens: ['Gluten', 'Sesame', 'Dairy'], traces: ['Egg', 'Soy', 'Mustard'],
  },
  {
    name: 'Mini chili con carne burrito', category: 'pinchos', price: 1.9,
    allergens: ['Gluten'], traces: ['Egg', 'Dairy', 'Soy', 'Mustard'],
  },
  {
    name: 'Spinach croquette', category: 'pinchos', price: 1.9, vegetarian: true,
    allergens: ['Egg'], traces: [],
  },
  {
    name: 'Black rice roll', category: 'pinchos', price: 1.9,
    allergens: ['Gluten', 'Egg', 'Dairy', 'Crustaceans', 'Fish', 'Molluscs', 'Sulphur Dioxide and Sulphites', 'Celery'], traces: ['Soy', 'Mustard'],
  },
  {
    name: 'Spiced chicken skewer', category: 'pinchos', price: 2.8,
    allergens: ['Gluten', 'Peanut', 'Nuts', 'Soy', 'Dairy'], traces: ['Sesame', 'Mustard', 'Egg'],
  },
  {
    name: 'Brownie tower with white chocolate', category: 'pinchos', price: 2.8, vegetarian: true,
    allergens: ['Dairy', 'Soy', 'Gluten', 'Egg'], traces: [],
  },
  {
    name: 'Blinis with tuna and egg', category: 'pinchos', price: 1.9,
    allergens: ['Egg', 'Fish', 'Gluten', 'Dairy'], traces: ['Sesame', 'Soy', 'Mustard'],
  },
  {
    name: 'Chocolate roll', category: 'pinchos', price: 1.9,
    allergens: ['Gluten', 'Egg', 'Dairy', 'Nuts', 'Soy'], traces: ['Mustard'],
  },
  {
    name: 'Apple and raisin roll', category: 'pinchos', price: 1.9, vegetarian: true,
    allergens: ['Gluten', 'Egg', 'Dairy', 'Sulphur Dioxide and Sulphites'], traces: ['Soy', 'Mustard'],
  },
  {
    name: 'Mini battered chicken burger', category: 'pinchos', price: 2.8,
    allergens: ['Gluten', 'Mustard', 'Egg', 'Sulphur Dioxide and Sulphites', 'Dairy', 'Sesame'], traces: ['Soy', 'Peanut', 'Nuts'],
  },
  {
    name: 'Beef gyro', category: 'pinchos', price: 2.8,
    allergens: ['Egg', 'Dairy', 'Gluten', 'Soy', 'Sulphur Dioxide and Sulphites'], traces: ['Mustard', 'Peanut'],
  },
  {
    name: 'Salmon toast with wakame seaweed', category: 'pinchos', price: 2.8,
    allergens: ['Gluten', 'Soy', 'Sesame'], traces: ['Egg', 'Dairy', 'Nuts', 'Mustard'],
  },
  {
    name: 'Chicken and jalapeño quesadilla', category: 'pinchos', price: 2.8,
    allergens: ['Gluten', 'Egg'], traces: ['Soy', 'Mustard'],
  },
  {
    name: 'Vegetable quesadilla', category: 'pinchos', price: 2.8,
    allergens: ['Gluten', 'Egg', 'Dairy', 'Nuts', 'Soy', 'Sulphur Dioxide and Sulphites'], traces: ['Mustard'],
  },
  {
    name: 'Criollo bun', category: 'pinchos', price: 3.6,
    allergens: ['Gluten', 'Egg', 'Sesame'], traces: ['Dairy', 'Peanut', 'Nuts', 'Soy', 'Mustard', 'Sulphur Dioxide and Sulphites'],
  },
  {
    name: 'Pollo con curry', category: 'pinchos', price: 2.8,
    allergens: ['Dairy', 'Gluten', 'Soy'], traces: ['Egg', 'Nuts', 'Sesame', 'Mustard'],
  },
  {
    name: 'Berenjena, sobrasada, queso crema y setas', category: 'pinchos', price: 1.9,
    allergens: ['Gluten', 'Soy'], traces: ['Egg', 'Dairy', 'Nuts', 'Sesame', 'Mustard'],
  },
  {
    name: 'Coca dei Cardenalle, atún con mayonesa, pimiento, olivas y anchoa', category: 'pinchos', price: 2.8,
    allergens: ['Gluten', 'Soy', 'Egg', 'Fish'], traces: ['Dairy', 'Nuts', 'Sesame', 'Mustard'],
  },
  {
    name: 'Morcilla de arroz sobre coca dei Cardenale, queso brie, pimiento rojo y mermelada de tomate', category: 'pinchos', price: 1.9,
    allergens: ['Gluten', 'Soy', 'Dairy'], traces: ['Egg', 'Nuts', 'Sesame', 'Mustard'],
  },
  {
    name: 'Champiñón, calabacín, cebolla y tomate cherry', category: 'pinchos', price: 1.9,
    allergens: [], traces: [],
  },
  {
    name: 'Champiñón, morcilla de cebolla, cebolla caramelizada y pimiento', category: 'pinchos', price: 1.9,
    allergens: [], traces: [],
  },
  {
    name: 'Tortilla de patatas con cebolla y chistorra', category: 'pinchos', price: 2.8,
    allergens: ['Gluten', 'Soy'], traces: ['Egg', 'Dairy', 'Nuts', 'Sesame', 'Mustard', 'Sulphur Dioxide and Sulphites'],
  },
  {
    name: 'Ternera guisada con chimichurri y rodaja de patata', category: 'pinchos', price: 2.8,
    allergens: [], traces: ['Gluten', 'Nuts', 'Sesame', 'Mustard'],
  },
  {
    name: 'Burger de wagyu con mayonesa trufada', category: 'pinchos', price: 3.6,
    allergens: ['Gluten', 'Dairy', 'Sesame', 'Egg'], traces: ['Nuts', 'Soy', 'Crustaceans', 'Fish', 'Celery'],
  },
  {
    name: 'Pan bretzel con salmón, queso crema y rúcula', category: 'pinchos', price: 3.6,
    allergens: [], traces: [],
  },
  {
    name: 'Ternera con salsa taqueta', category: 'pinchos', price: 2.8,
    allergens: ['Gluten', 'Egg', 'Dairy'], traces: ['Soy', 'Mustard'],
  },
  {
    name: 'Roll choriqueso', category: 'pinchos', price: 1.9,
    allergens: ['Gluten', 'Egg', 'Dairy', 'Sulphur Dioxide and Sulphites'], traces: ['Nuts', 'Soy', 'Mustard', 'Celery'],
  },
  {
    name: 'Bao osobuco de ternera con mayonesa de piquillo', category: 'pinchos', price: 3.6,
    allergens: ['Egg', 'Gluten', 'Dairy'], traces: ['Nuts', 'Sesame', 'Soy', 'Mustard'],
  },
  {
    name: 'Spicy potatoes B9', category: 'tapas', price: 5.9,
    allergens: ['Egg', 'Dairy'], traces: [], image: '/images/patatas-bravas.jpg',
    alt: 'Blai 9 spicy potatoes, the restaurant’s patatas bravas',
  },
  {
    name: 'Padrón peppers', category: 'tapas', price: 6.5,
    allergens: [], traces: [],
  },
  {
    name: 'Fried squid strips', category: 'tapas', price: 8.5,
    allergens: ['Gluten', 'Egg'], traces: ['Dairy', 'Soy', 'Crustaceans', 'Fish', 'Sulphur Dioxide and Sulphites'],
    image: '/images/calamari-blai-9.png', alt: 'Fried squid strips supplied by Blai 9',
  },
  {
    name: 'Kentucky style chicken', category: 'tapas', price: 10.8,
    allergens: ['Gluten', 'Mustard'], traces: ['Soy'],
  },
  {
    name: 'Catalan cream', category: 'tapas', price: 5.9,
    allergens: ['Egg', 'Dairy'], traces: [],
  },
  {
    name: 'Nachos with guacamole', category: 'tapas', price: 8.9,
    allergens: ['Dairy'], traces: [],
  },
  {
    name: 'Churros with chocolate', category: 'tapas', price: 5.9, vegetarian: true,
    allergens: ['Gluten', 'Nuts', 'Soy', 'Dairy'], traces: ['Egg', 'Mustard', 'Crustaceans', 'Fish', 'Molluscs', 'Celery'],
  },
  {
    name: 'Olives', category: 'tapas', price: 2.5,
    allergens: [], traces: [],
  },
  {
    name: 'Trio of bao buns', category: 'tapas', price: 10.5,
    allergens: ['Gluten', 'Dairy', 'Molluscs'], traces: ['Egg', 'Nuts', 'Sesame', 'Soy', 'Mustard'],
  },
  {
    name: 'Tequeños', category: 'tapas', price: 9.6,
    allergens: ['Gluten', 'Egg', 'Dairy'], traces: ['Nuts'],
  },
  {
    name: 'Hummus con falafel', category: 'tapas', price: 9.6,
    allergens: [], traces: ['Gluten', 'Mustard', 'Nuts', 'Sesame', 'Egg', 'Dairy', 'Soy', 'Crustaceans', 'Fish', 'Molluscs'],
  },
  {
    name: 'Hamburguesa Blai 9', category: 'tapas', price: 13.4,
    allergens: ['Gluten', 'Dairy', 'Soy', 'Sulphur Dioxide and Sulphites', 'Egg', 'Mustard'], traces: ['Sesame', 'Nuts', 'Peanut'],
  },
  {
    name: 'Trío de milanesas', category: 'tapas', price: 15.2,
    allergens: ['Gluten', 'Egg', 'Dairy'], traces: ['Soy'],
  },
];

export const drinkCategories = [
  {
    label: 'Beers',
    items: [
      { name: 'Complot IPA', options: [['Glass 330ml', 4.5], ['Jar 0.5l', 6.4]] },
      { name: 'Estrella Damm', options: [['Glass 330ml', 2.9], ['Jar 0.5l', 4.4], ['Bottle 0.33l', 3.2]] },
      { name: 'Turia', options: [['Glass 330ml', 3.5], ['Jar 0.5l', 5.2]] },
      { name: 'Damm Lemon', options: [['Glass 330ml', 2.9], ['Jar 0.5l', 4.4]] },
      { name: 'FreeDamm (0% Alcohol)', options: [['Bottle 330ml', 3.2]] },
      { name: 'FreeDamm Tostada (0% Alcohol)', options: [['Bottle 330ml', 3.6]] },
      { name: 'Daura (Sin gluten)', options: [['Bottle 330ml', 3.9]] },
      { name: 'Voll Damm Mediana', options: [['Bottle 330ml', 3.6]] },
    ],
  },
  {
    label: 'Sangrías',
    items: [
      { name: 'Sangría de cava', options: [['Glass 330ml', 5.5], ['Jar 1l', 19]] },
      { name: 'Sangría de vino tinto', options: [['Glass 330ml', 4.5], ['Jar 1l', 16]], image: '/images/sangria-blai-9.png', alt: 'Blai 9 sangria supplied by the restaurant' },
      { name: 'Tinto de verano', options: [['Glass 330ml', 4.2], ['Jar 1l', 15]] },
    ],
  },
  {
    label: 'Wines',
    items: [
      { name: 'Gorgorito - D.O Ribera del duero - Tempranillo', options: [['Glass', 3.2], ['Bottle', 15]] },
      { name: 'Copaboca - D.O Rioja - Tempranillo', options: [['Glass', 3.2], ['Bottle', 14]] },
      { name: 'Calonia 7 D.O Penedés', options: [['Glass', 3.5], ['Bottle', 15]] },
      { name: 'Cairats Selección - D.O Montsant - Cariñena, Garnacha negra', options: [['Bottle', 24]] },
      { name: 'Nasica - D.O Rueda - Verdejo', options: [['Glass', 3.2], ['Bottle', 14]] },
      { name: 'Calonia 7 D.O Penedés - Blanco', options: [['Glass', 3.5], ['Bottle', 15]] },
      { name: 'Laxas - D.O Rias Baixas - Albariño', options: [['Bottle', 19.9]] },
      { name: 'Luna Beberide - D.O Bierzo', options: [['Bottle', 21]] },
      { name: 'Flor Innata Rosado - D.O Rueda - Tempranillo', options: [['Glass', 3.5], ['Bottle', 15]] },
      { name: 'Pupitre - Xarel.lo, Macabeo y Parellada', options: [['Glass', 3.5], ['Bottle', 15]] },
    ],
  },
  {
    label: 'Aperitif',
    items: [
      { name: 'Vermouth', options: [['Vaso', 4.7]] },
      { name: 'Martini Bianco', options: [['Vaso', 5]] },
      { name: 'Martini Rosso', options: [['Vaso', 5]] },
      { name: 'Aperol', options: [['Copa', 8]] },
      { name: 'Campari', options: [['Copa', 8]] },
    ],
  },
  {
    label: 'Cocktails',
    items: [
      { name: 'Caipiquila', options: [['', 9]] },
      { name: 'Caipirinha', options: [['', 9]] },
      { name: 'Caipiroska', options: [['', 9]] },
      { name: 'Mai Tai', options: [['', 9]] },
      { name: 'Margarita', options: [['', 9]] },
      { name: 'Mimosa', options: [['', 7]] },
      { name: 'Mojito Clásico', options: [['', 9]] },
      { name: 'Mojito Fresa', options: [['', 9]] },
      { name: 'Mojito Naranja y Canela', options: [['', 9]] },
      { name: 'Mojito Pepino y Jengibre', options: [['', 9]] },
      { name: 'Mojito Piña picante', options: [['', 9]] },
      { name: 'Negroni', options: [['', 9]] },
      { name: 'Sex on the beach', options: [['', 9]] },
      { name: 'Tequila Sunrise', options: [['', 9]] },
    ],
  },
  {
    label: 'Gin',
    items: [
      { name: 'Bulldog', options: [['Shot', 4], ['Glass with ice', 9], ['Drink', 12]] },
      { name: 'Puerto de indias', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Seagrams', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Tanqueray', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Mombasa', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Bombay', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Bombay Shapphire', options: [['Shot', 4], ['Glass with ice', 9], ['Drink', 12]] },
      { name: 'Beefeater', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Citadelle', options: [['Shot', 4], ['Glass with ice', 9], ['Drink', 12]] },
      { name: 'Nordes', options: [['Shot', 4], ['Glass with ice', 9], ['Drink', 12]] },
      { name: 'Hendrick´s', options: [['Shot', 4], ['Glass with ice', 9], ['Drink', 12]] },
    ],
  },
  {
    label: 'Rum',
    items: [
      { name: 'Negrita Blanco', options: [['Shot', 3], ['Glass with ice', 6], ['Drink', 8]] },
      { name: 'Negrita Añejo', options: [['Shot', 3], ['Glass with ice', 6], ['Drink', 8]] },
      { name: 'Bacardi', options: [['Shot', 3.5], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Cacique', options: [['Shot', 3.5], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Pujol', options: [['Shot', 3], ['Glass with ice', 6], ['Drink', 8]] },
      { name: 'Havana Club 5 años', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Barceló', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Brugal Anejo', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Malibú', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Santa Teresa', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
    ],
  },
  {
    label: 'Vodka',
    items: [
      { name: 'Smirnoff', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Absolut', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Grey Goose', options: [['Shot', 5], ['Glass with ice', 9], ['Drink', 12]] },
    ],
  },
  {
    label: 'Whisky',
    items: [
      { name: 'Ballantinne´s', options: [['Shot', 3.5], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'J&B', options: [['Shot', 3.5], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Cutty Sark', options: [['Shot', 3.5], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'White Label Dewars', options: [['Shot', 3.5], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Johnie Walker Red Label', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Cardhu', options: [['Shot', 5], ['Glass with ice', 9], ['Drink', 12]] },
      { name: 'Jack Daniel´s', options: [['Shot', 5], ['Glass with ice', 9], ['Drink', 12]] },
      { name: 'Jim Beam', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
    ],
  },
  {
    label: 'Anise',
    items: [
      { name: 'Marie Brizard', options: [['Shot', 3], ['Glass with ice', 6]] },
      { name: 'El mono', options: [['Shot', 3], ['Glass with ice', 6]] },
    ],
  },
  {
    label: 'Tequila',
    items: [
      { name: 'Jose Cuervo especial', options: [['Shot', 4]] },
    ],
  },
  {
    label: 'Liqueurs',
    items: [
      { name: 'Zoco', options: [['Shot', 3.5], ['Glass with ice', 7]] },
      { name: 'Etxeko', options: [['Shot', 3.5], ['Glass with ice', 7]] },
      { name: 'Frangelico', options: [['Shot', 3.5], ['Glass with ice', 7]] },
      { name: 'Jagermeister', options: [['Shot', 4], ['Glass with ice', 9], ['Drink', 12]] },
      { name: 'Fernet Branca', options: [['Shot', 4], ['Glass with ice', 8], ['Drink', 10]] },
      { name: 'Magno', options: [['Shot', 3.5], ['Glass with ice', 7]] },
      { name: 'Baileys', options: [['Shot', 3.5], ['Glass with ice', 7]] },
      { name: 'Licor de hierbas', options: [['Shot', 3], ['Glass with ice', 6]] },
      { name: 'Crema de orujo', options: [['Shot', 3], ['Glass with ice', 6]] },
      { name: 'Orujo blanco', options: [['Shot', 3], ['Glass with ice', 6]] },
      { name: 'Limoncello', options: [['Shot', 3], ['Glass with ice', 6]] },
    ],
  },
  {
    label: 'Soft Drinks',
    items: [
      { name: 'Coca Cola', options: [['Can 330ml', 2.6]] },
      { name: 'Coca Cola zero', options: [['Can 330ml', 2.6]] },
      { name: 'Tonica Schweppes', options: [['Can 330ml', 2.6]] },
      { name: 'Fanta Limón', options: [['Can 330ml', 2.6]] },
      { name: 'Fanta Naranja', options: [['Can 330ml', 2.6]] },
      { name: 'Aquarius Limón', options: [['Can 330ml', 2.6]] },
      { name: 'Nestea limón', options: [['Can 330ml', 2.6]] },
      { name: 'Seven Up', options: [['Can 330ml', 2.6]] },
      { name: 'Red Bull', options: [['Can 330ml', 3.2]] },
      { name: 'Naranja Granini', options: [['Bottle 200ml', 2.8]] },
      { name: 'Melocotón', options: [['Bottle 200ml', 2.8]] },
      { name: 'Piña Granini', options: [['Bottle 200ml', 2.8]] },
      { name: 'Vichy Catalan', options: [['Bottle 330ml', 3]] },
      { name: 'Agua', options: [['Bottle 330ml', 1.8]] },
      { name: 'Bitter Kas', options: [['Bottle 200ml', 2.9]] },
    ],
  },
];

export const signatureDishes = [
  {
    number: '01',
    name: 'Patatas bravas',
    line: 'Crispy potatoes. Bold bar energy.',
    image: '/images/patatas-bravas.jpg',
    alt: 'A plate of crisp golden patatas bravas',
    className: 'feature--bravas',
  },
  {
    number: '02',
    name: 'Pinchos variados',
    line: 'A few favourites, all in good company.',
    image: '/images/pinchos-variados.jpg',
    alt: 'Assorted Basque pintxos with olives and guindilla peppers on a platter',
    className: 'feature--pinchos',
  },
  {
    number: '03',
    name: 'Churros',
    line: 'One last bite before the night is done.',
    image: 'photo-1624371414361-e670edf4898d',
    alt: 'Churros on a plate, ready to share',
    className: 'feature--churros',
  },
];

export const openingHours = [
  { day: 'Monday', hours: 'Check with the bar' },
  { day: 'Tuesday', hours: 'Check with the bar' },
  { day: 'Wednesday', hours: 'Check with the bar' },
  { day: 'Thursday', hours: 'Check with the bar' },
  { day: 'Friday', hours: 'Check with the bar' },
  { day: 'Saturday', hours: 'Check with the bar' },
  { day: 'Sunday', hours: 'Check with the bar' },
];

export const images = {
  hero: {
    src: 'photo-1504674900247-0877df9cc836',
    alt: 'A generous spread of dishes across a lively dinner table',
  },
  interior: {
    src: 'photo-1514933651103-005eec06c04b',
    alt: 'Warmly lit neighborhood bar with a lively evening atmosphere',
  },
  street: {
    src: 'photo-1533929736458-ca588d08c8be',
    alt: 'Barcelona street at dusk',
  },
  bar: {
    src: 'photo-1552566626-52f8b828add9',
    alt: 'A welcoming restaurant interior with warm light',
  },
  cheers: {
    src: 'photo-1516450360452-9312f5e86fc7',
    alt: 'Friends sharing a meal at a restaurant',
  },
};

export const imageUrl = (id, width = 1200) =>
  id.startsWith('/')
    ? `${import.meta.env.BASE_URL}${id.slice(1)}`
    : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

export const restaurant = {
  name: 'Blai 9',
  address: 'Carrer de Blai, 9',
  postcode: '08004 Barcelona',
  price: '€10–20 per person',
  phone: '+34 933 29 73 65',
  website: 'https://blai9.com',
  map: 'https://maps.google.com/?q=Carrer+de+Blai+9,+08004+Barcelona',
};
