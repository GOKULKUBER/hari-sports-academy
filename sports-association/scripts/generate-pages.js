import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  'Home', 'About', 'Sports', 'Events', 'Registration', 
  'Contact', 'Membership', 'Gallery', 'News', 
  'Results', 'Coaches', 'Downloads', 'Sponsors'
];

const template = (name) => `import React from 'react';
import { motion } from 'framer-motion';

export default function ${name}() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="bg-white p-12 rounded-3xl shadow-xl max-w-2xl w-full border border-gray-100">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">${name} Page</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
          This is a placeholder for the ${name} section of the Sports Association portal. It will be fully implemented soon with rich aesthetics.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
    </motion.div>
  );
}
`;

const dir = path.join(__dirname, '../src/pages');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

pages.forEach(p => {
  fs.writeFileSync(path.join(dir, p + '.jsx'), template(p));
  console.log('Created ' + p + '.jsx');
});
