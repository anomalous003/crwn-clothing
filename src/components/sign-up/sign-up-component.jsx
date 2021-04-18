import React, { useState } from 'react'

import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button-component'
import './sign-up.styles.scss'

import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user-action'

const SignUp = ({ signUpStart }) => {

  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    match: true
  })
  
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      setUserCredentials({
        ...userCredentials,
        password:'',
        confirmPassword: '',
        match:false
      })

      setInterval(() => {
        setUserCredentials({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
          match:true
        })
      }, 2000);
      return;
    }
    signUpStart(email, password, displayName)

  }

  const handleChange = event => {
    const { name, value } = event.target;
    
    setUserCredentials({
      ...userCredentials,
      [name]:value
    })
  }

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with email and password</span>
      
      {
        !userCredentials.match ?
        (<div className='not-match'>*Password didn't match</div>)
        : null
      }
  
      <form onSubmit={handleSubmit}>
        <FormInput
        type='text'
        name='displayName'
        label='Name'
        value = {userCredentials.displayName}
        handleChange={handleChange}
        required
        />
        <FormInput
        type='email'
        name='email'
        label='Email'
        value = {userCredentials.email}
        handleChange={handleChange}
        required
        />
        <FormInput
        type='password'
        name='password'
        label='password'
        value = {userCredentials.password}
        handleChange={handleChange}
        required
        />
        <FormInput
        type='password'
        name='confirmPassword'
        label='Confirm Password'
        value = {userCredentials.confirmPassword}
        handleChange={handleChange}
        required
        />
        <CustomButton signUp type='submit'>Sign Up</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) => dispatch(signUpStart({ email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp)