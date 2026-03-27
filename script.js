const chatBtn = document.getElementById('chatBtn');
const chatMessage = document.getElementById('chatMessage');
if (chatBtn) {
  chatBtn.addEventListener('click', () => {
    chatMessage.textContent = 'AI Support: Hi, welcome to KΛWRΞX. I can help you find products, compare devices, and answer store questions.';
  });
}
