function adicionarTarefa() {
    
    let input = document.getElementById('input');
    let inputT = input.value;
    if (input.value.length == ' ') {
        alert('[Erro] Adcione uma tarefa !')
    } else {
        console.log(inputT);
    let mensagem = 'Tarefa adcionada com sucesso!';
    document.getElementById("mensagem").textContent = mensagem;
    let listatarefas = document.getElementById('listatarefas');
    let novatarefa = document.createElement('li');
    listatarefas.appendChild(novatarefa);
    novatarefa.textContent = inputT ; 
    input.value = '' ; 
    }
    

}