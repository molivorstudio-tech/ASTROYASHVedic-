"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User, Mail, ShieldCheck, Calendar, BookOpen, LogOut, Sparkles, Clock, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function AccountPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 rounded-full border-2 border-amethyst-500 border-t-transparent animate-spin mx-auto" />
          <p className="text-sm font-sans text-slate-400">Loading your account profile...</p>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated" || !session) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <Card className="glass-panel max-w-md w-full p-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-amethyst-500/15 border border-amethyst-500/30 flex items-center justify-center text-amethyst-300 mx-auto">
            <User className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h2 className="font-serif text-3xl font-bold text-slate-100">Sign in Required</h2>
            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              Please log in to your Astroyash account to access your consultation history, natal chart notes, and profile settings.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link href="/login" className="w-full">
              <Button className="w-full text-xs">Log In</Button>
            </Link>
            <Link href="/signup" className="w-full">
              <Button variant="outline" className="w-full text-xs">Create Account</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  const user = session.user;

  return (
    <div className="py-12 md:py-20 space-y-12 relative z-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amethyst-500/20 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
                My Account
              </h1>
              {user?.isAdmin && (
                <Badge variant="amethyst" className="text-[11px] gap-1 px-2.5 py-0.5">
                  <ShieldCheck className="w-3 h-3" /> Admin
                </Badge>
              )}
            </div>
            <p className="text-sm text-slate-400 font-sans">
              Manage your personal details, consultation records, and session notes.
            </p>
          </div>

          <Button
            onClick={() => signOut({ callbackUrl: "/" })}
            variant="outline"
            className="text-xs gap-2 shrink-0 self-start sm:self-auto"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </Button>
        </div>

        {/* Account Details & Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="glass-panel p-6 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amethyst-500/15 border border-amethyst-500/30 flex items-center justify-center text-amethyst-300">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-100">
                  {user?.name || "Client"}
                </h3>
                <span className="text-xs text-slate-400 font-sans">{user?.email}</span>
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-amethyst-500/15 text-xs font-sans text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Account Type</span>
                <span className="font-semibold text-slate-200">
                  {user?.isAdmin ? "Administrator" : "Verified Client"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Security</span>
                <span className="text-emerald-400 font-medium">Encrypted (bcrypt)</span>
              </div>
            </div>

            {user?.isAdmin && (
              <div className="pt-2">
                <Link href="/studio">
                  <Button className="w-full text-xs gap-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Open Sanity Studio</span>
                  </Button>
                </Link>
              </div>
            )}
          </Card>

          {/* Bookings & Consultations Card (2 cols) */}
          <Card className="glass-panel md:col-span-2 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-100">
                  Consultations &amp; Reports
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Your scheduled live video readings and generated PDF Janampatri reports.
                </p>
              </div>
              <Compass className="w-5 h-5 text-amethyst-300 shrink-0" />
            </div>

            {/* Empty State */}
            <div className="p-8 rounded-xl bg-[#0D1224] border border-amethyst-500/15 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-amethyst-500/10 flex items-center justify-center text-amethyst-300 mx-auto">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-slate-200">
                No active bookings yet
              </h4>
              <p className="text-xs text-slate-400 font-sans max-w-sm mx-auto leading-relaxed">
                Ready to explore your natal chart or understand your planetary dasha timeline? Schedule your first live reading with Yash.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <Link href="/book">
                  <Button className="text-xs gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book a reading</span>
                  </Button>
                </Link>
                <Link href="/reports">
                  <Button variant="outline" className="text-xs gap-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Browse written reports</span>
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
