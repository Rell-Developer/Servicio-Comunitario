// Variables
let buscador            =   document.querySelector('#buscador');
let proyectos           =   document.querySelectorAll('.imagen-port');
let mostrar_proyectos   =   document.getElementById('mostrar-proyectos');

let user = false;
let proy_mostrados = false;

// Llamada de metodo
eventListeners();

function eventListeners(){
    

    if(!user){

        // Ocultando todo para que sea modo vistante
        document.querySelector('.NuevoProyecto-btn').style = 'display:none;';
        document.querySelector('.titulo-header').textContent = 'GPSC - UNERG';
        document.querySelector('#exit').style = 'display:none;';
        document.querySelector('#login').style = 'display: flex;';
    }
    else
    {
        // Mostrando funciones para usuario administrador
        document.querySelector('.NuevoProyecto-btn').style = 'display:flex;';
        document.querySelector('.titulo-header').textContent = 'Administrador | GPSC - UNERG';
        document.querySelector('#exit').style = 'display:flex;';
        document.querySelector('#login').style = 'display: none;';

    }

    // Cuando le den click a la pantalla
    window.addEventListener('click', function(e){

        
        if(e.target.parentElement.classList == 'imagen-port' || e.target.parentElement.parentElement.classList == 'imagen-port'){

            console.log(e.target);
            window.location = "assets/resources/detalles.html";
        }





        // Cerrando Sesion
        if(e.target == exit){
            
            // Llevando al cliente al login
            window.location = "assets/resources/login.html";
        }

        if(!user){

            // Ocultando todo para que sea modo vistante
            document.querySelector('.NuevoProyecto-btn').style = 'display:none;';
            document.querySelector('.titulo-header').textContent = 'GPSC - UNERG';
        }
    });

    // Busqueda de un proyecto
    document.addEventListener('keyup', e => {

        // Se recorren todos los proyectos disponibles
        proyectos.forEach( proyecto => {

            // Variable que tiene el nombre del proyecto
            let Nombre_Proyecto = proyecto.lastElementChild.lastElementChild.textContent.toLowerCase();

            /*  Si se encuentra las letras del proyecto, se ira borrando las que no coinciden.
                
                (Filtro es una etiqueta la cual en el archivo CSS tiene como unica
                propiedad un display:none, para asi hacer desaparecer todo contenido
                que tenga esta etiqueta)
            */
            Nombre_Proyecto.includes( e.target.value.toLowerCase())
                ? proyecto.classList.remove('filtro')                //Se remueve la etiqueta filtro
                : proyecto.classList.add('filtro');                 //Se añade la etiqueta filtro
        });
    });
}