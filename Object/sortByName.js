// Write a JavaScript function sortByName to sort the following array of objects by the name value.
// Return the sorted array of objects


 var animals = [
  { species: 'Primate', name: 'Coco', age: 10, gender: 'female', favoriteFood: 'Banana'},
  { species: 'Cat', name: 'Ophelia', age: 6, gender: 'female', favoriteFood: 'Tuna'},
  { species: 'Horse', name: 'Beauty', age: 3, gender: 'female', favoriteFood: 'Carot'},
  { species: 'Elephant', name: 'Jumbo', age: 22, gender: 'male', favoriteFood: 'Apples'},
  { species: 'Bird', name: 'Twiti', age: 7, gender: 'male', favoriteFood: 'Seeds'},
];

function sortedAnimals(animals){
  return animals.sort(function (a, b) {
       if (a.name < b.name) {
         return -1;
       }
       if (a.name > b.name) {
         return 1;
       }
       return 0;
});
}




