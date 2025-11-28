const data = new Array();
let list = document.getElementById('myList');
let increment = 1;

document.getElementById('btn').addEventListener('click',function(event)
{ 
    event.preventDefault();
    let itemName = document.getElementById('item-name').value;
    data.push({itemName: itemName});
    
    let li = document.createElement('li');
    li.id = `${increment}-item`;

    li.textContent = itemName;
    list.appendChild(li);
    console.log(li.id);
    increment++;
    // printData(data);

});


function printData(data) {
    console.log(data);
}   



// document.getElementById('clear-btn').addEventListener('click',function(event)
// { 
//     event.preventDefault();
//     for (let i = data.length - 1; i >= 0; i--) {
//         list.removeChild(list.children[i]);
//     }
// });


document.getElementById('remove-item-by-number-btn').addEventListener('click',function(event)
{ 
    event.preventDefault();
    let itemNumber = document.getElementById('remove-item-by-number').value;
    let li = document.getElementById(`${itemNumber}-item`);
    li.textContent = "";

    console.log("Removed: " + li.id);
   
});