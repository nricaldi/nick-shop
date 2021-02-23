import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const Cart = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <div>item 1</div>
            <div>item 1</div>
            <div>item 1</div>
            <div>item 1</div>
            <div>item 1</div>
        </div>
        <CustomButton>Checkout</CustomButton>
    </div>
)

export default Cart