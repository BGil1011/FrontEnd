document.addEventListener("DOMContentLoaded", inicio);

function inicio(){
    cargarCamisa();
}

function cargarCamisa(){
    var url = new URL(window.location);
    let id = url.searchParams.get("id");
    const nombre = url.searchParams.get("n");
    const precio = url.searchParams.get("p");
    const nombre_producto = document.querySelector(".contenedor h1");
    const pagina = document.querySelector(".camisa");
    const boton = document.querySelector(".formulario__submit");
    boton.addEventListener("click", e=> e.preventDefault());
    nombre_producto.textContent = nombre;
    pagina.children[0].src = `img/${id}.jpg`;

}