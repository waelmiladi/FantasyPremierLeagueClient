const initialState = {};

module.exports = function (state = initialState, action) {
  console.log(state);
  switch (action.type) {
    default:
      return state;
  }
};
