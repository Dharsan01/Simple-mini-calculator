let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let add  = document.querySelector("#add");
let sub  = document.querySelector("#sub");
let mult = document.querySelector("#mult");
let divi = document.querySelector("#divi");
let result = document.querySelector("#result");

sub.addEventListener("click",function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    result.innerHTML = SubtractTwoNumbers(num_1,num_2);

})
add.addEventListener("click",function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    result.innerHTML = AddTwoNumbers(num_1,num_2);

})
mult.addEventListener("click",function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    result.innerHTML = MultiplyTwoNumbers(num_1,num_2);

})
divi.addEventListener("click",function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    result.innerHTML = DivideTwoNumbers(num_1,num_2);

})

function AddTwoNumbers(a,b){
    let sum = a+b;
    return sum;
}

function SubtractTwoNumbers(a,b){
    let diff = a-b;
    return diff;
}

function MultiplyTwoNumbers(a,b){
    let product = a*b;
    return product;
}

function DivideTwoNumbers(a,b){
    let quotient = a/b;
    return quotient;
}
