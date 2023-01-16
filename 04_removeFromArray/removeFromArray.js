const removeFromArray = function(arRay, ...varib) {
    //declare values needed to be searched
    var rem=varib;
    var keeP="";
    // filter multiple arguments from array
    keeP = arRay.filter(item => !rem.includes(item));
    //return new results to computer
    return keeP;
}
// Do not edit below this line
module.exports = removeFromArray;