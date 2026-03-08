export type EventType = 'birthday' | 'engagement' | 'anniversary' | 'retirement' | 'babyshower' | 'housewarming' | 'corporate' | 'festival';
export type ThemeType = 'balloon' | 'floral' | 'elegant' | 'cartoon';

export const eventTypes: { id: EventType; label: string; emoji: string; description: string }[] = [
  { id: 'birthday', label: 'Birthday', emoji: '🎂', description: 'Celebrate another trip around the sun!' },
  { id: 'engagement', label: 'Engagement', emoji: '💍', description: 'Mark the beginning of forever' },
  { id: 'anniversary', label: 'Marriage Anniversary', emoji: '💑', description: 'Celebrate years of togetherness' },
  { id: 'retirement', label: 'Retirement', emoji: '🎉', description: 'Honor a lifetime of achievement' },
  { id: 'babyshower', label: 'Baby Shower', emoji: '👶', description: 'Welcome the little one!' },
  { id: 'housewarming', label: 'Housewarming', emoji: '🏠', description: 'Celebrate your new home!' },
  { id: 'corporate', label: 'Corporate Party', emoji: '🏢', description: 'Professional events & team celebrations' },
  { id: 'festival', label: 'Festival Celebration', emoji: '🪔', description: 'Celebrate festivals with joy & color' },
];

export const budgetOptions = [10000, 25000, 50000, 100000, 200000];

