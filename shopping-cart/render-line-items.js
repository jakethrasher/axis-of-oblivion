import { calcItemTotal } from '../utils.js';

export function renderLineItems(cartItem, record) {
    const tableRow = document.createElement('tr');

    const tdArtist = document.createElement('td');
    tdArtist.textContent = record.artist;
    tableRow.append(tdArtist);

    const tdAlbum = document.createElement('td');
    tdAlbum.textContent = record.album;
    tableRow.append(tdAlbum);

    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = cartItem.quantity;
    tableRow.append(tdQuantity);


    const tdPrice = document.createElement('td');
    tdPrice.textContent = `$${calcItemTotal(cartItem.quantity, record.price)}`;
    tableRow.append(tdPrice);

    return tableRow;
}
