import React, { PropTypes } from 'react';
import TeamBadge from './team-badge';
import '../stylesheets/team.css';

class Team extends React.Component {
  renderProfile() {
    const { identifier, name, position } = this.props.team;
    return (
      <div className="row">
        <div className="col s12">
          <div className="card-panel">
            <div className="row team-profile-row">
              <div className="col s3">
                <TeamBadge identifier={identifier} className="responsive-img" />
              </div>
              <div className="col s9">
                <div className="row team-profile-row">
                  <div className="col s12">
                    <h2 className="team-profile-name left">{name}</h2>
                    <div className="team-profile-position right">{position}</div>
                  </div>
                </div>
                <div className="row team-profile-row">
                  <div className="col s12">
                    Text
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return this.renderProfile();
  }
}

Team.propTypes = {
  team: PropTypes.shape({
    identifier: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.number,
  }),
};

export default Team;
