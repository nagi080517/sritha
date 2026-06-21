import React from 'react';
import { CategoryChart } from './charts/CategoryChart';
import { RatingChart } from './charts/RatingChart';
import { categoryData, ratingData } from '../data';
import { MetricCard } from './MetricCard';
import { Package, AlertOctagon, TrendingDown, Star } from 'lucide-react';

export function InventoryInsights() {
  return (
    <>
      <header className="flex justify-between items-end mb-2 shrink-0">
        <div>
           <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Inventory Insights</h1>
           <p className="text-slate-500">Stock levels, category performance, and product ratings</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
           <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Stock Sync</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-shrink-0 mt-6">
        <MetricCard 
          title="Total Items in Stock" 
          value="45,231" 
          change="890" 
          isPositive={true} 
          icon={Package} 
        />
        <MetricCard 
          title="Low Stock Alerts" 
          value="24" 
          change="5 resolved" 
          isPositive={false} 
          icon={AlertOctagon} 
        />
        <MetricCard 
          title="Dead Stock Value" 
          value="$12.4k" 
          change="2.1%" 
          isPositive={true} 
          icon={TrendingDown} 
        />
        <MetricCard 
          title="Avg Product Rating" 
          value="4.6" 
          change="0.2" 
          isPositive={true} 
          icon={Star} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 pb-8">
        <div className="h-[400px]">
          <CategoryChart data={categoryData} />
        </div>
        <div className="h-[400px]">
          <RatingChart data={ratingData} />
        </div>
      </div>
    </>
  );
}
