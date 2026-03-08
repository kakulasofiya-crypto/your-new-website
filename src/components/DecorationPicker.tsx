import { ThemeType, themeDecorations } from '@/data/eventData';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CheckCircle } from 'lucide-react';

interface Props {
  theme: ThemeType;
  onSelect: (decorationId: string) => void;
}

const DecorationPicker = ({ theme, onSelect }: Props) => {
  const decorations = themeDecorations[theme];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">How Should Your Event Look?</h2>
        <p className="text-muted-foreground">Pick a stage & decoration style you love</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {decorations.map((deco) => (
          <Card
            key={deco.id}
            className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50 overflow-hidden group"
            onClick={() => onSelect(deco.id)}
          >
            <AspectRatio ratio={4 / 3}>
              <img
                src={deco.image}
                alt={deco.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                <span className="text-white font-semibold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" /> Select This
                </span>
              </div>
            </AspectRatio>
            <CardContent className="p-4 text-center space-y-1">
              <h3 className="text-lg font-semibold">{deco.label}</h3>
              <p className="text-sm text-muted-foreground">{deco.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DecorationPicker;
