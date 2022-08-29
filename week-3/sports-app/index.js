/*
  Title: Assignment 3.2 - Node's Module System
  Author: Shay McKee
  Date: 08/28/2022
  Description: Assignment 3.2 - Node's Module System 
*/

// Displaying teams info in the console
const teams = require("./team-manager").displayTeams();
const displayGetGame = require("./team-manager").getGame();

console.log(teams, "\n", displayGetGame);