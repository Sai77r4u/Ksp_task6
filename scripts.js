// logical operators : &&    ||   !
// && - and, || - OR , ! - NOT.

let num1 = 12;
let num2 = 13;
console.log(num1 > num2 && num1 == 13); //f && f - f
console.log(num1 == 12 || num2 == 13); // t || t - t
console.log(!(num1 == 15  || num2 == 67)); //!-not operator for reverse.
console.log(!(num1 == 12 && num2 == 13)); // t- but using not operator it will be false.

// functions

//function key word and function name

function Saidulu1(){
console.log("hello world");

}

function sai(){
    console.log("hello Sai");
}

sai();
function Saidulu(){
console.log("I am Saidulu")
}
Saidulu();
let digit1 = 52;
let digit2 = 13;

function addition(){
console.log(digit1 + digit2);
}
addition();
function add(digit3,digit4,digit5){//parameters
    console.log(digit3 + digit4+digit5);
    }
add(22,33,56);//arguments
let name = "Saidulu" //string - collection of charecters.
console.log(name.length); //Methods like lenght,concat,replace..

for(let i=1; i<=10;i++){
console.log("Saidulu") //the loop will be terminted when the condition will becomes false.
}
for(let i=19;i>1;i--){
    console.log("number",i);    
}

