import { connect } from 'react-redux';
import League from '../components/league';

const mapStateToProps = function (state) {
  const { teams } = state.league;
  return { teams };
};

export default connect(
  mapStateToProps,
)(League);
