import { connect } from 'react-redux';
import Team from '../components/team';

const mapStateToProps = function (state) {
  const { teams } = state.league;
  return { teams };
};

export default connect(
  mapStateToProps,
)(Team);
