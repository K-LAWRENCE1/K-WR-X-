// ===== KAWREX shared script =====
// Used by every page: header, cart, animations, sounds.

const WHATSAPP_NUMBER = "2348069564602";
const STORE_EMAIL = "kawrexstore@gmail.com";

const DELIVERY = {
  pickup: { label: "Pick up at the shop", fee: 0 },
  lagos: { label: "Lagos", fee: 3000 },
  outside: { label: "Outside Lagos", fee: 6000 }
};

// ---------- small helpers ----------
function money(value) {
  return "₦" + Number(value).toLocaleString("en-NG");
}

function findProduct(id) {
  return PRODUCTS.find(function (p) {
    return p.id === id;
  });
}

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("kawrexCart")) || [];
    // keep only items that still exist in the product list
    return saved.filter(function (item) {
      return findProduct(item.id);
    }).map(function (item) {
      return { id: item.id, qty: Math.max(1, Number(item.qty) || 1) };
    });
  } catch (e) {
    return [];
  }
}

function writeCart(cart) {
  localStorage.setItem("kawrexCart", JSON.stringify(cart));
  updateCartCount();
}

function cartLines() {
  return readCart().map(function (item) {
    const product = findProduct(item.id);
    return {
      product: product,
      qty: item.qty,
      line: product.price * item.qty
    };
  });
}

function cartSubtotal() {
  return cartLines().reduce(function (sum, line) {
    return sum + line.line;
  }, 0);
}

function cartQuantity() {
  return readCart().reduce(function (sum, item) {
    return sum + item.qty;
  }, 0);
}

function addToCart(id, qty) {
  const cart = readCart();
  const existing = cart.find(function (item) {
    return item.id === id;
  });
  if (existing) {
    existing.qty += qty || 1;
  } else {
    cart.push({ id: id, qty: qty || 1 });
  }
  writeCart(cart);
  coin();
  popSound();
  bumpCartIcon();
}

function updateCartCount() {
  document.querySelectorAll("[data-cart-count]").forEach(function (el) {
    el.textContent = cartQuantity();
    el.classList.remove("bump");
    void el.offsetWidth;
    el.classList.add("bump");
  });
}

function bumpCartIcon() {
  document.querySelectorAll("[data-cart-icon]").forEach(function (el) {
    el.classList.remove("shake");
    void el.offsetWidth;
    el.classList.add("shake");
  });
}

// ---------- sound, made in the browser so there is no audio file to load ----------
let audioCtx = null;
function soundOn() {
  return localStorage.getItem("kawrexSound") !== "off";
}

function popSound() {
  if (!soundOn()) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    const now = audioCtx.currentTime;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(680, now);
    osc.frequency.exponentialRampToValueAtTime(240, now + 0.16);
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.28);

    const sub = audioCtx.createOscillator();
    const subGain = audioCtx.createGain();
    sub.type = "triangle";
    sub.frequency.setValueAtTime(180, now);
    subGain.gain.setValueAtTime(0.28, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    sub.connect(subGain).connect(audioCtx.destination);
    sub.start(now);
    sub.stop(now + 0.22);
  } catch (e) {
    // if the browser blocks audio, the site still works
  }
}

// short tick for taps, page moves and card presses
function tapSound(pitch) {
  if (!soundOn()) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    const now = audioCtx.currentTime;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(pitch || 880, now);
    osc.frequency.exponentialRampToValueAtTime((pitch || 880) * 0.5, now + 0.07);
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.1);
  } catch (e) {
    // silent fail
  }
}

function toggleSound(button) {
  const next = soundOn() ? "off" : "on";
  localStorage.setItem("kawrexSound", next);
  button.textContent = next === "on" ? "Sound on" : "Sound off";
  if (next === "on") popSound();
}


// ---------- sound kit ----------
function audioReady() {
  if (!soundOn()) return null;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  } catch (e) {
    return null;
  }
}

