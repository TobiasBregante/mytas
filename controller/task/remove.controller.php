<?php
    // Request data task for add to server
    $idTask = $_POST['id'] ? $_POST['id'] : null; 
    $auth = true;
    
    function HandlerAddTask($idTask, $auth) {
        if(isset($idTask)){
            // call to database schema
            require_once('../../model/db.model.php');

            // data task
            $responseClient = array(
                'status' => 200,
                'id' => $idTask
            );

            // insert data collection
            $prepareSQL = $db->prepare("DELETE FROM pending_tasks WHERE _id = :id");
            
            // execute sentence SQL
            $prepareSQL->execute(
                array(
                    ':id' => $idTask,
                )
            );

        }else{
            $responseClient = array(
                'status' => 401,
                'message' => 'Task has not been deleted'
            );
        }
        $responseClient = json_encode($responseClient);
        print $responseClient;
    }

    // execute handler function controller
    HandlerAddTask($idTask, $auth);
?>