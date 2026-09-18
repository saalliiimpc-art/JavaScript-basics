//              Alphabetical:-


// //  sort():-

// let fruts=["BANANA","APPLE","ORANAGE","GRAPES"];
// console.log(fruts.sort());

// // reverse():-

// let fruts=["BANANA","APPLE","ORANAGE","GRAPES"];
// fruts.reverse();
// console.log(fruts);
// //-acsending order reverse:-
// fruts.sort().reverse();
// console.log(fruts);

// objects;-
// // Q1
// let students = [
//     { name: "Rahul", mark: 80 },
//     { name: "Anu", mark: 95 },
//     { name: "Akhil", mark: 70 }
// ];
// students.sort(function(a,b){
//     return a.mark - b.mark;
// });
// console.log(students);//{name: 'Akhil', mark: 70}
//                       //{name: 'Rahul', mark: 80}
//                       //{name: 'Anu', mark: 95}

// // Q2-Sort students by name?
// let student=[
//     {name:"Rahul", mark:30},
//     {name:"Anu", mark:10},
//     {name:"Akhil", mark:90}
// ];
// student.sort(function(a,b){
//     return a.name .localeCompare (b.name);
// });
// console.log(student);

// // Q3-Sort products by price?
// let products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 1000 },
//     { name: "Keyboard", price: 2500 }
// ];
// products.sort(function(a,b){
//     return a.price-b.price;
// })
// console.log(products);

// //  -Sort products by price descending

// let products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 1000 },
//     { name: "Keyboard", price: 2500 }
// ];
// products.sort(function(a,b){
//     return b.price-a.price;
// });
// console.log(products);





//                  numeric:-




//    sort():-

// //    Ascending
// let num =[20,10,5,60];
// num.sort(function(a,b){
//     return a -b 
// });
// console.log(num);

// //    Descending
// let num2 =[20,10,5,60]; 
// num2.sort(function(a,b){
//     return b-a
// });
// console.log(num2)




// rondom():-

// Q1:-
// let numbers = [1, 2, 3, 4, 5];
// numbers.sort(function(){
//     return Math.random()-0.5
// });
// console.log(numbers);
// // Q2:-
// let num=[10,20,30,40,50];
// num.sort(function(){
//     return Math.random()-0.5
// })
// console.log(num);

// //math.min():-
// let number=[10, 5, 20, 3];
// console.log(Math.min(...number));

// //Math.max():-
// let number=[10, 5, 20, 3];
// console.log(Math.max(...number));



