const form = document.querySelector('.chatForm');
form.addEventListener('submit', function(event) {
	event.preventDefault();
	const messageInput = document.querySelector('.chatForm input[type="text"]');
	const message = messageInput.value;
	const msgP = document.createElement('p');
	msgP.textContent = message;
	msgP.setAttribute('class', 'myMessage');
	const chatMessages = document.querySelector('.chat-messages');
	chatMessages.appendChild(msgP);
	socket.emit('createMsg', { room: user.room, message: message });
	messageInput.value = '';
});
