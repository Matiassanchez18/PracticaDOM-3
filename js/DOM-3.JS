// 3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 

const Tarea = [];

function BotonEnviar(e) {
    e.preventDefault(); 

    const TareaEnviada = document.querySelector('#Tarea'); 

   
    if (TareaEnviada.value.trim() === "") {
        alert('Ingrese su tarea');
        return; 
     }
    Tarea.push(TareaEnviada.value); 
    TareaEnviada.placeholder = "Tarea enviada ✔";
    
   
    TareaEnviada.value = ""; 

    
    TareaEnviada.disabled = true;

    console.log(Tarea); 
}

function EliminarTarea(){
    if(Tarea.length > 0){

        Tarea.pop()
        const TareaEnviada = document.querySelector('#Tarea')
        TareaEnviada.disabled = false;
        TareaEnviada.placeholder = 'Enviar tarea';
        console.log(Tarea)
    }else{
        alert('No hay tarea a eliminar')
    }
}


const BtEnviar = document.querySelector(".border-top-0"); 
BtEnviar.addEventListener('submit', BotonEnviar);

const BtnEliminar = document.querySelector('.btn-danger');
BtnEliminar.addEventListener('click', EliminarTarea);