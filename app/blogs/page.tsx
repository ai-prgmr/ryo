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
    url: "https://ryopapers.com",
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: blogs.map((blog, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://www.ryopapers.com/blogs/${blog.slug}`,
      name: blog.title,
    }))
  };

  return (
    <>
      <Script
        id="blogs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-[#ffffff] min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#A2D230] mb-6">Our Blogs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, guides, and updates from the world of custom rolling papers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link href={`/blogs/${blog.slug}`} key={blog.slug}>
                <div className="bg-linear-to-b/oklab from-[#A2D230] from-10% to-[#ffffff] to-20% shadow-2xl rounded-2xl p-6 transition-all duration-300 h-full flex flex-col">
                  <h2 className="text-xl font-bold text-[#A2D230] mt-10">{blog.title}</h2>
                  <p className="text-gray-900 mb-4 flex-grow line-clamp-3">
                    {blog.meta_description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-black mt-auto pt-4 border-t border-white/10">
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
