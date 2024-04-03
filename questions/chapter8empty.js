

let stringOne = "helloworldmynapeisryanandthisisastring"
let stringTwo =  "abcdefghijklmnop"

function allUnique (str) {

let  count_dict = {}

for (let i =0; i< str.length;i++) {
let current_char = str[i]
if (current_char in count_dict)  {
    return false
}
count_dict[current_char] = 1
}
return  true
}
console.log(allUnique(stringOne))