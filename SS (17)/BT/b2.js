const defaultTodos = [
{ task: "Mua bánh chưng", done: false },
{ task: "Dọn nhà đón Tết", done: false },
{ task: "Gói bánh chưng", done: false },
{ task: "Trang trí nhà cửa bằng hoa mai, hoa đào", done: false },
{ task: "Mua phong bao lì xì", done: false },
{ task: "Chuẩn bị mâm ngũ quả", done: false }
];

const todoList = document.getElementById("todoList");

// lấy dữ liệu từ localStorage
let todos = JSON.parse(localStorage.getItem("myTodos")) || defaultTodos;

function renderTodos() {

    todoList.innerHTML = "";

    todos.forEach((todo, index) => {

        const div = document.createElement("div");
        div.classList.add("task");

        if (todo.done) {
            div.classList.add("done");
        }

        div.innerHTML = `
            <span class="icon">${todo.done ? "✔️" : "⚪"}</span>
            <span class="text">${todo.task}</span>
        `;

        // click để hoàn thành
        div.onclick = function () {

            todos[index].done = !todos[index].done;

            // lưu lại localStorage
            localStorage.setItem("myTodos", JSON.stringify(todos));

            renderTodos();
        };

        todoList.appendChild(div);
    });
}

renderTodos();