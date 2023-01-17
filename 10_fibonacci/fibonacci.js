const fibonacci = function(userEntry) {
    var userNum 
    var num1=0;
    var num2=1;
    var sum;
    var i=0;
    nextSeq = ""

    if (userEntry < 0 ) {
        return "OOPS";
    } else if (userEntry === 1 || userEntry === 2) {
            nextSeq = 1;
            return nextSeq;
    } else if (typeof userEntry === "string)"){
        userNum = parseFloat.userEntry
        for (let i = 1; i < userNum; i++) {
            sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;

   } else {
        userNum = userEntry 
        for (let i = 1; i < userNum; i++) {
            sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
        }
    }
// Do not edit below this line
module.exports = fibonacci;


