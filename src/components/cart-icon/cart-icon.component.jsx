import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';
// import { ReactComponent as ShoppingIcon } from '../../images/shopping-bag.svg';
import { ReactComponent as ShoppingBagIcon } from '../../images/shopping-bag-icon.svg';


const CartIcon = ({ toggleCart, itemCount }) => (
    <span className="cart-container" onClick={toggleCart}>
      <span className="cart-icon">
        <ShoppingBagIcon className="shopping-icon"/>
        <span className="item-count">{ itemCount }</span>
      </span>
    </span>
);

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity , 0)
// })

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
})



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);