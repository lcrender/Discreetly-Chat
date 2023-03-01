const createMsg = (username, message) => {
    return {
        username,
        message,
        date: new Date().getTime()
    }
};

module.exports = {createMsg}