const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'images/bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'images/cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'images/green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'images/light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'images/purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'images/red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'images/teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
];

function renderTshirts() {
  const productsDiv = document.getElementById('products');
  productsDiv.innerHTML = ''; // Clear the product container

  tshirts.forEach((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('tshirt-card'); // Add a class for styling
    
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.title;
    img.width = 150;
    
    const title = document.createElement('h2');
    title.innerText = product.title;

    const price = document.createElement('p');
    price.innerText = `Price: $${product.price.toFixed(2)}`;

    const stock = document.createElement('p');
    stock.innerText = product.stock === 0 ? 'Out of Stock' : `Stock: ${product.stock}`;

    // Create quantity select box dynamically
    const select = document.createElement('select');
    select.disabled = product.stock === 0; // Disable the select if out of stock
    for (let i = 1; i <= product.stock; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.innerText = i;
      select.appendChild(option);
    }

    // Create Buy Button, only if stock is greater than 0
    const buyButton = document.createElement('button');
    buyButton.innerText = 'Buy';
    if (product.stock > 0) {
      buyButton.disabled = false;
      buyButton.addEventListener('click', () => handleBuy(index, select));
    } else {
      buyButton.disabled = true;
    }

    productDiv.appendChild(img);
    productDiv.appendChild(title);
    productDiv.appendChild(price);
    productDiv.appendChild(stock);
    productDiv.appendChild(select);
    productDiv.appendChild(buyButton);

    productsDiv.appendChild(productDiv);
  });
}

function handleBuy(index, selectElement) {
  const selectedQuantity = parseInt(selectElement.value);
  if (tshirts[index].stock >= selectedQuantity) {
    tshirts[index].stock -= selectedQuantity; // Decrease stock based on selected quantity
    renderTshirts(); // Re-render the t-shirts
  }
}

renderTshirts();