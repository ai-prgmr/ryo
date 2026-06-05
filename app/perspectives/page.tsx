import React from 'react';
import Link from 'next/link';
import { getAllPerspectives } from '../lib/perspectives';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Rolling Papers Perspectives as a Manufacturer| RYO Papers',
  description: 'Read our perspectives, field notes, and updates by our founder, AJ, at RYO Papers. Personal experiences with existing manufacturers and the industry as a whole.',
  alternates: {
    canonical: "https://ryopapers.com/perspectives",
  },
  openGraph: {
    title: "Rolling Papers Perspectives | RYO Papers",
    description: "Read our perspectives, field notes, and updates from the team at RYO Papers.",
    url: "https://ryopapers.com/perspectives",
    type: "website",
    images: [
      {
        url: "https://ryopapers.com/images/ryopapers-final-logo.png",
        width: 1200,
        height: 630,
        alt: "Roll your Own - Custom Rolling Papers & Contract/OEM Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolling Papers Perspectives | RYO Papers",
    description: "Read our perspectives, field notes, and updates from the team at RYO Papers.",
  },
};

export default function PerspectivesPage() {
  const perspectives = getAllPerspectives();

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ryopapers.com/perspectives/#webpage",
    "url": "https://ryopapers.com/perspectives",
    "name": "Perspectives | RYO Papers",
    "description": "Read our perspectives, field notes, and updates from the team at RYO Papers.",
    "publisher": { "@id": "https://ryopapers.com/#organization" }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: perspectives.map((p, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://ryopapers.com/perspectives/${p.slug}`,
      name: p.title,
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ryopapers.com" },
      { "@type": "ListItem", "position": 2, "name": "Perspectives", "item": "https://ryopapers.com/perspectives" }
    ]
  };

  return (
    <>
      <Script
        id="perspectives-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="perspectives-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="perspectives-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── BREADCRUMB ── */}
      <nav className="bg-bg border-b border-border py-3.5 px-[clamp(20px,5vw,80px)] text-[16px] text-muted flex gap-2 items-center" aria-label="breadcrumb">
        <Link href="/" className="text-brand-deep hover:underline">Home</Link>
        <span className="text-[rgba(26,22,18,0.1)]" aria-hidden="true">›</span>
        <span>Perspectives</span>
      </nav>

      <div className="bg-bg min-h-screen pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl font-black text-ink mb-6">Our Perspectives</h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Field notes, industry analysis, and personal stories from behind the scenes of rolling paper manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perspectives.map((p) => (
              <Link href={`/perspectives/${p.slug}`} key={p.slug}>
                <div className="bg-surface border border-border hover:border-brand shadow-md hover:shadow-xl rounded-2xl p-8 transition-all duration-300 h-full flex flex-col group">
                  <h2 className="font-display text-2xl font-bold text-ink mb-4 group-hover:text-brand transition-colors">{p.title}</h2>
                  <p className="text-muted mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {p.meta_description}
                  </p>
                  <div className="flex justify-between items-center text-xs font-medium tracking-wider uppercase text-muted mt-auto pt-6 border-t border-border">
                    <span>{p.author}</span>
                    <span>{p.last_updated}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
