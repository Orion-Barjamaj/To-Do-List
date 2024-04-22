import _ from 'lodash';
import './style.css';
import { electron } from 'webpack';

const addProject = document.querySelector('.addProject');
const projectName = document.querySelector('#projectName');
const projectGrid = document.querySelector('.projectGrid');
const tasks = document.querySelector('.tasks');
const taskWindow = document.querySelector('.taskWindow');
const allTasks = document.querySelector('.allTask');
const importantTasks = document.querySelector('.important');
let projectsArray = [];
let tasksArray = [];

/*
if(!localStorage.getItem('ProjectsArray')) {
    populateStorage();
} else {
    setArray();
}

function populateStorage(){
    localStorage.setItem('ProjectsArray', JSON.stringify(projectArr));
    setArray();
}

function setArray(){
    const currentArray = JSON.parse(localStorage.getItem("ProjectsArray"));
}
*/

const getProjectsArray = JSON.parse(localStorage.getItem("projectList"));
projectsArray = getProjectsArray;

projectsArray.forEach(element => {
    renderProjects(element.title);
});

addProject.addEventListener("click", (event) =>{
    addProject.style.display = 'none';
    projectName.style.display = 'flex';
    projectName.focus();
});

projectName.addEventListener("keyup", function(event) {
    let canUseName = true;
    projectsArray.forEach(element => {
        if(element.title == projectName.value){
            canUseName = false;
        }
    });
    if (event.key === "Enter") {
        if(projectName.value.length > 14){
            alert('Your project name has more than 14 characters, try making one with less than 14!');
        }
        else if(!canUseName){
            alert('You already have a project with this name, try something different!');
        }
        else if(projectName.value.length <= 0){
            alert('Your project name needs to be with at least 1 character, please try again');
        }else {
            addProject.style.display = 'flex';
            projectName.style.display = 'none';
            makeProject(projectName.value);
            projectName.value = '';
        }
    }
});

function makeProject(inputValue){
    const projectObj = document.createElement('div');
    projectObj.classList.add('projectObj');
    projectObj.textContent = inputValue;
    projectGrid.insertBefore(projectObj, projectGrid.firstChild);
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    projectObj.appendChild(removeBtn);
    const projects = Object.create(projectsArray);
    projects.title = inputValue; 
    projects.toDo = [];
    projectsArray.push(projects);
    localStorage.setItem('projectList', JSON.stringify(projectsArray));
    projectObj.addEventListener("click", (e) => {
        RenderPage(projectObj.textContent);
    });
    removeBtn.addEventListener('click', (e) =>{
        RenderAllTasks('All Tasks');
        projectObj.remove();
        tasksArray.forEach(element => {
            if(element.parentProject == projectObj.textContent){
                tasksArray.splice(element, 1);
            }
        });
        for(let i = 0; i < projectsArray.length; i++){
            if(projectsArray[i].title == inputValue){
                projectsArray.splice(i, 1);
                localStorage.setItem('projectList', JSON.stringify(projectsArray));
                break;
            }
        }
    });
}

function RenderPage(pageName){
    while(tasks.firstChild){
        tasks.removeChild(tasks.firstChild);
    }
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    tasks.appendChild(titleContainer);
    const title = document.createElement('h1');
    title.classList.add('tasksTitle');
    title.textContent = pageName;
    titleContainer.appendChild(title);
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('taskGrid');
    tasks.appendChild(gridContainer);
    const addBtn = document.createElement('button');
    addBtn.classList.add('addTask');
    addBtn.textContent = "+";
    tasks.appendChild(addBtn);
    addBtn.addEventListener('click', (e) => {
        taskWindow.style.display = 'flex';
    });
    tasksArray.forEach(element => {
        if(element.parentProject == pageName){
            RenderTasks(element.title, element.description, element.date, element.priority);
        }
    });
}

document.querySelector("#nevermind").addEventListener('click', (e) =>{
    e.preventDefault();
    taskWindow.style.display = 'none';
});

document.querySelector('#add').addEventListener('click', (e) =>{
    taskWindow.style.display = 'none';
    e.preventDefault();
});

const getTaskArray = JSON.parse(localStorage.getItem("taskList"));
tasksArray = getTaskArray;

allTasks.addEventListener('click', (e) =>{
    RenderAllTasks('All Tasks'); 
    console.log(tasksArray);
});

RenderAllTasks('All Tasks'); 

function RenderAllTasks(pageName){
    while(tasks.firstChild){
        tasks.removeChild(tasks.firstChild);
    }
    const title = document.createElement('h1');
    title.classList.add('tasksTitle');
    title.textContent = pageName;
    tasks.appendChild(title);
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('taskGrid');
    tasks.appendChild(gridContainer);
    tasksArray.forEach(element =>{
        RenderTasks(element.title, element.description, element.date, element.priority);
    });   
}

importantTasks.addEventListener('click', (e) => {
    RenderImportant('Important');
});

