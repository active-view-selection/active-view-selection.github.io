import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';
import { Button } from './Button';
import { Figure } from './Figure';

export const DetailedQualitativeView: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200 px-4 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <Link to="/">
            <Button variant="outline" icon={<Icons.ArrowLeft />}>
              Back to Project Page
            </Button>
          </Link>
          <h2 className="text-lg font-bold text-slate-900 hidden md:block font-google-sans">
            Extended Qualitative Results
          </h2>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12 space-y-16">

        {/* Section 1: Comparison Strip */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-google-sans">Comparison with Baselines</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Visual comparison of our AVS framework (right) with other baselines.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-200">
            <Figure
              src="figures/qualitative.png"
              alt="Qualitative Comparison Strip"
              caption={
                <span>
                  Qualitative results in AVS-ProcTHOR (top) and AVS-HM3D (bottom).
                  <span className="bg-blue-100 text-blue-800 px-1 rounded">Blue</span> and <span className="bg-yellow-100 text-yellow-800 px-1 rounded">yellow</span> mark the object of interest and surrounding cue objects.
                  <span className="text-green-600 font-bold"> ✓</span> corresponds to correct answers,
                  <span className="text-red-600 font-bold"> ✗</span> to wrong answers.
                  Our method consistently finds views that answer the question correctly.
                </span>
              }
            />
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-200 mt-8">
            <Figure
              src="figures/qualitative2.png"
              alt="Qualitative Comparison Strip Detailed"
              caption={
                <span>
                  More qualitative results on AVS-ProcTHOR (top four rows) and AVS-HM3D (bottom four rows). <span className="bg-blue-100 text-blue-800 px-1 rounded">Blue</span> and <span className="bg-slate-200 text-slate-800 px-1 rounded">gray</span> mark the object of interest and surrounding cue objects, respectively. <span className="text-green-600 font-bold">✓</span> denotes correct answers (LLM-Match = 5), <span className="text-red-600 font-bold">✗</span> incorrect ones (LLM-Match ≤ 2).
                </span>
              }
            />
          </div>
        </section>

        {/* Section 2: EQA Pipeline Integration */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-google-sans">Integration into EQA Pipeline</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Demonstration of our active view selection module as a "plug-and-play" refinement step at the end of a standard EQA exploration trajectory.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-200">
            <Figure
              src="figures/EQA.png"
              alt="EQA Integration"
              caption={
                <span>
                  Illustration of integrating our AVS framework into an EQA pipeline.
                  The yellow line represents the the initial exploration performed by the EQA pipeline, during which the agent does not yet have enough visual information to answer the question. The <span className="text-blue-600">blue arrow</span> represents the final viewpoint refinement by our model.
                  Standard EQA (Fine-EQA) often stops with the target partially occluded; our model minimally adjusts to reveal it.
                </span>
              }
            />
          </div>
        </section>

      </div>
    </div>
  );
};