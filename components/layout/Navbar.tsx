"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Sparkles, Compass, User, Menu, X, Calendar, LogOut, ShieldCheck } from "lucide-react";
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
  const { data: session, status } = useSession();

  const isAuthenticated = status === "authenticated";
  const user = session?.user;

  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
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

          {/* Admin Studio Link if Admin */}
          {user?.isAdmin && (
            <Link
              href="/studio"
              className="px-3.5 py-2 text-sm font-semibold text-amethyst-400 hover:text-amethyst-200 transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>CMS Admin</span>
            </Link>
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3.5">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Link href="/account">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-amethyst-500/30 text-slate-200 hover:text-amethyst-300"
                >
                  <User className="w-4 h-4 text-amethyst-400" />
                  <span className="max-w-[120px] truncate">{user?.name || "Account"}</span>
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-slate-400 hover:text-red-300 hover:bg-red-500/10 gap-1.5 px-2.5"
                title="Sign out"
              >
                <LogOut className="w-4 h-4" />
                <span>Log out</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-300 hover:text-amethyst-300 hover:bg-amethyst-500/10 font-semibold"
                >
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline" size="sm" className="border-amethyst-500/40 text-amethyst-300">
                  Sign up
                </Button>
              </Link>
            </div>
          )}

          <Link href="/book">
            <Button variant="default" size="default" className="gap-2.5">
              <Calendar className="w-4 h-4 text-cosmic-950" />
              <span>Book a reading</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Link href={isAuthenticated ? "/account" : "/login"} aria-label="Account">
            <Button variant="ghost" size="icon" className="text-slate-300 h-9 w-9">
              <User className="w-5 h-5 text-amethyst-300" />
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
            {isAuthenticated ? (
              <>
                <Link href="/account" onClick={() => setMobileMenuOpen(false)} className="w-full">
                  <Button variant="outline" className="w-full justify-center gap-2">
                    <User className="w-4 h-4 text-amethyst-400" />
                    <span>My Account ({user?.name})</span>
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    signOut({ callbackUrl: "/" });
                  }}
                  className="w-full justify-center gap-2 text-red-400 hover:bg-red-500/10"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log out</span>
                </Button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="default" className="w-full">
                    Sign up
                  </Button>
                </Link>
              </div>
            )}
            <Link href="/book" onClick={() => setMobileMenuOpen(false)} className="w-full pt-1">
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
