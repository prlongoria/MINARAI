//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
const button = document.getElementById("button");
button.onclick = function getNumberOfEachVowel() {
    let sentence = document.getElementById("sentence").value;    
    let sentenceLowerCase = sentence.toLowerCase();
    //let arraySentence = sentenceLowerCase.split("");
    //let vowels = ["a", "e", "i", "o", "u"];
    //let arraySentence = sentenceLowerCase.split("a").length-1;
    let vowels = sentenceLowerCase.match(/[aeiou]/g) || [];
    let result = {"a":0, "e":0, "i":0, "o":0, "u":0};
    vowels.map((element) => result[element]++);
    document.getElementById("printVowels").innerHTML= "Hay " + result.a + "letras a";
    /*`
       Esta frase contiene ${result.a} letras a,
        ${result.e} letras e,
        ${result.i} letras i,
        ${result.o} letras o y
        ${result.u} letras u
    `;*/
    
    console.log (result);



    

    /*
    const getVowels = (str) => {
    const vowels=str.toLowerCase().match(/[aeiou]/g) || [];
    const result={"a":0, "e":0, "i":0, "o":0, "u":0};
    vowels.map((el) => result[el]++);
    return result;
}

    */

    /*function contar() {
        // Capturas el valor del input, lo limpas de espacios al inicio y al final y luego haces un arreglo
        const texto = document.getElementById('texto').
        value.trim().toLowerCase().split('');
        
        // Creamos un objeto que será el que almacene las repeticiones
        const repeticiones = {};
        
        // Ciclamos el texto del input y verificamos si existe y sumamos 1, de no existir siempre valdrá 1
        texto.forEach( ( letra ) => {
          repeticiones[ letra ] = ( repeticiones[ letra ] || 0 ) + 1;
        });
        
        // Ahora ciclamos el objeto y lo agregamos al resultado
        for( let letra in repeticiones ) {
          const text = `${ letra } = ${ repeticiones[ letra ] }<br>`;
          document.getElementById('resultado').innerHTML += text;
        }
      
      
      }*/
    
    

}

//const vowels=arraySentence.match(/[aeiou]/g) || [];
//CONSIGO QUE ME DIGA EL NÚMERO DE LA VOCAL I O LA QUE META EN EL SPLIT PERO
//NO ENCUENTRO AÚN LA MANERA DE PONER AHÍ DENTRO TODAS LAS VOCALES, QUIZÁ DEBA HACER UN 
//IF O UN CASE?
