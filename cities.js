const michiganCities = [
  "Caseville", "Auburn Hills", "Chelsea", "Clarkston", "Southfield",
  "Ceresco", "Bath", "Muskegon", "Farmington", "Coloma",
  "Cadillac", "Channing", "Caledonia", "Royal Oak", "Berkley",
  "Calumet", "Bellaire", "Clio", "Alpena", "Carp Lake",
  "Byron", "Clayton", "Alanson", "Brimley", "Cedarville",
  "Atlanta", "Arcadia", "Baldwin", "Attica", "Clinton",
  "Buckley", "Cassopolis", "Almont", "Afton", "Clawson",
  "Byron Center", "Bear Lake", "Baroda", "Clarksville", "Coleman",
  "Avoca", "Bessemer", "Cement City", "Au Train", "Alto",
  "Berrien Springs", "Birmingham", "Charlotte", "Cedar", "Capac",
  "Carsonville", "Buchanan", "Big Bay", "Birch Run", "Clarklake",
  "Allendale", "Belding", "Cheboygan", "Burton", "Coldwater",
  "Beaverton", "Acme", "Camden", "Bay Port", "Bridgman",
  "Centreville", "Brighton", "Casco", "Crystal Falls", "Ellsworth",
  "Decatur", "Fraser", "Grandville", "Cornell", "Durand",
  "Ecorse", "Custer", "Gagetown", "Concord", "Hamtramck",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < michiganCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(michiganCities[i]);
}

module.exports = { batches };
