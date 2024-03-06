let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let taskList = document.querySelector('.taskList');


btn.addEventListener('click', () => {
    let taskName = inp.value;
    let li = document.createElement('li');
    li.innerHTML = `
        <span class="taskText">${taskName}</span>
        <button class="upBtn">↑</button>
        <button class="downBtn">↓</button>
        <button class="deleteBtn">X</button>
    `;
    li.classList.add('taskItem');

    taskList.appendChild(li);

    inp.value = "";
})