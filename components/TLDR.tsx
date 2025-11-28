import React from 'react';
import { TLDR_TEXT } from '../constants';

export const TLDR: React.FC = () => {
  return (
    <section className="bg-slate-50 py-8 px-8 rounded-3xl mx-auto max-w-4xl shadow-sm border border-slate-100 text-center">
      <h2 className="text-xl font-bold text-slate-800 mb-3 uppercase tracking-wide">TL;DR</h2>
      <p className="text-slate-700 leading-relaxed text-lg font-medium">
        {TLDR_TEXT}
      </p>
    </section>
  );
};