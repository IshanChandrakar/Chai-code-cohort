// let fruits = ['apple', 'mango', 'banana', 'grapes']

// for(let i=0; i<fruits.length; i++){
//     console.log(`Fruit at index ${i} is ${fruits[i]}`)
// }

// let myArray = [1,2,3,4,5,6,7,8,9]

// let sum = 0
// for(let i=0; i<myArray.length; i++)
//     sum = sum + myArray[i]
// console.log(sum);

let movieratings = [
    {title: "Movie A", ratings :[4,5,3]},
    {title: "Movie B", ratings :[6,7,4]},
    {title: "Movie C", ratings :[5,2,7]}
]

let averageRating = movieratings.reduce((acc, curr)=>{
    let currMovieRating = 0
    curr.ratings.forEach((rating)=>currMovieRating+=rating)
    
    currMovieRating = (currMovieRating/3).toFixed(2)

    acc[curr.title] = currMovieRating
    return acc
},{})
console.log(averageRating);
