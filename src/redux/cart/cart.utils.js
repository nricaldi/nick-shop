export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        // .map bc it will return a new array
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }
    else return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    // my code
    // if (existingCartItem) {
    //     if (existingCartItem.quantity > 1) {
    //         return cartItems.map(cartItem => 
    //             cartItem.id === cartItemToRemove.id
    //             ? { ...cartItem, quantity: cartItem.quantity - 1 }
    //             : cartItem
    //         )
    //     } else {
    //         return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    //     }
    // }

    // more effecient
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
}