<?php
    require_once('../view/components/microservices/task/add/task.component.php');
    require_once('head.component.php');
    require_once('footer.component.php');
    require_once('header.component.php');
    require_once('scripts.component.php');
    
    function Body($module) {
        // path root files
        $path = '../view/modules/';
        
        // routes
        $router = array(
            'home' => $path.'home.module.php',
            'tasks' => $path.'tasks.module.php'
        );

        // page title list
        $titlePage = array(
            'home' => 'Home | My Tasks',
            'tasks' => 'Tasks | My Tasks'
        )
        ?>
        <!DOCTYPE html>
        <html lang="en">
            <?php Head($titlePage[$module]) ?>
            <body>
                <main class="container-fluid">
                    <?php Navbar() ?>
                    <?php BtnAddTask() ?>
                    <?php require_once($router[$module]) ?>
                    <?php Footer() ?>
                </main>
            </body>
            <?php Scripts() ?>
        </html>
        <?php
    }
?>