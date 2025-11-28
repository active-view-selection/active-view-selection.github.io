import React from 'react';
import { ABSTRACT_TEXT } from '../constants';

export const Abstract: React.FC = () => {
  return (
    <section className="bg-slate-50 py-12 px-4 rounded-3xl mx-auto max-w-4xl shadow-sm border border-slate-100">
      <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">Abstract</h2>
      <p className="text-slate-700 leading-relaxed text-lg text-justify">
        {ABSTRACT_TEXT}
      </p>
    </section>
  );
};