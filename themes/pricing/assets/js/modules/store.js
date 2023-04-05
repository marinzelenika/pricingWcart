/*  let cart = [];
  const cartDropdown = document.getElementById('cart-dropdown');
  const cartItems = document.getElementById('cart-items');
  const cartCounter = document.getElementById('cart-counter');

  function toggleCartDropdown() {
    cartDropdown.style.display = cartDropdown.style.display === 'none' ? 'block' : 'none';
  }

  function addToCart(product) {
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else
    // Add the product to the cart
      cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
  

  function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
      cart.splice(index, 1);
    }

    updateCartUI();
  }

  function updateCartUI() {
    // Update cart counter
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCounter.textContent = totalItems;

    // Update cart items
    cartItems.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.innerHTML = `
        ${item.name} x${item.quantity}
        <button type="button" class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Remove</button>
      `;
      cartItems.appendChild(li);
    });
  } */