const PRODUCT = 'PRODUCT';
import { records } from './records.js';
export function findById(id, array) {

    for (let item of array) {

        if (item.id === id) {

            return item;
        }
    }
}

export function calcItemTotal(quantity, price){
    return quantity * price;
}
export function calcOrderTotal(cart, records){

    let orderTotal = 0;

    for (let item of cart){
        const product = findById(item.id, records);
        let itemTotal = calcItemTotal(item.quantity, product.price);
        orderTotal = orderTotal + itemTotal;
    }
    return orderTotal;
}

export function setProduct(productsArray) {
    const stringyProducts = JSON.stringify(productsArray);

    localStorage.setItem(PRODUCT, stringyProducts);
}

export function getProducts() {
    const stringyProducts = localStorage.getItem(PRODUCT);
    //if there is a cart in local storage, grab it
    if (stringyProducts) {

        const parsedCart = JSON.parse(stringyProducts);

        return parsedCart;
    } else {
        const stringyDefaultCart = JSON.stringify(records);
        localStorage.setItem(PRODUCT, stringyDefaultCart);
        
        return records;
    }
}
