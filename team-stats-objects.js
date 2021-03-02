/*
We want to create and extract information about your favorite sports team (basketball)
It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.
Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/

/*
1. Create an empty team object. 
2. Add _layers property and _game property to team object. 
3. Populate the empty array that corresponds to the _players key in your team object with three actual players.
{
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 50,
},
4. Populate the empty array that corresponds to the _games key in your object with three actual games.
{
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27,
},
5. Create getters methods for _players and _games keys.
6. Add a method addPlayer to team object. This method should take in 3 parameters: firstName, lastName and age. -> It should create a player object, and add them to the team‘s players array.
7. Below team object invoke addPlayer method on the following players: Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76.
8. The scorekeeper has some new information! Add a similar method for recording game results called addGame that:
    - takes in an opponent’s name,
    - your team’s points,
    - the opponent’s points,
    - creates a game object,
    - adds the game object to your team‘s games array.
9. Invoke addGame method on three games and print the team's updated games array
 */

const team = {
  // Array with players object
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 50,
    },
    {
      firstName: 'Pete',
      lastName: 'Wheeler',
      age: 54,
    },
    {
      firstName: 'Vincent',
      lastName: 'Peter',
      age: 55,
    },
  ],
  // Array with games object
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: 'Knicks',
      teamPoints: 120,
      opponentPoints: 60,
    },
    {
      opponent: 'Pistons',
      teamPoints: 43,
      opponentPoints: 26,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  // Method to add player to _players array
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },
  // 8. Method to add games to _games array
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts,
    };
    this.games.push(game);
  },
};

// Create new players
team.addPlayer('Steph', 'Cury', 28);
team.addPlayer('Lisa', 'leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
// Cretae new game
team.addGame('Titans', 100, 98);

console.log(team._players);
console.log(team._games);
