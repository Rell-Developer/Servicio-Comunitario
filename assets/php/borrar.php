<?php
    //Añadiendo la base de datos
    include("db.php");

    // $id_proyecto = $_POST['id_proyecto'];

    $query = "DELETE FROM titulos WHERE id_titulos = 1;";

    $resultado = mysqli($query);

    if($resultado){
        echo "<script language='javascript'>";
        echo "alert('Proyecto borrado con exito');";  //not showing an alert box.
        echo "</script>";

        header('../../index.html');
    }
    else{
        echo "<script language='javascript'>";
        echo "alert('hubo algun error al borrar el proyecto');";  //not showing an alert box.
        echo "</script>";
    }
?>