import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItemsSubtotal } from '../../redux/cart/cart.selectors';
import { selectCartItems} from '../../redux/cart/cart.selectors';
import { toggleCart } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const Cart = ({ cartItems, subTotal, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ? 
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        :
          <h3 className="empty-cart">No items in your cart</h3>
      }
    </div>
    <div className="dropdown-bottom">
      <p>Subtotal: <span className="total-price">${ subTotal }</span></p>
      <CustomButton 
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCart());
          }
        } 
      >
        Checkout
      </CustomButton>
    </div>
  </div>
)

// Get State
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
//   subTotal: cartItems.reduce( (accumulatedPrice, cartItem) =>  accumulatedPrice + (cartItem.quantity * cartItem.price) ,0)
// });

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems,
  subTotal: selectCartItemsSubtotal
});

export default withRouter(connect(mapStateToProps)(Cart));