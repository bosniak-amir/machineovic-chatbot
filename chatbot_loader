(function() {
  const chatContainer = document.createElement('div');
  chatContainer.id = 'machineovic-chat-container';
  chatContainer.style.cssText = `
    position: fixed !important;
    bottom: 20px !important;
    right: 0 !important;
    width: 450px !important;
    height: 650px !important;
    z-index: 2147483647 !important;
    pointer-events: auto !important;
    opacity: 1 !important;
  `;
  
  const iframe = document.createElement('iframe');
  iframe.id = 'machineovic-chatbot';
  iframe.src = 'https://bosniak-amir.github.io/machineovic-chatbot/';
  iframe.style.cssText = `
    width: 100% !important;
    height: 100% !important;
    border: none !important;
    background: transparent !important;
  `;
  
  chatContainer.appendChild(iframe);
  
  if (document.body) {
    document.body.appendChild(chatContainer);
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(chatContainer);
    });
  }
  
  console.log('✅ Machineovic Chatbot loaded successfully');
})();
