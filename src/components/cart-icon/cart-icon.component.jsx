import React from 'react';
import { connect } from 'react-redux';

import { toggleCart } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';
// import { ReactComponent as ShoppingIcon } from '../../images/shopping-bag.svg';
import { ReactComponent as ShoppingBagIcon } from '../../images/shopping-bag-icon.svg';


const CartIcon = ({ toggleCart }) => (
    <span className="cart-container" onClick={toggleCart}>
      <span className="cart-icon">
        <ShoppingBagIcon className="shopping-icon"/>
        <span className="item-count">0</span>
      </span>
    </span>
);

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(null, mapDispatchToProps)(CartIcon);