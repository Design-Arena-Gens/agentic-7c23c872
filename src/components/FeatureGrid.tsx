import { Camera, Images, Layout, Palette, PenTool, Zap } from "lucide-react";

const features = [
  {
    name: "Adaptive scene director",
    description:
      "Auto-generate lighting rigs, color gels, and backdrops that compliment each garment while preserving brand guidelines.",
    icon: Camera
  },
  {
    name: "Model casting matrix",
    description:
      "Blend AI model archetypes across body types, skin tones, and dynamics to produce inclusive catalogue variations on demand.",
    icon: Images
  },
  {
    name: "Cohort prompt memory",
    description:
      "AuraShoot stores every winning prompt, camera angle, and brand voice nuance so future collections stay perfectly aligned.",
    icon: PenTool
  },
  {
    name: "Lookbook storyboard",
    description:
      "Drag garments into adaptive scenes, preview multi-angle outputs, and sync to your merchandising calendar once approved.",
    icon: Layout
  },
  {
    name: "Material realism engine",
    description:
      "Fabric-aware diffusion renders silk, denim, knitwear, and technical weaves with accurate drape, sheen, and texture.",
    icon: Palette
  },
  {
    name: "One-click exports",
    description:
      "Deliver layered PSDs, transparent PNGs, and web-ready AVIF sets sized for marketplace and ecommerce requirements instantly.",
    icon: Zap
  }
];

export const FeatureGrid = () => (
  <section className="mx-auto mt-24 max-w-6xl px-6 lg:px-8" id="features">
    <header className="max-w-3xl space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-200">Capabilities</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">
        A creative director, lighting tech, and retouch artist—compressed into one AI surface
      </h2>
      <p className="text-base text-slate-300">
        AuraShoot codifies your brand&apos;s styling logic into reusable prompt recipes. Every backdrop, pose,
        and shadow is auto-calibrated for realism and shoppability.
      </p>
    </header>
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {features.map(feature => (
        <article
          key={feature.name}
          className="glass relative overflow-hidden rounded-3xl p-8 shadow-lg shadow-fuchsia-500/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/20"
        >
          <feature.icon className="h-10 w-10 text-fuchsia-200" />
          <h3 className="mt-6 text-xl font-semibold text-white">{feature.name}</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">{feature.description}</p>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </article>
      ))}
    </div>
  </section>
);
