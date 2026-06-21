export interface SalesData {
  date: string;
  revenue: number;
  orders: number;
  visitors: number;
}

export interface CategoryData {
  name: string;
  sales: number;
  revenue: number;
}

export interface PaymentData {
  method: string;
  value: number;
}

export interface RatingData {
  rating: string;
  averageSales: number;
  customerSatisfaction: number;
}

export interface Insight {
  id: string;
  type: 'positive' | 'negative' | 'neutral' | 'actionable';
  title: string;
  description: string;
}
