//// map and filter make a new array
//// fill and sort act on existing array 
//// reduce is a special case

let numVals = [2, 54, 7, 3, 5, 23, 77]
let strVals = ['a', 'calvin', 'coolidge', 'thizzle']

let compare = array => (array.sort((a,b) => b - a))
const strSortByWordLength = array => (array.sort((a,b) => b.length -a.length))

console.log('This array of ints is sorted by highest to lowest', compare(numVals))

console.log(('This array of strs is sorted by the lenth of the words from longest to shortest'), strSortByWordLength(strVals));