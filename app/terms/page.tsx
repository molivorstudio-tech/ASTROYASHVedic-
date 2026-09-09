import React from "react";
import Link from "next/link";
import { FileText, AlertCircle, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Terms of Service | Astroyash",
  description: "Terms and conditions governing Vedic astrology readings, consultations, scheduling, and digital report purchases with Astroyash.",
};

export default function TermsPage() {
  return (
    <div className="py-12 md:py-20 space-y-12 relative z-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-amethyst-300 hover:text-amethyst-200 transition-colors font-medium font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="space-y-4 border-b border-amethyst-500/20 pb-8">
          <Badge variant="default" className="gap-2 py-1.5 px-3.5">
            <FileText className="w-3.5 h-3.5 text-amethyst-300" />
            <span>Legal Agreement</span>
          </Badge>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate-100">
            Terms of Service
          </h1>

          <p className="text-xs text-slate-400 font-sans">
            Last Updated: August 2026 • Astroyash Practice
          </p>

          {/* Legal Notice Callout */}
          <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-200/90 text-xs font-sans flex items-start gap-3 mt-4">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong>Placeholder Notice:</strong> This document represents a standard Terms of Service agreement governing astrological advisory services. You should consult a qualified legal professional to adapt these terms to your local business structure and governing jurisdiction prior to commercial launch.
            </div>
          </div>
        </div>

        {/* Terms Body */}
        <div className="prose prose-invert max-w-none text-slate-300 font-sans text-sm leading-relaxed space-y-8">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              1. Nature of Services
            </h2>
            <p>
              Astroyash provides traditional Vedic astrological consultations (Jyotish), natal chart syntheses, transit analyses, and educational spiritual counseling. All consultations are intended to offer interpretive insight, symbolic perspective, and practical self-reflection based on classical Indian astrological texts (Parashari, Jaimini, and KP systems).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              2. Client Responsibility for Accurate Birth Data
            </h2>
            <p>
              Vedic astrological calculations depend fundamentally upon the exact time, date, and geographic location of birth. While Yash utilizes rectificatory principles where minor uncertainties exist, Astroyash is not liable for chart inaccuracies resulting from erroneous birth data supplied by the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              3. Scheduling, Cancellations &amp; Rescheduling
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>Advance Notice:</strong> If you must reschedule a live video consultation, please provide at least <strong>24 hours notice</strong> prior to your scheduled time slot.</li>
              <li><strong>Rescheduling:</strong> Sessions rescheduled with at least 24 hours notice will be rebooked at the earliest mutually available calendar opening at no additional charge.</li>
              <li><strong>No-Shows:</strong> Clients who fail to attend their confirmed live session without prior written communication forfeit the booking, as that consultation window was reserved exclusively for them.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              4. Payment &amp; Refund Policy
            </h2>
            <p>
              Full payment is required to confirm your consultation slot or initiate written report drafting. Because significant astrological research, chart casting, and preparation occurs prior to the live video call:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Cancellations made more than 48 hours prior to the scheduled session are eligible for a full refund minus payment processing fees.</li>
              <li>Once a live consultation has concluded or a written PDF report has been delivered, all fees are non-refundable.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              5. Intellectual Property &amp; Personal Recording Use
            </h2>
            <p>
              Written analyses, Janampatri diagrams, and recordings provided following consultations are for your private, personal, non-commercial use only. Republication, broadcast, or commercial resale of Astroyash materials without explicit written consent is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              6. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with applicable laws. Inquiries concerning these terms should be directed to{" "}
              <a href="mailto:contact@astroyash.com" className="text-amethyst-300 hover:underline">
                contact@astroyash.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
