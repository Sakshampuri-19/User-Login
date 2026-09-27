function checkUsername() {
    let username = document.getElementById("username");

    if (username.checkValidity()) {
        alert("Your Details Are Submitted");
        window.open("home.html");
    }
    else {
        alert("Please enter a valid email");
    }
}