const fs = require('fs/promises');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'todos.json');

class Tasks {
    static getTodos() {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await fs.readFile(filePath);
                resolve(JSON.parse(data));
            }
            catch (err) {
                resolve(err)
            }
        })
    }

    static addTask(task) {
        return new Promise(async (resolve, reject) => {
            try {
                // 1. Read the existing data : ["Cricket"]
                let data = await fs.readFile(filePath);
                let tasks = JSON.parse(data);
                // 2. add the task into the existing data: ["Cricket","Dance"]
                tasks.unshift(task);
                // 3. Update the todos.json
                await fs.writeFile(filePath, JSON.stringify(tasks));
                resolve("Success adding task");
            } catch (err) {
                reject(err);
            }
        })
    }


    static deleteTask(task) {
        return new Promise(async (resolve, reject) => {
            try {
                // 1. Read the existing data : ["Cricket"]
                let data = await fs.readFile(filePath);
                let tasks = JSON.parse(data);
                // 2. Delete the task from tasks array
                tasks = tasks.filter((t) => t !== task);
                // 3. Update the todos.json 
                await fs.writeFile(filePath, JSON.stringify(tasks));
                resolve("Success deleting task");
            } catch (err) {
                reject(err);
            }
        })
    }

    static increasePriority(task) {
        return new Promise(async (resolve, reject) => {
            try {
                // 1. Read the existing data : ["Cricket"]
                let data = await fs.readFile(filePath);
                let todos = JSON.parse(data);
                // 2. Update the tasks array
                let index = todos.indexOf(task)
                if (index != -1 && index > 0 && index < todos.length) {
                    [todos[index], todos[index - 1]] = [todos[index - 1], todos[index]];
                }
                // 3. Update the todos.json 
                await fs.writeFile(filePath, JSON.stringify(todos));
                resolve("Success increasing prioity task");
            } catch (err) {
                reject(err);
            }
        })
    }

    static decreasePriority(task) {
        return new Promise(async (resolve, reject) => {
            try {
                // 1. Read the existing data : ["Cricket"]
                let data = await fs.readFile(filePath);
                let todos = JSON.parse(data);
                // 2. Update the tasks array
                let index = todos.indexOf(task)
                if (index != -1 && index >= 0 && index < todos.length - 1) {
                    [todos[index], todos[index + 1]] = [todos[index + 1], todos[index]];
                }
                // 3. Update the todos.json 
                await fs.writeFile(filePath, JSON.stringify(todos));
                resolve("Success decreasing prioity task");
            } catch (err) {
                reject(err);
            }
        })
    }
}

module.exports = Tasks;