function Gerar () {
    var num = Number(document.getElementById("num").value)
    let res = document.getElementById("res")
    let tab = document.getElementById("tlt")

    if (num != 0) {
        tab.innerHTML = `TABUADA DO NÚMERO ${num}`
        for (let c = 0;c <= 10; c++ ) {
            res.innerHTML += `${num} x ${c} = ${num*c} <br/>`
        }
    }else {
        alert("[ERRO] Valor não informado!")
    }    

}