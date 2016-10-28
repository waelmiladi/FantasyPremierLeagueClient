function getTeams(client) {
  return (dispatch) => {
    dispatch(getTeamsRequest());
    client.getTeams().then((teams) => {
      dispatch(getTeamsSuccess(teams));
    });
  };
}

function getTeamsRequest() {
  return {
    type: 'GET_TEAMS_REQUEST',
  };
}

function getTeamsSuccess(teams) {
  return {
    type: 'GET_TEAMS_SUCCESS',
    teams,
  };
}

module.exports = {
  getTeams,
};
