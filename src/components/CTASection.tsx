import { ArrowRightCircle, Headphones } from "lucide-react";

export const CTASection = () => (
  <section
    id="cta"
    className="mx-auto mt-28 flex max-w-5xl flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-indigo-500/10 px-6 py-12 text-center shadow-xl shadow-fuchsia-500/20 lg:px-16"
  >
    <div className="mx-auto flex max-w-3xl flex-col gap-4">
      <p className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white">
        <Headphones className="h-4 w-4" />
        White-glove onboarding
      </p>
      <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">
        Spin up your first AI apparel shoot with a dedicated creative engineer
      </h2>
      <p className="text-sm text-indigo-100">
        Share your latest collection, lookbook references, and tone board. We&apos;ll seed your prompt memory,
        configure staging environments, and deliver a launch-ready render deck in under 72 hours.
      </p>
    </div>
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="https://cal.com"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
      >
        Book a creative lab session
        <ArrowRightCircle className="h-4 w-4" />
      </a>
      <span className="text-xs uppercase tracking-[0.25em] text-indigo-100">
        or email hello@aurashoot.ai
      </span>
    </div>
  </section>
);
