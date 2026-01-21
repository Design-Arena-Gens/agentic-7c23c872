import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "AuraShoot translated our in-person lookbook vibe into an AI pipeline that feels indistinguishable. We collapsed a 14-day production schedule into 4 hours.",
    name: "Alani Vega",
    role: "Creative Director, Luminous Athletics",
    rating: 5
  },
  {
    quote:
      "The prompt memory keeps every seasonal drop visually aligned. Our marketplace partners thought we upgraded studios—the truth is it was all virtual.",
    name: "Marco DeLuca",
    role: "VP Merchandising, Fieldline Denim",
    rating: 5
  },
  {
    quote:
      "We no longer chase freelancers for retouching. Fabric realism and shadow QA are automatic, freeing the team to focus on storytelling and channel strategy.",
    name: "Priya Kapoor",
    role: "Head of Ecommerce, Vela Collective",
    rating: 5
  }
];

export const Testimonials = () => (
  <section className="mx-auto mt-28 max-w-6xl px-6 lg:px-8">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-lg shadow-fuchsia-500/10">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-200">Trusted by fashion pioneers</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
        Teams are shipping global catalogue campaigns without traditional photo shoots
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {testimonials.map(testimonial => (
          <figure key={testimonial.name} className="glass h-full rounded-3xl border border-white/10 p-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed text-slate-200">{testimonial.quote}</blockquote>
            <figcaption className="mt-6 text-sm text-slate-300">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p>{testimonial.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
