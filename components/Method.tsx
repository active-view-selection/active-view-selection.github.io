import React from 'react';
import { Figure } from './Figure';

export const Method: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-slate-900 font-google-sans text-center">Overview</h2>

        <p className="text-lg text-slate-700 mb-8 leading-relaxed font-light">
          We propose Visually Grounded Active View Selection (VG-AVS), a novel task in which an agent selects the most informative next viewpoint using only the current image, without scene memory or external knowledge. To enable this, we introduce (1) an automatic pipeline for constructing a synthetic training dataset and (2) a learning framework that fine-tunes a VLM into a viewpoint-selection policy using a compact yet high-coverage action space and a two-stage training strategy. Our method achieves strong question-answering performance with robust generalization to unseen synthetic and real scenes, and further improves EQA performance when integrated into existing EQA pipelines.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900 font-google-sans">Continuous Action Space</h3>
            <p className="text-slate-700 mb-4 font-light">
              We define a continuous action space consisting of:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 font-light">
              <li><strong>Heading Rotation (φ<sup>h</sup>):</strong> Azimuthal turn relative to current orientation.</li>
              <li><strong>Forward Translation (d):</strong> Distance to move forward.</li>
              <li><strong>View Rotation (φ<sup>v</sup>):</strong> Final head turn to center the object of interest.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900 font-google-sans">Training Strategy</h3>
            <p className="text-slate-700 font-light">
              We employ a two-stage training process:
            </p>
            <ol className="list-decimal list-inside space-y-4 mt-4 text-slate-700 font-light">
              <li className="pl-2">
                <span className="font-semibold text-slate-900">Supervised Fine-Tuning (SFT): </span>
                Initializes the model using ground-truth actions derived from our synthetic dataset.
              </li>
              <li className="pl-2">
                <span className="font-semibold text-slate-900">Reinforcement Learning (RL): </span>
                Further refines the policy using a verifier-based reward, allowing the model to generalize beyond the training distribution.
              </li>
            </ol>
          </div>
        </div>

        <Figure
          src="./figures/method_overview.png"
          alt="Training Pipeline"
          caption={
            <span>
              Overview of training strategies.
            </span>
          }
        />
      </div>
    </section>
  );
};