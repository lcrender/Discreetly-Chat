# 💬 DISCRETLY CHAT💬

## INTRODUCCIÓN 🚀

_Proyecto realizado con Nodejs, Express, Socket.io y MongoDb._
_La escencia de esta app es facilitar salas de chat con cierta privacidad. Los mensajes no se guardan en nuestra base de datos y la información del usuario se eliminar al cerrar la ventana de chat._
_En esta primera versión de la app podras hacer un registro de usuario para crear canales de chat._
_Para acceder al chat solo necesitaras crear un usuario desde el index.html y seleccionar uno de los canales existentes previamente creados desde el administrador._
_Solamente podras chatear y ver los mensajes desde que te conectas al chat. Cuando cerras el chat se borran los datos de acceso, por eso es importante que te conectes al mismo tiempo que el/los usuarios con los que quieras chatear._
_NO UTILICES ESTE CHAT SI QUERES TENER UN REGISTRO DE TUS MENSAJE!_
_Las primeras 2 versiones de la app seran solamente con fines experimentales para ir amigandoce con la tecnologia Socket._

## PREQUISITOS PREVIOS📋

_Para que este proyecto funcion correctamente recomendamos tener instalado y configurado los siguientes programas._

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

## INSTALACIÓN 🔧

_Clona el proyecto desde Github, abre la carpeta server desde una terminal e instala las dependencias con el comando:_
```
npm install
```

## VARIABLES DE CONFIGURACIÓN .env 🪛

_Cambia el nombre del archivo .env.template (debe quedar .env) edita los datos de la base de datos MongoDb. No te olvides de seleccionar si quieres trabajar en localhost o en un servidor (utiliza la opción "host" para trabajar en un servidor o "local" para trabajar en un servidor local)_

## Commands to execute ⌨️

⚠️ _RECUERDA TENER MONGODB CORRIENDO EN EL SERVIDOR_ ⚠️

_Luego de tener instalados todos los programas necesarios, haber instalado las dependencias del servidor y haber configurado el .env utiliza el comando  para iniciar el servidor._
_Server:_
```
npm run dev
```
_Client:_
```
npm start
```
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
![Roadmap](https://github.com/lcrender/Discreetly-Chat/blob/Lcrender/roadmap.jpg)
 