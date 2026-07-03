// ==========================
// Checkout Page Logic
// ==========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSummary = document.getElementById("cartSummary");

function renderCheckout() {

    if(cart.length === 0){
        cartSummary.innerHTML = "<p>Your cart is empty</p>";
        return;
    }

    let total = 0;

    let html = "";

    cart.forEach(item => {

        total += item.price * item.quantity;

        html += `
            <div class="checkout-item">
                <h4>${item.name}</h4>
                <p>Qty: ${item.quantity}</p>
                <p>₹${item.price * item.quantity}</p>
            </div>
        `;
    });

    html += `
        <div class="total">
            <h3>Total: ₹${total}</h3>
        </div>
    `;

    cartSummary.innerHTML = html;
}

function placeOrder(){

    localStorage.removeItem("cart");

    // redirect to success page
    window.location.href = "success.html";

}

renderCheckout();