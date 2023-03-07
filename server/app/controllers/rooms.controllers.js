const Room = require('../models/Rooms');
const Respuestas = require('../classes/Respuestas');
const roomsCtrl = {};

// Control Rooms
roomsCtrl.createNewRoom = async (req, res) => {
	try {
		const roomName = req.body.roomName;
		const checkRoom = await Room.findOne({ roomName: roomName });
		if (checkRoom) {
			const respuesta = new Respuestas({
				status: 'false',
				message: 'A room with that name already exists, choose another name.'
			});
			return res.status(409).json(respuesta);
		}
		const newRoom = new Room({ roomName });
		await newRoom.save();
		const respuesta = new Respuestas({
			status: 'true',
			message: 'The room was created.'
		});
		res.status(201).json(respuesta);
	} catch (error) {
		const respuesta = {
			status: 'false',
			message: 'There was a problem triyng to create the room.'
		};
		res.status(500).json(respuesta);
	}
};
roomsCtrl.renderRooms = async (req, res) => {
	try {
		const rooms = await Room.find({}, { roomName: 1, users: 1 });
		res.status(200).json(rooms);
	} catch (error) {
		const respuesta = {
			status: 'false',
			message: 'There was an error trying to find the room'
		};
		res.status(500).json(respuesta);
	}
};

// SOCKETS
roomsCtrl.enterRoom = async (id, username, room) => {
	try {
		const checkUsername = await Room.findOne({ roomName: room });
		if (checkUsername === null) {
			console.log('null');
			const newUser = await Room.findOneAndUpdate({ roomName: room }, { $push: { users: { username, id } } });
			const connected = newUser.users.length + 1;
			const respuesta = new Respuestas({
				status: 'true',
				message: `${username} welcome to the chatroom.`,
				users: newUser.users,
				connected: connected
			});
			return respuesta;
		} else {
			for (let i = 0; i < checkUsername.users.length; i++) {
				if (checkUsername.users[i].username === username) {
					const respuesta = new Respuestas({
						status: 'false',
						message: `${username} is alredy in use.`
					});
					return respuesta;
				}
			}
			const newUser = await Room.findOneAndUpdate({ roomName: room }, { $push: { users: { username, id } } });
			const connected = newUser.users.length + 1;
			const respuesta = new Respuestas({
				status: 'true',
				message: `${username} welcome to the chatroom.`,
				connected: connected
			});
			return respuesta;
		}
	} catch (error) {
		const respuesta = new Respuestas({
			status: 'false',
			message: error
		});
		return respuesta;
	}
};
roomsCtrl.exitRoom = async (id, room, username) => {
	try {
		deleteUser = await Room.updateOne({ roomName: room }, { $pull: { users: { id: id } } });
		const respuesta = new Respuestas({
			message: `${username} left the chatroom.`
			//connected: con[0].users.length
		});
		return respuesta;
	} catch (error) {
		const respuesta = new Respuestas({
			status: 'false',
			message: error
		});
		return respuesta;
	}
};
roomsCtrl.getPersons = async (room) => {
	try {
		const [ roomInfo ] = await Room.find({ roomName: room }, { _id: 0, users: 1 });
		if (!roomInfo || roomInfo.length < 0 || roomInfo === 'undefined') {
			const respuesta = new Respuestas({
				status: 'false',
				message: 'There was a problem loading users.'
			});
			return respuesta;
		}
		return roomInfo;
	} catch (error) {
		const respuesta = new Respuestas({
			status: 'false',
			message: error
		});
		return respuesta;
	}
};
roomsCtrl.getPerson = async (room, id) => {
	try {
		let [ person ] = await Room.find({ roomName: room }, { users: 1 });
		for (let i = 0; i < person.users.length; i++) {
			if (person.users[i].id === id) {
				return person.users[i].username;
			}
		}
		// podria suceder que halla alguien conectado sin estar registrado??(revisar)
	} catch (error) {
		const respuesta = new Respuestas({
			status: 'false',
			message: error
		});
		return respuesta;
	}
};

module.exports = roomsCtrl;
