//// Higher Order Function Examples

/// this higher order function takes a factor that a variable can be divided by: 

let divider = (factor) => (x => x / factor)

let halfer = divider(2)

let thirder = divider(3)

console.log(halfer(20))
console.log(thirder(21))

// this higher order function adds a signature onto a string: 

let addSig = (string) => (signature => string + signature)

let story = addSig('The cows come home. ')

console.log(story('By: Aaron Glenn'));


// same as above, add name of developer to a project: 
let newProject = (project) => (dev => project + dev)

let project1 = newProject('Google Bananas. ')

let addDevToProject1 = project1('Dev: Aaron Glenn')

console.log(addDevToProject1);
