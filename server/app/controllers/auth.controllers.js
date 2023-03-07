const User = require('../models/User');
const Respuestas = require('../classes/Respuestas');
const jwt = require('jsonwebtoken');
const { JWTSECRET } = process.env;
const authCtrl = {};

authCtrl.signUp = async (req, res) => {
    try {
    const {username, password} = req.body;
    const checkUser = await User.findOne({username: username})
    if (checkUser) {
        const respuesta = new Respuestas ({
            status: "false",
            message: "A user with that name already exists, choose another name.",
            auth: "false",
            token: "null"
        })
        return res.status(401).json(respuesta);
    } 
    const user = new User({
        username,
        password
    });
    user.password = await user.encryptPassword(user.password)
    await user.save();
    const secretToken = jwt.sign({id: user._id, displayname: user.displayname}, JWTSECRET, {expiresIn: 60 * 60 * 1})
    const respuesta = new Respuestas ({
        status: "true",
        message: "User Created.",
        auth: "true",
        token: secretToken  
    })
    res.status(201).json(respuesta);
    } catch (error) {
        const respuesta = new Respuestas ({
            status: "false",
            message: error,
        })
        res.status(500).json(respuesta);
    }
};
authCtrl.logIn = async (req, res) => {
    try {
    const {username, password} = req.body;
    const user = await User.findOne({username: username})
    if (!user) {
        const respuesta = new Respuestas ({
            status: "false",
            message: "There is no user with that name.",
            auth: "false",
            token: "null"
        })
        return res.status(401).json(respuesta);
    } 
    const validPassword = await user.validatePassword(password);
    if (!validPassword) {
        const respuesta = new Respuestas ({
            status: "false",
            message: "Incorrect password.",
            auth: "false",
            token: "null"
        })
       return res.status(401).json(respuesta);
    }
    const secretToken = jwt.sign({id: user._id, username: user.username}, JWTSECRET, {expiresIn: 60 * 60 * 1})
    const respuesta = new Respuestas ({
        status: "true",
        message: "Access ok.",
        auth: "true",
        token: secretToken,
        _id: user._id
    })
    res.status(201).json(respuesta); 
    } catch (error) {
        const respuesta = new Respuestas ({
            status: "false",
            message: error,
        })
        res.status(500).json(respuesta);
    }
};
authCtrl.addUser = async (req, res) => {
    try {
        const {username} = await req.body;
        const checkUser = await User.findOne({username: username})
        if (checkUser) {
            const respuesta = new Respuestas ({
                status: "false",
                message: "Ya existe un usuario con ese nombre, elija otro nombre.",
            })
            return res.status(401).json(respuesta);
        } 
        const newUser = new User ({username})
        await newUser.save();
        const respuesta = new Respuestas ({
            status: "true",
            message: "Usuario creado correctamente.",
            username: username
        })
        res.status(201).json(respuesta);
    } catch (error) {
        const respuesta = new Respuestas ({
            status: "false",
            message: error,
        })
        res.status(500).json(respuesta);
    }
};
module.exports = authCtrl;