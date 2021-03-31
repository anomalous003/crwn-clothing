import {addItemToCart} from './cart-utils'

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
    case "REMOVE_ITEM_FROM_CART":
      return ({
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      })
    default:
      return state;
  }
}

export default cartReducer