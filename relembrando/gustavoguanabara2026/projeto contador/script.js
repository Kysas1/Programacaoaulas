let btn = document.getElementById('btn')
btn.addEventListener('click', clicar)

function clicar(){
    let txt1 = document.getElementById('txtn1') 
    let txt2 = document.getElementById('txtn2')
    let contador = document.getElementById('passo')
    let res = document.getElementById('res')
    if (txt1.value.length == 0 || txt2.value.length == 0 || contador.value.length == 0 ) {
        alert('[Está Faltando dados]')
        res.textContent ='Impossivel contar...'
    } else {
        res.textContent = 'contando : '
        let i = Number(txt1.value)
        let f = Number(txt2.value)
        let p = Number(contador.value)
        if (p <= 0 ){
            window.alert('Impossivel contar, considerando passo 1')
            p = 1
        }
        if (i < f){ //contagem crescente
            for (let c = i ; c <= f ; c += p ) {
                res.textContent += `${c} \u{1F449}` 
            }
            res.textContent +=`\u{1F3C1}`
        } else { //contagem regressiva
            for(let c = i ; c >= f ; c-= p ){
                res.textContent += `${c} \u{1F449}`
            }
            res.textContent += `\u{1F3C1}...`
        }
            

    }
}