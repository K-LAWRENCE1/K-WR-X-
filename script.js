const chatBtn = document.getElementById('chatBtn');
const chatInput = document.getElementById('chatInput');
const chatWindow = document.getElementById('chatWindow');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const proceedBtn = document.getElementById('proceedBtn');
const proceedMessage = document.getElementById('proceedMessage');
const whatsappButton = document.getElementById('floatingWhatsapp');
let cart = JSON.parse(localStorage.getItem('kawrexCart')) || [];
function addMessage(text, type) {
  if (!chatWindow) return;
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble ' + type;
  bubble.textContent = text;
  chatWindow.appendChild(bubble);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
function getAiReply(message) {
  const text = message.toLowerCase().trim();
  if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
    return 'Hi, welcome to KAWREX. We sell premium gaming phones, tablets, headsets, and accessories. Ask me about prices, recommendations, payment, delivery, or other gadgets.';
  }
  if (text.includes('ipad pro')) {
    return 'Yes, the iPad Pro M4 is available. It is one of the most premium options on the store and it is great for gaming, streaming, editing, and heavy multitasking.';
  }
  if (text.includes('ipad air')) {
    return 'The iPad Air M2 is also available. It gives strong performance with a better balance in price, so it is a very solid option.';
  }
  if (text.includes('lenovo') || text.includes('legion')) {
    return 'The Lenovo Legion Y700 is available. It is a strong gaming tablet with a smooth display and good performance.';
  }
  if (text.includes('rog') || text.includes('asus') || text.includes('phone')) {
    return 'Yes, the ASUS ROG Phone 8 Pro is available. It is built for serious mobile gaming and strong performance.';
  }
  if (text.includes('headset')) {
    return 'Yes, we have a gaming headset available. You can add it directly from the products section.';
  }
  if (text.includes('thumb') || text.includes('sleeves')) {
    return 'Thumb sleeves are available too. They help improve grip, comfort, and touch control while gaming.';
  }
  if (text.includes('tablet')) {
    return 'We currently have the iPad Pro M4, iPad Air M2, and Lenovo Legion Y700. If you want, I can help you choose based on budget or performance.';
  }
  if (text.includes('price') || text.includes('cost') || text.includes('how much')) {
    return 'The prices are shown in the products section. If you tell me the exact product name, I can guide you faster.';
  }
  if (text.includes('cheap') || text.includes('budget') || text.includes('affordable')) {
    return 'If you want a more budget-friendly option, the Lenovo Legion Y700 and thumb sleeves are easier starting points. For premium level, the iPad Pro and ASUS ROG are stronger choices.';
  }
  if (text.includes('best') || text.includes('recommend')) {
    return 'For the best premium tablet, the iPad Pro M4 stands out. For a powerful gaming phone, the ASUS ROG Phone 8 Pro is a strong choice. For balance between price and performance, the iPad Air M2 is very good.';
  }
  if (text.includes('cart')) {
    return 'When you tap Add to Cart, the product is added immediately and the page moves to the cart section automatically.';
  }
  if (text.includes('payment') || text.includes('bank') || text.includes('account number')) {
    return 'Payment is by bank transfer for now. The account details are shown clearly in the cart payment area.';
  }
  if (text.includes('delivery') || text.includes('ship')) {
    return 'After payment, send your proof of payment on WhatsApp so delivery can be arranged properly.';
  }
  if (text.includes('whatsapp') || text.includes('contact')) {
    return 'You can contact us directly with the floating WhatsApp button or through this number: +234-8069564602.';
  }
  if (
    text.includes('other gadget') ||
    text.includes('other gadgets') ||
    text.includes('other device') ||
    text.includes('other devices') ||
    text.includes('gaming device') ||
    text.includes('gaming devices') ||
    text.includes('do you have') ||
    text.includes('available')
  ) {
    return 'Yes, we also sell other gadgets and gaming devices apart from the ones listed on the site. If you do not see the exact item you want, message us directly on WhatsApp: +234-8069564602.';
  }
  return 'I can help with product recommendations, prices, gaming phones, tablets, headsets, accessories, payment, delivery, and other gadgets too. If you want something not listed, message us on WhatsApp: +234-8069564602.';
}
if (chatBtn && chatInput) {
  chatBtn.addEventListener('click', function () {
    const message = chatInput.value.trim();
    if (!message) return;
    addMessage(message, 'user');
    const reply = getAiReply(message);
    setTimeout(function () {
      addMessage(reply, 'ai');
    }, 300);
    chatInput.value = '';
  });
}
if (chatInput && chatBtn) {
  chatInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      chatBtn.click();
    }
  });
}
function saveCart() {
  localStorage.setItem('kawrexCart', JSON.stringify(cart));
}
function renderCart() {
  if (!cartItemsContainer || !cartTotal) return;
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    cartTotal.textContent = '0';
    return;
  }
  let total = 0;
  cartItemsContainer.innerHTML = '';
  cart.forEach(function (item, index) {
    total += Number(item.price);
    const itemBox = document.createElement('div');
    itemBox.className = 'cart-item';
    itemBox.innerHTML =
      '<p><strong>' + item.name + '</strong></p>' +
      '<p>₦' + Number(item.price).toLocaleString() + '</p>' +
      '<button class="btn btn-outline remove-item" data-index="' + index + '">Remove</button>';
    cartItemsContainer.appendChild(itemBox);
  });
  cartTotal.textContent = total.toLocaleString();
  const removeButtons = document.querySelectorAll('.remove-item');
  removeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const index = Number(button.getAttribute('data-index'));
      cart.splice(index, 1);
      saveCart();
      renderCart();
    });
  });
}
addToCartButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const name = button.getAttribute('data-name');
    const price = button.getAttribute('data-price');
    cart.push({
      name: name,
      price: price
    });
    saveCart();
    renderCart();
    const oldText = button.textContent;
    button.textContent = 'Added';
    setTimeout(function () {
      button.textContent = oldText;
    }, 800);
    const cartSection = document.getElementById('cart');
    if (cartSection) {
      cartSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
if (proceedBtn) {
  proceedBtn.addEventListener('click', function () {
    if (cart.length === 0) {
      proceedMessage.textContent = 'Your cart is empty.';
      return;
    }
    proceedMessage.textContent = 'Proceed with payment using the bank details above, then send proof of payment on WhatsApp.';
  });
}
if (whatsappButton) {
  let isDragging = false;
  let moved = false;
  let offsetX = 0;
  let offsetY = 0;
  whatsappButton.addEventListener('pointerdown', function (e) {
    isDragging = true;
    moved = false;
    const rect = whatsappButton.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    whatsappButton.style.left = rect.left + 'px';
    whatsappButton.style.top = rect.top + 'px';
    whatsappButton.style.right = 'auto';
    whatsappButton.style.bottom = 'auto';
  });
  document.addEventListener('pointermove', function (e) {
    if (!isDragging) return;
    moved = true;
    whatsappButton.style.left = e.clientX - offsetX + 'px';
    whatsappButton.style.top = e.clientY - offsetY + 'px';
  });
  document.addEventListener('pointerup', function () {
    isDragging = false;
  });
  whatsappButton.addEventListener('click', function (e) {
    if (moved) {
      e.preventDefault();
      moved = false;
      return;
    }
    window.open('https://wa.me/2348069564602', '_blank');
  });
}
window.addEventListener('DOMContentLoaded', function () {
  renderCart();
});
