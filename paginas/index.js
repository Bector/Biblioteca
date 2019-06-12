var firebaseConfig = {
    apiKey: "AIzaSyBk0QDRFS7tflVY974PRfgad0YrSsIiiGk",
    authDomain: "biblioteca-d01e8.firebaseapp.com",
    databaseURL: "https://biblioteca-d01e8.firebaseio.com",
    projectId: "biblioteca-d01e8",
    storageBucket: "biblioteca-d01e8.appspot.com",
    messagingSenderId: "334355289451",
    appId: "1:334355289451:web:083cb3d428929b84"
};
firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();




function agregarDatos() {
    var nombre = document.getElementById("nombre").value;
    var autor = document.getElementById("autor").value;
    var editorial = document.getElementById("editorial").value;

    console.log("Datos:" + nombre + "-" + autor + "-" + editorial);

    db.collection("libros").add({
        nombre: nombre,
        autor: autor,
        editorial: editorial
    })
        .then(function () {
            console.log("Document successfully written!");
            alert("Datos ingresados con exito");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
            alert("Error", error);
        });
}

function verDatos() {
    db.collection("libros").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {

            let cuerpo = document.getElementById("cuerpo");


            let fila = cuerpo.insertRow(cuerpo.rows.length);
            fila.insertCell(0).innerHTML = doc.id;
            fila.insertCell(1).innerHTML = doc.data().nombre;
            fila.insertCell(2).innerHTML = doc.data().autor;
            fila.insertCell(3).innerHTML = doc.data().editorial;

            console.log(doc.id, " => ", doc.data().nombre + " " + doc.data().autor + " " + doc.data().editorial);
        });
    });
}

function eliminarDatos() {
    var id = document.getElementById("id").value;
    db.collection("libros").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
        alert("Datos eliminados con exito");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}

function modificarDatos() {
    var id = document.getElementById("id2").value;
    var campo = document.getElementById("campo").value;
    var nuevo = document.getElementById("nuevo").value;

    console.log("Datos:" + id + "-" + campo + "-" + nuevo);

    var washingtonRef = db.collection("libros").doc(id);

    if (campo == "autor") {
        return washingtonRef.update({
            autor: nuevo,
        })
            .then(function () {
                console.log("Document successfully updated!");
                alert("Datos modificados con exito");
            })
            .catch(function (error) {
                console.error("Error updating document: ", error);
            });
    } else if (campo == "nombre") {
        return washingtonRef.update({
            nombre: nuevo,
        })
            .then(function () {
                console.log("Document successfully updated!");
                alert("Datos modificados con exito");
            })
            .catch(function (error) {
                console.error("Error updating document: ", error);
            });
    } else if (campo == "editorial") {
        return washingtonRef.update({
            editorial: nuevo,
        })
            .then(function () {
                console.log("Document successfully updated!");
                alert("Datos modificados con exito");
            })
            .catch(function (error) {
                console.error("Error updating document: ", error);
            });
    }

    // Set the "capital" field of the city 'DC'

}
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("user").style.display = "block";
        document.getElementById("login").style.display = "none";
        var user = firebase.auth().currentUser;
        if (user != null) {
            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Bienvenido " + email_id;
            window.location="home.html";
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
    window.location="index.html";
}

