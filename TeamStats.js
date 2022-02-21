const team = {
    _players: [{
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 25
    }, 
    {
      firstName: 'Natalia',
      lastName: 'Ahmad',
      age: 20
    }, 
    {
      firstName: 'Henry',
      lastName: 'Bradshaw',
      age: 22
    }], 
    _games: [{
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    }, 
    {
      opponent: 'Bears',
      teamPoints: 51,
      opponentPoints: 29
    }, 
    {
      opponent: 'Eagles',
      teamPoints: 76,
      opponentPoints: 30
    }], 
    get players(){
      return this._players;
    }, 
    get games(){
      return this._games;
    },
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName, 
        age: age
      };
      this.players.push(player);
    }, 
    addGame(opp, myPts, oppPts){
      let game = {
        opponent: opp,
        teamPoints: myPts,
        opponentPoints: oppPts
      };
        this.games.push(game);
    }
  };
  
  team.addPlayer('Stephen', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Titans', 100, 98);
  team.addGame('Sharks', 85, 22);
  team.addGame('Cheetahs', 40, 102);
  
  console.log('---------- PLAYERS INFO ----------\n');
  for (let player in team.players) {
    console.log(`Player ${player}\n\tFirst name: ${team.players[player].firstName}\n\tLast name: ${team.players[player].lastName}\n\tAge: ${team.players[player].age}\n`);
  }
  
  console.log('---------- GAMES INFO ----------\n');
  for (let game in team.games) {
    console.log(`Game ${game}\n\tOpponent: ${team.games[game].opponent}\n\tTeam points: ${team.games[game].teamPoints}\n\tOpponent points: ${team.games[game].opponentPoints}\n`);
  }
  