import {addItemToCart, clearItem} from './cart-utils'
import cartActionTypes from './cart-action.types'

const initialState = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) { 
    case cartActionTypes.TOGGLE_CART_DROPDOWN:
      return ({
        ...state,
        hidden: !state.hidden
      });
    case cartActionTypes.ADD_ITEM_TO_CART:
      return ({
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      })
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return ({
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload.id)
      })
    case cartActionTypes.CLEAR_ITEM:
      return ({
        ...state,
        cartItems: clearItem(state.cartItems, payload)
      })
    case cartActionTypes.CLEAR_CART:
      return ({
        ...state,
        cartItems: []
      })
    case cartActionTypes.GET_CART_ITEMS_FROM_FIRESTORE:
      return ({
        ...state,
        cartItems: payload
      })
    default:
      return state;
  }
}

export default cartReducer