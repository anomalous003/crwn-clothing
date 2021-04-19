import './sign-in.styles.scss'

import React, { useState } from "react";

import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button-component'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user-action'

import { connect } from 'react-redux'

const SignIn = ({ signInWithEmail, signInWithGoogle }) => {

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = userCredentials

    signInWithEmail(email, password);

    setUserCredentials({
      ...userCredentials,
      email: '',
      password: ''
    })
  }

  const handleChange = event => {
    const { name, value } = event.target;
    
    setUserCredentials({
      ...userCredentials,
      [name]: value
    })
  }


  return (
    <div className='sign-in'>
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type='email'
          label='Email'
          value={userCredentials.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type='password'
          label='Password'
          value={userCredentials.password}
          handleChange={handleChange}
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


const mapDispatchToProps = dispatch => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signInWithEmail: (email, password) => dispatch(emailSignInStart({
    email,
    password
  }))
})

export default connect(null, mapDispatchToProps)(SignIn);
