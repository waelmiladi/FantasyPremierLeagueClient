import { connect } from 'react-redux';
import App from '../components/app';

const mapStateToProps = function (state) {
  const { teams } = state.app;
  return { teams };
};

export default connect(
  mapStateToProps,
)(App);
