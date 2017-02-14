import React from 'react';
import Modal from 'react-modal';

import SessionFormContainer from '../session_form/session_form_container';
import SettingsModal from '../modals/settings_modal';
import SearchBar from '../search/search_bar';
import SignInModal from '../modals/sigin_modal';

import { Link, withRouter, Router, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    };
    this.onModalOpen = this.onModalOpen.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  onModalOpen() {
    this.setState({modalOpen: true});
  }

  onModalClose() {
    this.setState({modalOpen: false});
  }

  handleLogout() {
    this.props.logout()
  }

  loggedoutForm() {
      return (
        <div className='header'>
          <nav>
            <Link to='/'><h3 className='logo'>Thinkpiece</h3></Link>
            <button
              onClick={this.onModalOpen}
              >Sign In / Sign Up</button>
            <SignInModal
              isOpen={this.state.modalOpen}
              close={this.onModalClose}
               />
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
                handleLogout={this.handleLogout}
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
