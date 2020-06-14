function verificar() {
    var date_now = new Date()
    var ano =  date_now.getUTCFullYear()
    var fano = Number(document.getElementById('txtano').value)
    var res = document.getElementById('res')
    if (fano == 0 || fano > ano){
        alert('Vefifique os dados e tente novamete!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var sexo = ''
        if (fsex[0].checked){
            sexo = 'Homen'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'png/homen_bebe.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'png/homen_jovem.png')
            }else if (idade < 50 ){
                //Adulto
                img.setAttribute('src', 'png/homen_adulto.png')
            }else {
                //idoso
                img.setAttribute('src', 'png/homen_veio.png')
            }
        }else if(fsex[1].checked){
            sexo = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'png/mulher_bebe.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'png/mulher_jovem.png')
            }else if (idade < 50 ){
                //Adulto
                img.setAttribute('src', 'png/mulher_adulta.png')
            }else {
                //idoso
                img.setAttribute('src', 'png/mulher_veia.png')
            }
        }
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        res.appendChild(img)
    }
}
