"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Sparkles, Mail, Lock, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        // Generic security error message to prevent user enumeration
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="py-12 md:py-20 max-w-md mx-auto px-4 sm:px-6 relative z-10">
      <Card className="border border-amethyst-500/20 bg-cosmic-900/80 backdrop-blur-xl shadow-2xl overflow-hidden">
        <CardHeader className="space-y-4 text-center pt-8">
          <div className="flex justify-center">
            <Badge variant="default" className="gap-2 py-1 px-3">
              <Sparkles className="w-3.5 h-3.5 text-amethyst-300" />
              <span>Welcome Back</span>
            </Badge>
          </div>

          <CardTitle className="font-serif text-3xl font-bold text-slate-100">
            Log In to Astroyash
          </CardTitle>

          <CardDescription className="text-slate-300 text-sm font-sans">
            Enter your email and password to access your saved charts and account.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-2">
          {error && (
            <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 flex items-start gap-3 text-red-300 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 tracking-wide">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-cosmic-950/80 border border-cosmic-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amethyst-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 tracking-wide">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-cosmic-950/80 border border-cosmic-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amethyst-500 transition-colors"
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full mt-6 gap-2" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Logging in...</span>
                </>
              ) : (
                <>
                  <span>Log In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="pb-8 pt-4 justify-center border-t border-cosmic-800/60 mt-4">
          <p className="text-xs text-slate-400">
            Don&apos;t have an account yet?{" "}
            <Link href="/signup" className="text-amethyst-300 font-semibold hover:underline">
              Create one here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
