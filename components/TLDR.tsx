import React from 'react';

export const TLDR: React.FC = () => {
  return (
    <section className="py-2 mx-auto max-w-5xl text-center">
      <p className="text-slate-800 leading-relaxed text-lg font-light">
        <span className="font-bold">TL;DR:</span> We present the <span className="font-medium italic">Visually-Grounded Active View Selection (VG-AVS)</span> framework, turning static VLM perception into active view selection: when the current view is insufficient, the agent moves to a more informative viewpoint for better Visual Question Answering.
      </p>
    </section>
  );
};