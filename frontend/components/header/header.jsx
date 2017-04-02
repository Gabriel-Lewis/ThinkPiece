import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';

import SettingsModal from '../modals/settings_modal';
import SearchBar from '../search/search_bar';

class Header extends Component {

  loggedoutForm() {
    return (
      <div className="header">
        <nav>
          <Link to="/"><h3 className="logo">Thinkpiece</h3></Link>
          <button
            onClick={this.props.open}
          >Sign In / Sign Up</button>
        </nav>
      </div>
    );
  }

  loggedInForm() {
    return (
      <div className="header">
        <nav>
          <Link to="/"><h3 className="logo">Thinkpiece</h3></Link>
          <div className="header-settings">
            <Link className="medium-green-button" to="/new-story">Write a story</Link>
            <SearchBar />
            <SettingsModal
              handleLogout={this.props.logout}
              currentUser={this.props.currentUser}
            />
          </div>
        </nav>
      </div>
    );
  }

  render() {
    if (this.props.loggedIn) {
      return this.loggedInForm();
    }
    return this.loggedoutForm();
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  open: PropTypes.func,
  logout: PropTypes.func,
  currentUser: PropTypes.object,
};

export default withRouter(Header);
