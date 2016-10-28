import React, { PropTypes } from 'react';
import Navbar from './navbar';
import League from './league';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col s12">
            <div className="card-panel">
              {this.props.teams ? <League teams={this.props.teams} /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  teams: PropTypes.array,
};

export default App;
