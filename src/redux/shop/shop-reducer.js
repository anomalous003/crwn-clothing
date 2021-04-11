const initialState = ({
  collections: null
})

const shopReducer = (state = initialState, {  type, payload }) => {
  switch (type) {
    case "UPDATE_COLLECTIONS":
      return ({
        ...state,
        collections: payload
      })
    default:
      return state;
  }
}

export default shopReducer