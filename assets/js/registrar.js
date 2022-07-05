// Variables
const iconoMenu     = document.querySelector('#icono-menu'),
    menu            = document.querySelector('#menu');

let cerrar          = document.querySelector(".close");
let cerrarV         = document.querySelector(".close-video");
let abrir           = document.querySelectorAll(".cta")[0];
let modal           = document.querySelector(".modal");
let modalC          = document.querySelector(".NuevoProyecto-btn");
let exit            = document.querySelector("#exit");
let add             = document.querySelector('#add-student');
let bach            =  document.querySelector('.bachilleres');

let minusBtn        = document.querySelector("#del-student");
let inputs          = document.querySelectorAll(".input-change");
let requeridos      = document.querySelectorAll('.requerid');
let btn_registrar   = document.querySelector('#btn-register');

let imgUp           = document.getElementById("img-uploader")
let imgUpMore       = document.getElementById("img-uploader-more");
let videoUp         = document.getElementById("video-uploader");
let vdsUp           = document.getElementById('add-vds');

let miniatura       = document.querySelector("#img-min");
let imgs            = document.querySelector('#img-more');
let del_imgs        = document.querySelector('#del-imgs');
let del_videos      = document.querySelector('#del-vds');

let imgs_list       = [];
let video_list      = [];
let imgPre          = document.querySelector(".imgPreview");
let addBach         = document.querySelector("#add-bach");
let miniatura_disponible = false;

// Lista de ubicacion
let estados_list    = document.querySelector('#estados-list');
let municipios_list = document.querySelector('#municipios-list');
let parroquias_list = document.querySelector('#parroquia-list');
let ciudades_list   = document.querySelector('#ciudades-list')

// Booleano para el modal
let ModalCerrado;

// EventListeners
eventListeners();

