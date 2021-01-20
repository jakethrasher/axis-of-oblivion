// {
//     id: '4hero',
//     artist: '4hero',
//     album: 'parallel universe',
//     image: '4hero.png',
//     condition:'Excellent',
//     genre: '90\'s electronic',
//     price: 20

// },
export function renderProduct(record){
    const listItem = document.createElement('li');
    listItem.classList.add('record-item');
    
    const albumCover = document.createElement('img');
    albumCover.src = `../assets/${record.image}`;
    listItem.append(albumCover);
    
    const artistName = document.createElement('h3');
    artistName.classList.add('artist-title');
    artistName.textContent = `Artist: ${record.artist}`;
    listItem.append(artistName);

    const albumTitle = document.createElement('h4');
    albumTitle.classList.add('album-title');
    albumTitle.textContent = `Album title:${record.album}`;
    listItem.append(albumTitle);

    const albumCondition = document.createElement('p');
    albumCondition.classList.add('condition');
    albumCondition.textContent = `Condition: ${record.condition}`;
    listItem.append(albumCondition);

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `$${record.price.toFixed(2)}`;
    listItem.append(price);

    const purchaseButton = document.createElement('button');
    purchaseButton.classList.add('button');
    purchaseButton.textContent = 'Purchase';
    purchaseButton.id = record.id;
    listItem.append(purchaseButton);

    return listItem;
}


