const initialState = {};

module.exports = function (state = initialState, action) {
  switch (action.type) {
    case 'GET_TEAMS_SUCCESS':
      return Object.assign({}, state, { teams: action.teams });
    default:
      return state;
  }
};
