const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\ivanb\\Desktop\\Portfolio\\Stolarija Orlovic\\web photos';
const destGalleryDir = path.join(__dirname, 'public', 'images', 'gallery');

if (!fs.existsSync(destGalleryDir)) {
  fs.mkdirSync(destGalleryDir, { recursive: true });
}

function processDirectory(directory) {
  const items = fs.readdirSync(directory);
  
  for (const item of items) {
    if (item === 'Radimo sa najboljima Logo') continue; // keep out
    
    const fullPath = path.join(directory, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else {
      // It's a file. Copy it to destGalleryDir with a clean name relative to its folder
      // E.g 'Project/WhatsApp Image.jpg' -> 'project-whatsapp-image.jpg'
      let cleanName = fullPath.replace(srcDir + '\\', '').replace(/\\/g, '-').replace(/\s+/g, '-').toLowerCase();
      fs.copyFileSync(fullPath, path.join(destGalleryDir, cleanName));
    }
  }
}

processDirectory(srcDir);
console.log('Gallery images copied successfully to', destGalleryDir);

const logos = fs.readdirSync(path.join(__dirname, 'public', 'images', 'logos'));
console.log('Logos available:', logos);
