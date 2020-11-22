<?php
    function HandlerGetTask() {
        // call to database schema
        require_once('../../model/db.model.php');

        // data task
        $responseClient = array(
            'status' => 200
        );

        // insert data collection
        $prepareSQL = $db->prepare('SELECT * FROM pending_tasks');
        
        // execute sentence SQL
        $prepareSQL->execute();
        $responseClient = json_encode($prepareSQL->fetchAll());
        print $responseClient;
    }

    // execute handler function controller
    HandlerGetTask();
?>