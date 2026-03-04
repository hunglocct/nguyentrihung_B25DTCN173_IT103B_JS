const productList = document.getElementById("product-list");
const form = document.getElementById("product-form");
const nameInput = document.getElementById("product-name");
const priceInput = document.getElementById("product-price");

function renderProducts(list = products) {
    productList.innerHTML = "";

    list.forEach(product => {
        const div = document.createElement("div");
        div.className = "product-item";

        div.innerHTML = `
            <p><strong>${product.name}</strong></p>
            <p>Giá: ${product.price.toLocaleString()} VND</p>
            <button class="delete-btn" data-id="${product.id}">Xóa</button>
            <button onclick="updateP(${product.id})">Sửa giá</button>
        `;

        productList.appendChild(div);
    });
}

renderProducts();
function updateP(id) {
    let input = +prompt("Nhập giá mới")
    const product = products.find(p => p.id === id);

    if (product) {
        product.price = input;
        renderProducts();
    }
}
productList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {

        const id = Number(e.target.dataset.id);


        products = products.filter(product => product.id !== id);

        renderProducts();
    }
});
form.addEventListener("submit", function (e) {
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
searchInput.addEventListener("input", e => {
    const keyword = e.target.value.toLowerCase();

    document.querySelectorAll(".product-item").forEach(item => {
        item.style.display =
            item.textContent.toLowerCase().includes(keyword)
                ? ""
                : "none";
    });
});
function sortMinToMax() {
    const sorted = products
        .slice()
        .sort((a, b) => a.price - b.price);

    renderProducts(sorted);
}

function sortMaxToMin() {
    const sorted = products
        .slice()
        .sort((a, b) => b.price - a.price);

    renderProducts(sorted);
}