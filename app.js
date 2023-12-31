const campoTarefa = document.getElementById("campo-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

let listaControle = [
	{
		nome: "Estudar HTML e CSS",
		feito: true,
	},
	{
		nome: "Estudar JavaScript",
		feito: false,
	},
	{
		nome: "Fazer os exercícios",
		feito: false,
	},
];

function atualizarItemDaLista(itemParaAtualizar) {
	itemParaAtualizar.feito = !itemParaAtualizar.feito;
}

function removeItemDaLista(itemParaRemover) {
	if (confirm("Você tem certeza que deseja remover o item: " + itemParaRemover.nome + "?")) {
		const novaListaControle = listaControle.filter((itemDaLista) => {
			return itemDaLista !== itemParaRemover;
		});
		listaControle = novaListaControle;
		atualizaTela();
	}
}

function criaElementoDoItem(item) {
	const novoElemento = document.createElement("li");
	const checado = item.feito ? "checked" : "";

	novoElemento.innerHTML = `
		<input type="checkbox" ${checado} />
		<span>${item.nome}</span>
		<button>🗑️</button>
	`;
	novoElemento.className = "item";

	const botaoRemover = novoElemento.querySelector("button");
	botaoRemover.addEventListener("click", () => {
		removeItemDaLista(item);
	});

	const checkbox = novoElemento.querySelector("input");
	checkbox.addEventListener("click", () => {
		atualizarItemDaLista(item);
	});

	return novoElemento;
	}

function atualizaTela() {
	listaTarefas.innerHTML = "";

	listaControle.forEach((item) => {
		const novoItem = criaElementoDoItem(item);
		listaTarefas.appendChild(novoItem);
	});

	document.querySelector("#qtdTotal").innerText = listaControle.length;
}

atualizaTela();

function adicionaItemNaLista() {
	if (campoTarefa.value) {
		const novaTarefa = {
		nome: campoTarefa.value,
		feito: false,
		};
		listaControle.push(novaTarefa);
		campoTarefa.value = "";
		atualizaTela();
	}
}

botaoAdicionar.addEventListener("click", adicionaItemNaLista);
