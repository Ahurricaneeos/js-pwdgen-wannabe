const nome = prompt("Inserisci il tuo nome:");
const cognome = prompt("Inserisci il tuo cognome:");
let colorePreferito = prompt("Inserisci il tuo colore preferito:");
const numero = 21
parseInt(numero);

let = generatorePassword = `
Ecco la tua nuovissima password super sicura!
${nome}${cognome}${colorePreferito}${numero}
`

console.log(generatorePassword);


document.getElementById("p-generatore-password").innerHTML = generatorePassword;
