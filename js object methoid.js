// //       THIS:-
// let ob={
//     name:"raima",
//     age:89,
//     place:"chemmad",
//     greeting:function(){
//         console.log("hello",this.name);
//         console.log("age is",this.age);
//     }
// };
// ob.greeting();

// //      call:-

// let person1={
//     name:"raima"
// }
// let person2={
//     name:"salim"
// }
// function greet(age,place){
//     console.log("hello",this.name)
//     console.log(age)
//     console.log(place)
// }
// greet.call(person1,45,"poi")//hello raima
// greet.call(person2,67,"kkjhgf")//hello salim

// //         apply:-

// let person1={
//     name:"raima"
// }
// let person2={
//     name:"salim"
// }
// function greet(age,place){
//     console.log("hello",this.name)
//     console.log(age)
//     console.log(place)
// }
// greet.apply(person1,[10,"fgfgfgg"])
// greet.apply(person2,[26,"chenganakattil"]);

//         bind:-

// let person1={
//     name:"raima"
// }
// let person2={
//     name:"salim"
// }
// function greet(){
//     console.log("hello",this.name);
    
// }
// let res=greet().bind(person1);
// res()
//let rees=greet.bind(person2);
//rees()


// // Recursion:-
// function printe(n){
//     if (n>100){
//         return ;
//     }
//     console.log(n);
//     printe(n+1);
// }
// printe(1)

                    