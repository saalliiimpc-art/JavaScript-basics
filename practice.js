//-----------------For-In Loop-----------

// //Q1
// let object={
//     name:"salim",
//     age:56,
//     course:"kollaaam"
// }
// for(let gg in object){
//     //console.log(gg)
//     //console.log(object[gg])
//     //console.log(gg+":"+object[gg])
// }

// //Q2
// let person = {
//     name: "Salim",
//     age: 20,
//     city: "Kozhikode"
// };
// let count=0
// for(let hh in person){
//     count++
// }
// console.log(count);

// //Q3
// let student={
//     math:90,
//     eng:98,
//     arabi:78,
//     mala:67,
//     bio:56,
//     phy:100
// }
// for(let gg in student){
//     console.log(gg+" : "+student[gg]);
// }

// // Q4- Find the largest mark from this object?
// let marks = {
//     english: 75,
//     science: 90,
//     computer: 95,
//     math: 80,
// };
// let larg=0
// for(let gg in marks){
//     if(marks[gg]>larg){
//         larg=marks[gg];
//     }
// }
// console.log(larg);

// // Q5-Find the total marks using for...in?
// let marks = {
//     english: 75,
//     science: 90,
//     computer: 95,
//     math: 80,
// };
// total=0;
// for(let gg in marks){
//     total+=marks[gg]
// }
// console.log(total);

// // Q6-Find the average marks using for...in?
// let marks = {
//     math: 80,
//     english: 75,
//     science: 90,
//     computer: 95
// };
// let total=0
// let length=Object.keys(marks).length;
// for(let gg in marks){
//     total+=marks[gg]
// }
// console.log(total/length)

// // Q7-Count how many subjects have marks above 80.
// let marks = {
//     math: 80,
//     english: 75,
//     science: 90,
//     computer: 95
// };
// let count=0
// for(let gg in marks){
//     if (marks[gg]>80){
//         //console.log(gg)
//         count++
//     }
// }
// console.log(count);


//-----------------------For-Of Loop------------------

// // Q1
// let arr=[1,2,3,4,5,6];
// for(let gg of arr){
//     console.log(gg);
// }

// //Q2
// let names = ["Ali", "Rahul", "John", "Anu"];
// for(let hh of names){
//     console.log(hh); 
// }

// // Q3
// let arr=[1,2,3,4,5,6];
// let sum=0
// for(let gg of arr){
//     sum+=gg
// }
//console.log(sum);

// // Q4
// let arr=[12,43,56,87,89];
// for(let hh of arr){
//     if (hh%2===0){
//         console.log(hh+":"+"even")
//     }else if(hh%2!==0){
//         console.log(hh+":"+"odd")
//     }
// }

// // Q5
// let str="JavaScript";
// let count=0
// for(let ss of str){
//     //console.log(ss);
//     if("aeiou".includes(ss)){
//         count++
//     }
// }
// console.log(count);

// // Q6-Find the largest number in an array using for...of.?
// let arr=[10,20,30,40,70,60];
// let larg=arr[0]
// for(let hh of arr){
//     //console.log(hh);
//     if(hh>larg){
//         larg=hh
//     }
// }
// console.log(larg);

// // Q7-Find the smallest number in an array using for...of.?
// let arr=[10,20,30,40,70,60,9];
// let small=arr[0];
// for(let gg of arr){
//     if(gg<small){
//         small=gg;
//     }
// }
// console.log(small);

// // Q8- Count how many even and odd numbers are in an array.?
// let arr=[1,1,2,43,6,5,87,90];
// let even=0;
// let odd=0;
// for(let i of arr){
//     if(i % 2===0){
//         even++
//     }
//     else if(i % 2 !==0){
//         odd++
//     }
// }
// console.log(even);
// console.log(odd)

// // Q9-Find the sum of positive numbers in an array.
// //   -Find the sum of negative numbers in an array.?
// let arr=[-1,1,2,4,-6,5,-7,9];
// let positivesum=0;
// let negativesum=0;
// for(let a of arr){
//     if(a>0){
//         positivesum+=a
//     }
//     else if(a<0){
//         negativesum+=a
//     }
// }
// console.log(positivesum);
// console.log(negativesum);

// //---------------scope-----------


// let a=10;//global scope

// function name(){
//     let b=20;//function scope
//     // console.log(a);
//     // console.log(b);
//     // console.log(c);//wrong
//     if (true){
//         let c=30;//block scope

//         // console.log(a);
//         // console.log(b);
//         // console.log(c);

