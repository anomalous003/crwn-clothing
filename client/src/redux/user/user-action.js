import userActionTypes from './user-action.types'

// Check session
export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION
})

// google sign-in
export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
})

// email sign-in
export const emailSignInStart = emailAndPassword => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
})

// sign-in success-failure
export const signInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
})

export const signInFailure = error => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error
})

// sign-out success-failure
export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
})

export const signOutFailure = error => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error
})

// Sign-Up success-failure
export const signUpStart = signUpInfo => ({
  type: userActionTypes.SIGN_UP_START,
  payload: signUpInfo
})

export const signUpSuccess = emailAndPassword => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: emailAndPassword
})


export const signUpFailure = error => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error
})