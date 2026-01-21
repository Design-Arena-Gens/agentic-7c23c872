import { ArrowRight, PlayCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32" id="hero">
      <div className="absolute inset-0 -z-10 bg-gradient-aurora" />
      <div className="absolute left-1/2 top-32 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-radial blur-3xl" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-fuchsia-200">
          AI apparel orchestration
        </span>
        <h1 className="text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
          Craft photoreal catalogue shoots without booking a single model
        </h1>
        <p className="max-w-2xl text-balance text-base text-slate-300 sm:text-lg">
          AuraShoot combines style intelligence, lighting choreography, and AI model casting to launch
          cohesive apparel campaigns. Build outfits, render scenes, and deliver pixel-perfect catalogue assets
          in a single dashboard.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#cta"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            Launch a virtual shoot
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#demo"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:text-white"
          >
            <PlayCircle className="h-4 w-4 text-fuchsia-200" />
            Watch a 2-min demo
          </a>
        </div>
        <dl className="grid w-full grid-cols-1 gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 text-left sm:grid-cols-3 sm:px-10">
          <div>
            <dt className="text-xs uppercase tracking-[0.22em] text-slate-400">Campaigns shipped</dt>
            <dd className="mt-2 text-2xl font-semibold text-white">1.9M+</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.22em] text-slate-400">Time saved per drop</dt>
            <dd className="mt-2 text-2xl font-semibold text-white">84%</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.22em] text-slate-400">Brand consistency</dt>
            <dd className="mt-2 flex items-baseline gap-1">
              <span className="text-2xl font-semibold text-white">4.9</span>
              <span className="text-xs text-slate-400">/ 5 QA rating</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
