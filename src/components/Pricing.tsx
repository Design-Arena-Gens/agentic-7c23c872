import { BadgeCheck, Infinity, Rocket } from "lucide-react";

const plans = [
  {
    name: "Launch",
    price: "$1,200",
    cadence: "/ month",
    icon: Rocket,
    description: "Ideal for emerging direct-to-consumer brands launching quarterly capsules.",
    highlights: ["2 virtual shoots / month", "30 look renders per shoot", "1 brand style memory", "Marketplace sized exports", "Email support"]
  },
  {
    name: "Orbit",
    price: "$3,900",
    cadence: "/ month",
    icon: Infinity,
    description: "For omnichannel retailers scaling drops, franchises, and rapid merchandising cycles.",
    highlights: [
      "Unlimited virtual shoots",
      "Fabric + lighting model fine-tuning",
      "Multi-location prompt libraries",
      "Team collaboration seats",
      "Priority launch concierge"
    ],
    featured: true
  }
];

export const Pricing = () => (
  <section className="mx-auto mt-28 max-w-6xl px-6 lg:px-8" id="pricing">
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-200">Pricing</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Invest where your product imagery never sleeps</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300">
        Start with a guided activation, plug into our render fabric, and scale your catalogue production without the overhead of physical studios.
      </p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {plans.map(plan => (
        <article
          key={plan.name}
          className={`glass relative flex h-full flex-col rounded-3xl border border-white/10 p-8 ${
            plan.featured ? "bg-gradient-to-br from-fuchsia-500/15 via-purple-500/10 to-transparent shadow-xl shadow-fuchsia-500/20" : ""
          }`}
        >
          {plan.featured && (
            <span className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
              <BadgeCheck className="h-3.5 w-3.5" />
              Most adopted
            </span>
          )}
          <div className="flex items-center gap-3">
            <plan.icon className="h-8 w-8 text-fuchsia-200" />
            <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
          </div>
          <p className="mt-4 text-sm text-slate-300">{plan.description}</p>
          <p className="mt-6 text-4xl font-semibold text-white">
            {plan.price}
            <span className="text-base font-medium text-slate-300">{plan.cadence}</span>
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-200">
            {plan.highlights.map(item => (
              <li key={item} className="flex items-start gap-2">
                <BadgeCheck className="mt-0.5 h-4 w-4 text-fuchsia-200" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#cta"
            className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
              plan.featured
                ? "bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 text-white shadow-glow hover:brightness-110"
                : "border border-white/10 text-white hover:border-white/30"
            }`}
          >
            {plan.featured ? "Book onboarding" : "Start free pilot"}
          </a>
        </article>
      ))}
    </div>
  </section>
);
