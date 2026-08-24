"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Compass, User, Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Reports", href: "/reports" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Brand Logo - Directly on navbar background */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-amethyst-500/50 bg-amethyst-500/15 text-amethyst-300 shadow-amethyst-glow group-hover:scale-105 group-hover:border-amethyst-400 transition-all duration-300">
            <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500 text-amethyst-300" />
            <Sparkles className="w-3.5 h-3.5 absolute -top-1 -right-1 text-amethyst-200 animate-twinkle" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-widest amethyst-gradient-text drop-shadow-sm">
              ASTROYASH
            </span>
            <span className="text-[9.5px] tracking-[0.3em] text-amethyst-400/90 uppercase font-sans -mt-1 font-semibold">
              Vedic Astrology
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-amethyst-300 transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amethyst-400 to-amethyst-600 group-hover:w-3/4 transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3.5">
          <Link href="/account" aria-label="Client Account Portal">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-300 hover:text-amethyst-300 border border-transparent hover:border-amethyst-500/30 hover:bg-amethyst-500/10 rounded-lg"
              title="Account Portal"
            >
              <User className="w-5 h-5" />
            </Button>
          </Link>

          <Link href="/book">
            <Button variant="default" size="default" className="gap-2.5">
              <Calendar className="w-4 h-4 text-cosmic-950" />
              <span>Book a reading</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Link href="/account" aria-label="Account">
            <Button variant="ghost" size="icon" className="text-slate-300 h-9 w-9">
              <User className="w-5 h-5" />
            </Button>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-amethyst-300 focus:outline-none focus:ring-2 focus:ring-amethyst-500 rounded-lg"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-amethyst-500/25 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:bg-amethyst-500/12 hover:text-amethyst-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-cosmic-700/60 flex flex-col gap-2.5">
            <Link href="/book" onClick={() => setMobileMenuOpen(false)} className="w-full">
              <Button variant="default" className="w-full justify-center gap-2">
                <Calendar className="w-4 h-4 text-cosmic-950" />
                <span>Book a reading</span>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
