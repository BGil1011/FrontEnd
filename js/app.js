document.addEventListener("DOMContentLoaded", inicio);

function inicio(){
    camisa();
    producto(); 
}


function camisa(){
    const camisa = document.querySelectorAll(".producto");

    camisa.forEach((e)=>{
        e.addEventListener("click", producto);
    })
}

function producto(e){
    e.preventDefault();
    let ev = document.querySelector(".producto a")
    let id = ev.parentElement.id;
    let nombre = ev.children[1].children[0].textContent;
    let precio = ev.children[1].children[1].textContent; 
    let direccion = ev.href = "/producto.html";   
    window.location.assign(`/FrontEnd/${direccion}?id=${id}&p=${precio}&n=${nombre}`);

}

