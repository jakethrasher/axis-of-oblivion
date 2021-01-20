import { renderProduct } from './render-product.js';
import { records } from './records.js';

const list = document.getElementById('list');

for (let record of records){
    const recordElement = renderProduct(record);

    list.append(recordElement);
}

