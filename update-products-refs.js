const fs = require('fs');

function updateDict(path, isHr) {
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));

  if(data.products && data.products.items) {
    const images = [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1500&auto=format&fit=crop", // PVC
      "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?q=80&w=1500&auto=format&fit=crop", // ALU
      "https://images.unsplash.com/photo-1542889601-399c4f3a8402?q=80&w=1500&auto=format&fit=crop", // Komarnici
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1500&auto=format&fit=crop"  // ALU ograde
    ];
    const slugs = ["pvc-stolarija", "alu-stolarija", "komarnici", "alu-ograde"];
    
    data.products.items.forEach((item, i) => {
      item.image = images[i];
      item.slug = slugs[i];
    });
  }

  if(data.references && data.references.items) {
    const hrTitles = ["Ugradnja PVC prozora", "ALU klizne stijene - Moderna vila", "ALU Harmo grilje na obali", "Zimska bašta sa ALU stijenama", "Komarnici na obiteljskoj kući", "ALU ograda na stubištu", "Ulazna vrata sa skrivenim krilom", "Renovacija luksuznom stolarijom"];
    const enTitles = ["PVC Windows Installation", "ALU Sliding Doors - Modern Villa", "ALU Folding Shutters on Coast", "Winter Garden with ALU Doors", "Mosquito Nets on Family House", "ALU Staircase Fence", "Entrance Door with Hidden Leaf", "Renovation with Luxury Framing"];
    
    data.references.items.forEach((item, i) => {
      item.title = isHr ? (hrTitles[i] || `Projekt ${i+1}`) : (enTitles[i] || `Project ${i+1}`);
    });
  }

  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

updateDict('./dictionaries/hr.json', true);
updateDict('./dictionaries/en.json', false);

console.log("JSON dict updated successfully.");
