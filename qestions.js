
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

// // Q3
// function aa (){
//     let arr=["apple", "banana", "apple", "orange", "banana", "apple"];
//     let count=0;
//     for(let values of arr){
              





//     return count
// }
// console.log(aa())

// // Q4
// function wod(){
//     let str="hElloWOrld"
//     let st1=str.toUpperCase();
//     console.log(st1);
    
// }
// wod()


let a = 10;
function outer() {
    let b = 20;
    function inner() {
        let c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    inner();
}
outer();