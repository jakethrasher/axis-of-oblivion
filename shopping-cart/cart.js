import { findById } from '../utils.js';
import { renderLineItems } from './render-line-items.js';
import { records } from '../records.js';
import { calcOrderTotal } from '../utils.js';
import { clearCart, getCart } from '../cart-utils.js';


const cartTable = document.querySelector('table');

const cart = getCart();
if (!cart[0]) orderButton.disabled = true;

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

const blankTd1 = document.createElement('td');
const blankTd2 = document.createElement('td');

const totalPriceTd = document.createElement('td');
totalPriceTd.style.fontSize = '1.2rem';
totalPriceTd.style.fontWeight = 'bold';
totalPriceTd.textContent = `$${totalPrice}`;

totalRow.append(orderTotalTd, blankTd1, blankTd2, totalPriceTd);

cartTable.append(totalRow);

const orderButton = document.querySelector('button');
orderButton.addEventListener('click', ()=>{
    alert(JSON.stringify(cart, true, 2));
    clearCart();
    location.reload();
});
