// Arithmetic Operators + - * / % ++ --
// Assignment Operators = += -= *= /=  %=
// Logical oprators  && || 
// comparison operator

// ১. > (Greater Than)
// বাংলা অর্থ: "বড়" হওয়া।

// এটা চেক করে — বাম পাশে থাকা ভ্যালু ডান পাশের ভ্যালুর চেয়ে বড় কিনা।
// > → বড় হলে ঠিক ✅

// console.log(7 > 5); 
// Output: true (৭ বড় ৫ এর চেয়ে)

// false;









// ২. < (Less Than)
// বাংলা অর্থ: "ছোট" হওয়া।

// এটা চেক করে — বাম পাশে থাকা ভ্যালু ডান পাশের ভ্যালুর চেয়ে ছোট কিনা।
// < → ছোট হলে ঠিক ✅
// console.log(4 < 9);
// true
// console.log(9 < 4);
// false



/*
➡️ ১. >= (Greater Than or Equal To)
বাংলা অর্থ: "বড় অথবা সমান" হওয়া।

এটা চেক করে — বাম পাশে থাকা ভ্যালু ডান পাশের ভ্যালুর চেয়ে বড় অথবা সমান কিনা।

✅ যদি বড় হয় অথবা সমান হয় → true
❌ যদি না হয় → false
*/ 

/*
➡️ ২. <= (Less Than or Equal To)
বাংলা অর্থ: "ছোট অথবা সমান" হওয়া।

এটা চেক করে — বাম পাশে থাকা ভ্যালু ডান পাশের ভ্যালুর চেয়ে ছোট অথবা সমান কিনা।

✅ যদি ছোট হয় অথবা সমান হয় → true
❌ যদি না হয় → false

*/ 
   
// true

// let a = 10;
// let b = 5;



// console.log(a > b);     
// //  true
// console.log(a == '10'); 
// // true;
// console.log(a === '10');
// // false
// console.log(a != b);    
// // true
// console.log(a !== b);   
// // true

// console.log(a > 5 && b < 10); 
// // false
// console.log(a > 15 || b < 6); 
// // true
// console.log(!(a < b));     



// function sum (a,b){
// return a+b;

// }

// console.log(sum(3,4));

// let sub = function(a,b){
//     return a- b;
// }
// console.log(sub(5,4));


// let mul = (a,b) => {
//     return a*b;
// }

// console.log(mul(3,4));

// const student = {
//     name: "Rahim",
//     age: 20,

//   };


//   const student1 = {
//     name: "albal",
//     age: 2,

//   };


// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.values(student1));

  
// function Car(brand,modal){
//     this.brand = brand
//     this.modal = modal;
    
// }

// let car1 = new Car('toyota', 12);
// let car2 = new Car('excorola', 13);

// console.log(car1);
// console.log(car2);


// const monthNames = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"];

// console.log(monthNames.pop());
// console.log(monthNames.shift());
// console.log(monthNames.unshift("December"));
// console.log(monthNames.push("January"));
// console.log(monthNames[monthNames.length - 1]);
// console.log(monthNames.includes("April"));
// console.log(monthNames.indexOf('February'));
// console.log(monthNames);



// let fruits = ["apple", "banana", "mango", "orange"];
// console.log(fruits);

// console.log(fruits.slice(0,1));
// fruits.splice(0,1,2,'data');
// fruits.splice(0,0,3,'rafi asraf');


// console.log(fruits);


// let alertbtn = document.getElementById('alertbtn');
// let imghb = document.getElementById('imghb');
// let ttext = document.getElementById('ttext');
// let myForm = document.getElementById('myForm');

// alertbtn.addEventListener('click', function() {
//     alert('alert')
// })

// imghb.addEventListener('mouseover', function() {
//     imghb.src = './imgs/tailwind-css.svg'
// })
// imghb.addEventListener('mouseout', function() {
//     imghb.src = './imgs/bootstrap.svg'
// })


// ttext.addEventListener('keydown', function() {
//     ttext.classList.remove('border-gray-300')
//     ttext.classList.add('border-[20px]','border-green-500','bg-red-500')
// })
// ttext.addEventListener('keyup', function() {
//     ttext.classList.add('border-gray-300')
//     ttext.classList.remove('border-[20px]','border-green-500','bg-red-500')
//     console.log(ttext.value);
//     console.log(ttext.value.length);
// })
// myForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log(ttext.value);
// })
// window.addEventListener('load', () => {
//    console.log("পৃষ্ঠা সম্পূর্ণভাবে লোড হয়েছে!");
//   });
// document.addEventListener('scroll', () => {
//     if (scrollY >= 120) {
//         console.log("পৃষ্ঠা সম্পূর্ণভাবে লোড হয়েছে!");
//     }else{
//         console.log('tata');
        
//     }
//   });

let cokkha  = document.getElementById('cokkha');
let cokkhaimg  = document.getElementById('cokkhaimg');
    cokkhaimg.src = './imgs/lodo/2.png';
// ./imgs/bootstrap.svg


let lodudice = function(){
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    
    cokkhaimg.src = `./imgs/lodo/${randomNumber}.png`
}

cokkha.addEventListener('click', function(){
    lodudice()
    
})





let num = 4.7;
console.log(Math.round(num));
console.log(Math.sqrt(25));

let msg = "Hello World";

console.log(msg.includes('Hello'));
console.log(msg[10]);
console.log(msg.replace('d','c'));




let i = 10;


let df = function(){
    for(i = 1; i <= 10; i++){
        console.log(i);
    }
}


let stime = Date.now();
df();
let etime = Date.now();
let rst = etime-stime
console.log(`${stime} \n${etime}`);

console.log(rst);


let date = new Date();
let cdate =  date.getFullYear()
let bdate = 1905;

console.log(cdate);



let desh = 'BanglaDesh';

console.log(desh);