function RenderImportant(pageName){
    while(tasks.firstChild){
        tasks.removeChild(tasks.firstChild);
    }
    const title = document.createElement('h1');
    title.classList.add('tasksTitle');
    title.textContent = pageName;
    tasks.appendChild(title);
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('taskGrid');
    tasks.appendChild(gridContainer);
    tasksArray.forEach(element =>{
        if(element.priority == 'high'){
            RenderTasks(element.title, element.description, element.date, element.priority);
        }
    });  
}

function renderProjects(name){
    const projectObj = document.createElement('div');
    projectObj.classList.add('projectObj');
    projectObj.textContent = name;
    projectGrid.insertBefore(projectObj, projectGrid.firstChild);
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    projectObj.appendChild(removeBtn);
    removeBtn.addEventListener('click', (e) =>{
        projectObj.remove();
        for(let i = 0; i < projectsArray.length; i++){
            if(projectsArray[i].title == name){
                projectsArray.splice(i, 1);
                localStorage.setItem('projectList', JSON.stringify(projectsArray));
                break;
            }
        }
    });
    projectObj.addEventListener("click", (e) => {
        RenderPage(projectObj.textContent);
    });
}

document.getElementById("add").addEventListener("click", (e) =>{
    makeTask();
});

function makeTask(){
    const taskName = document.getElementById("taskName");
    const taskDesc = document.getElementById("taskDescription");
    const taskPriority = document.getElementsByName('priority');
    const taskDate = document.getElementById("dueDate");

    const taskElement = document.createElement('div');
    taskElement.classList.add('taskObj');
    const taskGrid = document.querySelector(".taskGrid");
    taskGrid.insertBefore(taskElement, taskGrid.firstChild);

    const title = document.createElement('div');
    title.classList.add('taskTitle');
    title.textContent = taskName.value;
    taskElement.appendChild(title);

    const desc = document.createElement('p');
    desc.classList.add('taskDesc');
    desc.textContent = taskDesc.value;
    taskElement.appendChild(desc);
    
    const taskDueDate = document.createElement('div');
    taskDueDate.classList.add('taskDate');
    taskDueDate.textContent = taskDate.value;
    taskElement.appendChild(taskDueDate);

    const taskStorage = Object.create(tasksArray);

    for(let i = 0, length = taskPriority.length; i < length; i++){
        if (taskPriority[i].checked) {
            taskStorage.priority = taskPriority[i].value;
            if(taskPriority[i].value == 'low'){
                taskElement.style.borderTop = '90px solid #ced0ce';
            } else if(taskPriority[i].value == 'medium'){
                taskElement.style.borderTop = '90px solid #191919';
            } else if(taskPriority[i].value == 'high'){
                taskElement.style.borderTop = '90px solid #f15025';
            }
            break;
        }
    }

    const removeButton = document.createElement('button');
    removeButton.classList.add('taskRemove');
    removeButton.textContent = 'Remove Task';
    taskElement.appendChild(removeButton);

    removeButton.addEventListener('click', (e) => {
        taskElement.remove();
        for(let i = 0; i < tasksArray.length; i++){
            if(tasksArray[i].title == title.textContent){
                tasksArray.splice(i, 1);
                localStorage.setItem('taskList', JSON.stringify(tasksArray));
                break;
            }
        }
    });

    taskStorage.title = taskName.value;
    taskStorage.description = taskDesc.value;
    taskStorage.date = taskDate.value;
    taskStorage.parentProject = document.querySelector('.tasksTitle').textContent;
    projectsArray.forEach(element => {
        if(element.title == taskStorage.parentProject){
            element.toDo.push(taskElement);
        }
    });
    tasksArray.push(taskStorage);

    taskName.value = '';
    taskDesc.value = '';
    localStorage.setItem('taskList', JSON.stringify(tasksArray));
}

function RenderTasks(titleTask, descTask, dueDate, priority, parentPrj){
    const taskElement = document.createElement('div');
    taskElement.classList.add('taskObj');
    const taskGrid = document.querySelector(".taskGrid");
    taskGrid.insertBefore(taskElement, taskGrid.firstChild);

    const title = document.createElement('div');
    title.classList.add('taskTitle');
    title.textContent = titleTask;
    taskElement.appendChild(title);

    const desc = document.createElement('p');
    desc.classList.add('taskDesc');
    desc.textContent = descTask;
    taskElement.appendChild(desc);

    const taskDueDate = document.createElement('div');
    taskDueDate.classList.add('taskDate');
    taskDueDate.textContent = dueDate;
    taskElement.appendChild(taskDueDate);

    if(priority == 'low'){
        taskElement.style.borderTop = '90px solid #ced0ce';
    } else if(priority == 'medium'){
        taskElement.style.borderTop = '90px solid #191919';
    } else if(priority == 'high'){
        taskElement.style.borderTop = '90px solid #f15025';
    }

    const removeButton = document.createElement('button');
    removeButton.classList.add('taskRemove');
    removeButton.textContent = 'Remove Task';
    taskElement.appendChild(removeButton);
    removeButton.addEventListener('click', (e) => {
        taskElement.remove();
        for(let i = 0; i < tasksArray.length; i++){
            if(tasksArray[i].title == title.textContent){
                tasksArray.splice(i, 1);
                localStorage.setItem('taskList', JSON.stringify(tasksArray));
                break;
            }
        }
    });
}