/**
 * Calculate hypotenuse's lenght
 * @param {number} a 
 * @param {number} b 
 */

function lengthHypotenuse(a, b){
    return Math.hypot(a, b);
}

const $calcHypotenuse = document.getElementById('calcHypotenuse');

$calcHypotenuse.addEventListener('click', function(e){
    e.preventDefault();
    const aCote = document.getElementById('a').value;
    const bCote = document.getElementById('b').value;
    lengthHypotenuse(aCote,bCote);
    const $resultHypothenuse = document.getElementById('result-hypothenuse');
    $resultHypothenuse.textContent = lengthHypotenuse(aCote,bCote) + ' cm';
    $resultHypothenuse.style.border = "1px dashed rgb(158, 201, 204)";
})

/**
 * Calculate the other segments of triangle
 * @param {number} s 
 * @param {number} c 
 */

function lenghtOtherSegment(s, c){
    return Math.sqrt((c * c) - (s * s));
}

const $calcSegment = document.getElementById('calcSegment');

$calcSegment.addEventListener('click', function(e){
    e.preventDefault();
    const hypotenuse = document.getElementById('c').value;
    const cote = document.getElementById('s').value;
    lenghtOtherSegment(cote, hypotenuse);
    const $resultSegment = document.getElementById('result-segment');
    $resultSegment.textContent = lenghtOtherSegment(cote, hypotenuse) + ' cm';
    $resultSegment.style.border = "1px dashed rgb(158, 201, 204)";
})