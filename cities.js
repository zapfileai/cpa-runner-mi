const michiganCities = [
  "Fruitport", "Flushing", "Eau Claire", "Harbor Beach", "East Tawas",
  "Grand Ledge", "Gobles", "Dryden", "Dearborn Heights", "Copemish",
  "Edmore", "Dorr", "Elkton", "Eben Junction", "Hanover",
  "Gwinn", "Emmett", "Harbert", "Glen Arbor", "Grand Blanc",
  "Hamburg", "Dowagiac", "Gowen", "East Lansing", "Hancock",
  "Flat Rock", "Dansville", "Escanaba", "Decker", "Edwardsburg",
  "Empire", "Harbor Springs", "Evart", "Columbus", "Galesburg",
  "Dimondale", "Dearborn", "Columbiaville", "Fowler", "Petoskey",
  "Ovid", "Riverdale", "Munising", "Pickford", "Palms",
  "Portage", "Potterville", "Montague", "Petersburg", "Prudenville",
  "Morley", "Reading", "Perkins", "Okemos", "Remus",
  "Newaygo", "Newberry", "Lapeer", "Inkster", "Hartford",
  "Lanse", "Kincheloe", "Kingsley", "Indian River", "Linwood",
  "Lake Orion", "Lincoln", "Macomb", "Mason", "Hopkins",
  "Kewadin", "Hartland", "Hazel Park", "Marne", "Kingsford",
  "Holland", "Spring Arbor", "Saint Helen", "Romulus", "Sparta",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < michiganCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(michiganCities[i]);
}

module.exports = { batches };
