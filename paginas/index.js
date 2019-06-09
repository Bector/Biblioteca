firebase.initializeApp({
    apiKey: "AIzaSyBk0QDRFS7tflVY974PRfgad0YrSsIiiGk",
    authDomain: "biblioteca-d01e8.firebaseapp.com",
    projectId: "biblioteca-d01e8"
});

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
    var id=document.getElementById("id").value;
    db.collection("libros").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
        alert("Datos eliminados con exito");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}