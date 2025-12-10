import React from 'react';
import { TLDR_TEXT } from '../constants';

export const TLDR: React.FC = () => {
  return (
    <section className="py-2 mx-auto max-w-5xl text-center">
      <h2 className="text-xl font-bold text-slate-800 mb-3 uppercase tracking-wide">TL;DR</h2>
      <p className="text-slate-700 leading-relaxed text-lg font-medium">
        {TLDR_TEXT}
      </p>
    </section>
  );
};