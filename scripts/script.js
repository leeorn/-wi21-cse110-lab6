// Script.js
let inventory; 

window.addEventListener('DOMContentLoaded', () => {
  // if not in the local storage yet
  if(window.localStorage.getItem("data") == undefined){
    fetch("https://fakestoreapi.com/products")
      .then(function(response){return response.json()})
      .then(data => {
        // store the data in local storage
        inventory = data;
        window.localStorage.setItem("data", JSON.stringify(inventory));
      })
  }
  else{
    // load the iteams' data from the local storage
    inventory = JSON.parse(window.localStorage.getItem("data"))
    // console.log(itemsInfo[0])
  }

  let parent = document.querySelector('#product-list');

  // get each item in from the JSON file
  inventory.forEach(element => {
    // create custom element 
    let item = document.createElement('product-item');
    // set its values
    item.setAttribute('title', element.title);
    item.setAttribute('price', element.price);
    item.setAttribute('id', element.id);

    console.log(item)
    parent.appendChild(item);
  });

});