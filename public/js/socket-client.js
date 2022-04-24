// Configuracion y comunicacion con los webs sockets con mi servidor


// Referencias del HTML

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btbEnviar = document.querySelector('#btbEnviar');



const socket = io();

// El on es para escuchar algun evento
socket.on('connect', () => {
      // console.log('Conectado');

      lblOnline.style.display = '';
      lblOffline.style.display = 'none';
});
socket.on('disconnect', () => {
      // console.log('Desconectado del servidor');

      lblOnline.style.display = 'none';
      lblOffline.style.display = '';
});

// Tengo que escuchar el mensaje del server para poder ejecutarlo

socket.on('enviar-mensaje', ( payload ) => {
      console.log( payload );
})



btbEnviar.addEventListener('click', () => {
      const mensaje = txtMensaje.value;

      const payload = {
            mensaje,
            id: '65asd165sa1',
            fecha: 651561
      }

      // para emitor un evento
      // El tercer argumento es un callback
      socket.emit('enviar-mensaje', payload, (id) => {
            console.log('Desde el server', id);
      });

});


