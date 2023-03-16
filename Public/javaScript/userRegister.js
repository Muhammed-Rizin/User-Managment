function show(){
    let name = document.getElementById("name").value
    let para1 = document.getElementById('para1')
    if(name==""){
        para1.innerText = 'EnterName'
    }else{
        para1.innerText = null
    }

    let email = document.getElementById('email').value
    let para2 = document.getElementById('para2')
    if(email==""){
        para2.innerText = 'Enter Email'
    }else{
        para2.innerText = null
    }

    let password = document.getElementById("pass").value
    let para3 = document.getElementById("para3")
    if(password==""){
        para3.innerText = "Enter Password"
    }else{
        para3.innerText = null
    }
}   