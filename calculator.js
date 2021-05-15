/* ---------------------------
ELEMENTS OF DOM
----------------------------*/

// Numbers and point
const $numerators = document.querySelectorAll(".numerator");

// Operators

const $operators = document.querySelectorAll(".operator");
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
NUMBERS DISPLAY ON THE SCREEN
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

$numerators.forEach( numerator => {
    setNumber(numerator);
});


/* ------------------------
OPERATORS DISPLAY ON THE SCREEN
--------------------------*/

/**
 * Display operator on the screen
 * @param {HTMLElement} btn 
 */
const setOperator = (btn) => {

    btn.addEventListener('click', () => {

        let btnContent = btn.textContent;

        switch (btnContent) {
            case "X":
                $screen.textContent += "*";
                break;
            case "÷":
                $screen.textContent += "/";
                break;
            case "+":
                $screen.textContent += "+";
                break;
            case "-":
                $screen.textContent += "-";        
            default:
                console.log("error");
                break;
        }
    });
}

$operators.forEach( operator => {
    setOperator(operator); 
});

// Calculate the result of operation 
const setEqual = () => {

    $equal.addEventListener('click', () => {

        $screen.textContent = eval($screen.textContent);
     
    });
}

setEqual();

// I tryed reset for a click on numerator after a result but i'm blocked

const resetAfterResult = () => {

    let result = $screen.textContent;

    for (let numerator = 0; numerator < $numerators.length; numerator++) {
        let btnNumerator = $numerators[numerator];
        //console.log(btnNumerator);
        btnNumerator.addEventListener('click', () => {
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

const squareRoot = () => {

    $racine.addEventListener('click', () => {
    $screen.textContent = Math.sqrt($screen.textContent);    
    });
}

squareRoot();

// Reset screen
const resetWrite = () => {

    $reset.addEventListener('click', function(){
        $screen.textContent = "0";
    })
}
resetWrite();

// reset zero
const resetZero = () => {
    $screen.textContent = "";
}

/*---------------------------------
 Functions of calculator's memory
--------------------------------- */

const memory = [];

// Function M+
const addMemory = () => {
   $addMemory.addEventListener('click', () => {
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
   }); 
}

addMemory();

// Function M-

const removeMemory = () => {
    $removeMemory.addEventListener('click', () =>{
        memory.pop($screen.textContent);
        console.log(memory[0]);
    });
}

removeMemory();

// Function MRC
const showMemory = () => {
    $showMemory.addEventListener('click', () => {
        $screen.textContent = memory[0];
    });
}

showMemory();
