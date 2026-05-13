import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const publicDir = path.join(process.cwd(), 'public');
const blogsDir = path.join(publicDir, 'blogs');
const outputFile = path.join(publicDir, 'llms-full.txt');

let fullContent = `# RYO Papers - Full Context Knowledge Base\n\n`;
fullContent += `> This file contains the complete content of the RYO Papers website, including manufacturing specifications, product guides, and industry insights, curated for AI agents.\n\n`;

// 1. Refined extraction helper
function cleanContent(content) {
    return content
        // Remove imports
        .replace(/import[\s\S]*?;/g, '')
        // Remove Metadata export
        .replace(/export const metadata: Metadata = {[\s\S]*?};/g, '')
        // Remove JSON-LD schemas
        .replace(/const \w+Schema = {[\s\S]*?};/g, '')
        // Remove return boilerplate
        .replace(/return \(/g, '')
        .replace(/\);?\s*}$/g, '')
        // Remove common JSX components/props
        .replace(/<FadeUp[\s\S]*?>/g, '')
        .replace(/<\/FadeUp>/g, '')
        .replace(/className="[\s\S]*?"/g, '')
        .replace(/style={{[\s\S]*?}}/g, '')
        // Remove comments
        .replace(/{\/\*[\s\S]*?\*\/}/g, '')
        // Replace unescaped entities
        .replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        // Remove logic blocks like .map() calls but keep their content (simplified)
        .replace(/{\[[\s\S]*?\].map\(\(.*?, i\) => \(/g, '')
        .replace(/\)\)}/g, '')
        // Final tag strip
        .replace(/<[^>]+>/g, ' ')
        // Clean up whitespace
        .replace(/\s+/g, ' ')
        .replace(/ {2,}/g, ' ')
        .trim();
}

// 2. Add Main Pages
const mainPages = [
    { title: 'Rolling Paper Manufacturer Overview', path: 'app/rolling-paper-manufacturer/page.tsx' },
    { title: 'About RYO Papers', path: 'app/about-us/page.tsx' },
    { title: 'Hemp Rolling Paper Technical Guide', path: 'app/products/hemp-rolling-paper/page.tsx' },
    { title: 'Rice Rolling Paper Technical Guide', path: 'app/products/rice-rolling-paper/page.tsx' },
    { title: 'Flax Rolling Paper Technical Guide', path: 'app/products/flax-rolling-paper/page.tsx' },
    { title: 'Wood Pulp Rolling Paper Technical Guide', path: 'app/products/wood-pulp-rolling-paper/page.tsx' },
    { title: 'Cellulose Rolling Paper Technical Guide', path: 'app/products/cellulose-rolling-paper/page.tsx' }
];

fullContent += `## Main Service & Product Pages\n\n`;
for (const page of mainPages) {
    const filePath = path.join(process.cwd(), page.path);
    if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf8');
        const cleaned = cleanContent(raw);
        fullContent += `### ${page.title}\n\n${cleaned}\n\n---\n\n`;
    }
}

// 3. Add Blog Content (Markdown - already clean)
if (fs.existsSync(blogsDir)) {
    fullContent += `## Industry Insights & Knowledge Base (Blogs)\n\n`;
    const blogFiles = fs.readdirSync(blogsDir).filter(f => f.endsWith('.md'));
    
    for (const file of blogFiles) {
        const filePath = path.join(blogsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        
        fullContent += `### ${data.title || file}\n\n`;
        fullContent += `${content.trim()}\n\n---\n\n`;
    }
}

fs.writeFileSync(outputFile, fullContent);
console.log('Cleaned llms-full.txt generated successfully.');
