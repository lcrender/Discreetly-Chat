const { Router } = require('express');
const router = Router();
const verifyToken = require('../middlewares/verifyToken');
const { 
        signUp,
        logIn, 
        viewMe, 
        editMe,
        deleteMe,
        updateToken,
        addUser } = require('../controllers/auth.controllers');

router.post('/signup', signUp);
router.post('/login', logIn);
//router.get('/token', verifyToken, updateToken)
// router.get('/me', viewMe);
// router.put('/me', verifyToken, editMe);
// router.delete('/me', verifyToken, deleteMe);
router.post('/users', addUser);

module.exports = router;