function blip(freq, endFreq, dur, type, vol) {
  const ctx = audioReady();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type || "sine";
  osc.frequency.setValueAtTime(freq, now);
  osc.frequency.exponentialRampToValueAtTime(Math.max(40, endFreq || freq), now + dur);
  gain.gain.setValueAtTime(vol, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + dur + 0.02);
}

// airy sweep, used when moving between pages
function whoosh() {
  const ctx = audioReady();
  if (!ctx) return;
  const now = ctx.currentTime;
  const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.35, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  }
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(400, now);
  filter.frequency.exponentialRampToValueAtTime(2400, now + 0.22);
  filter.Q.value = 1.2;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.22, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.34);
  src.connect(filter).connect(gain).connect(ctx.destination);
  src.start(now);
}

// soft sparkle when a block comes into view
function chime() {
  blip(1180, 1560, 0.18, "sine", 0.10);
  setTimeout(function () {
    blip(1560, 1860, 0.16, "sine", 0.07);
  }, 70);
}

// cash sound for adding to the cart
function coin() {
  blip(1046, 1046, 0.08, "square", 0.16);
  setTimeout(function () {
    blip(1568, 1568, 0.12, "square", 0.14);
  }, 70);
}

// rising notes when an order or swap goes through
function success() {
  [523, 659, 784, 1046].forEach(function (freq, i) {
    setTimeout(function () {
      blip(freq, freq, 0.2, "sine", 0.16);
    }, i * 90);
  });
}

// low soft click for small controls
function clickSound() {
  blip(300, 180, 0.06, "triangle", 0.10);
}

// ---------- header ----------
function buildHeader(active) {
  const holder = document.getElementById("site-header");
  if (!holder) return;

  const links = [
    { href: "index.html", label: "Home" },
    { href: "iphone.html", label: "iPhone" },
    { href: "android.html", label: "Android" },
    { href: "gaming.html", label: "Gaming" },
    { href: "playstation.html", label: "PlayStation" },
    { href: "gadgets.html", label: "Gadgets" },
    { href: "laptops.html", label: "Laptops" },
    { href: "software.html", label: "Software" },
    { href: "swap.html", label: "Swap" }
  ];

  const navHtml = links.map(function (link) {
    const isActive = link.href === active ? " class=\"is-active\"" : "";
    return '<a href="' + link.href + '"' + isActive + ">" + link.label + "</a>";
  }).join("");

  holder.innerHTML =
    '<header class="site-header">' +
    '<a class="logo" href="index.html"><img src="logo-mark.png" alt="KAWREX" />KΛWRΞX</a>' +
    '<nav class="nav">' + navHtml + "</nav>" +
    '<div class="auth-buttons">' +
    '<a href="cart.html" class="cart-pill" data-cart-icon aria-label="Cart">Cart <span class="cart-count" data-cart-count>0</span></a>' +
    '<button type="button" class="sound-btn" id="soundBtn">Sound on</button>' +
    '<button type="button" class="install-btn" id="installBtn" hidden>Get app</button>' +
    "</div>" +
    "</header>";

  const installButton = document.getElementById("installBtn");
  let installEvent = null;
  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    installEvent = event;
    if (installButton) installButton.hidden = false;
  });
  if (installButton) {
    installButton.addEventListener("click", function () {
      if (!installEvent) return;
      installEvent.prompt();
      installEvent = null;
      installButton.hidden = true;
    });
  }

  const soundButton = document.getElementById("soundBtn");
  if (soundButton) {
    soundButton.textContent = soundOn() ? "Sound on" : "Sound off";
    soundButton.addEventListener("click", function () {
      toggleSound(soundButton);
    });
  }

  updateCartCount();
}

// ---------- animations ----------
function startReveal() {
  const items = document.querySelectorAll(".reveal:not(.in)");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (item) {
      item.classList.add("in");
    });
    return;
  }
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
        chime();
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  items.forEach(function (item) {
    observer.observe(item);
  });
}

