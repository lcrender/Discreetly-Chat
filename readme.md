# DISCREETLY CHAT V1
Proyecto realizado con Nodejs, Express, Socket.io y MongoDb.<br><br>
En esta primera version de la app podras hacer un registro de usuario para crear canales de chat.<br>
Para acceder al chat solo necesitaras crear un usuario y seleccionar uno de los canales existentes.<br>
Solamente podras chatear y ver los mensajes desde que te conectas al chat. Cuando cerras el chat se borran los datos de acceso.<br>
Las primeras 2 versiones de la app seran solamente con fines experimentales para ir amigandoce con la tecnologia.<br>
## ¿COMO SE USA?
Clona el proyecto desde Github, abre la carpeta server. Cambia el nombre del archivo .env.template (debe quedar .env) edita los datos de la base de datos MongoDb.<br>
Desde una terminal, instala las dependencias del servidor (debes estar dentro de la carpeta server) ``npm i``<br>
Asegurate de tener corriendo MongoDb en el equipo.<br>
Utiliza el comando ``npm start`` para iniciar el servidor.<br>
Luego ejecuta el frontend (puedes utilizar live server para ejecutarlo desde localhost)<br>
Utiliza la url /signup.html y login.html para acceder al administrador de salas. Ahi podras crear todas las salas de chat que quieras desde el formulario.<br>
Luego procede desde el homepage (index.html). Crea tu usuario (el usuario sera unico pero se borrara al salir del chat), selecciona la sala de chat y habla con tus amigos, clientes, amantes, o con quien desees.<br>

## API V1
Registro / Inicio de Sesion:<br>
POST /signup => {username, password}<br>
POST /login => {username, password}<br>
<br>
Crear Sala:<br>
POST /rooms/add => {roomName}<br>
Ver Salas<br>
GET /rooms<br>
Entrar en Sala:<br>
PUT /rooms/enter => {username, room}<br>
<br><br>

## ROADMAP
![Roadmap](https://github.com/lcrender/Discreetly-Chat/blob/Chaza/roadmap.jpg)
