'use strict';

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Create one player array for each team (variables 'players1' and
// // 'players2')
// // const players1 = game.players[0];
// // const players2 = game.players[1];

// const [players1, players2] = game.players;

// console.log(players1, players2);

// /*  The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players*/
// const [gk, ...fieldPlayers] = players1;

// console.log(gk, fieldPlayers);

// /*  Create an array 'allPlayers' containing all players of both teams (22
// players) */

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// /* During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic' */

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// /* Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2') */

// let {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// /* Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in) */

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored by ${[...players]}`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// /* The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator. */

// //   odds: {
// // team1: 1.33,
// // x: 3.25,
// // team2: 6.5,
// // },

// /* const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2); */

// team1 < team2 && console.log(`Team 1 is more likely to win`);

// team1 > team2 && console.log(`Team 2 is more likely to win`);
// team1 = 8;

// team1 < team2 && console.log(`Team 1 is more likely to win`);

// team1 > team2 && console.log(`Team 2 is more likely to win`);

// Challenge 2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.1 solution
// for (let i = 0; i < game.scored.length; i++) {
//   console.log(`Goal ${i + 1}: ${game.scored[i]}`);
// }

// 1.2 solution
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

//2 solution

let average = 0;

for (const odd of Object.values(game.odds)) {
  average += odd;
}
average /= Object.values(game.odds).length;
console.log(average);

//3 solution

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

//4 solution

// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  console.log(scorers[player]);
}
console.log(scorers);
