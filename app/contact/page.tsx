"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Mail, PhoneCall, MapPin, Clock, Send, CheckCircle2, Sparkles, Compass, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const PACKAGES: { [key: string]: string } = {
  "birth-chart": "Birth Chart & Life Path Reading (₹12,499)",
  "career-business": "Career & Business Astrology (₹13,999)",
  "synastry-compatibility": "Synastry & Marriage Matching (₹14,999)",
  "annual-solar-return": "Annual Solar Return Forecast (₹9,999)",
  "gemstone-remedies": "Gemstone & Remedial Guidance (₹7,999)",
  "urgent-single-question": "Urgent Single-Question Consult (₹5,999)",
  "general-inquiry": "General Consultation Inquiry",
};

function ContactForm() {
  const searchParams = useSearchParams();
  const requestedPackage = searchParams.get("package") || searchParams.get("service") || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState(
    PACKAGES[requestedPackage] ? requestedPackage : "birth-chart"
  );
  const [birthDetails, setBirthDetails] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (requestedPackage && PACKAGES[requestedPackage]) {
      setSelectedService(requestedPackage);
    }
  }, [requestedPackage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission / storage
    await new Promise((r) => setTimeout(r, 600));

    console.log("Inquiry submitted:", {
      name,
      email,
      phone,
      service: PACKAGES[selectedService] || selectedService,
      birthDetails,
      message,
      submittedAt: new Date().toISOString(),
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="glass-panel border-amethyst-500/30 p-8 sm:p-10 text-center space-y-6 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-amethyst-500/20 border border-amethyst-400/40 text-amethyst-300 flex items-center justify-center mx-auto shadow-amethyst-glow">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-3xl font-bold text-slate-100">
            Inquiry Received
          </h3>
          <p className="text-slate-300 font-sans text-base max-w-md mx-auto leading-relaxed">
            Thank you, <span className="text-amethyst-200 font-medium">{name}</span>. Yash reviews each submission personally and will reply to{" "}
            <span className="text-amethyst-200 font-medium">{email}</span> within 24 business hours to confirm your session schedule.
          </p>
        </div>

        <div className="pt-4 border-t border-amethyst-500/20 max-w-sm mx-auto flex flex-col sm:flex-row gap-3">
          <Button
            onClick={() => {
              setSubmitted(false);
              setMessage("");
            }}
            variant="outline"
            className="w-full text-xs"
          >
            Send another inquiry
          </Button>
          <Link href="/services" className="w-full">
            <Button className="w-full text-xs">
              Explore services
            </Button>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <Card className="glass-panel border-amethyst-500/25 p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Selected Package Banner if prefilled */}
        {requestedPackage && PACKAGES[requestedPackage] && (
          <div className="p-3.5 rounded-lg bg-amethyst-500/10 border border-amethyst-500/30 flex items-center gap-3">
            <Compass className="w-5 h-5 text-amethyst-300 shrink-0" />
            <div className="text-xs text-slate-200 font-sans">
              <span className="text-slate-400 block font-normal">Selected Consultation:</span>
              <strong className="text-amethyst-200 font-semibold">{PACKAGES[requestedPackage]}</strong>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase font-sans">
              Full Name <span className="text-amethyst-400">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Anandita Sharma"
              className="w-full px-4 py-3 rounded-lg bg-[#141A30] border border-amethyst-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amethyst-400 transition-colors"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase font-sans">
              Email Address <span className="text-amethyst-400">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-[#141A30] border border-amethyst-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amethyst-400 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Phone / WhatsApp */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase font-sans">
              Phone / WhatsApp (Optional)
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-lg bg-[#141A30] border border-amethyst-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amethyst-400 transition-colors"
            />
          </div>

          {/* Service Selection */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase font-sans">
              Consultation Type
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#141A30] border border-amethyst-500/20 text-slate-100 text-sm focus:outline-none focus:border-amethyst-400 transition-colors"
            >
              {Object.entries(PACKAGES).map(([key, label]) => (
                <option key={key} value={key} className="bg-[#101424] text-slate-200">
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Birth Details (Optional but helpful for Vedic consultation) */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase font-sans flex items-center justify-between">
            <span>Birth Details (Optional)</span>
            <span className="text-[11px] text-slate-500 font-normal lowercase">date, exact time &amp; city</span>
          </label>
          <input
            type="text"
            value={birthDetails}
            onChange={(e) => setBirthDetails(e.target.value)}
            placeholder="e.g. 14 October 1994, 08:45 AM, New Delhi, India"
            className="w-full px-4 py-3 rounded-lg bg-[#141A30] border border-amethyst-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amethyst-400 transition-colors"
          />
        </div>

        {/* Message / Primary Questions */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase font-sans">
            Primary Questions or Concerns <span className="text-amethyst-400">*</span>
          </label>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share the primary areas of your life you are seeking clarity on (e.g. career pivot, upcoming transit, relationship alignment, or timing)..."
            className="w-full px-4 py-3 rounded-lg bg-[#141A30] border border-amethyst-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amethyst-400 transition-colors resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full gap-2 py-3.5 text-sm font-semibold"
        >
          <Send className="w-4 h-4" />
          {isSubmitting ? "Submitting inquiry..." : "Send consultation inquiry"}
        </Button>

        <p className="text-[11.5px] text-slate-400 text-center font-sans">
          All client consultations, birth records, and discussions are kept strictly confidential under our{" "}
          <Link href="/privacy" className="text-amethyst-300 hover:underline">
            Privacy Policy
          </Link>.
        </p>
      </form>
    </Card>
  );
}

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20 space-y-16 relative z-10">
      {/* 1. Page Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-5">
          <Badge variant="default" className="gap-2 py-1.5 px-4">
            <Sparkles className="w-3.5 h-3.5 text-amethyst-300" />
            <span>Consultation Inquiries</span>
          </Badge>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-100 leading-[1.08]">
            Connect with <span className="amethyst-gradient-text">Yash Singh</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-sans leading-relaxed">
            Have questions before booking, or want to discuss a customized reading? Send your inquiry below and we will confirm scheduling details within 24 hours.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#101424] border border-amethyst-500/20 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-slate-100">
                Direct Contact Details
              </h2>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Whether you are seeking clarity on an upcoming dasha transit or need assistance choosing the right consultation package, we are here to assist.
              </p>

              <div className="space-y-4 pt-2 border-t border-amethyst-500/20 text-sm font-sans text-slate-300">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amethyst-500/10 border border-amethyst-500/25 flex items-center justify-center shrink-0 text-amethyst-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium uppercase tracking-wider">Email Inquiry</span>
                    <a href="mailto:contact@astroyash.com" className="text-slate-200 hover:text-amethyst-300 transition-colors font-medium">
                      contact@astroyash.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amethyst-500/10 border border-amethyst-500/25 flex items-center justify-center shrink-0 text-amethyst-300">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium uppercase tracking-wider">Consultation Line</span>
                    <span className="text-slate-200 font-medium">+91 (Direct Consult Line)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amethyst-500/10 border border-amethyst-500/25 flex items-center justify-center shrink-0 text-amethyst-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium uppercase tracking-wider">Session Format</span>
                    <span className="text-slate-200 font-medium">Online 1-on-1 Worldwide via Zoom</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amethyst-500/10 border border-amethyst-500/25 flex items-center justify-center shrink-0 text-amethyst-300">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium uppercase tracking-wider">Response Window</span>
                    <span className="text-slate-200 font-medium">Within 24 business hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#131932] to-[#0E1325] border border-amethyst-500/20 flex items-start gap-4">
              <Shield className="w-6 h-6 text-amethyst-300 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-serif text-base font-bold text-slate-100">
                  Strict Confidentiality
                </h4>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Birth times, marital queries, and personal situations shared during readings are never disclosed, recorded without consent, or shared with third parties.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <Card className="glass-panel p-8 text-center text-slate-400 text-sm font-sans">
                  Loading consultation form...
                </Card>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
