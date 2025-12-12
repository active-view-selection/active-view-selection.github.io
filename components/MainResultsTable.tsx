import React from 'react';
import { MAIN_RESULTS_DATA } from '../constants';

export const MainResultsTable: React.FC = () => {
  return (
    <div className="overflow-x-auto rounded-xl shadow border border-slate-200 bg-white">
      <table className="w-full text-sm text-left text-slate-600">
        <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
          <tr>
            <th scope="col" className="px-6 py-4 font-bold border-r border-slate-200 font-google-sans">
              Action Model
            </th>
            <th scope="col" colSpan={4} className="px-6 py-4 text-center font-bold border-r border-slate-200 bg-blue-50/50 text-blue-900 font-google-sans">
              AVS-ProcTHOR (Synthetic)
            </th>
            <th scope="col" colSpan={6} className="px-6 py-4 text-center font-bold bg-green-50/50 text-green-900 font-google-sans">
              AVS-HM3D (Real)
            </th>
          </tr>
          <tr className="border-b border-slate-200">
            <th className="py-3 px-4 text-left font-light text-slate-600 border-b border-slate-200">Model</th>
            <th className="py-3 px-4 text-center font-light text-slate-600 border-b border-slate-200">Exist</th>
            <th className="py-3 px-4 text-center font-light text-slate-600 border-b border-slate-200">Count</th>
            <th className="py-3 px-4 text-center font-light text-slate-600 border-b border-slate-200">State</th>
            <th className="py-3 px-4 text-center font-semibold text-slate-900 border-b border-slate-200 bg-slate-50/50">Avg</th>
            <th className="py-3 px-4 text-center font-light text-slate-600 border-b border-slate-200 border-l border-slate-100">Exist</th>
            <th className="py-3 px-4 text-center font-light text-slate-600 border-b border-slate-200">Count</th>
            <th className="py-3 px-4 text-center font-light text-slate-600 border-b border-slate-200">State</th>
            <th className="py-3 px-4 text-center font-light text-slate-600 border-b border-slate-200">Attr</th>
            <th className="py-3 px-4 text-center font-light text-slate-600 border-b border-slate-200">Obj</th>
            <th className="py-3 px-4 text-center font-semibold text-slate-900 border-b border-slate-200 bg-slate-50/50">Avg</th>
          </tr>
        </thead>
        <tbody>
          {MAIN_RESULTS_DATA.map((row, index) => (
            <tr
              key={row.model}
              className={`border-b border-slate-100 last:border-none hover:bg-slate-50 transition-colors ${row.highlight ? 'bg-blue-50/20 font-medium' : ''
                }`}
            >
              <td className="px-6 py-4 font-medium text-slate-900 border-r border-slate-200 whitespace-nowrap">
                {row.model}
                {row.highlight && <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">Ours</span>}
              </td>

              {/* ProcTHOR Data */}
              <td className="px-3 py-4 text-center bg-blue-50/10">{row.procthor.exist.toFixed(2)}</td>
              <td className="px-3 py-4 text-center bg-blue-50/10">{row.procthor.count.toFixed(2)}</td>
              <td className="px-3 py-4 text-center bg-blue-50/10">{row.procthor.state.toFixed(2)}</td>
              <td className={`px-3 py-4 text-center bg-blue-50/10 ${row.highlight ? 'font-bold text-blue-700' : ''}`}>
                {row.procthor.avg.toFixed(2)}
              </td>

              {/* HM3D Data */}
              <td className="px-3 py-4 text-center border-l border-slate-200 bg-green-50/10">{row.hm3d.exist.toFixed(2)}</td>
              <td className="px-3 py-4 text-center bg-green-50/10">{row.hm3d.count.toFixed(2)}</td>
              <td className="px-3 py-4 text-center bg-green-50/10">{row.hm3d.state.toFixed(2)}</td>
              <td className="px-3 py-4 text-center bg-green-50/10">{row.hm3d.attr.toFixed(2)}</td>
              <td className="px-3 py-4 text-center bg-green-50/10">{row.hm3d.obj.toFixed(2)}</td>
              <td className={`px-3 py-4 text-center bg-green-50/10 ${row.highlight ? 'font-bold text-green-700' : ''}`}>
                {row.hm3d.avg.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};