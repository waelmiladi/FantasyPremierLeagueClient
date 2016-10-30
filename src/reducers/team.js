const initialState = {};

module.exports = function (state = initialState, action) {
  switch (action.type) {
    case 'GET_TEAM_REQUEST':
      return Object.assign({}, state, { identifier: action.identifier });
    case 'GET_TEAM_SUCCESS':
      return Object.assign({}, state, action.team);
    default:
      return state;
  }
};
