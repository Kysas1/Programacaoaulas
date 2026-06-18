let btn = document.getElementById('btn')
btn.addEventListener('click',clicar)
function clicar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        let fsex = document.getElementsByName('iden')
        let idade = ano - Number(fano.value);
        let genero = ' '
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade <= 5){
                //criança 
                img.setAttribute('src','bebe-menino.png');
                console.log('criança')
            } else if (idade > 5 && idade <= 19){
                // adolescente
                img.setAttribute('src', 'garoto.png');
                console.log('adolescente')
            } else if (idade <= 60){
                // adulto 
                img.setAttribute('src', 'homem.png');
                console.log('adulto');
            } else {
                // idoso
                img.setAttribute('src', 'idoso.png');
                console.log('idoso')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 6) {
                console.log('criança f ')
                img.setAttribute('src', 'bebe-menina.png');
                document.body.style.backgroundColor =' rgba(207, 100, 243, 0.682) '
            } else if (idade <= 17) {
                console.log('adolescente m ')
                img.setAttribute('src', 'garota.png');
                document.body.style.backgroundColor =' rgba(207, 100, 243, 0.682) ';
            } else if ( idade < 60 ) {
                img.setAttribute('src', 'mulher.png');
                console.log('mulher adulta ')
                document.body.style.backgroundColor =' rgba(207, 100, 243, 0.682) '
            } else {
                img.setAttribute('src', 'idosa.png');
                console.log('idosa')
            }
        } 
        res.style.textAlign = ' center '
        res.textContent = `Detectamos um ${genero} com ${idade} anos `
        res.appendChild(img)
    } 
} 