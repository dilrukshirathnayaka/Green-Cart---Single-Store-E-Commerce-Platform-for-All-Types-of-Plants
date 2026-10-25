
"use strict";

const plants = [
  {
    id: 101,
    name: "Monstera Deliciosa",
    category: "Indoor",
    price: 2850,
    badge: "BESTSELLER",
    description: "A statement plant with beautiful split leaves.",
    light: "Medium",
    care: "Moderate",
    locations: ["Living room", "Bedroom", "Office desk"],
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 102,
    name: "Peace Lily",
    category: "Indoor",
    price: 1950,
    badge: "EASY CARE",
    description: "Elegant green leaves with graceful white blooms.",
    light: "Low",
    care: "Easy",
    locations: ["Living room", "Bedroom", "Office desk"],
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 103,
    name: "Pink Anthurium",
    category: "Flowering",
    price: 2400,
    badge: "LOVED",
    description: "Glossy leaves and striking colourful flowers.",
    light: "Medium",
    care: "Moderate",
    locations: ["Living room", "Bedroom", "Balcony"],
    image: "https://images.unsplash.com/photo-1597055181300-a8b4be6f4b9d?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 104,
    name: "Golden Pothos",
    category: "Indoor",
    price: 1450,
    badge: "BEGINNER PICK",
    description: "A trailing green companion for shelves.",
    light: "Low",
    care: "Easy",
    locations: ["Living room", "Bedroom", "Office desk"],
    image: "https://images.unsplash.com/photo-1616762689617-5c8b9e3b0a5d?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 105,
    name: "Garden Rose",
    category: "Flowering",
    price: 1750,
    badge: "GARDEN FAVOURITE",
    description: "Classic blooms for a sunny outdoor space.",
    light: "High",
    care: "Moderate",
    locations: ["Balcony", "Outdoor garden"],
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 106,
    name: "Jade Succulent",
    category: "Succulents",
    price: 1250,
    badge: "COMPACT",
    description: "A sculptural succulent for bright spaces.",
    light: "High",
    care: "Easy",
    locations: ["Balcony", "Office desk", "Living room"],
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 107,
    name: "Snake Plant",
    category: "Indoor",
    price: 2200,
    badge: "EASY CARE",
    description: "Architectural leaves for a modern interior.",
    light: "Low",
    care: "Easy",
    locations: ["Living room", "Bedroom", "Office desk"],
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 108,
    name: "Garden Fern",
    category: "Outdoor",
    price: 1650,
    badge: "GREEN FAVOURITE",
    description: "Lush foliage for a shaded garden corner.",
    light: "Medium",
    care: "Moderate",
    locations: ["Balcony", "Outdoor garden"],
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85"
  }
];

const STORAGE_KEYS = {
  cart: "greenCartItems",
  wishlist: "greenCartWishlist"
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function readStorage(key, fallback = []) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(fallback) && Array.isArray(value) ? value : value ?? fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    showToast("Browser storage is unavailable. Please check your browser settings.");
    return false;
  }
}

function formatPrice(price) {
  return new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: "LKR",
    maximumFractionDigits: 0
  }).format(price);
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

function getCart() {
  return readStorage(STORAGE_KEYS.cart);
}

function updateCartCount() {
  const count = getCart().reduce((total, item) => total + Math.max(0, Number(item.quantity) || 0), 0);
  const badge = $("#cartCount");
  if (badge) badge.textContent = String(count);
}

function addToCart(plantId) {
  const plant = plants.find(item => item.id === plantId);
  if (!plant) return;

  const cart = getCart();
  const existing = cart.find(item => Number(item.id) === plantId);

  if (existing) {
    existing.quantity = (Number(existing.quantity) || 1) + 1;
  } else {
    cart.push({
      id: plant.id,
      name: plant.name,
      category: plant.category,
      price: plant.price,
      image: plant.image,
      quantity: 1
    });
  }

  if (saveStorage(STORAGE_KEYS.cart, cart)) {
    updateCartCount();
    showToast(`${plant.name} added to your cart.`);
  }
}

function getWishlist() {
  return readStorage(STORAGE_KEYS.wishlist);
}

function toggleWishlist(plantId) {
  const wishlist = getWishlist();
  const index = wishlist.indexOf(plantId);

  if (index >= 0) {
    wishlist.splice(index, 1);
    showToast("Removed from your favourites.");
  } else {
    wishlist.push(plantId);
    showToast("Added to your favourites.");
  }

  saveStorage(STORAGE_KEYS.wishlist, wishlist);
  renderProducts(getCurrentFilter());
}

function getCurrentFilter() {
  return $(".filter-chip.active")?.dataset.filter || "All";
}

