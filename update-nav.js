const fs = require('fs');

function update(filepath, isHr) {
  let data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  
  // Add gallery key to nav if missing
  if (!data.nav.gallery) {
    data.nav.gallery = isHr ? 'Galerija' : 'Gallery';
  }

  // Add the gallery data structure
  data.gallery = {
    title: isHr ? "Naši Radovi i Reference" : "Our Work & References",
    subtitle: isHr ? "Pregledajte našu bogatu galeriju nedavnih projekata i inspirirajte se vizualnim dokazima naše kvalitete." : "Browse our rich gallery of recent projects and get inspired by visual proof of our quality.",
    badge: isHr ? "Galerija" : "Gallery",
    featured: {
      badge: isHr ? "Istaknuti Projekt" : "Featured Project",
      title: isHr ? "Na novom stambenom objektu" : "New Residential Building",
      items: [
        isHr ? "⚒️ PVC REHAU STOLARIJA" : "⚒️ PVC REHAU JOINERY",
        isHr ? "⚒️ PVC UNUTARNJE ROLETE IZOLACIJA PLUS ELEKTRO POGON" : "⚒️ PVC INTERNAL ROLLER SHUTTERS INSULATION PLUS ELECTRIC DRIVE",
        isHr ? "⚒️ UNUTRA BIJELO VANI ANTRACIT 😍" : "⚒️ WHITE INSIDE, ANTHRACITE OUTSIDE 😍",
        isHr ? "⚒️ LOW-E DVOSLOJNO STAKLO IDEALNO ZA NAŠE PODNEBLJE (DALMACIJA)" : "⚒️ LOW-E DOUBLE GLAZING IDEAL FOR OUR CLIMATE"
      ]
    }
  };

  fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
  console.log('Updated', filepath);
}

try {
  update('./dictionaries/hr.json', true);
  update('./dictionaries/en.json', false);
} catch (e) {
  console.error(e);
}
