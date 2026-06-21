import React from 'react';
import { Insight, SalesData } from '../types';

interface Props {
  insight: Insight;
  projectedRevenue: number;
}

export function HeroInsight({ insight, projectedRevenue }: Props) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl shadow-blue-200/50 flex items-center justify-between relative overflow-hidden flex-shrink-0">
      <div className="relative z-10 w-2/3">
        <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-2 py-1 rounded mb-4 inline-block text-white">
          Primary Objective
        </span>
        <h2 className="text-2xl font-bold mb-2">{insight.title}</h2>
        <p className="text-blue-100 opacity-90">
          AI Recommendation: {insight.description}
        </p>
      </div>
      <div className="z-10 bg-white/10 p-4 rounded-2xl border border-white/20 backdrop-blur-sm text-center">
        <div className="text-4xl font-bold text-white">${(projectedRevenue / 1000).toFixed(1)}k</div>
        <div className="text-xs text-blue-200 uppercase font-bold tracking-tight">Projected Daily Revenue</div>
      </div>
      <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 pointer-events-none"></div>
    </section>
  );
}
