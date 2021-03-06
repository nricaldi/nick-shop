import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    // Toggle cart
    case CartActionTypes.TOGGLE_CART: 
      return {
        ...state,
        hidden: !state.hidden
    }
    // Add item to cart
    case CartActionTypes.ADD_ITEM:
      return {
        ...state, 
        cartItems: addItemToCart(state.cartItems, action.payload)
    }
    // Remove item from cart
    case CartActionTypes.REMOVE_ITEM: 
      return {
        ...state, 
        cartItems: removeItemFromCart(state.cartItems, action.payload)
    }
    // Clear item from cart
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
    }
    
    default: 
      return state
  }
}

export default cartReducer;