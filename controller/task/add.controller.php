<?php
    // Request data task for add to server
    $titleTask = $_POST['title'] ? $_POST['title'] : null;
    $textTask = $_POST['task'] ? $_POST['task'] : null; 
    $auth = true;

    function HandlerAddTask($title, $task, $auth) {
        if(isset($title, $task)){
            // define timezone
            date_default_timezone_set('America/Argentina/Buenos_Aires');

            // call to database schema
            require_once('../../model/db.model.php');

            // data task
            $responseClient = array(
                'status' => 200
            );

            // insert data collection
            $prepareSQL = $db->prepare('INSERT INTO pending_tasks (_id, task_name, task_description, task_since) 
                VALUES (:id, :title, :content, :since)');
            
            // execute sentence SQL
            $prepareSQL->execute(
                array(
                    ':id' => strval(uniqid()),
                    ':title' => strval($title),
                    ':content' => strval($task),
                    ':since' => strval(date("d-m-Y"))
                )
            );

        }else{
            $responseClient = array(
                'status' => 401,
                'message' => 'Data no exist'
            );
        }
        $responseClient = json_encode($responseClient);
        print $responseClient;
    }

    // execute handler function controller
    HandlerAddTask($titleTask, $textTask, $auth);
?>