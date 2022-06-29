// Variables
// let DB;

// Funciones a compartir
function conectarDB(){
    const abrirConexion = window.indexedDB.open('crm', 1);

    abrirConexion.onerror = () => {
        console.log('Hubo un error');
    }

    abrirConexion.onsuccess = () => {
        DB = abrirConexion.result;
    }
}

// Mensaje de alerta
function imprimirAlerta(mensaje, tipo){
    const alerta = document.querySelector('.alerta');

    if(!alerta){
        // Crear Alerta
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta');

        if(tipo === 'error'){
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');

        }else{
            divMensaje.classList.add('bd-green-100', 'border-green-400', 'text-green-700');
        }

        divMensaje.textContent = mensaje;

        formulario.appendChild(divMensaje);

        setTimeout(() => {
            
            divMensaje.remove();
        }, 3000);
    }
}