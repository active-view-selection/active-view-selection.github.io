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

      <div className="text-slate-600 text-lg mb-2">
        Juil Koo*, Daehyeon Choi*, Sangwoo Youn*, Phillip Y. Lee, Minhyuk Sung
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