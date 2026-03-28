const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatLog = document.getElementById('chatLog');
const newSessionBtn = document.getElementById('newSessionBtn');
const activeSessions = document.getElementById('activeSessions');
const tasksCompleted = document.getElementById('tasksCompleted');

function appendMessage(role, text) {
  const bubble = document.createElement('div');
  bubble.className = `message ${role}`;
  bubble.textContent = text;
  chatLog.appendChild(bubble);
  chatLog.scrollTop = chatLog.scrollHeight;
}

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;

  appendMessage('user', text);
  chatInput.value = '';

  setTimeout(() => {
    appendMessage('bot', `Acknowledged. Planning next steps for: "${text}"`);
    tasksCompleted.textContent = String(Number(tasksCompleted.textContent) + 1);
  }, 350);
});

newSessionBtn.addEventListener('click', () => {
  activeSessions.textContent = String(Number(activeSessions.textContent) + 1);
  appendMessage('bot', 'New session created. Context cleared and ready.');
});
