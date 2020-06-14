function Enviar() {
   var ini = Number(document.getElementById('ini').value)
   var fim = Number(document.getElementById('fim').value)
   var pas = Number(document.getElementById('pas').value)
   let res = document.getElementById("res")
   
   if (ini == 0 || fim == 0 || pas == 0){
      alert("[ERRO] Preencha todos os campos! ")
   }else {
      if (ini < fim){
         //Em ordem cresente
         for (let c = ini; c <= fim; c += pas ){
            res.innerHTML += `&#128073; ${c}`
         }
      }else {
         //Em ordem decrecente
         for (let c = ini; c >= fim; c -= pas ){
            res.innerHTML += `&#128073; ${c}`
         }
      }
   }
   
}