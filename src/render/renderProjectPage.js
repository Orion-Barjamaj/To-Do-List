import RenderTasks from './renderTasks';

const tasksWindow = document.querySelector('.tasks');
const taskForm = document.querySelector('.taskWindow');
let taskArray = [];

export default function renderPage(name, id){

    taskArray = JSON.parse(localStorage.getItem("taskList")).filter((task) => task.parent == id);

    while(tasksWindow.firstChild){
        tasksWindow.removeChild(tasksWindow.firstChild);
    }
    const title = document.createElement('h1');
    title.classList.add('tasksTitle');
    title.textContent = name;
    tasksWindow.appendChild(title);
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('taskGrid');
    tasksWindow.appendChild(gridContainer);
    const addTask = document.createElement('button');
    addTask.classList.add('addTask');
    addTask.textContent = '+';
    tasksWindow.appendChild(addTask);

    addTask.addEventListener('click', (e) => {
        taskForm.style.display = 'flex';
        add.style.display = 'flex';
        editAdd.style.display = 'none';
    });

    taskArray.forEach(element => {
        RenderTasks(element.title, element.description, element.priority, element.dueDate, element.checked);
    });
}