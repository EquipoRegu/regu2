///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* CONFIGURACION DEL SERVIDOR. */
var express = require('express');
var app = express();
var server = require('http').Server(app);

/* Diciéndole al servidor que use la carpeta pública como la carpeta raíz. */
app.use("/", express.static('public'));

/* Defininiendo puerto. */
server.listen(process.env.PORT || 80)
console.log("Server on Port", process.env.PORT || 80)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* BASE DE DATOS */
/* Conexion con la base de datos. */
/*
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL)

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected...")
  } catch (error) {
    console.error(error);
  }
};
connectDB()

/* Solicitud a la base de datos */
//const mensajes = require('./models/mensajes')


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* SOCKETS */
/* Creando el socket "io". */
const socketIo = require('socket.io');
const io = socketIo(server);

let nickNames =[];
/* Conexion y desconexion de socket "io" con envio de informacion. */
io.on('connection', (socket) => {
  console.log("Conexón establecida")

  //CHAT
  socket.on('enviar mensaje', (datos) =>{
    //console.log(datos)    
    io.emit('nuevo mensaje', {
      username:socket.nickname,
      msg:datos
    });
  });

  socket.on('nuevo usuario', (datos, callback) =>{
    if(nickNames.indexOf(datos) !== -1){
      callback(false);
    }else{
      callback(true);
      socket.nickname = datos;
      nickNames.push(socket.nickname);

      io.emit('nombre usuario', nickNames);
    }

  });

  /*
  //Lista de usuarios
  const emitusr = async () => {
    const usr = await usuarios.find()
    //console.log(usr);
    io.emit('msg', usr);
  }
  emitusr()
  // Guardar usuario
  socket.on('newusr', async (data) => {
    const newUsr = new usuarios(data);
    const saveUsr = await newUsr.save()
    console.log(saveUsr)
  })
  */
  socket.on('disconnect', function () {
    if(!socket.nickname){
      return;
    }else{
      nickNames.splice(nickNames.indexOf(socket.nickname), 1);
      io.emit('nombre usuario', nickNames);
    }

    console.log('Cliente desconectado');
  });
})
