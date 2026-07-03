// Generate Order ID
const orderId = "SPX" + Math.floor(Math.random() * 1000000);

document.getElementById("orderId").innerText =
"Order ID: " + orderId;