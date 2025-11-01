
let num1=1,num2=2;//defoult
function number1(){
    num1 = parseFloat(prompt("enter the first number"))
}
function number2(){
num2 = parseFloat(prompt("enter the sucand number"))
}

function add(){
    alert("the sum = " + (num1+num2));
}
function sub(){
    alert("the Subtract = " + (num1-num2));
}
function div(){
    if (num2 !=0){
    alert("the Division = " + (num1/num2));}
    else{
        alert("invalid output!")
    }
}
function mal(){
    alert("the Multiply= " + (num1*num2));
}