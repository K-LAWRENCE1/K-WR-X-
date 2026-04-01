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
  if (text.includes('hi') || text.includes('hello') || text.includes('hey')) {
    return 'Hi, welcome to KAWREX. We sell premium gaming phones, tablets, headsets, and accessories. You can ask about prices, recommendations, payment, delivery, availability, or any other gadget you want.';
  }
  if (text.includes('how are you')) {
    return 'I am doing great and ready to help you. You can ask me about products, prices, payment, delivery, or the best device for your needs.';
  }
  if (text.includes('who are you')) {
    return 'I am the KAWREX website assistant. I help customers with product questions, recommendations, prices, payment, delivery, and support.';
  }
  if (text.includes('what do you sell') || text.includes('what do you have')) {
    return 'We sell gaming phones, tablets, headsets, thumb sleeves, and other gaming accessories. If the exact item you want is not listed, you can also contact us on WhatsApp.';
  }
  if (text.includes('ipad pro')) {
    return 'Yes, the iPad Pro M4 is available. It is one of the most premium options on the store and it is great for gaming, streaming, editing, and heavy multitasking.';
  }
  if (text.includes('ipad air')) {
    return 'Yes, the iPad Air M2 is available. It gives strong performance with a more balanced price, so it is a very good option if you want both quality and value.';
  }
  if (text.includes('lenovo') || text.includes('legion')) {
    return 'The Lenovo Legion Y700 is available. It is a solid gaming tablet with smooth performance, a good display, and a strong gaming feel.';
  }
  if (text.includes('rog') || text.includes('asus') || text.includes('rog phone')) {
    return 'Yes, the ASUS ROG Phone 8 Pro is available. It is one of the strongest gaming phone options for serious mobile gamers.';
  }
  if (text.includes('headset')) {
    return 'Yes, the gaming headset is available. It is listed in the products section and you can add it directly to your cart.';
  }
  if (text.includes('thumb') || text.includes('sleeves')) {
    return 'Yes, thumb sleeves are available. They help improve grip, comfort, and touch control during gaming.';
  }
  if (text.includes('tablet')) {
    return 'We currently have tablet options like iPad Pro M4, iPad Air M2, and Lenovo Legion Y700. If you want, I can help you choose based on your budget and gaming style.';
  }
  if (text.includes('phone')) {
    return 'We have gaming phone options like the ASUS ROG Phone 8 Pro. If you want powerful mobile gaming performance, that is one of the best choices on the site.';
  }
  if (text.includes('accessories')) {
    return 'Yes, we sell gaming accessories too, including thumb sleeves and headset options. If you need something else, you can contact us directly on WhatsApp.';
  }
  if (text.includes('available') || text.includes('do you have')) {
    return 'Some products are already listed on the website. If you do not see the exact gadget you want, contact us on WhatsApp and we will help you directly.';
  }
  if (text.includes('recommend') || text.includes('best for gaming') || text.includes('best one') || text.includes('which is best')) {
    return 'If you want the best premium tablet, the iPad Pro M4 stands out. If you want a strong balance of performance and price, the iPad Air M2 is a great choice. If you want a gaming phone, the ASUS ROG Phone 8 Pro is one of the best options.';
  }
  if (text.includes('cheap') || text.includes('budget') || text.includes('affordable') || text.includes('cheapest')) {
    return 'If you want a more budget-friendly option, the Lenovo Legion Y700 and thumb sleeves are easier starting points. If you want premium level, the iPad Pro and ASUS ROG are stronger choices.';
  }
  if (text.includes('price') || text.includes('cost') || text.includes('how much')) {
    return 'The prices are shown in the product section. If you tell me the exact product name, I can guide you more directly.';
  }
  if (text.includes('payment') || text.includes('bank') || text.includes('account number')) {
    return 'Payment is by bank transfer for now. The bank name, account name, and account number are shown clearly in the cart section.';
  }
  if (text.includes('delivery') || text.includes('shipping') || text.includes('ship')) {
    return 'After payment, send proof of payment on WhatsApp so delivery can be arranged and confirmed properly.';
  }
  if (text.includes('cart')) {
    return 'When you tap Add to Cart, the product is added immediately and the page moves to the cart section automatically so you can continue your order faster.';
  }
  if (text.includes('contact') || text.includes('whatsapp') || text.includes('number')) {
    return 'You can contact us directly on WhatsApp through this number: +234-8069564602.';
  }
  if (
    text.includes('other gadget') ||
    text.includes('other gadgets') ||
    text.includes('other device') ||
    text.includes('other devices') ||
    text.includes('gaming device') ||
    text.includes('gaming devices')
  ) {
    return 'Yes, we also sell other gadgets and gaming devices apart from the ones listed on the website. If you do not see the exact item you want, please contact us directly on WhatsApp: +234-8069564602.';
  }
  if (text.includes('thank')) {
    return 'You are welcome. If you need help with products, prices, payment, or recommendations, just ask.';
  }
  return 'I can help with gaming tablets, gaming phones, headsets, thumb sleeves, prices, payment, delivery, recommendations, and other gadgets too. If the exact product is not listed, please contact us on WhatsApp: +234-8069564602.';
}
if (chatBtn && chatInput) {
  chatBtn.addEventListener('click', function () {
    const message = chatInput.value.trim();
    if (!message) return;
    addMessage(message, 'user');
    setTimeout(function () {
      addMessage(getAiReply(message), 'ai');
    }, 300);
    chatInput.value = '';
  });
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
    cartItemsContainer.innerHTML = 'Your cart is empty.';
    cartTotal.textContent = '0';
    return;
  }
  let total = 0;
  cartItemsContainer.innerHTML = '';
  cart.forEach(function (item, index) {
    total += Number(item.price);
    const box = document.createElement('div');
    box.className = 'cart-item';
    box.innerHTML =
      '<p><strong>' + item.name + '</strong></p>' +
      '<p>₦' + Number(item.price).toLocaleString() + '</p>' +
      '<button class="btn btn-primary remove-item" data-index="' + index + '">Remove</button>';
    cartItemsContainer.appendChild(box);
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
    cart.push({ name: name, price: price });
    saveCart();
    renderCart();
    const cartSection = document.getElementById('cart');
    if (cartSection) {
      cartSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
if (proceedBtn) {
  proceedBtn.addEventListener('click', function () {
    if (cart.length === 0) {
      proceedMessage.textContent = 'Your cart is empty.';
    } else {
      proceedMessage.textContent = 'Proceed with payment, then send proof on WhatsApp.';
    }
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
    const rect = whatsappButton.getBoundingClient
