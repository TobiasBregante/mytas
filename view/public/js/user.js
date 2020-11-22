
const FetchDataTask = async () => {
    // send data
    const sendData = await fetch('controller/task/get.controller.php')

    // result
    resData = await sendData.json()
    const CardTaskCollection = resData.length > 0 
    ? resData.map(element => {
        // set text presentation task
        this.name = element.task_name.length > 10
        ? element.task_name.split('').map((text, i) => {
            if(i < 15){
                return text
            }
        }).join('') + '...'
        : element.task_name

        this.description = element.task_description.length > 30
        ? element.task_description.split('').map((text, i) => {
            if(i < 30){
                return text
            }
        }).join('') + '...'
        : element.task_description
        
        this.description_open = element.task_description
        this.name_open = element.task_name
        return `
        <article class="card task-card tc-${element._id}">
            <article class="card-body">
                <article class='col-12 content-card-title'>
                    <p class="card-title title-close">${this.name}</p>
                    <p class="card-title title-open">${this.name_open}</p>
                    <p><small class='bg-dark p-2'>publicado el <stronger class='ml-1 bg-primary p-1'>${element.task_since}</stronger></small></p>
                </article>
                <ul class='navbar-task-card d-inline'>
                    <li class='nav-item'>
                        <button type="button" onclick='handlerDeleteTask(this)' class='btn btn-danger text-danger' value='${element._id}'>
                            <svg width="1em" 
                                height="1em" 
                                viewBox="0 0 16 16" 
                                class="bi bi-trash" 
                                fill="currentColor" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" 
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button>
                    </li>
                    <li class='nav-item'>
                        <button type="button" onclick='handlerUpdateTask(this)' class='btn btn-dark text-light' value='${element._id}'>
                            <svg width="1em" 
                                height="1em" 
                                viewBox="0 0 16 16" 
                                class="bi bi-pencil" 
                                fill="currentColor" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" 
                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </button>
                    </li>
                    <li class='nav-item'>
                        <button type="button" onClick='handlerOpenTask(this)' value='${element._id}' class='btn btn-primary text-light'>
                            Ver más
                        </button>
                    </li>
                </ul><hr/>
                <p class="card-description description-close">${this.description}</p>
                <p class="card-description description-open">${this.description_open}</p>
            </article>
        </article>`
    }).join(' ')
    : `<article class='col-12 text-light not-task-pending'>
            <h1>
                No hay tareas pendientes
                <svg width="1em" 
                    height="1em" 
                    viewBox="0 0 16 16" 
                    class="bi bi-calendar-check" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" 
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                    <path fill-rule="evenodd" 
                    d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                </svg>
            </h1>
        </article>`

    // insert collection
    document.querySelector('.section-tasks') 
    ? document.querySelector('.section-tasks').innerHTML = ''
    : false
    document.querySelector('.section-tasks') 
    && document.querySelector('.section-tasks').insertAdjacentHTML('beforeend', CardTaskCollection)
}

// get data task
FetchDataTask()

const handlerOpenTask = e => {
    if(e.innerHTML === 'Cerrar'){
        e.innerHTML = ''
        e.innerHTML = 'Ver más'
        document.querySelector('.btn-add-task').classList.remove('d-none')
    }else{
        document.querySelector('.btn-add-task').classList.add('d-none')
        e.innerHTML = ''
        e.innerHTML = 'Cerrar'
    }
    this.cardTask = document.querySelector(`.tc-${e.value}`)
    this.cardTask.classList.toggle('task-card-open')
    this.cardTask.classList.toggle('col-12')
    e.classList.toggle('btn-danger')
    e.classList.toggle('btn-close-task')
}
document.querySelector('.btn-add-task') 
&& document.querySelector('.btn-add-task').addEventListener('click', () => {
    if(document.querySelector('.content-frm-add-task-close')){
        document.querySelector('.content-frm-add-task-close').classList.add('content-frm-add-task')
        document.querySelector('.content-frm-add-task').classList.remove('content-frm-add-task-close')
    }else{
        document.querySelector('.content-frm-add-task input[type="submit"]').classList.remove('btn-warning')
        document.querySelector('.content-frm-add-task input[type="submit"]').value = 'Agregar'
        document.querySelector('.content-frm-add-task input[type="text"]').value = ''
        document.querySelector('.content-frm-add-task textarea').value = ''
        document.querySelector('.content-frm-add-task').classList.add('content-frm-add-task-close')
        document.querySelector('.content-frm-add-task-close').classList.remove('content-frm-add-task')
    }
    document.querySelector('.btn-add-task').classList.toggle('btn-add-task-close')
})

