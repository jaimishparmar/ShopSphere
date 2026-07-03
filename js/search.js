// ==========================
// Unified Search (Desktop + Mobile)
// ==========================

const searchInput = document.getElementById("searchInput");
const searchInputMobile = document.getElementById("searchInputMobile");

// Shared search function
function handleSearch(value) {

    const searchText = value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText)
    );

    displayProducts(filteredProducts);
}

// Desktop search
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        handleSearch(e.target.value);
    });
}

// Mobile search
if (searchInputMobile) {
    searchInputMobile.addEventListener("input", (e) => {
        handleSearch(e.target.value);
        navLinks.classList.remove("active");
    });
}