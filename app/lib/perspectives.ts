import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const perspectivesDirectory = path.join(process.cwd(), 'public/perspectives');

export interface PerspectiveMetadata {
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

export interface PerspectivePost {
  metadata: PerspectiveMetadata;
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

export function getAllPerspectives(): PerspectiveMetadata[] {
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(perspectivesDirectory);
  } catch (error) {
    console.error("Error reading perspectives directory", error);
    return [];
  }
  
  const allPerspectivesData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(perspectivesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as Omit<PerspectiveMetadata, 'slug'>),
      };
    });

  // Sort by date (newest first)
  return allPerspectivesData.sort((a, b) => {
    const parseDate = (dateStr: string) => {
      if (!dateStr) return 0;
      const cleanDate = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1').replace(/,/g, ' ');
      return new Date(cleanDate).getTime();
    };
    
    return parseDate(b.last_updated) - parseDate(a.last_updated);
  });
}

export function getPerspectiveBySlug(slug: string): PerspectivePost | null {
  try {
    const fullPath = path.join(perspectivesDirectory, `${slug}.md`);
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
        ...(matterResult.data as Omit<PerspectiveMetadata, 'slug'>),
      },
      content,
      faqSchema,
    };
  } catch (error) {
    console.error(`Error reading perspective post: ${slug}`, error);
    return null;
  }
}
