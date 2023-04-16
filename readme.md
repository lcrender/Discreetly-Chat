# 💬 DISCRETLY CHAT💬

## INTRODUCCIÓN 🚀

_Proyecto realizado con Nodejs, Express, Socket.io y MongoDb._<br>
_La escencia de esta app es facilitar salas de chat con cierta privacidad. Los mensajes no se guardan en nuestra base de datos y la información del usuario se eliminar al cerrar la ventana de chat._
_En esta primera versión de la app podras hacer un registro de usuario para crear canales de chat._<br>
_Para acceder al chat solo necesitaras crear un usuario desde el index.html y seleccionar uno de los canales existentes previamente creados desde el administrador._<br>
_Solamente podras chatear y ver los mensajes desde que te conectas al chat. Cuando cerras el chat se borran los datos de acceso, por eso es importante que te conectes al mismo tiempo que el/los usuarios con los que quieras chatear._<br>
_NO UTILICES ESTE CHAT SI QUERES TENER UN REGISTRO DE TUS MENSAJE!_
_Las primeras 2 versiones de la app seran solamente con fines experimentales para ir amigandoce con la tecnologia Socket._<br>

## PREQUISITOS PREVIOS📋

_Para que este proyecto funcion correctamente recomendamos tener instalado y configurado los siguientes programas._

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
<br>

## INSTALACIÓN 🔧

_Clona el proyecto desde Github, abre la carpeta server desde una terminal e instala las dependencias con el comando:_
```
npm install
```
<br>

## VARIABLES DE CONFIGURACIÓN .env 🪛

_Cambia el nombre del archivo .env.template (debe quedar .env) edita los datos de la base de datos MongoDb. No te olvides de seleccionar si quieres trabajar en localhost o en un servidor (utiliza la opción "host" para trabajar en un servidor o "local" para trabajar en un servidor local)_
<br>

## COMO EJECUTAR LA APP

⚠️ _RECUERDA TENER MONGODB CORRIENDO EN EL SERVIDOR_ ⚠️

_Luego de tener instalados todos los programas necesarios, haber instalado las dependencias del servidor y haber configurado el .env utiliza el comando  para iniciar el servidor._
_Server:_
```
npm start
```
_Cliente:_
```
- Ejecutar el index.html, si estas trabajando desde localhost puedes utilizar Live Server.
- Accede al signup para entrar al administrador de salas._
- Crea tu usuario (el nombre sera unico pero se borrara al salir del chat), selecciona la sala de chat y habla con tus amigos, clientes, amantes, o con quien desees tener esa charla privada. No pierdas tiempo en leer los mensajes de la sala porque desde el front end se borraran rapidamente.
```
<br>

## API V1

_Registro / Inicio de Sesion:_
```
POST /signup => {username, password}
POST /login => {username, password}
```
_Crear Sala:_
```
POST /rooms/add => {roomName}
```
_Ver Salas:_
```
GET /rooms
```
_Entrar en Sala:_
```
PUT /rooms/enter => {username, room}
```
<br>

## ROADMAP
![Roadmap](https://github.com/lcrender/Discreetly-Chat/blob/Lcrender/roadmap.jpg)
 
 <br>

## AUTOR

_Alejandro Chazarreta_ [github] (https://github.com/lcrender)

<br>

## LICENSIA

_Licensia del pryecto: [MIT license](https://github.com/lcrender/Discreetly-Chat/blob/Chaza/license.md)

<br><br>