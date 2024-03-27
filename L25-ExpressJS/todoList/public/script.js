const btn = document.querySelector('.btn');
const inp = document.querySelector('.inp');
const taskList = document.querySelector('.taskList');

function updateTaskList(todos){
    // taskList ko khaali karo before adding todos
    taskList.innerText = ""
    todos.forEach(e=>{
        let li = document.createElement('li');
        li.innerText = e;
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