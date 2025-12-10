import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { TLDR } from './TLDR';
import { Method } from './Method';
import { ResultsChart } from './ResultsChart';
import { BibTeX } from './BibTeX';
import { QualitativeGallery } from './QualitativeGallery';
import { MainResultsTable } from './MainResultsTable';
import { Button } from './Button';
import { Icons } from './Icons';
import { CHART_DATA_PROCTHOR, CHART_DATA_HM3D } from '../constants';

export const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">

            <Header />

            <main className="container mx-auto px-4 pb-20 space-y-16">

                {/* Teaser Image */}
                <div className="max-w-5xl mx-auto">
                    <img
                        src="./figures/teaser.png"
                        alt="Teaser"
                        className="w-full h-auto"
                    />
                </div>

                {/* TLDR Section */}
                <TLDR />

                {/* Teaser Video/Image Placeholder - Kept existing video placeholder if intended to stay */}
                <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 aspect-video relative group cursor-pointer">
                    <video
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        src="avs_suppl_video.mp4"
                    />
                </div>

                {/* Qualitative Examples Section (Moved Up) */}
                <section className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900 font-google-sans">Qualitative Examples</h2>
                        <p className="text-lg text-slate-700 max-w-5xl mx-auto">
                            Explore how our model reasons about the scene and predicts precise movement actions using <span className="text-blue-600 bg-blue-50 px-1 rounded font-bold">visual cues</span> to answer questions.
                        </p>
                    </div>

                    {/* Gallery 1: ProcTHOR */}
                    <QualitativeGallery dataset="ProcTHOR" />

                    {/* Gallery 2: HM3D */}
                    <QualitativeGallery dataset="HM3D" />

                    {/* More Results Button */}
                    <div className="flex justify-center pt-4">
                        <Link to="/detailed">
                            <Button
                                variant="primary"
                                className="px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                                icon={<Icons.Eye />}
                            >
                                <span className="ml-2">View More Qualitative Comparisons</span>
                            </Button>
                        </Link>
                    </div>
                </section>

                <hr className="border-slate-100 max-w-xl mx-auto" />

                {/* Quantitative Results Section */}
                <section className="max-w-5xl mx-auto scroll-mt-24" id="results">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900 font-google-sans">Quantitative Results</h2>
                        <p className="text-lg text-slate-700 max-w-5xl mx-auto">
                            Our VG-AVS framework consistently outperforms baselines across diverse question types on both synthetic (ProcTHOR) and real-world (Habitat Matterport) benchmarks, significantly surpassing proprietary models such as <span className="font-bold text-slate-900">GPT-5</span> and <span className="font-bold text-slate-900">Gemini 2.5 Pro</span>.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-2">
                        <div className="flex flex-col h-[500px]">
                            <ResultsChart data={CHART_DATA_PROCTHOR} title="AVS-ProcTHOR (Synthetic)" />
                        </div>
                        <div className="flex flex-col h-[500px]">
                            <ResultsChart data={CHART_DATA_HM3D} title="AVS-HM3D (Real-World)" />
                        </div>
                    </div>

                    <div className="bg-white p-1 rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                        <MainResultsTable />
                    </div>
                </section>

                {/* Methodology */}
                <Method />

                {/* <BibTeX /> */}

            </main>


        </div>
    );
};
