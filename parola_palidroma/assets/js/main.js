// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

 // chiedere all'utente una parola 
 const richiestaParola = prompt("inserisci una parola")

// creo la funzione
  function parolaPalidroma (parola){
    
   
    // trasformo la parola in un array
    let lettere = parola.split('');

    console.log(lettere)

    // inverto l'ordine dell'array
    lettere = lettere.reverse();
    console.log(lettere)

    // creo una variabile e trasformo l'array in una stringa
    let parolaInvertita = lettere.join('');
    console.log(parolaInvertita);

    if(parola == parolaInvertita){
        console.log('la parola è palindroma');
    } else {
        console.log('la parola non è palindroma');
    }

  }

  // richiamo la funzione
  parolaPalidroma (richiestaParola)
  

