import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { PaymentData } from '../../types';

interface Props {
  data: PaymentData[];
}

const COLORS = ['#8b5cf6', '#0ea5e9', '#f59e0b', '#10b981'];

export function PaymentMethodChart({ data }: Props) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col h-full">
      <div className="mb-4">
        <h3 className="font-bold text-lg text-slate-900">Payment Methods</h3>
        <p className="text-sm text-slate-500">How customers are paying</p>
      </div>
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              nameKey="method"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => [`${value}%`, 'Usage']}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#64748b' }}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
