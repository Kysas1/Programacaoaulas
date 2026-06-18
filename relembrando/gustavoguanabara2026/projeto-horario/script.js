
function script (){
    let horario = new Date()
    let hora = correcao(horario.getHours())
    let minutos = correcao(horario.getMinutes())
    let segundos = correcao(horario.getSeconds())
    let img = document.getElementById('img')
    let p = document.getElementById('p')
        if (hora > 0 && hora < 6) {
            img.src = 'noite.jpg'
            console.log(hora)
            p.textContent = `Tenha uma boa noite !! são ${hora}:${minutos}:${segundos} `
            let body = document.body
            body.style.backgroundColor = 'rgb(2, 38, 69)'
        } else if (hora > 6 && hora < 12) {
            img.src = 'manha.webp'
            p.textContent = `Tenha um bom dia!! são ${hora}:${minutos}:${segundos} `
            let body = document.body
            body.style.backgroundColor = 'rgb(244, 228, 156)'
        } else {
            img.src = 'tarde.jpg'
            p.textContent = `Tenha uma boa tarde !! são ${hora}:${minutos}:${segundos} `
            let body = document.body
            body.style.backgroundColor = 'rgb(192, 62, 2)'
        }                       
}
function correcao(n){
    if (n < 10){
        n = '0' + n 
    } return n
}

script()
setInterval(script, 1000)



