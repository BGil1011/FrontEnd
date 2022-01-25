document.addEventListener("DOMContentLoaded", inicio);

function inicio(){
    camisa();
    producto(); 
}


function camisa(){
    const camisa = document.querySelectorAll(".producto a");

    camisa.forEach((e)=>{
        e.addEventListener("click", producto);
    })
}

function producto(e){
    e.preventDefault();
    const id = e.path[1].parentElement.id;
    const nombre = e.path[1].children[1].children[0].textContent;   
    window.location.assign(`/FrontEnd/producto.html?id=${id}&n=${nombre}`);

}

