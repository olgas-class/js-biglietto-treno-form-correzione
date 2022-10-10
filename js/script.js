const generateBtn = document.getElementById("bottone");
const clearBtn = document.getElementById("annulla");
const userNameInput = document.getElementById("nome");
const userKmInput = document.getElementById("km");
const userAgeInput = document.getElementById("fascia-eta");
const kmError = document.querySelector("#km + small");

// Elementi html per output
const ticketContainer = document.getElementById("biglietto");
const passengerName = document.getElementById("nome-passeggero");
const offer = document.getElementById("offerta-applicata");
const cab = document.getElementById("carrozza");
const cp = document.getElementById("codice-cp");
const price = document.getElementById("costo");

// AL CLICK SUL BOTTONE GENERA
generateBtn.addEventListener("click", function () {
  console.log("Event listener");

  //Prelevo i dati inseriti dall'utente
  const userName = userNameInput.value;
  console.log(userName);
  const userKm = parseInt(userKmInput.value);
  console.log(userKm, typeof userKm);
  const userAge = userAgeInput.value;
  console.log(userAge);

  // Se userKm non è un numero, fai vedere messaggio
  if (isNaN(userKm)) {
    kmError.className = "show";
  } else {
    // altrimenti procedi con il calcolo
    kmError.className = "hidden";
    // Fare il calcolo:
    // Calcolo il prezzo base
    let ticketPrice = userKm * 0.21;
    let discount = 0;
    let offerText = "Nessuna offerta";
    if (userAge === "minorenne") {
      // SE il passeggero è minorenne
      //  sconto 20%
      discount = 20;
      offerText = "Offerta minorenne - 20%";
    } else if (userAge === "over65") {
      // ALTRIMENTI SE passeggero è over 65
      // sconto 40%
      discount = 40;
      offerText = "Offerta over65 - 40%";
    }

    // Calcolo prezzo scontato
    ticketPrice = ticketPrice - (ticketPrice * discount) / 100;
    console.log(discount, ticketPrice);
    // Genero numero della carrozza
    const cabNumber = Math.floor(Math.random() * 10) + 1;
    console.log(cabNumber);
    // Genero codice CP
    const cpCode = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    console.log(cpCode);

    // OUTPUT
    // far vedere il blocco del biglietto
    // ticketContainer.classList.remove("hidden");
    ticketContainer.className = "show";

    // inserire i dati in tutti gli elementi html corrispondenti
    passengerName.innerHTML = userName;
    offer.innerHTML = offerText;
    cab.innerHTML = cabNumber;
    cp.innerHTML = cpCode;
    price.innerHTML = ticketPrice.toFixed(2);

    // ripulire tutti i campi
    userNameInput.value = "";
    userKmInput.value = "";
    userAgeInput.value = "";
  }
});

// FINE GENERAZIONE DEL BIGLIETTO

// AL CLICK SUL BOTTONE ANNULLA
clearBtn.addEventListener("click", function () {
  console.log("bottone annulla");

  // Ripulire tutti gli input
  userNameInput.value = "";
  userKmInput.value = "";
  userAgeInput.value = "";

  // Ripulire tutti gli elemnti del risultato
  passengerName.innerHTML = "";
  offer.innerHTML = "";
  cab.innerHTML = "";
  cp.innerHTML = "";
  price.innerHTML = "";

  // Nascondere il blocco del biglietto
  ticketContainer.className = "hidden";
});
