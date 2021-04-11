import styled, { css } from 'styled-components'

const button = css`
  background-color: black;
  color: white;
  padding: 0 35px 0 35px;
`

const signIn = css`
  color: white;
  background-color: black;
  padding: 0 35px 0 35px;
  border-radius: 30px;
`

const signUp = css`
  color: white;
  background-color: black;
  padding: 0 166px;
  border-radius: 30px;
`

const googleSignIn = css `
  background-color: #4285f4;
  color: white;
  border-radius: 30px;
  padding: 0 35px 0 35px;

    &:hover {
    background-color: #357ae8;
    border: none;
    color:white 
    }
`

const inverted = css`
  background-color: white;
  color: black;
  border: none;
  padding: 0 35px 0 35px;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`

const getButtonStyles = props => {
  if (props.googleSignIn) {
    return googleSignIn;
  }
  else if (props.signIn) {
    return signIn;
  }
  else if (props.signUp) {
    return signUp;
  }
  else if (props.inverted) {
    return inverted;
  }
  else {
    return button
  }
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height:50px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;  
  display: flex;
  justify-content: center;
  border-radius: 2px;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }

    &:focus {
      outline: none;
    }

  ${getButtonStyles}
`