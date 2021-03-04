import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;


  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name}/>
      </div>
      <p className="name">{name}</p>
      <p className="quantity">
        <span className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</span>
        <span className="value"> {quantity} </span>
        <span className="arrow" onClick={() => addItem(cartItem)}>&#10095;</span>
      </p>
      <p className="price">${price}</p>
      <div 
        className="remove-button"
        onClick={() => clearItem(cartItem)}
        >
        &#10005;
      </div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);