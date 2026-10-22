
"use strict";

// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Current year in the footer
document.getElementById("year").textContent =
    new Date().getFullYear();

// Demo cart count
// This is temporary frontend functionality.
// Cart items are not saved to a database yet.
let cartCount = 0;

const cartCountElement = document.getElementById("cartCount");

document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", () => {
        cartCount += 1;
        cartCountElement.textContent = cartCount;

        const originalText = button.textContent;
        button.textContent = "✓";
        button.disabled = true;

        window.setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 600);
    });
});

// Demo wishlist buttons
document.querySelectorAll(".wishlist").forEach(button => {
    button.addEventListener("click", () => {
        const selected = button.classList.toggle("selected");

        button.textContent = selected ? "♥" : "♡";
        button.style.color = selected ? "#d94f70" : "";
        button.setAttribute("aria-pressed", String(selected));
    });
});

// Demo newsletter form
// No email is sent or stored by this frontend-only form.
const subscribeForm = document.getElementById("subscribeForm");
const subscribeMessage = document.getElementById("subscribeMessage");

subscribeForm.addEventListener("submit", event => {
    event.preventDefault();

    const emailInput = document.getElementById("emailInput");

    if (!emailInput.checkValidity()) {
        emailInput.reportValidity();
        return;
    }

    subscribeMessage.textContent =
        "Thank you for your interest in Green Cart!";

    subscribeForm.reset();
});
