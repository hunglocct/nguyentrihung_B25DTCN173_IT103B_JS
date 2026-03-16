const defaultTodos = [
{ task: "Mua bánh chưng", done: false },
{ task: "Dọn nhà đón Tết", done: false },
{ task: "Gói bánh chưng", done: false },
{ task: "Trang trí nhà cửa bằng hoa mai, hoa đào", done: false },
{ task: "Mua phong bao lì xì", done: false },
{ task: "Chuẩn bị mâm ngũ quả", done: false }
];

const todoList = document.getElementById("todoList");
const input = document.getElementById("newTask");

let todos = JSON.parse(localStorage.getItem("myTodos")) || defaultTodos;

function saveTodos(){
localStorage.setItem("myTodos",JSON.stringify(todos));
}

function renderTodos(){

todoList.innerHTML="";

todos.forEach((todo,index)=>{

const div=document.createElement("div");

div.className="task";

if(todo.done){
div.classList.add("done");
}

div.innerHTML=`
<span class="icon">${todo.done ? "✔️":"⚪"}</span>
<span class="text">${todo.task}</span>
`;

div.onclick=function(){

todos[index].done=!todos[index].done;

saveTodos();

renderTodos();

};

todoList.appendChild(div);

});

}

function addTask(){

const value=input.value.trim();

if(value==="") return;

todos.push({
task:value,
done:false
});

saveTodos();

renderTodos();

input.value="";
}

renderTodos();