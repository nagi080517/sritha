import React from 'react';
import { SalesTrendChart } from './charts/SalesTrendChart';
import { salesData } from '../data';
import { MetricCard } from './MetricCard';
import { DollarSign, TrendingUp, Activity, Target } from 'lucide-react';

export function SalesTrends() {
  return (
    <>
      <header className="flex justify-between items-end mb-2 shrink-0">
        <div>
           <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Sales Trends</h1>
           <p className="text-slate-500">In-depth analysis of revenue and performance over time</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
           <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Last 30 Days</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-shrink-0 mt-6">
        <MetricCard 
          title="Monthly Recurring" 
          value="$45k" 
          change="8.2%" 
          isPositive={true} 
          icon={Activity} 
        />
        <MetricCard 
          title="Gross Volume" 
          value="$112k" 
          change="15%" 
          isPositive={true} 
          icon={DollarSign} 
        />
        <MetricCard 
          title="Net Margin" 
          value="24.5%" 
          change="1.1%" 
          isPositive={true} 
          icon={TrendingUp} 
        />
        <MetricCard 
          title="Forecasted EOM" 
          value="$145k" 
          change="On Track" 
          isPositive={true} 
          icon={Target} 
        />
      </div>

      <div className="h-[500px] mt-6 pb-8">
        <SalesTrendChart data={salesData} />
      </div>
    </>
  );
}
