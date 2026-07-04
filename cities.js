const michiganCities = [
  "Melvindale", "Morrice", "Prescott", "Middleville", "Milford",
  "Paris", "Onondaga", "Palmer", "Plainwell", "Rockford",
  "National City", "Merrill", "Minden City", "Nunica", "Port Austin",
  "Richland", "Osseo", "Reed City", "Mendon", "Munger",
  "Morenci", "Newport", "Rives Junction", "Omena", "Midland",
  "Otisville", "Onsted", "Mio", "Oxford", "Rapid River",
  "Perry", "Mears", "Old Mission", "Munith", "Pelkie",
  "Menominee", "Pinckney", "New Boston", "Riga", "Northport",
  "Pigeon", "Pleasant Ridge", "Middleton", "Pierson", "Omer",
  "Port Huron", "Rodney", "Redford", "New Buffalo", "Pinconning",
  "Negaunee", "North Street", "Mount Morris", "Millington", "Paw Paw",
  "Oakland", "New Era", "Norway", "Presque Isle", "Riverview",
  "Moran", "Ortonville", "Parma", "Oak Park", "Walled Lake",
  "Zeeland", "Trenton", "Saint Joseph", "Troy", "Temperance",
  "Swartz Creek", "Stevensville", "Saint Johns", "Sault Sainte Marie", "Wyandotte",
  "Wyoming", "Spring Lake", "Westland", "Saline", "Ypsilanti",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < michiganCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(michiganCities[i]);
}

module.exports = { batches };
