import userActionTypes from './user-action.types'

const initialState = {
  currentUser: null,
  error: null
}

export const userReducer = (state = initialState, { type,payload}) => {
  switch (type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return ({
        ...state,
        currentUser: payload,
        error: null
      });
    case userActionTypes.SIGN_OUT_SUCCESS:
      return ({
        ...state,
        currentUser: null
      })
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return ({
        ...state,
        error: payload
      })
    default:
      return state;
  }
}

export default userReducer;