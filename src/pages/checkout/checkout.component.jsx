import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartItemsSubtotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component'; 

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, subTotal }) => (
  <div className="container">
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => 
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
      }

      <h2 className="total">Total: ${subTotal}</h2>


    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  subTotal: selectCartItemsSubtotal
})

export default connect(mapStateToProps)(CheckoutPage); 