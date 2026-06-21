import React from 'react';
import { ShoppingCart, TrendingUp, AlertTriangle, DollarSign } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { SalesTrendChart } from './charts/SalesTrendChart';
import { CategoryChart } from './charts/CategoryChart';
import { PaymentMethodChart } from './charts/PaymentMethodChart';
import { RatingChart } from './charts/RatingChart';
import { HeroInsight } from './HeroInsight';
import { salesData, categoryData, paymentData, ratingData, aiInsights } from '../data';

export function Overview() {
  const actionableInsight = aiInsights.find(i => i.type === 'actionable') || aiInsights[0];
  const projectedRevenue = salesData[salesData.length - 1].revenue * 1.5;

  return (
    <>
      <header className="flex justify-between items-end mb-2 shrink-0">
        <div>
           <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Morning Briefing</h1>
           <p className="text-slate-500">AI-Generated tasks based on last 24h shopping behavior</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
           <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Real-time Stream: Active</span>
        </div>
      </header>

      <HeroInsight insight={actionableInsight} projectedRevenue={projectedRevenue} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-shrink-0 mt-4">
        <div className="lg:col-span-2">
          <SalesTrendChart data={salesData} />
        </div>
        <div className="lg:col-span-1 h-[400px]">
          <CategoryChart data={categoryData} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-shrink-0 my-6">
        <MetricCard 
          title="Operational Bottlenecks" 
          value="0 Detected" 
          change="All green" 
          isPositive={true} 
          icon={AlertTriangle} 
        />
        <MetricCard 
          title="Total Pending Orders" 
          value="142" 
          change="12%" 
          isPositive={false} 
          icon={ShoppingCart} 
        />
        <MetricCard 
          title="Revenue Growth" 
          value="+21.4%" 
          change="1.2%" 
          isPositive={true} 
          icon={TrendingUp} 
        />
        <MetricCard 
          title="Avg Order Size" 
          value="$124" 
          change="4.3%" 
          isPositive={true} 
          icon={DollarSign} 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
         <div className="h-[350px]">
           <PaymentMethodChart data={paymentData} />
         </div>
         <div className="h-[350px]">
           <RatingChart data={ratingData} />
         </div>
      </div>
    </>
  );
}
