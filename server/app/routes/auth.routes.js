const { Router } = require('express');
const router = Router();
const { 
        signUp,
        logIn, 
        addUser } = require('../controllers/auth.controllers');
router.post('/signup', signUp);
router.post('/login', logIn);
router.post('/users', addUser);

module.exports = router;