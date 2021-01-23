import { renderProduct } from './render-product.js';
// import { records } from '../records.js';
import { getProducts } from '../utils.js';

getProducts();

const productsInStorage = getProducts();

const list = document.getElementById('list');

for (let record of productsInStorage){
    const recordElement = renderProduct(record);

    list.append(recordElement);
}

