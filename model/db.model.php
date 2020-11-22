<?php
    try{
        $user_root = 'root';
        $pdw_root = '';
        $db = new PDO('mysql:host=127.0.0.1;dbname=tasks', $user_root, $pdw_root);
    }catch (PDOException $e) {
        print "¡Error!: " . $e->getMessage();
        die();
    }
?>