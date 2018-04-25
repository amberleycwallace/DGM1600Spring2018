//How to randomize the ships, vars for each ship, function for keeping track of what was hit, (maybe one picture of a ship spanned across multiple squares and O's in the empty ones?) 
/*jslint devel: true*/
/*eslint-env browser*/
/*eslint no-console: ["error", {allow: ["warn", "error", "log"]}]*/



var ships = [ {length: 6, direction: null, x: null, y: null, health: 6},
        {length: 5, direction: null, x: null, y: null, health: 5},
        {length: 4, direction: null, x: null, y: null, health: 4},
        {length: 3, direction: null, x: null, y: null, health: 3},
        {length: 2, direction: null, x: null, y: null, health: 2}];
var guesses = 0;
var wins = 0;
var losses = 0;

function placeShip(item) {
    'use strict';
    if (Math.floor(Math.random() * 2) === 0) {
        item.direction = "horizontal";
    } else {
        item.direction = "vertical";
    }
    while (hits(item.x, item.y, true)){
    if (item.direction = "horizontal"){
        item.x=(Math.floor (Math.random() * (10 - item.length)));
        item.y=(Math.floor (Math.random() * 10));
    }
    else{
        item.y=(Math.floor (Math.random() * (10 - item.length)));
        item.x=(Math.floor (Math.random() * 10));    
    }
    }
}

function newGame() {
    'use strict';
    for (var i = 0, len = ships.length; i < len; i++){
        placeShip(ships[i]);
    }
}


function hits(x, y, setup) {
    'use strict';
    if (x === null)
    return true;
    for (var i = 0, len = ships.length; i < len; i++){
        if(item.direction!= null){
         if(item.direction= 'horizontal'){
             if(this.y = ships[i].y){
                 if (this.x >= ships[i].x && this.x <= ships[i].x + ships[i].length){
                     if(!setup){
                         document.getElementsByName(this.x.toString().concat(this.y.toString()))[0]= 'x';
                         ships[i].health -= 1;
                         if ( ships[i].health === 0)
                             alert ("You just sunk ship " + ships[i].length.toString());
                     }
                     return true;
                 }
             }
         }
         else{
             if(this.x === ships[i].x) {
                    if (this.y >= ships[i].y && this.y <= ships[i].y + ships[i].length){
                     if(!setup){
                         document.getElementsByName(this.x.toString().concat(this.y.toString()))= 'x';
                         ships[i].health -= 1;
                         if ( ships[i].health === 0)
                             alert ("You just sunk ship " + ships[i].length.toString());
                     }
                     return true;
                 } 
                 }
         }
     }
    };
return false; 
}


function guess(){
 var guessx = 'ABCDEFGHIJ'.indexof(document.getElementbyId('guessx').value.toString().toUpperCase());
var guessy = '0123456789'.indexof(document.getElementbyId('guessy').value.toString().toUpperCase());
    
    if (guessx === -1 || guessy === -1){
        alert ('Your guess is invalid. PLease see instructions for help.')
        return null;
    }
if (!hits(guessx, guessy, false)){
    document.getElementsByName(guessx.toString().concat(guessy.toString()))[0].value='O';
}    
    guesses += 1;

}
 