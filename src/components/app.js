import React from 'react';
import Navbar from './navbar';

function App({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default App;
