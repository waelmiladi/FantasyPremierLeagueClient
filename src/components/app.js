import React, { PropTypes } from 'react';

class App extends React.PureComponent {
  renderTeam(team) {
    const { identifier, position, name, overallStats } = team;
    const { wins, draws, losses, goalsScored, goalsConceded, goalDifference, form } = overallStats;
    return (
      <tr key={identifier}>
        <td>{position}</td>
        <td>{name}</td>
        <td>{wins}</td>
        <td>{draws}</td>
        <td>{losses}</td>
        <td>{goalsScored}</td>
        <td>{goalsConceded}</td>
        <td>{goalDifference}</td>
        <td>{form}</td>
      </tr>
    );
  }
  render() {
    return (
      <div className="row">
        <div className="col s12 m5">
          <div className="card-panel">
            <table>
              <thead>
                <tr>
                  <th data-field="position">Position</th>
                  <th data-field="name">Name</th>
                  <th data-field="wins">W</th>
                  <th data-field="draws">D</th>
                  <th data-field="losses">L</th>
                  <th data-field="goalsScored">GF</th>
                  <th data-field="goalsConceded">GA</th>
                  <th data-field="goalDifference">GD</th>
                  <th data-field="form">Form</th>
                </tr>
              </thead>

              <tbody>
                {this.props.teams ? this.props.teams.map(this.renderTeam) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

export default App;
