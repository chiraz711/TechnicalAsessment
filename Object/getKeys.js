// Create a function called getKeys that takes in the animal object and returns all
// of the key names.

var animal;
var getKeys;

var animal= {name: 'Tibbers', species: 'cat', age: '2'};
    
function getKeys(animal){
    return (Object.keys(animal));
}
