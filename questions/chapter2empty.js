let name = 'Ryan'
    name = "Ryan McMahon"


let a = 1
let b = 7

console.log (a == b)
console.log (a===b)  // strict 


let age = 100
if (age > 18){
    console.log ("adult")}
else {
    console.log ("child")}

// my try (works)
// for (let i = 0; i <= 10; i++ )
//  if (i % 2 != 0) {
//     continue}
// else{
//     console.log(i)
// }
 
// answer (in vid)
let numbers_to_ten = [0,1,2,3,4,5,6,7,8,9,10]
let array_length = numbers_to_ten.length
for (let i = 0; i < array_length; i++ ){
    let current_value = numbers_to_ten[i]
    let is_even = current_value % 2 === 0
    if (is_even) {
        console.log(current_value)
    }
}

let array = [3,10,4,5,6,6,7,9,7,50,40]
let sum = 0
let j = 0

while(sum <100){
    let new_current_value = array[j]
    sum = sum + new_current_value
    j++
}
console.log(sum)

                    // width and height are just
                    // labels they mean nothing!!! mind blown

 function calculateArea (height,width) {
    let area = height * width
    return area
 }

 area_one = calculateArea(9,10)
 console.log('the calculated area is:',area_one)