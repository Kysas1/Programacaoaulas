let btn = document.getElementById('btn')
btn.addEventListener('click', click)
function click(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('tab')
        if (num.value.length == 0) {
            window.alert('erro, insira um numero')
        } else {
            let n = Number(num.value);
            let c = 1
            tab.innerHTML = ' '
            console.log(c);
                while ( c <= 10 ) {
                let item = document.createElement('option')
                item.text = `${n}x${c}=${n*c}`;
                item.value = `tab${c}`
                c++ ;
                tab.appendChild(item);
        }
        } 
}