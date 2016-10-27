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
            form
          }
        }
      }
    }`,
  }).then((response) => {
    return response.json();
  });
};

module.exports = {
  getTeams,
};
