const {Schema, model} = require('mongoose');
const RoomSchema = new Schema({
    roomName: { type:String, required: true },
    users: []
});

module.exports = model('Room', RoomSchema, 'rooms')
