import React from 'react';
import HeaderContainer from './header/header_container'
import {withRouter} from 'react-router'
const App = ({children, location}) => (
  <div>
    <HeaderContainer location={location} />
    {children}
  </div>
);

export default App;
