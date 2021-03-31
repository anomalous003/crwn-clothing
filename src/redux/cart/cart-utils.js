export const addItemToCart = (cartItems, addItem) => {
  const existingItem = cartItems.find(item => item.id === addItem.id);

  if (existingItem) {
    return cartItems.map(item => (
      item.id === addItem.id ? ({
        ...item,
        quantity: item.quantity + 1
      }) : item
    ))
  }

  return [...cartItems, {
    ...addItem,
    quantity: 1
  }]
}

