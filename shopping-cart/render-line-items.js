import { calcItemTotal } from '../utils.js';

export function renderLineItems(cartItem, record) {
    const tableRow = document.createElement('tr');

    const tdRecord = document.createElement('td');
    tdRecord.textContent = `${record.artist} "${record.album}"`;
    tableRow.append(tdRecord);

    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = cartItem.quantity;
    tableRow.append(tdQuantity);


    const tdPrice = document.createElement('td');
    tdPrice.textContent = `$${calcItemTotal(cartItem.quantity, record.price)}`;
    tableRow.append(tdPrice);


    return tableRow;
}
