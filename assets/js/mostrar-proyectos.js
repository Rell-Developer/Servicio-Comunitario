// Variables
let xhr = new XMLHttpRequest();

// Abriendo XML
xhr.open('GET', 'assets/php/proyectos.php');

    alert('llegando');
// Ejecutando funciones
xhr.onload = function(){


    // Verificando estado de la peticion
    if(xhr.status == 200){

        // declarando el archivo JSON
        let json = JSON.parse(xhr.responseText);
        console.log(json);
    }
    else{

        // Mostrando el tipo de error
        console.log(`Existe un error de tipo: ${xhr.status}`);
    }
}

// enviado
xhr.send();