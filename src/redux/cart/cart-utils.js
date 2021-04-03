export const addItemToCart = (cartItems, addItem) => {
  const existingItem = cartItems.find(item => item.id === addItem.id);

  if (existingItem) {
    return cartItems.map(cartItem => (
      cartItem.id === addItem.id ? ({
        ...cartItem,
        quantity: cartItem.quantity + 1
      }): cartItem
    ))
  }

  return [...cartItems, {
    ...addItem,
    quantity: 1
  }]
}

export const clearItem = (cartItems, itemToClear) => {
  const existingItem = cartItems.find(carItem => carItem.id === itemToClear.id)

  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToClear.id)
  }

  return cartItems.map(cartItem => (
    cartItem.id === itemToClear.id ? ({
      ...cartItem,
      quantity: cartItem.quantity - 1
    }): cartItem
  ))
}