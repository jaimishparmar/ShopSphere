// ==========================
// ShopSphere Wishlist
// ==========================

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistCount = document.getElementById("wishlistCount");

// Toggle Wishlist
function toggleWishlist(productId, button) {

    const index = wishlist.indexOf(productId);

    const icon = button.querySelector("i");

    if (index === -1) {

        wishlist.push(productId);

        button.classList.add("active");

        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");

        showToast("❤️ Added to Wishlist");

    } else {

        wishlist.splice(index, 1);

        button.classList.remove("active");

        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");

        showToast("💔 Removed from Wishlist");

    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    updateWishlistCount();

}

// Update Counter
function updateWishlistCount() {

    if (wishlistCount) {

        wishlistCount.textContent = wishlist.length;

    }

}

// Restore Wishlist After Refresh
function restoreWishlist() {

    document.querySelectorAll(".wishlist-btn").forEach((button, index) => {

        const product = products[index];

        if (!product) return;

        if (wishlist.includes(product.id)) {

            button.classList.add("active");

            const icon = button.querySelector("i");

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

        }

    });

}

window.addEventListener("DOMContentLoaded", () => {

    updateWishlistCount();

    restoreWishlist();

});