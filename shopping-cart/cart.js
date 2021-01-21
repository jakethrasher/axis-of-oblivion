import { findById, calcItemTotal } from '../utils.js';
import { renderLineItems } from './render-line-items.js';
import { records } from '../records.js';
import { cart } from './cart-data.js';
import { calcOrderTotal } from '../utils.js';

const cartTable = document.querySelector('table');

for (let cartItem of cart){
    const record = findById(cartItem.id, records);
    const tableRow = renderLineItems(cartItem, record);
    cartTable.append(tableRow);
}

const totalPrice = calcOrderTotal(cart, records);

const totalRow = document.createElement('tr');

const orderTotalTd = document.createElement('td');
orderTotalTd.style.fontSize = '1.2rem';
orderTotalTd.style.fontWeight = 'bold';
orderTotalTd.textContent = `Order total:`;

const ghostTd2 = document.createElement('td');

const totalPriceTd = document.createElement('td');
totalPriceTd.style.fontSize = '1.2rem';
totalPriceTd.style.fontWeight = 'bold';
totalPriceTd.textContent = `$${totalPrice}`;

totalRow.append(orderTotalTd, ghostTd2, totalPriceTd);

cartTable.append(totalRow);
