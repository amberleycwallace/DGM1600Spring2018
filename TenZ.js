/*jslint devel: true*/
/*eslint-env browser*/
/*eslint no-console: ["error", {allow: ["warn", "error", "log"]}]*/

var g = document.getElementById("guess").value;
var doRoll = document.getElementById("doRoll");
var diceElem = document.getElementsByClassName("dice");
var diceArray = [];

var dice = {
	sides: 6,
	roll: function () {
        'use strict';
        return Math.floor(Math.random() * this.sides) + 1;
	}
};

function guess() {
    "use strict";
    g = document.getElementById("guess").value;
    if (!(g == parseInt(g) && g > 0 && g < 7)) 
    alert ("This input is invalid. Please see instructions for help."); else diceRoll();
        }

function setUpDice() {
    'use strict';
    var x;
    for (x = 0; x < 10; x += 1) {
        diceArray.push(1);
    }
    return diceArray;
}

function diceRoll() {
    'use strict';
    var x;
    if (diceArray.length === 0) {
        diceArray = setUpDice();
    }
    for (x = 0; x < diceArray.length; x += 1) {
        if (parseInt(diceArray[x]) !== parseInt(g)) {
            diceArray[x] = dice.roll();
            diceElem[x].value = diceArray[x];
//            console.log(x + ' = ' + diceArray[x]);
        }
    }
    console.log(diceArray);
    document.getElementById("rolls").innerHTML =parseInt(document.getElementById("rolls").innerHTML) + 1;
    Winner();
}

doRoll.addEventListener('click', guess);

function Winner() {
    'use strict';
    var win = 1;
    for (var x = 0; x < diceArray.length; x += 1){
    if (diceArray[x] != g) 
    win= 0;}
    if (win ==1)
        {
        alert (" Congratulations! You've won! Click refresh to start a new game.");
            
        }
}