// flashy ring that blooms wherever you tap a card
function startTapFlash() {
  document.addEventListener("pointerdown", function (event) {
    const card = event.target.closest(".product-card, .gate-card, .stock-strip img");
    if (!card) return;
    tapSound(760);
    const box = card.getBoundingClientRect();
    const ring = document.createElement("span");
    ring.className = "tap-ring";
    ring.style.left = (event.clientX - box.left) + "px";
    ring.style.top = (event.clientY - box.top) + "px";
    if (getComputedStyle(card).position === "static") {
      card.style.position = "relative";
    }
    card.appendChild(ring);
    setTimeout(function () {
      ring.remove();
    }, 700);
  }, { passive: true });
}

// cards lean towards your finger or the mouse
function startTilt() {
  const cards = document.querySelectorAll("[data-tilt]");
  cards.forEach(function (card) {
    function move(clientX, clientY) {
      const box = card.getBoundingClientRect();
      const x = (clientX - box.left) / box.width - 0.5;
      const y = (clientY - box.top) / box.height - 0.5;
      card.style.transform = "perspective(700px) rotateY(" + (x * 12) + "deg) rotateX(" + (-y * 12) + "deg) translateY(-4px)";
    }
    function reset() {
      card.style.transform = "";
    }
    card.addEventListener("pointermove", function (event) {
      move(event.clientX, event.clientY);
    });
    card.addEventListener("pointerleave", reset);
    card.addEventListener("pointercancel", reset);
  });
}

// little "+1" that floats up from the button
function floatPlus(button) {
  const tag = document.createElement("span");
  tag.className = "plus-float";
  tag.textContent = "+1";
  const box = button.getBoundingClientRect();
  tag.style.left = box.left + box.width / 2 + "px";
  tag.style.top = box.top + "px";
  document.body.appendChild(tag);
  setTimeout(function () {
    tag.remove();
  }, 900);
}

// ---------- product card html ----------
function productCard(product, index) {
  const badge = product.badge ? '<span class="badge">' + product.badge + "</span>" : "";
  const cardPhoto = product.image || (product.gallery && product.gallery[0] ? product.gallery[0].image : "");
  const media = cardPhoto
    ? '<img src="' + cardPhoto + '" alt="' + product.name + '" loading="lazy" />'
    : '<span class="card-plate"><span>' + product.name + "</span><em>" + (product.condition || product.specs || "") + "</em></span>";
  return (
    '<article class="product-card reveal" data-tilt style="transition-delay:' + (index % 3) * 70 + 'ms">' +
    '<a class="card-media' + (cardPhoto ? "" : " card-media-plate") + '" href="product.html?id=' + product.id + '">' +
    media +
    badge +
    "</a>" +
    '<div class="card-body">' +
    '<h3><a href="product.html?id=' + product.id + '">' + product.name + "</a></h3>" +
    '<p class="spec">' + product.specs + "</p>" +
    '<p class="price">' + money(product.price) + "</p>" +
    '<button type="button" class="btn btn-primary add-btn" data-add="' + product.id + '">Add to Cart</button>' +
    "</div>" +
    "</article>"
  );
}

function wireAddButtons(root) {
  (root || document).querySelectorAll("[data-add]").forEach(function (button) {
    button.addEventListener("click", function () {
      addToCart(button.getAttribute("data-add"), 1);
      floatPlus(button);
    });
  });
}

