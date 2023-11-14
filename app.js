const campoTarefa = document.getElementById("tarefa");
const botaoAdiciona = document.getElementById("adicionar");
const listaTarefas = document.getElementById("lista-tarefas");
const tarefas = ["Estudar HTML e CSS", "Estudar JavaScript", "Fazer exrcícios"];

function atualizaTela() {
    listaTarefas.innerHTML = "";

	tarefas.forEach((tarefa) => {
		const elementoLi = document.createElement("li");
		elementoLi.innerHTML = `
        <input type="checkbox">
        <span>${tarefa}</span>
        <button id="remover">🗑️</button>
        `;
		listaTarefas.appendChild(elementoLi);
        
	});
}

botaoAdiciona.addEventListener("click", () => {
	const novaTarefa = campoTarefa.value;
	tarefas.push(novaTarefa);
	atualizaTela();
	campoTarefa.value = "";
});

atualizaTela();