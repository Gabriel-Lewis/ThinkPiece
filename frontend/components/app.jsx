import React, { Component } from 'react';

import HeaderContainer from './header/header_container';
import SignInModal from './modals/sigin_modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
  }

  getChildContext() {
    return {
      isOpen: this.state.modalOpen,
      open: this.onModalOpen,
      close: this.onModalClose,
    };
  }

  onModalOpen = () => {
    this.setState({ modalOpen: true });
  }

  onModalClose = () => {
    this.setState({ modalOpen: false });
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <HeaderContainer
          open={this.onModalOpen}
          logout={this.handleLogout}
          location={this.props.location}
          currentUser={this.props.currentUser}
        />
        <SignInModal
          isOpen={this.state.modalOpen}
          close={this.onModalClose}
        />
        {this.props.children}
      </div>
    );
  }
}

App.childContextTypes = {
  isOpen: React.PropTypes.bool,
  open: React.PropTypes.func,
  close: React.PropTypes.func,
};

export default App;
