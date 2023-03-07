import {url} from '../config/config.js'
const socket = io(url);

const params = new URLSearchParams(window.location.search);
if (!params.has('username') || !params.has('room')) {
	const errorMsg = 'The Username and the Room are required!';
	window.location.replace(`index.html?error=${encodeURIComponent(errorMsg)}`);
}
export let user = {
	username: params.get('username'),
	room: params.get('room')
};
if (user.username === null) {
	const errorMsg = 'The Username and the Room are required!';
	window.location.replace(`index.html?error=${encodeURIComponent(errorMsg)}`);
}

socket.on('connect', () => {
	const msgR = document.getElementById('room');
	msgR.textContent = `Room ${user.room}`;
	socket.emit('enterChat', { username: user.username, room: user.room }, (resp) => {
		const msgC = document.getElementById('msg');
		if (resp.infoRoom.status.status === 'false') {
			const msg = resp.infoRoom.status.message;
			window.location.replace(`index.html?error=${encodeURIComponent(msg)}`);
		} else {
			msgC.textContent = `${resp.infoRoom.status.message}`;
		}
	});
});
socket.on('createMsg', (respa) => {
	const fecha = new Date(respa.date); // crea un objeto Date a partir del timestamp
	const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
	const hoursOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
	const finalDate = fecha.toLocaleDateString('es-ES', dateOptions); // convierte la fecha a formato legible
	const finalHour = fecha.toLocaleTimeString('es-ES', hoursOptions); // convierte la hora a formato legible

	function genID(prefijo) {
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let cadena = '';
		for (let i = 0; i < 6; i++) {
			cadena += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		return prefijo + '-' + cadena;
	}
	const ID_AUTOMATIC = genID('msg');

	const msgDiv = document.createElement('p');
	const finalmsg = `${respa.username}: ${respa.message} <${finalDate} ${finalHour}>`;
	msgDiv.textContent = finalmsg;
	msgDiv.setAttribute('class', 'newMessage');
	msgDiv.setAttribute('id', ID_AUTOMATIC);
	const chatMessages = document.querySelector('.chat-messages');
	chatMessages.appendChild(msgDiv);

	// Extra Feature Experimental
	if (respa.message === 'dame LUNA') {
		const audio = document.getElementById('myAudio');
		audio.play();
	}
	setTimeout(() => {
		let e = document.getElementById(ID_AUTOMATIC);
		e.parentNode.removeChild(e);
	}, 10000);
});
socket.on('disconnect', () => {});
socket.on('personList', (resp) => {
	const msgPl = document.getElementById('peoples-list');
	msgPl.textContent = `${resp.users.length} users connected.`;
});
socket.on('welcome', (resp) => {
	const msgPl = document.getElementById('msg');
	const finalmsg = `${resp} is connected to the chatroom!`;
	msgPl.textContent = finalmsg;
});

export function emitSocket(roomN, messageS) {socket.emit('createMsg', { room: roomN, message: messageS });}