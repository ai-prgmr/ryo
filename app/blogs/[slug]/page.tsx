import { Metadata } from 'next';
import { getBlogBySlug, getAllBlogs } from '../../lib/blogs';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.metadata.title} | RYO Papers`,
    description: post.metadata.meta_description,
    keywords: post.metadata.primary_keyword + (post.metadata.secondary_keywords ? `, ${post.metadata.secondary_keywords}` : ''),
    authors: [{ name: post.metadata.author }],
    alternates: {
      canonical: `https://ryopapers.com/blogs/${slug}`,
    },
    openGraph: {
      title: `${post.metadata.title} | RYO Papers`,
      description: post.metadata.meta_description,
      url: `https://ryopapers.com/blogs/${slug}`,
      type: 'article',
      images: [
        {
          url: 'https://ryopapers.com/images/ryopapers-final-logo.png',
          width: 1200,
          height: 630,
          alt: `${post.metadata.title} image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.metadata.title} | RYO Papers`,
      description: post.metadata.meta_description,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metadata.title,
    description: post.metadata.meta_description,
    author: {
      '@type': 'Organization',
      name: post.metadata.author,
    },
    dateModified: post.metadata.last_updated,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.ryopapers.com/blogs/${slug}`,
    },
  };

  return (
    <>
      <Script
        id={`blog-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {post.faqSchema && (
        <Script
          id={`faq-schema-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.faqSchema) }}
        />
      )}
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link href="/blogs" className="inline-flex items-center text-gray-700 hover:text-gray-400 mb-8 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Blogs
          </Link>

          <div className="bg-[#05014a] backdrop-blur-md rounded-3xl p-6 md:p-12 border border-white/10 text-white shadow-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{post.metadata.title}</h1>
            <div className="flex flex-wrap items-center text-gray-300 mb-10 gap-4 border-b border-white/20 pb-6">
              <span className="bg-[#A2D22E] text-black px-3 py-1 rounded-full text-sm font-semibold">
                {post.metadata.author}
              </span>
              <span>Updated: {post.metadata.last_updated}</span>
            </div>

            <div className="max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => <h2 className="text-4xl font-bold mt-12 mb-6 text-[#A2D22E]" {...props} />,
                  h2: ({ node, ...props }) => <h2 className="text-3xl font-semibold mt-10 mb-4 text-[#A2D22E]" {...props} />,
                  h3: ({ node, ...props }) => <h3 className="text-2xl font-medium mt-8 mb-3 text-[#A2D22E]" {...props} />,
                  p: ({ node, ...props }) => <p className="text-lg leading-relaxed mb-6 text-gray-200" {...props} />,
                  ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-6 mb-6 text-gray-200 space-y-2" {...props} />,
                  ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-6 mb-6 text-gray-200 space-y-2" {...props} />,
                  li: ({ node, ...props }) => <li className="pl-2" {...props} />,
                  a: ({ node, ...props }) => <a className="text-blue-400 hover:text-blue-300 underline" {...props} />,
                  strong: ({ node, ...props }) => <strong className="font-bold text-white" {...props} />,
                  blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-[#A2D22E] pl-4 italic text-gray-300 my-6 bg-white/5 p-4 rounded-r" {...props} />,
                  table: ({ node, ...props }) => <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse" {...props} /></div>,
                  th: ({ node, ...props }) => <th className="border-b-2 border-white/20 p-4 font-semibold text-[#A2D22E] bg-white/5" {...props} />,
                  td: ({ node, ...props }) => <td className="border-b border-white/10 p-4 text-gray-200" {...props} />,
                  code: ({ node, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                      <pre className="bg-black/60 p-6 rounded-xl overflow-x-auto my-8 border border-white/10 text-sm">
                        <code className={className} {...props}>{children}</code>
                      </pre>
                    ) : (
                      <code className="bg-white/10 px-1.5 py-0.5 rounded text-[#A2D22E] font-mono text-sm" {...props}>{children}</code>
                    )
                  }
                }}
              >
                {post.content}
              </ReactMarkdown>
              {post.faqSchema && post.faqSchema.mainEntity && (
                <section className="mt-12">
                  <h2 className="text-3xl font-bold mb-6 text-[#A2D22E]">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {post.faqSchema.mainEntity.map((faq: any, idx: number) => (
                      <div key={idx} className="bg-white/10 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-[#A2D22E]">{faq.name}</h3>
                        <p className="text-gray-200">{faq.acceptedAnswer?.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
