// Create a function called findSpecies that takes in an array, loops through
// the array and returns an array of all of the species values for each object.

var findSpecies;
var animals = [
    {name: 'Tibbers', species: 'cat', age: 2},
    {name: 'Fluffball', species: 'rabbit', age: 1},
    {name: 'Strawhat', species: 'cat',  age: 5}
  ]
function findSpecies(animals){
    var array=[];
    for (var i = 0; i < animals.length; i++) {
       array[i]=animals[i].species; 
    }
    return array;
}

