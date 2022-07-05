//--------------Variables--------------
//Botones
let btn_borrar = document.querySelector('#borrar');
let btn_editar = document.querySelector('#editar');

//Usuario
let user = true;

//Datos privados
let privados = document.querySelectorAll('.privado');

//Llamado del metodo eventlistener
eventlistener();

//Eventos
function eventlistener(){

    //Verificando si el modo es visitante o administrador
    if(!user){
        //Ocultando el boton de borrar
        btn_borrar.parentElement.style = 'display:none';

        //Ocultando los datos privados
        privados.forEach(privado => {
            
            // privado.style = 'visibility: hidden';
            privado.style = 'display: none';
        });
    }
    else{
        //Mostrando opciones de editar y borrar al usuario administrador
        btn_borrar.parentElement.style = 'display: flex;'

        //Mostrando los datos privados
        privados.forEach(privado => {
            
            // privado.style = 'visibility: visible';
            privado.style = 'display: flexbox';
        });
    }

    //clicks en pantalla
    window.addEventListener('click', function(e){
        
        //Click al boton editar
        if(e.target == btn_editar){

            alert('El boton editar')
            window.location = "editar.html";
        }

        //Click al boton de borrar
        if(e.target == btn_borrar){
            
            //Pregunta al usuario para confirmar accion
            let opcion = confirm('¿Desea BORRAR este proyecto?');
            
            //Validando si confirmó
            if(opcion){

                //borrando proyecto
                alert('Borrando...');

                
            }
        }
    })
}