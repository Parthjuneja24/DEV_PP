// let = 10;
// console.log(let);

// let a = 10;

// if(true){
//     let a =20;
//     console.log(a);
// }

// console.log(a);

// const pi;
// pi = 10;


// console.log(pi);

// console.log(10==="10");
// let movies ={
//     "hero" : "steve",
//     "age h" : 200,
//     fav : "Iron man"
// };

//  console.log(movies.age);

// let pp = {};
// let key = "age h";

// console.log(movies[key]);
// let arr = [10,"hero",movies
// ,[10,8,9,7,5,4]

// ];

// // for(let p in arr){
// //     console.log(arr[p]);
// // }

// console.log(arr[3][5]);

// function hote h na hight order or call back fuction hote h
///ye apna callback h
function firstName(fullName){
    fullName = fullName.split(" ");
    return fullName[0];
}

///ye apna callback h
function lastName(fullName){
    fullName = fullName.split(" ");
    return fullName[1];
}

///ye apna high order function h ye 
// high order function is liye k kyu ki yaha p funtion k andar
//  ek or function araha h
function sayHi(name,fun){
    let p= fun(name);
    console.log(p);
}

// sayHi("TONY STARK",firstName);
// sayHi("BRUCE WAYNE",lastName);


function sayHi(name){
    console.log(name+"say HIIIII");
}

let p = sayHi;

// console.log(p);

//lopp odd number

// function odd(){
//     for(let i =0;i<10;i++){
//         if(i%2==0){
//             console.log(i);
//         }
//     }
// }
// odd();






