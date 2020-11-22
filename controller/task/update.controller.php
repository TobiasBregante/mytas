<?php
    // Request data task for add to server
    $titleTask = $_POST['title'] ? $_POST['title'] : null;
    $textTask = $_POST['task'] ? $_POST['task'] : null; 
    $idTask = $_POST['id'] ? $_POST['id'] : null; 
    $auth = true;

    function HandlerUpdateTask($title, $task, $idTask, $auth) {
        if(isset($title, $task, $idTask)){
            // call to database schema
            require_once('../../model/db.model.php');

            // data task
            $responseClient = array(
                'status' => 200
            );

            // update data collection
            $prepareSQL = $db->prepare('UPDATE pending_tasks 
                SET task_name = :title, 
                    task_description = :content  
                WHERE _id = :id');
            
            // execute sentence SQL
            $prepareSQL->execute(
                array(
                    ':title' => strval($title),
                    ':content' => strval($task),
                    ':id' => strval($idTask)
                )
            );

        }else{
            $responseClient = array(
                'status' => 401,
                'message' => 'Data no update'
            );
        }
        $responseClient = json_encode($responseClient);
        print $responseClient;
    }

    // execute handler function controller
    HandlerUpdateTask($titleTask, $textTask, $idTask, $auth);
?>