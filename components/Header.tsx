import React from 'react';
import { PAPER_TITLE, CONFERENCE } from '../constants';
import { Button } from './Button';
import { Icons } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="pt-16 pb-8 md:pt-24 md:pb-12 text-center px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6 font-google-sans">
        {PAPER_TITLE}
      </h1>
      {/* <p className="text-xl md:text-2xl text-slate-600 mb-8 font-medium">
        {CONFERENCE}
      </p> */}

      <div className="text-lg mb-2">
        <a href="https://63days.github.io" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 transition-colors">Juil Koo</a>*,{' '}
        <a href="https://choidaedae.github.io" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 transition-colors">Daehyeon Choi</a>*,{' '}
        <span className="text-sky-500">Sangwoo Youn</span>*,{' '}
        <a href="https://phillipinseoul.github.io" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 transition-colors">Phillip Y. Lee</a>,{' '}
        <a href="https://mhsung.github.io" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 transition-colors">Minhyuk Sung</a>
      </div>
      <div className="text-slate-600 text-lg mb-2 font-medium">
        KAIST
      </div>
      <div className="text-slate-500 text-sm mb-8">
        * Equal Contribution
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Button variant="primary" icon={<Icons.Paper />}>
          Paper
        </Button>
        <Button variant="secondary" icon={<Icons.Code />}>
          Code
        </Button>
        <Button variant="secondary" icon={<Icons.Data />}>
          Dataset
        </Button>
      </div>
    </header>
  );
};