function eventListeners(){
    
    // Para cargar el JSON de estados
    document.addEventListener('DOMContentLoaded', function(e){

        // Cargar JSON
        cargarJSON('estado', null, null, null, null);
        
    });

    // Cargar la lista de municipios y ciudades
    estados_list.addEventListener('click', function(){
        
        // Llenar listas
        if( estados_list.value != ''){
            
            cargarJSON('municipios', document.querySelector('#municipios-list'), estados_list, 'estado', 'municipio');
            cargarJSON('ciudades', document.querySelector('#ciudades-list'), estados_list, 'estado', 'municipio');
        }
    });

    // Cargar la lista de Parroquias
    municipios_list.addEventListener('click', function(){

        // Llenar listas
        if( municipios_list.value != ''){
            
            cargarJSON('parroquias', document.querySelector('#parroquia-list'), municipios_list, 'municipios', 'parroquias');
        }
    });

    //Para abrir el menu
    window.addEventListener('click', function(e) {

        // Agregar miniatura
        if(e.target.id === 'img-min'){
            
            imgUp.click()
            
        }

        // Agregar mas imagenes
        if(e.target.id === "add-imgs"){
            
            imgUpMore.click()
            
        }

        // Agregando mas imagenes en el modal
        if(e.target.id === 'img-more'){

            // Bajando el model
            document.querySelector('.modal-container').style.opacity = "1";
            document.querySelector('.modal-container').style.visibility = "visible";
            document.querySelector('.modal').classList.toggle("modal-close");


            document.querySelector('.modal-container').style.transform = 'translateY(0%)';
        }

        //Verificando a donde le dio click
        if(e.target.id == 'add-student'){

            addStudent()
            
            // Actualizando la lista de inputs
            inputs = document.querySelectorAll(".input-change")
            requeridos  = document.querySelectorAll(".requerid")
        }
        else if(e.target.id == "del-student"){

            deleteStudent()

            // Actualizando la lista de inputs
            inputs      = document.querySelectorAll(".input-change")
            requeridos  = document.querySelectorAll(".requerid")
        }

        // Agregando video, para bajar el modal
        if(e.target.id === 'video'){

            // Bajando el model
            document.querySelector('.modal-container-video').style.opacity = "1";
            document.querySelector('.modal-container-video').style.visibility = "visible";
            // modal.classList.toggle("modal-close");
            document.querySelector('.modal-video').classList.toggle("modal-close");


            document.querySelector('.modal-container-video').style.transform = 'translateY(0%)';
        }        

        // Verificando cantidad de estudiantes
        if(bach.childElementCount > 3){
            MinusButton(true)
        }
        else{
            MinusButton(false)
        }

        // Cerrando Sesion
        if(e.target == exit){
            
            // Llevando al cliente al login
            window.location = "assets/resources/login.html";
        }


        // Registrando
        if(e.target.id == "register"){

            console.log('Registrando señores')

            // Verificando si estan vacios
            let vacio = false

            for (let key in requeridos) {
                
                //Verificando si al menos hay uno para dar la alerta
                if(requeridos[key].value == ''){
                    vacio = true;
                }
            }

            if(vacio){
                alert("Todos los campos son obligatorios, por favor, llenarlos")
                vacio = false
            }else if(!miniatura_disponible){

                alert('Agrega una miniatura al nuevo proyecto');
            }
            else if(imgs_list.length == 0){

                alert('Agrega una imagen')
            }
            else{

                alert('registrando datos')
                console.log(document.getElementById('img-foto'));
                document.querySelector('#register-form').submit();
            }

        }else if(e.target.id == "clean"){ //Borrando

            // Borrando campos
            for (let key in inputs) {
                
                inputs[key].value =  ""
            }

            // Mensaje de limpieza hecha
            alert("Campos formateados con exito")
        }

        // Borrar imagenes de la lista
        if(e.target == del_imgs){
            
            //Si no hay imagenes subidas
            if(imgs_list == null){
                // agregarColor(miniatura, document.querySelector('#imagen-miniatura'), "border: none;", "stroke: #0670e9");
                agregarColor( document.querySelector('#img-more'), document.querySelector('#imagen-more'), "border: none;", "stroke: #0670e9");
            }

            // Verificando si hay imagenes por borrar
            if(imgs_list === undefined){
                alert('No ha subido alguna imagen.')
            }else{
                let img_a_borrar = document.querySelector('.contenedor-imagenes').lastElementChild;

                if(img_a_borrar != null){
                    // Borrando las imagenes de la vista
                    document.querySelector('.contenedor-imagenes').removeChild(img_a_borrar);

                    // Borrando las imagenes de la lista
                    imgs_list.pop()

                    // Avisando
                    alert('Eliminando...')
                }
                else if(img_a_borrar == null){ //Mensaje para cuando el arreglo esta vacio
                    alert('No hay imagen para borrar.')

                }
            }
        }

        // Borrar videos de la lista
        if(e.target == del_videos){
            
            console.log(video_list)
            //Si no hay imagenes subidas
            if(video_list == null){
                // quitando color
                agregarColor( document.querySelector('#video'), document.querySelector('#video-uploader'), "border: none;", "stroke: #0670e9");
            }

            // Verificando si hay imagenes por borrar
            if(video_list === undefined){
                alert('No ha subido alguna imagen.')
            }else{
                let video_a_borrar = document.querySelector('.contenedor-video').lastElementChild;

                // Comprobando si hay algun video para borrar
                if(video_a_borrar != null){
                    
                    // Borrando las imagenes de la vista
                    document.querySelector('.contenedor-video').removeChild(video_a_borrar);

                    // Borrando las imagenes de la lista
                    video_list.pop()

                    // Avisando
                    alert('Eliminando...')
                }
                else if(video_a_borrar == null){ //Mensaje para cuando el arreglo esta vacio
                    alert('No hay video para borrar.')
                }
            }
        }
        
        //Si borran todas las imagenes subidas
        if(imgs_list[0] == null || imgs_list[0] == undefined){
            //Se quita el color cuando se note que no hay archivos en la lista de imagenes
            agregarColor( document.querySelector('#img-more'), document.querySelector('#imagen-more'), "border: none;", "stroke: #0670e9");
        }

        //Si borran todos los videos subidos
        if(video_list[0] == null || video_list[0] == undefined){
            //Se quita el color cuando se note que no hay archivos en la lista de imagenes
            agregarColor( document.querySelector('#video'), document.querySelector('#video-uploader'), "border: none;", "stroke: #0670e9");
        }

        //Se agrega un bachiller
        if(e.target == addBach){
            
            agregarBachiller();
        }
    });

    //Efecto del boton cerrar
    cerrar.addEventListener('click', CerrarModal);

    //Efecto del boton de cerrar model de los videos
    cerrarV.addEventListener('click', CerrarModalVideo);

    //Boton de Despliegue del menu
    iconoMenu.addEventListener('click', e => {

        // Obtenemos la imagen con la direccion puesta
        const rutaActual = e.target.getAttribute('src');

        // Intercambio de las imagenes
        if(rutaActual == 'img/icons/open-menu.png'){

            // Hacemos aparecer el menu
            menu.style.display = 'block';

            // Animacion de izquierda
            setTimeout( () => {
                
                menu.style.transform = 'translate(0px)';      

                // Hacemos el cambio de la imagen del menu
                e.target.setAttribute('src', 'img/icons/open-menu2.png');

            }, 0);
        }
        else{
            // Metodo para ocultar el menu lateral responsivo
            OcultarMenu();
        }
    });
}

