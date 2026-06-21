import React from 'react';
import { Insight } from '../types';
import { Sparkles, TrendingUp, TrendingDown, Info, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface Props {
  insights: Insight[];
}

const iconMap = {
  positive: TrendingUp,
  negative: TrendingDown,
  neutral: Info,
  actionable: Sparkles
};

const colorMap = {
  positive: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  negative: 'bg-rose-50 text-rose-700 border-rose-100',
  neutral: 'bg-slate-50 text-slate-700 border-slate-100',
  actionable: 'bg-indigo-50 text-indigo-700 border-indigo-100'
};

const iconColorMap = {
  positive: 'text-emerald-500',
  negative: 'text-rose-500',
  neutral: 'text-slate-500',
  actionable: 'text-indigo-500'
};

export function InsightsPanel({ insights }: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
          <Sparkles size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">AI Daily Insights</h3>
          <p className="text-sm text-slate-500">Automated analysis of your store's performance</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight) => {
          const Icon = iconMap[insight.type];
          return (
            <div 
              key={insight.id} 
              className={cn(
                "p-4 rounded-xl border flex items-start gap-4 transition-colors hover:bg-opacity-80",
                colorMap[insight.type]
              )}
            >
              <div className={cn("p-2 rounded-full bg-white shadow-sm mt-1 shrink-0", iconColorMap[insight.type])}>
                <Icon size={16} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1 flex items-center justify-between">
                  {insight.title}
                  {insight.type === 'actionable' && (
                    <span className="flex items-center gap-1 text-xs font-medium bg-white px-2 py-1 rounded-full shadow-sm text-indigo-600">
                      Action Required <ArrowUpRight size={12} />
                    </span>
                  )}
                </h4>
                <p className="text-sm opacity-90 leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
