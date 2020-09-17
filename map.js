/// map returns a NEW ARRAY!

let array = [1, 3, 4, 5, 7, 9, 12]

const arrayHalver = (item) => (item / 2)

const halvedArray = array.map(arrayHalver)

console.log('This is an array with values halved', halvedArray);

/// takes items from an array and makes them a string 


let array2 = [1, 3, 4, 5, 7, 9, 12]

const stringedArray = array2.map(item => item.toString())

console.log('Here is an array: ', array2);
console.log(`This array has now had all it's contained values stringified:`, stringedArray);

/// modifies the contents of an array to add a random number to each item: 

const addRandomToItems = array2.map(x => x + Math.floor(Math.random() * 10))

console.log('Here is the array', array2, 'and here is the array with random numbers added', addRandomToItems);

/// create an array with 100 random items
const aHundredRandomItems = Array(100).fill(0).map(x => x + Math.floor(Math.random() * 100))
console.log('Here is an array with a hundred random numbers', aHundredRandomItems);