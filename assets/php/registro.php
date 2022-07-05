<?php

    //Agregando la base de datos
    include("db.php");

    // Variables
    // Datos del proyecto
    $titulo         = $_POST['titulo-proyecto'];
    $descripcion    = $_POST['descripcion'];

    // Bachilleres
    $nombre     = $_POST['bachiller'];
    $ci         = $_POST['bachiller-ci'];
    $tlf        = $_POST['bachiller-tlf'];

    // Datos del tutor academico
    $TA         = $_POST['tutor-aca'];
    $TACedula   = $_POST['tutor-aca-ci'];
    $TATelefono = $_POST['tutor-aca-tlf'];

    // Datos del tutor institucional
    $TI         = $_POST['tutor-ins'];
    $TICedula   = $_POST['tutor-ins-ci'];
    $TITelefono = $_POST['tutor-ins-tlf'];

    // Datos del tutor comunitario
    $TC         = $_POST['tutor-com'];
    $TCCedula   = $_POST['tutor-com-ci'];
    $TCTelefono = $_POST['tutor-com-tlf'];

    // Ubicacion
    $estado      = $_POST['estado'];
    $municipio   = $_POST['municipio'];
    $parroquia   = $_POST['parroquia'];
    $ciudad      = $_POST['ciudad'];
    $comunidad   = $_POST['comunidad'];

    // Fechas
    $fecha_inicio   = $_POST['fecha-inicio'];
    $fecha_fin      = $_POST['fecha-fin'];
    $semanas        = $_POST['semanas'];

    // Queries
    $q_titulos = "INSERT INTO titulos VALUES ('$titulo', '$descripcion');";


    // Ejecucion de queries
    $query = mysqli_query($conexion, $q_titulos);

    if($query){

        echo "<script> alert('Datos registrados correctamente'); </script>";
    }
    else
    {
        echo "<script> alert('Error al registrar los datos'); </script>";
    }



?>