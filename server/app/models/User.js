const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const Respuestas = require('../classes/Respuestas');

const userSchema = new Schema({
    username: { type:String, required: true },
    password: { type:String }
});
userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};
userSchema.methods.validatePassword = function (password) { 
   return bcrypt.compare(password, this.password);
};
// userSchema.methods.addPerson = async (username, room) => {
// 	try {
// 		const checkRoom = await Room.findOne({roomName: room})
// 		if (checkRoom === null) {
// 			const respuesta = new Respuestas({
// 				status: 'false',
// 				message: 'There is no room with that name.'
// 			});
// 			return respuesta
// 		}
// 		const checkUser = await Room.findOne({ roomName: roomName, users: username },{_id:0, users:1}).lean();
		
// 		if (!checkUser) {
// 			const newUser = await Room.updateOne({roomName: roomName}, { $push: { users: username } })
// 			console.log('Usuario agregado a la sala');
// 			const [findR] = await Room.find({roomName: roomName},{_id:0, users:1})
// 			const respuesta = new Respuestas({
// 				status: 'true',
// 				message: `${username} a entrado a la sala ${roomName}`
// 			});
// 			return respuesta
// 		}
// 		const respuesta = new Respuestas({
// 			status: 'false',
// 			message: 'A user with that name already exists in this room.'
// 		});
// 		return respuesta
	
// } catch (error) {
// 	console.log(error)
// }
// }
module.exports = model('User', userSchema);