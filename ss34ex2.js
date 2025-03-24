let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    const taskTableBody = document.getElementById("taskTableBody");
    taskTableBody.innerHTML = "";
    tasks.forEach((task, index) => {
        taskTableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${task.content}</td>
                <td>${task.dueDate}</td>
                <td>${task.status}</td>
                <td>${task.assignedTo}</td>
                <td>
                    <button onclick="editTask(${task.id})">Sửa</button>
                    <button onclick="deleteTask(${task.id})">Xóa</button>
                </td>
            </tr>
        `;
    });
}
function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveToLocalStorage();
    renderTasks();
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        document.getElementById("content").value = task.content;
        document.getElementById("dueDate").value = task.dueDate;
        document.getElementById("status").value = task.status;
        document.getElementById("assignedTo").value = task.assignedTo;
        
        // Lưu ID để cập nhật
        document.getElementById("taskId").value = id;
    }
}

function submitTask() {
    const id = Number(document.getElementById("taskId").value);
    const content = document.getElementById("content").value;
    const dueDate = document.getElementById("dueDate").value;
    const status = document.getElementById("status").value;
    const assignedTo = document.getElementById("assignedTo").value;

    if (!content || !dueDate || !assignedTo) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (id) {
        
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            tasks[taskIndex] = { id, content, dueDate, status, assignedTo };
        }
    } else {
        
        const newTask = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1, 
            content,
            dueDate,
            status,
            assignedTo
        };
        tasks.push(newTask);
    }

    saveToLocalStorage();
    renderTasks();
    resetForm();
}
 
function resetForm() {
    document.getElementById("content").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("status").value = "";
    document.getElementById("assignedTo").value = "";
    document.getElementById("taskId").value = "";
    document.getElementById("taskId").value = ""; 
}
renderTasks();