const chatBtn = document.getElementById('chatBtn');
const chatInput = document.getElementById('chatInput');
const chatWindow = document.getElementById('chatWindow');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginMessage = document.getElementById('loginMessage');
const signupMessage = document.getElementById('signupMessage');
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
    return 'Our gaming phones include ASUS ROG Phone 8 Pro and other strong gaming devices. Tell me your budget and I can suggest one.';
  }
  if (text.includes('controller')) {
    return 'We stock PS3, PS4, and PS5 controllers. You can also ask about prices for pairs or gaming bundles.';
  }
  if (text.includes('price') || text.includes('cost')) {
    return 'Prices are shown on the product cards. If you want, ask for a specific product and I will point it out quickly.';
  }
  if (text.includes('delivery') || text.includes('location')) {
    return 'For delivery help, contact customer service on 08069564602 or WhatsApp +234-8069564602.';
  }
  if (text.includes('login') || text.includes('sign up') || text.includes('signup') || text.includes('account')) {
    return 'You can use the login and sign up section below to enter your details. This version saves the form flow visually for now.';
  }
  return 'I can help with products, prices, delivery, login help, tablets, phones, accessories, and recommendations.';
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
if (chatInput) {
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      chatBtn.click();
    }
  });
}
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginMessage.textContent = 'Login submitted successfully. A live account system can be connected later.';
  });
}
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    signupMessage.textContent = 'Account created in demo mode. Live email/SMS verification can be connected later.';
  });
}
