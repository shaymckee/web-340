/*
  Title: team-manager.js
  Author: Shay McKee
  Date: 08/28/2022
  Description: Assignment 3.2 - Node's Module System  
*/

// import team class from team module
const Team = require("./team");
// import moment.js module
const moment = require("moment");

// creates teams' data in array.
let teamsArr = [
  new Team("team1", "mascot1", "10"),
  new Team("team2", "mascot2", "12"),
  new Team("team3", "mascot3", "14"),
  new Team("team4", "mascot4", "16"),
  new Team("team5", "mascot5", "18"),
];

// let teamOne = new Team("team1", "mascot1", "10");
// let teamTwo = new Team("team2", "mascot2", "12");
// let teamThree = new Team("team3", "mascot3", "14");
// let teamFour = new Team("team4", "mascot4", "16");
// let teamFive = new Team("team5", "mascot5", "18");

// let teamsArr = [teamOne, teamTwo, teamThree, teamFour, teamFive];

// function for returning all teams' data
function findTeams() {
  return teamsArr;
}

// function for finding a team name
function findTeam(name) {
  return teamsArr.find((team) => {
    team.name === name;
  });
}

// function for displaying teams in a string
function displayTeams() {
  let TeamsArray = findTeams();
  let teamsDisplay = "-- DISPLAYING TEAMS --";
  TeamsArray.forEach((team) => {
    teamsDisplay += "\n";
    teamsDisplay += "Name: " + team.name + "\n";
    teamsDisplay += "Mascot: " + team.mascot + "\n";
    teamsDisplay += "Player Count: " + team.playerCount;
    teamsDisplay += "\n";
  });

  return teamsDisplay;
}

// getGame function to display a string message include two teams' name and mascot, and play date and time
function getGame() {
  // date data from moment.js
  let formattedDate = moment().add(7, "days").calendar();

  let displayMeg = "--CHAMPIONSHIP GAME --"; // message displays here
  // function for finding the first team  (random method has not worked yet )
  function displayAllOne() {
    let teamsArr = findTeams();
    let randTeam1 = teamsArr[Math.floor(Math.random() * teamsArr.length)];
    for (randTeam1 of teamsArr) {
      return randTeam1;
    }
  }

  // function for finding the second team  
  function displayAllTwo() {
    let teamsArr = findTeams();
    let randTeam2 = teamsArr[Math.floor(Math.random() * teamsArr.length)]; 
    for (randTeam2 of teamsArr) {
      if (randTeam2 !== displayAllOne()) return randTeam2;
    }
  }

  // function displayAllTwo() {
  //   let teamsArr = findTeams();
  //   let randTeam2 =
  //     teamsArr[Math.floor(Math.random() * (1 + teamsArr.length - 1))];
  //   for (randTeam2 of teamsArr) {
  //     if (randTeam2 !== displayAllOne()) return randTeam2;
  //   }
  // }

  // function displayAllOne() {
  //   let teamsArr = findTeams();
  //   let randTeam1 = teamsArr[Math.floor(Math.random() * teamsArr.length) + 1];
  //   for (randTeam1 of teamsArr) {
  //     return randTeam1;
  //   }
  // }

  // function displayAllTwo() {
  //   let teamsArr = findTeams();
  //   let randTeam2 = teamsArr[Math.floor(Math.random() * teamsArr.length) + 1];
  //   if (randTeam2 !== displayAllOne()) {
  //     return randTeam2;
  //   }
  // }

  displayMeg += "\n";
  // displaying message in a string includes two teams' name and mascot, and play date and time
  displayMeg += `${displayAllOne().name} ${displayAllOne().mascot} is playing ${
    displayAllTwo().name
  } ${displayAllTwo().mascot} on ${formattedDate} at 7:30 PM CST.`;
  displayMeg += "\n";
  return displayMeg;
}

// export functions to index.js
module.exports = {
  displayTeams,
  getGame,
};