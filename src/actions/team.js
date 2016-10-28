function showTeam(client, identifier) {
  return (dispatch) => {
    client.getTeam(identifier).then((team) => {
      dispatch(getTeamSuccess(team));
    });
  };
}

function getTeamSuccess(team) {
  return {
    type: 'GET_TEAM_SUCCESS',
    team,
  };
}

module.exports = {
  showTeam,
};
