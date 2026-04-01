const chatBtn = document.getElementById('chatBtn');
const chatInput = document.getElementById('chatInput');
const chatWindow = document.getElementById('chatWindow');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const proceedBtn = document.getElementById('proceedBtn');
const proceedMessage = document.getElementById('proceedMessage');
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
  const text = message.toLowerCase();
  if (text.includes('ipad pro')) {
    return 'Yes, the iPad Pro M4 is available. It is one of the most premium options on the store.';
  }
  if (text.includes('ipad air')) {
    return 'The iPad Air M2 is available too. It gives strong performance with a more balanced price.';
  }
  if (text.includes('ipad') || text.includes('tablet')) {
    return 'We have gaming tablets like iPad Pro M4, iPad Air M2, and Lenovo Legion Y700. I can help you choose the best one.';
  }
  if (text.includes('lenovo') || text.includes('legion')) {
    return 'The Lenovo Legion Y700 is available. It is a solid gaming tablet with a smooth display and strong performance.';
  }
  if (text.includes('rog') || text.includes('asus') || text.includes('phone')) {
    return 'The ASUS ROG Phone 8 Pro is available and is one of the strongest gaming phone options on the site.';
  }
  if (text.includes('headset')) {
    return 'Yes, we have a gaming headset available. You can add it directly to cart from the products section.';
  }
  if (text.includes('thumb') || text.includes('sleeves')) {
    return 'Thumb sleeves are available and they help improve comfort and control while gaming.';
  }
  if (
    text.includes('other device') ||
    text.includes('other devices') ||
    text.includes('gaming device') ||
    text.includes('gaming devices') ||
    text.includes('gadget') ||
    text.includes('gadgets') ||
    text.includes('do you have') ||
    text.includes('other')
  ) {
    return 'Yes, we sell other gadgets, accessories, and gaming devices too. Please message us on WhatsApp: +234-8069564602.';
  }
  if (text.includes('price') || text.includes('cost') || text.includes('how much')) {
    return 'The prices are shown in the products section. If you mention a product name, I can answer more directly.';
  }
  if (text.includes('cart')) {
    return 'When you tap Add to Cart, the item is added and the page moves to the cart section automatically.';
  }
  if (text.includes('delivery')) {
    return 'After payment, send your proof of payment on WhatsApp so delivery can be arranged.';
  }
  if (text.includes('payment') || text.includes('bank') || text.includes('account number')) {
    return 'Payment is by bank transfer for now. The account details are shown in the cart payment area.';
  }
  if (text.includes('hello') || text.includes('hi')) {
    return 'Hi, welcome to KAWREX. I can help with products, prices, payment, delivery, and recommendations.';
  }
  return 'I can help with gaming phones, tablets, headsets, thumb sleeves, prices, cart, payment, and delivery. For other gadgets, please message us on WhatsApp: +234-8069564602.';
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
window.addEventListener('DOMContentLoaded', function () {
  renderCart();
});
