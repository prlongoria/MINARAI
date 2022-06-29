//SEGUNDA PARTE: 

//Ejercicio 1:Escribe un programa que pida dos números y escriba en la pantalla cuál es el mayor
/*let num1;
let num2;
num1=parseInt(prompt("Ingrese el numero 1",""));
num2=parseInt(prompt("Ingrese el numero 2",""));
if(num1 >= num2){
    document.getElementById("majorNum").innerHTML = ("El numero mayor es: " + num1 + " ( Numero 1 )");
    
} else{
  document.getElementById("majorNum").innerHTML = ("El numero mayor es: " + num2 + " ( Numero 2 )");
    
}*/

//Ejercicio 2: Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

/*let num1 =parseFloat(prompt("Ingrese el numero 1",""));
let num2 =parseFloat(prompt("Ingrese el numero 2",""));;
let num3 =parseFloat(prompt("Ingrese el numero 3",""));

if (num1 >= num2 && num2>=num3){
  document.getElementById("majorNum").innerHTML = ("El número mayor es: " + num1 );
}
if (num1<num2 && num2>=num3){
  document.getElementById("majorNum").innerHTML = ("El número mayor es: " + num2);
}
if (num1<num2 && num2<num3){
  document.getElementById("majorNum").innerHTML = ("El número mayor es: " + num3);
}*/

//Lo intento hacer con un array para que salga con cualquier cantidad de números, pero hice una tontería porque puse 3 números, no lo he hecho genérico:
/*let num1 =parseFloat(prompt("Ingrese el numero 1",""));
let num2 =parseFloat(prompt("Ingrese el numero 2",""));;
let num3 =parseFloat(prompt("Ingrese el numero 3",""));
let myArrayNumeros = [num1, num2, num3];
if (myArrayNumeros[0]>=myArrayNumeros[1] && myArrayNumeros[1]>=myArrayNumeros[2]){
  document.getElementById("majorNum").innerHTML = ("El número mayor es: " + num1 );
}
if (myArrayNumeros[0]<myArrayNumeros[1] && myArrayNumeros[1]>=myArrayNumeros[2]){
  document.getElementById("majorNum").innerHTML = ("El número mayor es: " + num2 );
}
if (myArrayNumeros[0]<myArrayNumeros[1] && myArrayNumeros[1]<myArrayNumeros[2]){
  document.getElementById("majorNum").innerHTML = ("El número mayor es: " + num3 );
}*/

//Ejercicio 3: Escribe un programa que pida un número y diga si es divisible por 2:

const button = document.getElementById("button");
button.onclick = function getNumberValue (){
  let number = document.getElementById("evenNumber").value;
  if (number %2 === 0){
    document.getElementById("number").innerHTML = "El número es par";   
  } else{
    document.getElementById("number").innerHTML = "El número es impar";
  }
}

//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a




