//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
const button = document.getElementById("button");
button.onclick = function getNumberOfLetterA (){
 
    let phrase = document.getElementById("phraseWithA").value;
    let lettersOfPhrase =[];
        
    for ( let i = 0; i < phrase.length; i++) {
        if (phrase[i].toLowerCase() === "a") lettersOfPhrase.push(i);
    }   

document.getElementById("numberOfLettersA").innerHTML = "Esta frase contiene" + " " + lettersOfPhrase.length + " " + "letras A";

}

