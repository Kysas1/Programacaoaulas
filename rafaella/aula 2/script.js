let tarefas = []
function adicionarTarefa() {  
    let input = document.getElementById('input');
    let inputT = input.value.trim();
    let p = document.getElementById('mensagem')
    if (inputT == '') {
        alert('[Erro] Adcione uma tarefa !') ;
        let mensagemerro = 'Adcione uma Tarefa no campo !';
        p.textContent = mensagemerro ;
        p.style.color ='#A34743'
    } else {
        console.log(inputT);
        let mensagem = 'Tarefa adcionada com sucesso!';
        p.textContent = mensagem;
        p.style.color = '#28A745'
        tarefas.push(inputT);
        renderizar();
    }
    input.value = '' ; 
}

function renderizar(){
    let listatarefas = document.getElementById('listatarefas');
    listatarefas.innerHTML = ''
    for(let c = 0 ;c < tarefas.length ; c++) {
        let novatarefa = document.createElement('li');
        novatarefa.textContent = tarefas[c] ; 

        let botaoRemover = document.createElement('button');
        botaoRemover.className ='remover';
        botaoRemover.textContent ='Remover'
        botaoRemover.onclick = () => Removertarefa(c);

        let botaoEditar = document.createElement('button');
        botaoEditar.className ='editar';
        botaoEditar.textContent ='Editar'
        botaoEditar.onclick = () => editarTarefa(c);
        novatarefa.appendChild(botaoEditar);
        novatarefa.appendChild(botaoRemover);
        listatarefas.appendChild(novatarefa);   
    }    
}

function Removertarefa(c){
    tarefas.splice(c, 1);
    renderizar()
}

function editarTarefa(c) {
    let tarefaEditada = prompt('Edite sua tarefa: ');
    if (tarefaEditada.trim() !== ''){
        tarefas[c] = tarefaEditada;
        renderizar();
    }
}

function limparLista(c){
    tarefas.length = 0
    renderizar();
    let p = document.getElementById('mensagem')
    p.textContent = 'Tarefas Removidas';
    p.style.color = '#7e0404'
}