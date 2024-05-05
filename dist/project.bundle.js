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

function makeProject(projectName){
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZS9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0R3JpZCcpO1xyXG5sZXQgZ2V0SWQgPSAwO1xyXG5jb25zdCBhbGxUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFRhc2snKTtcclxubGV0IHByb2plY3RBcnJheSA9IFtdO1xyXG5cclxuaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpKXtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xyXG59XHJcblxyXG5jb25zdCBzYXZlUHJvamVjdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpKTtcclxucHJvamVjdEFycmF5ID0gW3NhdmVQcm9qZWN0QXJyYXldO1xyXG5cclxuYWxsVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3QobmFtZSwgaWQpe1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZVByb2plY3QocHJvamVjdE5hbWUpe1xyXG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYoZWxlbWVudC5pZCA9PT0gZ2V0SWQpe1xyXG4gICAgICAgICAgICBnZXRJZCsrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3RPYmogPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSwgZ2V0SWQpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdE9iaicpO1xyXG4gICAgZ3JpZC5pbnNlcnRCZWZvcmUobmV3UHJvamVjdCwgZ3JpZC5maXJzdENoaWxkKTtcclxuXHJcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBnZXRJZCk7XHJcbiAgIFxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0T2JqLm5hbWU7XHJcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBlZGl0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZWRpdEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2VkaXRUaXRsZUlucHV0Jyk7XHJcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGVkaXRGaWVsZCk7XHJcbiAgICBlZGl0RmllbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXRCdG4nKTtcclxuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlQnRuJyk7XHJcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XHJcblxyXG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBuZXdQcm9qZWN0LnJlbW92ZSgpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0QXJyYXlbaV0uaWQgPT09IG5ld1Byb2plY3RPYmouaWQpe1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZWRpdEZpZWxkLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgdGl0bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBlZGl0RmllbGQuZm9jdXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGVkaXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmKGV2ZW50LmtleSA9PT0gJ0VudGVyJyl7XHJcbiAgICAgICAgICAgIGlmKGVkaXRGaWVsZC52YWx1ZS5sZW5ndGggPiAxMCl7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnWW91ciBwcm9qZWN0IG5hbWUgaXMgYmlnZ2VyIHRoYW4gMTAgY2hhcmFjdGVycywgcGxlYXNlIHRyeSBhZ2FpbiEnKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdE9iai5uYW1lID0gZWRpdEZpZWxkLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0T2JqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICAgICAgZWRpdEZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBlZGl0RmllbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3RPYmopO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9