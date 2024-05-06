let todoList = document.querySelector('.todo-list');
let completedList = document.querySelector('.completed-list');
let newItemForm = document.querySelector('.add-form');
let newItemTitle = newItemForm.querySelector('.add-form-input');
let taskTemplate = document.querySelector('#task-template').content;
let newItemTemplate = taskTemplate.querySelector('.todo-list-item');

let completedDelBtn = document.querySelector('.delete-completed-button');
completedDelBtn.addEventListener('click', function(){
    let completedListItems = completedList.children; 
    for (let i = 0; i = completedListItems.length;) {
        completedListItems[0].remove(); 
    }
});

let addTaskHandler = function(item) {
    let checkbox = item.querySelector('.complete-item');
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            let temp = item.cloneNode(true);
            addTaskHandler(temp);
            item.remove();
            completedList.appendChild(temp);
          } else {
            let temp = item.cloneNode(true);
            addTaskHandler(temp);
            item.remove();
            todoList.appendChild(temp);
          }
    });

    let delBtn = item.querySelector('.delete-item');
    delBtn.addEventListener('click', function() {
        item.remove();
    });

    let newListBtn = document.querySelector('.new-list-button');
    newListBtn.addEventListener('click', function() {
        item.remove();
    });
};

newItemForm.addEventListener('submit', function() {
    let taskText = newItemTitle.value;
    let task = newItemTemplate.cloneNode(true);
    var taskDescription = task.querySelector('span');
    taskDescription.textContent = taskText;
    addTaskHandler(task);
    todoList.appendChild(task);
    newItemTitle.value = '';
});