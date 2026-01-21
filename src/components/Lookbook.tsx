import Image from "next/image";
import { Camera } from "lucide-react";

const lookbookItems = [
  {
    id: 1,
    name: "Nebula Layering Drop",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    palette: "Deep orchid x graphite",
    scene: "Chromatic light tunnel",
    output: "12 angles, 4 colorways"
  },
  {
    id: 2,
    name: "Cobalt Dune Capsule",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    palette: "Azure haze + soft sand",
    scene: "Desert dusk gradients",
    output: "9 angles, 3 colorways"
  },
  {
    id: 3,
    name: "Slate Loft Athleisure",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    palette: "Fog monochrome",
    scene: "Diffuse loft studio",
    output: "15 angles, 5 colorways"
  }
];

export const Lookbook = () => (
  <section className="mx-auto mt-28 max-w-6xl px-6 text-white lg:px-8" id="lookbook">
    <div className="flex items-center gap-3">
      <Camera className="h-8 w-8 text-fuchsia-200" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-200">Live lookbook</p>
        <h2 className="mt-1 text-3xl font-semibold">Curated outputs ready for your ecommerce stack</h2>
      </div>
    </div>
    <p className="mt-4 max-w-3xl text-sm text-slate-300">
      Every scene blends realism with brand-coded artistry. Export multi-angle sets, looped motion, and social
      crops from one capture.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {lookbookItems.map(item => (
        <article key={item.id} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <Image
            src={item.image}
            alt={item.name}
            width={900}
            height={1200}
            className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="space-y-3 p-6 text-sm">
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            <div className="grid gap-2 text-slate-300">
              <div className="flex justify-between">
                <span>Palette</span>
                <span className="text-white">{item.palette}</span>
              </div>
              <div className="flex justify-between">
                <span>Scene</span>
                <span className="text-white">{item.scene}</span>
              </div>
              <div className="flex justify-between">
                <span>Output</span>
                <span className="text-white">{item.output}</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
