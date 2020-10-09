//Tic Tac Toe
//Player Set Up
var winners = new Array();
var player1Selections = new Array();
var player2Selections = new Array();
var currentPlayer = 0;
var points1 = 0;    // player 1 points
var points2 = 0;    // player 2 points
var size = 3;

//Rendering the board

// JavaScript
function drawBoard()
{
    var parent = document.getElementById("game");
    var counter = 1;

    for (let i = 0; i < 3; i++)
    {
        var row = document.createElement("tr");

        for(let x = 0; x < 3; x++)
        {
            var col = document.createElement("td");
            col.innerHTML = counter;

            row.appendChild(col);
        }
        parent.appendChild(row);
    }
}

