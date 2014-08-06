var tiles = [1, 3, 2, 2, 5, 4, 4, 5, 6, 3, 1, 6];

function pickTile(tileNum, tile) {
  console.log(tiles[tileNum]);
  displayTile(tileNum, tile);
}

function displayTile(tileNum, tile) {
  tile.innerHTML = tiles[tileNum];
}