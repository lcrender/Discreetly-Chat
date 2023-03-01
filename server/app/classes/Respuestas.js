class Respuestas {
    constructor(status, message, auth, token, users) {
        this.status = status;
        this.message = message;
        this.auth = auth;
        this.token = token;
        this.users = users
    }
};
module.exports = Respuestas;