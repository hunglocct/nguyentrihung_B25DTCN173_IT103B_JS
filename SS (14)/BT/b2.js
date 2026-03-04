const productList = document.getElementById("product-list");
const form = document.getElementById("product-form");
const nameInput = document.getElementById("product-name");
const priceInput = document.getElementById("product-price");

function renderProducts() {
    productList.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
            <p><strong>${product.name}</strong></p>
            <p>Giá: ${product.price.toLocaleString()} VND</p>
        `;

        productList.appendChild(div);
    });
}

renderProducts();

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const price = Number(priceInput.value);

    if (!name || price <= 0) {
        alert("Nhập dữ liệu hợp lệ!");
        return;
    }

    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price
    };

    products.push(newProduct);

    renderProducts();
    form.reset();
});