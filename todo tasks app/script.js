const inpt = document.getElementById("inpt");
const btn = document.getElementById("btn");
let tasks = [];
//localStorage.clear();
btn.onclick = (e) => add();
setup();
function add() {
  if (!inpt.value) {
    return;
  }
  tasks.push(inpt.value);
  localStorage.setItem("tasks", `${tasks.join(",")}`);
  createTask();
}
function setup() {
  if (!localStorage.getItem("tasks")) {
    return;
  }
  tasks = localStorage.getItem("tasks").split(",");

  for (let i = 0; i < tasks.length; i++) {
    reloadTasks(i);
  }
}
function createTask() {
  let div = document.createElement("div");

  let delbutn = document.createElement("button");
  let deltxt = document.createTextNode(`remove`);
  delbutn.setAttribute("onclick", "remove(this)");
  delbutn.appendChild(deltxt);
  let txt = document.createTextNode(`${inpt.value}`);
  div.appendChild(txt);
  div.appendChild(delbutn);
  document.body.appendChild(div);
  inpt.value = "";
}

function reloadTasks(a) {
  let div = document.createElement("div");
  let delbutn = document.createElement("button");
  let deltxt = document.createTextNode(`remove`);
  delbutn.setAttribute("onclick", "remove(this)");
  delbutn.appendChild(deltxt);
  let txt = document.createTextNode(`${tasks[a]}`);
  div.appendChild(txt);
  div.appendChild(delbutn);
  document.body.appendChild(div);
}
function remove(div) {
  tasks = tasks.filter((i) => {
    return !(i + "remove" === div.parentElement.textContent);
  });
  localStorage.setItem("tasks", `${tasks.join(",")}`);
  div.parentElement.remove();
}
