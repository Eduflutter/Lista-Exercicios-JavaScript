function loadsite() {
    var txt = document.querySelector('div#txt')
    var im =  document.querySelector("div#ima")
    var agora =  new Date()
    var hora = agora.getHours()
    txt.innerHTML = `<strong>Agora são ${hora} horas.</strong>`

    if (hora >= 6 && hora < 12) {
        im.innerHTML = '<img src="dia.svg">'
        document.body.style.backgroundColor = '#fcbf49'
    }else if (hora >= 12 && hora < 18){
        im.innerHTML = '<img src="tarde.svg">'
        document.body.style.backgroundColor = '#56cfe1'
    }else {
        im.innerHTML = '<img src="noite.svg">'
        document.body.style.backgroundColor = '#003049'
    }
}

