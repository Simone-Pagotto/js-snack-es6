// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10

let palla = {
  'nome' : 'palla',
  'peso' : 10
}

console.log(`palla è un oggetto : ${palla}`);


// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

palla.peso = parseInt(prompt('Modifica oggetto:'));

console.log(`palla è un oggetto : ${palla}`);
