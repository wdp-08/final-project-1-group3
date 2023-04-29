function contact() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("subject", subject);
    localStorage.setItem("message", message);

    
    if (name == "" && email == "" && subject == "" && message == "") {
        alert("Silahkan isi form terlebih dahulu");
    } else {
        alert("Pesan terkirim");
    }

}