// Para previsualizar la imagen miniatura
function preview(event) {

    let leer_img = new FileReader();
    let id_img = document.getElementById('img-foto');

    leer_img.onload = () => {

        if(leer_img.readyState == 2){

            id_img.src = leer_img.result
        }
    }

    leer_img.readAsDataURL(event.target.files[0])
    
    // Si hay miniatura
    miniatura_disponible = true;

    //agregando el color 
    agregarColor(miniatura, document.querySelector('#imagen-miniatura'), "border: 5px solid #1df51d;", "stroke: #1df51d");
}

// Funcion para los videos
function SubirVideo(event){

    console.log(event.srcElement.files)
    
    // Se obtiene el arreglo de archivos
    let files = event.srcElement.files;
    
    //Archivos aceptados
    let supportedVideos = ["video/mp4", "image/mkv"];
    let NoValidos = false; //Elemento no validos

    //Se recorre el arreglo de archivos
    for (let  i = 0; i < files.length; i++){
        video = files[i]; //Se obtiene un video

        //Se verifica si el archivo es mp4 o mkv
        if(supportedVideos.indexOf(video.type) != -1){

            //Se agrega a la lista de videos
            video_list = [...video_list, files[i]];

            //se muestra miniatura
            createPreviewVideo(video);
        }
        else{
            NoValidos = true;
        }
    }

    //Mensaje
    if(NoValidos){
        alert('Se encontraron archivos no validos.')
    }else if(!NoValidos){
        alert("Todos los archivos subidos con exito.")
        agregarColor( document.querySelector('#video'), document.querySelector('#video-uploader'), "border: 5px solid #1df51d;", "stroke: #1df51d");
    }
}

// Funcion para mas imagenes
imgUpMore.addEventListener("change", function(){

    // console.log(this.files)
    let files = this.files;
    //imgs_list;
    let supportedImages = ["image/jpeg", "image/png", "image/gif"];
    let NoValidos = false; //Elemento no validos

    for (let  i = 0; i < files.length; i++){
        img = files[i];

        imgs_list = [...imgs_list, files[i]];

        if(supportedImages.indexOf(img.type) != -1){
            createPreview(img);
        }
        else{
            NoValidos = true;
        }
    }

    //Mensaje
    if(NoValidos){
        alert('Se encontraron archivos no validos.')
    }else if(!NoValidos){
        alert("Todos los archivos subidos con exito.")
        agregarColor( document.querySelector('#img-more'), document.querySelector('#imagen-more'), "border: 5px solid #1df51d;", "stroke: #1df51d");
    }
});

//Preview para las imagenes
function createPreview(file){
    let imgCodified = URL.createObjectURL(file);

    let img = document.createElement('img')
    img.src = imgCodified
    img.classList = "imgPreview"

    document.querySelector('.contenedor-imagenes').appendChild(img)
}

