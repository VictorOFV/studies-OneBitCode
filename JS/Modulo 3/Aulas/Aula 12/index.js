const form = document.getElementById("form")

form.addEventListener("submit", function(event){
    event.c()

    const name = document.getElementById("name")
    const address = document.getElementById("address")
    const observation = document.getElementById("observation")
    const bread = document.querySelector("select[name='bread']")
    const meat = document.querySelector("input[name='meat']")
    
    let salad = ""
    document.querySelectorAll("input[name='salad']:checked").forEach(function(item){
        salad += `\n- ${item.value}`
    })

    alert(`Pedido realizado!\n\nNome do Cliente: ${name.value}\nEndereço: ${address.value}\nTipo de Pão: ${bread.value}\nTipo de Carne: ${meat.value}\nSaladas: ${salad}\nObservação: ${observation.value}`)
})