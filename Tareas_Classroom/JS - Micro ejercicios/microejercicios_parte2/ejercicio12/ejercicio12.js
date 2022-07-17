/*Escribir un programa que nos diga si un número dado es primo 
(no es divisible por ninguno otro número que no sea él mismo o la unidad)*/

const button = document.getElementById("button");

button.onclick = function isAPrimeNumber() {

    const number = document.getElementById("number").value;
    
    let arrayDivisors = [];

    for (let index = 0; index < number/arrayDivisors; index++) {
        arrayDivisors.push(index+1);
    }
    console.log(arrayDivisors);
    
    arrayDivisors.forEach(element => {
        if (number%1===0 && number%number===0 && !number/element===0) {
            document.getElementById("primeNumber").innerHTML = `El número ` + number + ` es primo`;
        }
        
    });


}


/*
if (number%1===0 && number%number===0) {
        document.getElementById("primeNumber").innerHTML = `El número ` + number + ` es primo`;
    }
    */