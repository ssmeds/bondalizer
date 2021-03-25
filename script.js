// Bondalizer
// My name is Bond, James Bond!

// Uppgiften
// Skapa en kontaktlista (object array) med minst 4 personer. Den skall innehålla minst för och efternamn som egna key-pair-values.

// Använd prompt() eller skapa ett formulär och en knapp via vilket besökaren kan skriva i ett förnamn på en person. Sök i listan om du hittar en träff. I så fall skriv ut på sidan eller i konsollen en hälsning: "His name is Efternamn, Förnamn Efternamn!". Hittar du ingen träff skriv istället "Agent not found!".

// Pseudokod
// Skriv först uppgiften som pseudokod. Hur skulle flödet för applikationen se ut? Vilka steg och uppgifter behöver du göra?

// Lösningen
// Lös uppgiften med riktig kod!

let agents = [{
    firstName: "Stina",
    lastName: "Smeds"
  },
  {
    firstName: "Fredrik",
    lastName: "Sundgren"
  },
  {
    firstName: "Buffy",
    lastName: "Summers"
  },
  {
    firstName: "Dean",
    lastName: "Winchester"
  },
  {
    firstName: "Sam",
    lastName: "Winchester"
  },
];

// console.log(agents);
let inputBox = document.createElement("input");
let agentDisplay = document.createElement("div");
document.body.appendChild(inputBox);
document.body.appendChild(agentDisplay);

inputBox.addEventListener("keydown", function (e) {
  if (e.key == 'Enter') {
    let agentInput = inputBox.value;
    let agentCap = agentInput[0].toUpperCase() + agentInput.substr(1);
    // console.log(agentCap);
    // console.log(inputBox.value);
    findAgent(agentCap);
    inputBox.value = "";
  }
})

function findAgent(agent) {
  agents.forEach(element => {
    // console.log(element.firstName);
  });
  let foundAgent = agents.find(({
    firstName
  }) => firstName === agent);
  // console.log(agent);
  if (foundAgent != undefined) {
    // console.log("Found", foundAgent);
    agentDisplay.insertAdjacentHTML("afterbegin", `<p>The name is ${foundAgent.lastName}, ${foundAgent.firstName} ${foundAgent.lastName}!</p>`);
  } else {
    agentDisplay.insertAdjacentHTML("afterbegin", `<p>Agent not found!</p>`);
  }

}