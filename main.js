///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* CONFIGURACION DEL SERVIDOR. */
var express = require('express');
var app = express();
var server = require('http').Server(app);

/* Diciéndole al servidor que use la carpeta pública como la carpeta raíz. */
app.use("/",express.static('public'));

/* Defininiendo puerto. */
server.listen(process.env.PORT || 80)
  console.log("Server on Port", process.env.PORT || 80)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* BASE DE DATOS */
/* Conexion con la base de datos. */
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
const usuarios = require('./models/usuarios')

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* CLIENTE */
/* Creando el socket "io". */
const socketIo = require('socket.io');
const io = socketIo(server);

/* Conexion y desconexion de socket "io" con envio de informacion. */
io.on('connection', (socket)=>{
    console.log("Conexón establecida")

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
    
    socket.on('disconnect', function() {
      console.log('Cliente desconectado');
   });
})
