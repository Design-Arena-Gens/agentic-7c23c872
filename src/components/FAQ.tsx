"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const questions = [
  {
    question: "How realistic are the garments and models rendered by AuraShoot?",
    answer:
      "AuraShoot uses fabric-aware diffusion tuned on textile scans plus body dynamics trained with inclusive datasets. Draping, wrinkle falloff, and material sheen match the physics of each garment category."
  },
  {
    question: "Can AuraShoot match our existing brand style guides?",
    answer:
      "Yes. Upload brand references, tone boards, and previous campaign assets. We generate a prompt memory that locks color grading, camera language, and posing rules so every drop stays consistent."
  },
  {
    question: "Which integrations are supported for asset delivery?",
    answer:
      "AuraShoot connects to Shopify, Adobe Creative Cloud, Bynder, Salsify, and custom DAM pipelines via webhook. Exports include PSD, PNG, WebP, AVIF, and short-form MP4 loops."
  },
  {
    question: "What about human talent? Can we combine AI and live models?",
    answer:
      "Hybrid campaigns are supported. Use AuraShoot for rapid testing, style pre-visualizations, and filler scenes while your human talent focuses on hero shots. Blend outputs directly within the lookbook."
  }
];

export const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActive(prev => (prev === index ? null : index));
  };

  return (
    <section className="mx-auto mt-28 max-w-4xl px-6 lg:px-8" id="faq">
      <div className="text-center">
        <p className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-fuchsia-200">
          <HelpCircle className="h-4 w-4" />
          Answers
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Frequently asked questions</h2>
        <p className="mt-2 text-sm text-slate-300">
          From fabric fidelity to pipeline integrations, here&apos;s what teams ask before venturing into virtual
          catalogue shoots.
        </p>
      </div>
      <div className="mt-12 space-y-4">
        {questions.map((item, index) => {
          const isActive = active === index;
          return (
            <article
              key={item.question}
              className="glass cursor-pointer rounded-3xl border border-white/10 p-6 transition hover:border-fuchsia-400/40"
              onClick={() => toggle(index)}
            >
              <header className="flex items-center justify-between gap-6">
                <h3 className="text-base font-semibold text-white">{item.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-fuchsia-200 transition-transform ${isActive ? "rotate-180" : ""}`}
                />
              </header>
              {isActive && <p className="mt-4 text-sm text-slate-300">{item.answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
};
