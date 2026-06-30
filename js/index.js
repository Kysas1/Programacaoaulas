let nome = 'gustavo'
console.log('escreva seu nome ' + nome)
let pj = document.getElementById('mensagem')

pj.addEventListener('click',clicar)
function clicar() {
    pj.textContent = 'oi'
    document.body.style.backgroundColor ='#75030333'
}