export const themes: { id: ThemeType; label: string; emoji: string; description: string; image: string }[] = [
  { id: 'balloon', label: 'Balloon Theme', emoji: '🎈', description: 'Colorful balloons creating a festive atmosphere', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop' },
  { id: 'floral', label: 'Floral Theme', emoji: '🌸', description: 'Beautiful flowers and natural elegance', image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=300&fit=crop' },
  { id: 'elegant', label: 'Elegant Theme', emoji: '✨', description: 'Sophisticated and luxurious décor', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop' },
  { id: 'cartoon', label: 'Cartoon Theme', emoji: '🦄', description: 'Fun and playful cartoon characters', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=300&fit=crop' },
];

export interface DecorationItem {
  name: string;
  baseCost: number;
  amazonSearch: string;
}

export interface DecorationOption {
  id: string;
  label: string;
  image: string;
  description: string;
}

export type BudgetTier = 'basic' | 'standard' | 'premium' | 'luxury' | 'ultra';

export function getBudgetTier(budget: number): BudgetTier {
  if (budget <= 10000) return 'basic';
  if (budget <= 25000) return 'standard';
  if (budget <= 50000) return 'premium';
  if (budget <= 100000) return 'luxury';
  return 'ultra';
}

export const themeDecorations: Record<ThemeType, Record<BudgetTier, DecorationOption[]>> = {
  balloon: {
    basic: [
      { id: 'balloon-simple', label: 'Simple Balloon Bunch', image: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=600&h=400&fit=crop', description: 'A cheerful bunch of colorful balloons' },
      { id: 'balloon-basic-arch', label: 'Mini Balloon Arch', image: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=600&h=400&fit=crop', description: 'Small balloon arch for the entrance' },
    ],
    standard: [
      { id: 'balloon-arch', label: 'Balloon Arch Setup', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop', description: 'Classic balloon arch for entrance or stage' },
      { id: 'balloon-cluster', label: 'Balloon Cluster Ceiling', image: 'https://images.unsplash.com/photo-1504389899666-225e63a1f8f7?w=600&h=400&fit=crop', description: 'Floating balloon clusters across the ceiling' },
    ],
    premium: [
      { id: 'balloon-wall', label: 'Balloon Wall Backdrop', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop', description: 'Full wall covered with designer balloons' },
      { id: 'balloon-garland', label: 'Organic Balloon Garland', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop&q=80', description: 'Trendy organic balloon garland with mixed sizes' },
    ],
    luxury: [
      { id: 'balloon-luxury-stage', label: 'Grand Balloon Stage', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop', description: 'Full stage balloon installation with LED accents' },
      { id: 'balloon-column', label: 'Balloon Columns & Arches', image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=400&fit=crop', description: 'Tall balloon columns with grand archway' },
    ],
    ultra: [
      { id: 'balloon-immersive', label: 'Immersive Balloon Room', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop', description: 'Floor-to-ceiling balloon installation with lighting' },
      { id: 'balloon-sculpture', label: 'Balloon Sculpture Art', image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=400&fit=crop', description: 'Custom balloon sculptures & art installations' },
    ],
  },
  floral: {
    basic: [
      { id: 'floral-simple', label: 'Simple Flower Arrangement', image: 'https://images.unsplash.com/photo-1561128290-005859ac81a3?w=600&h=400&fit=crop', description: 'Basic flower vases for tables' },
      { id: 'floral-garland-basic', label: 'Marigold Garlands', image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop', description: 'Traditional marigold string decorations' },
    ],
    standard: [
      { id: 'floral-table', label: 'Table Centerpieces', image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=400&fit=crop', description: 'Elegant table centerpieces with mixed flowers' },
      { id: 'floral-entrance', label: 'Floral Entrance', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop', description: 'Flower-decorated entrance and pathway' },
    ],
    premium: [
      { id: 'floral-mandap', label: 'Floral Mandap Setup', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', description: 'Flower-covered mandap or focal point' },
      { id: 'floral-hanging', label: 'Hanging Floral Chandeliers', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop', description: 'Suspended floral arrangements from ceiling' },
    ],
    luxury: [
      { id: 'floral-grand-stage', label: 'Grand Floral Stage', image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=400&fit=crop', description: 'Full stage decorated with premium flowers' },
      { id: 'floral-cascade', label: 'Cascading Flower Walls', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop', description: 'Floor-to-ceiling cascading flower walls' },
    ],
    ultra: [
      { id: 'floral-immersive', label: 'Immersive Floral Garden', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop', description: 'Transform venue into an indoor garden paradise' },
      { id: 'floral-luxury-arch', label: 'Luxury Floral Archway', image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=400&fit=crop', description: 'Massive floral archway with exotic flowers' },
    ],
  },
  elegant: {
    basic: [
      { id: 'elegant-candles', label: 'Candle & Fairy Lights', image: 'https://images.unsplash.com/photo-1504389899666-225e63a1f8f7?w=600&h=400&fit=crop', description: 'Simple candles with fairy light strings' },
      { id: 'elegant-runner', label: 'Table Runner Setup', image: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=600&h=400&fit=crop', description: 'Satin table runners with basic centerpieces' },
    ],
    standard: [
      { id: 'elegant-drapes', label: 'Draped Backdrop', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop', description: 'Fabric drapes with warm lighting' },
      { id: 'elegant-table', label: 'Formal Table Setting', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop', description: 'Coordinated table settings with linens' },
    ],
    premium: [
      { id: 'elegant-chandelier', label: 'Chandelier & Candles', image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=400&fit=crop', description: 'Crystal chandeliers with candle arrangements' },
      { id: 'elegant-stage', label: 'Draped Stage Setup', image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=400&fit=crop', description: 'Luxurious fabric drapes with gold accents' },
    ],
    luxury: [
      { id: 'elegant-lounge', label: 'Premium Lounge Area', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', description: 'Sophisticated lounge with premium furniture' },
      { id: 'elegant-gold', label: 'Gold & Crystal Setup', image: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=600&h=400&fit=crop', description: 'Full gold theme with crystal accents throughout' },
    ],
    ultra: [
      { id: 'elegant-royal', label: 'Royal Palace Theme', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop', description: 'Complete royal palace transformation' },
      { id: 'elegant-bespoke', label: 'Bespoke Luxury Design', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop', description: 'Custom-designed luxury décor with imported elements' },
    ],
  },
  cartoon: {
    basic: [
      { id: 'cartoon-banner', label: 'Banner & Cutouts', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop', description: 'Themed banner with small character cutouts' },
      { id: 'cartoon-table-basic', label: 'Themed Table Setup', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop', description: 'Cartoon-themed plates, cups & tablecloth' },
    ],
    standard: [
      { id: 'cartoon-stage', label: 'Character Stage', image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=400&fit=crop', description: 'Stage with character backdrop and balloons' },
      { id: 'cartoon-photo', label: 'Photo Booth Corner', image: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=600&h=400&fit=crop', description: 'Fun photo booth with cartoon props' },
    ],
    premium: [
      { id: 'cartoon-full', label: 'Full Theme Decoration', image: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=600&h=400&fit=crop', description: 'Complete venue themed with cartoon characters' },
      { id: 'cartoon-balloon-art', label: 'Character Balloon Art', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop', description: 'Custom balloon sculptures of characters' },
    ],
    luxury: [
      { id: 'cartoon-immersive', label: 'Immersive Theme Park', image: 'https://images.unsplash.com/photo-1504389899666-225e63a1f8f7?w=600&h=400&fit=crop', description: 'Transform venue into a mini theme park' },
      { id: 'cartoon-entrance', label: 'Grand Character Entrance', image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop', description: 'Giant character entrance arch with lighting' },
    ],
    ultra: [
      { id: 'cartoon-world', label: 'Fantasy World Setup', image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=400&fit=crop', description: 'Complete fantasy world with props & costumes' },
      { id: 'cartoon-interactive', label: 'Interactive Play Zone', image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=400&fit=crop', description: 'Interactive play zones with themed activities' },
    ],
  },
};

export const themeItems: Record<ThemeType, DecorationItem[]> = {
  balloon: [
    { name: 'Helium Balloons (50 pcs)', baseCost: 800, amazonSearch: 'helium+balloons+party+50+pack' },
    { name: 'Balloon Arch Kit', baseCost: 1200, amazonSearch: 'balloon+arch+decoration+kit' },
    { name: 'LED Balloon Lights', baseCost: 500, amazonSearch: 'LED+balloon+lights+party' },
    { name: 'Balloon Pump', baseCost: 300, amazonSearch: 'balloon+pump+electric' },
    { name: 'Confetti Balloons (20 pcs)', baseCost: 400, amazonSearch: 'confetti+balloons+gold' },
    { name: 'Foil Number/Letter Balloons', baseCost: 600, amazonSearch: 'foil+letter+balloons+gold' },
    { name: 'Ribbon & String', baseCost: 150, amazonSearch: 'balloon+ribbon+curling' },
    { name: 'Balloon Weights', baseCost: 250, amazonSearch: 'balloon+weights+party' },
  ],
  floral: [
    { name: 'Artificial Flower Garlands (5 pcs)', baseCost: 1500, amazonSearch: 'artificial+flower+garland+decoration' },
    { name: 'Rose Petals (1000 pcs)', baseCost: 400, amazonSearch: 'rose+petals+decoration+1000' },
    { name: 'Flower Vases (Set of 3)', baseCost: 1200, amazonSearch: 'flower+vase+decoration+set' },
    { name: 'Marigold Strings (10 pcs)', baseCost: 600, amazonSearch: 'marigold+flower+string+decoration' },
    { name: 'Floral Backdrop Curtain', baseCost: 2000, amazonSearch: 'floral+backdrop+curtain+party' },
    { name: 'LED Fairy Lights', baseCost: 500, amazonSearch: 'LED+fairy+lights+warm+white' },
    { name: 'Floral Centerpieces', baseCost: 800, amazonSearch: 'floral+centerpiece+table+decoration' },
    { name: 'Potpourri & Fragrance', baseCost: 300, amazonSearch: 'potpourri+fragrance+party' },
  ],
  elegant: [
    { name: 'Gold & White Drapes', baseCost: 2500, amazonSearch: 'gold+white+drape+backdrop+decoration' },
    { name: 'Crystal Candle Holders (Set of 6)', baseCost: 1800, amazonSearch: 'crystal+candle+holder+set+elegant' },
    { name: 'LED Candles (12 pcs)', baseCost: 600, amazonSearch: 'LED+candles+flameless+elegant' },
    { name: 'Gold Table Runner', baseCost: 500, amazonSearch: 'gold+table+runner+elegant' },
    { name: 'Premium Photo Backdrop', baseCost: 2000, amazonSearch: 'premium+photo+backdrop+party' },
    { name: 'Champagne Glass Set (12 pcs)', baseCost: 1200, amazonSearch: 'champagne+glass+set+12+elegant' },
    { name: 'Satin Chair Covers (10 pcs)', baseCost: 1500, amazonSearch: 'satin+chair+covers+party' },
    { name: 'Gold Sequin Tablecloth', baseCost: 800, amazonSearch: 'gold+sequin+tablecloth' },
  ],
  cartoon: [
    { name: 'Cartoon Character Balloons', baseCost: 600, amazonSearch: 'cartoon+character+foil+balloons' },
    { name: 'Themed Paper Plates (50 pcs)', baseCost: 400, amazonSearch: 'cartoon+theme+paper+plates+party' },
    { name: 'Character Cutouts (5 pcs)', baseCost: 800, amazonSearch: 'cartoon+character+cutout+standee' },
    { name: 'Themed Tablecloth', baseCost: 300, amazonSearch: 'cartoon+themed+tablecloth+party' },
    { name: 'Party Hats (20 pcs)', baseCost: 250, amazonSearch: 'cartoon+party+hats+kids' },
    { name: 'Themed Banner & Bunting', baseCost: 350, amazonSearch: 'cartoon+banner+bunting+party' },
    { name: 'Goodie Bags (20 pcs)', baseCost: 500, amazonSearch: 'cartoon+goodie+bags+party+kids' },
    { name: 'Photo Props Kit', baseCost: 400, amazonSearch: 'cartoon+photo+props+party+kit' },
  ],
};

export const themeImages: Record<ThemeType, string[]> = {
  balloon: [
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504389899666-225e63a1f8f7?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=600&h=400&fit=crop',
  ],
  floral: [
    'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1561128290-005859ac81a3?w=600&h=400&fit=crop',
  ],
  elegant: [
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
  ],
  cartoon: [
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=400&fit=crop',
  ],
};

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
}

export function getScaledItems(theme: ThemeType, budget: number) {
  const decorationBudget = budget * 0.5;
  const items = themeItems[theme];
  const totalBaseCost = items.reduce((sum, item) => sum + item.baseCost, 0);
  const scale = decorationBudget / totalBaseCost;

  return items.map(item => ({
    ...item,
    scaledCost: Math.round(item.baseCost * scale),
    amazonUrl: `https://www.amazon.in/s?k=${item.amazonSearch}`,
  }));
}