// ---------- cart page ----------
function renderCartPage() {
  const holder = document.getElementById("cartLines");
  if (!holder) return;

  const lines = cartLines();

  if (lines.length === 0) {
    holder.innerHTML =
      '<div class="empty-cart">' +
      "<p>Your cart is empty.</p>" +
      '<a class="btn btn-primary" href="gaming.html">Start shopping</a>' +
      "</div>";
    setTotals();
    return;
  }

  holder.innerHTML = lines.map(function (line, index) {
    return (
      '<div class="cart-line reveal in" style="transition-delay:' + index * 50 + 'ms">' +
      '<img src="' + line.product.image + '" alt="' + line.product.name + '" />' +
      '<div class="cart-line-info">' +
      '<h3><a href="product.html?id=' + line.product.id + '">' + line.product.name + "</a></h3>" +
      '<p class="spec">' + line.product.specs + "</p>" +
      '<p class="price">' + money(line.product.price) + "</p>" +
      "</div>" +
      '<div class="cart-line-controls">' +
      '<div class="qty">' +
      '<button type="button" class="qty-btn" data-qty="-1" data-id="' + line.product.id + '" aria-label="Reduce">-</button>' +
      '<span>' + line.qty + "</span>" +
      '<button type="button" class="qty-btn" data-qty="1" data-id="' + line.product.id + '" aria-label="Increase">+</button>' +
      "</div>" +
      '<button type="button" class="link-btn" data-remove="' + line.product.id + '">Remove</button>' +
      "</div>" +
      "</div>"
    );
  }).join("");

  holder.querySelectorAll("[data-qty]").forEach(function (button) {
    button.addEventListener("click", function () {
      const id = button.getAttribute("data-id");
      const step = Number(button.getAttribute("data-qty"));
      const cart = readCart();
      const item = cart.find(function (entry) {
        return entry.id === id;
      });
      if (!item) return;
      item.qty += step;
      writeCart(cart.filter(function (entry) {
        return entry.qty > 0;
      }));
      renderCartPage();
    });
  });

  holder.querySelectorAll("[data-remove]").forEach(function (button) {
    button.addEventListener("click", function () {
      const id = button.getAttribute("data-remove");
      writeCart(readCart().filter(function (entry) {
        return entry.id !== id;
      }));
      renderCartPage();
    });
  });

  setTotals();
}

function setTotals() {
  const subtotalEl = document.getElementById("subtotal");
  const grandEl = document.getElementById("grandTotal");
  if (!subtotalEl) return;
  const subtotal = cartSubtotal();
  subtotalEl.textContent = money(subtotal);
  if (grandEl) {
    const total = subtotal + 0; // delivery is added on the checkout page
    grandEl.textContent = money(total);
  }
  const checkoutBtn = document.getElementById("toCheckout");
  if (checkoutBtn) {
    checkoutBtn.classList.toggle("disabled", cartQuantity() === 0);
  }
}

// ---------- checkout page ----------
function buildOrderText(details) {
  const lines = ["Hello KAWREX, I have made payment for this order:", ""];
  cartLines().forEach(function (line) {
    lines.push("- " + line.product.name + " x" + line.qty + " = " + money(line.line));
  });
  lines.push("");
  lines.push("Items: " + money(cartSubtotal()));
  const zone = DELIVERY[details.zone] || DELIVERY.pickup;
  lines.push("Delivery: " + zone.label + " (" + money(zone.fee) + ")");
  lines.push("TOTAL PAID: " + money(cartSubtotal() + zone.fee));
  lines.push("");
  lines.push("Name: " + details.name);
  lines.push("Phone: " + details.phone);
  lines.push("Address: " + details.address);
  lines.push("");
  lines.push("I am sending my payment proof now.");
  return lines.join("\n");
}

function startCheckout() {
  const form = document.getElementById("checkForm");
  if (!form) return;

  renderCheckoutSummary();

  const zoneSelect = document.getElementById("zone");
  if (zoneSelect) {
    zoneSelect.addEventListener("change", renderCheckoutSummary);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (cartQuantity() === 0) {
      showMessage("Your cart is empty. Add a product first.", true);
      return;
    }

    const details = {
      name: document.getElementById("buyerName").value.trim(),
      phone: document.getElementById("buyerPhone").value.trim(),
      address: document.getElementById("buyerAddress").value.trim(),
      zone: zoneSelect ? zoneSelect.value : "pickup"
    };

    if (!details.name || !details.phone || !details.address) {
      showMessage("Please fill your name, phone and address.", true);
      return;
    }

    const text = buildOrderText(details);
    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
    window.open(url, "_blank");
    showMessage("WhatsApp is opening with your order inside. Tap send and attach your payment proof.", false);
    success();
  });
}

