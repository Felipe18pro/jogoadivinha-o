
let tentativas = 0
const readline = require('readline')
  
const rl = readline.createInterface({
       input:process.stdin,
       output:process.stdout     
})


console.log('Boas vindas!')
const numeroAleatorio = Math.floor(Math.random()*100) + 1
aleatorio()
function aleatorio(){


   rl.question(`Digite um numero de 1 a 100: ` , (palpite) => {
       tentativas = tentativas + 1
       if(tentativas == 10){
           console.log(`Voce perdeu`)
           rl.close()
       }else {
       if(palpite.trim() > numeroAleatorio){
           console.log(`Muito alto!`)
           aleatorio()
       }else if(palpite.trim() < numeroAleatorio){
           console.log(`Muito baixo!`)
           aleatorio()
       }else if(palpite == numeroAleatorio){
           console.log(`Parabéns voce acertou!`)
           console.log(`O numero de tentativas para acertar foi: ${tentativas}`)
           rl.close()
       }else {
           console.log(`o numero é invalido`)
           rl.close()
       }
   }
   })
}
aleatorio()
