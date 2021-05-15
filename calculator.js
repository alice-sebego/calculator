/* ---------------------------
ELEMENTS OF DOM
----------------------------*/

// Numbers and point
const $numerators = document.querySelectorAll(".numerator");

// Operators
const $division = document.querySelector(".division");
const $multiplication = document.querySelector(".multiplication");
const $substraction = document.querySelector(".substraction");
const $addition = document.querySelector(".addition");
const $equal = document.querySelector(".btn-equal");

// Operators of math's functions
const $racine = document.querySelector(".racine");
const $point = document.querySelector(".point");
const $addMemory = document.querySelector(".add-memory");
const $removeMemory = document.querySelector(".remove-memory");
const $showMemory = document.querySelector(".show-memory");

// Handle displaying results
const $screen = document.querySelector(".screen");
const $reset = document.querySelector(".reset");

/* ---------------------------
AFFICHAGE ECRAN DES NUMBERS
----------------------------*/

/**
 * Set text content of elements
 * @param {HTMLElement} nb 
 */
const setNumber = (nb) => {

    nb.addEventListener('click', function(){
        if($screen.textContent == "0"){
            resetZero()
        }

        if(nb.textContent === "."){
            let numero = nb.textContent;
            $screen.textContent += numero;

        } else{
            numero = +nb.textContent;
            $screen.textContent += numero;
        }
    });

}

$numerators.forEach( numerator =>{
    setNumber(numerator);
});


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

    let result = $screen.textContent;

    for (let numerator = 0; numerator < $numerators.length; numerator++) {
        let btnNumerator = $numerators[numerator];
        //console.log(btnNumerator);
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
