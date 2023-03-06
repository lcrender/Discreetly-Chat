const mongoose = require('mongoose');
const {DATABASE} = process.env
let MONGODB_URI = ""
if (DATABASE == "host") {
    const { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } = process.env;
    MONGODB_URI = `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}`;
}
if (DATABASE == "local") {
    const {DATABASE_LOCALHOST} = process.env;
    MONGODB_URI = `mongodb://${DATABASE_LOCALHOST}`
}
mongoose.set('strictQuery', false);
mongoose.connect(MONGODB_URI, {
})
    .then(db => console.log("Database Connected"))
    .catch(err => console.log(err))