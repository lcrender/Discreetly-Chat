import {url} from '../config/config.js'
const roomsData = url + 'rooms';
const username = localStorage.getItem("user");

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
};
function loadRoomPage() {
	displayRooms();
};

window.onload = loadRoomPage;
