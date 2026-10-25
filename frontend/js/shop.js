/* Green Cart shop interactions — demo products. PHP/MySQL connection comes later. */
"use strict";

const products = [
{id:1,name:"Monstera Deliciosa",category:"indoor",categoryLabel:"Indoor plant",price:4500,oldPrice:5200,care:"easy",badge:"Bestseller",rating:4.9,reviews:128,description:"Bold split leaves that bring a tropical feel to your home.",image:"https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=85",light:"Bright, indirect light",water:"When the top 2–3 cm of soil dries",soil:"Well-draining potting mix",size:"Medium"},
{id:2,name:"Golden Pothos",category:"indoor",categoryLabel:"Indoor plant",price:1800,oldPrice:null,care:"easy",badge:"Easy care",rating:4.8,reviews:96,description:"A cheerful trailing plant that is happy on shelves and hangers.",image:"https://images.unsplash.com/photo-1616690240055-4c9c8e8f0d8c?auto=format&fit=crop&w=700&q=85",light:"Low to bright indirect light",water:"When the top soil feels dry",soil:"Light, well-draining mix",size:"Small"},
{id:3,name:"Peace Lily",category:"flowering",categoryLabel:"Flowering plant",price:3200,oldPrice:null,care:"easy",badge:"Plant favourite",rating:4.7,reviews:84,description:"Elegant deep-green leaves and graceful white blooms.",image:"https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=85",light:"Medium, indirect light",water:"Keep lightly moist, not soggy",soil:"Rich, well-draining mix",size:"Medium",warning:"May be toxic to pets if chewed."},
{id:4,name:"Snake Plant",category:"indoor",categoryLabel:"Indoor plant",price:2500,oldPrice:null,care:"easy",badge:"Low maintenance",rating:4.9,reviews:143,description:"Sculptural upright leaves for bedrooms, desks and corners.",image:"https://images.unsplash.com/photo-1593482892290-f54927ae2b0c?auto=format&fit=crop&w=700&q=85",light:"Low to bright indirect light",water:"Let soil dry between watering",soil:"Very well-draining mix",size:"Medium",warning:"May be toxic to pets if chewed."},
{id:5,name:"Echeveria Succulent",category:"succulents",categoryLabel:"Succulent",price:1500,oldPrice:null,care:"easy",badge:"Tiny favourite",rating:4.6,reviews:61,description:"A compact rosette succulent for a sunny windowsill.",image:"https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=700&q=85",light:"Bright light with some gentle sun",water:"Only when soil dries completely",soil:"Cactus and succulent mix",size:"Small"},
{id:6,name:"Aloe Vera",category:"medicinal",categoryLabel:"Medicinal plant",price:2200,oldPrice:null,care:"easy",badge:"Useful & lovely",rating:4.8,reviews:102,description:"A hardy succulent with fleshy leaves; keep it in a bright spot.",image:"https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85",light:"Bright light",water:"Allow soil to dry between watering",soil:"Sandy, fast-draining mix",size:"Small"},
{id:7,name:"Jasmine Plant",category:"flowering",categoryLabel:"Flowering plant",price:2800,oldPrice:3300,care:"moderate",badge:"Sweet fragrance",rating:4.7,reviews:74,description:"Delicate blooms and a beautiful fragrance for a bright space.",image:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=85",light:"Bright light and gentle sun",water:"Keep evenly moist during growth",soil:"Rich, well-draining soil",size:"Medium"},
{id:8,name:"Garden Hibiscus",category:"outdoor",categoryLabel:"Outdoor plant",price:3500,oldPrice:null,care:"moderate",badge:"Colour pop",rating:4.6,reviews:57,description:"Tropical colour for a sunny patio, garden or balcony.",image:"https://images.unsplash.com/photo-1597055181300-e3633a917d9c?auto=format&fit=crop&w=700&q=85",light:"Several hours of sunlight",water:"Water regularly in warm weather",soil:"Fertile, well-draining soil",size:"Large"},
{id:9,name:"Basil Herb",category:"herbs",categoryLabel:"Herb plant",price:900,oldPrice:null,care:"moderate",badge:"Kitchen garden",rating:4.5,reviews:48,description:"A fragrant kitchen herb for fresh leaves and home cooking.",image:"https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=700&q=85",light:"Bright light with morning sun",water:"Keep soil lightly moist",soil:"Rich, well-draining potting soil",size:"Small"},
{id:10,name:"Lemon Plant",category:"fruit",categoryLabel:"Fruit plant",price:4800,oldPrice:null,care:"moderate",badge:"Grow your own",rating:4.7,reviews:66,description:"A young citrus plant for a sunny outdoor area or patio.",image:"https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=700&q=85",light:"Full sun for best growth",water:"Water deeply when the top soil dries",soil:"Slightly acidic, well-draining soil",size:"Medium"},
{id:11,name:"Philodendron Pink Princess",category:"rare",categoryLabel:"Rare find",price:9500,oldPrice:null,care:"moderate",badge:"Special find",rating:4.8,reviews:39,description:"A statement plant with striking pink-and-green foliage.",image:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=85",light:"Bright, indirect light",water:"When the top soil begins to dry",soil:"Airy, chunky aroid mix",size:"Medium",warning:"May be toxic to pets if chewed."},
{id:12,name:"Jade Plant",category:"succulents",categoryLabel:"Succulent",price:1900,oldPrice:null,care:"easy",badge:"Lucky green",rating:4.6,reviews:52,description:"A charming, long-lived succulent with rounded glossy leaves.",image:"https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85",light:"Bright light; some gentle sun",water:"Let soil dry fully between watering",soil:"Cactus and succulent mix",size:"Small"},
{id:13,name:"Rose Plant",category:"flowering",categoryLabel:"Flowering plant",price:2600,oldPrice:null,care:"moderate",badge:"Garden classic",rating:4.7,reviews:81,description:"Classic blooms for a sunny garden, patio or large pot.",image:"https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=700&q=85",light:"At least 5–6 hours of sun",water:"Water at the base when soil starts drying",soil:"Fertile, well-draining soil",size:"Medium"},
{id:14,name:"Mint Herb",category:"herbs",categoryLabel:"Herb plant",price:750,oldPrice:null,care:"easy",badge:"Fresh & fragrant",rating:4.5,reviews:43,description:"Fast-growing fresh mint for drinks, cooking and containers.",image:"https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=700&q=85",light:"Morning sun or bright partial shade",water:"Keep soil consistently moist",soil:"Moist, rich potting mix",size:"Small"},
{id:15,name:"Rubber Plant",category:"indoor",categoryLabel:"Indoor plant",price:3900,oldPrice:null,care:"easy",badge:"Bold leaves",rating:4.8,reviews:89,description:"Glossy leaves and a strong silhouette for modern interiors.",image:"https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85",light:"Bright, indirect light",water:"When the top few centimetres dry",soil:"Well-draining houseplant mix",size:"Large"},
{id:16,name:"Bird of Paradise",category:"outdoor",categoryLabel:"Outdoor plant",price:8500,oldPrice:null,care:"moderate",badge:"Statement plant",rating:4.8,reviews:37,description:"Large tropical leaves that make a dramatic focal point.",image:"https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=700&q=85",light:"Very bright light and some sun",water:"Water when the top soil dries",soil:"Rich, well-draining soil",size:"Large"}
];

const PAGE_SIZE = 9;
const state = {search:"",categories:new Set(),care:new Set(),maxPrice:10000,sort:"featured",page:1,favorites:new Set()};
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const formatPrice = price => "LKR " + Number(price).toLocaleString("en-LK");
const escapeHtml = value => String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));