function renderCheckoutSummary() {
  const list = document.getElementById("summaryLines");
  const subtotalEl = document.getElementById("summarySubtotal");
  const feeEl = document.getElementById("summaryFee");
  const totalEl = document.getElementById("summaryTotal");
  if (!list) return;

  const lines = cartLines();
  if (lines.length === 0) {
    list.innerHTML = '<p class="muted">Nothing in the cart yet.</p>';
  } else {
    list.innerHTML = lines.map(function (line) {
      return (
        '<div class="summary-line">' +
        "<span>" + line.product.name + " x" + line.qty + "</span>" +
        "<span>" + money(line.line) + "</span>" +
        "</div>"
      );
    }).join("");
  }

  const zoneSelect = document.getElementById("zone");
  const zone = zoneSelect ? (DELIVERY[zoneSelect.value] || DELIVERY.pickup) : DELIVERY.pickup;
  const subtotal = cartSubtotal();

  if (subtotalEl) subtotalEl.textContent = money(subtotal);
  if (feeEl) feeEl.textContent = money(zone.fee);
  if (totalEl) totalEl.textContent = money(subtotal + zone.fee);

  const payAmount = document.getElementById("payAmount");
  if (payAmount) payAmount.textContent = money(subtotal + zone.fee);
}

function showMessage(text, isError) {
  const box = document.getElementById("checkMessage");
  if (!box) return;
  box.textContent = text;
  box.className = "form-message" + (isError ? " error" : " ok");
  box.classList.remove("pop");
  void box.offsetWidth;
  box.classList.add("pop");
}

// ---------- category pages ----------
function renderCategoryPage() {
  document.querySelectorAll("[data-category]").forEach(function (holder) {
    const category = holder.getAttribute("data-category") || "all";
    const series = holder.getAttribute("data-series");

    let items = category === "all"
      ? PRODUCTS.slice()
      : PRODUCTS.filter(function (product) {
          return product.category === category;
        });

    if (series) {
      items = items.filter(function (product) {
        return String(product.series) === series;
      });
    }

    const limit = Number(holder.getAttribute("data-limit")) || 0;
    if (limit > 0) items = items.slice(0, limit);

    if (items.length === 0) {
      const ask = holder.getAttribute("data-empty") || "Nothing listed here yet, but we can still get it for you.";
      holder.innerHTML =
        '<div class="empty-cart reveal">' +
        "<p>" + ask + "</p>" +
        '<a class="btn btn-primary" href="https://wa.me/' + WHATSAPP_NUMBER + '?text=' +
        encodeURIComponent("Hello KAWREX, do you have this in stock?") +
        '" target="_blank" rel="noopener">Ask on WhatsApp</a>' +
        "</div>";
      return;
    }

    holder.innerHTML = items.map(productCard).join("");
    wireAddButtons(holder);
  });

  startTilt();
  startReveal();
}

