'use strict';

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


//-------------------------------------------//

for (var i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${i + 1}`, game.scored[i])
}

// the above code can also written like this
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}

//-------------------------------------------//
const odds = Object.values(game.odds);
var sum = odds.reduce((ac, el) => ac + el);
const average = sum / odds.length;
console.log(average.toFixed(2));

// the above code can also written like this
const odds1 = Object.values(game.odds);
let average1 = 0;

for (const odd of odds1) {
    console.log(odds1, odd, "checkodds")
    average1 += odd
}

average1 /= odds1.length

console.log(Number(average1.toFixed(2)), "average1");


//-------------------------------------------//

console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// the above code can also written like this


//-------------------------------------------//

const keyValues = Object.entries(game.odds);
console.log(keyValues, "check-Key-Values");

for (const [team, odd] of Object.entries(game.odds)) {
    console.log(team, odd, "checkGameOdds");
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}

//-------------------------------------------//

const scorers = {};
scorers.Lewandowski = 2;
scorers.Gnarby = 1;
scorers.Hummels = 1;

console.log(scorers, "scorers")

// the above code can also written like this

const scorers1 = {};
for (const player of game.scored) {
    console.log(player, "player")
    scorers1[player] ? scorers1[player]++ : (scorers1[player] = 1);
}

console.log(scorers1, "scorers1")

//-------------------------------------------//