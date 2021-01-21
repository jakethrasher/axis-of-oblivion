export function findById(id, array) {

    for (let item of array) {

        if (item.id === id) {

            return item;
        }
    }
}

export function calcItemTotal(quantity, price){
    return Math.round(quantity * price) / 100;
}
