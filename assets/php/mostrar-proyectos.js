// Variables
// let xhr = new XMLHttpRequest();
let galeria = document.querySelector('.galeria-port');

// Abriendo XML
// xhr.open('GET', 'assets/php/proyectos.php');

// Ejecutando funciones
// xhr.onloadend = function(){

//     // Verificando estado de la peticion
//     if(xhr.status == 200){

//         // declarando el archivo JSON
//         let json = JSON.parse(xhr.responseText);
//         // let json = xhr.responseText;
//         console.log(json);

//         agregarProyecto(json[0].nombre);
//     }
//     else if(xhr.status == 404){

//         throw new Error('proyectos.php replied 404');

//     }else{
//         // Mostrando el tipo de error
//         console.log(`Existe un error de tipo: ${xhr.status}`);
//     }
// }

// enviado
// xhr.send();


// Metodos

// 

agregarProyecto();

function agregarProyecto(){

    // Creando los contenedores a mostrar
    let contenedor = document.createElement('div');
    contenedor.classList.add('imagen-port'); //Agregando clase

    // Agregando los datos basicos del proyecto
    contenedor.innerHTML =` <?php
    
        $conexion = mysqli_connect("localhost", "root", "", "serviciocomunitario");
        $consulta = "SELECT * FROM titulos";
        $resultado = mysqli_query($conexion, $consulta);

        while ($fila =mysqli_fetch_array($resultado)){
    ?>
        <img src='assets/img/resources/cards/img1.png'>

        <div class='hover-galeria cta1'>
            <p><b> <?php echo $fila['nombre'] ?></b></p>
        </div>

    <?php 
} 
?>
    `;

    // Agregando al HMTL
    galeria.appendChild(contenedor);
}