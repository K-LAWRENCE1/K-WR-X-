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
  const text = message.toLowerCase();
  if (text.includes('hi') || text.includes('hello') || text.includes('hey')) {
    return 'Hi, welcome to KAWREX. Ask me about products, prices, payment, delivery, or recommendations.';
  }
  if (text.includes('best tablet')) {
    return 'For premium gaming, the iPad Pro M4 is the strongest option. For balance, the iPad Air M2 is a very good choice.';
  }
  if (text.includes('ipad pro')) {
    return 'Yes, the iPad Pro M4 is available and it is one of our best premium options.';
  }
  if (text.includes('ipad air')) {
    return 'Yes, the iPad Air M2 is available and gives strong performance for a better price balance.';
  }
  if (text.includes('lenovo') || text.includes('legion')) {
    return 'The Lenovo Legion Y700 is available and it is a solid gaming tablet.';
  }
  if (text.includes('rog') || text.includes('asus')) {
    return 'Yes, the ASUS ROG Phone 8 Pro is available and great for serious mobile gaming.';
  }
  if (text.includes('headset')) {
    return 'Yes, the gaming headset is available in the products section.';
  }
  if (text.includes('thumb') || text.includes('sleeves')) {
    return 'Yes, thumb sleeves are available and they help with grip and touch control.';
  }
  if (text.includes('price') || text.includes('cost') || text.includes('how much')) {
    return 'The prices are shown under each product card. Tell me the product name if you want a direct answer.';
  }
  if (text.includes('payment') || text.includes('bank')) {
    return 'Payment is by bank transfer for now. The account details are in the cart section.';
  }
  if (text.includes('delivery')) {
    return 'After payment, send proof of payment on WhatsApp so delivery can be arranged.';
  }
  if (text.includes('other') || text.includes('available') || text.includes('gadget')) {
    return 'If the exact gadget is not listed, contact us on WhatsApp and we will help you directly.';
  }
  return 'I can help with gaming tablets, phones, headsets, accessories, prices, payment, and delivery.';
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
