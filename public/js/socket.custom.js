var socket = io();

// Escuchar informacion
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Omar',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('Respuesta Server: ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor:', mensaje);
});