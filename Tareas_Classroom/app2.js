//SEGUNDA PARTE: 
//Ejercicio 1:Escribe un programa que pida dos números y escriba en la pantalla cuál es el mayor
let num1;
let num2;

num1=parseInt(prompt("Ingrese el numero 1",""));
num2=parseInt(prompt("Ingrese el numero 2",""));

if(num1 >= num2){
    
    document.write("El numero mayor es: " + num1 + " ( Numero 1 )");
} else{
    
    document.write("El Numero mayor es : " + num2 + " ( Numero 2 )");
}