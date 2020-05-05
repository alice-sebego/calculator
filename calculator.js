var $division = document.querySelector(".division");
var $multiplication = document.querySelector(".multiplication");
var $substraction = document.querySelector(".substraction");
var $addition = document.querySelector(".addition");
var $equal = document.querySelector(".btn-equal");

var $racine = document.querySelector(".racine");
var $point = document.querySelector(".point");
var $addMemory = document.querySelector(".add-memory");
var $removeMemory = document.querySelector(".remove-memory");
var $showMemory = document.querySelector(".show-memory");

var $seven = document.querySelector(".seven");
var $eight = document.querySelector(".eight");
var $nine = document.querySelector(".nine");
var $four = document.querySelector(".four");
var $five = document.querySelector(".five");
var $six = document.querySelector(".six");
var $three = document.querySelector(".three");
var $two = document.querySelector(".two");
var $one = document.querySelector(".one");
var $zero = document.querySelector(".btn-zero");

var $screen = document.querySelector(".screen");

var $reset = document.querySelector(".reset");


/* ---------------------------
AFFICHAGE ECRAN DES NUMBERS
----------------------------*/

// Ecrire Sept
function setSeven(){

    $seven.addEventListener('click', function(e){
        if($screen.textContent == "0"){
            resetZero()
        } 
        const numerator7 = +$seven.textContent;
        $screen.textContent += numerator7;

    })

}
setSeven();

// Ecrire Huit
function setEight(){

    $eight.addEventListener('click', function(){
        if($screen.textContent == "0"){
            resetZero()
        }
        const numerator8 = +$eight.textContent;
        $screen.textContent += numerator8;
    })
}
setEight();

// Ecrire Neuf
function setNine(){

    $nine.addEventListener('click', function(){
        if($screen.textContent == "0"){
            resetZero()
        }
        const numerator9 = +$nine.textContent;
        $screen.textContent += numerator9;
    })
}
setNine();
 
// Ecrire Quatre
function setFour(){

    $four.addEventListener('click', function(){
        if($screen.textContent == "0"){
            resetZero()
        }
        const numerator4 = +$four.textContent;
        $screen.textContent += numerator4;
    })
}
setFour();

// Ecrire Cinq
function setFive(){

    $five.addEventListener('click', function(){
        if($screen.textContent == "0"){
            resetZero()
        }
        const numerator5 = +$five.textContent;
        $screen.textContent += numerator5;
    })
}
setFive();

// Ecrire six
function setSix(){

    $six.addEventListener('click', function(){
        if($screen.textContent == "0"){
            resetZero()
        }
        const numerator6 = +$six.textContent;
        $screen.textContent += numerator6;
    })
}
setSix();

// Ecrire un
function setOne(){

    $one.addEventListener('click', function(){
        if($screen.textContent == "0"){
            resetZero()
        }
        const numerator1 = +$one.textContent;
        $screen.textContent += numerator1;
    })
}
setOne();

// Ecrire Deux
function setTwo(){

    $two.addEventListener('click', function(){
        if($screen.textContent == "0"){
            resetZero()
        }
        const numerator2 = +$two.textContent;
        $screen.textContent += numerator2;
    })
}
setTwo();

// Ecrire Trois
function setThree(){

    $three.addEventListener('click', function(){
        if($screen.textContent == "0"){
            resetZero()
        }
        const numerator3 = +$three.textContent;
        $screen.textContent += numerator3;
    })
}
setThree();

// Ecrire zéro
function setZero(){

    $zero.addEventListener('click', function(){
        
        const numerator0 = +$zero.textContent;
        $screen.textContent += numerator0;

    })
}
setZero();

// Ecrire point

function setPoint(){
    $point.addEventListener('click', function(){
       
        const point = $point.textContent;
        $screen.textContent += point;

    })
}

setPoint();

/* ------------------------
AFFICHAGE ECRAN OPERATORS
--------------------------*/
function setMultiplication(){

    $multiplication.addEventListener('click', function(){

        const fois = "*";
        $screen.textContent += fois;
    })
}
setMultiplication();

function setDivision(){

    $division.addEventListener('click', function(){

        const divisor = "/";
        $screen.textContent += divisor;
    })
}
setDivision();

function setAddition(){

    $addition.addEventListener('click', function(){

        const plus = $addition.textContent;
        $screen.textContent += plus;
    })
}
setAddition();

function setSubstraction(){

    $substraction.addEventListener('click', function(){

        const moins = $substraction.textContent;
        $screen.textContent += moins;
    })
}
setSubstraction();


function setEqual(){

    $equal.addEventListener('click', function(){

        $screen.textContent = eval($screen.textContent);
        console.log(typeof $screen.textContent);

        let result = $screen.textContent;
        console.log(result);  
    })
}
setEqual();

// I tryed reset for a click on numerator after a result but i'm blocked

function resetAfterResult(){

    var $numerators = document.getElementsByClassName("numerator");
    let result = $screen.textContent;

    for (let numerator = 0; numerator < $numerators.length; numerator++) {
        let btnNumerator = $numerators[numerator];
        console.log(btnNumerator);
        btnNumerator.addEventListener('click', function(){
            if(result !== "0"){
                return resetWrite();
            }
        })
    } 
}

resetAfterResult();

/* --------------------------
MISE EN OEUVRE DES FONCTIONS
----------------------------*/

// Racine carré

function squareRoot(){

    $racine.addEventListener('click', function(){
    $screen.textContent = Math.sqrt($screen.textContent);    
    })
}

squareRoot();

// Reset screen
function resetWrite(){

    $reset.addEventListener('click', function(){
        $screen.textContent = "0";
    })
}
resetWrite();

// reset zero
function resetZero(){
    $screen.textContent = "";
}

/*---------------------------------
 Functions of calculator's memory
--------------------------------- */

const memory = [];

// Function M+
function addMemory(){
   $addMemory.addEventListener('click', function(){
        //if(!$screen.textContent){
        //   memory.splice(0,1, $screen.textContent);
        //} 
       memory.push($screen.textContent);
       // Add a symbol M in the screen when a number is in the calculator's memory
       const m = document.createElement('div');
       m.setAttribute('id', 'm');
       $screen.appendChild(m);
       m.textContent = "M";
       console.log(memory[0]); 
   }) 
}

addMemory();

// Function M-

function removeMemory(){
    $removeMemory.addEventListener('click', function(){
        memory.pop($screen.textContent);
        console.log(memory[0]);
    })
}

removeMemory();

// Function MRC
function showMemory(){
    $showMemory.addEventListener('click', function(){
        $screen.textContent = memory[0];
    })
}

showMemory();
