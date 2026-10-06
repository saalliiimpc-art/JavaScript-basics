
// // // Q1:-
// // //[1, 2, 3, 4, 5] ➞ ["odd", 2, "odd", 4, "odd"] :-
// function numbers(...num){
//     let arr=[];
//     for(let ss of num){
//         if(ss % 2 ==!0){
//             arr.push("odd")
//         }
//         else{
//             arr.push(ss)
//         }
//     }
//     return arr
// }
// console.log(numbers(1,2,3,4,5));
// console.log(numbers(10, 15, 20, 25));
// console.log(numbers(2, 4, 6, 8))

// // Q2:-
// function saa(str){
//     let str1=str.split(" ").join("-");
//     console.log(str1) 
// }
// saa("I love JS");
// saa("Hello World");
// saa("JavaScript is fun");


// // Q3:-
// function wod(){
//     let str="hElloWOrld"
//     let st1=str.toUpperCase();
//     console.log(st1);
    
// }
// wod()

// // Q4:-
// let a = 10;
// function outer() {
//     let b = 20;
//     function inner() {
//         let c = 30;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     inner();
// }
// outer();

// // Q5:-
// let num=5
// let fac=1
// for(i=1;i<=num;i++){
//     fac=fac*i
// }
// console.log(fac);

// let i =1;
// while (i<=10){
//     console.log(i*4);
//     i++;
// }

// let i =1;
// do{
//     console.log(i*6);
//     i++
// }
// while(i<=10);

// for(i=0;i<10;i++){
    
    
// }
// for (i=10;i>=1;i--){
//     console.log(i);
// }

// let number=[10,20,30,40,50,60,70,];

// let gg=number.find(function(a){
//     return  a>30
// })
// console.log(gg);


// let student = {
//     name: "Salim",
//     age: 20,
//     show: function() {
//         console.log("hello",this.name);
//     }
// };

// student.show();

// let att=[1,2,3,4,5]
// let va=att.reduce(function (a,b){
//     return a-b
// },)
// console.log(va);









// let nn =[1,2,3,4,5,6,7,8,9]
// let gg=nn.reduce(function(a,b){
//     return a+b
// },1)
// console.log(gg);


// let student ={
//     name:"fizzza"
// }
// function greet(a){
//     console.log("hello",this.name,a)
// }
// greet.call(student,"welcome" )

// greet.apply(student,["welcome"] )

// let gg=greet.bind(student,"welcome")
// gg()

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Tablet", price: 20000 },
    { name: "Monitor", price: 15000 }
];
// let ans =products.reduce(function(a,b){
//     if(a.price>b.price){
//         return a
//     }
//     else{
//         return b
//     }
// })
// console.log(ans);

let ans=products.filter(function(a){
    
})