//   Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let numeroUtente = 0
let risultato = 0
let somma = 0

//  creo la funzione per generare numeri random
function numeroComputerFunzione(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
} 

//funzione per verificare se la somma è pari o dispari
function sommaPariDispari (numero1, numero2){
   somma = numero1 + numero2
    if  ( somma % 2 == 0){
        risultato ="pari"
     
    } else if(somma % 2 !=0 ){
       risultato = "dispari"
    }
    return risultato, somma
}


const pariODispari = prompt("pari o dispari?")
console.log(`hai scelto ${pariODispari}`)
if (pariODispari === "pari") {
    // chiedo all'utente di inserire un numero da 1 a 5
    let numeroUtente = parseInt(prompt("scegli un numero da uno a cinque"))
    
    // purtroppo non mi fido dell'utente
    if (numeroUtente <= 5 && numeroUtente>=1) {
        // evoco la funzione per generare un numero random
        numeroPc=numeroComputerFunzione (1,5)
        console.log(`il numero dell'utente è ${numeroUtente}`)
        console.log(`il numero del pc è ${numeroPc}`)
        // creo la variabile per la funzione sommaPariDispari
        let sommaPcUtente = sommaPariDispari(numeroPc, numeroUtente)
        console.log(`la somma dei due numeri è ${sommaPcUtente}`)
        console.log(risultato)

        // annuncio il vincitore
        let risultatovincitore = 0
            if(risultato == "pari"){
                risultatovincitore = "hai vinto!"
            } else {
                risultatovincitore= "hai perso"
            }
            console.log(risultatovincitore)
       
        
    } else{
        alert("inserisci un numero da uno a 5!")
    }

 } else if (pariODispari === "dispari"){
    // chiedo all'utente di inserire un numero da 1 a 5
    let numeroUtente = parseInt(prompt("scegli un numero da uno a cinque"))
    
    // purtroppo non mi fido dell'utente
    if (numeroUtente <= 5 && numeroUtente>=1) {
        // evoco la funzione per generare un numero random
        numeroPc=numeroComputerFunzione (1,5)
        console.log(`il numero dell'utente è ${numeroUtente}`)
        console.log(`il numero del pc è ${numeroPc}`)
        // creo la variabile per la funzione sommaPariDispari
        let sommaPcUtente = sommaPariDispari(numeroPc, numeroUtente)
        console.log(`la somma dei due numeri è ${sommaPcUtente}`)
        console.log(risultato)

        // annuncio il vincitore
        let risultatovincitore = 0
            if(risultato == pariODispari){
                risultatovincitore = "hai vinto!"
            } else {
                risultatovincitore= "hai perso"
            }
            console.log(risultatovincitore)
        }
    }  else {
        alert("scrivi pari o dispari!")

    }

