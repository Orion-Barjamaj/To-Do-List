import _ from 'lodash';
import './style.css';
import Projects from './create/project.js';
import RenderProjects from './render/renderProject.js';
import RenderProjectsPage from './render/renderProjectPage.js';
import MakeTask from './create/task.js';
import RenderPages from './render/homeRender.js';

const addButton = document.querySelector('.addProject');
const inputField = document.getElementById('projectName');

addButton.addEventListener('click', (event) =>{
    inputField.style.display = 'flex';
    addButton.style.display = 'none';
    inputField.focus();
});

RenderPages();

inputField.addEventListener('keyup', (event) => {
    if(event.key === 'Enter'){
        if(inputField.value.length > 10){
            alert('Your project name is bigger than 10 characters, please try again!');
        }else {
            Projects(inputField.value);
            inputField.style.display = 'none';
            addButton.style.display = 'flex';
            inputField.value = '';
        }
    }
});