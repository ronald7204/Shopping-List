const data = new Array();
let list = document.getElementById('myList');

document.getElementById('btn').addEventListener('click',function(event)
{ 
    event.preventDefault();
    let itemName = document.getElementById('item-name').value;
    let itemQty = document.getElementById('item-qty').value;

    data.push({
        itemName: itemName,
        itemQty: itemQty
    });
    
    printData(data, event);
});

function printData(data, event) {
    event.preventDefault();

    if (list.children.length > 0) {
        removeAllChildNodes(list);
    }

    for(let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        li.textContent = data[i].itemName + " " + data[i].itemQty;
        li.id = data.indexOf(data[i]) + 1 + "-item";

        let newCheckbox = document.createElement('input');
        newCheckbox.type = "checkbox";
        newCheckbox.addEventListener('change', function () {
            if (newCheckbox.checked) {
                li.classList.add('strikethrough');
            } else {
                li.classList.remove('strikethrough');
            }
        });

        newCheckbox.setAttribute("id", "checkbox");
        li.prepend(newCheckbox); // Adds checkbox to the beginning of the list item
        
        console.log("Added: " + li.id + " - " + li.textContent);
        list.appendChild(li);
    }   
    console.log("length: " + list.children.length);

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

document.getElementById('clear-btn').addEventListener('click',function(event)
{ 
    event.preventDefault();
    removeAllChildNodes(list);
    data.length = 0;
});

document.getElementById('remove-item-by-number-btn').addEventListener('click',function(event)
{ 
    event.preventDefault();
    let itemNumber = document.getElementById('remove-item-by-number').value;
    let li = document.getElementById(`${itemNumber}-item`);

    console.log("Removed: " + li.id);
    data.splice(itemNumber - 1, 1);
    printData(data, event);
});










