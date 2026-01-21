"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#workflow", label: "Workflow" },
  { href: "#lookbook", label: "Lookbook" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" }
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 shadow-glow">
            <Sparkles className="h-5 w-5 text-fuchsia-300" />
          </span>
          AuraShoot
        </Link>
        <nav className="hidden gap-8 text-sm text-slate-200 md:flex">
          {links.map(link => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#demo"
            className="rounded-full border border-white/10 px-5 py-2 text-sm text-slate-200 transition hover:border-white/30 hover:text-white"
          >
            View demo
          </a>
          <a
            href="#cta"
            className="rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/25 transition hover:brightness-110"
          >
            Launch shoot
          </a>
        </div>
        <button
          className="rounded-full border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-slate-950/90 text-white md:hidden">
          <nav className="flex flex-col space-y-4 px-6 py-6 text-sm">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-200 transition hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              className="rounded-full border border-white/10 px-5 py-2 text-center text-sm text-slate-200 transition hover:border-white/30 hover:text-white"
            >
              View demo
            </a>
            <a
              href="#cta"
              className="rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-5 py-2 text-center text-sm font-medium text-white shadow-lg shadow-fuchsia-500/25 transition hover:brightness-110"
            >
              Launch shoot
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
