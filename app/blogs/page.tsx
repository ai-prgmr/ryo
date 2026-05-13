import React from 'react';
import Link from 'next/link';
import { getAllBlogs } from '../lib/blogs';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Blogs | RYO Papers',
  description: 'Read our latest blogs on rolling papers, customization, and materials.',
  alternates: {
    canonical: "https://ryopapers.com/blogs",
  },
  openGraph: {
    title: "Roll your Own - Custom Rolling Papers & Contract/OEM Manufacturing",
    description: "Explore our premium rolling papers, custom rolling papers printing services, and contract rolling papers manufacturing solutions for your brand",
    url: "https://ryopapers.com/blogs",
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
    title: "Roll your Own - Custom Rolling Papers & Contract Manufacturing",
    description: "Explore our premium rolling papers, custom rolling papers printing services, and contract rolling papers manufacturing solutions for your brand",
  },
};

export default function BlogsPage() {
  const blogs = getAllBlogs();

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ryopapers.com/blogs/#webpage",
    "url": "https://ryopapers.com/blogs",
    "name": "Blogs | RYO Papers",
    "description": "Read our latest blogs on rolling papers, customization, and materials.",
    "publisher": { "@id": "https://ryopapers.com/#organization" }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: blogs.map((blog, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://ryopapers.com/blogs/${blog.slug}`,
      name: blog.title,
    }))
  };


  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ryopapers.com" },
      { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://ryopapers.com/blogs" }
    ]
  };

  return (
    <>
      <Script
        id="blogs-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="blogs-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="blogs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── BREADCRUMB ── */}
      <nav className="bg-bg border-b border-border py-3.5 px-[clamp(20px,5vw,80px)] text-[12px] text-muted flex gap-2 items-center" aria-label="breadcrumb">
        <Link href="/" className="text-brand-deep hover:underline">Home</Link>
        <span className="text-[rgba(26,22,18,0.1)]" aria-hidden="true">›</span>
        <span>Blogs</span>
      </nav>

      <div className="bg-bg min-h-screen pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl font-black text-ink mb-6">Our Blogs</h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Insights, guides, and updates from the world of custom rolling papers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link href={`/blogs/${blog.slug}`} key={blog.slug}>
                <div className="bg-surface border border-border hover:border-brand shadow-md hover:shadow-xl rounded-2xl p-8 transition-all duration-300 h-full flex flex-col group">
                  <h2 className="font-display text-2xl font-bold text-ink mb-4 group-hover:text-brand transition-colors">{blog.title}</h2>
                  <p className="text-muted mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {blog.meta_description}
                  </p>
                  <div className="flex justify-between items-center text-xs font-medium tracking-wider uppercase text-muted mt-auto pt-6 border-t border-border">
                    <span>{blog.author}</span>
                    <span>{blog.last_updated}</span>
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
