/*
    2,70 gasolina
    1,90 alcool
*/ 
alert(`
Álcool: Até 25 litros, desconto de 2%. Acima de 25 litros, desconto de 4% 
Gasolina: Até 25 litros, desconto de 3%. Acima de 25 litros, desconto de 5% 
`)

const mensagem = `
Informe o combustível desejado:
Digite G para gasolina
Digite A para Álcool
`
const combustivelEsc = prompt(mensagem)

const litros = parseFloat(prompt('Quantos litros deseja?'))

if(combustivelEsc == 'G' || 'g'){
    if(litros <= 25){
       const gasolina = (litros * 2.70)

       const gasolinaFinal = (gasolina - (gasolina * 0.03))

       alert(`O valor a ser pago é de ${gasolinaFinal}`)
    }else{
        const gasolina = (litros * 2.70)

        const gasolinaFinal = (gasolina - (gasolina * 0.5))
 
        alert(`O valor a ser pago é de ${gasolinaFinal}`)
    }

}else{
    if(litros <= 25){
        const alcool = (litros * 1,90)
 
        const alcoolFinal = (alcool - (alcool * 0.3))
 
        alert(`O valor a ser pago é de ${alcoolFinal}`)
     }else{
         const alcool = (litros * 2,70)
 
         const alcoolFinal = (alcool- (alcool * 0.5))
  
         alert(`O valor a ser pago é de ${alcoolFinal}`)
     }
}