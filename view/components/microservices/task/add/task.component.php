<?php
    function BtnAddTask() {
        if(isset($_GET['view']) && $_GET['view'] === 'tasks'){
            ?>
            <button class='btn-add-task' type='button'>
                <svg viewBox="0 0 16 16" 
                    class="bi bi-plus" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" 
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </button>
            <?php
        }
        ?>
        <!-- form add -->
        <article class="col-12 col-sm-12 col-lg-12 col-xl-12 content-frm-add-task-close">
            <form method='POST' class="frm-task-add form-group col-12 col-sm-12 col-lg-6 col-xl-6 m-auto bg-dark p-3">
                <article class="form-group">
                    <label>Agregue un título</label>
                    <input type="text" 
                        name="title" 
                        class="form-control" 
                        placeholder='Agregue un título'>
                </article>
                <article class="form-group">
                    <label>Agregue una tarea</label>
                    <textarea name="task" 
                        class="form-control" 
                        placeholder='Agregue una tarea'></textarea>
                </article>
                <article class="text-light bg-danger form-group d-none error-send-task">
                    <p>
                        Ha ocurrido un error mientras se subía la tarea.
                        Verifica de que todos los campos estén correctos.
                    </p>
                </article>
                <article class="text-light bg-success form-group d-none success-send-task">
                    <p>
                        Tu tarea se ha subido satisfactoriamente!
                    </p>
                </article>
                <article class="form-group">
                    <input type="submit" value="Agregar" class='btn btn-primary d-block col-12'>
                </article>
            </form>
        </article>

        <!-- form update -->
        <article class="col-12 col-sm-12 col-lg-12 col-xl-12 content-frm-update-task-close">
            <form method='POST' class="frm-task-update form-group col-12 col-sm-12 col-lg-6 col-xl-6 m-auto bg-dark p-3">
                <article class="form-group">
                    <label>Agregue un título</label>
                    <input type="text" 
                        name="title" 
                        class="form-control" 
                        placeholder='Agregue un título'>
                </article>
                <article class="form-group">
                    <label>Agregue una tarea</label>
                    <textarea name="task" 
                        class="form-control" 
                        placeholder='Agregue una tarea'></textarea>
                </article>
                <article class="text-light bg-danger form-group d-none error-send-task">
                    <p>
                        Ha ocurrido un error mientras se actualizaba la tarea.
                        Verifica de que todos los campos estén correctos.
                    </p>
                </article>
                <article class="text-light bg-success form-group d-none success-send-task">
                    <p>
                        Tu tarea se ha actualizado satisfactoriamente!
                    </p>
                </article>
                <article class="form-group">
                    <input type="submit" value="Guardar cambios" class='btn btn-warning d-block col-4'>
                    <input type="button" value="Cerrar" class='btn-update-task-close btn btn-danger col-4'>
                </article>
            </form>
        </article>
        <?php
    }
?>