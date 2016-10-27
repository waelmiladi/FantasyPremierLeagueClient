function getTeams(client) {
  return (dispatch) => {
    dispatch(getTeamsRequest());
    client.getTeams().then((data) => {
      dispatch(getTeamsSuccess(data.teams));
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