function getFilteredProducts(){
  let result = products.filter(p=>{
    const term=state.search.trim().toLowerCase();
    const searchMatch=!term||[p.name,p.categoryLabel,p.description,p.category].some(v=>v.toLowerCase().includes(term));
    return searchMatch&&(!state.categories.size||state.categories.has(p.category))&&(!state.care.size||state.care.has(p.care))&&p.price<=state.maxPrice;
  });
  if(state.sort==="price-asc")result.sort((a,b)=>a.price-b.price);
  if(state.sort==="price-desc")result.sort((a,b)=>b.price-a.price);
  if(state.sort==="name-asc")result.sort((a,b)=>a.name.localeCompare(b.name));
  return result;
}
function productCard(p){
  const fav=state.favorites.has(p.id);
  return `<article class="product-card"><div class="product-image-wrap">
  <span class="product-badge ${/sale|special/i.test(p.badge)?"sale":""}">${escapeHtml(p.badge)}</span>
  <button class="favorite-button ${fav?"favorited":""}" type="button" data-favorite="${p.id}" aria-label="${fav?"Remove from":"Add to"} favourites" aria-pressed="${fav}">${fav?"♥":"♡"}</button>
  <img class="product-image" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)} plant" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=80'">
  <button class="quick-add" type="button" data-add="${p.id}">＋ Add to cart</button></div>
  <div class="product-meta"><span class="product-category">${escapeHtml(p.categoryLabel)}</span>
  <div class="product-name-row"><button class="product-name" type="button" data-details="${p.id}">${escapeHtml(p.name)}</button><span class="product-rating">★ ${p.rating} (${p.reviews})</span></div>
  <p class="product-description">${escapeHtml(p.description)}</p>
  <div class="product-bottom"><span class="product-price">${p.oldPrice?`<del>${formatPrice(p.oldPrice)}</del>`:""}${formatPrice(p.price)}</span><span class="care-pill">${p.care==="easy"?"Easy care":p.care==="moderate"?"Moderate care":"Plant pro"}</span></div></div></article>`;
}
function renderProducts(){
  const filtered=getFilteredProducts(), pages=Math.max(1,Math.ceil(filtered.length/PAGE_SIZE));
  state.page=Math.min(state.page,pages);
  $("#productGrid").innerHTML=filtered.slice((state.page-1)*PAGE_SIZE,state.page*PAGE_SIZE).map(productCard).join("");
  $("#resultCount").textContent=`${filtered.length} ${filtered.length===1?"plant":"plants"}`;
  $("#emptyState").hidden=filtered.length!==0;$("#productGrid").hidden=filtered.length===0;$("#pagination").hidden=filtered.length<=PAGE_SIZE;
  $("#activeFilterText").textContent=state.search||state.categories.size||state.care.size||state.maxPrice<10000?"Your filtered leafy favourites":"Showing our leafy favourites";
  renderPagination(pages);renderActiveFilters();updateCartCount();updateCategoryChips();
}
function renderPagination(pages){
  if(pages<=1){$("#pagination").innerHTML="";return;}
  let html=`<button class="page-button" data-page="${state.page-1}" aria-label="Previous page" ${state.page===1?"disabled":""}>‹</button>`;
  for(let p=1;p<=pages;p++)html+=`<button class="page-button ${p===state.page?"active":""}" data-page="${p}" aria-label="Page ${p}" aria-current="${p===state.page?"page":"false"}">${p}</button>`;
  html+=`<button class="page-button" data-page="${state.page+1}" aria-label="Next page" ${state.page===pages?"disabled":""}>›</button>`;
  $("#pagination").innerHTML=html;
}
function renderActiveFilters(){
  const tags=[];
  if(state.search)tags.push({key:"search",label:`Search: ${state.search}`});
  state.categories.forEach(v=>tags.push({key:"category",value:v,label:v[0].toUpperCase()+v.slice(1)}));
  state.care.forEach(v=>tags.push({key:"care",value:v,label:v==="easy"?"Easy care":v==="moderate"?"Moderate care":"Plant pro"}));
  if(state.maxPrice<10000)tags.push({key:"price",label:`Up to ${formatPrice(state.maxPrice)}`});
  $("#activeFilters").innerHTML=tags.map(t=>`<span class="filter-tag">${escapeHtml(t.label)} <button type="button" data-remove="${t.key}" ${t.value?`data-value="${t.value}"`:""} aria-label="Remove ${escapeHtml(t.label)} filter">×</button></span>`).join("");
}
function updateCategoryChips(){
  $$(".category-chip").forEach(b=>{const c=b.dataset.category;b.classList.toggle("selected",c==="all"?state.categories.size===0:state.categories.size===1&&state.categories.has(c));});
}
function readCart(){try{const d=JSON.parse(localStorage.getItem("greenCartCart")||"[]");return Array.isArray(d)?d:[];}catch{return[];}}
function updateCartCount(){const el=$("#headerCartCount");if(el)el.textContent=readCart().reduce((sum,item)=>sum+Math.max(0,Number(item.quantity)||0),0);}
function addToCart(id){
  const p=products.find(item=>item.id===Number(id));if(!p)return;
  const cart=readCart(),existing=cart.find(item=>Number(item.id)===p.id);
  if(existing)existing.quantity=(Number(existing.quantity)||0)+1;else cart.push({id:p.id,name:p.name,price:p.price,image:p.image,quantity:1});
  try{localStorage.setItem("greenCartCart",JSON.stringify(cart));updateCartCount();showToast(`${p.name} added to your cart 🌿`);}catch{showToast("Your browser could not save the cart. Check browser storage settings.");}
}
let toastTimer;
function showToast(message){const toast=$("#toast");toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2600);}
function openDetails(id){
  const p=products.find(item=>item.id===Number(id));if(!p)return;
  $("#dialogContent").innerHTML=`<div class="dialog-product"><img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=80'"><div class="dialog-copy"><span class="product-category">${escapeHtml(p.categoryLabel)}</span><h2 id="dialogTitle">${escapeHtml(p.name)}</h2><div class="product-rating">★ ${p.rating} (${p.reviews} reviews)</div><div class="dialog-price">${formatPrice(p.price)}</div><p>${escapeHtml(p.description)}</p><div class="care-details"><div>☀ <strong>Light:</strong> ${escapeHtml(p.light)}</div><div>💧 <strong>Water:</strong> ${escapeHtml(p.water)}</div><div>🌱 <strong>Soil:</strong> ${escapeHtml(p.soil)}</div><div>📏 <strong>Size:</strong> ${escapeHtml(p.size)}</div><div>🪴 <strong>Care:</strong> ${p.care==="easy"?"Easy":p.care==="moderate"?"Moderate":"Advanced"}</div>${p.warning?`<div>⚠ <strong>Pet safety:</strong> ${escapeHtml(p.warning)}</div>`:""}</div><button class="dialog-add" type="button" data-add="${p.id}">＋ Add to cart — ${formatPrice(p.price)}</button></div></div>`;
  const d=$("#productDialog");if(typeof d.showModal==="function")d.showModal();else d.setAttribute("open","");
}
function clearFilters(){
  state.search="";state.categories.clear();state.care.clear();state.maxPrice=10000;state.page=1;
  $("#searchInput").value="";$("#priceRange").value="10000";
  $$('input[name="category"],input[name="care"]').forEach(i=>i.checked=false);
  $("#priceLabel").textContent="LKR 10,000";renderProducts();
}
$("#searchInput").addEventListener("input",e=>{state.search=e.target.value;state.page=1;renderProducts();});
$$('input[name="category"]').forEach(i=>i.addEventListener("change",()=>{i.checked?state.categories.add(i.value):state.categories.delete(i.value);state.page=1;renderProducts();}));
$$('input[name="care"]').forEach(i=>i.addEventListener("change",()=>{i.checked?state.care.add(i.value):state.care.delete(i.value);state.page=1;renderProducts();}));
$("#priceRange").addEventListener("input",e=>{state.maxPrice=Number(e.target.value);$("#priceLabel").textContent=formatPrice(state.maxPrice);state.page=1;renderProducts();});
$("#sortSelect").addEventListener("change",e=>{state.sort=e.target.value;state.page=1;renderProducts();});
$("#clearFilters").addEventListener("click",clearFilters);$("#emptyReset").addEventListener("click",clearFilters);
$$(".category-chip").forEach(b=>b.addEventListener("click",()=>{state.categories.clear();if(b.dataset.category!=="all")state.categories.add(b.dataset.category);$$('input[name="category"]').forEach(i=>i.checked=state.categories.has(i.value));state.page=1;renderProducts();}));
$("#productGrid").addEventListener("click",e=>{
  const add=e.target.closest("[data-add]"),details=e.target.closest("[data-details]"),fav=e.target.closest("[data-favorite]");
  if(add)addToCart(add.dataset.add);if(details)openDetails(details.dataset.details);
  if(fav){const id=Number(fav.dataset.favorite);state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);renderProducts();}
});
$("#dialogContent").addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(b){addToCart(b.dataset.add);$("#productDialog").close();}});
$("#dialogClose").addEventListener("click",()=>$("#productDialog").close());
$("#productDialog").addEventListener("click",e=>{if(e.target===$("#productDialog"))$("#productDialog").close();});
$("#pagination").addEventListener("click",e=>{const b=e.target.closest("[data-page]");if(!b||b.disabled)return;state.page=Number(b.dataset.page);renderProducts();$("#shop").scrollIntoView({behavior:"smooth",block:"start"});});
$("#activeFilters").addEventListener("click",e=>{
  const b=e.target.closest("[data-remove]");if(!b)return;const k=b.dataset.remove;
  if(k==="search"){state.search="";$("#searchInput").value="";}
  if(k==="category"){state.categories.delete(b.dataset.value.toLowerCase());$$('input[name="category"]').forEach(i=>i.checked=state.categories.has(i.value));}
  if(k==="care"){state.care.delete(b.dataset.value==="Easy care"?"easy":b.dataset.value==="Moderate care"?"moderate":"advanced");$$('input[name="care"]').forEach(i=>i.checked=state.care.has(i.value));}
  if(k==="price"){state.maxPrice=10000;$("#priceRange").value="10000";$("#priceLabel").textContent="LKR 10,000";}
  state.page=1;renderProducts();
});
$("#mobileFilterToggle").addEventListener("click",()=>{const open=$("#filterPanel").classList.toggle("open");$("#mobileFilterToggle").setAttribute("aria-expanded",String(open));$("#mobileFilterToggle").textContent=open?"× Hide filters":"☷ Filters";});
$("#menuToggle").addEventListener("click",()=>{const open=$("#mainNav").classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",String(open));$("#menuToggle").setAttribute("aria-label",open?"Close navigation":"Open navigation");$("#menuToggle").textContent=open?"×":"☰";});
$("#currentYear").textContent=new Date().getFullYear();
window.addEventListener("storage",e=>{if(e.key==="greenCartCart")updateCartCount();});
renderProducts();
