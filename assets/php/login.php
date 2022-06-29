<?php

    //Agregando la base de datos
    include("db.php");

    // Variables
    $usuario =  $_POST['user'];     //Recibiendo el usuario
    $pass    =  $_POST['password']; //Recibiendo la contraseña

    // Consulta y busqueda del mismo
    $query = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND contrasena = '$pass'";
    $resultado = mysqli_query($conexion, $query);

    // Obteniendo resultados
    $filas = mysqli_num_rows($resultado);

    // Validacion
    if($filas){
        header("location: ../templates/home.html");
    }
    else
    {
        header("location: ../login.html");
    }

    // Cerrando la conexion
    mysqli_free_result($resultado);
    mysqli_close($conexion);
?>