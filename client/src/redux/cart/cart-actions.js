import cartActionTypes from './cart-action.types'

export const addItemToCart = item => ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item
})

export const removeItemFromCart = item => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
})

export const clearItem = item => ({
    type: cartActionTypes.CLEAR_ITEM,
    payload: item
})

export const toggleCartDropdown = () => ({
    type: cartActionTypes.TOGGLE_CART_DROPDOWN
})

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
})

export const updateFirestoreCartItems = cartItems => ({
    type: cartActionTypes.UPDATE_FIRESTORE_CART_ITEMS,
    payload: cartItems
})

export const getCartItemsFromFirestore = cartItems => ({
    type: cartActionTypes.GET_CART_ITEMS_FROM_FIRESTORE,
    payload: cartItems
})