// Obtiene una referencia al botón con ID "btn"
let btn = document.getElementById("btn");

btn.addEventListener('click', function(event){
    event.preventDefault();//El preventDefault lo ejecuto para prevenir el envío predeterminado del formulario (envío de datos y recarga de la pagina)

// Obtener los valores de los campos de entrada por sus respectivos IDs
let name = document.getElementById("name").value;
let lastName = document.getElementById("last-name").value;
let birthdate = document.getElementById("birthdate").value;

// Crear un objeto "datos" con los valores obtenidos
const datos = {
    'name': name,
    'lastName': lastName,
    'birthdate': birthdate
}

// Realizar una solicitud POST a la API de JSONPlaceholder
fetch('https://jsonplaceholder.typicode.com/users',{
    method: 'POST', 
    headers:{
        'Content-Type': 'application/json',  // Especifica el tipo de contenido JSON
    },
    body: JSON.stringify(datos) // Convertir el objeto "datos" a JSON y enviarlo en el cuerpo de la solicitud
})
.then(response => response.json()) // Analiza la respuesta JSON
.then(data => console.log(datos)) // Imprime los datos enviados en la consola 

});

