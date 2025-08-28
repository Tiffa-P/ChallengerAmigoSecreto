// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []; // declara variable arreglo
let amigo = document.getElementById("amigo");
function agregarAmigo (){
  if (amigo.value!== "") {
    if(!isNaN(parseInt(amigo.value))) {
        alert("No se permiten números");
        amigo.value = "";
        return;
    }
    nombres.push(amigo.value); // guardar en el arreglo
      amigo.focus();
    } else {
        alert("Escribe un nombre antes de agregar");
        amigo.value = "";
        return;
    } 

    console.log (nombres);
    let li = document.createElement("li");
    li.innerHTML = amigo.value;
    let listaAmigo = document.getElementById("listaAmigos").appendChild(li);
    amigo.value = ""; // limpiar input
    
}
function sortearAmigo (){
    if (nombres.length == 0){
        return;
    } 
    let nombreAleatorio= nombres[Math.floor(Math.random() * nombres.length)];
    //alert(nombreAleatorio);
    document.getElementById("listaAmigos").innerHTML ="";
    nombres = [];
    let li = document.createElement("li");
    li.innerHTML = "Felicidades su amigo secreto es: " +nombreAleatorio ;
    document.getElementById("resultado").innerHTML ="";
     let  resultado= document.getElementById("resultado").appendChild(li);
    amigo.value = "";
    setTimeout(() => {  
        if (confirm("¿Desea agregar otros amigos?")) {
        document.getElementById("resultado").innerHTML ="";  
        amigo.focus();
} 
 }, 2000); // espera 2 segundos
 
    
}
