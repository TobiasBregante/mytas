<?php
    try{
        $user_root = 'epiz_28913026';
        $pdw_root = 'PdMEBywmINxQ';	
        $db = new PDO('mysql:host=127.0.0.1;dbname=schedone', $user_root, $pdw_root);
    }catch (PDOException $e) {
        print "¡Error!: " . $e->getMessage();
        die();
    }
?>