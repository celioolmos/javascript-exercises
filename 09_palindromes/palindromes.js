const palindromes = function (string) {
let reGen =  /[^A-Za-z0–9]/g ;
let lowreGenString = string.toLowerCase().replace(reGen, '');
let splitString = lowreGenString.split("");
let reverseArray = splitString.reverse();
let joinArray = reverseArray.join("");


if (joinArray === lowreGenString) {
    return true;
}else {
    return false;
}
};

// Do not edit below this line
module.exports = palindromes;


// using https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/ to help with solution. reGen x was used.