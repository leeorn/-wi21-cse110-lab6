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
  
    

  }
}

customElements.define('product-item', ProductItem);