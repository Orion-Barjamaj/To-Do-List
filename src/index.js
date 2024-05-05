import _ from 'lodash';
import './style.css';
import Projects from './create/project.js';

const addButton = document.querySelector('.addProject');
const inputField = document.getElementById('projectName');

addButton.addEventListener('click', (event) =>{
    inputField.style.display = 'flex';
    addButton.style.display = 'none';
    inputField.focus();
});

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