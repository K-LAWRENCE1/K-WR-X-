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
let currentEmail = '';
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
  if (text.includes('delivery') || text.includes('location')) {
    return 'For delivery help, contact customer service on 08069564602 or WhatsApp +234-8069564602.';
  }
  if (text.includes('login') || text.includes('code') || text.includes('account')) {
    return 'Use the Main Login Access section to request a verification code and enter it to access your account.';
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
if (chatInput && chatBtn) {
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      chatBtn.click();
    }
  });
}
if (sendCodeForm) {
  sendCodeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('authEmail');
    currentEmail = emailInput ? emailInput.value.trim() : '';
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
    verifyMessage.textContent = 'Logged out successfully.';
  });
}
window.addEventListener('DOMContentLoaded', () => {
  const savedUser = localStorage.getItem('kawrexUser');
  if (savedUser && accountCard && accountWelcome) {
    accountCard.classList.remove('hidden');
    accountWelcome.textContent = Welcome, ${savedUser};
  }
});
