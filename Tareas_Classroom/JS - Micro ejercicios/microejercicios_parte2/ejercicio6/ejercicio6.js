//Escribe un programa que pida una frase y escriba cuántas vocales hay en la frase.
const button = document.getElementById("button");
button.onclick = function countingVowels() {    
    let vowels = ["a", "e", "i", "o", "u"];
    let sentence = document.getElementById("userSentence").value;
    //let sentence = "hola soy Patricia";
    let lowerCase = sentence.toLowerCase();
    let sentenceLetters = lowerCase.split("");    
    let numberOfVowels =[];
        
    for ( let i = 0; i < sentenceLetters.length; i++) {
        if (vowels.includes(sentenceLetters[i])) numberOfVowels.push(i);
    }   

    document.getElementById("numberOfVowels").innerHTML = "Esta frase contiene" + " " + numberOfVowels.length + " " + "vocales";

}
    
    
    

