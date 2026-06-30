const michiganCities = [
  "Washington", "Ada", "Detroit", "Adrian", "Traverse City",
  "Davisburg", "Eaton Rapids", "Burr Oak", "Northville", "Beulah",
  "Climax", "Bark River", "Barton City", "Chesaning", "Boyne City",
  "Bay City", "Barryton", "Bad Axe", "Allen Park", "Bangor",
  "Bronson", "Battle Creek", "Caro", "Belleville", "Carson City",
  "Au Gres", "Carleton", "Alma", "Bridgeport", "Big Rapids",
  "Armada", "Bloomfield Hills", "Bancroft", "Albion", "Blissfield",
  "Allegan", "Burt", "Brown City", "Breckenridge", "Brutus",
  "Clare", "Addison", "Brooklyn", "Charlevoix", "Algonac",
  "Center Line", "Cass City", "Berrien Center", "Williamston", "Felch",
  "Franklin", "Kalamazoo", "Mount Clemens", "Livonia", "White Lake",
  "Tecumseh", "Holt", "Grand Rapids", "Clinton Township", "Sterling Heights",
  "Britton", "Chase", "Bellevue", "Commerce Township", "Canton",
  "Allenton", "Cedar Springs", "Benton Harbor", "Augusta", "Akron",
  "East China", "Monroe", "Warren", "Saint Clair Shores", "West Bloomfield",
  "South Lyon", "Belmont", "Ann Arbor", "Chassell", "Auburn",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < michiganCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(michiganCities[i]);
}

module.exports = { batches };
