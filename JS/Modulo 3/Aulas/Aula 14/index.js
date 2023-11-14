const input = document.getElementById("input")

document.getElementById("value").addEventListener("click", function(){
    input.value = input.value !== "Hello Word" ? "Hello Word" : ""
})

document.getElementById("type").addEventListener('click', function(){
    input.type = input.type === "text" ? "date" : "text"
})

document.getElementById("placeholder").addEventListener("click", function(){
    input.placeholder = input.placeholder === "" ? "A prima do max é minha" : ""
})

document.getElementById("disabled").addEventListener("click", function(){
    input.disabled = input.disabled === true ? false : true
})

document.getElementById("data").addEventListener("click", function(){
    const primaDoMax = input.dataset.primadomax
    console.log(primaDoMax)
    const primaDoMaxAtualizado = this.dataset.primadomax = "é MINHA!"
    console.log(primaDoMaxAtualizado)
})