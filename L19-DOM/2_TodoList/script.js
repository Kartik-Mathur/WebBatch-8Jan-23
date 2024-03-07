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


// Tasklist ka event
taskList.addEventListener('click', (ev) => {
    // console.log(ev.target);
    let item = ev.target;
    if (item.classList.contains('upBtn')) {
        console.log("Up Button Daba Diya");
        let parentElement = item.parentElement;
        let previousElement = parentElement.previousElementSibling;
        taskList.insertBefore(parentElement, previousElement);
        console.log(parentElement)
        console.log(previousElement)
    }
    else if (item.classList.contains('downBtn')) {
        console.log("Down Button Daba Diya");
        let parentElement = item.parentElement;
        let nextElement = parentElement.nextElementSibling;
        taskList.insertBefore(nextElement, parentElement);
    }
    else if (item.classList.contains('deleteBtn')) {
        console.log("Delete Button Daba Diya");
        let parentElement = item.parentElement;
        parentElement.remove();
    }
})

