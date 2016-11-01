import { connect } from 'react-redux';
import Team from '../components/team';

const mapStateToProps = function (state) {
  const { team } = state;
  return { team };
};

export default connect(
  mapStateToProps,
)(Team);
