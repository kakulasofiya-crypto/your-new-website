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
      { id: 'balloon-basic-1', label: 'Simple Balloon Bunch', image: '/balloon-basic-1.jpg', description: 'Colorful balloon bunch on table — cheerful home party setup' },
      { id: 'balloon-basic-2', label: 'DIY Balloon Garland', image: '/balloon-basic-2.jpg', description: 'Simple balloon garland on wall with birthday banner' },
    ],
    standard: [
      { id: 'balloon-std-1', label: 'Balloon Arch Stage', image: '/balloon-standard-1.jpg', description: 'Colorful balloon arch over decorated table with LED backdrop' },
      { id: 'balloon-std-2', label: 'Ceiling Balloon Clusters', image: '/balloon-standard-2.jpg', description: 'Floating balloon clusters on ceiling with table balloons' },
    ],
    premium: [
      { id: 'balloon-prem-1', label: 'Pink & Gold Balloon Wall', image: '/balloon-premium-1.jpg', description: 'Massive pink & gold balloon wall with chandelier and stage sofa' },
      { id: 'balloon-prem-2', label: 'Balloon Canopy Stage', image: '/balloon-premium-2.jpg', description: 'Full balloon canopy over stage with foil letters and columns' },
    ],
    luxury: [
      { id: 'balloon-lux-1', label: 'Chrome Balloon Archway', image: '/balloon-luxury-1.jpg', description: 'Grand chrome & metallic balloon archway in premium ballroom' },
      { id: 'balloon-lux-2', label: 'Designer Balloon Wall', image: '/balloon-luxury-2.jpg', description: 'White & gold balloon wall with crystal chandelier and formal seating' },
    ],
    ultra: [
      { id: 'balloon-ultra-1', label: 'Immersive Balloon Room', image: '/balloon-ultra-1.jpg', description: 'Thousands of balloons covering ceiling to floor with neon LED lighting' },
      { id: 'balloon-ultra-2', label: 'Balloon Palace Entrance', image: '/balloon-ultra-2.jpg', description: 'Multiple giant balloon arches with red carpet and chrome balloons' },
    ],
  },
  floral: {
    basic: [
      { id: 'floral-basic-1', label: 'Table Flower Vases', image: '/floral-basic-1.jpg', description: 'Simple flower vases with marigold garlands on wall' },
      { id: 'floral-basic-2', label: 'Doorway Flower Garlands', image: '/floral-basic-2.jpg', description: 'Artificial flower garlands on doorway with marigold strings' },
    ],
    standard: [
      { id: 'floral-std-1', label: 'Hanging Floral Ceiling', image: '/floral-standard-1.jpg', description: 'Flower garlands hanging from ceiling with table arrangements' },
      { id: 'floral-std-2', label: 'Flower Wall Stage', image: '/floral-standard-2.jpg', description: 'Pink & white flower wall backdrop with sofa and arrangements' },
    ],
    premium: [
      { id: 'floral-prem-1', label: 'Grand Floral Mandap', image: '/floral-premium-1.jpg', description: 'Elaborate flower mandap with roses, hanging garlands and warm lighting' },
      { id: 'floral-prem-2', label: 'Flower Wall & Chandeliers', image: '/floral-premium-2.jpg', description: 'Massive flower wall with cascading garlands and crystal chandeliers' },
    ],
    luxury: [
      { id: 'floral-lux-1', label: 'Luxury Flower Stage', image: '/floral-luxury-1.jpg', description: 'Thousands of flowers covering stage, ceiling and floor with chandeliers' },
      { id: 'floral-lux-2', label: 'Indoor Garden Paradise', image: '/floral-luxury-2.jpg', description: 'Venue transformed into garden with hanging flowers and archway' },
    ],
    ultra: [
      { id: 'floral-ultra-1', label: 'Enchanted Flower Tunnel', image: '/floral-ultra-1.jpg', description: 'Entire venue as enchanted garden with flower tunnels and chandeliers' },
      { id: 'floral-ultra-2', label: 'Exotic Flower Palace', image: '/floral-ultra-2.jpg', description: 'Exotic flower installations with cascading arrangements and petal floor' },
    ],
  },
  elegant: {
    basic: [
      { id: 'elegant-basic-1', label: 'Candle & Fairy Lights', image: '/elegant-basic-1.jpg', description: 'Simple candles and fairy lights on wall — cozy elegant setup' },
      { id: 'elegant-basic-2', label: 'White Drape & Candles', image: '/elegant-basic-2.jpg', description: 'White fabric backdrop with candle arrangements on dining table' },
    ],
    standard: [
      { id: 'elegant-std-1', label: 'Gold & White Drapes', image: '/elegant-standard-1.jpg', description: 'Gold and white drape backdrop with chandelier and formal tables' },
      { id: 'elegant-std-2', label: 'Formal Stage Setup', image: '/elegant-standard-2.jpg', description: 'Draped stage with gold runners, candelabras and chair covers' },
    ],
    premium: [
      { id: 'elegant-prem-1', label: 'Ceiling Drapes & Chandeliers', image: '/elegant-premium-1.jpg', description: 'Sweeping gold ceiling drapes with crystal chandelier and gold chargers' },
      { id: 'elegant-prem-2', label: 'Grand Satin Stage', image: '/elegant-premium-2.jpg', description: 'Satin chair covers, crystal chandeliers, gold sequin stage backdrop' },
    ],
    luxury: [
      { id: 'elegant-lux-1', label: 'Palace Ballroom', image: '/elegant-luxury-1.jpg', description: 'Massive crystal chandelier with floor-to-ceiling white & gold drapes' },
      { id: 'elegant-lux-2', label: 'Royal Crystal Stage', image: '/elegant-luxury-2.jpg', description: 'Multiple chandeliers, white drapes, tufted sofa and gold accents' },
    ],
    ultra: [
      { id: 'elegant-ultra-1', label: 'Royal Palace Setup', image: '/elegant-ultra-1.jpg', description: 'Complete royal palace with gold mirrors, crystal installations and luxury furniture' },
      { id: 'elegant-ultra-2', label: 'Bespoke Crystal Hall', image: '/elegant-ultra-2.jpg', description: 'Crystal string ceiling, thousands of candles, red carpet, gold throne' },
    ],
  },
  cartoon: {
    basic: [
      { id: 'cartoon-basic-1', label: 'Character Cutouts & Table', image: '/cartoon-basic-1.jpg', description: 'Simple character cutouts on wall with themed tablecloth and cake' },
      { id: 'cartoon-basic-2', label: 'Banner & Party Setup', image: '/cartoon-basic-2.jpg', description: 'Character banner with themed plates, cups and party hats' },
    ],
    standard: [
      { id: 'cartoon-std-1', label: 'Character Stage', image: '/cartoon-standard-1.jpg', description: 'Stage with character backdrop, balloon arch and themed tables' },
      { id: 'cartoon-std-2', label: 'Colorful Drape Setup', image: '/cartoon-standard-2.jpg', description: 'Colorful drapes with balloon columns and cartoon decorations' },
    ],
    premium: [
      { id: 'cartoon-prem-1', label: 'Grand Character Stage', image: '/cartoon-premium-1.jpg', description: 'Large character cutouts, balloon arch, themed backdrop with castle' },
      { id: 'cartoon-prem-2', label: 'Full Theme Venue', image: '/cartoon-premium-2.jpg', description: 'Complete venue themed with balloon ceiling, character standees and props' },
    ],
    luxury: [
      { id: 'cartoon-lux-1', label: 'Mini Theme Park', image: '/cartoon-luxury-1.jpg', description: 'Venue as mini theme park with castle stage, life-size characters' },
      { id: 'cartoon-lux-2', label: 'Fantasy Stage & LED', image: '/cartoon-luxury-2.jpg', description: 'Giant character balloon sculptures, LED screens and spotlight effects' },
    ],
    ultra: [
      { id: 'cartoon-ultra-1', label: 'Fantasy Castle World', image: '/cartoon-ultra-1.jpg', description: 'Custom built fairy tale castle with theatrical lighting and themed zones' },
      { id: 'cartoon-ultra-2', label: 'Immersive Character World', image: '/cartoon-ultra-2.jpg', description: 'Life-size animatronic characters, special effects and immersive play zones' },
    ],
  },
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
