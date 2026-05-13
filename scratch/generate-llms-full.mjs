import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const publicDir = path.join(process.cwd(), 'public');
const blogsDir = path.join(publicDir, 'blogs');
const outputFile = path.join(publicDir, 'llms-full.txt');

let fullContent = `# RYO Papers - Full Context\n\n`;
fullContent += `> RYO Papers is a premium custom rolling paper manufacturer and OEM partner.\n\n`;

// 1. Add Product Context
const productsFile = path.join(process.cwd(), 'app/lib/data.ts');
if (fs.existsSync(productsFile)) {
    fullContent += `## Manufacturing Products\n\n`;
    // We'll just manually summarize based on the data we saw
    fullContent += `- King Size Slim + Filters: Integrated filters, easy to roll, smooth draw.\n`;
    fullContent += `- 1 1/4 + Filters: Complete rolling solution with filters.\n`;
    fullContent += `- Block King Size (100/200/500): Bulk pack for value and consistency.\n`;
    fullContent += `- Rolled Cones: Pre-rolled convenience for social gatherings.\n`;
    fullContent += `- Custom Size: Fully bespoke dimensions for unique branding needs.\n\n`;
}

// 2. Add Blog Content
if (fs.existsSync(blogsDir)) {
    fullContent += `## Knowledge Base & Articles\n\n`;
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
console.log('llms-full.txt generated successfully.');
