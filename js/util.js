import _ from 'lodash';
// Handle year's display
const $year = document.querySelector("#year");
const date = new Date(Date.now());
const year = date.getFullYear();

$year.textContent = year;