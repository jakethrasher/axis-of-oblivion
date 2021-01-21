export function renderLineItems(cartItem, record){
    const tableRow = document.createElement('tr');

    const tdRecord = document.createElement('td');
    tdRecord.textContent = `${record.name} ${record.album}`;


    
    return tableRow;
}