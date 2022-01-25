document.addEventListener("DOMContentLoaded", inicio);

function inicio(){
    cargarCamisa();
}

function cargarCamisa(){
    var url = new URL(window.location);
    let id = url.searchParams.get("id");
    let nombre = url.searchParams.get("n");
    const nombre_producto = document.querySelector(".contenedor h1");
    const pagina = document.querySelector(".camisa");
    const boton = document.querySelector(".formulario__submit");
    boton.addEventListener("click", e=> e.preventDefault());
    nombre_producto.textContent = nombre;
    pagina.children[0].src = `img/${id}.jpg`;

}