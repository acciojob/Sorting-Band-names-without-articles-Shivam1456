//your code here

const bandNames = [
  "The Beatles",
  "Led Zeppelin",
  "Nirvana",
  "The Rolling Stones",
  "Aerosmith",
  "The Who",
  "Queen",
  "Anthrax",
  "The Clash"
];

function removeArticles(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

const bandList = document.getElementById('band');

for (let band of bandNames) {
  const listItem = document.createElement('li');
  listItem.textContent = band;
  bandList.appendChild(listItem);
}
