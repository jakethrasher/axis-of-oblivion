import { findById, calcItemTotal } from '../utils.js';
import { renderLineItems } from './render-line-items.js';
import { records } from '../records.js';
import { cart } from './cart-data.js';

const cartTable = document.querySelector('table');

for (let item of cart){
    const product = findById(item.id, records);
    renderLineItems(item, product);
    cartTable.append(renderLineItems(item, product));
}
    



