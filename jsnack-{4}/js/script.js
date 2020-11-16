// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare,
//  le altre saranno tutte settate a 0

let footballTeams = [
  {
    'nome':'torino fc',
    'puntiFatti': 0,
    'falliSubiti':0
  },
  {
    'nome':'juventus',
    'puntiFatti': 0,
    'falliSubiti':0
  },
  {
    'nome':'roma',
    'puntiFatti': 0,
    'falliSubiti':0
  },
  {
    'nome':'salernitana',
    'puntiFatti': 0,
    'falliSubiti':0
  },
];

// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti

for (let i = 0; i < footballTeams.length; i++) {
  footballTeams[i].puntiFatti = parseInt(Math.random()*10);
  footballTeams[i].falliSubiti = parseInt(Math.random()*10);
  console.log(`${footballTeams[i].nome},${footballTeams[i].puntiFatti},${footballTeams[i].falliSubiti}`);
}
