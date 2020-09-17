/// this takes an array and adds all values together. We can also add 1000 as an initial value. 
vals = [1, 3, 4, 5, 6, 1, 2, 4, 5]
let answer = vals.reduce((acc, val) => (acc + val), 1000)
console.log('This is the sum of the values of an array with a 1000 value initializer:', answer);

/// find the maximum value in an array
let findMax = vals.reduce((acc, val) => (val > acc ? val : acc))
console.log('This is the max value of the array:', findMax);

// lets find the value of all odd numbers in an array: 

let valOfOdds = array => (array.filter(x => x % 2).reduce((acc, val) => acc + val))

console.log('This is the value of the odd numbers in the vals array:', valOfOdds(vals));