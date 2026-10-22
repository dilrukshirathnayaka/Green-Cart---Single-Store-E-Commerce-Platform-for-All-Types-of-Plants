
// Green Cart - Frontend interactions

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Close mobile menu after selecting a link
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// Display current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Demo shopping cart count
let cartCount = 0;
const cartCountElement = document.getElementById("cartCount");

document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCountElement.textContent = cartCount;

        const originalText = button.textContent;
        button.textContent = "✓";

        setTimeout(() => {
            button.textContent = originalText;
        }, 700);
    });
});

// Demo wishlist interaction
document.querySelectorAll(".wishlist").forEach(button => {
    button.addEventListener("click", () => {
        const isSelected = button.classList.toggle("selected");
        button.textContent = isSelected ? "♥" : "♡";
        button.style.color = isSelected ? "#d94f70" : "";
    });
});

// Demo newsletter form
const subscribeForm = document.getElementById("subscribeForm");
const subscribeMessage = document.getElementById("subscribeMessage");

subscribeForm.addEventListener("submit", event => {
    event.preventDefault();

    subscribeMessage.textContent =
        "Thank you for your interest in Green Cart!";

    subscribeForm.reset();
});
