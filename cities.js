const michiganCities = [
  // paste first 80 cities from cities.csv here
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < michiganCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(michiganCities[i]);
}

module.exports = { batches };
