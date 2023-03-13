function show(){
    let email = document.getElementById("your_name").value;
    let para1 = document.getElementById("para1")
    if(email==""){
        para1.innerText = "Enter Email"
    }

    let password = document.getElementById("your_pass").value
    let para2 = document.getElementById("para2")
    if(password==""){
        para2.innerText = "Enter Password"
    }
}