function renderProducts(filter = "All") {
  const container = $("#featuredProducts");
  if (!container) return;

  const wishlist = getWishlist();
  const visiblePlants = filter === "All"
    ? plants
    : plants.filter(plant => plant.category === filter);

  if (visiblePlants.length === 0) {
    container.innerHTML = '<p class="loading-message">No plants found in this category yet.</p>';
    return;
  }

  container.innerHTML = visiblePlants.map((plant, index) => `
    <article class="product-card" style="animation-delay:${index * 45}ms">
      <div class="product-image-wrap">
        <img class="product-image"
          src="${plant.image}"
          alt="${plant.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80'">
        <span class="product-badge">${plant.badge}</span>
        <button class="product-wishlist ${wishlist.includes(plant.id) ? "is-favourite" : ""}"
          data-wishlist="${plant.id}"
          aria-label="${wishlist.includes(plant.id) ? "Remove" : "Add"} ${plant.name} ${wishlist.includes(plant.id) ? "from" : "to"} favourites"
          aria-pressed="${wishlist.includes(plant.id)}">
          <i class="${wishlist.includes(plant.id) ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>
      </div>
      <div class="product-details">
        <span class="product-category">${plant.category}</span>
        <a href="product.html?id=${plant.id}" class="product-name">${plant.name}</a>
        <p class="product-description">${plant.description}</p>
        <div class="product-bottom">
          <span class="product-price">${formatPrice(plant.price)}<small>Indicative price</small></span>
          <button class="add-cart" data-add-cart="${plant.id}" aria-label="Add ${plant.name} to cart">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function setupFilters() {
  const filters = $("#featuredFilters");
  if (!filters) return;

  filters.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    $$(".filter-chip", filters).forEach(chip => chip.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
}

function setupProductActions() {
  const container = $("#featuredProducts");
  if (!container) return;

  container.addEventListener("click", event => {
    const addButton = event.target.closest("[data-add-cart]");
    if (addButton) {
      addToCart(Number(addButton.dataset.addCart));
      return;
    }

    const wishlistButton = event.target.closest("[data-wishlist]");
    if (wishlistButton) {
      toggleWishlist(Number(wishlistButton.dataset.wishlist));
    }
  });
}

function setupNavigation() {
  const toggle = $("#menuToggle");
  const nav = $("#mainNav");

  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    toggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  $$(".nav-link", nav || document).forEach(link => {
    link.addEventListener("click", () => {
      nav?.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
      if (toggle) {
        toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        toggle.setAttribute("aria-label", "Open navigation");
      }
    });
  });

  $("#searchToggle")?.addEventListener("click", () => {
    const panel = $("#searchPanel");
    if (!panel) return;

    panel.hidden = !panel.hidden;
    if (!panel.hidden) $("#siteSearch")?.focus();
  });

  $("#searchForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const query = $("#siteSearch")?.value.trim() || "";
    if (!query) {
      $("#siteSearch")?.focus();
      return;
    }

    window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
  });
}

function setupPlantFinder() {
  const form = $("#plantFinderForm");
  const resultsBox = $("#finderResults");
  if (!form || !resultsBox) return;

  form.addEventListener("submit", event => {
    event.preventDefault();

    const location = $("#plantLocation").value;
    const light = $("#plantLight").value;
    const care = $("#plantCare").value;

    const matches = plants.filter(plant => {
      const locationMatch = plant.locations.includes(location);
      const lightMatch = plant.light === light ||
        (light === "Medium" && plant.light === "Low") ||
        (light === "High" && plant.light === "Medium");
      const careMatch = care === "Advanced" ||
        plant.care === care ||
        (care === "Moderate" && plant.care === "Easy");

      return locationMatch && lightMatch && careMatch;
    });

    resultsBox.hidden = false;

    if (!matches.length) {
      resultsBox.innerHTML = `
        <strong>Let's try another combination.</strong>
        <p>We couldn't find a close match in this sample collection. Try a different light level or care preference.</p>
        <a class="text-link" href="shop.html">Explore all plants <i class="fa-solid fa-arrow-right"></i></a>
      `;
      return;
    }

    resultsBox.innerHTML = `
      <strong>Your plant matches for ${location}</strong>
      <ul>${matches.slice(0, 4).map(plant =>
        `<li><a href="product.html?id=${plant.id}">${plant.name}</a> — ${formatPrice(plant.price)}</li>`
      ).join("")}</ul>
      <p>Check each plant's detailed light and care requirements before choosing a spot.</p>
    `;
  });
}

function setupNewsletter() {
  const form = $("#newsletterForm");
  const message = $("#newsletterMessage");
  if (!form || !message) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    message.textContent = "Thanks for your interest! Newsletter sign-up needs a backend connection.";
    form.reset();
  });
}

function initHomePage() {
  renderProducts();
  setupFilters();
  setupProductActions();
  setupNavigation();
  setupPlantFinder();
  setupNewsletter();
  updateCartCount();

  const year = $("#currentYear");
  if (year) year.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", initHomePage);
