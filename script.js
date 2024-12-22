// JavaScript for E-Commerce Website

document.addEventListener("DOMContentLoaded", () => {
    const cart = [];

    // Select all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", event => {
            const productCard = event.target.closest(".product-card");

            const product = {
                name: productCard.querySelector("h3").textContent,
                price: productCard.querySelector("p").textContent,
                image: productCard.querySelector("img").src
            };

            cart.push(product);
            alert(`${product.name} has been added to the cart!`);
            console.log("Current Cart:", cart);
        });
    });

    // Future: Add a function to display cart items in a modal or dedicated cart page
});
