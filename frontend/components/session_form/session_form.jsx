import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      formType: 'signIn'
    };
    this.toggleFormType = this.toggleFormType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLoginIn = this.guestLoginIn.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.state.formType === 'signIn') {
      this.props.login({user});
    } else {
      this.props.signup({user});
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  toggleFormType() {

    if (this.state.formType === 'signIn') {
      this.setState({formType: 'signUp'});
    } else {
      this.setState({formType: 'signIn'});
    }
  }

  guestLoginIn() {
    const user = {username:'guest', password:'password'}
    this.props.login({user})
  }

  guestLoginInButton() {
    return (
      <button
        className='session-form-toggle'
        onClick={this.guestLoginIn}
        >Guest</button>
    );
  }

  renderErrors () {
    return (
      <ul className='form-errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li> ))}
      </ul>
    );
  }

  signInForm () {
    return(
      <div className="login-form-box">
        <div className='modal-title'>
          <h3 className='logo'>Thinkpiece</h3>
        </div>

        <div className='modal-form'>
        <h3>Sign In</h3>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit} >
          <div className='form-inputs'>
          <label> Username
            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.update('username')}
              className='login-input'
               /><br />
          </label>
          <label> Password
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
              className='login-input'
            /><br />
          </label>
          </div>
          <input className='sign-in-button' type="submit"/>
        </form>
        <button
          className='sign-in-button'
          onClick={this.guestLoginIn}
          >Guest Login</button>
        <p>Don't have an account? <button
            className='session-form-toggle'
            onClick={this.toggleFormType}
          >Sign Up</button></p>
        </div>
      </div>
    )
  }

  signUpForm () {
    return(
      <div>
        <div className='modal-title'>
          <h3 className='logo'>Thinkpiece</h3>
        </div>
        <div className='modal-form'>
        <h3>Sign Up</h3>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className='form-inputs'>
          <label> Email
            <input
              placeholder='yourname@email.com'
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className='login-input'
               /><br />
          </label>
          <label> Username
            <input
              placeholder='Username'
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className='login-input'
               /><br />
          </label>
          <label> Password
            <input
              placeholder='Password'
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className='login-input'
            /><br />
          </label>
        </div>
          <input className='sign-in-button' type="submit"/>
        </form>
        <p>Already have an account? <button
            className='session-form-toggle'
            onClick={this.toggleFormType}
          >Sign In</button></p>
      </div>
    </div>
    )
  }

  render() {
    if (this.state.formType === 'signIn') {
      return this.signInForm()
    } else {
      return this.signUpForm()
    }

  }
}
export default SessionForm;
