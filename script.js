const taskNameInput = document.getElementById("taskName");
const taskDetailInput = document.getElementById("taskDetail");
const taskList = document.getElementById("taskList");
let tasks = [];


function updateTasks() {
    taskList.innerHTML = ""; // Clear the current list

    // Loop through tasks and create list items
    tasks.forEach((task, index) => {
        console.log(task);
        const li = document.createElement('li');
        li.id = `task-${index}`;
        li.textContent = `${task.name} | ${task.detail}`;
        li.innerHTML += `&nbsp; <span onclick="removeTask(${index})">Remove</span>`;
        li.className = task.completed ? 'completed' : ''; // Add 'completed' class if task is completed
        li.style.overflow = "hidden";
        li.style.textOverflow = "ellipsis";
        li.style.display = "block";
        li.style.whiteSpace = "nowrap";
        li.style.width = "100%";

        li.onclick = () => toggleTask(index); // Set the click event to toggle the task

        li.onmouseenter = () => {
            li.style.textOverflow = "";
            li.style.overflow = "auto";
        }

        li.onmouseleave = () => {
            li.style.overflow = "hidden";
            li.style.textOverflow = "ellipsis";
            li.scrollLeft = 0;
        }


        taskList.appendChild(li); // Add the list item to the task list
    });
}

function removeTask(index) {
    tasks[index].removed = true;
    tasks.splice(index, 1);
    document.getElementById(`task-${index}`).remove();
    updateTasks();
}


function addTask() {

    const task = {
        "name": taskNameInput.value.trim(),
        "detail": taskDetailInput.value.trim(),
        "completed": false,
        "removed": false
    }

    if (task.name !== "") {
        tasks.push(task);
        taskNameInput.value = "";
        taskDetailInput.value = "";
        updateTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTasks();
}


/* 
// closures

const createCounter = () => {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
            return count;
        },
        decrement: function () {
            count--;
            console.log(count);
            return count;
        }
    }
}

const counter = createCounter();

counter.increment();
counter.increment();



// loops
// for of, only use on arrays
// for in, use on arrays or objects
const array = ["aa", "bb", "cc"];
const object = {
    "a": "a1",
    "b": "b1",
    "c": "c1",
    myFunction: function () {
        console.log("hello from object");
    }
};

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (let item of array) {
    console.log("array item: ", item);
    item = "aaa"; // does nothing, because reasons
}

for (const index in array) {
    console.log("array index: ", index);
}

for (const key in object) {
    console.log("object key: ", key);
}

// causes error
 for (const item of object) {
    console.log("object item: ", item);
} 

array.forEach((item, index) => {
    console.log("array (item, index) ", item, ", ", index);
})

let condition = true;
while (condition) {
    console.log("stuff");
    condition = Math.random() > 0.7 ? false : true
}

Object.keys(object).forEach((key, index) => {
    console.log(key, index);
})
Object.values(object).forEach((value, index) => {
    console.log(value, index);
})

 */