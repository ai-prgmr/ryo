import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const publicDir = path.join(process.cwd(), 'public');
const blogsDir = path.join(publicDir, 'blogs');
const outputFile = path.join(publicDir, 'llms-full.txt');

let fullContent = `# RYO Papers - Comprehensive Knowledge Base\n\n`;
fullContent += `> This document provides the complete technical specifications, manufacturing standards, and industry insights of RYO Papers, optimized for AI model indexing.\n\n`;

function cleanTsxContent(content) {
    if (!content) return '';
    
    let cleaned = content;

    // 1. Remove all comments
    cleaned = cleaned.replace(/\/\*[\s\S]*?\*\//g, '');
    cleaned = cleaned.replace(/^(?!\s*https?:\/\/)\s*\/\/.*$/gm, '');

    // 2. Remove Imports and exports
    cleaned = cleaned.replace(/import[\s\S]*?;/g, '');
    cleaned = cleaned.replace(/export const metadata[\s\S]*?};/g, '');
    cleaned = cleaned.replace(/const \w+Schema = {[\s\S]*?};/g, '');
    cleaned = cleaned.replace(/export default function [\w]+\(\) \{/g, '');
    cleaned = cleaned.replace(/function [\w]+\(\) \{/g, '');
    cleaned = cleaned.replace(/const \w+ = \(\) => \{/g, '');
    cleaned = cleaned.replace(/export default [\w]+;/g, '');

    // 3. Remove specifically identifiable logic blocks (benefitsData, etc)
    cleaned = cleaned.replace(/const \w+ = \[[\s\S]*?\];/g, '');
    cleaned = cleaned.replace(/const \w+ = "[\s\S]*?";/g, '');

    // 4. Remove return and surrounding syntax
    cleaned = cleaned.replace(/return \(/g, '');
    
    // 5. Remove JSX logic patterns
    cleaned = cleaned.replace(/{\[[\s\S]*?\].map\(\(.*?, i\) => \(/g, '');
    cleaned = cleaned.replace(/{\w+\.map\(\(.*?, index\) => \(/g, '');
    cleaned = cleaned.replace(/\)\)}/g, ' ');
    cleaned = cleaned.replace(/{\s*\w+(\.\w+)?\s*}/g, ' ');

    // 6. Strip all remaining HTML/JSX tags
    cleaned = cleaned.replace(/<[^>]+>/g, ' ');

    // 7. Cleanup dangling syntax
    cleaned = cleaned.replace(/\);?\s*}$/g, '');
    cleaned = cleaned.replace(/\);/g, '');
    cleaned = cleaned.replace(/\{}/g, '');
    cleaned = cleaned.replace(/\{ }/g, '');

    // 8. Handle entities
    cleaned = cleaned.replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');

    // 9. Normalize whitespace and clean up
    return cleaned
        .replace(/\s+/g, ' ')
        .trim();
}

const sources = [
    { title: 'Rolling Paper Manufacturer Overview', path: 'app/rolling-paper-manufacturer/page.tsx' },
    { title: 'Custom Rolling Papers Guide', path: 'app/custom-rolling-papers/page.tsx' },
    { title: 'Hemp Rolling Paper Technical Guide', path: 'app/products/hemp-rolling-paper/page.tsx' },
    { title: 'Rice Rolling Paper Technical Guide', path: 'app/products/rice-rolling-paper/page.tsx' },
    { title: 'Flax Rolling Paper Technical Guide', path: 'app/products/flax-rolling-paper/page.tsx' },
    { title: 'Wood Pulp Rolling Paper Technical Guide', path: 'app/products/wood-pulp-rolling-paper/page.tsx' },
    { title: 'Cellulose Rolling Paper Technical Guide', path: 'app/products/cellulose-rolling-paper/page.tsx' },
    { title: 'About RYO Papers', path: 'app/about-us/page.tsx' }
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
console.log('llms-full.txt generated with final v5.1 cleaner.');