// ---------- product page ----------
function renderProductPage() {
  const holder = document.getElementById("productPage");
  if (!holder) return;

  const params = new URLSearchParams(window.location.search);
  const product = findProduct(params.get("id")) || PRODUCTS[0];

  document.title = product.name + " | KAWREX";

  const photos = (product.gallery && product.gallery.length)
    ? product.gallery
    : (product.image ? [{ label: "", image: product.image }] : []);
  const heroPhoto = photos.length ? photos[0].image : "";
  const thumbs = photos.length > 1
    ? photos.map(function (shot) {
        return '<button type="button" class="colour-swatch" data-shot="' + shot.image + '" title="' + (shot.label || product.name) + '">' +
          '<img src="' + shot.image + '" alt="' + (shot.label || product.name) + '" />' +
          "</button>";
      }).join("")
    : "";

  holder.innerHTML =
    '<div class="product-hero">' +
    '<div class="product-photo reveal in' + (heroPhoto ? "" : " product-photo-plate") + '" data-tilt>' +
    (heroPhoto
      ? '<img id="heroImage" src="' + heroPhoto + '" alt="' + product.name + '" />'
      : '<span class="card-plate"><span>' + product.name + "</span><em>" + (product.condition || "") + "</em></span>") +
    (thumbs ? '<div class="colour-row">' + thumbs + "</div>" : "") +
    "</div>" +
    '<div class="product-info reveal in">' +
    '<p class="mini-tag">' + product.specs + "</p>" +
    "<h1>" + product.name + "</h1>" +
    '<p class="price big">' + money(product.price) + "</p>" +
    "<p>" + product.about + "</p>" +
    '<div class="qty-row">' +
    '<button type="button" class="qty-btn" id="minus" aria-label="Reduce">-</button>' +
    '<span id="qtyValue">1</span>' +
    '<button type="button" class="qty-btn" id="plus" aria-label="Increase">+</button>' +
    "</div>" +
    '<button type="button" class="btn btn-primary big-btn" id="addNow">Add to Cart</button>' +
    '<p class="spec">Delivery ₦3,000 in Lagos, ₦6,000 outside. Pay by transfer, send proof on WhatsApp.</p>' +
    "</div>" +
    "</div>";

  let qty = 1;
  const qtyValue = document.getElementById("qtyValue");
  document.getElementById("plus").addEventListener("click", function () {
    clickSound();
    qty += 1;
    qtyValue.textContent = qty;
  });
  document.getElementById("minus").addEventListener("click", function () {
    clickSound();
    qty = Math.max(1, qty - 1);
    qtyValue.textContent = qty;
  });
  holder.querySelectorAll(".colour-swatch").forEach(function (swatch) {
    swatch.addEventListener("click", function () {
      const hero = document.getElementById("heroImage");
      if (hero) hero.src = swatch.getAttribute("data-shot");
      clickSound();
    });
  });

  document.getElementById("addNow").addEventListener("click", function (event) {
    addToCart(product.id, qty);
    floatPlus(event.currentTarget);
  });

  const related = PRODUCTS.filter(function (item) {
    return item.category === product.category && item.id !== product.id;
  }).slice(0, 3);

  const relatedHolder = document.getElementById("related");
  if (relatedHolder && related.length > 0) {
    relatedHolder.innerHTML = related.map(productCard).join("");
    wireAddButtons(relatedHolder);
    startTilt();
    startReveal();
  }
}

// ---------- swap page ----------
function startSwapForm() {
  const form = document.getElementById("swapForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const device = document.getElementById("swapDevice").value.trim();
    const condition = document.getElementById("swapCondition").value;
    const storage = document.getElementById("swapStorage").value.trim();
    const wants = document.getElementById("swapWants").value.trim();
    const name = document.getElementById("swapName").value.trim();
    const phone = document.getElementById("swapPhone").value.trim();

    const lines = [
      "Hello KAWREX, I want to swap a device.",
      "",
      "My device: " + device,
      "Condition: " + condition,
      "Storage: " + (storage || "not sure"),
      "What I want: " + (wants || "advice on what to take"),
      "",
      "Name: " + name,
      "Phone: " + phone,
      "",
      "I will send photos of the device now."
    ];

    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n")), "_blank");

    const message = document.getElementById("swapMessage");
    if (message) {
      message.textContent = "WhatsApp is opening with your details. Send it with the photos and we will quote you.";
      message.className = "form-message ok";
      success();
    }
  });
}

// soft tick when the page opens, so it feels alive straight away
function startPageSound() {
  document.addEventListener("click", function (event) {
    const link = event.target.closest("a");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    if (!href || href.startsWith("#") || href.startsWith("http")) return;
    whoosh();
  }, true);
}

// ---------- boot ----------
document.addEventListener("DOMContentLoaded", function () {
  const active = document.body.getAttribute("data-page") || "index.html";
  buildHeader(active);
  startReveal();
  startTilt();
  startTapFlash();
  startPageSound();
  wireAddButtons(document);
  renderCartPage();
  renderCategoryPage();
  renderProductPage();
  startCheckout();
  startSwapForm();
  updateCartCount();
  // register the service worker so the app can be installed on a phone
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
  startReveal();
  // safety net: never leave a card invisible because the watcher missed it
  setTimeout(function () {
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) {
      el.classList.add("in");
    });
  }, 900);
});
