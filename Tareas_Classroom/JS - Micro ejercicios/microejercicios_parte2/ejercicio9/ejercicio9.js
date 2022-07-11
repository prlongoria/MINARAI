/*Añadir al ejercicio anterior que nos diga por cuál de los cuatro 
es divisible (hay que decir todos por los que es divisible) */

const button = document.getElementById ("button");
button.onclick = function isDivisibleBy ()  {
    const number = document.getElementById ("userNumber").value;
    let num2 = 2;
    let num3 = 3;
    let num5 = 5;
    let num7 = 7;
    if (number % num2 === 0 ){
         document.getElementById("isDivisibleBy").innerHTML = number +" "+"Is divisible by "+" " + num2 ;
    }

    if (number % num3 === 0) {
        document.getElementById("isDivisibleBy").innerHTML = number +" "+"Is divisible by "+" " + num3;
    }
    if (number % num5 === 0) {
        document.getElementById("isDivisibleBy").innerHTML = number +" "+"Is divisible by "+" " + num5;
    }
    if (number % num7 === 0) {
        document.getElementById("isDivisibleBy").innerHTML = number +" "+"Is divisible by "+" " + num7;
    }
    if (number % num2 === 0 && number % num3 === 0){
        document.getElementById("isDivisibleBy").innerHTML = number +" "+"Is divisible by "+" " + num2 + " "+ "and by " + num3;
    }
    if (number % num2 === 0 && number % num5 === 0){
        document.getElementById("isDivisibleBy").innerHTML = number +" "+"Is divisible by "+" " + num2 + " "+ "and by " + num5;
    }
    if (number % num2 === 0 && number % num7 === 0){
        document.getElementById("isDivisibleBy").innerHTML = number +" "+"Is divisible by "+" " + num2 + " "+ "and by " + num7;
    }
    if (number % num3 === 0 && number % num5 === 0){
        document.getElementById("isDivisibleBy").innerHTML = number +" "+"Is divisible by "+" " + num3 + " "+ "and by " + num5;
    }
    if (number % num3 === 0 && number % num7 === 0){
        document.getElementById("isDivisibleBy").innerHTML = number +" "+"Is divisible by "+" " + num3 + " "+ "and by " + num7;
    }
    if (number % num5 === 0 && number % num7 === 0){
        document.getElementById("isDivisibleBy").innerHTML = number +" "+"Is divisible by "+" " + num5 + " "+ "and by " + num7;
    }

}