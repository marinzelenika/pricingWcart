document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const product = JSON.parse(event.target.dataset.product);
      addToCart(product);
    });
  });
});

function addToCart(product) {
  const cart = getCart();
  const itemIndex = cart.findIndex((item) => item.id === product.id);

  if (itemIndex > -1) {
    cart[itemIndex].quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
}

function getCart() {
  const cart = localStorage.getItem("shoppingCart");
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
  renderCartItems();
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
}

function renderCartItems() {
  const cart = getCart();
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "list-group-item";
    emptyItem.textContent = "Your cart is empty.";
    cartItemsContainer.appendChild(emptyItem);
  } else {
    cart.forEach((item) => {
      const cartItem = document.createElement("li");
      cartItem.className =
        "list-group-item d-flex justify-content-between align-items-center";
      cartItem.innerHTML = `
                ${item.name} - ${item.price} (${item.quantity})
                <span class="badge bg-primary rounded-pill">${
                  item.price * item.quantity
                }</span>
                <button class="btn btn-sm btn-danger ms-2" onclick="removeFromCart('${
                  item.id
                }')">X</button>
            `;
      cartItemsContainer.appendChild(cartItem);
    });
  }

  updateCartCounter(cart);
}


function updateCartCounter(cart) {
  const cartCounter = document.getElementById("cart-counter");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCounter.textContent = totalItems;
}

function toggleCartDropdown() {
  const cartDropdown = document.getElementById("cart-dropdown");
  cartDropdown.classList.toggle("show");
}

// Initialize the cart dropdown with items from localStorage
document.addEventListener("DOMContentLoaded", () => {
  renderCartItems();
});
window.toggleCartDropdown = toggleCartDropdown;
window.removeFromCart = removeFromCart;
