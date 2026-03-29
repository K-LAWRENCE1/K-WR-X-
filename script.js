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
  if (text.includes('ipad') || text.includes('tablet')) {
    return 'We have Apple iPads and Android tablets available, including iPad Pro M4, iPad Air M2, and Lenovo Legion Y700.';
  }
  if (text.includes('phone') || text.includes('rog')) {
    return 'Our gaming phone option includes the ASUS ROG Phone 8 Pro. It is powerful and great for gaming.';
  }
  if (text.includes('headset')) {
    return 'Yes, we have a gaming headset available. You can find it in the products section.';
  }
  if (text.includes('thumb') || text.includes('sleeves')) {
    return 'Thumb sleeves are available and help improve touch control while gaming.';
  }
  if (text.includes('price') || text.includes('cost')) {
    return 'You can check the prices directly in the product section. If you want, ask me about a specific item.';
  }
  if (text.includes('delivery')) {
    return 'After payment, go to the cart section and tap proceed. Then contact us on WhatsApp for delivery confirmation.';
  }
  if (text.includes('payment') || text.includes('bank')) {
    return 'We currently accept bank transfer payment through the account details shown in the cart section.';
  }
  return 'I can help you with products, prices, payment, delivery, and store recommendations.';
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
  });
});
if (proceedBtn) {
  proceedBtn.addEventListener('click', function () {
    if (cart.length === 0) {
      proceedMessage.textContent = 'Your cart is empty.';
      return;
    }
    proceedMessage.textContent = 'Proceed to payment using the bank details above, then send proof of payment on WhatsApp.';
  });
}
window.addEventListener('DOMContentLoaded', function () {
  renderCart();
});
