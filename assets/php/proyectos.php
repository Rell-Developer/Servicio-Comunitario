<?php
    //Agregando la base de datos
    include("db.php");

    // Variables
    $datos;

    // Consulta
    $consulta = "SELECT * FROM titulos";
    
    // Ejecutando la consulta
    $resultado = mysqli_query($conexion, $consulta);

    // Obteniendo resultados
    // $query = "SELECT * FROM table_name";

    // if ($consultado == false){

    //         if ($resultado) {

    //         /* fetch associative array */
    //         while ($row = $resultado->fetch_assoc()) {
    //             // $field1name = $row["col1"];
    //             // $field2name = $row["col2"];

    //             $datos = array(

    //                     array(
    //                         'id' => 1,
    //                         'nombre' => $row["nombre"],
    //                         'descripcion' => $row["descripcion"]
    //                     )
    //                 );

    //             echo json_encode($datos);

    //             // header("location: ../../index.html");
    //         }

    //         header("location: ../../index.html");

    //         /* free result set */
    //         $resultado->free();
    //     }

    //     $consultado = true;
    // }


    
    if ($resultado) {

        /* fetch associative array */
        // DA UN RESULTADO
        // while ($row = $resultado->fetch_assoc()) {

        //     $datos = array(

        //             array(
        //                 'id' => 1,
        //                 'nombre' => $row["nombre"],
        //                 'descripcion' => $row["descripcion"]
        //             )
        //         );

        //     // echo json_encode($datos);

        //     // header("location: ../../index.html");
        // }

        // $datos = array(

        //     array(
        //         'id' => 1,
        //         'nombre' => "nombre",
        //         'descripcion' => "descripcion"
        //     )
        // );

        while ($fila =mysqli_fetch_array($resultado)){

            $dat = array(

                    array(
                        'id' => 1,
                        'nombre' => $fila["nombre"],
                        'descripcion' => $fila["descripcion"]
                    ),
                );

            // echo json_encode($datos);

            $datos = $dat + $datos;
            // header("location: ../../index.html");
        }

        // header("location: ../../index.html");

        /* free result set */
        $resultado->free();
    }
    

    // Validacion
    // if($filas){
    //     header("location: ../../index.html");
    // }
    // else
    // {
    //     header("location: ../login.html");
    // }

    // Cerrando la conexion
    // mysqli_free_result($resultado);
    echo json_encode($datos);
    mysqli_close($conexion);

?>