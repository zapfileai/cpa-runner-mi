const michiganCities = [
  "Roscommon", "Waterford", "Wixom", "Essexville", "Dexter",
  "Gaylord", "Elk Rapids", "Grosse Ile", "Gladwin", "Flint",
  "Grayling", "Gaines", "Free Soil", "Galien", "Fremont",
  "Delton", "Colon", "Dafter", "Freeport", "Gladstone",
  "Grant", "Hamilton", "Grand Haven", "Grass Lake", "Davison",
  "Eagle", "Goodells", "Freeland", "Harper Woods", "Comstock Park",
  "Douglas", "Dollar Bay", "Fennville", "Fenton", "Eastpointe",
  "Farwell", "Grosse Pointe", "Elwell", "Garden", "Greenville",
  "Croswell", "Frankenmuth", "Fair Haven", "Conklin", "Ferndale",
  "Fairgrove", "Constantine", "Fife Lake", "Coopersville", "Fort Gratiot",
  "Goodrich", "Gregory", "Fowlerville", "Grawn", "Frankfort",
  "Curtis", "Erie", "Corunna", "Dundee", "East Jordan",
  "Garden City", "Deckerville", "Montrose", "Ottawa Lake", "Dewitt",
  "New Haven", "Portland", "North Branch", "Otsego", "Reese",
  "Ray", "Richmond", "Ravenna", "Oscoda", "Quincy",
  "Rockwood", "Milan", "Onaway", "Rochester", "Novi",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < michiganCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(michiganCities[i]);
}

module.exports = { batches };
