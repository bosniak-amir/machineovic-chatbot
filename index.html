<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Machineovic Chat Widget</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: transparent;
            padding: 0;
            margin: 0;
            overflow: hidden;
        }

        /* Chat Launcher Button */
        .chat-launcher {
            position: fixed;
            bottom: 20px;
            right: 24px;
            background: linear-gradient(135deg, #002F6C 0%, #FFCD00 100%);
            color: white;
            border: none;
            border-radius: 50px;
            padding: 14px 24px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(0, 47, 108, 0.3);
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
            z-index: 9998;
        }

        .chat-launcher:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 47, 108, 0.4);
        }

        .chat-launcher.hidden {
            display: none;
        }

        /* Chat Widget Container */
        .chat-widget {
            position: fixed;
            bottom: 20px;
            right: 24px;
            width: 400px;
            max-width: calc(100vw - 48px);
            height: 600px;
            max-height: calc(100vh - 48px);
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            z-index: 9999;
            transform: scale(0.9);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
        }

        .chat-widget.open {
            transform: scale(1);
            opacity: 1;
            pointer-events: all;
        }

        /* Dark Mode */
        .chat-widget.dark-mode {
            background: #1a1a1a;
        }

        .chat-widget.dark-mode .chat-header {
            background: #2d2d2d;
            border-bottom-color: #3d3d3d;
        }

        .chat-widget.dark-mode .chat-bot-name {
            color: #ffffff;
        }

        .chat-widget.dark-mode .chat-messages {
            background: #1a1a1a;
        }

        .chat-widget.dark-mode .message-bubble.bot {
            background: #2d2d2d;
            color: #ffffff;
        }

        .chat-widget.dark-mode .typing-indicator {
            background: #2d2d2d;
        }

        .chat-widget.dark-mode .chat-input-area {
            background: #2d2d2d;
            border-top-color: #3d3d3d;
        }

        .chat-widget.dark-mode .chat-input {
            background: #1a1a1a;
            color: #ffffff;
            border-color: #3d3d3d;
        }

        .chat-widget.dark-mode .chat-input::placeholder {
            color: #888;
        }

        .chat-widget.dark-mode .chat-footer {
            background: #2d2d2d;
            color: #888;
        }

        .chat-widget.dark-mode .shortcut-btn {
            background: #2d2d2d;
            color: #ffffff;
            border-color: #3d3d3d;
        }

        .chat-widget.dark-mode .shortcut-btn:hover {
            background: #3d3d3d;
        }

        /* Header */
        .chat-header {
            background: white;
            padding: 16px 20px;
            border-bottom: 1px solid #e5e7eb;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .chat-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            overflow: hidden;
            padding: 4px;
        }

        .chat-avatar img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .chat-header-info {
            flex: 1;
        }

        .chat-bot-name {
            font-size: 18px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 2px;
        }

        .chat-status {
            font-size: 14px;
            color: #10b981;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .chat-status::before {
            content: '';
            width: 8px;
            height: 8px;
            background: #10b981;
            border-radius: 50%;
        }

        .chat-header-actions {
            display: flex;
            gap: 8px;
        }

        .theme-toggle {
            border: 1px solid #d1d5db;
            background: white;
            color: #374151;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            border-radius: 6px;
            padding: 6px 12px;
            transition: all 0.2s;
        }

        .theme-toggle:hover {
            background: #f9fafb;
            border-color: #9ca3af;
        }

        .chat-widget.dark-mode .theme-toggle {
            background: #3d3d3d;
            color: #ffffff;
            border-color: #4d4d4d;
        }

        .chat-widget.dark-mode .theme-toggle:hover {
            background: #4d4d4d;
        }

        .chat-close {
            width: 32px;
            height: 32px;
            border: none;
            background: transparent;
            color: #6b7280;
            font-size: 20px;
            cursor: pointer;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.2s;
        }

        .chat-close:hover {
            background: #f3f4f6;
        }

        .chat-widget.dark-mode .chat-close:hover {
            background: #3d3d3d;
        }

        /* Messages Area */
        .chat-messages {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            background: white;
        }

        .chat-message {
            margin-bottom: 16px;
            display: flex;
            flex-direction: column;
        }

        .chat-message.bot {
            align-items: flex-start;
        }

        .chat-message.user {
            align-items: flex-end;
        }

        .message-avatar {
            width: 32px;
            height: 32px;
            margin-bottom: 4px;
        }

        .message-avatar.bot {
            border-radius: 8px;
            background: #f3f4f6;
            color: #6b7280;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 16px;
        }

        .message-avatar.user {
            border-radius: 50%;
            background: #fef3c7;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
        }

        .message-bubble {
            padding: 12px 16px;
            border-radius: 18px;
            font-size: 15px;
            line-height: 1.5;
            max-width: 75%;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
        }

        .message-bubble.bot {
            background: #f3f4f6;
            color: #6b7280;
            border-bottom-left-radius: 4px;
        }

        .message-bubble.user {
            background: linear-gradient(135deg, #002F6C 0%, #FFCD00 100%);
            color: white;
            border-bottom-right-radius: 4px;
        }

        /* Shortcut Buttons */
        .chat-shortcuts {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            padding: 12px 0 0 0;
            margin-top: 8px;
        }

        .shortcut-btn {
            background: white;
            border: 1px solid #d1d5db;
            color: #374151;
            padding: 8px 16px;
            border-radius: 16px;
            font-size: 14px;
            cursor: pointer;
            font-weight: 500;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            transition: all 0.2s;
        }

        .shortcut-btn:hover {
            background: #f9fafb;
            border-color: #9ca3af;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        /* Input Area */
        .chat-input-area {
            background: white;
            padding: 16px 20px;
            border-top: 1px solid #e5e7eb;
            display: flex;
            gap: 12px;
        }

        .chat-input {
            flex: 1;
            border: 2px solid #e5e7eb;
            border-radius: 24px;
            padding: 10px 18px;
            font-size: 15px;
            outline: none;
            font-family: inherit;
            background: white;
            color: #111827;
        }

        .chat-input:focus {
            border-color: #002F6C;
            box-shadow: 0 0 0 3px rgba(0, 47, 108, 0.1);
        }

        .chat-input::placeholder {
            color: #9ca3af;
        }

        .chat-send-btn {
            background: linear-gradient(135deg, #002F6C 0%, #FFCD00 100%);
            color: white;
            border: none;
            border-radius: 24px;
            padding: 10px 24px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }

        .chat-send-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 2px 8px rgba(0, 47, 108, 0.3);
        }

        .chat-send-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        /* Footer */
        .chat-footer {
            background: white;
            padding: 12px 20px;
            text-align: center;
            font-size: 12px;
            color: #9ca3af;
        }

        .chat-footer a {
            color: #002F6C;
            text-decoration: none;
            font-weight: 700;
        }

        .chat-footer a:hover {
            text-decoration: underline;
        }

        /* Scrollbar */
        .chat-messages::-webkit-scrollbar {
            width: 6px;
        }

        .chat-messages::-webkit-scrollbar-track {
            background: transparent;
        }

        .chat-messages::-webkit-scrollbar-thumb {
            background: #d1d5db;
            border-radius: 3px;
        }

        .chat-messages::-webkit-scrollbar-thumb:hover {
            background: #9ca3af;
        }

        /* Typing Indicator */
        .typing-indicator {
            display: none;
            align-items: center;
            gap: 4px;
            padding: 12px 16px;
            background: #f3f4f6;
            border-radius: 18px;
            border-bottom-left-radius: 4px;
            width: fit-content;
            margin-bottom: 16px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
        }

        .typing-indicator.active {
            display: flex;
        }

        .typing-dot {
            width: 8px;
            height: 8px;
            background: #9ca3af;
            border-radius: 50%;
            animation: typing 1.4s infinite;
        }

        .typing-dot:nth-child(2) {
            animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes typing {
            0%, 60%, 100% {
                transform: translateY(0);
            }
            30% {
                transform: translateY(-10px);
            }
        }

        /* Mobile Responsive */
        @media (max-width: 480px) {
            .chat-widget {
                width: 100%;
                height: 100%;
                max-width: 100%;
                max-height: 100%;
                bottom: 0;
                right: 0;
                border-radius: 0;
            }

            .chat-launcher {
                bottom: 16px;
                right: 16px;
            }
        }
    </style>
</head>
<body>

    <!-- Chat Launcher Button -->
    <button class="chat-launcher" id="chatLauncher">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        Chat with us
    </button>

    <!-- Chat Widget -->
    <div class="chat-widget" id="chatWidget">
        <!-- Header -->
        <div class="chat-header">
            <div class="chat-avatar">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop,q=95/6HQ8MISvz4w1pExr/machineovic_logo-removebg-preview-BTlLAqRhiVSLpNkN.png" alt="Machineovic Logo">
            </div>
            <div class="chat-header-info">
                <div class="chat-bot-name">24/7 Customer Support</div>
                <div class="chat-status">Online</div>
            </div>
            <div class="chat-header-actions">
                <button class="theme-toggle" id="themeToggle">
                    <span class="theme-text">Dark Mode</span>
                </button>
                <button class="chat-close" id="chatClose">×</button>
            </div>
        </div>

        <!-- Messages -->
        <div class="chat-messages" id="chatMessages">
            <!-- Typing Indicator -->
            <div class="typing-indicator" id="typingIndicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>

        <!-- Input Area -->
        <div class="chat-input-area">
            <input 
                type="text" 
                class="chat-input" 
                id="chatInput" 
                placeholder="Type your message..."
                autocomplete="off"
            >
            <button class="chat-send-btn" id="chatSend">Send</button>
        </div>

        <!-- Footer -->
        <div class="chat-footer">
            Powered by <a href="https://machineovic.com" target="_blank" rel="noopener noreferrer">Machineovic</a>
        </div>
    </div>

    <script>
        // Configuration - YOUR WEBHOOK URL
        const CONFIG = {
            // IMPORTANT: Use the PRODUCTION webhook URL from your n8n workflow
            webhookUrl: 'https://n8n.srv1186643.hstgr.cloud/webhook/046374d4-0a82-4235-aa5d-844224df3151/chat',
            botName: 'Machineovic 24/7 Agent',
            shortcuts: [
                { text: 'Product Info', message: 'Tell me about your products' },
                { text: 'Pricing', message: 'What are your pricing options?' },
                { text: 'Track my order', message: 'Can you find my order?' },
                { text: 'Contact', message: 'Who can I contact for more information?' }
            ]
        };

        // Elements
        const chatLauncher = document.getElementById('chatLauncher');
        const chatWidget = document.getElementById('chatWidget');
        const chatClose = document.getElementById('chatClose');
        const chatMessages = document.getElementById('chatMessages');
        const chatInput = document.getElementById('chatInput');
        const chatSend = document.getElementById('chatSend');
        const typingIndicator = document.getElementById('typingIndicator');
        const themeToggle = document.getElementById('themeToggle');
        const themeText = document.querySelector('.theme-text');

        // Session ID for tracking conversation
        let sessionId = generateSessionId();
        let isDarkMode = false;
        let conversationStarted = false;

        // Theme Toggle
        themeToggle.addEventListener('click', function() {
            isDarkMode = !isDarkMode;
            chatWidget.classList.toggle('dark-mode');
            themeText.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
        });

        // Open/Close Chat
        chatLauncher.addEventListener('click', function() {
            chatWidget.classList.add('open');
            chatLauncher.classList.add('hidden');
            chatInput.focus();
            
            // Start conversation when first opened
            if (!conversationStarted) {
                startConversation();
                conversationStarted = true;
            }
        });

        chatClose.addEventListener('click', function() {
            chatWidget.classList.remove('open');
            chatLauncher.classList.remove('hidden');
        });

        // Send Message
        chatSend.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') sendMessage();
        });

        // Start conversation with welcome message
        async function startConversation() {
            // Just show welcome message without calling the webhook
            addWelcomeMessageWithShortcuts();
        }

        function addWelcomeMessageWithShortcuts() {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'chat-message bot';

            const avatar = document.createElement('div');
            avatar.className = 'message-avatar bot';
            avatar.textContent = '🤖';

            const bubble = document.createElement('div');
            bubble.className = 'message-bubble bot';
            
            // Add welcome text
            const welcomeText = document.createElement('div');
            welcomeText.innerHTML = 'Hi! 👋 How can I help you today?<br><br>Send us a chat or use one of the shortcuts below!';
            bubble.appendChild(welcomeText);

            // Add shortcuts
            const shortcutsDiv = document.createElement('div');
            shortcutsDiv.className = 'chat-shortcuts';
            
            CONFIG.shortcuts.forEach(shortcut => {
                const btn = document.createElement('button');
                btn.className = 'shortcut-btn';
                btn.textContent = shortcut.text;
                btn.setAttribute('data-message', shortcut.message);
                btn.addEventListener('click', function() {
                    chatInput.value = this.getAttribute('data-message');
                    sendMessage();
                });
                shortcutsDiv.appendChild(btn);
            });

            bubble.appendChild(shortcutsDiv);
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(bubble);

            chatMessages.insertBefore(messageDiv, typingIndicator);
            scrollToBottom();
        }

        async function sendMessage() {
            const message = chatInput.value.trim();
            if (!message) return;

            // Add user message to chat
            addMessage(message, 'user');
            chatInput.value = '';
            chatSend.disabled = true;

            // Show typing indicator
            typingIndicator.classList.add('active');
            scrollToBottom();

            try {
                console.log('Sending to n8n:', {
                    sessionId: sessionId,
                    chatInput: message
                });

                // CRITICAL FIX: Send EXACTLY what n8n "When chat message received" expects
                // No "action" field - just sessionId and chatInput
                const response = await fetch(CONFIG.webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        sessionId: sessionId,
                        chatInput: message
                    })
                });

                typingIndicator.classList.remove('active');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Webhook response:', data);
                
                // Parse response - handle both array and object responses
                let botMessage;
                if (Array.isArray(data)) {
                    botMessage = data[0]?.output || data[0]?.message || 'Sorry, I received an empty response.';
                } else {
                    botMessage = data.output || data.message || 'Sorry, I received an empty response.';
                }
                
                addMessage(botMessage, 'bot');

            } catch (error) {
                console.error('Error:', error);
                typingIndicator.classList.remove('active');
                addMessage('Sorry, I couldn\'t reach the server. Please try again later.', 'bot');
            }

            chatSend.disabled = false;
            chatInput.focus();
        }

        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'chat-message ' + sender;

            const avatar = document.createElement('div');
            avatar.className = 'message-avatar ' + sender;
            avatar.textContent = sender === 'bot' ? '🤖' : '👤';

            const bubble = document.createElement('div');
            bubble.className = 'message-bubble ' + sender;
            bubble.textContent = text;

            // Add shortcuts to every bot message
            if (sender === 'bot') {
                const shortcutsDiv = document.createElement('div');
                shortcutsDiv.className = 'chat-shortcuts';
                
                CONFIG.shortcuts.forEach(shortcut => {
                    const btn = document.createElement('button');
                    btn.className = 'shortcut-btn';
                    btn.textContent = shortcut.text;
                    btn.setAttribute('data-message', shortcut.message);
                    btn.addEventListener('click', function() {
                        chatInput.value = this.getAttribute('data-message');
                        sendMessage();
                    });
                    shortcutsDiv.appendChild(btn);
                });

                bubble.appendChild(shortcutsDiv);
            }

            messageDiv.appendChild(avatar);
            messageDiv.appendChild(bubble);

            chatMessages.insertBefore(messageDiv, typingIndicator);
            scrollToBottom();
        }

        function scrollToBottom() {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function generateSessionId() {
            return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        }

        // Auto-scroll on load
        scrollToBottom();
        
        console.log('✅ Machineovic Chatbot loaded successfully');
        console.log('Session ID:', sessionId);
    </script>

</body>
</html>
