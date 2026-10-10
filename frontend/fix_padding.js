const fs = require('fs');
const path = require('path');

function findFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(findFiles(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = findFiles('src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Find all className="..." that contain bg-clip-text
  content = content.replace(/className="([^"]+)"/g, (match, p1) => {
    if (p1.includes('bg-clip-text')) {
      let newClasses = p1;
      if (!newClasses.includes('pr-8')) newClasses += ' pr-8';
      if (!newClasses.includes('pb-2')) newClasses += ' pb-2';
      if (!newClasses.includes('inline-block')) newClasses += ' inline-block';
      return `className="${newClasses}"`;
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Fixed ' + file);
  }
});
