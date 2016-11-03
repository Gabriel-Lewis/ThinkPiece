import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container'

var style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0,0,0,.6)',
  },
  content : {
    position        : 'fixed',
    margin          : '0 auto',
    height          : '520px',
    maxWidth        : '520px',
    border          : 'none',
    backgroundColor : 'white',
    boxShadow       : '0 2px 6px 0 rgba(0,0,0,.44)',
    borderRadius    : '3px',
    padding         : '0',
    // text-align      : 'center'
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.onModalClose = this.onModalClose.bind(this);

  }

  handleClick() {
    this.setState({modalOpen: true});
  }

  onModalClose() {
    this.setState({modalOpen: false});
  }


  loggedoutForm() {
      return (
        <div className='header'>
          <nav>
            <h1>ThinkPiece</h1>
            <button
              onClick={this.handleClick}
              >Sign In / Sign Up</button>

              <Modal
                style={style}
                isOpen={this.state.modalOpen}
                onRequestClose={this.onModalClose}
                >
                <SessionFormContainer close={this.onModalClose} />
                  <button
                    onClick={this.onModalClose}
                    className='modal-close'
                    >×</button>
              </Modal>
            </nav>
          </div>
      )
  }

  handleLogout() {
    this.props.logout()
  }

  loggedInForm() {
      return (
        <div className='header'>
          <nav>
            <h1>ThinkPiece</h1>
            <h1>{this.props.currentUser.username}</h1>
            <button onClick={this.handleLogout}>Logout</button>
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

export default Header;
