const caesar = function(str, shift) {

let encrpted = ""
let newVal =""

for (let i = 0 ; i < str.length ; i++) {
    let currentLetterCode = str.charCodeAt(i);
 
    if (currentLetterCode > 64 && currentLetterCode < 91 || currentLetterCode > 96 && currentLetterCode <123) {
        let updatedLetterCode = currentLetterCode + shift;
         if(updatedLetterCode > 90 && updatedLetterCode < 97){
            updatedLetterCode = (updatedLetterCode -25) -1;

         } if(updatedLetterCode < 65 && updatedLetterCode < 97) {
            updatedLetterCode = (updatedLetterCode +25) + 1;}
            
            newVal = String.fromCharCode(updatedLetterCode);
          
        }
    else 
            newVal = String.fromCharCode(currentLetterCode); 
        encrpted += newVal
}
    return encrpted;
}
// Do not edit below this line
module.exports = caesar;







