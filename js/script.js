const input = document.querySelector('input');
const addbtn = document.querySelector('.btnagregar');
const ul = document.querySelector('ul');
const empty = document.querySelector('.vacio');

addbtn.addEventListener("click", handleAddTask);

function handleAddTask(event) {
    event.preventDefault();

    const texto = input.value.trim(); // Usamos trim() para eliminar espacios en blanco

    if (texto !== "") {
        const li = document.createElement('li');

        const taskContent = document.createElement('div');
        taskContent.className = 'task-content';
        taskContent.textContent = texto;

        li.appendChild(taskContent);
        li.appendChild(btnborrar());

        ul.appendChild(li);

        input.value = "";

        empty.style.display = "none";
    }
}

function btnborrar() {
    const borrarbtn = document.createElement('button');
    borrarbtn.textContent = "Eliminar";
    borrarbtn.className = "btn-delete";

    borrarbtn.addEventListener("click", handleDeleteTask);

    return borrarbtn;
}

function handleDeleteTask() {
    const item = event.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll('li');
    if (items.length === 0) {
        empty.style.display = "block";
    }
}
