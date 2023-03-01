const socket = io('http://localhost:3000');

const params = new URLSearchParams (window.location.search);
if (!params.has('username') || !params.has('room')) {
  const errorMsg = 'The Username and the Room are required!';
  window.location.replace(`index.html?error=${encodeURIComponent(errorMsg)}`);
};
let user = {
    username: params.get('username'),
    room: params.get('room')
};
if(user.username === null) {
    const errorMsg = 'The Username and the Room are required!';
  window.location.replace(`index.html?error=${encodeURIComponent(errorMsg)}`);
}
socket.on('connect',  () => {
    const msgR = document.getElementById("room");
    msgR.textContent = `Room ${user.room}`
    socket.emit('enterChat', {username: user.username, room: user.room}, (resp) => {
        const msgC = document.getElementById("msg");
        if (resp.infoRoom.status.status === "false") {
            const msg = resp.infoRoom.status.message;
            window.location.replace(`index.html?error=${encodeURIComponent(msg)}`);
        } else {
            msgC.textContent = `${resp.infoRoom.status.message}`;  
        }
    })
});
socket.on('createMsg', (respa) => {
    const msgDiv = document.createElement("p");
    const finalmsg = `${respa.username}: ${respa.message}`
    msgDiv.textContent = finalmsg;
    msgDiv.setAttribute("class", "newMessage");
    const chatMessages = document.querySelector(".chat-messages");
    chatMessages.appendChild(msgDiv);
    // Extra Feature Experimental
    if (respa.message === "dame LUNA") {
        const audio = document.getElementById('myAudio');
        audio.play(); 
    }
});
socket.on('disconnect', () => {
});
socket.on('personList', (resp) => {
    const msgPl = document.getElementById("peoples-list");
    msgPl.textContent = `${resp.users.length} users connected.`
});
socket.on('welcome', (resp) => {
    const msgPl = document.getElementById("msg");
    const finalmsg = `${resp} is connected to the chatroom!`
    msgPl.textContent = finalmsg
});

// // socket.on('privateMsg', function(mensaje) {
// //     console.log('Mensaje Privado', mensaje)
// // })