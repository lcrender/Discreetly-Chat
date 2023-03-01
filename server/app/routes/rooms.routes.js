const {Router}  = require('express');
const router = Router();
const { 
    createNewRoom,
    renderRooms,
    enterRoom  } = require('../controllers/rooms.controllers')
const verifyToken = require('../middlewares/verifyToken');

// New Room
router.post('/rooms/add',verifyToken, createNewRoom)

// View all Rooms
router.get('/rooms', renderRooms)

// Enter in a Room
router.put('/rooms/enter', enterRoom)


// API V2
// Edit Rooms
// router.put('/rooms/edit/:id', updateRoom)

// Delete Room
// router.delete('/rooms/delete/:id',verifyToken, deleteRoom)



module.exports = router