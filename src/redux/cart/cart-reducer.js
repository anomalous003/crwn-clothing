import addItemToCart from './cart-utils'

const initialState = {
  hidden: true,
  cartItems: []
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
        cartItems: addItemToCart(state.cartItems, action.payload)
      })
    default:
      return state;
  }
}

export default cartReducer