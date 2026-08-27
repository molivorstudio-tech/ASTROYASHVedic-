import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-6 leading-relaxed">{children}</p>,
    h2: ({ children }) => (
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100 mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-slate-100 mt-8 mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-amethyst-500 pl-6 my-6 italic text-slate-200">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-6 text-slate-300">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-300">{children}</ol>,
  },
};

interface PortableTextRendererProps {
  value: any;
}

export function PortableTextRenderer({ value }: PortableTextRendererProps) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
