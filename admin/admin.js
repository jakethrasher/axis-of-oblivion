import { seedAndGetProducts, setProduct } from '../utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const productObject = new FormData(form);
    const recordId = productObject.get('id');
    const artistData = productObject.get('artist');
    const albumData = productObject.get('album');
    const imageFileName = productObject.get('image');
    const conditionData = productObject.get('condition');
    const priceData = productObject.get('price');

    const newRecordObject = {
        id: recordId,
        artist: artistData,
        album: albumData,
        image: imageFileName,
        condition: conditionData,
        price: Number(priceData)
    };

    const parsedProducts = seedAndGetProducts();
    //pushing form data into the array
    parsedProducts.push(newRecordObject);
    //stringify and set to local storage using setProduct
    setProduct(parsedProducts);
});