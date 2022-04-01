// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// creo la funzione
  function parolaPalidroma (){
    
    // chiedere all'utente una parola 
   let parola = prompt("inserisci una parola")
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

  parolaPalidroma ()


