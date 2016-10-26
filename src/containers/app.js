import { connect } from 'react-redux';
import App from '../components/app';

const mapStateToProps = function (state) {
  return state;
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
