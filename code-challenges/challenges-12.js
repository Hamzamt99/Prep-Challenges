'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
// 
// Given an array of values use filter to extract odd values.
//  
// Input:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] 
// Output: 
// [89, 41, 31, 111, 31]
// 

const oddFiltration = (arr) => {
    let filtered =  arr.filter(item => {
        if(item %2 == 1 ){
            return item
        }
    })
    return filtered;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// Input:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
// Output:
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name

const cvsFiltration = (arr) => {
    let filterdArr = arr.filter(elemtent => elemtent.yearsOfExperience > 4 && elemtent.tech == "JS")



    let nameArray = filterdArr.map(elemtent => {
        if (elemtent.firstName != null && elemtent.LastName != null) {
            return {
                fullName: `${elemtent.firstName} ${elemtent.LastName}`,
                tech: `${elemtent.tech}`
            }

        }
    })
    return nameArray

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// Given an array of words filter out the words that contain one of the vowels (a, e, i, o, u)

// Input: ['car', 'boy', 'spy', 'building', 'why', 'dry' ]
// Output: ['spy', 'why', 'dry']
// 

const vowelsFiltration = (arr) => {
    let vol = arr.filter( str => /^[^aeiou]*$/gm.test(str) )
    return vol
    }

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// Input:
// first_Employee = [C, C#, Java, Angular, PHP]
// sec_Employee = [C#, .Net, JavaScript, React, Angular]

// Output:
// result = [C, Java, PHP, .Net, JavaScript, React]

// Hint:
// - the 'include' method can help you, read about it.

const skillComparison = (arr1, arr2) => {
    let comp1 = arr1.filter(skill=> arr2.includes(skill))

let comp2 = arr1.filter(skill=> comp1.includes(skill)!=true)

let comp3 = arr2.filter(skill=> comp1.includes(skill)!=true)

let finalArr = []
finalArr =  comp3
comp2.forEach(ele => finalArr.push(ele))

return console.log(finalArr); 
}
// -------------------------------------------------------------------------------------------------------


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