//     }
// }
// name()
// // console.log(a);
// // console.log(b);//wrong
// // console.log(c);//wrong

//----------------- Js String methods-------

// // Q1-Reverse Each Word
// let str="hello world";
// let str1=str.slice(0,5)
// let str2=str.slice(5,11)
// // console.log(str1);
// // console.log(str2);
// let res1=str1.split("").reverse().join("");
// //console.log(res1);
// let res2=str2.split("").reverse().join("")
// //console.log(res2);
// let result=res1.concat(res2);
// console.log(result)

// ----------------------------------PDF--------------------------------
// // q1:-Create a function that accepts an object and returns the sum of the lengths of all string values
// function los(obj){
//     let neww=0
//     for(let values in obj){
//         if (typeof obj[values]==="string"){
//             neww+=obj[values].length
//         }
//     }
//     return neww;
// }
// console.log(los({ name: "John", city: "Paris" }));
// console.log(los({ a: "hi", b: "world" }));
// console.log(los({ Success : "false", status: "404"}));


// //Q2:-
// function nu(number){
//     let num=0;
//     for(let n in number){
//         if(typeof number[n]==="number"){
//             num+=number[n].length;
//         }
//     }
//     return num
// }
// console.log(nu({
//     age:77,
//     city: "Paris" 
// }));


// //Q3:-
// function vowel(str){
//     let count=0;
//     for(let ss of str){
//         //console.log(ss)
//         if("aeiou".includes(ss)){
//             count++
//         }
//     }
//     return count
// }
// console.log(vowel("Hello World"));
// console.log(vowel("Programming is fun"));
// console.log(vowel("Rhythm"));

// // Q4:-
// function sm(arr){
//     let small=arr[0];
//     for(let ss of arr){
//         //console.log(ss);
//         if(ss<small){
//             small=ss
//         }
//     }
//     return small
// }
// console.log(sm([10, 4, 30, 20, 50]))
// console.log(sm([25, 143, 89, 13, 105]))
// console.log(sm([54, 23, 11, 17, 10]))

// // Q5:-=
// function la(arr){
//     let large=0;
//     for (let ll of arr){
//         if (ll>large){
//             large=ll
//         }
//     }
//     return large
// }
// console.log(la([10, 4, 30, 20, 50]))
// console.log(la([25, 143, 89, 13, 105]))
// console.log(la([54, 23, 11, 17, 10]))


// //Q6:-
// function remo(str){
//     let newstr=""
//     for (let ss of str){
//         if (!"aioueAIOUE ".includes(ss)){
//             newstr+=ss
//         }
//     }
//     return newstr
// }
// console.log(remo("I have never seen a thin person drinking Diet Coke"));
// console.log(remo("We're gonna build a wall!"))
// console.log(remo("Happy Thanksgiving to all--even the haters and losers!"));


// // Q7:-
// function sq (num){
//     let str=""
//     for (let n of String(num)){
//         str+=n*n
//     }
//     return str;
// }
// console.log(sq(9119));
// console.log(sq(2483));
// console.log(sq(2483));

// // Q8:-
// function rev(str){
//     let sp =str.split(" ");

//     let res="";
//     for(let word of sp){
//         res+=word.split("").reverse().join("");
//         res+=" "
//     }
//     return res
// }
// console.log(rev("I love JS"));
// console.log(rev("Hello World")  );
// console.log(rev("JavaScript is fun"));


// // Q9
// function leg(obj){
//     let count=0;
//     for (let st in obj){
//          if(typeof obj[st]==="string"){
//             count+=obj[st].length;
//          }
//     }
//     return count
// }
// console.log(leg({name: "John", city: "Paris"}));
// console.log(leg({ a: "hi", b: "world" })) 
// console.log(leg({ Success : "false", status: "404" }))

// //  Q10:-
// function sp(str){
//    let newstr= str.split(" ").join("-")
//     return newstr;
// }
// console.log(sp("I love JS"));
// console.log(sp("Hello World"));
// console.log(sp("JavaScript is fun"));

// // Q11:-
// function sl(arr){
//    arr.sort(function(a,b){
//     return a-b
//    })
// console.log("secound smallest",arr[1]);
// }
// sl([10, 40, 30, 20, 50]);
// sl([25, 143, 89, 13, 105])
// sl([54, 23, 11, 17, 10]) 

// // Q12:-
// function na(obj){
//     let arr=[];
//     for(let st in obj){
//         if(obj[st]%2===0){
//             arr.push(st)
//         }
//     }
//     return arr;
// }
// console.log(na({ a: 2, b: 5, c: 8 }));
// console.log(na({ x: 11, y: 13 }));
// console.log(na({ j: 12, k: 13 , z:100 }));

