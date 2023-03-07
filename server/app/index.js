require('dotenv').config();
require('./db');
const app = require('./server');
const port = process.env.PORT || 3000;
require('./socket');

app.listen(port, (err) => {
	if (err) throw new Error(err);
	console.log(`Servidor corriendo en puerto ${port}`);
});