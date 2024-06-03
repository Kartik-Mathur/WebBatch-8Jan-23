let task = ['Cricket','Dance','Sing'];
let taskList = document.querySelector('.taskList');


task.forEach(t=>{
    let taskItem = document.createElement('li');
    taskItem.textContent = t;
    taskList.appendChild(taskItem);
})