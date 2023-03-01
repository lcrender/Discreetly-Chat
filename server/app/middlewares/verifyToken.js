const jwt = require('jsonwebtoken');
function verifyToken (req, res, next) {
    const token = req.headers['x-access-token']
    if(!token) {
        return res.status(401).json({
            auth: false,
            message: 'No token provided'
        })
    } 
    try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.userId = decoded.id;
    next();
    }  catch (error) {
    return res.status(401).json({
          auth: false,
          message: 'Invalid token'
    });
}
};

module.exports = verifyToken;