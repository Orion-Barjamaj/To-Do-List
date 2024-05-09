import RenderPage from './renderProjectPage.js';

let savedArray = JSON.parse(localStorage.getItem("projectList"));
const grid = document.querySelector('.projectGrid');

function Project(name, id){
    this.name = name;
    this.id = id;
}

savedArray.forEach(element => {
    makeProject(element.name, element.id);
});

function makeProject(projectName, id){
    savedArray = JSON.parse(localStorage.getItem("projectList"));

    const newProjectObj = new Project(projectName, id);

    const newProject = document.createElement('div');
    newProject.classList.add('projectObj');
    grid.insertBefore(newProject, grid.firstChild);

    newProject.setAttribute('id', id);
   
    const title = document.createElement('div');
    title.classList.add('projectTitle');
    title.textContent = newProjectObj.name;
    title.addEventListener('click', (e) => {
        RenderPage(newProjectObj.name, newProjectObj.id);
    });
    newProject.appendChild(title);

    const editField = document.createElement('input');
    editField.classList.add('editTitleInput');
    newProject.appendChild(editField);
    editField.style.display = 'none';

    const editBtn = document.createElement('div');
    editBtn.classList.add('editBtn');
    newProject.appendChild(editBtn);

    const removeBtn = document.createElement('div');
    removeBtn.classList.add('removeBtn');
    newProject.appendChild(removeBtn);

    removeBtn.addEventListener('click', (e) => {
        let taskArray = JSON.parse(localStorage.getItem("taskList"));
        newProject.remove();
        for(let i = 0; i < savedArray.length; i++){
            if(savedArray[i].id === id){
                savedArray.splice(i, 1);
                localStorage.setItem('projectList', JSON.stringify(savedArray));
                break;
            }
        }
        for(let i = taskArray.length - 1; i >= 0; i--){
            if(taskArray[i].parent === String(newProjectObj.id)){
                taskArray.splice(i, 1);
                localStorage.setItem('taskList', JSON.stringify(taskArray));
            }
        }  
        savedArray = JSON.parse(localStorage.getItem("projectList"));
    });

    editBtn.addEventListener('click', (event) => {
        editField.style.display = 'flex';
        title.style.display = 'none';
        editField.focus();
    });

    editField.addEventListener('keyup', (event) => {
        if(event.key === 'Enter'){
            if(editField.value.length > 10){
                alert('Your project name is bigger than 10 characters, please try again!');
            }else {
                newProjectObj.name = editField.value;
                title.textContent = newProjectObj.name;
                title.style.display = 'flex';
                editField.value = '';
                editField.style.display = 'none';
                savedArray.forEach(element => {
                    if(element.id === newProjectObj.id){
                        element.name = newProjectObj.name;
                        RenderPage(newProjectObj.name, newProjectObj.id);
                    }
                });
                localStorage.setItem('projectList', JSON.stringify(savedArray));
            }
        }
    });
}