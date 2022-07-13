//Escribir un programa que escriba en pantalla los divisores de un número dado
const button = document.getElementById ("button");
button.onclick = function isDivisibleBy() {
    const userNumber = document.getElementById ("numb").value;
    
    const divisors =[];
    for (let index = 0; index < userNumber/2; index++) {
        divisors.push(index+1);         

    }
    let result = [];
    divisors.forEach(element => {
        
        if (userNumber%element === 0) {
            result.push(element);
        }
    });
    document.getElementById ("result").innerHTML = result +" y por " + userNumber;   
     
}



    
    
    
    


   /* 
   
        */