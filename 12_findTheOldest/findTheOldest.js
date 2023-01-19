const findTheOldest = function(array) {

    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
        return oldestAge < currentAge ? currentPerson : oldest
      })
    }
    
    const getAge = function(birth, death) {
      if (!death) {
        death = new Date().getFullYear();
      }
      return death - birth;
    
    }
    console.log(getAge);
// Do not edit below this line
module.exports = findTheOldest;



/*
updating array with new values
https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/



finding the max value
https://stackoverflow.com/questions/46088623/javascript-return-occurence-of-highest-score-in-array
}


const peopleAge = array.map ( people => { 
    let ageProp = {
        "Age": people.yearOfDeath - people.yearOfBirth,
        "Name": people.name
        };

    return ageProp
});


const max = peopleAge.reduce(function(a, b){
    if(a.Age > b.Age)
        return a;
    return b;
})

//const ageResult = max.map (a => a.Name);
console.log(max);

*/