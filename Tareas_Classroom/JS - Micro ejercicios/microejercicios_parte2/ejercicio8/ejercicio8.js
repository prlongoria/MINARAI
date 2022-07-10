/*Escribe un programa que pida un número y nos diga si es divisible 
por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)*/
const button = document.getElementById ("button");
button.onclick = function isDivisibleBy ()  {
    const number = document.getElementById ("userNumber").value;
    let num2 = 2;
    let num3 = 3;
    let num5 = 5;
    let num7 = 7;
    if (number % num2 === 0 ){
        console.log( number +" "+"Is divisible by "+" " + "2");
        document.getElementById("isDivisibleBy").innerHTML = number +" "+"Is divisible by "+" " + "2";
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

}