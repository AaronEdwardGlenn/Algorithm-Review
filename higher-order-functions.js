//// Higher Order Function Example

let divider = (factor) => (x => x / factor)

let halfer = divider(2)

console.log(halfer(20))