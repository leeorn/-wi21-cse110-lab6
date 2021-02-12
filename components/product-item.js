// product-item.js

class ProductItem extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes() {
    return ['itemAdded', 'title', 'price', 'src'];
  }

  constructor(){
    super();

    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});

    // the html components
    const li = document.createElement('li');
    const img = document.createElement('img');
    const title = document.createElement('p');
    const price = document.createElement('p');

    // connect the components with their classes, etc.
    li.setAttribute('class', 'product');
    title.setAttribute('class', 'title');
    price.setAttribute('class', 'price');
    img.setAttribute('src', '');
    img.setAttribute('alt', '');

    // add button
    const button = document.createElement("button");
  
    // the style (from styles.css file)
    const style = " \
    .price{color: green; font-size: 1.8em; font-weight: bold;margin: 0;} \
    .product{align-items: center;background-color: white; border-radius: 5px; display: grid; grid-template-areas: 'image' 'title' 'price' 'add'; grid-template-rows: 67% 11% 11% 11%; height: 450px; filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2)); margin: 0 30px 30px 0; padding: 10px 20px; width: 200px;} \
    .product > button{background-color: rgb(255, 208, 0); border: none; border-radius: 5px; color: black; justify-self: center; max-height: 35px; padding: 8px 20px; transition: 0.1s ease all;} \
    .product > button:hover{background-color: rgb(255, 166, 0); cursor: pointer; transition: 0.1s ease all;} \
    .product > img{align-self: center; justify-self: center; width: 100%;} \
    .title{font-size: 1.1em; margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;} \
    .title:hover{font-size: 1.1em; margin: 0; white-space: wrap; overflow: auto; text-overflow: unset;} "

  }
}

customElements.define('product-item', ProductItem);

// var link = document.querySelector('product-item');
                
// // Clone the <template> in the import.
// var template = link.import.querySelector('ul');
// var clone = document.importNode(template.content, true);

// document.querySelector('#product-list').appendChild(clone);