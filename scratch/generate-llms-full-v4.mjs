import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const publicDir = path.join(process.cwd(), 'public');
const blogsDir = path.join(publicDir, 'blogs');
const outputFile = path.join(publicDir, 'llms-full.txt');

let fullContent = `# RYO Papers - Comprehensive Context\n\n`;
fullContent += `> This file provides the full content of the RYO Papers ecosystem, including manufacturing standards, product specifications, and industrial insights, optimized for AI processing.\n\n`;

// 1. Better extraction helper
function cleanTsxContent(content) {
    if (!content) return '';
    
    // Step 1: Remove imports and boilerplate
    let cleaned = content
        .replace(/import[\s\S]*?;/g, '')
        .replace(/export const metadata[\s\S]*?};/g, '')
        .replace(/const \w+Schema = {[\s\S]*?};/g, '')
        .replace(/export default function [\w]+\(\) \{/g, '')
        .replace(/const \w+ = [\s\S]*?;/g, '') // Remove internal const definitions
        .replace(/return \(/g, '')
        .replace(/\);?\s*}$/g, '')
        .replace(/{\/\*[\s\S]*?\*\/}/g, ''); // Remove JSX comments

    // Step 2: Remove JSX tags and attributes
    cleaned = cleaned
        .replace(/<FadeUp[\s\S]*?>/g, '')
        .replace(/<\/FadeUp>/g, '')
        .replace(/className="[\s\S]*?"/g, '')
        .replace(/style={{[\s\S]*?}}/g, '')
        .replace(/<[^>]+>/g, ' ');

    // Step 3: Handle entities and map logic
    cleaned = cleaned
        .replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/{\[[\s\S]*?\].map\(\(.*?, i\) => \(/g, '')
        .replace(/\)\)}/g, '')
        .replace(/{\w+\.map\(\(.*?, index\) => \(/g, '')
        .replace(/\)\)}/g, '');

    // Step 4: Cleanup
    return cleaned
        .replace(/\s+/g, ' ')
        .replace(/ {2,}/g, ' ')
        .trim();
}

// 2. Define content sources from llms.txt links
const sources = [
    { title: 'Rolling Paper Manufacturer Overview', path: 'app/rolling-paper-manufacturer/page.tsx', type: 'tsx' },
    { title: 'Custom Rolling Papers Guide', path: 'app/custom-rolling-papers/page.tsx', type: 'tsx' },
    { title: 'Hemp Rolling Paper Technical Guide', path: 'app/products/hemp-rolling-paper/page.tsx', type: 'tsx' },
    { title: 'Rice Rolling Paper Technical Guide', path: 'app/products/rice-rolling-paper/page.tsx', type: 'tsx' },
    { title: 'Flax Rolling Paper Technical Guide', path: 'app/products/flax-rolling-paper/page.tsx', type: 'tsx' },
    { title: 'Wood Pulp Rolling Paper Technical Guide', path: 'app/products/wood-pulp-rolling-paper/page.tsx', type: 'tsx' },
    { title: 'Cellulose Rolling Paper Technical Guide', path: 'app/products/cellulose-rolling-paper/page.tsx', type: 'tsx' },
    { title: 'About RYO Papers', path: 'app/about-us/page.tsx', type: 'tsx' }
];

fullContent += `## Manufacturing & Product Knowledge\n\n`;
for (const source of sources) {
    const filePath = path.join(process.cwd(), source.path);
    if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf8');
        const cleaned = cleanTsxContent(raw);
        fullContent += `### ${source.title}\n\n${cleaned}\n\n---\n\n`;
    }
}

// 3. Add Blog Content
if (fs.existsSync(blogsDir)) {
    fullContent += `## Industry Insights & Articles\n\n`;
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
console.log('Final comprehensive llms-full.txt generated.');
