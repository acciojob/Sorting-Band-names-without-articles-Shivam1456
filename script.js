//your code here

// Array of band names
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

// Function to remove articles from band name
function removeArticles(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort band names
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the ul element by its ID
const bandList = document.querySelector('#bands');

// Populate the ul with sorted band names
for (let band of bandNames) {
  const listItem = document.createElement('li');
  listItem.textContent = band;
  bandList.appendChild(listItem);
}
