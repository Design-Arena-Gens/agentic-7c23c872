import { Github, Instagram, Linkedin } from "lucide-react";

export const Footer = () => (
  <footer className="mt-28 border-t border-white/10 bg-slate-950/60">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div>
        <p className="text-base font-semibold text-white">AuraShoot</p>
        <p className="mt-2 max-w-md text-xs text-slate-500">
          Engineered for fashion teams who want photoreal catalogue shoots without the logistical weight of
          traditional studios.
        </p>
      </div>
      <div className="flex items-center gap-6 text-slate-400">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
          <Github className="h-5 w-5" />
        </a>
      </div>
      <p className="text-xs text-slate-600">
        © {new Date().getFullYear()} AuraShoot. Crafted with AI-first production workflows.
      </p>
    </div>
  </footer>
);
