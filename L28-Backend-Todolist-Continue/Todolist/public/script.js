let form = document.querySelector('form');
let input = document.querySelector('input');
let taskList = document.querySelector('.taskList');

async function loadInitialTasks(){
    let {data} = await axios.get('/todos');
    addToList(data);
}

loadInitialTasks();

function addToList(tasks) {
    taskList.innerText = "";
    tasks.forEach(t => {
        let li = document.createElement("li");
        li.classList.add('taskItem');
        li.innerHTML = `
        <div class="taskContent">${t}</div>
        <div class="btnGroups">
            <button class="upBtn">↑</button>
            <button class="downBtn">↓</button>
            <button class="deleteBtn">❌</button>
        </div>
        `;
        taskList.appendChild(li);
    })
    input.value = "";
}

taskList.addEventListener('click', async (ev) => {
    let item = ev.target;
    try {
        if (item.classList.contains('upBtn')) {
            let taskName = item.parentElement.previousElementSibling.innerText;
            let {data} = await axios.get(`/increase?name=${taskName}`);
            addToList(data);
        }
        else if (item.classList.contains('downBtn')) {
            let taskName = item.parentElement.previousElementSibling.innerText;
            let {data} = await axios.get(`/decrease?name=${taskName}`);
            addToList(data);
         }
        else if (item.classList.contains('deleteBtn')) {
            let taskName = item.parentElement.previousElementSibling.innerText;
            let {data} = await axios.get(`/deletetask?name=${taskName}`);
            addToList(data);
        }
    } catch (err) { console.log(err) }
})

form.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    let newTask = input.value;
    try {
        let { data } = await axios.post('/todos', { newTask });
        // console.log(data);
        addToList(data);
    }
    catch (err) {
        console.log(err);
    }
})