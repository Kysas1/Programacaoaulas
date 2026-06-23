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
        let listatarefas = document.getElementById('listatarefas');
        let novatarefa = document.createElement('li');
        listatarefas.appendChild(novatarefa);
        novatarefa.textContent = inputT ; 
       
    }
    input.value = '' ; 

}