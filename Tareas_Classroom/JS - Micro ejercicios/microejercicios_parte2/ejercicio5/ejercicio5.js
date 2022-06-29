//Escribe un programa que pida una frase y escriba las vocales que aparecen

let button = document.getElementById("button");
button.onclick= function getVowelsOfPhrase() {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let phrase = document.getElementById("phraseInput").value; //recojo lo que pone el usuario en el input
    let arrayPhrase = phrase.split(""); //convierto la phrase (string) en un array
    let arrayOfVowels = [];

    for (var i = 0; i < arrayPhrase.length; i++) {
        let arrayPhraseElement = arrayPhrase[i];

        if (vowels.includes(arrayPhraseElement)) {
            arrayOfVowels.push(arrayPhraseElement);
        }
        
       
    }
    document.getElementById('vowels').innerHTML = arrayOfVowels;



    /*if (arrayPhrase.includes(vowels)) {
        let arrayVowelsInPhrase = arrayPhrase
        document.getElementById ('vowels').innerHTML = arrayVowelsInPhrase;
    }*/
}

    /*let result = arrayPhrase.filter (element => {
        if (element==vowels){
            return true;
        }
        return false;
    })
    document.getElementById('vowels').innerHTML= result;
    console.log(result);*/

    /*for (let i in vowels){
        for (let j in arrayPhrase){
            if(vowels[i] == arrayPhrase[j]){
                
                console.log(arrayPhrase[j])
             }else{
                console.log('wrong');
             }
        }
    }*/

    //let vowelsOfPhrase = phrase.match(vowels);

    //console.log (vowelsOfPhrase);
   // if (vowelsOfPhrase[i].toLowerCase === vowels
    
    

    
    
    /*for ( let i = 0; i < phrase.length; i++) {
        if (phrase[i] === vowels[j]) vowelsOfPhrase.push(i);
    } */
