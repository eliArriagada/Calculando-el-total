function calcularTotal() {
    var cantidadProducto = document.querySelector("#cantidadProducto");
    var colorProducto = document.querySelector("#colorProducto");
    var precioProducto = document.querySelector("#precioProducto");
    var valorTotal = document.querySelector("#valorTotal");
    var cantidadTotal = document.querySelector("#cantidadTotal");
    var colorCirculo = document.querySelector("#colorCirculo");

    valorTotal.innerHTML = cantidadProducto.value * precioProducto.innerHTML;

    cantidadTotal.innerHTML = cantidadProducto.value;

    colorCirculo.style.backgroundColor = colorProducto.value;

}