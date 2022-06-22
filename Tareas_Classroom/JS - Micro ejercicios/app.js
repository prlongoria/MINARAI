 //ejecicio 1: Escribe un programa que escriba en la pantalla un texto que diga “Hello World”
 //document.getElementById("main").innerHTML = `<h1>  Hola Mundo </h1>`;

 //ejercicio 2: Escribe un programa que escriba en la pantalla el resultado de sumar 3 + 5
 /*const num1 = 3;
 const num2 = 5;
 document.getElementById("suma").innerHTML = suma(num1, num2);
 
function suma(numero1, numero2){    
    const result = numero1+numero2;
    return result;
}     */

//ejercicio 3:Escribe un programa que pida el nombre del usuario con un prompt o utilizando un input y escriba un texto que diga “Hola nombreUsuario"
/*let personName = prompt ("Hola")
if (personName != "") {
    document.getElementById("personName").innerHTML ="Hello " + personName;
  }
  if (personName == ""){
    document.getElementById("personName").innerHTML ="Goodbye ";
  }*/

  //ejercicio 4: Escribe un programa que pida un número, pida otro número y escriba el resultado de sumar estos dos números
   /* let x,y;
    x = prompt("Ingrese numero uno: ");
    y = prompt("Ingrese numero dos: ");    
    let result = parseFloat(x)+ parseFloat(y);
    document.getElementById("suma").innerHTML =result;
    //document.write(result);*/

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


