import { createSelector } from 'reselect';

// GET cart state
// input Selector
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart], // collection of input selector
  (cart) => cart.cartItems // function that returns the value we want from the selector
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity , 0
      )

)

export const selectCartItemsSubtotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce( 
      (accumulatedPrice, cartItem) =>  
        accumulatedPrice + (cartItem.quantity * cartItem.price) ,0
      )
)