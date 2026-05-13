import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const publicDir = path.join(process.cwd(), 'public');
const blogsDir = path.join(publicDir, 'blogs');
const outputFile = path.join(publicDir, 'llms-full.txt');

let fullContent = `# RYO Papers - Full Context Knowledge Base\n\n`;
fullContent += `> This file contains the complete content of the RYO Papers website, including manufacturing specifications, product guides, and industry insights, curated for AI agents.\n\n`;

// 1. Helper to extract text from TSX (crude but effective for this purpose)
function extractTextFromTsx(filePath) {
    if (!fs.existsSync(filePath)) return '';
    const content = fs.readFileSync(filePath, 'utf8');
    // Remove imports, scripts, and basic JSX tags to get to the "meat"
    return content
        .replace(/import[\s\S]*?;/g, '')
        .replace(/<Script[\s\S]*?\/>/g, '')
        .replace(/<[^>]+>/g, ' ') // Strip tags
        .replace(/\s+/g, ' ')     // Normalize whitespace
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
    const text = extractTextFromTsx(path.join(process.cwd(), page.path));
    if (text) {
        fullContent += `### ${page.title}\n\n${text}\n\n---\n\n`;
    }
}

// 3. Add Blog Content (Markdown)
if (fs.existsSync(blogsDir)) {
    fullContent += `## Industry Insights & Knowledge Base (Blogs)\n\n`;
    const blogFiles = fs.readdirSync(blogsDir).filter(f => f.endsWith('.md'));
    
    for (const file of blogFiles) {
        const filePath = path.join(blogsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        
        fullContent += `### ${data.title || file}\n\n`;
        // Clean up markdown a bit (remove internal links if needed, but usually fine)
        fullContent += `${content.trim()}\n\n---\n\n`;
    }
}

fs.writeFileSync(outputFile, fullContent);
console.log('Comprehensive llms-full.txt generated successfully.');
