function addTask() {
    const newTask = document.createElement('li')
    const tasklist = document.getElementsById('taskList')
    tasklist.appendChild(newTask)
    newTask.textContent = document.getElementById('inputTask').value
}