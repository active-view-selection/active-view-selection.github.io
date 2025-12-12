import React from 'react';
import { TLDR_TEXT } from '../constants';

export const TLDR: React.FC = () => {
  return (
    <section className="py-2 mx-auto max-w-5xl text-center">
      <p className="text-slate-800 leading-relaxed text-lg font-light">
        <span className="font-bold">TL;DR:</span> {TLDR_TEXT}
      </p>
    </section>
  );
};