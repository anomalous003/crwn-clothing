import './sign-in.styles.scss'

import React, { Component } from "react";

import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button-component'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user-action'

import { connect } from 'react-redux'

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;
    const { signInWithEmail } = this.props;
    
    signInWithEmail(email, password);

    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { signInWithGoogle } = this.props
    return (
      <div className='sign-in'>
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type='email'
            label='Email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type='password'
            label='Password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton signIn type="submit">Sign in</CustomButton>
            <CustomButton googleSignIn type="button" onClick={signInWithGoogle}>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>

    )
  }
}

const mapDispatchToProps = dispatch => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signInWithEmail: (email, password) => dispatch(emailSignInStart({
    email,
    password
  }))
})

export default connect(null, mapDispatchToProps)(SignIn);
