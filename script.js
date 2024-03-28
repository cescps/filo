function toggleMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    animate();
  }

     // Arrays of philosophers and phrases
    var philosophers = ["Aristòtil", "Descartes", "Locke", "Plató", "Hume", "Kant", "Nietzsche"];
    var phrases = "salut i xampany i galetes per a tots, no sé res, la vida vista de lluny és una comèdia i de prop una tragèdia, salut i força al canut, no tiris més sal a la ferida, Qui no s’arrisca no pisca, com més serem més riurem, a poc a poc i bona lletra, de mica en mica s'omple la pica, tal faràs tal trobaràs, no diguis blat fins que no el tinguis al sac i ben lligat, per nadal cada ovella al seu corral, qui té boca s'equivoca, se m'ha menjat la llengua el gat, estic com un llum, panxa plena no té pena, avall que fa baixada, No hi ha pitjor cec que el que no hi vol veure, Qui té ofici té benefici";

    // Split the phrases into an array
    var phraseArray = phrases.split(", ");

    // Get a random philosopher
    var randomPhilosopher = philosophers[Math.floor(Math.random() * philosophers.length)];

    // Get a random phrase
    var randomPhrase = phraseArray[Math.floor(Math.random() * phraseArray.length)];

    // Display the random philosopher and phrase
    document.getElementById("philosopher").textContent = randomPhilosopher;
    document.getElementById("quote").textContent = '"' + randomPhrase + '"';
