import React from 'react';

import HeaderContainer from './header/header_container';
import SignInModal from './modals/sigin_modal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
    this.onModalOpen = this.onModalOpen.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  getChildContext() {
    return {
      isOpen: this.state.modalOpen,
      open: this.onModalOpen,
      close: this.onModalClose,
    };
  }

  onModalOpen() {
    this.setState({ modalOpen: true });
  }

  onModalClose() {
    this.setState({ modalOpen: false });
  }

  handleLogout() {
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

App.propTypes = {
  currentUser: React.PropTypes.shape.isRequired,
  location: React.PropTypes.shape.isRequired,
  children: React.PropTypes.element.isRequired,
  logout: React.PropTypes.func.isRequired,
};

App.childContextTypes = {
  isOpen: React.PropTypes.bool,
  open: React.PropTypes.func,
  close: React.PropTypes.func,
};

export default App;
