import renderTasks from './renderTasks';
import RenderTasks from './renderTasks';

const tasksWindow = document.querySelector('.tasks');
let taskArray = JSON.parse(localStorage.getItem("taskList"));

const allTask = document.querySelector('.allTask');
allTask.addEventListener('click', (e) => {
    RenderAllTask();
});

export default function RenderAllTask(){
    taskArray = JSON.parse(localStorage.getItem("taskList"));
    while(tasksWindow.firstChild){
        tasksWindow.removeChild(tasksWindow.firstChild);
    }
    const title = document.createElement('h1');
    title.classList.add('tasksTitle');
    title.textContent = 'All Tasks';
    tasksWindow.appendChild(title);
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('taskGrid');
    tasksWindow.appendChild(gridContainer);
    taskArray.forEach(element => {
        RenderTasks(element.title, element.description, element.priority, element.dueDate, element.checked);
    });
}

const important = document.querySelector('.important');
important.addEventListener('click', (e) => {
    taskArray = JSON.parse(localStorage.getItem("taskList"));
    while(tasksWindow.firstChild){
        tasksWindow.removeChild(tasksWindow.firstChild);
    }
    const title = document.createElement('h1');
    title.classList.add('tasksTitle');
    title.textContent = 'Important';
    tasksWindow.appendChild(title);
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('taskGrid');
    tasksWindow.appendChild(gridContainer);
    taskArray.forEach(element => {
        if(element.priority === "high"){
            RenderTasks(element.title, element.description, element.priority, element.dueDate, element.checked);
        }
    });
});

const completed = document.querySelector('.completed');
completed.addEventListener('click', (e) => {
    taskArray = JSON.parse(localStorage.getItem("taskList"));
    while(tasksWindow.firstChild){
        tasksWindow.removeChild(tasksWindow.firstChild);
    }
    const title = document.createElement('h1');
    title.classList.add('tasksTitle');
    title.textContent = 'Completed';
    tasksWindow.appendChild(title);
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('taskGrid');
    tasksWindow.appendChild(gridContainer);
    taskArray.forEach(element => {
        if(element.checked){
            RenderTasks(element.title, element.description, element.priority, element.dueDate, element.checked);
        }
    });
});