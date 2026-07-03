// ===============================
// ShopSphere Shopping Cart
// ===============================

// Load cart from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count in navbar
function updateCartCount() {

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

cartCount.textContent = totalItems;

}
function showToast(message) {

    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);

}
function addToCart(productId) {

    const product = products.find(item => item.id === productId);

    if (!product) return;

    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    renderCart();

    showToast(`${product.name} added to cart 🛒`);
}
// Initialize cart count when page loads

updateCartCount();
renderCart();
function renderCart() {

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">Your cart is empty.</p>
        `;

        cartTotal.textContent = "₹0";
        return;
    }

    let html = "";
    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        html += `
<div class="cart-item">

    <img src="${item.image}" alt="${item.name}">

    <div class="cart-details">

        <h4>${item.name}</h4>

        <p>₹${item.price}</p>

        <div class="quantity-controls">

            <button onclick="decreaseQuantity(${item.id})">−</button>

            <span>${item.quantity}</span>

            <button onclick="increaseQuantity(${item.id})">+</button>

        </div>

        <button
            class="remove-item"
            onclick="removeItem(${item.id})">

            <i class="fa-solid fa-trash"></i>
            Remove

        </button>

    </div>

</div>

        `;

    });

    cartItems.innerHTML = html;
    cartTotal.textContent = `₹${total}`;

}

// ===============================
// Cart Drawer
// ===============================

const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

function openCart() {

    cartDrawer.classList.add("active");
    cartOverlay.classList.add("active");

}

function closeCartDrawer() {

    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");

}

cartBtn.addEventListener("click", function (e) {

    e.preventDefault();

    openCart();

});

closeCart.addEventListener("click", closeCartDrawer);

cartOverlay.addEventListener("click", closeCartDrawer);


function increaseQuantity(id){

    const item = cart.find(product => product.id === id);

    item.quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    renderCart();

}
function decreaseQuantity(id){

    const item = cart.find(product => product.id === id);

    if(item.quantity > 1){

        item.quantity--;

    }else{

        removeItem(id);
        return;

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    renderCart();

}
function removeItem(id){

    cart = cart.filter(item => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    renderCart();

    showToast("Item removed");

}
function goToCheckout() {
    window.location.href = "checkout.html";
}