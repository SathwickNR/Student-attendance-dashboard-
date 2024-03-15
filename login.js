const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "dashboard.html"
    }else{
        alert("wrong")
    }
})

function authentication(username,password){
    if(username === "name" && password === "password"){
        return true
    }else{
        return false
    }
}