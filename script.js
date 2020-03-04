const ROWS = 10;
const COLS = 2 * ROWS;

function createTiles(container1) {
    var rowDiv, tileDiv;
    var tileContainer = document.createElement("div");
    tileContainer.className = "tileContainer";
    container1.append(tileContainer);
    for (int i = 0; i < ROWS; i++) {
        rowDiv = document.createElement("div");
        rowDiv.className = "row";
        rowDiv.id = "r" + i.toString();
        for (int j = 0; j < COLS; j++) {
            tileDiv = document.createElement("div");
            tileDiv.className = "tile";
            tileDiv.id = rowDiv.id + "t" + j.toString();
            rowDiv.append(tileDiv);
        }
        tileContainer.append(rowDiv);
    }
}

window.createTiles(document.getElementById("container1"));

