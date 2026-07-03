// =============================
// ShopSphere Product Data
// =============================

const products = [
    {
    id: 1,
    name: "Nike Air Max",
    category: "Shoes",
    price: 5999,
    oldPrice: 7499,
    rating: 5,
    reviews: 125,
    badge: "-20%",
    image: "images/products/product1.png",
    description: "Nike Air Max delivers exceptional comfort, lightweight cushioning, and a stylish design perfect for everyday wear."
},
    {
        id: 2,
        name: "Apple Watch Series 10",
        category: "Watches",
        price: 42999,
        oldPrice: 48999,
        reviews: 98,
        badge: "-12%",
        rating: 5,
        image: "images/products/product2.png",
        description: "Apple Watch Series 10 helps you stay connected, monitor your health, and track workouts with a premium design."
    },
    {
        id: 3,
        name: "Leather Jacket",
        category: "Fashion",
        price: 3499,
        oldPrice: 4499,
        reviews: 86,
        badge: "-22%",
        rating: 4,
        image: "images/products/product3.png",
        description: "Premium leather jacket crafted for comfort and style, perfect for casual and winter outfits."
    },
    {
        id: 4,
        name: "Sony WH-1000XM5",
        category: "Electronics",
        price: 29999,
        oldPrice: 34999,
        reviews: 212,
        badge: "-15%",
        rating: 5,
        image: "images/products/product4.png",
        description: "Industry-leading noise cancelling headphones with exceptional sound quality and up to 30 hours of battery life."
    }
];

const productsGrid = document.getElementById("productsGrid");

function displayProducts(productList = products)  {

    let html = "";

    productList.forEach(product => {

        html += `
            <div class="product-card">

    <span class="sale-badge">${product.badge}</span>

    <button
    class="wishlist-btn"
    onclick="toggleWishlist(${product.id}, this)">

    <i class="fa-regular fa-heart"></i>

</button>
    <div class="product-image">

    <img src="${product.image}" alt="${product.name}">

    <div class="quick-view">

        <button
            onclick="openQuickView(${product.id})">

            <i class="fa-solid fa-eye"></i>

            Quick View

        </button>

    </div>

</div>

    <div class="product-info">

        <span class="product-category">
            ${product.category}
        </span>

        <h3>${product.name}</h3>

        <div class="rating">
            ⭐⭐⭐⭐⭐
            <span>(${product.reviews})</span>
        </div>

        <div class="price-box">
            <span class="new-price">₹${product.price}</span>
            <span class="old-price">₹${product.oldPrice}</span>
        </div>

        <button class="add-cart-btn" onclick="addToCart(${product.id})">
            🛒 Add to Cart
        </button>

    </div>

</div>
        `;

    });

    productsGrid.innerHTML = html;

}

displayProducts();