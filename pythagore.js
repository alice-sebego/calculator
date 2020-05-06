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
    console.log(lengthHypotenuse(aCote,bCote));
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
    console.log(lenghtOtherSegment(cote, hypotenuse));
})