// // Q13:-
// function sp(str){
//     let newstr=str.split("").join("-")
//     return newstr
// }
// console.log(sp("Edabit"));
// console.log(sp("Carpe Diem"))
// console.log(sp("Fight for your right to party!"));
 
// // Q14:-
// function pll(n){
//     let nnum=n+"";


//     let rev=nnum.split("").reverse().join("")
//     if (nnum===rev){
//         console.log("is pallindrone")
//     }
//     else {
//         console.log("is not pallindrone")
//     }
// }
// pll(121);
// pll(123)
// pll(1331)
// pll("malayalam")

// // Q15
// function sum(num){
//     let res=0;
//     let str=num.toString();
//     for (let i=0; i<str.length;i++){
//         res+=Number(str[i])
//     }
//     return res
// }
//   console.log(sum(121));
//   console.log(sum(987));
//   console.log(sum(505))

// // Q16:-
// function len(obj){
//     let res=0
//     for(let ss in obj){
//         if(typeof obj[ss]==="string"){
//             res+=obj[ss].length
//         } 
//     }
//     return res
// }
// console.log(len({ name: "John", city: "Paris" }) )
// console.log(len({ a: "hi", b: "world" }))
// console.log(len({ Success : "false", status: "404" }))

// // Q17:-
// function sumall(arr){
//     let res=0;
//     let arry=[]
//     for (let n of arr){
//          res+=n
//          arry.push(res)
//     }
//     return arry
// }
// console.log(sumall([1, 2, 3, 4]));
// console.log(sumall([5, 10, 15]));
// console.log(sumall([2, -1, 3]));

//Q18:-
function toarry(content){
    let nc =content+"";
    let res=nc.split("")

     return res
}
console.log(toarry(235));
console.log(toarry(0));

// Q19
function tonumber(content){
    let res=0;
    for(let n of content){
        res=res+n+""
    }
    return res
}
console.log(tonumber([2, 3, 5]));
console.log(tonumber([0]));


// // Q20:-
// function least(obj){
//     let arr=[];
//     for(let nu in obj){
//         arr.push(obj[nu])
//     }
//     let res=arr.sort(function(a,b){
//         return a-b
//     })
//     return res[0]   
// }
// console.log(least({shoes: 120, shirts: 90, pants: 150, hats: 75} ))
// console.log(least( {phones: 300, laptops: 450, tablets: 250, watches: 100} ))
// console.log(least({pens: 500, pencils: 499, erasers: 300}))


// // Q21:-
// function oddsq(arr){
//     let osq=0;
//     let esq=0;
//     for(let a of arr){
//         if(a%2===1){
//             osq+=a*a
//         }
//         else if(a%2===0){
//             esq+=a*a;
//         }
//     }
//     return esq - osq 
// }
// console.log(oddsq([1,2, 3, 4]));
// console.log(oddsq([5, 6, 7]));
// console.log(oddsq([2, 4, 6]));


// // Q22:-
// function result(arr){
//     let maxwords=0;
//     let a ;
//     for(let w of arr){
//         a=w.split(" ");
//         console.log(a)
//         if (a.length>maxwords){
//             maxwords=a.length
//         }
//     }
//     return maxwords
// }

// console.log(result([ "Hello World", "Code Your Future With Bridgeon","Welcome To Bridgeon"]))
// console.log(result(["please wait", "continue to fight", "continue to win"]))
// console.log(result(["hello world"]))

// // Q23:-
// function oddeven(arr){
//     let newarr=[];
//     for(let n of arr){
//         if( n%2===1){
//             newarr.push("odd");
//         }
//         else {
//             newarr.push(n)
//         }
//     }
//     return newarr
// }
// console.log(oddeven([1, 2, 3, 4, 5] ));
// console.log(oddeven([10, 15, 20, 25]));
// console.log(oddeven([2, 4, 6, 8]));


// // Q24:-
// function rrr(str){
//     newstr=str.split(" ").join("-")
//     return newstr
// }
// console.log(rrr("I love JS"));
// console.log(rrr("Hello World"));
// console.log(rrr("JavaScript is fun"));


// // Q25:-
// function repeat(arr){
//     let ob={}
//     for (let a of arr){
//         if (ob[a]!==undefined){
//              ob[a]++
//         }
//         else{
//             ob[a]=1
//         }  
//     }
//     return ob
// }
// console.log(repeat(["apple", "banana", "apple", "orange", "banana", "apple"]));

   