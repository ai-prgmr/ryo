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
    publisher: {
      '@id': 'https://ryopapers.com/#organization'
    },
    dateModified: post.metadata.last_updated,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ryopapers.com/blogs/${slug}`,
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
      <div className="bg-bg min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link href="/blogs" className="inline-flex items-center text-muted hover:text-brand mb-8 transition-colors font-medium">
            <ArrowLeft className="mr-2" size={18} />
            Back to Blogs
          </Link>

          <div className="bg-surface rounded-3xl p-8 md:p-16 border border-border text-text shadow-xl">
            <h1 className="font-display text-4xl md:text-6xl font-black text-ink mb-8 leading-tight tracking-tight">{post.metadata.title}</h1>
            <div className="flex flex-wrap items-center text-muted mb-12 gap-6 border-b border-border pb-8">
              <span className="bg-brand-light text-brand-deep px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                {post.metadata.author}
              </span>
              <span className="text-sm font-medium">Updated: {post.metadata.last_updated}</span>
            </div>

            <div className="max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ ...props }) => <h2 className="font-display text-4xl font-bold mt-16 mb-8 text-ink" {...props} />,
                  h2: ({ ...props }) => <h2 className="font-display text-3xl font-bold mt-12 mb-6 text-ink" {...props} />,
                  h3: ({ ...props }) => <h3 className="font-display text-2xl font-bold mt-10 mb-4 text-ink" {...props} />,
                  p: ({ ...props }) => <p className="text-lg leading-relaxed mb-6 text-text" {...props} />,
                  ul: ({ ...props }) => <ul className="list-disc list-outside ml-6 mb-8 text-text space-y-3" {...props} />,
                  ol: ({ ...props }) => <ol className="list-decimal list-outside ml-6 mb-8 text-text space-y-3" {...props} />,
                  li: ({ ...props }) => <li className="pl-2 leading-relaxed" {...props} />,
                  a: ({ ...props }) => <a className="text-brand-deep hover:text-brand font-semibold underline decoration-brand/30 underline-offset-4" {...props} />,
                  strong: ({ ...props }) => <strong className="font-bold text-ink" {...props} />,
                  blockquote: ({ ...props }) => <blockquote className="border-l-4 border-brand pl-6 italic text-ink my-10 bg-bg p-8 rounded-r-xl" {...props} />,
                  table: ({ ...props }) => <div className="overflow-x-auto my-12 rounded-xl border border-border"><table className="w-full text-left border-collapse" {...props} /></div>,
                  th: ({ ...props }) => <th className="border-b-2 border-border p-5 font-display text-base font-bold text-ink bg-bg" {...props} />,
                  td: ({ ...props }) => <td className="border-b border-border/50 p-5 text-text" {...props} />,
                  code: ({ className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                      <pre className="bg-ink p-8 rounded-xl overflow-x-auto my-10 border border-border text-cream-100 text-sm">
                        <code className={className} {...props}>{children}</code>
                      </pre>
                    ) : (
                      <code className="bg-brand-light px-2 py-0.5 rounded text-brand-deep font-mono text-sm font-semibold" {...props}>{children}</code>
                    )
                  }
                }}
              >
                {post.content}
              </ReactMarkdown>
              {post.faqSchema && post.faqSchema.mainEntity && (
                <section className="mt-20 pt-12 border-t border-border">
                  <h2 className="font-display text-3xl font-black mb-10 text-ink">Frequently Asked Questions</h2>
                  <div className="space-y-8">
                    {post.faqSchema.mainEntity.map((faq: { name: string; acceptedAnswer?: { text: string } }, idx: number) => (
                      <div key={idx} className="bg-bg p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="font-display text-xl font-bold text-ink mb-3">{faq.name}</h3>
                        <p className="text-text leading-relaxed">{faq.acceptedAnswer?.text}</p>
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
