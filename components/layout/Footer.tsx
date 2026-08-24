import React from "react";
import Link from "next/link";
import { Compass, Sparkles, Instagram, Youtube, Twitter, PhoneCall, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-amethyst-500/20 bg-cosmic-950/90 text-slate-400 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-cosmic-800">
          {/* Column 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-full border border-amethyst-500/40 bg-amethyst-500/10 text-amethyst-400">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider amethyst-gradient-text">
                ASTROYASH
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Authentic Vedic & Psychological Astrology consultations. Empowering your life journey with planetary insight, karma decoding, and actionable cosmic clarity.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-cosmic-700 bg-cosmic-900 flex items-center justify-center text-slate-300 hover:text-amethyst-400 hover:border-amethyst-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-cosmic-700 bg-cosmic-900 flex items-center justify-center text-slate-300 hover:text-amethyst-400 hover:border-amethyst-500/40 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-cosmic-700 bg-cosmic-900 flex items-center justify-center text-slate-300 hover:text-amethyst-400 hover:border-amethyst-500/40 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-cosmic-700 bg-cosmic-900 flex items-center justify-center text-slate-300 hover:text-amethyst-400 hover:border-amethyst-500/40 transition-colors"
                aria-label="WhatsApp Consultation"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-slate-100 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amethyst-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amethyst-400 transition-colors">
                  About Yash
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amethyst-400 transition-colors">
                  Consultation Packages
                </Link>
              </li>
              <li>
                <Link href="/reports" className="hover:text-amethyst-400 transition-colors">
                  Horoscope & Transit Reports
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amethyst-400 transition-colors">
                  Articles & Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Key Services */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-slate-100 tracking-wide">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#birth-chart" className="hover:text-amethyst-400 transition-colors">
                  Birth Chart (Janampatri)
                </Link>
              </li>
              <li>
                <Link href="/services#career" className="hover:text-amethyst-400 transition-colors">
                  Career & Business Astrology
                </Link>
              </li>
              <li>
                <Link href="/services#compatibility" className="hover:text-amethyst-400 transition-colors">
                  Synastry & Marriage Matching
                </Link>
              </li>
              <li>
                <Link href="/services#solar-return" className="hover:text-amethyst-400 transition-colors">
                  Annual Solar Return
                </Link>
              </li>
              <li>
                <Link href="/services#remedial" className="hover:text-amethyst-400 transition-colors">
                  Gemstones & Vedic Remedial Guidance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-slate-100 tracking-wide">
              Get in Touch
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amethyst-400 shrink-0" />
                <span>contact@astroyash.com</span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amethyst-400 shrink-0" />
                <span>+91 (Direct Consult Line)</span>
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs bg-amethyst-500/10 border border-amethyst-500/20 text-amethyst-300">
                  <Sparkles className="w-3.5 h-3.5" /> Online Consultations Worldwide
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>© {currentYear} Astroyash. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="hover:text-slate-400 transition-colors">
              Astrological Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
