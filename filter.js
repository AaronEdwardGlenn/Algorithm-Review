/// Remember what modulus means: 

let yesRemainder = 3 % 2
let noRemainder = 4 % 2
console.log(`There IS a remainder when divided by two so we will get a 1 meaning TRUE: ${yesRemainder}`);
console.log(`There IS NOT a remainder when divided by two so we will get a 0 meaning FALSE: ${noRemainder}`);
//// This function filtEvens takes in an array and filters out even numbers

let values = [1, 3, 6, 8, 12, 17, 21]

const filtEvens = (vals) => (vals.filter(val => !(val % 2)))
console.log(`The even numbers in the array are ${filtEvens(values)}`);


//// This function filtOdds takes in an array and filters out odd numbers

const filtOdds = (vals) => (vals.filter(val => val % 2 == 1))
console.log(`The odd numbers in the array are ${filtOdds(values)}`);


//// This function takes the values of two arrays and returns the even numbers in the arrays. 

arr1 = [1, 4, 6, 7, 8, 9, 43]
arr2 = [6, 7, 3, 6, 2, 23, 99]

const evensInArrays = (array1, array2) => (array1.concat(array2).filter(int => !(int % 2 == 1)))

console.log(`The even number in the two given arrays are: ${evensInArrays(arr1, arr2)}`);


//// This function filters out the falsey values that exist in any number of arrays

array5 = [12, -1, 0, null, false, true, 43, 12, -9]
array2 = [12, 3, 5, null, undefined, undefined, 12, 'yes']
array3 = [12, 33, 44, 55, 66, 77]

const exitFalseyValues = (array1, ...arrays) => (array1.concat(...arrays).filter(x => x))

console.log(`Items in our arrays that have truethy values are: ${exitFalseyValues(array5, array2, array3)}`);

/// This function shows how .filter KEEPS everything you specifiy should be kept. FILTER FILTERS IN!

let myOptions = ['KEEPME', 'LEAVEME']

let useFilterToKeepItem = (options) => (options.filter(option => option == 'KEEPME'))
let userFilterToRemoveItem = (options) => (options.filter(option => !(option == 'KEEPME')))


console.log(useFilterToKeepItem(myOptions));
console.log(userFilterToRemoveItem(myOptions));


//// Remove all words from a string that contain less tahn three letters: 

s = 'Calvin Coolidge is hella cool you know it.'
let removeWordsWithLessThanThreeChars = (string) => (string.split(' ').filter(word => !(word.length <= 3)))

console.log(removeWordsWithLessThanThreeChars(s));

