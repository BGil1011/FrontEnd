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
    const ev = document.querySelector(".producto a")
    const id = ev.parentElement.id;
    const nombre = ev.children[1].children[0].textContent;
    const precio = ev.children[1].children[1].textContent; 
    const direccion = ev.href = "/producto.html";   
    window.location.assign(`FrontEnd/${direccion}?id=${id}&p=${precio}&n=${nombre}`);

}

