// let exampleSentence = "hi mom its a me"
// let stringLength = exampleSentence.length

// console.log(exampleSentence[stringLength -1])

// let combinedString = "hello world"+ " "+ "mynameisjames"
// console.log (combinedString)

// console.log (exampleSentence[4])


// containsTheLettera = exampleSentence.indexOf('a')

// console.log (containsTheLettera)

// ......combinedString........................combinedString... 


// function filter (a,) {
//     let array = a.length
//     for (let i =0; i < array +1 ;i++)
//     if ( [i] % 2 == 0  ){
//         console.log([i])
//     }
//     else {
//         continue
//     }
// // }
// // filter([1,2,3,4,5,6,7,8,9,10])

// // let arrayToFilter = [ 1,2,3,4,5,6,7,8,9,10]
// // function filter(arr){
// // let newArray = []
// // for (let i = 0; i < arr.length; i++) {
// //     if ( arr[i] % 2 === 0){
// //         continue
// //     }   
// //     newArray.push(arr[i])
// // }
// // return newArray
// // }

// // let filteredArray = filter(arrayToFilter)
// // console.log(filteredArray)

// // const namesAndAges = [ 
// //     {name:"john", age:36}, 
// //     {name:"mark",age:30},
// //     {name: "mellonhead",age:24}]

// //     function sortByAge(arr) {
// //         let currentPerson = arr[i]
// //         let nextPerson = 0
// //         for (i=0; i< arr.length;i++ ){
// //             if (currentPerson.age < nextPerson.age) 
// //             continue
// //         }
// //         console.log currentPerson.name
// //     }
// // sorted = sortByAge( namesAndAges)

// // console.log(sorted)



// const namesAndAges = [ 
//     {name:"john", age:36}, 
//     {name:"mark",age:40},
//     {name: "mellonhead",age:24}
    
// ]



// function findOldestPerson (arr) {
//     let OldestPerson = arr[0]
//  for (let i = 1; i < arr.length; i++) {
//   let newPerson = arr[i]
//   if (newPerson.age > OldestPerson.age){
//     OldestPerson = newPerson
//   }
    
//  }
//  return OldestPerson
// }

// let foundHim = findOldestPerson(namesAndAges)
// console.log (foundHim)






// let arrayOfStrings = ['4',"6","5","10", "23",]
// let newArray = []

// for (let i = 0; i < arrayOfStrings.length; i++) {
//     let convertedStringValue = parseInt(arrayOfStrings[i])
//   newArray.push(convertedStringValue)
// }

// console.log(newArray)


// let ArrayOfObjects = [
//     {price: 200.4},
//     {price: 35.6},
//     {price:66.5}
// ]

// ArrayOfObjects.sort(function(a,b) {
//    return a.price - b.price 
// })

// console.log (ArrayOfObjects)



// let newList = [1,2,3,4,5,6,7]

// function popUnshift (arr) {
// let arrayLength = arr.length
// let newArray = arr.slice(1,arrayLength -1)
 
// return newArray
// }

// let answer = popUnshift(newList)

// console.log(answer)



// let shoppingCart = {
// cheese: {
//     quantity: 4,
//     price: 8}, 
// milk: {
//     quantity: 10,
//     price: 4,git 
// }
// }


// function sumProducts(obj){
// let objectKeys = Object.keys(obj)
// let sum = 0

// for (let i = 0; i < objectKeys.length; i++) {
//     let currentKey = objectKeys[i]
//     const keyData =shoppingCart[currentKey]
//     let productTotal = keyData.price * keyData.quantity
//     sum += productTotal
// }
// return sum
// }
// console.log (sumProducts(shoppingCart))


// let friend = {
//     'rupert':{
//     hobbies: ['gym', 'reading','math']}
//     }

// function deepClone (obj){
// let newObject = {}
// let objectKeys = Object.keys(obj)
// for (let i = 0; i < objectKeys.length; i++) {
//    let currentKey = objectKeys[i]
//    newObject[currentKey] = obj[currentKey]

    
// }
// return newObject
// }
// let  newFriends = deepClone(friend)
//     console.log(newFriends)



// let student = {
//     chemistry: {
//         grade: 75
//     },
//     Math:{
//         grade: 80
//     },
//     english:{
//         grade: 95
//     }
// }


// function getGrade (obj) {
//  objectKeys = Object.keys(obj)
//  let sum = 0
//  let numberOfSubjects =0

//  for (let i = 0; i < objectKeys.length; i++) {
//    let currentKey = objectKeys[i]
//     let grade = student[currentKey].grade
//     sum = sum + grade
//     numberOfSubjects++
// }
// let averageGrade =  sum / numberOfSubjects
//     return averageGrade
// }

//  console.log(getGrade(student))





// function Inception (a) {
// let numberOfinvovations =0


// return function() {
//     numberOfinvovations++ 
//     console.log (numberOfinvovations)
// }

// }

// const incrementor = Inception() 

// incrementor()
// incrementor()
// incrementor()
// incrementor()




// let gradesArray = [
//     { subject:'math', grade:10 },
//     { subject: 'spanish', grade: 2},
//     { subject: 'literature', grade: 6}
// ]

// function sortByGrade (arr) {
// let sortedArray = gradesArray.sort(function (a,b){
//     return b.grade -a.grade
// })
// return sortedArray

// }

// console.log(sortByGrade(gradesArray))



// let ArrayOfStrings = ["apple","banana", "ora",
//  "longggggword", "evenlongerrrrrr", "shor"]

//  function fiveOrMore (arr) {
//     let newArray = []
//     for (let i = 0; i < arr.length; i++) {
//         let currenentString = arr[i]
//         if (currenentString.length > 5)
//     newArray.push(currenentString)
//     }


// return newArray
//  }

//  console.log(fiveOrMore(ArrayOfStrings))

let sentence = "hello world is world my hello as good as a good banana"
function countWords (str) {
    let counterDict = {}
    let stringToArray = str.replaceAll(","," ").split(' ')

    for (let i = 0; i < stringToArray.length; i++) {
       let currentWord = stringToArray[i]
        if ( currentWord in counterDict){
            counterDict[currentWord] = counterDict[currentWord] +1}
            else {
                counterDict[currentWord] = 1
            }
        }
        return counterDict
    }
 
    console.log(countWords(sentence))

