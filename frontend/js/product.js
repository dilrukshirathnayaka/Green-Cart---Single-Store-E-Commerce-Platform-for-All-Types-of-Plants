
(() => {
  "use strict";

  // Sample products for frontend testing.
  // Later, these details can be loaded from the PHP/MySQL database.
  const products = {
    monstera: {
      id: "plant-monstera",
      slug: "monstera",
      name: "Monstera Deliciosa",
      category: "Indoor Plants",
      price: 4850,
      oldPrice: 5500,
      rating: "4.9 (128 reviews)",
      badge: "BESTSELLER",
      description:
        "A beautiful tropical plant with split leaves, perfect for adding a fresh, modern look to your home.",
      images: [
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Bright indirect",
      water: "Weekly*",
      difficulty: "Easy",
      soil: "Airy, well-draining potting mix",
      humidity: "Medium to high",
      size: "Approximately 30–60 cm; varies by plant",
      pet: "May be toxic if chewed. Keep away from pets and children.",
      overview:
        "Monstera deliciosa is loved for its distinctive split leaves. Place it in a bright room away from harsh direct sunlight. Its size and leaf shape may vary naturally.",
      care: [
        ["Light", "Bright, indirect light is ideal. Avoid harsh afternoon sunlight."],
        ["Water", "Check the top 2–3 cm of soil. Water when dry and allow excess water to drain."],
        ["Soil", "Use an airy, well-draining potting mix."],
        ["Humidity", "Average indoor humidity may work, while warmer, more humid conditions can help."],
        ["Fertiliser", "During active growth, use a balanced plant fertiliser according to its label."],
        ["Common issues", "Yellow leaves can be associated with overwatering. Check soil moisture, drainage and light."]
      ]
    },

    snake: {
      id: "plant-snake",
      slug: "snake",
      name: "Snake Plant",
      category: "Indoor Plants",
      price: 2950,
      oldPrice: 3400,
      rating: "4.8 (86 reviews)",
      badge: "EASY CARE",
      description:
        "A stylish, upright plant that is a great choice for busy plant lovers and modern interiors.",
      images: [
        "https://images.unsplash.com/photo-1593482892290-f54927ae2b8b?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Low to bright indirect",
      water: "When soil dries",
      difficulty: "Very easy",
      soil: "Fast-draining potting mix",
      humidity: "Average",
      size: "Varies by plant",
      pet: "May be toxic if chewed. Keep away from pets and children.",
      overview:
        "Snake plants tolerate a range of indoor light conditions. They prefer their soil to dry between waterings and need a pot with drainage.",
      care: [
        ["Light", "Tolerates low to bright indirect light."],
        ["Water", "Let the potting mix dry thoroughly before watering again."],
        ["Soil", "Use a fast-draining mix and a pot with drainage holes."],
        ["Humidity", "Typical indoor humidity is generally suitable."],
        ["Fertiliser", "Feed sparingly during active growth, following the product label."],
        ["Common issues", "Soft or yellow leaves may indicate overwatering. Check the soil and drainage."]
      ]
    },

    pothos: {
      id: "plant-pothos",
      slug: "pothos",
      name: "Golden Pothos",
      category: "Indoor Plants",
      price: 1850,
      oldPrice: 2200,
      rating: "4.8 (74 reviews)",
      badge: "PLANT FAVOURITE",
      description:
        "A leafy trailing plant that looks lovely on shelves, desks and hanging planters.",
      images: [
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Medium to bright indirect",
      water: "When top soil dries",
      difficulty: "Easy",
      soil: "Well-draining potting mix",
      humidity: "Average",
      size: "Trailing vines; varies",
      pet: "May be toxic if chewed. Keep away from pets and children.",
      overview:
        "Golden pothos develops trailing vines and attractive foliage. Give it room to trail, and trim the vines if needed.",
      care: [
        ["Light", "Medium to bright indirect light is suitable."],
        ["Water", "Water after the top layer of soil dries."],
        ["Soil", "Use a general potting mix with good drainage."],
        ["Humidity", "Average indoor humidity is generally suitable."],
        ["Fertiliser", "Feed lightly during active growth according to the label."],
        ["Common issues", "Long, sparse growth may indicate low light. Yellow leaves can be linked to overwatering."]
      ]
    }
  };

  const $ = (selector) => document.querySelector(selector);
  const CART_KEY = "greenCartCart";

  const params = new URLSearchParams(window.location.search);
  const slug = (params.get("id") || params.get("slug") || "monstera").toLowerCase();
  const product = products[slug] || products.monstera;

  let imageIndex = 0;
  let selectedSize = "Small";
  let quantity = 1;
  let toastTimer;

  const sizeExtra = {
    Small: 0,
    Medium: 1500,
    Large: 3000
  };

  const money = (value) =>
    "LKR " + Number(value).toLocaleString("en-LK");

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  function readCart() {
    try {
      const cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
      return Array.isArray(cart) ? cart : [];
    } catch (error) {
      return [];
    }
  }

  function updateCartCount() {
    const total = readCart().reduce((sum, item) => {
      return sum + Math.max(0, Number(item.quantity) || 0);
    }, 0);

    $("#cartCount").textContent = total;
  }

  function getPrice() {
    return product.price + sizeExtra[selectedSize];
  }

  function updatePrice() {
    $("#productPrice").textContent = money(getPrice());

    $("#oldPrice").textContent = money(
      product.oldPrice + sizeExtra[selectedSize]
    );
  }

  function renderProduct() {
    document.title = product.name + " | Green Cart";

    $("#breadcrumbName").textContent = product.name;
    $("#productName").textContent = product.name;
    $("#productCategory").textContent = product.category.toUpperCase();
    $("#productDescription").textContent = product.description;
    $("#productBadge").textContent = product.badge;
    $("#productRating").textContent = product.rating;

    $("#quickLight").textContent = product.light;
    $("#quickWater").textContent = product.water;
    $("#quickDifficulty").textContent = product.difficulty;

    $("#mainImage").src = product.images[0];
    $("#mainImage").alt = product.name;

    $("#thumbnails").innerHTML = product.images.map((src, index) => `
      <button
        type="button"
        class="thumbnail ${index === 0 ? "active" : ""}"
        data-image="${index}"
        aria-label="View product photo ${index + 1}"
        aria-pressed="${index === 0}">
        <img src="${src}" alt="">
      </button>
    `).join("");

    $("#tabContent").innerHTML = overviewHTML();

    renderReviews();
    renderRelated();
    updatePrice();
    updateCartCount();
  }

  function overviewHTML() {
    return `
      <h3>Meet your new leafy companion</h3>
      <p>${product.overview}</p>
      <p>Plants are living products, so their shape, colour and growth may vary from the photographs.</p>
      <ul>
        <li>Choose a suitable place with enough room for growth.</li>
        <li>Check soil moisture before watering.</li>
        <li>Use a pot with drainage holes.</li>
      </ul>
      <p><strong>Pet and child safety:</strong> ${product.pet}</p>
    `;
  }

  function careHTML() {
    return `
      <div class="care-grid">
        ${product.care.map(([title, text]) => `
          <article class="care-card">
            <h4>${title}</h4>
            <p>${text}</p>
          </article>
        `).join("")}
      </div>
      <p>Care requirements can change with weather, room temperature, light and pot size. Check your plant regularly.</p>
    `;
  }

  function specificationsHTML() {
    const details = [
      ["Plant name", product.name],
      ["Category", product.category],
      ["Light requirement", product.light],
      ["Watering", product.water],
      ["Difficulty", product.difficulty],
      ["Soil", product.soil],
      ["Humidity", product.humidity],
      ["Typical size", product.size],
      ["Pet and child safety", product.pet]
    ];

    return `
      <table class="spec-table">
        <tbody>
          ${details.map(([label, value]) => `
            <tr><td>${label}</td><td>${value}</td></tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }

  function shippingHTML() {
    return `
      <h3>Delivery information</h3>
      <ul>
        <li>Delivery is available to selected areas in Sri Lanka.</li>
        <li>Delivery fees and availability should be confirmed at checkout.</li>
        <li>Unpack your plant gently when it arrives.</li>
        <li>If your plant arrives damaged, take clear photographs and contact the store promptly.</li>
      </ul>
      <h3>Returns and replacements</h3>
      <p>Check the store's published plant return and replacement policy before returning a live plant.</p>
      <p>This page is a frontend demonstration and does not submit real orders or support requests.</p>
    `;
  }

  function renderReviews() {
    const reviews = [
      {
        name: "Anjali M.",
        text: "The plant care instructions are easy to understand and helpful."
      },
      {
        name: "Dilan K.",
        text: "A lovely plant choice for adding some greenery to my room."
      },
      {
        name: "Sachini P.",
        text: "I like having the plant details and care guide in one place."
      }
    ];

    $("#reviewsGrid").innerHTML = reviews.map(review => `
      <article class="review-card">
        <span class="stars">★★★★★</span>
        <p>${review.text}</p>
        <div class="reviewer">
          ${review.name}
          <small>Sample review · Demo content</small>
        </div>
      </article>
    `).join("");
  }

  function renderRelated() {
    const related = Object.values(products).filter(item => item.slug !== product.slug);

    $("#relatedProducts").innerHTML = related.map(item => `
      <article class="related-card">
        <a href="product.html?id=${encodeURIComponent(item.slug)}">
          <img src="${item.images[0]}" alt="${item.name}" loading="lazy">
        </a>
        <div class="related-body">
          <small>${item.category}</small>
          <h3>${item.name}</h3>
          <div class="related-bottom">
            <strong>${money(item.price)}</strong>
            <a href="product.html?id=${encodeURIComponent(item.slug)}">View details</a>
          </div>
        </div>
      </article>
    `).join("");
  }

  function changeImage(index) {
    imageIndex = (index + product.images.length) % product.images.length;

    $("#mainImage").src = product.images[imageIndex];

    document.querySelectorAll(".thumbnail").forEach((button, i) => {
      button.classList.toggle("active", i === imageIndex);
      button.setAttribute("aria-pressed", String(i === imageIndex));
    });
  }

  function addToCart(goToCart = false) {
    const cart = readCart();
    const itemId = product.id + "-" + selectedSize.toLowerCase();

    const existing = cart.find(item =>
      String(item.id) === itemId
    );

    if (existing) {
      existing.quantity = Math.min(
        99,
        (Number(existing.quantity) || 0) + quantity
      );
    } else {
      cart.push({
        id: itemId,
        productId: product.id,
        name: product.name,
        price: getPrice(),
        image: product.images[0],
        size: selectedSize,
        quantity: quantity
      });
    }

    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (error) {
      showToast("Unable to save the cart. Please check browser storage.");
      return;
    }

    updateCartCount();

    if (goToCart) {
      window.location.href = "cart.html";
    } else {
      showToast(product.name + " added to your cart!");
    }
  }

  // Product photo gallery
  $("#thumbnails").addEventListener("click", event => {
    const button = event.target.closest("[data-image]");
    if (button) changeImage(Number(button.dataset.image));
  });

  $("#prevImage").addEventListener("click", () => {
    changeImage(imageIndex - 1);
  });

  $("#nextImage").addEventListener("click", () => {
    changeImage(imageIndex + 1);
  });

  // Plant size selection
  $("#sizeOptions").addEventListener("click", event => {
    const button = event.target.closest("[data-size]");
    if (!button) return;

    selectedSize = button.dataset.size;

    document.querySelectorAll("#sizeOptions button").forEach(item => {
      item.classList.toggle("selected", item === button);
    });

    updatePrice();
  });

  // Quantity controls
  $("#minus").addEventListener("click", () => {
    quantity = Math.max(1, quantity - 1);
    $("#quantity").value = quantity;
  });

  $("#plus").addEventListener("click", () => {
    quantity = Math.min(10, quantity + 1);
    $("#quantity").value = quantity;
  });

  $("#quantity").addEventListener("change", () => {
    quantity = Math.max(
      1,
      Math.min(10, Math.floor(Number($("#quantity").value) || 1))
    );

    $("#quantity").value = quantity;
  });

  // Cart buttons
  $("#addToCart").addEventListener("click", () => {
    addToCart(false);
  });

  $("#buyNow").addEventListener("click", () => {
    addToCart(true);
  });

  // Favourite button (temporary for this page session)
  $("#favouriteBtn").addEventListener("click", () => {
    const button = $("#favouriteBtn");
    const liked = button.classList.toggle("liked");

    button.textContent = liked ? "♥" : "♡";
    button.setAttribute("aria-pressed", String(liked));

    showToast(liked ? "Added to favourites!" : "Removed from favourites.");
  });

  // Information tabs
  const tabContent = {
    overview: overviewHTML,
    care: careHTML,
    specifications: specificationsHTML,
    shipping: shippingHTML
  };

  document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(tab => {
        const active = tab === button;

        tab.classList.toggle("active", active);
        tab.setAttribute("aria-selected", String(active));
      });

      $("#tabContent").innerHTML = tabContent[button.dataset.tab]();
    });
  });

  // Mobile navigation
  $("#menuBtn").addEventListener("click", () => {
    const nav = $("#navigation");
    nav.classList.toggle("open");
  });

  $("#year").textContent = new Date().getFullYear();

  renderProduct();
})();
