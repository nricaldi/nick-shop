import CartActionTypes from './cart.types';

// Toggle Cart dropdown on and off
export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART
});

// Add item to cart
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});