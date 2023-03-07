import {url} from '../config/config.js';

const token = localStorage.getItem('token');
const username = localStorage.getItem('user');
const roomsData = url + 'rooms';

async function displayRooms() {
	const response = await fetch(roomsData);
	const rooms = await response.json();
	const roomsList = document.getElementById('rooms-list');
	rooms.forEach((room) => {
		const roomName = room.roomName;
		const roomUsers = room.users.length;
		roomsList.innerHTML += `<li class="disc" style="background-color: #00ff00;;
		border: 1px solid #000;
		margin: 5px;
		padding: 10px;
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 50%;
		color: #000;"><a style="text-decoration: none;
		color: #000;
		text-transform: uppercase;
		font-weight: bold;" href="chat.html?username=${username}&room=${roomName}">${roomName} (${roomUsers} users)</a></li>`;
	});
}
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // evita que el formulario se envíe automáticamente
  const formData = new FormData(form);
  const data = JSON.stringify(Object.fromEntries(formData.entries())); // convierte los datos del formulario en un objeto JSON
  fetch(url + 'rooms/add', {
	method: 'POST',
	headers: {'Content-Type': 'application/json',
	'x-access-token': token
	},
	body: data
  })
  .then(response => response.json())
  .then(data => { 
	if (data.status.status === "true") {
	  location.reload()
	} else {
	  const msgE = document.getElementById("msg");
	  msgE.textContent = data.status.message;
	}
  })
  .catch(error => {
	const msgE = document.getElementById("msg");
	msgE.textContent = "Access unauthorized: " + error;
  });
});


function loadRoomPage() {
	displayRooms();
}

window.onload = loadRoomPage;
