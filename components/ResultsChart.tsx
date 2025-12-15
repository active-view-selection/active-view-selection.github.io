import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChartDataPoint } from '../types';

interface ResultsChartProps {
  data: ChartDataPoint[];
  title: string;
}

export const ResultsChart: React.FC<ResultsChartProps> = ({ data, title }) => {
  return (
    <div className="w-full flex flex-col h-full min-h-[400px]">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-slate-800 font-google-sans">{title}</h3>
        <p className="text-sm text-slate-500">Average Accuracy Comparison</p>
      </div>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              height={100}
              tick={({ x, y, payload }) => (
                <g transform={`translate(${x},${y})`}>
                  <text
                    x={0}
                    y={0}
                    dy={16}
                    textAnchor="end"
                    fill="#475569"
                    transform="rotate(-45)"
                    style={{
                      fontSize: 11,
                      fontFamily: 'Noto Sans, sans-serif',
                      fontWeight: payload.value.includes('Ours') ? 700 : 400,
                    }}
                  >
                    {payload.value}
                  </text>
                </g>
              )}
              interval={0}
            />
            <YAxis
              label={{ value: 'Accuracy (%)', angle: -90, position: 'insideLeft', offset: 10, fill: '#475569', fontFamily: 'Noto Sans, sans-serif' }}
              domain={[30, 90]}
              tick={{ fill: '#475569', fontFamily: 'Noto Sans, sans-serif' }}
            />
            <Tooltip
              cursor={{ fill: '#f1f5f9' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontFamily: 'Noto Sans, sans-serif' }}
            />
            <Bar dataKey="score" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.name.includes('Ours') ? '#3b82f6' : '#94a3b8'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};