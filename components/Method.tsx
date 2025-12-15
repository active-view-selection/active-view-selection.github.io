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

        {/* Continuous Action Space Section */}
        <div className="grid md:grid-cols-2 gap-12 mt-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900 font-google-sans">Continuous Action Space</h3>
            <p className="text-slate-700 mb-4 font-light">
              We define a continuous action space consisting of:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 font-light">
              <li><strong>Heading Rotation (φ<sup>h</sup>):</strong> Azimuthal turn relative to current orientation.</li>
              <li><strong>Forward Translation (d):</strong> Distance to move forward.</li>
              <li><strong>View Rotation (φ<sup>v</sup>):</strong> Final head turn to center the object of interest.</li>
            </ol>
          </div>
          <div className="flex justify-center">
            <img
              src="./figures/action_space.png"
              alt="Continuous Action Space Diagram"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>

        {/* Training Strategy Section */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4 text-slate-900 font-google-sans">Training Strategy</h3>
          <p className="text-slate-700 font-light mb-4">
            We employ a two-stage training process to effectively learn the viewpoint selection policy:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="">
              <strong className="text-slate-900 block mb-2">1. Supervised Fine-Tuning (SFT)</strong>
              <p className="text-slate-600 font-light">
                Initializes the model using ground-truth actions derived from our synthetic dataset, providing a strong starting point for action planning.
              </p>
            </div>
            <div className="">
              <strong className="text-slate-900 block mb-2">2. Reinforcement Learning (RL)</strong>
              <p className="text-slate-600 font-light">
                Further refines the policy using a verifier-based reward, enabling the model to improve beyond the training dataset by exploring actions that yield higher reward.
              </p>
            </div>
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