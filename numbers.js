/*jslint devel: true, node: true*/
/*eslint-env browser*/

let firstNumber, secondNumber, thirdNumber;
    firstNumber = prompt ('Enter your first number');
    secondNumber = prompt ('Enter your second number');
    thirdNumber = prompt ('Enter your third number');

firstNumber = +firstNumber;
secondNumber = +secondNumber;
thirdNumber = +thirdNumber;
 
if (((firstNumber > secondNumber) && (firstNumber > thirdNumber)) && (secondNumber > thirdNumber))
alert (thirdNumber + " " + secondNumber + " " + firstNumber)
    
  else 
if (((firstNumber > secondNumber) && (firstNumber < thirdNumber)) && (secondNumber < thirdNumber))
alert (secondNumber + " " + firstNumber + " " + thirdNumber)
        
  else     
if (((firstNumber > secondNumber) && (firstNumber > thirdNumber)) && (secondNumber < thirdNumber))
alert (secondNumber + " " + thirdNumber + " " + firstNumber)
        
  else    
if (((firstNumber < secondNumber) && (firstNumber < thirdNumber)) && (secondNumber < thirdNumber))
alert (firstNumber + " " + secondNumber + " " + thirdNumber)
    
  else    
if (((firstNumber < secondNumber) && (firstNumber > thirdNumber)) && (secondNumber > thirdNumber))
alert (thirdNumber + " " + firstNumber + " " + secondNumber)
    
  else 
if (((firstNumber < secondNumber) && (firstNumber < thirdNumber)) && (secondNumber > thirdNumber))
alert (firstNumber + " " + thirdNumber + " " + secondNumber) ;   



//firstNumber = +firstNumber;
//or to convert from string to number
//firstNumber = Number(firstNumber);
//or
//firstNumber = parseInt(firstNumber)


//if a>b>c alert cba
//if a>b<c & a<c alert bac
//if a>b<c & a>c alert bca
//if a<b<c alert abc
//if a<b>c & a>c alert cab
//if a<b>c & a<c alert acb

abc acb bca bac cba 
