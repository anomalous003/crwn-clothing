import React, { Component } from 'react'

import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button-component'
import './sign-up.styles.scss'

import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user-action'

export class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      match: true
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({
        password:'',
        confirmPassword: '',
        match:false
      })

      setInterval(() => {
        this.setState({
          match:true
        })
      }, 2000);
      return;
    }
    signUpStart(email, password, displayName)

  }

  handleChange = event => {
    const { name, value } = event.target;
    
    this.setState({
      [name]:value
    })
  }

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with email and password</span>
        
        {
          !this.state.match ?
          (<div className='not-match'>*Password didn't match</div>)
          : null
        }

        <form onSubmit={this.handleSubmit}>
          <FormInput
          type='text'
          name='displayName'
          label='Name'
          value = {this.state.displayName}
          handleChange={this.handleChange}
          required
          />
          <FormInput
          type='email'
          name='email'
          label='Email'
          value = {this.state.email}
          handleChange={this.handleChange}
          required
          />
          <FormInput
          type='password'
          name='password'
          label='password'
          value = {this.state.password}
          handleChange={this.handleChange}
          required
          />
          <FormInput
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          value = {this.state.confirmPassword}
          handleChange={this.handleChange}
          required
          />
          <CustomButton signUp type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) => dispatch(signUpStart({ email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp)