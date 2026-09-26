function checkUsername(){
    let username=document.getElementById("username");
    let name = username.value;
    if (name.includes("@gmail.com")){
        alert("Your Details Are Submitted")
        window.open("home.html")
    }
    else{
        alert("Username Must contain '@gmail.com'")
    }

}