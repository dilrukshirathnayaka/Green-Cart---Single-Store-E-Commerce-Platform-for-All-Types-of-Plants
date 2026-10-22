
const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "Indoor",
    price: 4500,
    tag: "Popular",
    description: "A beautiful tropical plant for your home.",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "Indoor",
    price: 2800,
    tag: "Easy Care",
    description: "A low-maintenance plant for busy people.",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Succulents",
    price: 1500,
    tag: "Best Seller",
    description: "A hardy succulent that loves bright light.",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    name: "Peace Lily",
    category: "Flowering",
    price: 3200,
    tag: "Elegant",
    description: "Lovely white blooms and rich green leaves.",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5,
    name: "Rubber Plant",
    category: "Indoor",
    price: 3800,
    tag: "Trending",
    description: "Glossy leaves that bring life to any room.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6,
    name: "Echeveria Succulent",
    category: "Succulents",
    price: 1200,
    tag: "Small Space",
    description: "A compact succulent perfect for desks.",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 7,
    name: "Garden Hibiscus",
    category: "Outdoor",
    price: 2500,
    tag: "Colourful",
    description: "Bright tropical flowers for your garden.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 8,
    name: "Areca Palm",
    category: "Outdoor",
    price: 5500,
    tag: "Statement Plant",
    description: "A lush palm for a tropical atmosphere.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=700&q=80"
  }
];

const productGrid = document.getElementById("productGrid");
const productCount = document.getElementById("productCount");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const emptyState = document.getElementById("emptyState");
const cartCountElement = document.getElementById("cartCount");
const toast = document.getElementById("toast");

let activeCategory = "All";
let cartCount = 0;
let toastTimer;

function formatPrice(price) {
  return "LKR " + price.toLocaleString("en-LK");
}

function getFilteredPlants() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  let filtered = plants.filter((plant) => {
    const matchesCategory =
      activeCategory === "All" ||
      plant.category === activeCategory;

    const matchesSearch =
      plant.name.toLowerCase().includes(searchTerm) ||
      plant.category.toLowerCase().includes(searchTerm) ||
      plant.description.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  const sortBy = sortSelect.value;

  if (sortBy === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  return filtered;
}

function renderPlants() {
  const filteredPlants = getFilteredPlants();

  productCount.textContent =
    `${filteredPlants.length} plant${filteredPlants.length === 1 ? "" : "s"} found`;

  productGrid.replaceChildren();
  emptyState.hidden = filteredPlants.length !== 0;
  productGrid.hidden = filteredPlants.length === 0;

  filteredPlants.forEach((plant) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image-wrap";

    const image = document.createElement("img");
    image.className = "product-image";
    image.src = plant.image;
    image.alt = plant.name;
    image.loading = "lazy";

    image.addEventListener("error", () => {
      image.alt = `${plant.name} image unavailable`;
      image.style.display = "none";
      imageWrap.style.background = "#eaf2e9";
    });

    const tag = document.createElement("span");
    tag.className = "product-tag";
    tag.textContent = plant.tag;

    imageWrap.append(image, tag);

    const info = document.createElement("div");
    info.className = "product-info";

    const category = document.createElement("p");
    category.className = "product-category";
    category.textContent = plant.category;

    const name = document.createElement("h3");
    name.textContent = plant.name;

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = plant.description;

    const bottom = document.createElement("div");
    bottom.className = "product-bottom";

    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = formatPrice(plant.price);

    const addButton = document.createElement("button");
    addButton.className = "add-cart-btn";
    addButton.type = "button";
    addButton.textContent = "＋ Add to Cart";
    addButton.setAttribute("aria-label", `Add ${plant.name} to cart`);

    addButton.addEventListener("click", () => {
      cartCount += 1;
      cartCountElement.textContent = cartCount;
      showToast(`${plant.name} added to cart!`);
    });

    bottom.append(price, addButton);
    info.append(category, name, description, bottom);
    card.append(imageWrap, info);
    productGrid.append(card);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

document.querySelectorAll(".category-btn").forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    document.querySelectorAll(".category-btn").forEach((item) => {
      item.classList.remove("selected");
    });

    button.classList.add("selected");
    renderPlants();
  });
});

searchInput.addEventListener("input", renderPlants);
sortSelect.addEventListener("change", renderPlants);

document.getElementById("resetFilters").addEventListener("click", () => {
  activeCategory = "All";
  searchInput.value = "";
  sortSelect.value = "featured";

  document.querySelectorAll(".category-btn").forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.category === "All"
    );
  });

  renderPlants();
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.getElementById("currentYear").textContent =
  new Date().getFullYear();

renderPlants();
