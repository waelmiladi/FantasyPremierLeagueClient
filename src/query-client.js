const url = 'http://localhost:8080/';

const teamFields = `
identifier
name
position
overallStats {
  wins
  draws
  losses
  points
  goalsScored
  goalsConceded
  goalDifference
}
homeStats {
  wins
  draws
  losses
  points
  goalsScored
  goalsConceded
  goalDifference
}
awayStats {
  wins
  draws
  losses
  points
  goalsScored
  goalsConceded
  goalDifference
}`;

const getTeam = (identifier) => {
  return fetch(url, {
    method: 'POST',
    body: `{
      team(identifier: "${identifier}") {
        ${teamFields}
      }
    }`,
  }).then((response) => {
    return response.json().then(data => buildTeam(data.team));
  });
};

const getTeams = () => {
  return fetch(url, {
    method: 'POST',
    body: `{
      league {
        teams {
          ${teamFields}
        }
      }
    }`,
  }).then((response) => {
    return response.json().then(buildTeams);
  });
};

function buildTeams(response) {
  return response.league.teams.map(buildTeam);
}

function buildTeam(response) {
  return {
    identifier: response.identifier,
    name: response.name,
    position: response.position,
    wins: response.overallStats.wins,
    draws: response.overallStats.draws,
    losses: response.overallStats.losses,
    points: response.overallStats.points,
    goalsScored: response.overallStats.goalsScored,
    goalsConceded: response.overallStats.goalsConceded,
    goalDifference: response.overallStats.goalDifference,
    homeStats: response.homeStats,
    awayStats: response.awayStats,
  };
}

module.exports = {
  getTeam,
  getTeams,
};
