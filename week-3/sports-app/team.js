/*
  Title: team.js
  Author: Shay McKee
  Date: 08/28/2022
  Description: Assignment 3.2 - Node's Module System
*/

// creates and exports Team class
class Team {
  constructor(name, mascot, playerCount) {
    this.name = name;
    this.mascot = mascot;
    this.playerCount = playerCount;
  }
}

// export Team class to team-manager.js
module.exports = Team;