//Escribir un programa que escriba en pantalla los divisores comunes de dos 
//números dados

const button = document.getElementById("button");
button.onclick = function getYourCommonDivisors() {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;

    const divisorsOfNumber1 = [];

    for (let index = 0; index < number1/2; index++) {
        divisorsOfNumber1.push(index+1);    
    }

    let resultDivisorsOfNumber1= [];
    divisorsOfNumber1.forEach(element => {        
        if (number1%element === 0) {
            resultDivisorsOfNumber1.push(element);
            
        }
    });
    resultDivisorsOfNumber1.push(parseFloat(number1));
    console.log(resultDivisorsOfNumber1);


    const divisorsOfNumber2 = [];

    for (let index = 0; index < number2/2; index++) {
        divisorsOfNumber2.push(index+1);    
    }

    let resultDivisorsOfNumber2= [];
    divisorsOfNumber2.forEach(element => {        
        if (number2%element === 0) {
            resultDivisorsOfNumber2.push(element);
        }
    });
    resultDivisorsOfNumber2.push(parseFloat(number2));
    console.log(resultDivisorsOfNumber2);

     
    const sameDivisors =[];
    resultDivisorsOfNumber1.forEach(element => {
        if (resultDivisorsOfNumber2.includes(element)){
            sameDivisors.push(element);
        };
    });
    document.getElementById("result").innerHTML = sameDivisors;
    console.log(sameDivisors);
    //Falta imprimirlo en pantalla   
    
    
}