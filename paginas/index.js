firebase.initializeApp({
    apiKey: 'AIzaSyBk0QDRFS7tflVY974PRfgad0YrSsIiiGk',
    authDomain: 'biblioteca-d01e8.firebaseapp.com',
    projectId: 'biblioteca-d01e8'
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
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}