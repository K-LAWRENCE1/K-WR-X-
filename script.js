const chatBtn = document.getElementById('chatBtn');
const chatInput = document.getElementById('chatInput');
const chatWindow = document.getElementById('chatWindow');
const sendCodeForm = document.getElementById('sendCodeForm');
const verifyForm = document.getElementById('verifyForm');
const sendCodeMessage = document.getElementById('sendCodeMessage');
const verifyMessage = document.getElementById('verifyMessage');
const accountCard = document.getElementById('accountCard');
const accountWelcome = document.getElementById('accountWelcome');
const logoutBtn = document.getElementById('logoutBtn');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const deliveryForm = document.getElementById('deliveryForm');
const deliveryMessage = document.getElementById('deliveryMessage');
let currentEmail = '';
let cart = JSON.parse(localStorage.getItem('kawrexCart')) || [];
function addMessage(text, type) {
  if (!chatWindow) return;
  const bubble = document.createElement('div');
  bubble.className = chat-bubble ${type};
  bubble.textContent = text;
  chatWindow.appendChild(bubble);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
function getAiReply(message) {
  const text = message.toLowerCase();
  if (text.includes('ipad') || text.includes('tablet')) {
    return 'We have Apple iPads and Android tablets available. Popular options include iPad Pro (M4), iPad Air (M2), and Lenovo Legion Y700.';
  }
  if (text.includes('phone')) {
    return 'Our gaming phones include ASUS ROG Phone 8 Pro. If you want, tell me your budget and I’ll suggest the best option.';
  }
  if (text.includes('headset') || text.includes('earbuds')) {
    return 'We have gaming audio accessories available. Check the product section for headset options.';
  }
  if (text.includes('thumb') || text.includes('sleeves')) {
    return 'Thumb sleeves are available and great for smoother gaming control and sweat reduction.';
  }
  if (text.includes('delivery') || text.includes('address')) {
    return 'After payment, send your proof of payment on WhatsApp and submit your delivery details in the cart section.';
  }
  if (text.includes('payment') || text.includes('bank') || text.includes('transfer')) {
    return 'We currently use bank transfer payment. You’ll see the account details in the Cart & Checkout section.';
  }
  if (text.includes('login') || text.includes('code') || text.includes('account')) {
    return 'Use the Main Login Access section to request a verification code and then enter it below.';
  }
  return 'I can help with products, prices, delivery, payment, login help, tablets, phones, accessories, and recommendations.';
}
if (chatBtn && chatInput) {
  chatBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (!message) return;
    addMessage(message, 'user');
    const reply = getAiReply(message);
    setTimeout(() => addMessage(reply, 'ai'), 400);
    chatInput.value = '';
  });
}
if (chatInput && chatBtn) {
  chatInput.addEventListener('keydown', (e) => {
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
  cart.forEach((item, index) => {
    total += Number(item.price);
    const itemBox = document.createElement('div');
    itemBox.className = 'cart-item';
    itemBox.innerHTML = 
      <p><strong>${item.name}</strong></p>
      <p>₦${Number(item.price).toLocaleString()}</p>
      <button class="btn btn-outline remove-item" data-index="${index}">Remove</button>
    ;
    cartItemsContainer.appendChild(itemBox);
  });
  cartTotal.textContent = total.toLocaleString();
  document.querySelectorAll('.remove-item').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.getAttribute('data-index'));
      cart.splice(index, 1);
      saveCart();
      renderCart();
    });
  });
}
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = button.getAttribute('data-price');
    cart.push({ name, price });
    saveCart();
    renderCart();
    button.textContent = 'Added';
    setTimeout(() => {
      button.textContent = 'Add to Cart';
    }, 1000);
  });
});
if (deliveryForm) {
  deliveryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const customerName = document.getElementById('customerName')?.value.trim();
    const customerPhone = document.getElementById('customerPhone')?.value.trim();
    const customerAddress = document.getElementById('customerAddress')?.value.trim();
    const paymentNote = document.getElementById('paymentNote')?.value.trim();
    if (!customerName || !customerPhone || !customerAddress) {
      deliveryMessage.textContent = 'Please fill in your full delivery details.';
      return;
    }
    deliveryMessage.textContent = 'Delivery details submitted. Please send proof of payment on WhatsApp for confirmation.';
    localStorage.setItem(
      'kawrexDelivery',
      JSON.stringify({
        customerName,
        customerPhone,
        customerAddress,
        paymentNote
      })
    );
  });
}
if (sendCodeForm) {
  sendCodeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('authEmail');
    currentEmail = emailInput ? emailInput.value.trim() : '';
    if (!currentEmail) {
      sendCodeMessage.textContent = 'Enter your email first.';
      return;
    }
    sendCodeMessage.textContent = 'Sending code...';
    try {
      const res = await fetch('/api/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: currentEmail })
      });
      const data = await res.json();
      sendCodeMessage.textContent = data.message || 'Code sent.';
    } catch (error) {
      sendCodeMessage.textContent = 'Could not send code right now.';
    }
  });
}
if (verifyForm) {
  verifyForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const codeInput = document.getElementById('verifyCode');
    const code = codeInput ? codeInput.value.trim() : '';
    if (!code) {
      verifyMessage.textContent = 'Enter the verification code.';
      return;
    }
    verifyMessage.textContent = 'Verifying...';
    try {
      const res = await fetch('/api/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: currentEmail, code })
      });
      const data = await res.json();
      if (data.success) {
        verifyMessage.textContent = 'Verification successful.';
        if (accountCard) accountCard.classList.remove('hidden');
        if (accountWelcome) accountWelcome.textContent = Welcome, ${currentEmail};
        localStorage.setItem('kawrexUser', currentEmail);
      } else {
        verifyMessage.textContent = data.message || 'Invalid code.';
      }
    } catch (error) {
      verifyMessage.textContent = 'Verification failed right now.';
    }
  });
}
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('kawrexUser');
    if (accountCard) accountCard.classList.add('hidden');
    if (verifyMessage) verifyMessage.textContent = 'Logged out successfully.';
  });
}
window.addEventListener('DOMContentLoaded', () => {
  const savedUser = localStorage.getItem('kawrexUser');
  if (savedUser && accountCard && accountWelcome) {
    accountCard.classList.remove('hidden');
    accountWelcome.textContent = Welcome, ${savedUser};
  }
  renderCart();
});
