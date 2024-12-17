
function agregarTarea(){
    let tarea = document.getElementById("nuevaTarea").value;

    if(tarea ==""){
        alert('Por favor ingrese una Tarea');
        return;
    } else{
        let nuevaTarea = document.createElement("id");
        nuevaTarea.textContent = tarea + " ";

        let eliminarTarea = document.createElement("button");
        eliminarTarea.textContent = "Eliminar";
        eliminarTarea.className = 'btn-eliminar';
        eliminarTarea.onclick = function(){
            nuevaTarea.remove();
        }

        nuevaTarea.appendChild(eliminarTarea);
        document.getElementById("listaTareas").appendChild(nuevaTarea);

        document.getElementById("nuevaTarea").value = "";

    }


}