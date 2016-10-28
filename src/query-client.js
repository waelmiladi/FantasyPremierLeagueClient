const url = 'http://localhost:8080/';

const getTeams = () => {
  return fetch(url, {
    method: 'POST',
    body: `{
      league {
        teams {
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
  };
}

module.exports = {
  getTeams,
};
