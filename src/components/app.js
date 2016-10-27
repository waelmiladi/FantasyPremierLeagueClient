import React, { PropTypes } from 'react';

class App extends React.PureComponent {
  renderTeams() {
    return (
      <div>
        {this.props.teams.map(team => <div key={team.id}>{team.name}</div>)}
      </div>
    );
  }
  render() {
    return this.props.teams ? this.renderTeams() : null;
  }
}

App.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

export default App;
