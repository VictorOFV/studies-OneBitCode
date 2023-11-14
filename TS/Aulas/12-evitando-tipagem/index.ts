function sendSpaceship(pilots: { pilot: string, copilot?: string }) { // o ? deixa o argumento como opcional
    //code
}

sendSpaceship({ pilot: "Lucas", copilot: "Joao" })
sendSpaceship({ pilot: "Lucas" })

let input: unknown // usado quando nao se sabe o que pode ser retornado, podendo ser de qualquer tipo 
input = "Hello Word"
input = 2
input = {}

let text: any // o any tambem faz a mesma coisa que o unknown, mas nao e recomendado pois essa tipagem desabilita o typescript
text = "aaaaa"
text = 14
text = false