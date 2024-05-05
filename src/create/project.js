const grid = document.querySelector('.projectGrid');
let getId = 0;
const allTask = document.querySelector('.allTask');
let projectArray = [];

if(!localStorage.getItem('projectList')){
    localStorage.setItem('projectList', JSON.stringify(projectArray));
}

const saveProjectArray = JSON.parse(localStorage.getItem("projectList"));
projectArray = [saveProjectArray];

allTask.addEventListener('click', (e) => {
    console.log(projectArray);
});

function Project(name, id){
    this.name = name;
    this.id = id;
}

export default function makeProject(projectName){
    projectArray.forEach(element => {
        if(element.id === getId){
            getId++;
        }
    });

    const newProjectObj = new Project(projectName, getId);

    const newProject = document.createElement('div');
    newProject.classList.add('projectObj');
    grid.insertBefore(newProject, grid.firstChild);

    newProject.setAttribute('id', getId);
   
    const title = document.createElement('div');
    title.classList.add('projectTitle');
    title.textContent = newProjectObj.name;
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
        newProject.remove();
        for(let i = 0; i < projectArray.length; i++){
            if(projectArray[i].id === newProjectObj.id){
                projectArray.splice(i, 1);
                localStorage.setItem('projectList', JSON.stringify(projectArray));
                break;
            }
        }
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
                localStorage.setItem('projectList', JSON.stringify(projectArray));
            }
        }
    });
    
    projectArray.push(newProjectObj);

    localStorage.setItem('projectList', JSON.stringify(projectArray));
}