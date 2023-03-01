# DISCREETLY CHAT V1
## INTRODUCCIÓN
Proyecto realizado con Nodejs, Express, Socket.io y MongoDb.<br><br>
La escencia de esta app es facilitar salas de chat con cierta privacidad. Los mensajes no se guardan en nuestra base de datos y la información del usuario se eliminar al cerrar la ventana de chat.<br>
En esta primera versión de la app podras hacer un registro de usuario para crear canales de chat.<br>
Para acceder al chat solo necesitaras crear un usuario desde el index.html y seleccionar uno de los canales existentes previamente creados desde el administrador.<br>
Solamente podras chatear y ver los mensajes desde que te conectas al chat. Cuando cerras el chat se borran los datos de acceso, por eso es importante que te conectes al mismo tiempo que el/los usuarios con los que quieras chatear.<br>
NO UTILICES ESTE CHAT SI QUERES TENER UN REGISTRO DE TUS MENSAJE!<br>
Las primeras 2 versiones de la app seran solamente con fines experimentales para ir amigandoce con la tecnologia Socket.<br>
## ¿COMO SE USA?
Clona el proyecto desde Github, abre la carpeta server. Cambia el nombre del archivo .env.template (debe quedar .env) edita los datos de la base de datos MongoDb. No te olvides de seleccionar si quieres trabajar en localhost o en un host (utiliza la opción host o local.<br>
Desde una terminal, instala las dependencias del servidor (debes estar dentro de la carpeta server) ``npm i``<br>
Asegurate de tener corriendo MongoDb en tu equipo/servidor.<br>
Utiliza el comando ``npm start`` para iniciar el servidor.<br>
Luego ejecuta el frontend (puedes utilizar live server para ejecutarlo desde localhost)<br>
Utiliza la url /signup.html y login.html para acceder al administrador de salas. Ahi podras crear todas las salas de chat que quieras desde el formulario.<br>
Luego procede desde el homepage (index.html). Crea tu usuario (el usuario sera unico pero se borrara al salir del chat), selecciona la sala de chat y habla con tus amigos, clientes, amantes, o con quien desees tener esa charla privada.<br>

## API V1
Registro / Inicio de Sesion:<br>
POST /signup => {username, password}<br>
POST /login => {username, password}<br>
<br>
Crear Sala:<br>
POST /rooms/add => {roomName}<br>
Ver Salas:<br>
GET /rooms<br>
Entrar en Sala:<br>
PUT /rooms/enter => {username, room}<br>
<br><br>

## ROADMAP
![Roadmap](https://github.com/lcrender/Discreetly-Chat/blob/Chaza/roadmapv1.jpg)
