// Script.js
let itemsInfo; 

window.addEventListener('DOMContentLoaded', () => {
  // if not in the local storage yet
  if(window.localStorage.getItem("data") == undefined){
    fetch("https://fakestoreapi.com/products")
      .then(function(response){return response.json()})
      .then(data => {
        // store the data in local storage
        itemsInfo = data;
        window.localStorage.setItem("data", JSON.stringify(itemsInfo));
      })
  }
  else{
    // load the iteams' data from the local storage
    itemsInfo = JSON.parse(window.localStorage.getItem("data"))
    // console.log(itemsInfo[0])
  }

});