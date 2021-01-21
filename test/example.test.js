// IMPORT MODULES under test here:
import { renderProduct } from '../products/render-product.js';
import { calcItemTotal, findById } from '../utils.js';
import { records } from '../records.js';
import { renderLineItems } from '../shopping-cart/render-line-items.js';

const test = QUnit.test;
test('it should return quantity * price', (expect) => {
    //Arrange

    // Set up your arguments and expectations
    const expected = 80;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(2, 40);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should create a table row when given a record object', (expect) => {
    //Arrange
    const cart = {
        id: 2,
        quantity: 2
    };
    // Set up your arguments and expectations
    const expected = '<tr><td>Goldi Timeless</td><td>2</td><td>50</td></tr>';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderLineItems(cart, findById(2, records));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
test('it should take in 5 and return item', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 5,
        artist: 'Meat Beat Manifesto',
        album: '99%',
        image: 'meatbeatmanifesto.png',
        condition: 'Near Mint',
        genre: '90\'s electronic',
        price: 35

    };

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(5, records);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
test('when given an object returns li', (expect) => {
    //Arrange
    const fourHero = {
        id: 1,
        artist: '4hero',
        album: 'Parallel Universe',
        image: '4hero.png',
        condition: 'Excellent',
        genre: '90\'s electronic',
        price: 20

    };
    // Set up your arguments and expectations
    const expected = `<li class="record-item"><img src="../assets/4hero.png"><h3 class="artist-title">Artist: 4hero</h3><h4 class="album-title">Album title: Parallel Universe</h4><p class="condition">Condition: Excellent</p><p class="price">$20.00</p><button class="button" id="1">Add to cart</button></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(fourHero);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
