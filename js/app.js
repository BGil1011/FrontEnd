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
    console.log(e);
    const ev = document.querySelector(".producto a")
    const id = ev.parentElement.id;
    const nombre = ev.children[1].children[0].textContent;   
    //window.location.assign(`/FrontEnd/producto.html?id=${id}&n=${nombre}`);

}

