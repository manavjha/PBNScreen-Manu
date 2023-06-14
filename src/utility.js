import data from "./data/table.json";

console.log(data);

// Function accepts a first and last name
// separated by a space, and returns the first
// and last initial along with a varying color

export function generate_avatar_data(name) {
  name = name || "";

  var colours = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
    "#f1c40f",
    "#e67e22",
    "#e74c3c",
    "#061417",
    "#95a5a6",
    "#f39c12",
    "#d35400",
    "#c0392b",
    "#bdc3c7",
    "#7f8c8d"
  ];

  const cleanName = name.replace(/[!@#$%^&*]/g, "").replace(/\s+/g, " ");

  var nameSplit = String(cleanName).toUpperCase().split(" ");

  var initials;
  var lastinitial;
  if (nameSplit.length == 1) {
    initials = nameSplit[0] ? nameSplit[0].charAt(0) : "?";
    lastinitial = initials;
  } else {
    initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
    lastinitial = nameSplit[1].charAt(0);
  }

  var charIndex = (lastinitial == "?" ? 72 : lastinitial.charCodeAt(0)) - 64;
  var colourIndex = charIndex % 20;

  return { initials: initials, color: colours[colourIndex] };
}
