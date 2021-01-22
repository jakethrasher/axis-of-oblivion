const CART = 'CART'; // Magic String
const defaultEmptyCart = [];
import { findById } from './utils.js';

export function getCart() {
    const stringyCart = localStorage.getItem(CART);
    //if there is a cart in local storage, grab it
    if (stringyCart) {

        const parsedCart = JSON.parse(stringyCart);

        return parsedCart;
    } else {
        const stringyDefaultCart = JSON.stringify(defaultEmptyCart);
        localStorage.setItem(CART, stringyDefaultCart);
        //give user an empty cart
        return defaultEmptyCart;
    }
}
export function setCart(cart) {
    const stringyCart = JSON.stringify(cart);

    localStorage.setItem(CART, stringyCart);
}
export function clearCart() {
    const stringyDefaultCart = JSON.stringify(defaultEmptyCart);

    localStorage.setItem(CART, stringyDefaultCart);
}

export function addToCart(id) {
    const cart = getCart();

    const cartItem = findById(id, cart);
    //is newItem already in the cart? if so..
    if (cartItem) {
        cartItem.quantity++;
    } else {
        //create a new item with a quantity of 1
        const newItem = {
            id: id,
            quantity: 1
        };
        cart.push(newItem);
    }
    setCart(cart);
}
