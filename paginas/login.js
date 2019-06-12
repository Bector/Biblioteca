firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("user").style.display = "block";
        document.getElementById("login").style.display = "none";
        var user = firebase.auth().currentUser;
        if (user != null) {
            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Bienvenido " + email_id;
        }
    } else {
        document.getElementById("user").style.display = "none";
        document.getElementById("login").style.display = "block";
    }
});

function login() {
    var usuario = document.getElementById("email_field").value;
    var pass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(usuario, pass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error: " + errorMessage);
    });
}
function salir() {
    firebase.auth().signOut();
}