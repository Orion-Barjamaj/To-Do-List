import _ from 'lodash';
import './style.css';

const addProject = document.querySelector('.addProject');
const projectName = document.querySelector('#projectName');
const projectGrid = document.querySelector('.projectGrid');
const tasks = document.querySelector('.tasks');
const taskWindow = document.querySelector('.taskWindow');
const allTasks = document.querySelector('.allTask');
let projectArr = [];

if(!localStorage.getItem('prjArr')) {
    populateStorage();
} else {
    setArray();
}

function populateStorage(){
    localStorage.setItem('prjArr', JSON.stringify(projectArr));
    setArray();
}

function setArray(){
    const currentArray = JSON.parse(localStorage.getItem("prjArr"));
    projectArr = currentArray;
}

addProject.addEventListener("click", (event) =>{
    addProject.style.display = 'none';
    projectName.style.display = 'flex';
    projectName.focus();
});

projectName.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addProject.style.display = 'flex';
        projectName.style.display = 'none';
        if(projectName.value === ''){
            makeProject('Unnamed');
        }else {
            makeProject(projectName.value);
        }
        projectName.value = '';
    }
});

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

function makeProject(inputValue){
    const projectObj = document.createElement('div');
    projectObj.classList.add('projectObj');
    projectObj.textContent = inputValue;
    projectGrid.insertBefore(projectObj, projectGrid.firstChild);
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    projectObj.appendChild(removeBtn);
    projectArr.push(projectObj.textContent);
    removeBtn.addEventListener('click', (e) =>{
        projectObj.remove();
        removeA(projectArr, projectObj.textContent);
    });
    projectObj.addEventListener("click", (e) => {
        RenderPage(projectObj.textContent);
    });
}

function RenderPage(pageName){
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
    const addBtn = document.createElement('button');
    addBtn.classList.add('addTask');
    addBtn.textContent = "+";
    tasks.appendChild(addBtn);
    addBtn.addEventListener('click', (e) => {
        taskWindow.style.display = 'flex';
    });
}

document.querySelector("#nevermind").addEventListener('click', (e) =>{
    e.preventDefault();
    taskWindow.style.display = 'none';
});

document.querySelector('#add').addEventListener('click', (e) =>{
    makeTasks();
    taskWindow.style.display = 'none';
    e.preventDefault();
});

allTasks.addEventListener('click', (e) =>{
    console.log(projectArr);
    for(let i = 0; i < projectArr.length; i++){
        makeProject(projectArr[i]);
    }
});

function RenderHome(pageName){
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
}