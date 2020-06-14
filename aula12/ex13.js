 
var agora =  new Date()
 var hor =  agora.getHours()
 console.log(`A gora são extamente ${hor} horas.`)
 if (hor < 12 ) {
    console.log('Bom dia!')
 }else if (hor <= 18){
    console.log('Boa Tarde!')
 }else{
     console.log('Boa Noite')
 }