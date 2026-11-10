const products = ["pan", "huevo", "leche"];
const form = document.getElementById("formulario");
const lista = window.document.getElementById("lista");

for (let product of products) {
    mostrarProduct(product);
}

function mostrarProduct(product) {
    const li = window.document.createElement("li");
    const borrar =window.document.createElement("button");
    borrar.textContent = "x";
    borrar.addEventListener("click", ()=>{
        products.splice(products.indexOf(product), 1);
        lista.removeChild(li);
    });
    li.textContent = product;
    li.appendChild(borrar);
    lista.appendChild(li);
}

function addElement(event) {
    event.preventDefault();

    const product = document.getElementById("product");
    products.push(product.value);
    mostrarProduct(product.value);
    product.value="";
}

form.addEventListener("submit", addElement);