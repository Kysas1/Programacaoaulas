let botao = document.getElementById('botao')
botao.addEventListener('click' , clicar)

function clicar(){
    let t1 = document.getElementById('txtn1')
    let t2 = document.getElementById('txtn2')
    let t3 = document.getElementById('txtn3')
    
    if (t1.value.length == 0 || t2.value.length == 0 || t3.value.length == 0 ) {
        alert('[Erro, digite um valor]')
    } else {
        let res = document.getElementById('res')
        res.textContent = 'Contando...'
        let i = Number(t1.value)
        let f = Number(t2.value)
        let p = Number(t3.value)
        if (0 >= p) {
            window.alert('considerando passo como : 1 ')
            p = 1
        } if (i <= f) {
            for(let c = i ;f >= c ; c = c + p){
            res.textContent += `...`+c
         } 
        } else {
            for(let c = i ; c >= f ; c = c - p){
            res.textContent +=`...`+c
            }
        }                 
    }
 }
       
 
    