function createPreviewVideo(file){
    let videoCodified = URL.createObjectURL(file);

    let video = document.createElement('video')
    video.src = videoCodified
    video.classList = "imgPreview"

    document.querySelector('.contenedor-video').appendChild(video)
}

function CerrarModal(){

    // Seguro para evitar bug de cierre del modal
    ModalCerrado = true;
    
    modal.classList.toggle('modal-close');

    document.querySelector('.modal-container').style.transform = 'translateY(0%)';

    document.querySelector('.close').style.visibility = 'hidden';

    setTimeout(function() {
        
        document.querySelector('.modal-container').style.visibility = 'hidden';
        document.querySelector('.modal-container').style.opacity = '0';

        document.querySelector('.close').style.visibility = 'visible';

        // Habilitando para que se pueda cerrar nuevamente
        ModalCerrado = false;
    }, 500);
}

function CerrarModalVideo(){

    // Seguro para evitar bug de cierre del modal
    ModalCerrado = true;
    
    document.querySelector('.modal-video').classList.toggle('modal-close');

    document.querySelector('.modal-container-video').style.transform = 'translateY(0%)';

    document.querySelector('.close-video').style.visibility = 'hidden';

    setTimeout(function() {
        
        document.querySelector('.modal-container-video').style.visibility = 'hidden';
        document.querySelector('.modal-container-video').style.opacity = '0';

        document.querySelector('.close-video').style.visibility = 'visible';

        // Habilitando para que se pueda cerrar nuevamente
        ModalCerrado = false;
    }, 500);
}

function creacionModel(etiqueta, imagen, titulo, descripcion){

    //Cambiando elementos
    etiqueta.children[0].src = imagen;                                      //Imagen
    etiqueta.children[1].children[1].children[0].textContent = titulo;      //Titulo
    etiqueta.children[1].children[1].children[1].textContent = descripcion; //Descripcion
}

function OcultarMenu() {
    
    // Cambio de imagen
    iconoMenu.setAttribute('src', 'img/icons/open-menu.png');

    // Movimiento del menu
    menu.style.transform = 'translate(600px)';

    // Ocultar menu
    setTimeout( () => {
        menu.style.display = 'none';
    }, 250);
}


// Añiendo otro campo para agregar mas estudiantes
function addStudent(){

    // Creacion de contenedores
    let labels = document.createElement('div')
    let inputs = document.createElement('div')

    // Elementos a agregar
    labels.innerHTML = 
        `
        <label for="bachiller">Bachiller</label>
        <label for="bachiller-ci">Cedula</label>
        <label for="bachiller-tlf">Telefono</label>
        `

    inputs.innerHTML = `        
        <input class="input-change requerid" type="text" name="bachiller" id="" placeholder="Nombre y Apellido">
        <input class="input-change requerid" type="text" name="bachiller-ci" id="" placeholder="20000000">
        <input class="input-change" type="text" name="bachiller-tlf" id="" placeholder="04121234567">
    `
    
    // Agregando casillas
    bach.appendChild(labels)
    bach.appendChild(inputs)
}

// Visibilidad del boton de borrar
function MinusButton(agregar){

    if(agregar){
        minusBtn.style = "visibility: visible;"
    }
    else{
        minusBtn.style = "visibility: hidden;"
    }
}

// Borrando campos de un estudiante
function deleteStudent(){

    // Borrando campos de un estudiante
    bach.removeChild(bach.lastElementChild)
    bach.removeChild(bach.lastElementChild)
    
}

// Agregando el color
function agregarColor(borde, img_svg, valor1, valor2){

    borde.style = valor1; 
    img_svg.style = valor2;
}

// Agrega un bachiller al formulario
function agregarBachiller(){

    console.log(addBach.parentElement.classList.value);
    document.querySelector(".bachilleres").innerHTML += `
        <br>
        <div>
            <label for="bachiller">Bachiller</label>
            <label for="bachiller-ci">Cedula</label>
            <label for="bachiller-tlf">Telefono</label>
        </div>

        <div>   
            <input type="text" name="bachiller" id="" placeholder="Nombre y Apellido">
            <input type="text" name="bachiller-ci" id="" placeholder="20000000">
            <input type="text" name="bachiller-tlf" id="" placeholder="04121234567">
        </div>
    `; 

    console.log(addBach.parentElement);
}

