import React from "react";
import Link from "next/link";
import { AlertTriangle, AlertCircle, ArrowLeft, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Astrological Disclaimer | Astroyash",
  description: "Astrological and legal disclaimer regarding consultations, readings, remedies, and written reports provided by Astroyash.",
};

export default function DisclaimerPage() {
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
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>Advisory Notice</span>
          </Badge>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate-100">
            Astrological Disclaimer
          </h1>

          <p className="text-xs text-slate-400 font-sans">
            Last Updated: August 2026 • Astroyash Practice
          </p>

          {/* Legal Notice Callout */}
          <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-200/90 text-xs font-sans flex items-start gap-3 mt-4">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong>Placeholder Notice:</strong> This astrological disclaimer establishes important protective boundaries regarding medical, financial, and legal matters. Have an attorney licensed in your jurisdiction review and tailor this language prior to accepting commercial bookings.
            </div>
          </div>
        </div>

        {/* Disclaimer Body */}
        <div className="prose prose-invert max-w-none text-slate-300 font-sans text-sm leading-relaxed space-y-8">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              1. Informational &amp; Spiritual Advisory Purpose Only
            </h2>
            <p>
              Astrological readings, horoscope charts, transit forecasts, and gemstone/mantra recommendations provided by Astroyash (including Yash Singh) are offered solely for spiritual reflection, self-understanding, cultural education, and advisory insight. Astrological interpretations reflect symbolic and archetypal tendencies rather than deterministic guarantees.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              2. Not a Substitute for Professional Healthcare
            </h2>
            <p>
              Vedic astrological indications regarding physical vitality, constitution (Ayurvedic Doshas), or medical timing are philosophical and complementary in nature. <strong>Astroyash does not diagnose, treat, prevent, or cure any medical or psychological condition.</strong> If you are experiencing physical symptoms or mental health distress, you must consult a licensed physician, psychiatrist, or qualified medical practitioner immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              3. Not Financial or Legal Counsel
            </h2>
            <p>
              Discussions concerning career pivots, business launches, real estate, or planetary wealth houses (Dhana and Labha Bhavas) are astrological interpretations of timing cycles. <strong>Astroyash is not a certified financial planner, registered investment advisor, accountant, or attorney.</strong> You should always perform independent due diligence and seek certified legal and financial advice before entering contracts or financial commitments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              4. Free Will &amp; Personal Agency
            </h2>
            <p>
              Classical Vedic astrology emphasizes that planetary charts outline karmic tendencies, predispositions, and timing windows (*Desha, Kaala, Patra*). They do not negate personal agency. You retain complete autonomy and personal responsibility for all decisions, actions, and interpretations you make following a consultation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              5. Limitation of Liability
            </h2>
            <p>
              By scheduling a consultation, purchasing a written report, or browsing this website, you explicitly acknowledge and agree that Astroyash and Yash Singh shall not be held liable for any direct, indirect, incidental, or consequential outcomes resulting from your use of the astrological guidance or remedies provided.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              6. Questions
            </h2>
            <p>
              If you have any questions or require clarification regarding this disclaimer, please contact us at{" "}
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
