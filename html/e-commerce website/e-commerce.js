// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 24.99 },
    { id: 3, name: 'Product 3', price: 14.99 }
  ];
  
  // Function to generate the HTML for product cards
  function generateProductCards() {
    const productsContainer = document.querySelector('.products');
  
    // Clear any existing products
    productsContainer.innerHTML = '';
  
    // Generate product cards
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product');
  
      const image = document.createElement('img');
      image.src = `product${product.id}.jpg`;
      image.alt = product.name;
  
      const name = document.createElement('h2');
      name.textContent = product.name;
  
      const price = document.createElement('p');
      price.textContent = `$${product.price.toFixed(2)}`;
  
      const button = document.createElement('button');
      button.textContent = 'Add to Cart';
      button.addEventListener('click', () => {
        addToCart(product);
      });
  
      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(price);
      card.appendChild(button);
  
      productsContainer.appendChild(card);
    });
  }
  
  // Function to add a product to the cart
  function addToCart(product) {
    // Implementation of adding the product to the cart goes here
    console.log(`Added ${product.name} to the cart`);
  }
  
  // Generate the initial product cards
  generateProductCards();
  