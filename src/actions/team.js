function showTeam(client, identifier) {
  return (dispatch) => {
    dispatch(getTeamRequest(identifier));
    client.getTeam(identifier).then((team) => {
      dispatch(getTeamSuccess(team));
    });
  };
}

function getTeamRequest(identifier) {
  return {
    type: 'GET_TEAM_REQUEST',
    identifier,
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
