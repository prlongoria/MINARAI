/*Escribir un programa que nos diga si un número dado es primo 
(no es divisible por ninguno otro número que no sea él mismo o la unidad)*/

const button = document.getElementById("button");

button.onclick = function isAPrimeNumber() {

    const number = document.getElementById("number").value;
    
    let arrayPosibleDivisors = [];

    for (let index = 0; index < number/2; index++) {
        arrayPosibleDivisors.push(index+1);   
         
    }
    arrayPosibleDivisors.shift();
    console.log(arrayPosibleDivisors);

    const arrayDivisors = [];
    
    arrayPosibleDivisors.forEach(element => {
        if (number%element===0) {
            arrayDivisors.push(element);           
        }
    });
    if (arrayDivisors.length ===0){
        document.getElementById("primeNumber").innerHTML = `El número ` + number + ` es primo`;
        return;
    }
    document.getElementById("primeNumber").innerHTML = `El número ` + number + ` no es primo`;

}


/*
if (number%1===0 && number%number===0) {
        document.getElementById("primeNumber").innerHTML = `El número ` + number + ` es primo`;
    }
    */