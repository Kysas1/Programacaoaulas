let btn = document.getElementById('btn')
btn.addEventListener('click', clicar)
function clicar(){
    let numerof = document.getElementById('numero');
    let numero = Number(numerof.value)
        if (numerof.value.length == 0){
            alert('[ERRO] Coloque um numero')
        } else {
            let n1 = numero * 1
            let n2 = numero * 2
            let n3 = numero * 3
            let n4 = numero * 4
            let n5 = numero * 5
            let n6 = numero * 6
            let n7 = numero * 7
            let n8 = numero * 8 
            let n9 = numero * 9
            let n10 = numero * 10
            let res = document.querySelector('div#res');
            res.innerHTML = `${numero}x1:${n1} <br>`
            res.innerHTML += `${numero}x2:${n2}<br>`
            res.innerHTML += `${numero}x3:${n3}<br>`
            res.innerHTML += `${numero}x4:${n4}<br>`
            res.innerHTML += `${numero}x5:${n5}<br>`
            res.innerHTML += `${numero}x6:${n6}<br>`
            res.innerHTML += `${numero}x7:${n7}<br>`
            res.innerHTML += `${numero}x8:${n8}<br>`
            res.innerHTML += `${numero}x9:${n9}<br>`
            res.innerHTML += `${numero}x10:${n10}`
        }
    
}