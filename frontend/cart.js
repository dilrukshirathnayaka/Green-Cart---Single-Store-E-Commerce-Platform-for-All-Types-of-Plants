
const CART_KEY = "greenCartItems";

const cartItemsContainer = document.getElementById("cartItems");
const emptyCart = document.getElementById("emptyCart");
const itemCountElement = document.getElementById("itemCount");
const summaryItems = document.getElementById("summaryItems");
const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("total");
const checkoutBtn = document.getElementById("checkoutBtn");
const toastElement = document.getElementById("toast");

let toastTimeout;

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY) || "[]");

    if (!Array.isArray(saved)) return [];

    return saved.filter(item =>
      Number.isInteger(item.id) &&
      typeof item.name === "string" &&
      Number.isFinite(item.price) &&
      item.price >= 0 &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0
    );
  } catch {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function money(amount) {
  return "LKR " + amount.toLocaleString("en-LK");
}

function showMessage(message) {
  toastElement.textContent = message;
  toastElement.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 2200);
}

function makeElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;

  return element;
}

function renderCart() {
  const items = readCart();
  cartItemsContainer.replaceChildren();

  const totalQuantity = items.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  itemCountElement.textContent =
    `${totalQuantity} item${totalQuantity === 1 ? "" : "s"}`;

  summaryItems.textContent = totalQuantity;
  subtotalElement.textContent = money(subtotal);
  totalElement.textContent = money(subtotal);

  emptyCart.hidden = items.length !== 0;
  cartItemsContainer.hidden = items.length === 0;
  checkoutBtn.disabled = items.length === 0;

  items.forEach(item => {
    const card = makeElement("article", "cart-item");

    const image = makeElement("img", "item-image");
    image.src = item.image || "";
    image.alt = item.name;

    image.addEventListener("error", () => {
      image.style.visibility = "hidden";
    });

    const details = makeElement("div", "item-details");
    const category = makeElement("p", "item-category", item.category || "Plant");
    const name = makeElement("h3", "", item.name);
    const price = makeElement("p", "item-price", money(item.price));

    const actions = makeElement("div", "item-actions");
    const quantityControl = makeElement("div", "quantity-control");

    const decrease = makeElement("button", "", "−");
    decrease.type = "button";
    decrease.setAttribute("aria-label", `Decrease ${item.name} quantity`);
    decrease.disabled = item.quantity <= 1;

    const quantity = makeElement("span", "", String(item.quantity));

    const increase = makeElement("button", "", "+");
    increase.type = "button";
    increase.setAttribute("aria-label", `Increase ${item.name} quantity`);

    decrease.addEventListener("click", () => {
      updateQuantity(item.id, -1);
    });

    increase.addEventListener("click", () => {
      updateQuantity(item.id, 1);
    });

    quantityControl.append(decrease, quantity, increase);

    const remove = makeElement("button", "remove-btn", "Remove");
    remove.type = "button";

    remove.addEventListener("click", () => {
      removeItem(item.id);
    });

    actions.append(quantityControl, remove);

    const lineTotal = makeElement(
      "p",
      "line-total",
      "Total: " + money(item.price * item.quantity)
    );

    details.append(category, name, price, actions, lineTotal);
    card.append(image, details);
    cartItemsContainer.append(card);
  });
}

function updateQuantity(id, change) {
  const items = readCart();
  const item = items.find(product => product.id === id);

  if (!item) return;

  item.quantity += change;

  if (item.quantity < 1) {
    item.quantity = 1;
  }

  saveCart(items);
  renderCart();
}

function removeItem(id) {
  const updatedItems = readCart().filter(item => item.id !== id);

  saveCart(updatedItems);
  renderCart();
  showMessage("Plant removed from your cart.");
}

checkoutBtn.addEventListener("click", () => {
  if (readCart().length === 0) return;

  showMessage("Checkout page will be added in the next step.");
});

document.getElementById("currentYear").textContent =
  new Date().getFullYear();

window.addEventListener("storage", event => {
  if (event.key === CART_KEY) {
    renderCart();
  }
});

renderCart();
