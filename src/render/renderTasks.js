function Task(title, description, priority, dueDate, checked){
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.checked = checked;
}

const taskWindow = document.querySelector('.taskWindow');
const add = document.querySelector('#add');
const editAdd = document.querySelector('#editAdd');
const taskName = document.getElementById("taskName");
const taskDesc = document.getElementById("taskDescription");
const taskPriority = document.getElementsByName('priority');
const taskDate = document.getElementById("dueDate");
let taskArray = [];

export default function renderTasks(name, desc, priority, date, id, checked){ 

    taskArray = JSON.parse(localStorage.getItem("taskList"));

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

    const taskStorage = new Task(name, desc, priority, dueDate, id);

    let checkboxBool = taskStorage.checked;

    if(checkboxBool == true){
        checkbox.checked = true;
    }

    checkbox.addEventListener('click', (event) => {
        checkboxBool = !checkboxBool;
        if(checkboxBool == true){
            title.innerHTML = `<s>${taskStorage.title}</s>`;
            title.style.color = 'grey';
        } else{
            title.innerHTML = `${taskStorage.title}`;
            title.style.color = '#191919';
        }
        taskArray.forEach(element => {
            if(element.title === taskStorage.title){
                element.checked = checkboxBool;
            }
        });
        localStorage.setItem('taskList', JSON.stringify(taskArray));
    });

    const title = document.createElement('div');
    title.classList.add('taskTitle');
    title.textContent = name;
    taskContainer.appendChild(title);

    if(taskStorage.checked == true){
        title.innerHTML = `<s>${name}</s>`;
        title.style.color = 'grey';
    } else{
        title.innerHTML = `${name}`;
        title.style.color = '#191919';
    }

    const description = document.createElement('p');
    description.classList.add('taskDesc');
    description.textContent = desc;
    taskElement.appendChild(description);

    let displayBool = true;

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

    if(priority === 'low'){
        taskElement.style.borderLeft = '45px solid #ced0ce';
    } else if(priority === 'medium'){
        taskElement.style.borderLeft = '45px solid #191919';
    } else if(priority === 'high'){
        taskElement.style.borderLeft = '45px solid #f15025';
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

            taskArray.forEach(element => {
                if(element.title === taskStorage.title && element.priority === taskStorage.priority){
                    element.title = taskName.value;
                    taskStorage.title = taskName.value;
                    title.textContent = taskName.value;
                    for(let i = 0, length = taskPriority.length; i < length; i++){
                        if (taskPriority[i].checked) {
                            element.priority = taskPriority[i].value;
                            taskStorage.priority = taskPriority[i].value;
                            if(taskPriority[i].value == 'low'){
                                taskElement.style.borderLeft = '45px solid #ced0ce';
                                console.log('low');
                            } else if(taskPriority[i].value == 'medium'){
                                taskElement.style.borderLeft = '45px solid #191919';
                            } else if(taskPriority[i].value == 'high'){
                                taskElement.style.borderLeft = '45px solid #f15025';
                            }
                            break;
                        }
                    }
                }
                if(element.description === taskStorage.description){
                    element.description = taskDesc.value;
                    taskStorage.description = taskDesc.value;
                    description.textContent = taskDesc.value;
                }
                element.dueDate = taskDate.value;
                taskStorage.dueDate = taskDate.value;
                taskDueDate.textContent = taskStorage.dueDate;
            });

            localStorage.setItem('taskList', JSON.stringify(taskArray));
            taskWindow.style.display = 'none';
            taskName.value = '';
            taskDesc.value = '';
            taskDate.value = '';
        });
    });

    const removeButton = document.createElement('button');
    removeButton.classList.add('taskRemove');
    taskContainer.appendChild(removeButton);

    removeButton.addEventListener('click', (e) => {
        taskElement.remove();
        for(let i = 0; i < taskArray.length; i++){
            if(taskArray[i].title === taskStorage.title){
                taskArray.splice(i, 1);
                localStorage.setItem('taskList', JSON.stringify(taskArray));
                break;
            }
        }
    });
}