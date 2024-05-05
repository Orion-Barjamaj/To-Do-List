/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/create/project.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeProject)
/* harmony export */ });
const grid = document.querySelector('.projectGrid');
let getId = 0;
let projectArray = [];
const allTask = document.querySelector('.allTask');

allTask.addEventListener('click', (e) => {
    console.log(projectArray);
});

if(!localStorage.getItem('projectList')){
    localStorage.setItem('projectList', JSON.stringify(projectArray));
}

const saveProjectArray = JSON.parse(localStorage.getItem("projectList"));
projectArray = saveProjectArray;

function Project(name, id){
    this.name = name;
    this.id = id;
}

function makeProject(projectName){
    getId++;

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
            if(projectArray[i].id == newProjectObj.id){
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

projectArray.forEach(project => {
    const newProject = document.createElement('div');
    newProject.classList.add('projectObj');
    grid.insertBefore(newProject, grid.firstChild);
   
    const title = document.createElement('div');
    title.classList.add('projectTitle');
    title.textContent = project.name;
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
        for(let i = 0; i < project.length; i++){
            if(project[i].id == newProjectObj.id){
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

    localStorage.setItem('projectList', JSON.stringify(projectArray));
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUvcHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEdyaWQnKTtcclxubGV0IGdldElkID0gMDtcclxubGV0IHByb2plY3RBcnJheSA9IFtdO1xyXG5jb25zdCBhbGxUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFRhc2snKTtcclxuXHJcbmFsbFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcclxufSk7XHJcblxyXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0Jykpe1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSk7XHJcbn1cclxuXHJcbmNvbnN0IHNhdmVQcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIikpO1xyXG5wcm9qZWN0QXJyYXkgPSBzYXZlUHJvamVjdEFycmF5O1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdChuYW1lLCBpZCl7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlUHJvamVjdChwcm9qZWN0TmFtZSl7XHJcbiAgICBnZXRJZCsrO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3RPYmogPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSwgZ2V0SWQpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdE9iaicpO1xyXG4gICAgZ3JpZC5pbnNlcnRCZWZvcmUobmV3UHJvamVjdCwgZ3JpZC5maXJzdENoaWxkKTtcclxuXHJcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBnZXRJZCk7XHJcbiAgIFxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0T2JqLm5hbWU7XHJcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBlZGl0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZWRpdEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2VkaXRUaXRsZUlucHV0Jyk7XHJcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGVkaXRGaWVsZCk7XHJcbiAgICBlZGl0RmllbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXRCdG4nKTtcclxuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlQnRuJyk7XHJcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XHJcblxyXG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBuZXdQcm9qZWN0LnJlbW92ZSgpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0QXJyYXlbaV0uaWQgPT0gbmV3UHJvamVjdE9iai5pZCl7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBlZGl0RmllbGQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGVkaXRGaWVsZC5mb2N1cygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWRpdEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYoZXZlbnQua2V5ID09PSAnRW50ZXInKXtcclxuICAgICAgICAgICAgaWYoZWRpdEZpZWxkLnZhbHVlLmxlbmd0aCA+IDEwKXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3VyIHByb2plY3QgbmFtZSBpcyBiaWdnZXIgdGhhbiAxMCBjaGFyYWN0ZXJzLCBwbGVhc2UgdHJ5IGFnYWluIScpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0T2JqLm5hbWUgPSBlZGl0RmllbGQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3RPYmoubmFtZTtcclxuICAgICAgICAgICAgICAgIHRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgICAgICBlZGl0RmllbGQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIGVkaXRGaWVsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdE9iaik7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSk7XHJcbn1cclxuXHJcbnByb2plY3RBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0T2JqJyk7XHJcbiAgICBncmlkLmluc2VydEJlZm9yZShuZXdQcm9qZWN0LCBncmlkLmZpcnN0Q2hpbGQpO1xyXG4gICBcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGUnKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgY29uc3QgZWRpdEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGVkaXRGaWVsZC5jbGFzc0xpc3QuYWRkKCdlZGl0VGl0bGVJbnB1dCcpO1xyXG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChlZGl0RmllbGQpO1xyXG4gICAgZWRpdEZpZWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0QnRuJyk7XHJcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZUJ0bicpO1xyXG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xyXG5cclxuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgbmV3UHJvamVjdC5yZW1vdmUoKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHByb2plY3RbaV0uaWQgPT0gbmV3UHJvamVjdE9iai5pZCl7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBlZGl0RmllbGQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGVkaXRGaWVsZC5mb2N1cygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==