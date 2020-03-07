// Variables
const ROWS = 10;
const COLS = 2 * ROWS;

// lists of colors
var green = [
  "chartreuse",
  "darkgreen",
  "lawngreen",
  "lime",
  "limegreen",
  "yellowgreen",
  "greenyellow",
  "olivedrab",
  "springgreen",
  "mediumspringgreen",
  "lightgreen",
  "darkolivegreen",
  "darkseagreen",
  "forestgreen",
  "seagreen",
  "palegreen",
  "mediumaquamarine",
  "mediumseagreen",
  "green",
  "olive"
];

var pink = [
  "pink",
  "lightpink",
  "hotpink",
  "deeppink",
  "palevioletred",
  "mediumvioletred"
];

var red = [
  "lightsalmon",
  "salmon",
  "darksalmon",
  "lightcoral",
  "indianred",
  "crimson",
  "firebrick",
  "darkred",
  "red",
  "maroon"
];

var orange = ["orangered", "tomato", "coral", "darkorange", "orange"];

var yellow = [
  "yellow",
  "lightyellow",
  "lemonchiffon",
  "lightgoldenrodyellow",
  "papayawhip",
  "moccasin",
  "peachpuff",
  "palegoldenrod",
  "khaki",
  "darkkhaki",
  "gold"
];

var cyan = [
  "aqua",
  "cyan",
  "lightcyan",
  "paleturquoise",
  "aquamarine",
  "turquoise",
  "mediumturquoise",
  "darkturquoise",
  "lightseagreen",
  "cadetblue",
  "darkcyan",
  "teal"
];

var blue = [
  "lightsteelblue",
  "powderblue",
  "lightblue",
  "skyblue",
  "lightskyblue",
  "deepskyblue",
  "dodgerblue",
  "cornflowerblue",
  "steelblue",
  "royalblue",
  "blue",
  "mediumblue",
  "darkblue",
  "navy",
  "midnightblue"
];

var purple = [
  "lavender",
  "thistle",
  "plum",
  "violet",
  "orchid",
  "fuchsia",
  "magenta",
  "mediumorchid",
  "mediumpurple",
  "blueviolet",
  "darkviolet",
  "darkorchid",
  "darkmagenta",
  "purple",
  "indigo",
  "darkslateblue",
  "slateblue",
  "mediumslateblue"
];

// master dictionary of colors
var colorDictionary = {
  green: green,
  red: red,
  purple: purple,
  blue: blue,
  cyan: cyan,
  yellow: yellow,
  orange: orange,
  pink: pink
};

var curr = "green";

// creates the tiles and heirarchy
var rowDiv, tileDiv;
var tileContainer = document.createElement("div");
tileContainer.className = "tileContainer";
container1.append(tileContainer);
for (var i = 0; i < ROWS; i++) {
  rowDiv = document.createElement("div");
  rowDiv.className = "row";
  rowDiv.id = "r" + i.toString();
  rowDiv.style.height = "fit-content";
  rowDiv.style.width = "fit-content";
  for (var j = 0; j < COLS; j++) {
    tileDiv = document.createElement("div");
    tileDiv.className = "tile";
    //tileDiv.onclick = "changeTileColor(this)";
    tileDiv.setAttribute("onclick", "changeTileColor(this)");
    tileDiv.id = rowDiv.id + "t" + j.toString();
    rowDiv.append(tileDiv);
  }
  tileContainer.append(rowDiv);
}

document.getElementById("container1").append(tileContainer);

// function to change tile color

function changeTileColor(tile) {
  if (curr == "reset") {
    tile.style.background = "whitesmoke";
  } else {
    let colorList = colorDictionary[curr];
    let i = colorList.length;
    let color = colorList[Math.floor(Math.random() * i)];
    tile.style.background = color;
  }
  return false;
}

// function to change the currently selected color

function setColor(color) {
  curr = color;
  return false;
}
