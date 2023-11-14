document.getElementById("buttonSessionStorage").addEventListener("click", function(){
    const input = document.getElementById("session-storage")
    sessionStorage.setItem("text", input.value)
    input.value = ""
})

document.getElementById("buttonReadSessionStorage").addEventListener("click", function(){
    const value = sessionStorage.getItem("text")
    alert(`O valor do Local Storage é:\n\n${value}`)
})

document.getElementById("buttonLocalStorage").addEventListener("click", function(){
    const input = document.getElementById("local-storage")
    localStorage.setItem("text", input.value)
    input.value = ""
})

document.getElementById("buttonReadLocalStorage").addEventListener("click", function(){
    const value = localStorage.getItem("text")
    alert(`O valor do Local Storage é:\n\n${value}`)
})

document.getElementById("buttonCookies").addEventListener("click", function(){
    const input = document.getElementById("cookies")
    const value = `text=${input.value};`
    const expiration = `expires=${new Date(2023, 9, 10)};`
    const path = "path=/;"

    document.cookie = value + expiration + path
    input.value = ""
})

document.getElementById("buttonReadCookies").addEventListener("click", function(){
    const value = document.cookie
    alert(`O valor do Local Storage é:\n\n${value}`)
})