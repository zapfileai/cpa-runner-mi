const michiganCities = [
  "South Rockwood", "Saranac", "Stockbridge", "Wells", "Shelbyville",
  "Tipton", "Twin Lake", "Vicksburg", "Rose City", "White Pigeon",
  "Rogers City", "Wayne", "Sodus", "Sturgis", "Snover",
  "Scottville", "Three Rivers", "Saint Clair", "Wetmore", "Whitmore Lake",
  "Turner", "Willis", "South Haven", "Whittemore", "Watervliet",
  "Sanford", "Yale", "Sheridan", "Thompsonville", "Saint Louis",
  "Wakefield", "Saugatuck", "Rudyard", "Suttons Bay", "Union Lake",
  "Tustin", "Westphalia", "Romeo", "Union",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < michiganCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(michiganCities[i]);
}

module.exports = { batches };
