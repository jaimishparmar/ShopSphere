// ==========================
// Quick View Modal
// ==========================

const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalRating = document.getElementById("modalRating");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");

function openQuickView(productId){

    const product = products.find(item => item.id === productId);

    if(!product) return;

    modalImage.src = product.image;
    modalImage.alt = product.name;

    modalTitle.textContent = product.name;

    modalCategory.textContent = product.category;

    modalRating.innerHTML =
        "⭐".repeat(product.rating) + ` (${product.reviews} Reviews)`;

    modalPrice.innerHTML =
        `₹${product.price} <del style="color:#9ca3af;font-size:20px;">₹${product.oldPrice}</del>`;

    modalDescription.textContent = product.description;

    modalOverlay.classList.add("active");

}
closeModal.addEventListener("click", () => {

    modalOverlay.classList.remove("active");

});

modalOverlay.addEventListener("click", (e) => {

    if(e.target === modalOverlay){

        modalOverlay.classList.remove("active");

    }

});