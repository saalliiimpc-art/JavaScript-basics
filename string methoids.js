// let str="hello world salim";
// let str2="WORLd";

// //1
// //split():-
// //syntax: string.split(separator);

// console.log(str.split(" "));
// console.log(str2.split(","))
// console.log(str.split(""))


// //2
// // //slice():-  
// // syntax:string.slice(start, end);

// console.log(str.slice(0,5));
// console.log(str.slice(1,6));
// console.log(str.slice(2));
// //thala thirich 
// //     ivade -1 enn parajaaaal last index agane backinn pookkkum
// //     str orderil thannne print aaavukayolllu
// console.log(str.slice(-1));
// console.log(str.slice(-2));
// console.log(str.slice(-3));
// console.log(str.slice(-4));
// console.log(str.slice(-11,-7));


// // 3
// //substring():-
// //syntax: string.substring(start, end);

// console.log(str.substring(6,11));
// console.log(str.substring(8,23));
// console.log(str.substring(12));


// //4
// //substr():-
// // syntax:string.substr(start, length);

// console.log(str.substr(0,9));
// console.log(str.substr(3,7));
// //ivade 3 ennath strating value(index number)
// // 7 ennadth ath kayinj ethra number venAM ENNADH



// //5
// // toUpperCase:-
// //syntax;string.toUpperCase()

// console.log(str.toUpperCase());
// console.log(str2.toUpperCase());


// //6
// //toLowerCase()
// //syntax: String.toLowerCase()

// console.log(str2.toLowerCase())


// //7
// //charAt:-
// //syn tax:str.charAt(index number));
// console.log(str.charAt(0));
// console.log(str.charAt(4));


// //8
// //replace():-
// //syn tax:-str.replace("old value", "new value")

// console.log(str.replace("salim","javascript"));
// console.log(str.replace("hello","javascript"));


// //9
// //trim()
// //syntax:-str.trim()
// console.log(str.trim())


// //10
// //padStart():-
// let gender="male";
// console.log(gender.padStart(8,"k"));
// console.log(str.padStart(23,"k"));





           //qestions:-





// //remove space using split()&join()
// let str="hello world javascript";
// console.log(str.split(" ").join(""))

// //Convert the first letter of "javascript" to uppercase
// let  str="java script";
// let a=str.charAt(0).toUpperCase();
// console.log(a+str.substring(1));

// //Extract "world" from "Hello World" using slice().
// let str="helo world";
// console.log(str.slice(5,10));

// // Replace "bad" with "good" in "JavaScript is bad".
// let str="java script is good";
// console.log(str.replace("good","bad"));

// // Take "JavaScript" and convert it to uppercase, then extract "SCRIPT"
// let str="java script";
// let a=str.slice(5).toUpperCase();
// let b=str.slice(0,5);
// console.log(b,a);

// //Take hello javascript", remove the extra spaces, and convert it to uppercase.
// let str="   hello java scrpit";
// console.log(str.trim());

// // convert"123" into "000123" using padStart()
// let num="123";
// console.log(num.padStart(6,"0"));


// //From "I love JavaScript", extract "JavaScript" using substring().
// let str="i love javascript";
// console.log(str.substring(7,17));

// // From "Hello World", get the character at index 6 and convert it to uppercase.
// let str="hello world";
// console.log(str.charAt(6).toUpperCase());
