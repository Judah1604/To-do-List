let inputField = document.querySelector('#taskInput')
let addTask = document.querySelector('.addTaskBtn')
let tasks = document.querySelector('.tasks')

addTask.onclick = () => {
    let inputText = inputField.value
    if (inputText !== null) {
        let newTask = document.createElement('div')
        newTask.classList.add('task')

        let label = document.createElement('label')
        let defaultCheckbox = document.createElement('input')
        let newCheckbox = document.createElement('span')
        defaultCheckbox.setAttribute('type', 'checkbox')
        newCheckbox.setAttribute('class', 'checkbox')

        let taskName = document.createElement('span')
        taskName.classList.add('text')
        taskName.textContent = inputText

        let deleteBtn = document.createElement('ion-icon')
        deleteBtn.setAttribute('name', 'trash')
        deleteBtn.classList.add('deleteBtn')

        label.appendChild(defaultCheckbox)
        label.appendChild(newCheckbox)

        newTask.appendChild(label)
        newTask.appendChild(taskName)
        newTask.appendChild(deleteBtn)

        tasks.appendChild(newTask)
        inputField.value = ''
    }

    deleteTask()
    markTask()
}

deleteTask()
markTask()

function deleteTask() {
    let deleteBtns = document.getElementsByClassName('deleteBtn')

    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].onclick = () => {
            let task = deleteBtns[i].parentNode
            task.remove()
        }
    }
}

function markTask() {
    let checkboxes = document.getElementsByClassName('checkbox')

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].onclick = () => {
            let taskName = checkboxes[i].parentElement.parentElement.children[1]

            if (taskName.style.textDecoration === 'line-through') {
                taskName.style.textDecoration = 'none'
            } else {
                taskName.style.textDecoration = 'line-through'
            }
        }
    }
}