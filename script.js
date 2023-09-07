let btn = document.getElementById("btn");

btn.addEventListener('click', function(event){
    event.preventDefault(); //El preventDefault lo ejecuto para

let name = document.getElementById("name").value;
let lastName = document.getElementById("last-name").value;
let birthdate = document.getElementById("birthdate").value;


const datos = {
    'name': name,
    'lastName': lastName,
    'birthdate': birthdate
}

fetch('https://jsonplaceholder.typicode.com/users',{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',  
    },
    body: JSON.stringify(datos)
})
.then(response => response.json())
.then(data => console.log(datos))

});

