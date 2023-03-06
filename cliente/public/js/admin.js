const token = localStorage.getItem("token");
const username = localStorage.getItem("user");
const roomsData = 'http://localhost:3000/rooms'; // replace with the actual roomsData URL

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

// function deleteRoom(id) {
// 	console.log(id)
// 	fetch(roomsDel + id, {
// 		method: 'DELETE',
// 		headers: {'Content-Type': 'application/json'},
// 		body: data
// 	  })
// 	  .then(response => response.json())
// 	  .then(data => {
// 		if (data.status.status === "true") {
// 		  window.location.replace(admin);
// 		  const msgE = document.getElementById("msg");
// 		  msgE.textContent = data.status.message;
// 		} else {
// 		  const msgE = document.getElementById("msg");
// 		  msgE.textContent = data.status.message;
// 		}
// 	  })
// 	  .catch(error => {
// 		console.error(error);
// 	  });
// 	};
// 	const response = await fetch(roomsDel)
// 	const rooms = await response.json();
// 	console.log(rooms)
// 	location.reload()

function loadRoomPage() {
	displayRooms();
};

window.onload = loadRoomPage;



// const url = 'http://localhost:3000/'
// //const roomsUrl = './rooms.html'

// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // evita que el formulario se envíe automáticamente
//   const formData = new FormData(form);
//   const data = JSON.stringify(Object.fromEntries(formData.entries())); // convierte los datos del formulario en un objeto JSON
      
//   fetch(url + 'rooms/add', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: data
//   })
//   .then(response => response.json())
//   .then(data => {
//     if (data.status.status === "true") {
//         console.log(data)
//     //   const user = data.status.username;
//     //   localStorage.setItem("user", user);
//     //   window.location.replace(roomsUrl);
//     } else {
//       const msgE = document.getElementById("msg");
//       msgE.textContent = data.status.message;
//     }
//   })
//   .catch(error => {
//     console.error(error);
//   });
// });
