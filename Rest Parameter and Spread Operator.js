// //             Rest Parameter

// function arr(...values){
//     console.log(values)
// }
// arr(12,34,56,78,90)

// function arr(...value){
//     for(let kk of value){
//         console.log(kk*2)
//     }
// }
// arr(11,22,33,44,55)

// //           spreadoperator:-

// // Array copy ചെയ്യാൻ:-
// let fruts=["apple","mango"]
// let copyfruts=[...fruts];
// console.log(copyfruts);

// //Combine arrays:-
// let aa=["a","b","c"];
// let bb=["d","e","f"];
// let all=[...aa,...bb]
// console.log(all);

// // Add an item without changing the original
// let fruit=["apple","mango"]
// let addfruit=[...fruit,"orange"]
//  console.log(addfruit);

// // Copy or update an object:-
// let student={
//     name:"salim",
//     course:"dewlepment"
// }
// let addedage={
//     ...student,
//     age:90//copy akkaan ith addeynath oyivakkiyaaal mathih
// }
// console.log(addedage);


// //Rest and Spread in the same example:-
// function add(...num){
//     return num[0]+num[1]+num[2]
// }
// let values=[12,34,56];
// console.log(add(...values));
