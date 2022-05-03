const selectProducts = document.getElementById('select-products')

window.addEventListener('load',loadSelect);

function loadSelect() {
    products.map(element=>{
        const opt = document.createElement('option');
        opt.textContent = element.name;
        opt.value = element.name;
        selectProducts.appendChild(opt);
    })
}
