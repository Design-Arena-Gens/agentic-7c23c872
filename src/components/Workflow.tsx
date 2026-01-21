import { CheckCircle2, CloudLightning, Command, TimerReset } from "lucide-react";

const steps = [
  {
    title: "Ingest your brand DNA",
    description:
      "Connect PIM, upload style guides, and sync color libraries so AuraShoot understands your catalogue baselines.",
    metric: "9 min setup",
    icon: Command
  },
  {
    title: "Compose campaigns in the scene board",
    description:
      "Drag garments into curated sets, assign model archetypes, and preview angles before committing to renders.",
    metric: "Realtime updates",
    icon: TimerReset
  },
  {
    title: "Trigger renders + QA in one click",
    description:
      "AuraShoot dispatches prompts, validates fabric physics, and flags anomalies—no manual Photoshop passes.",
    metric: "Batch render 50 looks",
    icon: CloudLightning
  },
  {
    title: "Distribute everywhere instantly",
    description:
      "Export layered PSDs, PDP stacks, and social-ready motion loops straight into Shopify, Adobe, and DAM systems.",
    metric: "Simultaneous delivery",
    icon: CheckCircle2
  }
];

export const Workflow = () => (
  <section className="mx-auto mt-28 max-w-6xl px-6 lg:px-8" id="workflow">
    <div className="grid gap-12 lg:grid-cols-[1.3fr,1fr] lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-200">Production OS</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          From inspiration moodboard to final ecommerce-ready assets in under an hour
        </h2>
        <p className="mt-4 text-sm text-slate-300">
          AuraShoot handles casting, lighting, posing, and retouching with a single pipeline. Swap fabrics,
          unlock new locales, and generate cohesive product stories that scale as fast as your drop schedule.
        </p>
      </div>
      <div className="space-y-4">
        {steps.map(step => (
          <article key={step.title} className="glass rounded-3xl border border-white/10 p-6 shadow-lg shadow-fuchsia-500/10">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <step.icon className="h-6 w-6 text-fuchsia-200" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-200/70">{step.metric}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
