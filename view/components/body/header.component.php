<?php
    function Navbar() {
        $homeActive = isset($_GET['view']) 
        && $_GET['view'] === 'home' 
        || !isset($_GET['view']) ? 'active' : '';
        $tasksActive = isset($_GET['view']) 
        && $_GET['view'] === 'tasks' ? 'active' : '';
        ?>
        <header class="row">
            <nav class="navbar navbar-expand-lg navbar-dark col-12 col-sm-12 col-lg-12 col-xl-12">
                <a class="navbar-brand" href="#">Mis Tareas E.T. 29º</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <article class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item <?php echo $homeActive; ?>">
                            <a class="nav-link" href="?view=home">Inicio</a>
                        </li>
                        <li class="nav-item <?php echo $tasksActive; ?>">
                            <a class="nav-link" href="?view=tasks">Mis Tareas</a>
                        </li>
                    </ul>
                </article>
            </nav>
        </header>
        <?php
    }
?>