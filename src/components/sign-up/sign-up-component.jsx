import React, { Component } from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/coustom-button-component'
import './sign-up.styles.scss'

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

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      console.log(user);
      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        match: true
      })
    } catch (error) {
      console.log(error)
    }

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
        
        {!this.state.match ? 
        (<div className='not-match'>Password didn't match</div>): null}

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
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
