var $division = document.querySelector(".division");
var $multiplication = document.querySelector(".multiplication");
var $substraction = document.querySelector(".substraction");
var $addition = document.querySelector(".addition");
var $equal = document.querySelector(".btn-equal");

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
    
        const numerator7 = +$seven.textContent;
        $screen.textContent += numerator7;

    })

}
setSeven();

// Ecrire Huit
function setEight(){

    $eight.addEventListener('click', function(){

        const numerator8 = +$eight.textContent;
        $screen.textContent += numerator8;
    })
}
setEight();

// Ecrire Neuf
function setNine(){

    $nine.addEventListener('click', function(){

        const numerator9 = +$nine.textContent;
        $screen.textContent += numerator9;
    })
}
setNine();
 
// Ecrire Quatre
function setFour(){

    $four.addEventListener('click', function(){

        const numerator4 = +$four.textContent;
        $screen.textContent += numerator4;
    })
}
setFour();

// Ecrire Cinq
function setFive(){

    $five.addEventListener('click', function(){

        const numerator5 = +$five.textContent;
        $screen.textContent += numerator5;
    })
}
setFive();

// Ecrire six
function setSix(){

    $six.addEventListener('click', function(){

        const numerator6 = +$six.textContent;
        $screen.textContent += numerator6;
    })
}
setSix();

// Ecrire un
function setOne(){

    $one.addEventListener('click', function(){

        const numerator1 = +$one.textContent;
        $screen.textContent += numerator1;
    })
}
setOne();

// Ecrire Deux
function setTwo(){

    $two.addEventListener('click', function(){

        const numerator2 = +$two.textContent;
        $screen.textContent += numerator2;
    })
}
setTwo();

// Ecrire Trois
function setThree(){

    $three.addEventListener('click', function(){

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

        const equal = $equal.textContent;
        $screen.textContent = eval($screen.textContent);
    })
}
setEqual();


function resetWrite(){

    $reset.addEventListener('click', function(){
        $screen.textContent = "";
    })
}
resetWrite();
