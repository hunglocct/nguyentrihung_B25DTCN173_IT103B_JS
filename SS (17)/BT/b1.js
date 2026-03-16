const todos = [
    { task: "Mua bánh chưng" },
    { task: "Dọn nhà đón Tết" },
    { task: "Gói bánh chưng" },
    { task: "Trang trí nhà cửa" }
];

const todoList = document.getElementById("todoList");
const status = document.getElementById("status");

let storedTodos = JSON.parse(localStorage.getItem("myTodos"));

if (!storedTodos || storedTodos.length === 0) {

    localStorage.setItem("myTodos", JSON.stringify(todos));
    storedTodos = todos;

    status.innerText = "Đã truyền dữ liệu và lưu vào localStorage";

} else {

    status.innerText = "Dữ liệu đã tồn tại trong localStorage";
}

storedTodos.forEach(todo => {

    const div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
        <span>🌸</span>
        <span class="text">${todo.task}</span>
        <span class="status">Chưa làm</span>
    `;

    todoList.appendChild(div);

});