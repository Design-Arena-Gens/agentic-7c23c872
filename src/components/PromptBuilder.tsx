"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Copy, RefreshCw, Sparkle, Wand2 } from "lucide-react";

type PromptState = {
  fabric: string;
  palette: string;
  vibe: string;
  camera: string;
  backdrop: string;
};

const fabrics = [
  "Gloss satin bomber",
  "Raw denim jacket",
  "Organic bamboo tee",
  "Merino knit cardigan",
  "Waterproof shell parka"
];

const palettes = [
  "Cyber lilac + chrome",
  "Fog beige monochrome",
  "Solar flare (amber + rust)",
  "Deep ocean (cobalt + black)",
  "Nocturnal neutrals"
];

const vibes = ["Editorial high-fashion", "Street ready", "Relaxed athleisure", "Minimal luxe", "Retro futurism"];

const cameras = [
  "Medium format 80mm f/2.8",
  "Mirrorless 50mm prime",
  "Tilt shift 90mm",
  "Drone top-down 35mm",
  "Cinematic anamorphic 40mm"
];

const backdrops = ["Diffuse loft studio", "Night city rooftop", "Desert dusk gradients", "Chromatic light tunnel", "Lush glasshouse"];

const initialState: PromptState = {
  fabric: fabrics[1],
  palette: palettes[0],
  vibe: vibes[3],
  camera: cameras[0],
  backdrop: backdrops[0]
};

export const PromptBuilder = () => {
  const [state, setState] = useState<PromptState>(initialState);
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    return [
      "Photoreal apparel catalogue render of a",
      state.fabric.toLowerCase(),
      "styled in a",
      state.vibe.toLowerCase(),
      "direction, illuminated by cinematic three-point lighting within a",
      state.backdrop.toLowerCase(),
      "environment.",
      `Color story: ${state.palette}.`,
      `Shot on ${state.camera.toLowerCase()} capturing full-body with crisp fabric detail,`,
      "soft depth of field, calibrated shadows, micro-texture fidelity, and commercially clean composition."
    ].join(" ");
  }, [state]);

  const handleChange = (key: keyof PromptState) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState(prev => ({ ...prev, [key]: event.target.value }));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      console.error("Unable to copy prompt", error);
    }
  };

  const handleReset = () => {
    setState(initialState);
  };

  return (
    <section
      id="demo"
      className="mx-auto mt-28 max-w-6xl rounded-3xl border border-white/10 bg-white/5 px-6 py-12 shadow-lg shadow-fuchsia-500/10 lg:px-12"
    >
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
            <Sparkle className="h-8 w-8 text-fuchsia-200" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-200">Prompt studio</p>
              <h2 className="text-2xl font-semibold text-white">Spin up looks that feel tailored to your brand</h2>
            </div>
          </div>
          <p className="text-sm text-slate-300">
            Mix fabrics, palettes, camera rigs, and spatial moods to compose perfect catalogue directives. AuraShoot
            streams these prompts straight into your render queue and version history.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col text-sm text-slate-200">
              Fabric focus
              <select
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3 text-sm text-white focus:border-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40"
                value={state.fabric}
                onChange={handleChange("fabric")}
              >
                {fabrics.map(item => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col text-sm text-slate-200">
              Palette
              <select
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3 text-sm text-white focus:border-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40"
                value={state.palette}
                onChange={handleChange("palette")}
              >
                {palettes.map(item => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col text-sm text-slate-200">
              Campaign vibe
              <select
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3 text-sm text-white focus:border-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40"
                value={state.vibe}
                onChange={handleChange("vibe")}
              >
                {vibes.map(item => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col text-sm text-slate-200">
              Camera setup
              <select
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3 text-sm text-white focus:border-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40"
                value={state.camera}
                onChange={handleChange("camera")}
              >
                {cameras.map(item => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="sm:col-span-2 flex flex-col text-sm text-slate-200">
              Spatial backdrop
              <select
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3 text-sm text-white focus:border-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40"
                value={state.backdrop}
                onChange={handleChange("backdrop")}
              >
                {backdrops.map(item => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="glass relative rounded-3xl border border-white/10 px-6 py-5">
            <div className="absolute inset-y-0 right-0 hidden w-1/5 bg-gradient-to-l from-fuchsia-500/20 to-transparent sm:block" />
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Wand2 className="h-5 w-5 text-fuchsia-200" />
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Generated prompt</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-200 transition hover:border-white/30"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Reset
                </button>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white transition hover:bg-white/20"
                >
                  <Copy className="h-3.5 w-3.5" />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">{prompt}</p>
          </div>
        </div>

        <aside className="flex w-full max-w-md flex-col gap-4">
          <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-4">
            <span className="absolute right-4 top-4 rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-100">
              Render preview
            </span>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80"
                alt="AI generated apparel model showcasing bluish-purple outfit"
                width={900}
                height={1200}
                className="h-96 w-full object-cover"
                priority
              />
            </div>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-200">
              <div className="flex justify-between">
                <span>Pose</span>
                <span className="text-white">Dynamic 3/4 turn</span>
              </div>
              <div className="flex justify-between">
                <span>Light setup</span>
                <span className="text-white">Key + rim + fill</span>
              </div>
              <div className="flex justify-between">
                <span>Shadow QA</span>
                <span className="text-white">Passed</span>
              </div>
            </div>
          </div>
          <div className="glass rounded-3xl border border-white/10 p-6 text-sm text-slate-300">
            <h3 className="text-base font-semibold text-white">Pipelines triggered</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                <span>Fabric realism</span>
                <span className="text-fuchsia-200">0.6s</span>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                <span>Pose estimation</span>
                <span className="text-fuchsia-200">0.4s</span>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                <span>Color harmonics</span>
                <span className="text-fuchsia-200">0.2s</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};
