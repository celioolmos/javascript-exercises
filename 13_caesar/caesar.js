const caesar = function(str, shift) {

    var varUpdatedString = ""

// convert string to array of unicode
const strToUni = function(string) {
        var endArray = []
        for (let i = 0; i < str.length; i++) {
        var theUnicode = string.charCodeAt(i) ;
        endArray.push(theUnicode)  
    }
    return endArray
}
 var unicodeArray = strToUni(str); 
    

       



// incriment each letter by designated "shift" requirement
shiftedUnicodeArray = unicodeArray.map(function(val){return val + shift})


//return encrypted message back
const regroupString = function(array){
      varUpdatedString = ""
    for (let i = 0; i <= shiftedUnicodeArray.length; i++) {
stringPart = String.fromCharCode(shiftedUnicodeArray[i])
 varUpdatedString = varUpdatedString + stringPart;}
 return varUpdatedString;
}


regroupString(shiftedUnicodeArray)
return varUpdatedString
}
// Do not edit below this line
module.exports = caesar;




// convert each letter to unicode





/*
let message = str;
let positionMove = shift

for (let i = 0; i <= str.length; i++) {
    var heUnicode = str.charCodeAt(i) ;
    var newMessage = "";
    var changeMessage ;
    
        if (heUnicode > 64 && heUnicode < 91){
            var changeMessage = String.fromCharCode(heUnicode + shift);
            newMessage =+ newMessage.concat(changeMessage);
        } else if (heUnicode > 96 && heUnicode < 123){
            var changeMessage = String.fromCharCode(heUnicode + shift);
            newMessage =+ newMessage.concat(changeMessage);
        } else (
            newMessage =+ newMessage.concat(changeMessage));
        

        } 
        
return newMessage;
  }*/