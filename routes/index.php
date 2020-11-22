<?php
    require_once('../view/components/body/index.component.php');

    // client request
    $get = isset($_GET['view']) ? $_GET['view'] : 'home';
    
    // rendering view
    Body($get);
?>