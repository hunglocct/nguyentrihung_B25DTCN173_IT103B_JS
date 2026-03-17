document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("product-form");
  const tbody = document.getElementById("product-tbody");

let products = [
  { code: "SP001", name: "Laptop Dell XPS 15", price: 25000000 },
  { code: "SP002", name: "iPhone 15 Pro Max", price: 32900000 },
  { code: "SP003", name: "Samsung Galaxy S24 Ultra", price: 28900000 },
  { code: "SP004", name: "AirPods Pro 2", price: 5990000 }
];

  function renderProducts() {
    tbody.innerHTML = "";

    if (products.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align:center;">Không có sản phẩm</td>
        </tr>
      `;
      return;
    }

    products.forEach((product, index) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${product.code}</td>
        <td>${product.name}</td>
        <td>${Number(product.price).toLocaleString()} đ</td>
        <td>
          <button class="btn-edit" data-code="${product.code}">Sửa</button>
          <button class="btn-delete" data-code="${product.code}">Xóa</button>
        </td>
      `;

      tbody.appendChild(tr);
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const code = document.getElementById("product-code").value.trim();
    const name = document.getElementById("product-name").value.trim();
    
    const price = document.getElementById("product-price").value;

    // validate
    if (!code || !name || !price) {
      alert("Nhập đầy đủ thông tin!");
      return;
    }

    if (products.some(p => p.code === code)) {
      alert("Mã đã tồn tại!");
      return;
    }

    products.push({
      code,

      name,
      price: Number(price)
    });

    renderProducts();
    form.reset();
  });

  tbody.addEventListener("click", function (e) {
    const code = e.target.dataset.code;

    if (e.target.classList.contains("btn-delete")) {
      if (confirm("Xóa sản phẩm này?")) {


        products = products.filter(p => p.code !== code);
        renderProducts();
      }
    }

    if (e.target.classList.contains("btn-edit")) {
      const product = products.find(p => p.code === code);

      const newName = prompt("Tên mới:", product.name);
      if (!newName || newName.length < 3) {

        alert("Tên không hợp lệ!");
        return;
      }


      const newPrice = prompt("Giá mới:", product.price);
      if (isNaN(newPrice) || Number(newPrice) < 1000) {
        alert("Giá không hợp lệ!");
        return;
      }



      product.name = newName;
      product.price = Number(newPrice);

      renderProducts();
    }
  });

  renderProducts();
});