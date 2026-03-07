

## Smart Event Organizer Website

**Important note:** This project runs on React + Vite + TypeScript (Lovable's stack). Python Flask is not supported in this environment, so I'll build the same functionality as a fully client-side React app with the same flow and features.

### Flow

1. **Landing Page** — Welcome screen with a "Get Started" button
2. **Step 1: Event Type** — Select from Birthday, Engagement, Marriage Anniversary, Retirement, Baby Shower
3. **Step 2: Budget** — Select from ₹10,000 / ₹25,000 / ₹50,000 / ₹1,00,000 / ₹2,00,000
4. **Step 3: Theme** — Select from Balloon, Floral, Elegant, Cartoon
5. **Results Page** — Shows:
   - Decoration images (placeholder/stock images per theme)
   - Item list with estimated costs
   - Amazon search links for each item
   - Budget breakdown pie chart (Decoration, Food, Services) using Recharts

### File Structure

- `src/pages/Index.tsx` — Multi-step wizard with state management
- `src/components/EventSelector.tsx` — Event type selection cards
- `src/components/BudgetSelector.tsx` — Budget range selection
- `src/components/ThemeSelector.tsx` — Theme selection with preview images
- `src/components/ResultsPage.tsx` — Final results with items, costs, images, links
- `src/components/BudgetBreakdown.tsx` — Pie chart breakdown using Recharts
- `src/data/eventData.ts` — All event/theme/item data with prices and Amazon links

### Key Details

- Step-by-step wizard UI with progress indicator and back navigation
- Theme-specific decoration items with dynamically calculated costs based on budget
- Amazon search links generated from item names
- Budget split: ~50% Decoration, ~30% Food, ~20% Services (displayed as pie chart)
- Responsive design with cards and clean UI using shadcn components
- Indian Rupee formatting throughout

