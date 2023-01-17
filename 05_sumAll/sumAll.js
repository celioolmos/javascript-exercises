const sumAll = function(xNum, yNum) {
    
    let start = xNum;
    let end = yNum;
    let sum = 0;
    const myArray = [];
    
    
    if (xNum < 0 || yNum < 0) {
        return "ERROR";
    } else if ( isNaN(xNum) || isNaN(yNum) ) {
        return "ERROR";
    } else if ( typeof xNum === "string"  || typeof yNum === "string" ) {
        return "ERROR";
    } else if (start < end){
        for (let i = start; i <= end; i++ ) {
       myArray.push(i)
        } myArray.forEach(item => {
        sum += item
      })
      return sum; 
    } else if (xNum > yNum) {
           
        for (let i = xNum; i >= yNum; --i) {
           myArray.push(i)
        } 
        myArray.forEach(item => {
            sum += item
          })
        return sum; 
    }
}

// Do not edit below this line
module.exports = sumAll;
