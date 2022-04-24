const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');


class Server {

      constructor() {
            this.app = express();
            this.port = process.env.PORT;
            // server a levantar de socket
            this.server = require('http').createServer(this.app);
            // Es toda la info de todos los sockets conectados
            this.io = require('socket.io')(this.server);

            this.paths = {
            }

            // Middlewares
            this.middlewares();

            // Rutas de mi aplicación
            this.routes();

            // Path para los eventos de web sockets
            this.sockets();
      }

      middlewares() {

            // CORS
            this.app.use(cors());

            // Directorio Público
            this.app.use(express.static('public'));

      }

      routes() {

            // this.app.use(this.paths.auth, require('../routes/auth'));

      }
      //metodo
      sockets() {
            // this.io hace referencia a nuestro servidor de sockets
            this.io.on("connection", socketController);
      }

      listen() {
            // Levanto el server de socket.io : app -> server
            this.server.listen(this.port, () => {
                  console.log('Servidor corriendo en puerto', this.port);
            });
      }

}




module.exports = Server;