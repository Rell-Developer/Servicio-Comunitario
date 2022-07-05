<?php

    //Agregando la base de datos
    include("../php/db.php");

    // Variables
    $usuario =  $_POST['user'];     //Recibiendo el usuario
    $pass    =  $_POST['password']; //Recibiendo la contraseña

    // Consulta y busqueda del mismo
    $query = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND clave = '$pass'";
    $resultado = mysqli_query($conexion, $query);

    // Obteniendo resultados
    $filas = mysqli_num_rows($resultado);

    // Validacion
    if($filas){
    
        header("location: ../../index.html");
    }
    else
    {
        // echo "<script> alert('Credenciales Incorrectas')";
        header("location: login.html");
    }

    // Cerrando la conexion
    mysqli_free_result($resultado);
    mysqli_close($conexion);
?>