// Cargar el JSON y sus inputs
function cargarJSON(list, select, lista_anterior, key_list, key){

    // Verificando si el estado estaba vacio
    if( estados_list.length == 1){
        
        // Estados
        fetch("assets/json/venezuela.json")
            .then(respuesta => respuesta.json())
            .then( items => {
                items.forEach(item => {

                    let option = document.createElement('option');
                    
                    // console.log(item['estado']);
                    // console.log(item[list]);

                    // option.textContent = item['estado'];
                    option.textContent = item[list];

                    estados_list.append(option);
                    
                });
            });
    }

    // Verificacion para agregar los municipios
    if( estados_list.length > 1 && list == "municipios"){

        // console.log(select.childElementCount)
        if( select.childElementCount > 1){

            for (let i = select.childElementCount; i > 1; i--) {

                
                select.removeChild( select.lastElementChild );
                // console.log(select.childElementCount)
            }

            for (let i = ciudades_list.childElementCount; i > 1; i--) {

                
                ciudades_list.removeChild( ciudades_list.lastElementChild );
                // console.log(select.childElementCount)
            }
        }
        
        // Municipios
        fetch("assets/json/venezuela.json")
            .then(respuesta => respuesta.json())
            .then( items => {
                items.forEach(item => {

                    if( estados_list.value == item['estado']){
                        
                        item[list].forEach( municipio => {
                        
                            let option = document.createElement('option');
                        
                            // console.log(municipio['municipio'])
                            option.textContent = municipio['municipio'];

                            select.append(option);
                        });
                    }
                    // option.textContent = item['estado'];
                });
            });

        for (let i = parroquias_list.childElementCount; i > 1; i--) {

            parroquias_list.removeChild( parroquias_list.lastElementChild );
            // console.log(select.childElementCount)
        }
    }

    // Verificacion para agregar las parroquias
    if( municipios_list.length > 1){
        // console.log(select.childElementCount)
        if( select.childElementCount > 1){
            
            // console.log(`Tiene en total ${select.childElementCount} elementos.`)

            for (let i = select.childElementCount; i > 1; i--) {

                
                select.removeChild( select.lastElementChild );
                // console.log(select.childElementCount)
            }
        }
        
        //Parroquias
        fetch("assets/json/venezuela.json")
            .then(respuesta => respuesta.json())
            .then( items => {
                items.forEach(item => {

                    // Verificacion de estado
                    if( estados_list.value == item['estado']){
                        
                        // Recorriendo los municipios
                        item['municipios'].forEach( municipio => {

                            // Verificando el municipio
                            if( municipios_list.value == municipio['municipio']){

                                // Recorriendo las parroquias
                                municipio['parroquias'].forEach( parroquia => {

                                    // Agregando la etiqueta option
                                    let option = document.createElement('option');

                                    // Agregando una parroquia como opcion
                                    option.textContent = parroquia;

                                    // Anexando al HTML
                                    select.append(option);
                                });
                            }
                        });
                    }
                });
            });
    }

    // Verificacion para agregar las ciudades
    if( estados_list.length > 1 && list == 'ciudades'){

        for (let i = select.childElementCount; i > 1; i--) {

            select.removeChild( select.lastElementChild );
            // console.log(select.childElementCount)
        }
        
        // Ciudades
        fetch("assets/json/venezuela.json")
        .then(respuesta => respuesta.json())
        .then( items => {
            items.forEach(item => {

                if( estados_list.value == item['estado']){
                    
                    item[list].forEach( ciudad => {
                    
                        
                        let option = document.createElement('option');
                    
                        // console.log(municipio['municipio'])
                        option.textContent = ciudad;

                        select.append(option);
                    });
                }
                // option.textContent = item['estado'];
            });
        });
    }

    // Verificando que sea distrito capital
    if( estados_list.value == 'Distrito Capital'){
        
        let option = document.createElement('option');
                    
        // console.log(municipio['municipio'])
        option.textContent = 'Caracas';

        ciudades_list.append(option);
    }
}
