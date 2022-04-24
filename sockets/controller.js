

const socketController = (socket) => {

      console.log('Cliente conectado', socket.id);

      socket.on('disconnect', () => {
            console.log('Cliente desconectado', socket.id);
      })
      // Cliente que esta conectado
      socket.on('enviar-mensaje', (payload, callback) => {

            const id = 123456;
            callback(id);

            // El servidor de socket envia ("habla")
            socket.broadcast.emit('enviar-mensaje', payload)

      })
}

module.exports = {
      socketController,
}