//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
const button = document.getElementById("button");
button.onclick = function getNumberOfLetterA (){
    
    let phrase = document.getElementById("phraseWithA").value;
    console.log (phrase);
    let lettersOfPhrase =[];
    //console.log (numberOfLetters);
    
    
    for ( let i = 0; i < phrase.length; i++) {
        if (phrase[i].toLowerCase() === "a") lettersOfPhrase.push(i);
    }
    

document.getElementById("numberOfLettersA").innerHTML = "Esta frase contiene" + " " + lettersOfPhrase.length + " " + "letras A";

}
/*var cadena = "Cuantas 'A' aparecen en esta cadena."

var indices = [];
for(var i = 0; i < cadena.length; i++) {
	if (cadena[i].toLowerCase() === "a") indices.push(i);
}

document.getElementById("resultado").innerHTML = indices.length;*/

