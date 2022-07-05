<?php
    //Agregando la base de datos
    include(db.php)

    //Variables
    $titulo = $_POST['titulo-proyecto'];

    //Consulta
    $consulta = "SELECT * FROM titulos WHERE nombre = $titulo";

    //Query
    $query = mysqli_query($consulta);

    if($query){

        echo "<script>
            document.querySelector('.titulo').textContent = $query['nombre'];
        </script>";
    }
?>