const getTeams = () => {
  return fetch('http://localhost:8080/fpl', {
    method: 'POST',
    body: '{ teams { id, name } }',
  }).then((response) => {
    return response.json();
  });
};

module.exports = {
  getTeams,
};
