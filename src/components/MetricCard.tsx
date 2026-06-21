import React from 'react';
import { cn } from '../lib/utils';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
  className?: string;
}

export function MetricCard({ title, value, change, isPositive, icon: Icon, className }: MetricCardProps) {
  // Determine colors based on isPositive roughly
  const iconBg = isPositive ? 'bg-indigo-100/50 text-indigo-600' : 'bg-amber-100/50 text-amber-600';

  return (
    <div className={cn("bg-white rounded-3xl p-5 border border-slate-200 flex items-center gap-4", className)}>
      <div className={cn("w-12 h-12 rounded-2xl flex flex-shrink-0 items-center justify-center", iconBg)}>
        <Icon size={24} />
      </div>
      <div className="min-w-0">
        <div className="text-xs text-slate-500 font-medium truncate">{title}</div>
        <div className="text-lg font-bold flex items-center gap-2 truncate">
          {value}
          <span className={cn("text-xs font-bold", isPositive ? "text-emerald-600" : "text-amber-600")}>
            {isPositive ? '+' : ''}{change}
          </span>
        </div>
      </div>
    </div>
  );
}
