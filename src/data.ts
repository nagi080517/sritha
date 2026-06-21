import { format, subDays } from 'date-fns';
import { SalesData, CategoryData, PaymentData, RatingData, Insight } from './types';

// Generate last 30 days of mock sales data
export const generateSalesData = (): SalesData[] => {
  const data: SalesData[] = [];
  const today = new Date();
  for (let i = 29; i >= 0; i--) {
    const date = subDays(today, i);
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const baseRevenue = isWeekend ? 15000 : 8000;
    const noise = Math.floor(Math.random() * 4000) - 2000;
    
    data.push({
      date: format(date, 'MMM dd'),
      revenue: baseRevenue + noise,
      orders: Math.floor((baseRevenue + noise) / 120), // Avg order value ~$120
      visitors: Math.floor((baseRevenue + noise) / 3), // ~3% conversion rate
    });
  }
  return data;
};

export const salesData = generateSalesData();

export const categoryData: CategoryData[] = [
  { name: 'Electronics', sales: 4500, revenue: 850000 },
  { name: 'Fashion', sales: 6200, revenue: 320000 },
  { name: 'Home & Kitchen', sales: 3800, revenue: 410000 },
  { name: 'Beauty', sales: 5100, revenue: 190000 },
  { name: 'Sports', sales: 2900, revenue: 230000 },
];

export const paymentData: PaymentData[] = [
  { method: 'Credit Card', value: 40 },
  { method: 'UPI', value: 35 },
  { method: 'COD', value: 15 },
  { method: 'Digital Wallet', value: 10 },
];

export const ratingData: RatingData[] = [
  { rating: '5 Stars', averageSales: 15400, customerSatisfaction: 98 },
  { rating: '4 Stars', averageSales: 11200, customerSatisfaction: 85 },
  { rating: '3 Stars', averageSales: 4500, customerSatisfaction: 60 },
  { rating: '2 Stars', averageSales: 1200, customerSatisfaction: 30 },
  { rating: '1 Star', averageSales: 500, customerSatisfaction: 10 },
];

export const aiInsights: Insight[] = [
  {
    id: '1',
    type: 'positive',
    title: 'Weekend Sales Surge',
    description: 'Revenue consistently increases by ~65% on weekends. Consider launching flash sales on Saturday mornings.'
  },
  {
    id: '2',
    type: 'actionable',
    title: 'Payment Method Shift',
    description: 'Digital Wallet usage has grown 15% this month. Ensure checkout flow is optimized for Google Pay and Apple Pay.'
  },
  {
    id: '3',
    type: 'negative',
    title: 'Beauty Category Drop',
    description: 'Beauty product sales are down 8% compared to last week. Check inventory levels for top SKUs.'
  },
  {
    id: '4',
    type: 'positive',
    title: 'High Rating Impact',
    description: 'Products with 4+ stars generate 80% of total revenue. Incentivize reviews for new product launches.'
  }
];
