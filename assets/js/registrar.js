// Variables
const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu');

let cerrar = document.querySelector(".close");
let cerrarV = document.querySelector(".close-video");
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelector(".modal");
let modalC = document.querySelector(".NuevoProyecto-btn");
let exit = document.querySelector("#exit");
<<<<<<< HEAD:js/registrar.js
let add = document.querySelector('#add-student')
let bach=  document.querySelector('.bachilleres')

let minusBtn = document.querySelector("#del-student")
let inputs = document.querySelectorAll(".input-change")

let imgUp = document.getElementById("img-uploader")
let imgUpMore = document.getElementById("img-uploader-more")
let videoUp = document.getElementById("video-uploader");
let vdsUp = document.getElementById('add-vds');

let miniatura = document.querySelector("#img-min")
let imgs = document.querySelector('#img-more')
let del_imgs = document.querySelector('#del-imgs')

let imgs_list = [];
let video_list = [];
let imgPre = document.querySelector(".imgPreview")
=======
let addBach = document.querySelector("#add-bach");
>>>>>>> e068a692ce98f656453e3c6588b633981494101d:assets/js/registrar.js

// Booleano para el modal
let ModalCerrado;

// EventListeners
eventListeners();

function eventListeners(){

    //Para abrir el menu
    window.addEventListener('click', function(e) {

        // imgUp = document.getElementById("img-uploader") 
        // console.log(imgUp)

        if(e.target.id === 'img-min'){
            
            imgUp.click()
            
        }

        if(e.target.id === "add-imgs"){
            
            imgUpMore.click()
            
        }

        if(e.target.id === 'img-more'){

            // Bajando el model
            document.querySelector('.modal-container').style.opacity = "1";
            document.querySelector('.modal-container').style.visibility = "visible";
            // modal.classList.toggle("modal-close");
            document.querySelector('.modal').classList.toggle("modal-close");


            document.querySelector('.modal-container').style.transform = 'translateY(0%)';
        }

        if(e.target.id === 'video'){

            // Bajando el model
            document.querySelector('.modal-container-video').style.opacity = "1";
            document.querySelector('.modal-container-video').style.visibility = "visible";
            // modal.classList.toggle("modal-close");
            document.querySelector('.modal-video').classList.toggle("modal-close");


            document.querySelector('.modal-container-video').style.transform = 'translateY(0%)';
        }
        
        if(e.target.id === "add-vds"){
            // videoUp.click();
        }

        //Verificando a donde le dio click
        if(e.target.id == 'add-student'){

            addStudent()
            
            // Actualizando la lista de inputs
            inputs = document.querySelectorAll(".input-change")
        }
        else if(e.target.id == "del-student"){

            deleteStudent()

            // Actualizando la lista de inputs
            inputs = document.querySelectorAll(".input-change")
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
            window.location = "resources/login.html";
        }

<<<<<<< HEAD:js/registrar.js
        // Registrando
        if(e.target.id == "register"){

            console.log('Registrando señores')

            // Verificando si estan vacios
            let vacio = false

            for (let key in inputs) {
                
                //Verificando si al menos hay uno para dar la alerta
                if(inputs[key].value == ''){
                    vacio = true
                }
            }

            if(vacio){
                alert("Todos los campos son obligatorios, por favor, llenarlos")
                vacio = false
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
            
            //
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
        
        if(imgs_list[0] == null || imgs_list[0] == undefined){
            // agregarColor(miniatura, document.querySelector('#imagen-miniatura'), "border: none;", "stroke: #0670e9");
            agregarColor( document.querySelector('#img-more'), document.querySelector('#imagen-more'), "border: none;", "stroke: #0670e9");
        }
=======
        if(e.target == addBach){
            
            agregarBachiller();
        }

>>>>>>> e068a692ce98f656453e3c6588b633981494101d:assets/js/registrar.js
        // Recorrida y condicional para las tarjetas del menu
        // for(let i = 1; i <= 8; i++){

        //     // Validacion del elemento seleccionado en el menu
        //     if((e.target == document.querySelector(`.cta${i}`)) || e.target == document.querySelector(`.text-Op1`) || (e.target == document.querySelector(`.hand${i}`))){

        //         let img;
                
        //         //Transformacion 
        //         if(e.target == document.querySelector(`.text-Op1`)){

        //             console.log(`Es la opcion #${i}`);
        //             console.log(document.querySelector(`.cta${i} p`))
        //         }

        //         // Verificacion de target
        //         if(e.target == document.querySelector(`.hand${i}`) || e.target == document.querySelector(`.cta${i} p`)){

        //             img = e.target.parentElement.parentElement.children[0].src;
        //         }
        //         else{

        //             img = e.target.parentElement.children[0].src;
        //         }

        //         // Verificacion para poner el titulo, descripcion y precio correspondiente
        //         switch (i) {
                    
        //             case 1:
        //                 creacionModel(document.querySelector('.modal-container'), img, `Mision`, 'Realizar mantenimiento a todo dispositivo tecnológico del día a día, brindando una buena calidad de servicio, atención al cliente y todo a un excelente precio con el fin de lograr la satisfacción del cliente.');
        //             break;
                
        //             case 2:
        //                 creacionModel(document.querySelector('.modal-container'), img, `Vision`, 'Ofrecer el mejor servicio de mantenimiento a nivel nacional, con sedes distribuidas en todo el país para la facilidad del cliente al momento en que su dispositivo necesite una limpieza o revisión, agregado a ello, realizar talleres para la capacitación de personas referente al mantenimiento de un computador.');
        //             break;
                
        //             case 3:
        //                 creacionModel(document.querySelector('.modal-container'), img, `Objetivo`, 'Nuestro objetivo es ofrecer el mejor servicio técnico en mantenimiento y recuperación de dispositivos inteligentes, agregado a ello la mejor capacitación de procesos para mantener limpio tu dispositivo como tanto en el hardware y software del sistema.');
        //             break;

        //             case 4:
        //                 creacionModel(document.querySelector('.modal-container'), img, `Sobre Nosotros`, 'Trabajando desde el año 2016 para prestar el mejor servicio de mantenimiento de dispositivos, con personal calificado en el area, herramientas de ultima generacion, su equipo quedara como nuevo al tener nuestra limpieza y optimizacion.');
        //             break;
                    
        //             default:
        //                 break;
        //         }
                
        //         //Bajando el model
        //         modalC.style.opacity = "1";
        //         modalC.style.visibility = "visible";
        //         modal.classList.toggle("modal-close");
        
        //         document.querySelector('.modal-container').style.transform = 'translateY(0%)';
        //     }

        //     // Validacion del elemento seleccionado en el nav desplegable en el diseño responsivo
        //     if(e.target == document.querySelector(`.op${i}`)){

        //         // Ocultar Menu lateral en el diseño responsivo
        //         OcultarMenu();
        //     }
        // }
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
    
    //agregando el color 
    agregarColor(miniatura, document.querySelector('#imagen-miniatura'), "border: 5px solid #1df51d;", "stroke: #1df51d");
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

// Funcion para los videos
videoUp.addEventListener("change", function(){

    // console.log(this.files)
    let files = this.files;
    //imgs_list;
    let supportedVideos = ["video/mp4", "video/mkv"];
    let NoValidos = false; //Elemento no validos

    for (let  i = 0; i < files.length; i++){
        video = files[i];

        console.log(video)

        video_list = [...video_list, files[i]];

        if(supportedVideos.indexOf(video.type) != -1){
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
});

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

<<<<<<< HEAD:js/registrar.js
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
        <input class="input-change" type="text" name="bachiller" id="" placeholder="Nombre y Apellido">
        <input class="input-change" type="text" name="bachiller-ci" id="" placeholder="20000000">
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
=======
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
>>>>>>> e068a692ce98f656453e3c6588b633981494101d:assets/js/registrar.js
}