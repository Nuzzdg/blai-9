export const menuCategories = [
  { id: 'all', label: 'Everything' },
  { id: 'pintxos', label: 'Pintxos & bites' },
  { id: 'plates', label: 'Plates to share' },
  { id: 'drinks', label: 'Something to drink' },
  { id: 'sweet', label: 'Something sweet' },
];

export const menuItems = [
  {
    name: 'Pinchos variados',
    category: 'pintxos',
    description: 'A colourful little line-up. Pick a few and pass them round.',
    note: 'BAR FAVOURITE',
    image: '/images/pinchos-variados.jpg',
    alt: 'Assorted Basque pintxos with olives and guindilla peppers on a platter',
  },
  {
    name: 'Patatas bravas',
    category: 'plates',
    description: 'Crispy, saucy, and always better in the middle of the table.',
    note: 'MADE FOR THE MIDDLE',
    image: '/images/patatas-bravas.jpg',
    alt: 'Golden crispy potatoes served on a plate',
  },
  {
    name: 'Nachos de pollo',
    category: 'plates',
    description: 'A generous plate for when one more snack sounds right.',
    note: 'TO SHARE',
    image: 'photo-1513456852971-30c0b8199d4d',
    alt: 'Loaded nachos shared around a restaurant table',
  },
  {
    name: 'Fried chicken',
    category: 'plates',
    description: 'A crisp, savoury bar bite with a cold drink on the side.',
    note: 'BAR SNACK',
    image: 'photo-1626082927389-6cd097cdc6ec',
    alt: 'Crispy fried chicken served for sharing',
  },
  {
    name: 'Calamari',
    category: 'pintxos',
    description: 'A classic seaside snack, right here on Carrer de Blai.',
    note: 'A CLASSIC',
    image: '/images/calamares.jpg',
    alt: 'A plate of fried calamari rings with lemon',
  },
  {
    name: 'Vermut',
    category: 'drinks',
    description: 'A Barcelona ritual. Take your time with this one.',
    note: 'SIP SLOWLY',
    image: 'photo-1514362545857-3bc16c4c7d1b',
    alt: 'A glass of vermouth on a warmly lit bar',
  },
  {
    name: 'Sangria',
    category: 'drinks',
    description: 'Bright, easy-going and made for another round of plates.',
    note: 'FOR THE TABLE',
    image: '/images/sangria.jpg',
    alt: 'A glass pitcher of sangria with citrus',
  },
  {
    name: 'Moritz beer',
    category: 'drinks',
    description: 'A cold local pour. Best enjoyed right at the bar.',
    note: 'BAR POUR',
    image: 'photo-1535958636474-b021ee887b13',
    alt: 'A freshly poured glass of beer',
  },
  {
    name: 'Churros',
    category: 'sweet',
    description: 'A little something sweet for the walk home.',
    note: 'SAVE A LITTLE ROOM',
    image: 'photo-1624371414361-e670edf4898d',
    alt: 'Churros served as a sweet finish',
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
