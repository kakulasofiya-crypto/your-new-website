import { EventType, ThemeType, eventTypes, themes, themeImages, getScaledItems, formatCurrency } from '@/data/eventData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ExternalLink, ShoppingCart } from 'lucide-react';
import BudgetBreakdown from './BudgetBreakdown';

interface Props {
  eventType: EventType;
  budget: number;
  theme: ThemeType;
  onReset: () => void;
}

const ResultsPage = ({ eventType, budget, theme, onReset }: Props) => {
  const event = eventTypes.find(e => e.id === eventType)!;
  const themeInfo = themes.find(t => t.id === theme)!;
  const images = themeImages[theme];
  const items = getScaledItems(theme, budget);
  const totalDecorationCost = items.reduce((sum, item) => sum + item.scaledCost, 0);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-5xl">{event.emoji}</span>
        <h2 className="text-3xl font-bold">Your {event.label} Plan</h2>
        <p className="text-muted-foreground">
          {themeInfo.emoji} {themeInfo.label} • Budget: {formatCurrency(budget)}
        </p>
      </div>

      {/* Theme Images */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">🖼️ Decoration Inspiration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden">
                <AspectRatio ratio={3 / 2}>
                  <img src={img} alt={`${themeInfo.label} decoration ${i + 1}`} className="w-full h-full object-cover" />
                </AspectRatio>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Item List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">🛒 Decoration Items & Costs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.name} className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">Est. {formatCurrency(item.scaledCost)}</p>
                </div>
                <a
                  href={item.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Buy on Amazon
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </a>
              </div>
            ))}
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20 font-bold">
              <span>Total Decoration Cost</span>
              <span className="text-primary">{formatCurrency(totalDecorationCost)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budget Breakdown */}
      <BudgetBreakdown budget={budget} />

      {/* Reset */}
      <div className="text-center">
        <Button onClick={onReset} size="lg" className="gap-2">
          🎯 Plan Another Event
        </Button>
      </div>
    </div>
  );
};

export default ResultsPage;
