(function() {
  // Chatbot Loader Script - Machineovic
  const chatbotUrl = 'https://bosniak-amir.github.io/Machineovic-Chatbot/';
  
  // Create iframe
  const iframe = document.createElement('iframe');
  iframe.id = 'machineovic-chatbot-iframe';
  iframe.src = chatbotUrl;
  iframe.style.cssText = `
    position: fixed !important;
    bottom: 0 !important;
    right: 0 !important;
    width: 100% !important;
    height: 100% !important;
    border: none !important;
    z-index: 2147483647 !important;
    pointer-events: none !important;
    background: transparent !important;
  `;
  
  // Add to page
  if (document.body) {
    document.body.appendChild(iframe);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.appendChild(iframe);
    });
  }
  
  // Make clickable in bottom-right corner
  document.addEventListener('mousemove', (e) => {
    const chatArea = e.clientX > window.innerWidth - 500 && 
                     e.clientY > window.innerHeight - 700;
    iframe.style.pointerEvents = chatArea ? 'all' : 'none';
  });
  
  // Also make clickable on touch devices
  document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    const chatArea = touch.clientX > window.innerWidth - 500 && 
                     touch.clientY > window.innerHeight - 700;
    if (chatArea) iframe.style.pointerEvents = 'all';
  });
  
  console.log('✅ Machineovic Chatbot loaded successfully');
})();
