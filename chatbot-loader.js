(function() {
  const iframe = document.createElement('iframe');
  iframe.id = 'machineovic-chatbot';
  iframe.src = 'https://bosniak-amir.github.io/machineovic-chatbot/';
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
  
  if (document.body) {
    document.body.appendChild(iframe);
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(iframe);
    });
  }
  
  document.addEventListener('mousemove', function(e) {
    const inChatArea = e.clientX > window.innerWidth - 500 && e.clientY > window.innerHeight - 700;
    iframe.style.pointerEvents = inChatArea ? 'all' : 'none';
  });
  
  document.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];
    const inChatArea = touch.clientX > window.innerWidth - 500 && touch.clientY > window.innerHeight - 700;
    if (inChatArea) iframe.style.pointerEvents = 'all';
  });
  
  console.log('✅ Machineovic Chatbot loaded successfully');
})();
