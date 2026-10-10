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

  // Revert the bad change: className= pr-8 pb-2 inline-block"
  // It could be just pr-8, or pr-8 pb-2, etc. depending on what was there.
  // Actually, let's just replace all occurrences of `className= pr-8 pb-2 inline-block"` with `className="`
  content = content.replace(/className= pr-8 pb-2 inline-block"/g, 'className="');
  
  // Also we need to append the padding at the end of the class string.
  // Wait, if I replace `className="` back, I also need to put the padding at the end.
  // Let's do it in two steps. 
  // First, find lines that were broken:
  // /className=\s*(pr-8 pb-2 inline-block)"([^"]+)"/g
  content = content.replace(/className=\s*pr-8 pb-2 inline-block"([^"]+)"/g, 'className="$1 pr-8 pb-2 inline-block"');
  
  // What about template literals?
  content = content.replace(/className=\{` pr-8 pb-2 inline-block/g, 'className={`');
  content = content.replace(/className=\{`([^`]+)`\}/g, (match, p1) => {
    if (p1.includes('bg-clip-text')) {
      if (!p1.includes('pr-8')) p1 += ' pr-8 pb-2 inline-block';
    }
    return `className={\`${p1}\`}`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Fixed ' + file);
  }
});
