const michiganCities = [
  "Utica", "Saginaw", "Harrison Township", "Lansing", "Marquette",
  "Howell", "Jackson", "Hudsonville", "Jenison", "Huntington Woods",
  "Plymouth", "New Baltimore", "Mount Pleasant", "Rock", "Ossineke",
  "Memphis", "Niles", "New Lothrop", "Rapid City", "River Rouge",
  "Pewamo", "New Hudson", "Metamora", "Pleasant Lake", "Pontiac",
  "Owosso", "North Adams", "Lewiston", "Hermansville", "Kinde",
  "Harrison", "Hemlock", "Ithaca", "Madison Heights", "Mackinaw City",
  "Harris", "Highland", "Hesperia", "Manistique", "Lachine",
  "Hickory Corners", "Marysville", "Mattawan", "Mayfield", "Jerome",
  "Interlochen", "Hope", "Kawkawlin", "Keego Harbor", "Lakeview",
  "Levering", "Lakeland", "Lambertville", "Hessel", "Imlay City",
  "Marine City", "Lake", "Maple City", "Ionia", "Leland",
  "Iron River", "Hart", "Hillsdale", "Lake Ann", "Manistee",
  "Harsens Island", "Higgins Lake", "Linden", "Holton", "Iron Mountain",
  "Manchester", "Maybee", "Ludington", "Hudson", "Mcbain",
  "Ironwood", "Leslie", "Lake Odessa", "Leroy", "Horton",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < michiganCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(michiganCities[i]);
}

module.exports = { batches };
