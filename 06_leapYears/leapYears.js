const leapYears = function(entryYear) {

let modulo = entryYear % 4;
let centuryModulo = entryYear % 400;
let centuryModuloByHun = entryYear % 100;

if (centuryModuloByHun === 0 && centuryModulo === 0) {
    return true;
}else if(centuryModuloByHun === 0 ) {
    return false;
}else if ( modulo === 0 || centuryModulo === 0 ) {
    return true;
}else {
return false;
}
};

// Do not edit below this line
module.exports = leapYears;
