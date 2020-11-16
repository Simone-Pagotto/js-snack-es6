
let arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];
let newArrayObj=[];
for(let i=0; i<arrayObj.length; i++){
  newArrayObj[i] = {...arrayObj[i], position: randLetter()};
}
console.log(newArrayObj);
