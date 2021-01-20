// IMPORT MODULES under test here:
import { renderProduct } from '../products/render-product.js';

const test = QUnit.test;

test('when given an object returns li', (expect) => {
    //Arrange
    const fourHero = {
        id: 1,
        artist: '4hero',
        album: 'Parallel Universe',
        image: '4hero.png',
        condition:'Excellent',
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
