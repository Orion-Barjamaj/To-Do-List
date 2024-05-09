let taskArray = [];
const taskWindow = document.querySelector('.taskWindow');
const add = document.querySelector('#add');
const editAdd = document.querySelector('#editAdd');
const taskName = document.getElementById("taskName");
const taskDesc = document.getElementById("taskDescription");
const taskPriority = document.getElementsByName('priority');
const taskDate = document.getElementById("dueDate");

add.addEventListener('click', (e) => {
    taskWindow.style.display = 'none';
    e.preventDefault();
    makeTask(taskName.value, taskDesc.value, taskPriority, taskDate.value);
    editAdd.style.display = 'none';
});

if(!localStorage.getItem('taskList')){
    localStorage.setItem('taskList', JSON.stringify(taskArray));
}

const saveTaskArray = JSON.parse(localStorage.getItem("taskList"));
taskArray = saveTaskArray;

function Task(title, description, priority, dueDate, parent, checked){
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.parent = parent;
    this.checked = checked;
}

function makeTask(name, desc, priority, date){
    let projectArray = JSON.parse(localStorage.getItem("projectList"));
    const projectTitle = document.querySelector('.projectTitle');

    const taskGrid = document.querySelector(".taskGrid");

    const taskElement = document.createElement('div');
    taskElement.classList.add('taskObj');
    taskGrid.insertBefore(taskElement, taskGrid.firstChild);
    
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('taskContainer');
    taskElement.appendChild(taskContainer);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    taskContainer.appendChild(checkbox);
    let checkboxBool = false;
    if(checkboxBool == true){
        checkbox.checked = true;
    }else {
        checkbox.checked = false;
    }

    const title = document.createElement('div');
    title.classList.add('taskTitle');
    title.textContent = name;
    taskContainer.appendChild(title);

    const description = document.createElement('p');
    description.classList.add('taskDesc');
    description.textContent = desc;
    taskElement.appendChild(description);

    let displayBool = false;

    taskElement.addEventListener('click', (e) =>{
        displayBool = !displayBool;
        if(displayBool == false){
            description.style.display = 'flex';
        } else {
            description.style.display = 'none';
        }
    });

    const taskDueDate = document.createElement('div');
    taskDueDate.classList.add('taskDate');
    taskDueDate.textContent = date;
    taskContainer.appendChild(taskDueDate);

    const taskStorage = new Task(name, desc, priority, taskDueDate.textContent, checkboxBool);

    projectArray.forEach(element => {
        if(element.name === projectTitle.textContent){
            taskStorage.parent = element.id;  
        }
    });

    checkbox.addEventListener('click', (event) => {
        checkboxBool = !checkboxBool;
        taskStorage.checked = checkboxBool;
        if(checkboxBool == true){
            title.innerHTML = `<s>${taskStorage.title}</s>`;
            title.style.color = 'grey';
        } else{
            title.innerHTML = `${taskStorage.title}`;
            title.style.color = '#191919';
        }
        localStorage.setItem('taskList', JSON.stringify(taskArray));
    });

    for(let i = 0, length = priority.length; i < length; i++){
        if (priority[i].checked) {
            taskStorage.priority = priority[i].value;
            if(priority[i].value == 'low'){
                taskElement.style.borderLeft = '45px solid #ced0ce';
            } else if(priority[i].value == 'medium'){
                taskElement.style.borderLeft = '45px solid #191919';
            } else if(priority[i].value == 'high'){
                taskElement.style.borderLeft = '45px solid #f15025';
            }
            break;
        }
    }

    const editButton = document.createElement('button');
    editButton.classList.add('editTaskButton');
    taskContainer.appendChild(editButton);

    editButton.addEventListener('click', (event) => {
        const editAdd = document.querySelector('#editAdd');

        taskWindow.style.display = 'flex';
        add.style.display = 'none';
        editAdd.style.display = 'flex';
        editAdd.addEventListener('click', (e) => {
            e.preventDefault();

            taskStorage.title = taskName.value;
            title.textContent = taskStorage.title;
            
            taskStorage.description = taskDesc.value;
            description.textContent = taskStorage.description;

            taskStorage.dueDate = taskDate.value;
            taskDueDate.textContent = taskStorage.dueDate;

            taskStorage.priority = taskPriority;
            for(let i = 0, length = priority.length; i < length; i++){
                if (priority[i].checked) {
                    taskStorage.priority = priority[i].value;
                    if(priority[i].value == 'low'){
                        taskElement.style.borderLeft = '45px solid #ced0ce';
                    } else if(priority[i].value == 'medium'){
                        taskElement.style.borderLeft = '45px solid #191919';
                    } else if(priority[i].value == 'high'){
                        taskElement.style.borderLeft = '45px solid #f15025';
                    }
                    break;
                }
            }

            localStorage.setItem('taskList', JSON.stringify(taskArray));
            taskWindow.style.display = 'none';
        });
    });

    const removeButton = document.createElement('button');
    removeButton.classList.add('taskRemove');
    taskContainer.appendChild(removeButton);

    removeButton.addEventListener('click', (e) => {
        taskElement.remove();
        for(let i = 0; i < taskArray.length; i++){
            if(taskArray[i].title === title.textContent){
                taskArray.splice(i, 1);
                localStorage.setItem('taskList', JSON.stringify(taskArray));
                break;
            }
        }
    });

    taskArray.push(taskStorage);
    localStorage.setItem('taskList', JSON.stringify(taskArray));
}