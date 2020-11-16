// Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa
//  tra i due numeri inseriti dall’utente

var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

let firstNum = parseInt(prompt(`Digita un numero compreso tra 0 e ${myArray.length}:`));
let secondNum = parseInt(prompt(`Digita un numero, diverso da ${firstNum}, compreso tra 0 e ${myArray.length}`));
let numMax;
let numMin;

if(firstNum > secondNum){
   numMax = firstNum;
   numMin = secondNum;
} else {
   numMax = secondNum;
   numMin = firstNum;
}

// let newMyArray = [];
// for(let i=0; i<= (numMax-numMin); i++){
//   newMyArray[i] = myArray[i+numMin];
// }

// console.log(myArray);
// console.log(numMin,numMax);
// console.log(newMyArray);


const newMyArray = myArray.filter((element,index) => {
  if(index >= numMin && index <= numMax){
    return myArray[index];
  }
});
console.log(myArray);
console.log(numMin,numMax);
console.log(newMyArray);
