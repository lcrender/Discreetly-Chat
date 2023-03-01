const Room = require('./models/Rooms');
const User = require('./models/User')
const { io } = require('./server');
const {enterRoom, exitRoom, getPersons, getPerson} = require('./controllers/rooms.controllers')
const {createMsg} = require('./helpers/helpers');

io.on('connect', (client) => {
    let username = ""
    let roomName = ""
    let connected = ""
    // SOCKET ID
    let clientId = client.id
    // ESCUCHA ENTER CHAT
    client.on('enterChat', (data, callback) => {
        roomName = data.room
        username = data.username
        if(!data.username || !data.room) {
            return callback({
                status: false,
                msg: 'The username and the room are required.'
            });
        }
        client.join(data.room);
        (async () => {
            const infoRoom = await enterRoom(client.id, data.username, data.room);
            callback({infoRoom})
        })();
        client.broadcast.to(data.room).emit('welcome', username)
        // no puedo sacar la informacion de infoRoom(connected) fuera de la funcion
        //client.broadcast.to(data.room).emit('personList', connected) 
    }); 
   
    // CREATE MESSAGE
    client.on('createMsg', (data) => {
        ( async function () {
            let person = await getPerson(data.room, client.id) 
            let msg = createMsg(person, data.message);
            client.broadcast.to(data.room).emit('createMsg', msg);
        })() 
    });
    client.on('disconnect', () => {
        ( async function () {   
            const exit = await exitRoom(client.id, roomName, username)
            client.broadcast.to(roomName).emit('personList', await getPersons(roomName) )
        })()  
    })
})

// Mensajes privados quedan para mas adelante
//     // client.on('privateMsg', data => {
//     //     let person = usuarios.getPerson(client.id);
//     //     client.broadcast.to(data.para).emit('privateMsg', createMsg(person.displayname, data.msg));
//     // });
