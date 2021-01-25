import { renderProduct } from './render-product.js';
// import { records } from '../records.js';
import { seedAndGetProducts } from '../utils.js';

seedAndGetProducts();

const productsInStorage = seedAndGetProducts();

const list = document.getElementById('list');

for (let record of productsInStorage){
    const recordElement = renderProduct(record);

    list.append(recordElement);
}

