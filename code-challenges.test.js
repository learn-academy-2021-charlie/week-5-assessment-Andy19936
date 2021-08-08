// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { conditionalExpression } = require("@babel/types")
const { ConsoleWriter } = require("istanbul-lib-report")
const { CHAR_AT } = require("picomatch/lib/constants")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// psudo
// name my function going with secretCoderRing
// use map to change my values
// turn my string into an array.split 
// map over my values 
// .toString to match expected output data type
// keep my format where it supposed to be 🥲....
// scratch all that found a cooler method 
// .replace 
// "g" global modifier makes replace work on entire string instead of just the first occurrence
// "i" indiscriminate accounts fir capital and lowercase occurences of my selected value
// regex is awesome and makes for less usage of brain juice when solving simple tasks

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("The secretCoderRing function.",()=>{
    test("takes an array and returns a new array with a,i,e,o replaced by 4,1,3,0",() => {
        expect(secretCoderRing(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(secretCoderRing(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(secretCoderRing(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})


// b) Create the function that makes the test pass.
 const secretCoderRing = (str) =>{
    return str
    .replace(/a/ig,4)
    .replace(/i/ig,1)
    .replace(/e/ig,3)
    .replace(/o/ig,0) 
}



console.log(secretCoderRing(secretCodeWord1))
// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.


// Pseudo
// name my function going with areYouInHere
// taking the filter approach on this one 
// make a var to store my filtered results 
// filter for my letter at indexs of the array
// return my filtered array var
// spend an hour wondering why my code doesnt work was totally using the wring mnethod was initially using .charAt switched to .includes just wow..... 
// thanks for the save Sarah!
// we have a working function and a new found loathing for .charAt

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Apricot", "Peach"]

describe("The areYouInHere function.",()=>{
    test("takes an array and returns a new array where the contents have the letter a",() => {
        expect(areYouInHere(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
        expect(areYouInHere(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
    })
})


// b) Create the function that makes the test pass.

const areYouInHere = (arr) =>{
    filtArr = arr.filter((value, index, array) =>{
    return value.includes("A") || value.includes("a")
     }) 
return filtArr 
}
console.log(areYouInHere(arrayOfWords1))
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

//pseudo
//make my function going with fullHouseCheck
// going to use iteration for sure im thinking a forloop
// maybe sort the arr and compare the indexes of values next to each other 
// set up conditionals with my comparisons

// a) Create a test with an expect statement using the variable provided.
var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false



// b) Create the function that makes the test pass

// const fullHouseCheck = (arr) => {
// let 
// }