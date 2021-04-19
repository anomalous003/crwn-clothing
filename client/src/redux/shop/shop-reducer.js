import actionTypes from './shop-action-types'

const initialState = ({
  collections: null,
  isFetching: false,
  errorMessage: undefined
})

const shopReducer = (state = initialState, { type, payload }) => {
  
  switch (type) {
    case actionTypes.FETCH_COLLECTIONS_START:
      return ({
        ...state,
        isFetching: true
      })
    case actionTypes.FETCH_COLLECTIONS_START_ASYNC:
      return ({
        ...state,
        collections: payload,
        isFetching: false
      })
    case actionTypes.FETCH_COLLECTIONS_ERROR:
      return ({
        ...state,
        errorMessage: payload,
        isFetching: false
      })
    default:
      return state;
  }
}

export default shopReducer