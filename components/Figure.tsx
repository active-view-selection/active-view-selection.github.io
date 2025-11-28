import React from 'react';

interface FigureProps {
  src: string;
  caption: React.ReactNode;
  alt: string;
}

export const Figure: React.FC<FigureProps> = ({ src, caption, alt }) => {
  return (
    <figure className="my-12 w-full">
      <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white p-2">
        <img src={src} alt={alt} className="w-full h-auto object-cover" />
      </div>
      <figcaption className="mt-4 text-center text-slate-600 text-sm md:text-base leading-snug px-4 md:px-12">
        {caption}
      </figcaption>
    </figure>
  );
};