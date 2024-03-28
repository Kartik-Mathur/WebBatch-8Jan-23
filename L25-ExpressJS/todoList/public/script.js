const btn = document.querySelector('.btn');
const inp = document.querySelector('.inp');
const taskList = document.querySelector('.taskList');

function updateTaskList(todos){
    // taskList ko khaali karo before adding todos
    taskList.innerText = ""
    todos.forEach(e=>{
        let li = document.createElement('li');
        li.classList.add('item');
        li.innerHTML = `<div class="content">${e}</div>
        <div class="btnGroup">
            <button class="btn-1 upBtn">↑</button>
            <button class="btn-1 downBtn">↓</button>
            <button class="btn-1 deleteBtn">❌</button>
        </div>`;
        taskList.appendChild(li);
    })
}

btn.addEventListener('click', async (ev) => {
    ev.preventDefault();
    try {
        let { data } = await axios.get(`/addtask?task=${inp.value}`);
        updateTaskList(data);
    } catch (err) {
        alert(error.message);
    }
})

async function initialTodosLoad(){
    try {
        let {data} = await axios.get('/todos');
        updateTaskList(data);
    } catch ({response}) {
        const {data} = response;
        console.log(data);
        alert(data.decentMsg);
    }
}
initialTodosLoad()



// Implementation of Increase, Decrease and Delete Functionality
taskList.addEventListener('click',async (ev)=>{
    let item = ev.target;
    if(item.classList.contains('upBtn')){
        let {data} = await axios.get(`/increase?task=${item.parentElement.previousElementSibling.innerText}`)
        updateTaskList(data);
    }
    else if(item.classList.contains('downBtn')){
        let {data} = await axios.get(`/decrease?task=${item.parentElement.previousElementSibling.innerText}`)
        updateTaskList(data);
    }
    else if(item.classList.contains('deleteBtn')){
        let {data} = await axios.get(`/delete?task=${item.parentElement.previousElementSibling.innerText}`)
        updateTaskList(data);
    }
})