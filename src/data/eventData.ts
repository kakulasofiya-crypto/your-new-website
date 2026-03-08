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

export const themeDecorations: Record<ThemeType, DecorationOption[]> = {
  balloon: [
    { id: 'balloon-arch', label: 'Balloon Arch Setup', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop', description: 'Grand balloon arch for entrance or stage' },
    { id: 'balloon-wall', label: 'Balloon Wall Backdrop', image: 'https://images.unsplash.com/photo-1504389899666-225e63a1f8f7?w=600&h=400&fit=crop', description: 'Full wall covered with colorful balloons' },
    { id: 'balloon-cluster', label: 'Balloon Cluster Ceiling', image: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=600&h=400&fit=crop', description: 'Floating balloon clusters across the ceiling' },
    { id: 'balloon-column', label: 'Balloon Columns', image: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=600&h=400&fit=crop', description: 'Tall balloon columns flanking the stage' },
  ],
  floral: [
    { id: 'floral-mandap', label: 'Floral Mandap Setup', image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=400&fit=crop', description: 'Flower-covered mandap or centerpiece' },
    { id: 'floral-garland', label: 'Hanging Garlands', image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop', description: 'Cascading floral garlands from ceiling' },
    { id: 'floral-table', label: 'Table Floral Arrangements', image: 'https://images.unsplash.com/photo-1561128290-005859ac81a3?w=600&h=400&fit=crop', description: 'Elegant table centerpieces with fresh flowers' },
    { id: 'floral-entrance', label: 'Floral Entrance Gate', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop', description: 'Grand entrance decorated with flowers' },
  ],
  elegant: [
    { id: 'elegant-drapes', label: 'Draped Stage Setup', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop', description: 'Luxurious fabric drapes with gold accents' },
    { id: 'elegant-chandelier', label: 'Chandelier & Candles', image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=400&fit=crop', description: 'Crystal chandeliers with candle arrangements' },
    { id: 'elegant-table', label: 'Premium Table Setting', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop', description: 'Gold & white premium table setting' },
    { id: 'elegant-lounge', label: 'Lounge Area Setup', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', description: 'Sophisticated lounge seating area' },
  ],
  cartoon: [
    { id: 'cartoon-stage', label: 'Character Stage', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop', description: 'Stage decorated with cartoon character cutouts' },
    { id: 'cartoon-table', label: 'Themed Table Setup', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop', description: 'Cartoon-themed table with matching accessories' },
    { id: 'cartoon-photo', label: 'Photo Booth Corner', image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=400&fit=crop', description: 'Fun photo booth with cartoon props' },
    { id: 'cartoon-entrance', label: 'Character Entrance', image: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=600&h=400&fit=crop', description: 'Entrance with character balloon arch' },
  ],
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