// send data task to server
document.querySelector('.frm-task-add') 
&& document.querySelector('.frm-task-add').addEventListener('submit', async e => {
    e.preventDefault()

    // send data
    const data = document.querySelector('.frm-task-add'),
    formData = new FormData(data),
    sendData = await fetch('controller/task/add.controller.php', {
        method: 'post',
        body: formData
    })

    // result
    resData = await sendData.json()
    
    const responseClient = {
        '401': () => {
            document.querySelector('.error-send-task').classList.toggle('d-block')
            setTimeout(() => document.querySelector('.error-send-task').classList.toggle('d-block'), 1500)
        },
        '200': () => {
            document.querySelector('.success-send-task').classList.toggle('d-block')
            setTimeout(() => {
                if(document.querySelector('.btn-add-task-close')){
                    document.querySelector('.success-send-task').classList.toggle('d-block')
                    document.querySelector('.content-frm-add-task').classList.add('content-frm-add-task-close')
                    document.querySelector('.content-frm-add-task-close').classList.remove('content-frm-add-task')
                    document.querySelector('.btn-add-task').classList.toggle('btn-add-task-close')
                    
                    // refresh collection task
                    FetchDataTask()
                }
            }, 2000)
        }
    }
    responseClient[`${resData.status}`]()
})

// handler function delete task
const handlerDeleteTask = async e => {
    this.id = e.value

    // send data
    const formData = new FormData()
    formData.append('id', this.id)
    sendData = await fetch('controller/task/remove.controller.php', {
        method: 'post',
        body: formData
    })

    // result
    resData = await sendData.json()
    FetchDataTask()
}

// handler function update task
const handlerUpdateTask = async e => {
    if(document.querySelector('.content-frm-update-task-close')){
        document.querySelector('.content-frm-update-task-close').classList.add('content-frm-update-task')
        document.querySelector('.content-frm-update-task').classList.remove('content-frm-update-task-close')
        this.id = e.value
        this.title = document.querySelector(`.tc-${this.id} .title-open`).innerHTML
        this.description = document.querySelector(`.tc-${this.id} .description-open`).innerHTML
            
        document.querySelector('.content-frm-update-task input[type="text"]').value = ''
        document.querySelector('.content-frm-update-task textarea').value = ''
        document.querySelector('.content-frm-update-task input[type="text"]').value = this.title
        document.querySelector('.content-frm-update-task textarea').value = this.description
        
        document.querySelector('.frm-task-update').addEventListener('submit', async e => {
            e.preventDefault()
            // send data
            const data = document.querySelector('.frm-task-update'),
            formData = new FormData(data)
            formData.append('id', this.id)
            const sendData = await fetch('controller/task/update.controller.php', {
                method: 'post',
                body: formData
            })
    
            // result
            resData = await sendData.json()
            const responseClient = {
                '401': () => {
                    document.querySelector('.error-send-task').classList.toggle('d-block')
                    setTimeout(() => document.querySelector('.error-send-task').classList.toggle('d-block'), 1500)
                },
                '200': () => {
                    document.querySelector('.content-frm-update-task .success-send-task').classList.toggle('d-block')
                    setTimeout(() => {
                        if(document.querySelector('.btn-update-task-close')){
                            document.querySelector('.content-frm-update-task .success-send-task').classList.toggle('d-block')
                            document.querySelector('.content-frm-update-task').classList.add('content-frm-update-task-close')
                            document.querySelector('.content-frm-update-task-close').classList.remove('content-frm-update-task')
                            document.querySelector('.btn-add-task').classList.remove('d-none')

                            // refresh collection task
                            FetchDataTask()
                        }
                    }, 2000)
                }
            }
            responseClient[`${resData.status}`]()
        })
    }else{
        document.querySelector('.content-frm-update-task').classList.add('content-frm-update-task-close')
        document.querySelector('.content-frm-update-task-close').classList.remove('content-frm-update-task')
    }
} 
document.querySelector('.btn-update-task-close') 
&& document.querySelector('.btn-update-task-close').addEventListener('click', () => {
    document.querySelector('.content-frm-update-task').classList.add('content-frm-update-task-close')
    document.querySelector('.content-frm-update-task-close').classList.remove('content-frm-update-task')
})
