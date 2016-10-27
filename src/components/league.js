import React, { PropTypes } from 'react';
import '../stylesheets/league.css';

const columns = [
  { property: 'position', displayName: 'Pos', sortable: false },
  { property: 'name', displayName: 'Name', sortable: false },
  { property: 'wins', displayName: 'W', sortable: true },
  { property: 'draws', displayName: 'D', sortable: true },
  { property: 'losses', displayName: 'L', sortable: true },
  { property: 'goalsScored', displayName: 'GF', sortable: true },
  { property: 'goalsConceded', displayName: 'GA', sortable: true },
  { property: 'goalDifference', displayName: 'GD', sortable: true },
  { property: 'points', displayName: 'Points', sortable: true },
];

const badgeClass = teamName =>
  teamName.toLowerCase().replace(' ', '-');

class League extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sortProperty: 'points',
      sortAscending: false,
    };
  }
  sortedTeams() {
    const { sortProperty, sortAscending } = this.state;
    return this.props.teams.sort((a, b) => {
      const propertyA = a[sortProperty];
      const propertyB = b[sortProperty];
      return sortAscending ? propertyA - propertyB : propertyB - propertyA;
    });
  }
  handleSort(property) {
    const { sortProperty, sortAscending } = this.state;
    const isAscending = property === sortProperty ? !sortAscending : false;
    this.setState({
      sortProperty: property,
      sortAscending: isAscending,
    });
  }
  renderTeam(team) {
    return (
      <tr key={team.identifier}>
        <td>{team.position}</td>
        <td>
          <span className={`team-badge ${badgeClass(team.name)}`} />
          <span className="team-name">{team.name}</span>
        </td>
        <td>{team.wins}</td>
        <td>{team.draws}</td>
        <td>{team.losses}</td>
        <td>{team.goalsScored}</td>
        <td>{team.goalsConceded}</td>
        <td>{team.goalDifference}</td>
        <td><b>{team.points}</b></td>
      </tr>
    );
  }
  renderColumn(column, index) {
    const { sortable, property, displayName } = column;
    if (!sortable) return <th className="league-header" key={index}>{displayName}</th>;

    const { sortProperty, sortAscending } = this.state;
    const isSelectedSort = property === sortProperty;
    const iconType = sortAscending ? 'expand_less' : 'expand_more';
    return (
      <th key={index} className="league-header sortable" onClick={() => this.handleSort(property)}>
        {displayName}
        {isSelectedSort ?
          <i className="league-sort material-icons tiny">{iconType}</i> : null}
      </th>
    );
  }
  renderHead() {
    return (
      <thead>
        <tr>
          {columns.map((column, key) => this.renderColumn(column, key))}
        </tr>
      </thead>
    );
  }
  render() {
    return (
      <table className="centered">
        {this.renderHead()}
        <tbody>
          {this.sortedTeams() ? this.props.teams.map(this.renderTeam) : null}
        </tbody>
      </table>
    );
  }
}

League.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

export default League;
