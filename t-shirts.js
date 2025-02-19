const tshirts = [
  {
    title: "Blue T-Shirt",
    image: "images/blue-t-shirt.jpg",
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: "Bright Purple T-Shirt",
    image: "images/bright-purple-t-shirt.jpg",
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: "Cobalt Blue T-Shirt",
    image: "images/cobalt-blue-t-shirt.jpg",
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: "Green T-Shirt",
    image: "images/green-t-shirt.jpg",
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: "Grey T-Shirt",
    image: "images/blue-t-shirt.jpg",
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: "Light Green T-Shirt",
    image: "images/light-green-t-shirt.jpg",
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: "Purple T-Shirt",
    image: "images/purple-t-shirt.jpg",
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: "Red T-Shirt",
    image: "images/red-t-shirt.jpg",
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: "Teal T-Shirt",
    image: "images/teal-t-shirt.jpg",
    price: 7.99,
    stock: 2,
    quantity: 1
  }
];

function renderTshirts() {
  const productsDiv = document.getElementById("products");
  productsDiv.innerHTML = "";

  tshirts.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("tshirt-card");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;

    const title = document.createElement("h2");
    title.innerText = product.title;

    const price = document.createElement("p");
    price.innerText = `Price: $${product.price.toFixed(2)}`;

    const stock = document.createElement("p");
    stock.innerText = product.stock === 0 ? "Out of Stock" : `Stock: ${product.stock}`;

    const spacer = document.createElement("div");
    spacer.classList.add("spacer");

    const quantitySelect = document.createElement("select");
    quantitySelect.classList.add("quantity-select");
    
    for (let i = 1; i <= product.stock; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.innerText = i;
      quantitySelect.appendChild(option);
    }

    const buyButton = document.createElement("button");
    buyButton.innerText = "Buy";
    buyButton.disabled = product.stock === 0;
    
    buyButton.addEventListener("click", () => handleBuy(index, quantitySelect.value));

    productDiv.appendChild(img);
    productDiv.appendChild(title);
    productDiv.appendChild(price);
    productDiv.appendChild(stock);
    productDiv.appendChild(spacer);
    if (product.stock > 0) {
      productDiv.appendChild(quantitySelect);
      productDiv.appendChild(buyButton);
    }

    productsDiv.appendChild(productDiv);
  });
}

function handleBuy(index, quantity) {
  quantity = parseInt(quantity);
  if (tshirts[index].stock >= quantity) {
    tshirts[index].stock -= quantity;
    renderTshirts();
  }
}

document.addEventListener("DOMContentLoaded", renderTshirts);