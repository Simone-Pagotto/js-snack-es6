// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

let bycicles = [
  {
    'nome' : 'olmo',
    'peso' : 55
  },
  {
    'nome' : 'scott',
    'peso' : 80
  },
  {
    'nome' : 'bianchi',
    'peso' : 30
  },
  {
    'nome' : 'energizer',
    'peso' : 33
  },
]

console.log(bycicles);


let lighter = bycicles[0];

for(let i=0;i<bycicles.length;i++){
  if(lighter['peso'] > bycicles[i]['peso']){
    lighter = bycicles[i];
  }
}

let {peso} = lighter;
console.log(peso);
console.log(lighter);

document.write(`Il peso della bici più leggere è ${peso}`);
