import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'public/blogs');

export interface BlogMetadata {
  title: string;
  meta_description: string;
  primary_keyword: string;
  secondary_keywords?: string;
  url_slug: string;
  schema_type?: string;
  author: string;
  last_updated: string;
  slug: string;
}

export interface BlogPost {
  metadata: BlogMetadata;
  content: string;
  faqSchema?: {
    "@context": string;
    "@type": string;
    mainEntity: Array<{
      "@type": string;
      name: string;
      acceptedAnswer: {
        "@type": string;
        text: string;
      };
    }>;
  };
}

export function getAllBlogs(): BlogMetadata[] {
  // Get file names under /public/blogs
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(blogsDirectory);
  } catch (error) {
    console.error("Error reading blogs directory", error);
    return [];
  }
  
  const allBlogsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        slug,
        ...(matterResult.data as Omit<BlogMetadata, 'slug'>),
      };
    });

  // Sort blogs by date (newest first)
  return allBlogsData.sort((a, b) => {
    const parseDate = (dateStr: string) => {
      if (!dateStr) return 0;
      // Remove st, nd, rd, th and clean up commas to make it parseable by Date
      const cleanDate = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1').replace(/,/g, ' ');
      return new Date(cleanDate).getTime();
    };
    
    return parseDate(b.last_updated) - parseDate(a.last_updated);
  });
}

export function getBlogBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    let content = matterResult.content;
    let faqSchema = undefined;

    // Extract FAQ Schema JSON if present
    const faqRegex = /(?:##\s*FAQ Schema.*?\n+)?```json\s*(\{[\s\S]*?"@type":\s*"FAQPage"[\s\S]*?\})\s*```/i;
    const match = content.match(faqRegex);
    if (match) {
      try {
        faqSchema = JSON.parse(match[1]);
        content = content.replace(match[0], '').trim();
      } catch (e) {
        console.error("Failed to parse FAQ JSON from markdown", e);
      }
    }

    return {
      metadata: {
        slug,
        ...(matterResult.data as Omit<BlogMetadata, 'slug'>),
      },
      content,
      faqSchema,
    };
  } catch (error) {
    console.error(`Error reading blog post: ${slug}`, error);
    return null;
  }
}
