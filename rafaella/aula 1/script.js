let btn = document.getElementById('btn');
btn.addEventListener('click', clicar);
function clicar(){
    let texto = document.getElementById('msg');
    texto.textContent = 'Olá, Rafaela';
}