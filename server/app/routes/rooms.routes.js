const {Router}  = require('express');
const router = Router();
const { 
    renderRoomForm,
    createNewRoom,
    renderRooms,
    renderEditForm,
    updateRoom,
    deleteRoom,
    enterRoom  } = require('../controllers/rooms.controllers')
const verifyToken = require('../middlewares/verifyToken');

// New Room
router.post('/rooms/add',verifyToken, createNewRoom)

// View all Rooms
router.get('/rooms', renderRooms)

// Edit Rooms
// router.get('/rooms/edit/:id', renderEditForm)
// router.put('/rooms/edit/:id', updateRoom)

// Delete Room
// router.delete('/rooms/delete/:id',verifyToken, deleteRoom)

// Enter in a Room
router.put('/rooms/enter', enterRoom)

module.exports = router