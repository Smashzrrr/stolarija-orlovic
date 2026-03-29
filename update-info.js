const fs = require('fs');

function updateInfo(path) {
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));

  if(data.contact) {
    data.contact.direct_phone = "023 681 232 / 095 777 3505";
  }

  if(data.footer) {
    data.footer.address = "Budak 1a, Stankovci, Croatia";
  }

  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

updateInfo('./dictionaries/hr.json');
updateInfo('./dictionaries/en.json');

console.log("JSON info updated successfully.");
