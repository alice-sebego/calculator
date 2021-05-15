import _ from 'lodash';
/**
 * Calculate hypotenuse's length
 * @param {number} a 
 * @param {number} b 
 */
const lengthHypotenuse = (a, b) =>  Math.hypot(a, b);

const $calcHypotenuse = document.querySelector('#calcHypotenuse');

$calcHypotenuse.addEventListener('click', e => {
    
    e.preventDefault();
    
    const aCote = document.querySelector('#a').value;
    const bCote = document.querySelector('#b').value;
    
    lengthHypotenuse(aCote,bCote);
    
    const $resultHypothenuse = document.querySelector('#result-hypothenuse');
    $resultHypothenuse.textContent = Math.round(lengthHypotenuse(aCote,bCote) * 100) / 100  + ' cm';
    $resultHypothenuse.style.border = "1px dashed rgb(158, 201, 204)";
});

/**
 * Calculate the other segments of triangle
 * @param {number} s 
 * @param {number} c 
 */
const lenghtOtherSegment = (s, c) => Math.sqrt((c * c) - (s * s));

const $calcSegment = document.querySelector('#calcSegment');

$calcSegment.addEventListener('click', e => {
    
    e.preventDefault();
    
    const hypotenuse = document.querySelector('#c').value;
    const cote = document.querySelector('#s').value;
    
    lenghtOtherSegment(cote, hypotenuse);
    
    const $resultSegment = document.querySelector('#result-segment');
    $resultSegment.textContent = Math.round(lenghtOtherSegment(cote, hypotenuse) * 100) /100 + ' cm';
    $resultSegment.style.border = "1px dashed rgb(158, 201, 204)";
});