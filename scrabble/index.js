var pieces = [
              {"letter":"A", "value":1,  "amount":9},
              {"letter":"B", "value":3,  "amount":2},
              {"letter":"C", "value":3,  "amount":2},
              {"letter":"D", "value":2,  "amount":4},
              {"letter":"E", "value":1,  "amount":12},
              {"letter":"F", "value":4,  "amount":2},
              {"letter":"G", "value":2,  "amount":3},
              {"letter":"H", "value":4,  "amount":2},
              {"letter":"I", "value":1,  "amount":9},
              {"letter":"J", "value":8,  "amount":1},
              {"letter":"K", "value":5,  "amount":1},
              {"letter":"L", "value":1,  "amount":4},
              {"letter":"M", "value":3,  "amount":2},
              {"letter":"N", "value":1,  "amount":6},
              {"letter":"O", "value":1,  "amount":8},
              {"letter":"P", "value":3,  "amount":2},
              {"letter":"Q", "value":10, "amount":1},
              {"letter":"R", "value":1,  "amount":6},
              {"letter":"S", "value":1,  "amount":4},
              {"letter":"T", "value":1,  "amount":6},
              {"letter":"U", "value":1,  "amount":4},
              {"letter":"V", "value":4,  "amount":2},
              {"letter":"W", "value":4,  "amount":2},
              {"letter":"X", "value":8,  "amount":1},
              {"letter":"Y", "value":4,  "amount":2},
              {"letter":"Z", "value":10, "amount":1},
              {"letter":"_", "value":0,  "amount":2}
              ];
var game_tiles = [
                  {"id": "piece0", "letter": "A"},
                  {"id": "piece1", "letter": "B"},
                  {"id": "piece2", "letter": "C"},
                  {"id": "piece3", "letter": "D"},
                  {"id": "piece4", "letter": "E"},
                  {"id": "piece5", "letter": "F"},
                  {"id": "piece6", "letter": "G"}
                  ]
var game_board = [
                  {"id": "drop0",  "tile": "pieceX"},
                  {"id": "drop1",  "tile": "pieceX"},
                  {"id": "drop2",  "tile": "pieceX"},
                  {"id": "drop3",  "tile": "pieceX"},
                  {"id": "drop4",  "tile": "pieceX"},
                  {"id": "drop5",  "tile": "pieceX"},
                  {"id": "drop6",  "tile": "pieceX"},
                  {"id": "drop7",  "tile": "pieceX"},
                  {"id": "drop8",  "tile": "pieceX"},
                  {"id": "drop9",  "tile": "pieceX"},
                  {"id": "drop10", "tile": "pieceX"},
                  {"id": "drop11", "tile": "pieceX"},
                  {"id": "drop12", "tile": "pieceX"},
                  {"id": "drop13", "tile": "pieceX"},
                  {"id": "drop14", "tile": "pieceX"}
                  ]

/*
function load_scrabble_pieces() {
    var base_url = "Scrabble_Tiles/Scrabble_Tile_";
    var piece = "<img class='pieces' id='piece" + i + "' src='" + base_url + random_num + ".jpg" + "'></img>";
    var piece_ID = "";
    var what_piece = "";
    for(var i = 0; i < 7; i++) {
            random_num = getRandomInt(0, 26);
                pieces[random_num].amount--;
        }
        piece = "<img class='pieces' + i + "' src='" + base_url + pieces[random_num].letter + ".jpg" + "'></img>";
        piece_ID = "#piece" + i;
        $(piece_ID).draggable();
    }
}
 */
var random_images_array = ['Scrabble_Tile_A.jpg', 'Scrabble_Tile_B.jpg', 'Scrabble_Tile_C.jpg', 'Scrabble_Tile_D.jpg','Scrabble_Tile_E.jpg','Scrabble_Tile_F.jpg','Scrabble_Tile_G.jpg','Scrabble_Tile_H.jpg','Scrabble_Tile_I.jpg','Scrabble_Tile_J.jpg','Scrabble_Tile_K.jpg','Scrabble_Tile_L.jpg'];
function getRandomImage(imgAr, path) {
    path = path || 'ScrabbleTiles/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length-1 );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}
</script>
