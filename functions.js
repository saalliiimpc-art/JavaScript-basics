// function sum(a,b){
//     return a+b
// }
// console.log(sum(10,20));

// // ARROW FUNCTION:-
// Q1:-
// const sum=(a,b)=>{
//     return a+b
// };
// console.log(sum(10,20));
// // Q2:-
// const hh=(name)=>{
//     console.log("hey "+name+" welocome")
// }
// hh("SALIM")

// //callback():-
// // Q1:-
// function one(callback){
//     console.log("hello");
//     callback()
// } 
// function two(){
//     console.log("show");
// }
// one(two);
// // Q2:-
// function workDone(callback) {
//   console.log("Work finished");
//   callback();
// }
// function showMessage() {
//   console.log("Next work starts");
// }
// workDone(showMessage)

// purefunction():-
// // Q1:-
// function name(a,b){
//     return a+b;
// };
// console.log(name(30,20));
// // Q2:-
// function totalsallary(salary,bones){
//     return salary+bones;
// };
// console.log(totalsallary(1000,500));

// IIFE:-
// // Q1:-
// (function(num){
//     console.log("my sallary is",num);
// })(200);

// // restparameter:-
// // Q1:-
// function fullname(...number){
//     console.log(number);
// };
// console.log(fullname(1,2,3,4,5,6,7,89,));
// // Q2:-
// function student(name,...skills){
//     console.log(name);
//     console.log(skills);
// }
// console.log(student("SALIM","html","css"));









// practice:-
// //എല്ലാ numbers-ന്റെയും total കണ്ടെത്തുക
// function saa (...num){
//     let total=0;
//     for (let numbers of num){
//         total+=numbers
//     }
//     return total;
// }
// console.log(saa(1,2,3,4,5.));
// console.log(saa(9,8,7,6,5));

// //ഏറ്റവും വലിയ number കണ്ടെത്തുക
// function larg(...number){
//     let largest=number[0]
//     for(let sa of number){
//         if (sa>largest){
//             largest=sa
//         }
//     }
//     return largest
// }
// console.log(larg(1,2,3,4))

// // എല്ലാവർക്കും greeting പറയുക
// function greetall(...names){
//     for(let greet of names){
//         console.log(greet,"welocome")
//     }
// }
// greetall("salim","afshan")

// // findAverage mark
// function findavg(...mark){
//     let total=0
//     for(let nu of mark){
//         total=total+nu;
//     }
//     return total/mark.length;
// }
// console.log(findavg(1,2,3));


