const form = document.querySelector('.chatForm');
// let n = 0
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const messageInput = document.querySelector('.chatForm input[type="text"]');
	const message = messageInput.value;
	// let n = n + 1

	function genID(prefijo) {
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let cadena = '';
		for (let i = 0; i < 6; i++) {
		  cadena += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		return prefijo + '-' + cadena;
	  }
	  
	  const ID_AUTOMATIC = genID('msg');


	const msgP = document.createElement('p');
	msgP.textContent = message;
	msgP.setAttribute('class', 'myMessage');
	msgP.setAttribute('id', ID_AUTOMATIC);
	const chatMessages = document.querySelector('.chat-messages');
	chatMessages.appendChild(msgP);
	socket.emit('createMsg', { room: user.room, message: message });
	messageInput.value = '';
	setTimeout( ()=> {
        let e = document.getElementById(ID_AUTOMATIC);
        e.parentNode.removeChild(e);
      }, 10000);
});
