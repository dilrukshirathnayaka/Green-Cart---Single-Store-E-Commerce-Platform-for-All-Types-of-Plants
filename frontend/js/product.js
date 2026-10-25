
(() => {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const CART_KEY = "greenCartCart";

  // GREEN CART - 16 PLANTS
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
      description: "A beautiful tropical plant with distinctive split leaves.",
      images: [
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Bright indirect light",
      water: "When top soil dries",
      difficulty: "Easy",
      soil: "Airy, well-draining potting mix",
      humidity: "Medium to high",
      size: "Approximately 30–60 cm; varies by plant",
      pet: "May be toxic if chewed. Keep away from pets and children.",
      overview: "Monstera deliciosa is loved for its distinctive split leaves. Keep it in bright indirect light and use a well-draining potting mix.",
      care: [
        ["Light", "Bright indirect light is ideal."],
        ["Water", "Check the top 2–3 cm of soil before watering."],
        ["Soil", "Use an airy, well-draining potting mix."],
        ["Humidity", "Moderate to high humidity can help."],
        ["Fertiliser", "Feed during active growth according to the label."],
        ["Common issues", "Yellow leaves can be associated with overwatering."]
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
      description: "A leafy trailing plant for shelves, desks and hanging planters.",
      images: [
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Medium to bright indirect light",
      water: "When top soil dries",
      difficulty: "Easy",
      soil: "Well-draining potting mix",
      humidity: "Average",
      size: "Trailing vines; varies",
      pet: "May be toxic if chewed. Keep away from pets and children.",
      overview: "Golden pothos develops attractive trailing vines. Give it room to trail and trim it when needed.",
      care: [
        ["Light", "Medium to bright indirect light is suitable."],
        ["Water", "Water after the top layer of soil dries."],
        ["Soil", "Use a potting mix with good drainage."],
        ["Humidity", "Average indoor humidity is generally suitable."],
        ["Fertiliser", "Feed lightly during active growth."],
        ["Common issues", "Yellow leaves can be linked to overwatering."]
      ]
    },

    "peace-lily": {
      id: "plant-peace-lily",
      slug: "peace-lily",
      name: "Peace Lily",
      category: "Indoor Plants",
      price: 3250,
      oldPrice: 3800,
      rating: "4.8 (64 reviews)",
      badge: "POPULAR",
      description: "An elegant indoor plant with glossy green leaves.",
      images: [
        "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Indirect light",
      water: "When top soil begins to dry",
      difficulty: "Easy",
      soil: "Well-draining potting mix",
      humidity: "Medium to high",
      size: "Varies by plant",
      pet: "May be toxic if chewed. Keep away from pets and children.",
      overview: "Peace lilies are valued for their green foliage and attractive flowers. Avoid waterlogged soil.",
      care: [
        ["Light", "Provide indirect light."],
        ["Water", "Check the soil before watering."],
        ["Soil", "Use well-draining potting mix."],
        ["Humidity", "Moderate humidity is suitable."],
        ["Fertiliser", "Follow the fertiliser label."],
        ["Common issues", "Check watering if leaves turn yellow."]
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
      description: "A stylish upright plant for modern interiors.",
      images: [
        "https://images.unsplash.com/photo-1593482892290-f54927ae2b8b?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Low to bright indirect light",
      water: "When soil dries completely",
      difficulty: "Very easy",
      soil: "Fast-draining potting mix",
      humidity: "Average",
      size: "Varies by plant",
      pet: "May be toxic if chewed. Keep away from pets and children.",
      overview: "Snake plants tolerate different indoor light conditions. Allow the soil to dry between watering.",
      care: [
        ["Light", "Tolerates low to bright indirect light."],
        ["Water", "Let the potting mix dry before watering again."],
        ["Soil", "Use fast-draining soil."],
        ["Humidity", "Typical indoor humidity is suitable."],
        ["Fertiliser", "Feed sparingly during active growth."],
        ["Common issues", "Soft or yellow leaves may indicate overwatering."]
      ]
    },

    echeveria: {
      id: "plant-echeveria",
      slug: "echeveria",
      name: "Echeveria Succulent",
      category: "Succulents",
      price: 1450,
      oldPrice: 1750,
      rating: "4.7 (42 reviews)",
      badge: "SUCCULENT",
      description: "A compact succulent with rosette-shaped leaves.",
      images: [
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Bright light",
      water: "When soil dries completely",
      difficulty: "Easy",
      soil: "Cactus and succulent mix",
      humidity: "Low to average",
      size: "Compact",
      pet: "Check the exact variety for pet safety.",
      overview: "Echeveria prefers bright light and excellent drainage.",
      care: [
        ["Light", "Provide plenty of bright light."],
        ["Water", "Allow soil to dry completely."],
        ["Soil", "Use succulent potting mix."],
        ["Humidity", "Avoid excessive moisture."],
        ["Fertiliser", "Feed sparingly during growth."],
        ["Common issues", "Soft leaves can indicate excess water."]
      ]
    },

    "aloe-vera": {
      id: "plant-aloe-vera",
      slug: "aloe-vera",
      name: "Aloe Vera",
      category: "Succulents",
      price: 1650,
      oldPrice: 1950,
      rating: "4.8 (53 reviews)",
      badge: "EASY CARE",
      description: "A hardy succulent with thick, fleshy green leaves.",
      images: [
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Bright light",
      water: "When soil dries",
      difficulty: "Easy",
      soil: "Fast-draining succulent mix",
      humidity: "Low to average",
      size: "Varies by plant",
      pet: "May be toxic if chewed. Keep away from pets and children.",
      overview: "Aloe Vera grows best in bright conditions and well-draining soil.",
      care: [
        ["Light", "Provide bright light."],
        ["Water", "Let soil dry between watering."],
        ["Soil", "Use fast-draining soil."],
        ["Humidity", "Average indoor humidity works."],
        ["Fertiliser", "Feed sparingly."],
        ["Common issues", "Avoid waterlogged soil."]
      ]
    },

    jasmine: {
      id: "plant-jasmine",
      slug: "jasmine",
      name: "Jasmine Plant",
      category: "Flowering Plants",
      price: 2250,
      oldPrice: 2700,
      rating: "4.7 (35 reviews)",
      badge: "FRAGRANT",
      description: "A flowering plant known for its fragrant blooms.",
      images: [
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Bright light",
      water: "Keep soil lightly moist",
      difficulty: "Moderate",
      soil: "Rich, well-draining soil",
      humidity: "Moderate",
      size: "Varies by variety",
      pet: "Safety depends on the jasmine species.",
      overview: "Jasmine generally benefits from bright light and regular care.",
      care: [
        ["Light", "Provide bright light."],
        ["Water", "Avoid waterlogged soil."],
        ["Soil", "Use fertile, well-draining soil."],
        ["Humidity", "Provide suitable airflow."],
        ["Fertiliser", "Feed during active growth."],
        ["Common issues", "Check light and watering if flowering declines."]
      ]
    },

    hibiscus: {
      id: "plant-hibiscus",
      slug: "hibiscus",
      name: "Garden Hibiscus",
      category: "Flowering Plants",
      price: 2850,
      oldPrice: 3300,
      rating: "4.8 (47 reviews)",
      badge: "FLOWERING",
      description: "A colourful flowering plant for sunny gardens.",
      images: [
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Full sun to bright light",
      water: "Regular watering",
      difficulty: "Moderate",
      soil: "Fertile, well-draining soil",
      humidity: "Moderate",
      size: "Varies by variety",
      pet: "Check the exact variety for pet safety.",
      overview: "Hibiscus needs suitable light and well-draining soil for healthy growth.",
      care: [
        ["Light", "Provide ample sunlight."],
        ["Water", "Water when the surface begins to dry."],
        ["Soil", "Use fertile, well-draining soil."],
        ["Humidity", "Provide good airflow."],
        ["Fertiliser", "Follow a suitable fertiliser label."],
        ["Common issues", "Inspect regularly for pests."]
      ]
    },

    basil: {
      id: "plant-basil",
      slug: "basil",
      name: "Basil Herb",
      category: "Herbs",
      price: 850,
      oldPrice: 1100,
      rating: "4.7 (31 reviews)",
      badge: "KITCHEN HERB",
      description: "A useful culinary herb for home gardens.",
      images: [
        "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Bright light",
      water: "Keep soil lightly moist",
      difficulty: "Easy",
      soil: "Rich, well-draining soil",
      humidity: "Moderate",
      size: "Compact herb",
      pet: "Confirm the exact variety before consumption.",
      overview: "Basil grows well with sufficient light and consistent soil moisture.",
      care: [
        ["Light", "Provide plenty of light."],
        ["Water", "Keep soil lightly moist, not soggy."],
        ["Soil", "Use fertile soil."],
        ["Humidity", "Provide good airflow."],
        ["Fertiliser", "Feed lightly as needed."],
        ["Common issues", "Avoid drying out completely."]
      ]
    },

    lemon: {
      id: "plant-lemon",
      slug: "lemon",
      name: "Lemon Plant",
      category: "Fruit Plants",
      price: 3500,
      oldPrice: 4100,
      rating: "4.8 (39 reviews)",
      badge: "FRUIT PLANT",
      description: "A citrus plant for a sunny home garden.",
      images: [
        "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Full sun",
      water: "When top soil begins to dry",
      difficulty: "Moderate",
      soil: "Well-draining citrus mix",
      humidity: "Outdoor conditions",
      size: "Depends on variety and pot",
      pet: "Some citrus plant parts can be harmful to pets.",
      overview: "Lemon plants need ample sunlight and suitable drainage.",
      care: [
        ["Light", "Choose a sunny location."],
        ["Water", "Water deeply without waterlogging."],
        ["Soil", "Use well-draining soil."],
        ["Humidity", "Provide suitable airflow."],
        ["Fertiliser", "Use citrus fertiliser as directed."],
        ["Common issues", "Check for pests and leaf discolouration."]
      ]
    },

    "pink-princess": {
      id: "plant-pink-princess",
      slug: "pink-princess",
      name: "Philodendron Pink Princess",
      category: "Indoor Plants",
      price: 6500,
      oldPrice: 7500,
      rating: "4.9 (27 reviews)",
      badge: "PREMIUM",
      description: "A decorative philodendron with pink and green foliage.",
      images: [
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Bright indirect light",
      water: "When top soil dries",
      difficulty: "Moderate",
      soil: "Airy, well-draining mix",
      humidity: "Medium to high",
      size: "Varies by plant",
      pet: "May be toxic if chewed. Keep away from pets and children.",
      overview: "Bright indirect light can help maintain attractive foliage.",
      care: [
        ["Light", "Use bright indirect light."],
        ["Water", "Check soil before watering."],
        ["Soil", "Use an airy potting mix."],
        ["Humidity", "Moderate to high humidity can help."],
        ["Fertiliser", "Feed during active growth."],
        ["Common issues", "Avoid overwatering."]
      ]
    },

    jade: {
      id: "plant-jade",
      slug: "jade",
      name: "Jade Plant",
      category: "Succulents",
      price: 1950,
      oldPrice: 2300,
      rating: "4.8 (44 reviews)",
      badge: "FAVOURITE",
      description: "A compact succulent with thick, glossy leaves.",
      images: [
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Bright light",
      water: "When soil dries",
      difficulty: "Easy",
      soil: "Succulent potting mix",
      humidity: "Average",
      size: "Varies by plant",
      pet: "May be toxic if chewed. Keep away from pets and children.",
      overview: "Jade plants prefer bright light and soil that drains well.",
      care: [
        ["Light", "Provide bright light."],
        ["Water", "Allow soil to dry between watering."],
        ["Soil", "Use succulent mix."],
        ["Humidity", "Average humidity is suitable."],
        ["Fertiliser", "Feed sparingly."],
        ["Common issues", "Avoid excess water."]
      ]
    },

    rose: {
      id: "plant-rose",
      slug: "rose",
      name: "Rose Plant",
      category: "Flowering Plants",
      price: 2450,
      oldPrice: 2900,
      rating: "4.8 (51 reviews)",
      badge: "CLASSIC",
      description: "A classic flowering plant for a colourful garden.",
      images: [
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Full sun",
      water: "Water when needed",
      difficulty: "Moderate",
      soil: "Fertile, well-draining soil",
      humidity: "Good airflow",
      size: "Depends on variety",
      pet: "Check the exact variety before placing near pets.",
      overview: "Roses generally grow best with sunlight, drainage and regular maintenance.",
      care: [
        ["Light", "Provide several hours of sunlight."],
        ["Water", "Water the soil rather than foliage."],
        ["Soil", "Use fertile, well-draining soil."],
        ["Humidity", "Maintain good airflow."],
        ["Fertiliser", "Use rose fertiliser as directed."],
        ["Common issues", "Inspect for pests and leaf disease."]
      ]
    },

    mint: {
      id: "plant-mint",
      slug: "mint",
      name: "Mint Herb",
      category: "Herbs",
      price: 750,
      oldPrice: 950,
      rating: "4.7 (28 reviews)",
      badge: "KITCHEN HERB",
      description: "A refreshing herb suitable for pots and home gardens.",
      images: [
        "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Partial sun",
      water: "Keep soil moist",
      difficulty: "Easy",
      soil: "Moist, well-draining soil",
      humidity: "Moderate",
      size: "Fast-growing herb",
      pet: "Confirm the plant identity before consumption or use around pets.",
      overview: "Mint grows quickly and benefits from regular moisture.",
      care: [
        ["Light", "Provide partial sun or bright light."],
        ["Water", "Keep soil lightly moist."],
        ["Soil", "Use well-draining soil."],
        ["Humidity", "Provide airflow."],
        ["Fertiliser", "Feed lightly when needed."],
        ["Common issues", "Trim regularly to manage growth."]
      ]
    },

    rubber: {
      id: "plant-rubber",
      slug: "rubber",
      name: "Rubber Plant",
      category: "Indoor Plants",
      price: 3850,
      oldPrice: 4400,
      rating: "4.8 (37 reviews)",
      badge: "INDOOR FAVOURITE",
      description: "A striking indoor plant with large, glossy leaves.",
      images: [
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Bright indirect light",
      water: "When top soil dries",
      difficulty: "Easy",
      soil: "Well-draining potting mix",
      humidity: "Average to high",
      size: "Varies by plant",
      pet: "May be irritating or toxic if chewed. Keep away from pets and children.",
      overview: "Rubber plants prefer stable conditions and well-draining soil.",
      care: [
        ["Light", "Use bright indirect light."],
        ["Water", "Check soil before watering."],
        ["Soil", "Use well-draining potting mix."],
        ["Humidity", "Average indoor humidity often works."],
        ["Fertiliser", "Feed during active growth."],
        ["Common issues", "Avoid sudden changes and overwatering."]
      ]
    },

    "bird-of-paradise": {
      id: "plant-bird-of-paradise",
      slug: "bird-of-paradise",
      name: "Bird of Paradise",
      category: "Indoor Plants",
      price: 7200,
      oldPrice: 8500,
      rating: "4.9 (22 reviews)",
      badge: "STATEMENT PLANT",
      description: "A tropical plant with bold, large leaves.",
      images: [
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85"
      ],
      light: "Bright light",
      water: "When top soil dries",
      difficulty: "Moderate",
      soil: "Rich, well-draining mix",
      humidity: "Medium to high",
      size: "Can grow large",
      pet: "Some varieties can be harmful if chewed. Keep away from pets and children.",
      overview: "Bird of Paradise needs space, good light and careful watering.",
      care: [
        ["Light", "Provide plenty of bright light."],
        ["Water", "Check soil moisture before watering."],
        ["Soil", "Use a well-draining mix."],
        ["Humidity", "Moderate humidity can help."],
        ["Fertiliser", "Feed during active growth."],
        ["Common issues", "Allow enough room for leaves to grow."]
      ]
    }
  };

  // Read the cart saved in the browser.
  function readCart() {
    try {
      const cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
      return Array.isArray(cart) ? cart : [];
    } catch (error) {
      return [];
    }
  }

  function money(value) {
    return "LKR " + Number(value).toLocaleString("en-LK");
  }

  // Read the selected plant from the URL.
  const params = new URLSearchParams(window.location.search);
  const slug = (
    params.get("id") ||
    params.get("slug") ||
    "monstera"
  ).toLowerCase();

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

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) {
      alert(message);
      return;
    }

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  function updateCartCount() {
    const count = readCart().reduce((total, item) => {
      return total + Math.max(0, Number(item.quantity) || 0);
    }, 0);

    const cartCount = $("#cartCount");
    if (cartCount) cartCount.textContent = count;
  }

  function getPrice() {
    return product.price + sizeExtra[selectedSize];
  }

  function updatePrice() {
    const price = $("#productPrice");
    const oldPrice = $("#oldPrice");

    if (price) price.textContent = money(getPrice());

    if (oldPrice) {
      oldPrice.textContent = money(
        product.oldPrice + sizeExtra[selectedSize]
      );
    }
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
        ${product.care.map(([title, description]) => `
          <article class="care-card">
            <h4>${title}</h4>
            <p>${description}</p>
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
            <tr>
              <td>${label}</td>
              <td>${value}</td>
            </tr>
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
        <li>If your plant arrives damaged, take clear photographs and contact the store.</li>
      </ul>
      <h3>Returns and replacements</h3>
      <p>Check the store's published plant return and replacement policy before returning a live plant.</p>
      <p>This page is a frontend demonstration and does not submit real orders or support requests.</p>
    `;
  }

  function renderReviews() {
    const reviewsGrid = $("#reviewsGrid");
    if (!reviewsGrid) return;

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
        text: "I like having plant details and care guidance in one place."
      }
    ];

    reviewsGrid.innerHTML = reviews.map(review => `
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
    const relatedContainer = $("#relatedProducts");
    if (!relatedContainer) return;

    const related = Object.values(products)
      .filter(item => item.slug !== product.slug)
      .slice(0, 4);

    relatedContainer.innerHTML = related.map(item => `
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

  function renderProduct() {
    document.title = product.name + " | Green Cart";

    const fields = {
      "#breadcrumbName": product.name,
      "#productName": product.name,
      "#productCategory": product.category.toUpperCase(),
      "#productDescription": product.description,
      "#productBadge": product.badge,
      "#productRating": product.rating,
      "#quickLight": product.light,
      "#quickWater": product.water,
      "#quickDifficulty": product.difficulty
    };

    Object.entries(fields).forEach(([selector, value]) => {
      const element = $(selector);
      if (element) element.textContent = value;
    });

    const mainImage = $("#mainImage");
    if (mainImage) {
      mainImage.src = product.images[0];
      mainImage.alt = product.name;
    }

    const thumbnails = $("#thumbnails");
    if (thumbnails) {
      thumbnails.innerHTML = product.images.map((src, index) => `
        <button
          type="button"
          class="thumbnail ${index === 0 ? "active" : ""}"
          data-image="${index}"
          aria-label="View product photo ${index + 1}"
          aria-pressed="${index === 0}">
          <img src="${src}" alt="">
        </button>
      `).join("");
    }

    const tabContent = $("#tabContent");
    if (tabContent) tabContent.innerHTML = overviewHTML();

    renderReviews();
    renderRelated();
    updatePrice();
    updateCartCount();
  }

  function changeImage(index) {
    imageIndex = (index + product.images.length) % product.images.length;

    const mainImage = $("#mainImage");
    if (mainImage) mainImage.src = product.images[imageIndex];

    document.querySelectorAll(".thumbnail").forEach((button, i) => {
      button.classList.toggle("active", i === imageIndex);
      button.setAttribute("aria-pressed", String(i === imageIndex));
    });
  }

  function addToCart(goToCart = false) {
    const cart = readCart();
    const itemId = product.id + "-" + selectedSize.toLowerCase();

    const existing = cart.find(item => String(item.id) === itemId);

    if (existing) {
      existing.quantity = Math.min(
        99,
        (Number(existing.quantity) || 0) + quantity
      );
      existing.price = getPrice();
      existing.size = selectedSize;
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
      showToast("Unable to save cart. Please check browser storage.");
      return;
    }

    updateCartCount();

    if (goToCart) {
      window.location.href = "cart.html";
    } else {
      showToast(product.name + " added to your cart!");
    }
  }

  // Product image gallery
  const thumbnails = $("#thumbnails");
  if (thumbnails) {
    thumbnails.addEventListener("click", event => {
      const button = event.target.closest("[data-image]");
      if (button) changeImage(Number(button.dataset.image));
    });
  }

  const prevImage = $("#prevImage");
  if (prevImage) {
    prevImage.addEventListener("click", () => {
      changeImage(imageIndex - 1);
    });
  }

  const nextImage = $("#nextImage");
  if (nextImage) {
    nextImage.addEventListener("click", () => {
      changeImage(imageIndex + 1);
    });
  }

  // Plant size selection
  const sizeOptions = $("#sizeOptions");
  if (sizeOptions) {
    sizeOptions.addEventListener("click", event => {
      const button = event.target.closest("[data-size]");
      if (!button) return;

      const newSize = button.dataset.size;
      if (!Object.prototype.hasOwnProperty.call(sizeExtra, newSize)) return;

      selectedSize = newSize;

      document.querySelectorAll("#sizeOptions button").forEach(item => {
        item.classList.toggle("selected", item === button);
        item.setAttribute("aria-pressed", String(item === button));
      });

      updatePrice();
    });
  }

  // Quantity controls
  const minus = $("#minus");
  if (minus) {
    minus.addEventListener("click", () => {
      quantity = Math.max(1, quantity - 1);
      const quantityInput = $("#quantity");
      if (quantityInput) quantityInput.value = quantity;
    });
  }

  const plus = $("#plus");
  if (plus) {
    plus.addEventListener("click", () => {
      quantity = Math.min(10, quantity + 1);
      const quantityInput = $("#quantity");
      if (quantityInput) quantityInput.value = quantity;
    });
  }

  const quantityInput = $("#quantity");
  if (quantityInput) {
    quantityInput.addEventListener("change", () => {
      quantity = Math.max(
        1,
        Math.min(10, Math.floor(Number(quantityInput.value) || 1))
      );
      quantityInput.value = quantity;
    });
  }

  // Add to Cart and Buy Now
  const addButton = $("#addToCart");
  if (addButton) {
    addButton.addEventListener("click", () => addToCart(false));
  }

  const buyButton = $("#buyNow");
  if (buyButton) {
    buyButton.addEventListener("click", () => addToCart(true));
  }

  // Favourite button
  const favouriteButton = $("#favouriteBtn");
  if (favouriteButton) {
    favouriteButton.addEventListener("click", () => {
      const liked = favouriteButton.classList.toggle("liked");
      favouriteButton.textContent = liked ? "♥" : "♡";
      favouriteButton.setAttribute("aria-pressed", String(liked));
      showToast(liked ? "Added to favourites!" : "Removed from favourites.");
    });
  }

  // Information tabs
  const tabContent = {
    overview: overviewHTML,
    care: careHTML,
    specifications: specificationsHTML,
    shipping: shippingHTML
  };

  document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
      const contentFunction = tabContent[button.dataset.tab];
      if (!contentFunction) return;

      document.querySelectorAll(".tab").forEach(tab => {
        const active = tab === button;
        tab.classList.toggle("active", active);
        tab.setAttribute("aria-selected", String(active));
      });

      const content = $("#tabContent");
      if (content) content.innerHTML = contentFunction();
    });
  });

  // Mobile navigation
  const menuButton = $("#menuBtn");
  if (menuButton) {
    menuButton.addEventListener("click", () => {
      const navigation = $("#navigation");
      if (navigation) navigation.classList.toggle("open");
    });
  }

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  renderProduct();
})();
