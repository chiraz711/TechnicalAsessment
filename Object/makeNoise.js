// Create a function called makeNoise that takes in an object and returns
// the response from calling the noise method.

var animal;
var makeNoise;

var animal={name:'cat',
race:'gh',
makeNoise(){
    console.log('mia mio')
}
}

function makeNoise(animal){
    return animal.makeNoise();

}

var animal = {
    type: "cat",
    name: "kitty",
    sounds() { console.log("meow meow") }
 };
    
function makeNoise(animal){
   return animal.sounds;
}

