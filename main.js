/* CONFIGURACION DEL SERVIDOR. */
var express = require('express');
var app = express();
var server = require('http').Server(app);

/* Diciéndole al servidor que use la carpeta pública como la carpeta raíz. */
app.use("/", express.static('public'));

/* Defininiendo puerto. */
server.listen(process.env.PORT || 80)
console.log("Server on Port", process.env.PORT || 80)

/* Creando el socket "io". */
const socketIo = require('socket.io');
const io = socketIo(server);

let nickNames = [];
/* Conexion y desconexion de socket "io" con envio de informacion. */
io.on('connection', (socket) => {
  console.log("Conexón establecida")

  //CHAT
  socket.on('enviar mensaje', (datos) => {
    io.emit('nuevo mensaje', {
      username: socket.nickname,
      msg: datos
    });
  });

  socket.on('nuevo usuario', (datos, callback) => {
    if (nickNames.indexOf(datos) !== -1) {
      callback(false);
    } else {
      callback(true);
      socket.nickname = datos;
      nickNames.push(socket.nickname);

      io.emit('nombre usuario', nickNames);
    }
  });

  //GATO 
  socket.on('turno', (turno) => {
    //console.log(turno)

    io.emit('Turno', turno);
  });

  socket.on('tablero', (tablero) => {
    //console.log(tablero);

    io.emit('Tablero', tablero);
  });

  socket.on('haGanado', (haGanado) => {
    //console.log(haGanado);

    io.emit('HaGanado', haGanado);
  })

  socket.on('disconnect', function () {
    if (!socket.nickname) {
      return;
    } else {
      nickNames.splice(nickNames.indexOf(socket.nickname), 1);
      io.emit('nombre usuario', nickNames);
    }
    console.log('Cliente desconectado');
    //console.log(nickNames);
  });
})
