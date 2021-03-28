import addItemToCart from './cart-utils'

const initialState = {
  hidden: true,
  items:[]
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) { 
    case "TOGGLE_CART_DROPDOWN":
      return ({
        ...state,
        hidden: !state.hidden
      });
    case "ADD_ITEM_TO_CART":
      return ({
        ...state,
        items: addItemToCart(state.items, action.payload)
      })
    default:
      return state;
  }
}

export default cartReducer