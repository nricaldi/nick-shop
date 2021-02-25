import React from 'react';

import './cart-item.styles.scss'

const CartItem = ({ item: { imageUrl, name, quantity, price } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt={name} />
    <div className="item-details">
      <h4 className="name">{name}</h4>
      <p className="price">{quantity} X ${price}</p>
    </div>
  </div>
)

export default CartItem;