const Swal = require('sweetalert2');


const subscribeButton = document.getElementById('suscribir');

subscribeButton.addEventListener('click', () => {
    Swal.fire({
        title: 'Suscribir a nuestro boletín de noticias',
        input: 'email',
        text: 'Introduce tu dirección de email',
        icon: 'info',
        confirmButtonText: '¡Suscríbeme!',
        cancelButtonText: 'No quiero',
        showCancelButton: true,
        showCloseButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            //TODO: Guardar email en base de datos
            console.log('Guardar email en base de datos');
            Swal.fire(
                'Hecho!',
                'Recibirás nuestras noticias: ' + result.value,
                'success'
            )
        }
    });
});
