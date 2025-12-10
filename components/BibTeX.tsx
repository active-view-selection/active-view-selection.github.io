import React from 'react';
import { BIBTEX } from '../constants';

export const BibTeX: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BIBTEX);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-slate-900 text-slate-300 py-12 px-4 rounded-xl max-w-4xl mx-auto my-16 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white font-google-sans">BibTeX</h2>
        <button
          onClick={handleCopy}
          className="text-xs uppercase tracking-wider font-semibold hover:text-white transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 bg-slate-950 rounded-lg text-sm font-mono leading-relaxed border border-slate-800">
        {BIBTEX}
      </pre>
    </section>
  );
};