import React from 'react';
import { PaymentMethodChart } from './charts/PaymentMethodChart';
import { paymentData } from '../data';
import { MetricCard } from './MetricCard';
import { Users, UserPlus, Fingerprint, ActivitySquare } from 'lucide-react';

export function CustomerProfiles() {
  return (
    <>
      <header className="flex justify-between items-end mb-2 shrink-0">
        <div>
           <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Customer Profiles</h1>
           <p className="text-slate-500">Demographics, behaviors, and payment preferences</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
           <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Live Segments</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-shrink-0 mt-6">
        <MetricCard 
          title="Total Active Customers" 
          value="12,450" 
          change="4.2%" 
          isPositive={true} 
          icon={Users} 
        />
        <MetricCard 
          title="New Registrations" 
          value="842" 
          change="12%" 
          isPositive={true} 
          icon={UserPlus} 
        />
        <MetricCard 
          title="Retention Rate" 
          value="68%" 
          change="2.1%" 
          isPositive={false} 
          icon={Fingerprint} 
        />
        <MetricCard 
          title="Engagement Score" 
          value="8.4/10" 
          change="0.5" 
          isPositive={true} 
          icon={ActivitySquare} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 pb-8">
        <div className="h-[400px]">
          <PaymentMethodChart data={paymentData} />
        </div>
        <div className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col h-[400px]">
          <div className="mb-4">
            <h3 className="font-bold text-lg text-slate-900">Recent Signups</h3>
            <p className="text-sm text-slate-500">Latest accounts created today</p>
          </div>
          <div className="flex-1 overflow-y-auto space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold shrink-0">
                  {String.fromCharCode(65 + i)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">Customer {101 + i}</p>
                  <p className="text-xs text-slate-500 truncate">customer{101 + i}@example.com</p>
                </div>
                <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                  Active
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
