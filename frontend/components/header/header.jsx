import React from 'react';
import Modal from 'react-modal';

import SettingsModal from '../modals/settings_modal';
import SearchBar from '../search/search_bar';

import { Link, withRouter, Router, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  loggedoutForm() {
      return (
        <div className='header'>
          <nav>
            <Link to='/'><h3 className='logo'>Thinkpiece</h3></Link>
            <button
              onClick={this.props.open}
              >Sign In / Sign Up</button>
            </nav>
        </div>
      )
  }

  loggedInForm() {
      return (
        <div className='header'>
          <nav>
            <Link to='/'><h3 className='logo'>Thinkpiece</h3></Link>
            <div className='header-settings'>
              <Link className='medium-green-button' to='/new-story'>Write a story</Link>
              <SearchBar />
              <SettingsModal
                handleLogout={this.props.logout}
                currentUser={this.props.currentUser}
              />
            </div>
          </nav>
        </div>
      )
  }

  render() {
    if (this.props.loggedIn) {
      return this.loggedInForm()
    } else {
      return this.loggedoutForm()
    }
  }
};

export default withRouter(Header);
