import React from 'react';
import { connect } from 'react-redux'

import { selectCartItemsSubtotal } from '../../redux/cart/cart.selectors';
import { selectCartItems} from '../../redux/cart/cart.selectors'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const Cart = ({ cartItems, subTotal }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      }
    </div>
    <div className="dropdown-bottom">
      <p>Subtotal: <span className="total-price">${ subTotal }</span></p>
      <CustomButton>Checkout</CustomButton>
    </div>
  </div>
)

// Get State
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
//   subTotal: cartItems.reduce( (accumulatedPrice, cartItem) =>  accumulatedPrice + (cartItem.quantity * cartItem.price) ,0)
// });

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  subTotal: selectCartItemsSubtotal(state)
});

export default connect(mapStateToProps)(Cart);