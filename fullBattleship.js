var ships =[{length:6, direction:null, x:null, y:null, health:6},
{length:5, direction:null, x:null, y:null, health:5},
{length:4, direction:null, x:null, y:null, health:4},
{length:3, direction:null, x:null, y:null, health:3},
{length:2, direction:null, x:null, y:null, health:2}];


function newGame(){
    for (var i = 0, len = ships.length; i < len; i++) {
        if(Math.floor(Math.random()*2)===0){
            ships[i].direction="Horizontal";
         }
        else{
            ships[i].direction="Vertical";
        }
    
    
        while(hits(ships[i].x,ships[i].y,i,true)){
    
    
            if(ships[i].direction = "Vertical"){
                ships[i].y=(Math.floor(Math.random()*(10-ships[i].length)));
                ships[i].x=(Math.floor(Math.random()*10));
            }
            else{
                ships[i].y=(Math.floor(Math.random()*10));
                ships[i].x=(Math.floor(Math.random()*(10-ships[i].length)));
            }
        }
      };
}


function hits(x,y,j,setup){
    if(x===null)
    return true;
    for (var i = 0, len = ships.length; i < len; i++) {
        
        if(ships[i].direction!=null && j!==i)
        {
            if(ships[i].direction === 'Horizontal')
            {
                    if(y = ships[i].y)
                    {
                        if(x >= ships[i].x && x<=ships[i].x+ships[i].length && ships[i].x!=null){
                            if(!setup){
                                document.getElementsByName(x.toString().concat(y.toString()))[0].innerHTML='x';
                                ships[i].health -=1;
                                if(ships[i].health ===0)
                                alert("You just sunk ship "+ships[i].length.toString());
                            }
                            return true;
                        }
                    }
            }
            else
            {
                if(x === ships[i].x)
                {
                    if(y >= ships[i].y && y<=ships[i].y+ships[i].length && ships[i].y!=null)
                    {
                            if(!setup){
                                document.getElementsByName(x.toString().concat(y.toString()))[0].innerHTML='x';
                                ships[i].health -=1;
                                if(ships[i].health ===0)
                                alert("You just sunk ship "+ships[i].length.toString());
                            }
                        return true;
                    }

                }
            }
        }
    }
    return false;
}

function wonInc() {
    var win = document.getElementById('wins'),
        winCnt = 0;
    winCnt = Number(win.innerHTML);
    winCnt += 1;
    win.innerHTML = winCnt;
}

function lossInc() {
    var loss = document.getElementById('losses'),
        lossCnt = 0;
    lossCnt = Number(loss.innerHTML);
    lossCnt += 1;
    loss.innerHTML = lossCnt;
}

function guess()
{
    var guessx = 'ABCDEFGHIJ'.indexOf(document.getElementById('guessx').value.toString().toUpperCase()),
        guessy = '0123456789'.indexOf(document.getElementById('guessy').value.toString().toUpperCase()),
        guessCnt = 0;
    var guesses = document.getElementById('guess');
    
    guessCnt = Number(guesses.innerHTML);
    if(guessx ===-1 || guessy === -1){
        alert('Your input is invalid. Please review the instructions and try again.')
        return null;
    }
    
    // TODO write call to function to see if choice has already been selected.

    if(!hits(guessx,guessy,null,false)){
        document.getElementsByName(guessx.toString().concat(guessy.toString()))[0].innerHTML='o';                                
    }
    guessCnt += 1;
    // TODO check if all ships are sunk then increment win tell user they won
    // TODO if guessCnt > 50 increment loss and tell user they loss
    guesses.innerHTML = guessCnt;
//    guesses +=1;


}

//var guesses = document.getElementbyId('guess');


