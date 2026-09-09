import React from "react";
import Link from "next/link";
import { ShieldCheck, AlertCircle, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Privacy Policy | Astroyash",
  description: "Privacy Policy for Astroyash Vedic Astrology consultations and services. How your birth data and personal information are handled and protected.",
};

export default function PrivacyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5 text-amethyst-300" />
            <span>Legal Documentation</span>
          </Badge>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate-100">
            Privacy Policy
          </h1>

          <p className="text-xs text-slate-400 font-sans">
            Last Updated: August 2026 • Astroyash Practice
          </p>

          {/* Legal Notice Callout */}
          <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-200/90 text-xs font-sans flex items-start gap-3 mt-4">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong>Placeholder Notice:</strong> This document represents a standard privacy policy tailored for an online Vedic astrological consultation practice. Prior to official commercial operations, this text should be reviewed and customized by legal counsel qualified in your operating jurisdiction.
            </div>
          </div>
        </div>

        {/* Policy Body */}
        <div className="prose prose-invert max-w-none text-slate-300 font-sans text-sm leading-relaxed space-y-8">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              1. Information We Collect
            </h2>
            <p>
              When you book a consultation, request an astrological report, or communicate with Astroyash, we collect the necessary details to generate your horoscope and facilitate your reading:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li><strong>Contact Information:</strong> Full name, email address, and optional phone/WhatsApp number.</li>
              <li><strong>Birth Horizon Data:</strong> Exact date of birth, time of birth (with daylight saving time adjustments where applicable), and geographical city/country of birth. This data is required solely for astronomical planetary calculations (Janampatri, Kundli, Navamsha).</li>
              <li><strong>Consultation Inquiries:</strong> Questions, areas of personal focus (career, relationships, health, spiritual transitions), and context you share in preparation for your reading.</li>
              <li><strong>Account Credentials:</strong> If you register an account, your email and cryptographically hashed passwords are saved securely.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              2. How Your Birth Data Is Used
            </h2>
            <p>
              Vedic astrology requires precise mathematical coordinates. Your birth details are used strictly to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Calculate planetary longitudes, divisional charts (Vargas), and Vimshottari Dasha cycles.</li>
              <li>Synthesize transit forecasts (Gochara) specific to your Lagna (Ascendant) and Moon sign (Rashi).</li>
              <li>Prepare your personalized session notes and recommended Vedic remedies.</li>
            </ul>
            <p className="font-semibold text-amethyst-200">
              We never sell, rent, monetize, or feed your birth information, consultation recordings, or private life circumstances to external advertising networks, data brokers, or third-party AI training models.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              3. Session Confidentiality &amp; Recordings
            </h2>
            <p>
              Live consultations are conducted 1-on-1 via secure video conferencing platforms (Zoom / Google Meet). All discussions regarding your personal life, marriage, family dynamics, or financial questions are treated with the highest ethical confidentiality. Session video/audio recordings provided after the reading are delivered solely for your personal reflection and reference.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              4. Data Security &amp; Storage
            </h2>
            <p>
              We implement industry-standard administrative and technical security measures. Databases storing user accounts and chart records are encrypted in transit via SSL/TLS and hosted on secure cloud infrastructure with strictly restricted operational access.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              5. Your Rights &amp; Data Deletion
            </h2>
            <p>
              You maintain the right to inspect the personal data we hold about you or request complete deletion of your birth records, natal charts, and account at any time. To exercise these rights, simply email us at{" "}
              <a href="mailto:contact@astroyash.com" className="text-amethyst-300 hover:underline">
                contact@astroyash.com
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-100">
              6. Contact Us
            </h2>
            <p>
              For any questions regarding this Privacy Policy or our astrological data practices, please contact us at{" "}
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
