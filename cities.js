const michiganCities = [
  "Lennon", "Lake City", "Houghton", "Martin", "Jonesville",
  "Marshall", "Hastings", "Lawrence", "Howard City", "Lexington",
  "Ishpeming", "Highland Park", "Lawton", "Leonard", "Hillman",
  "Lincoln Park", "Jones", "Jasper", "Haslett", "Hersey",
  "Holly", "Houghton Lake", "Marlette", "La Salle", "Marcellus",
  "Lake Linden", "Lyons", "Jeddo", "Kingston", "Laingsburg",
  "Kent City", "Lake Leelanau", "Kinross", "Lowell", "Johannesburg",
  "Mancelona", "Manitou Beach", "Samaria", "Whitehall", "Rosebush",
  "Weidman", "Taylor", "Wayland", "Shelby", "Union City",
  "Springport", "Southgate", "Stanton", "Ubly", "Williamsburg",
  "Vestaburg", "Sidney", "Spruce", "Union Pier", "Shepherd",
  "West Branch", "Unionville", "White Cloud", "Saint Charles", "Scotts",
  "Webberville", "Stephenson", "Vulcan", "West Olive", "Saint Ignace",
  "Roseville", "Sandusky", "Tekonsha", "Three Oaks", "Smiths Creek",
  "Stanwood", "Watersmeet", "Tawas City", "Schoolcraft", "Sand Lake",
  "Vandalia", "Vassar", "Spalding", "Sebewaing", "Standish",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < michiganCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(michiganCities[i]);
}

module.exports = { batches };
