(function(){

    //VARIABLES

    var lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea = document.getElementById("btn-agregar");

    //FUNCIONES

    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace=document.createElement("a"),
            contenido = document.createTextNode(tarea);
        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea validad");
            tareaInput.className = "error";
            return false;
        } 
        //agregamos el contenido al enlace
        enlace.appendChild(contenido);
        //le establecemos un atriburo hreff
        enlace.setAttribute("href", "#");
        //agregamos el enlace (a) a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        //agregamos la nueva tarea
        lista.appendChild(nuevaTarea);

        tareaInput.value = ""

        for (var index = 0; index <= lista.children.length-1; index++) {
            lista.children[index].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }
    };

    var comprobarInput = function (){
        tareaInput.className="";
        tareaInput.setAttribute("placeholder", "Agregar tu tarea")
    };
    var eliminarTarea = function (){
        this.parentNode.removeChild(this);
    };

    //EVENTOS

    //agregar tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    //comprobar input
    tareaInput.addEventListener("click", comprobarInput);

    //borrar elementos de la lista
    for (var i = 0; i <= lista.children.length-1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea)
    }

}())