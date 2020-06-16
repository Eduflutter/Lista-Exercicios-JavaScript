function Gerar () {
    let num = Number(document.getElementById("num").value)
    let tab = document.getElementById("tlt")
    let res = document.getElementById("res")

    if (num != 0) {
        tab.innerHTML = `TABUADA DO NÚMERO ${num}`
        res.innerHTML = ''
        for (let c = 0;c <= 10; c++ ) {
            res.innerHTML += `${num} x ${c} = ${num*c} <br/>`
        }
    }else {
        alert("[ERRO] Valor não informado!")
    }    

}