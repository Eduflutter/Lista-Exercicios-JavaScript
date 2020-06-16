function Enviar() {
   let ini = Number(document.getElementById('ini').value)
   let fim = Number(document.getElementById('fim').value)
   let pas = Number(document.getElementById('pas').value)
   let res = document.getElementById("res")
   
   if (ini == 0 || fim == 0 || pas == 0){
      alert("[ERRO] Preencha todos os campos! ")
   }else {
      if (pas == 0) {
         alert("Passo inválido, Considerando passo 1") 
         pas = 1
      }

      if (ini < fim){
         res.innerHTML = ''
         //Em ordem cresente
         for (let c = ini; c <= fim; c += pas ){
            res.innerHTML += `&#128073; ${c}`
         }

      }else {

         res.innerHTML = ''
         //Em ordem decrecente
         for (let c = ini; c >= fim; c -= pas ){
            res.innerHTML += `&#128073; ${c}`
         }
      }res.innerHTML += `\u{1F3C1}`
   }
   
}