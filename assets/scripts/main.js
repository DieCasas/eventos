/* Para hacer clickeable el  carrito y que se despliegue una ventana que lo muestre */
const abrirModal = document.querySelector (".logoCarrito");
const modal = document.querySelector (".contenedorCarrito");
const cerrarModal = document.querySelector (".cruzCarrito");

abrirModal.addEventListener ("click" , (e)=> {
    e.preventDefault();
    modal.classList.add("abrir")
})

cerrarModal.addEventListener ("click" , (e)=> {
    e.preventDefault();
    modal.classList.remove("abrir")
})

/* Creando el HTML de los productos */ 
const div = document.getElementById ("divPrincipalProductos")

let cart = []
console.log(cart)

function mostrarProductos()  {
    productos.forEach((producto) => {
        const divCard = document.createElement ("div")
        divCard.innerHTML += ` 
        <img src="${producto.img}">
        <h3>${producto.name}</h3>
        <p> ${producto.price} </p>
        <button id="botonRojo"> Agregar al carrito </button> 
        ` 
        div.appendChild(divCard);

        const botonComprar = document.getElementById("botonRojo");
        botonComprar.addEventListener("click", function(){
            cart.push(producto);
            alert("agregaste " + producto.name + "al carrito");
            showCart()
        })
        
    })
    
    
}

mostrarProductos()

//Agregar productos al carrito

const carrito = document.getElementById("carrito")

function showCart() {

    cart.forEach((elemento) => {
        const divCart = document.createElement('ul')
        divCart.innerHTML += ` 
        <img src="${elemento.img}">
        <h3>${elemento.name}</h3>
        <h3>$${elemento.price}</h3>
        `


        carrito.appendChild(divCart)
    })
}











