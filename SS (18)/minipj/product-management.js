// trang thai
let products = [];
let currentEditId = null;

// cac phan tu dom
const form = document.getElementById('productForm');
const formTitle = document.getElementById('formTitle');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const productTableBody = document.getElementById('productTableBody');
const searchInput = document.getElementById('searchInput');
const filterCategory = document.getElementById('filterCategory');
const emptyState = document.getElementById('emptyState');
const productTable = document.getElementById('productTable');

// thong ke
const totalProductsEl = document.getElementById('totalProducts');
const totalValueEl = document.getElementById('totalValue');
const totalQuantityEl = document.getElementById('totalQuantity');

// khoi tao
function init() {
  loadData();
  renderTable();
  setupEventListeners();
}

// tai du lieu tu localstorage
function loadData() {
  try {
    const data = localStorage.getItem('products');
    if (data) {
      products = JSON.parse(data);
    } else {
      products = [];
    }
  } catch (error) {
    console.error('Error parsing JSON from localStorage', error);
    products = [];
  }
}

// luu du lieu vao localstorage
function saveData() {
  localStorage.setItem('products', JSON.stringify(products));
  updateStats();
}

// dinh dang tien te
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN').format(amount) + ' VNĐ';
}

// lay id tiep theo
function getNextId() {
  if (products.length === 0) return 1;
  const ids = products.map(p => p.id);
  return Math.max(...ids) + 1;
}

// hien thi bang du lieu
function renderTable() {
  const searchTerm = searchInput.value.toLowerCase();
  const categoryFilter = filterCategory.value;

  const filteredProducts = products.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(searchTerm) || 
                        product.description.toLowerCase().includes(searchTerm);
    const matchCategory = categoryFilter === '' || product.category === categoryFilter;
    return matchSearch && matchCategory;
  });

  productTableBody.innerHTML = '';

  if (filteredProducts.length === 0) {
    emptyState.classList.add('show');
    productTable.style.display = products.length === 0 ? 'none' : 'table';
  } else {
    emptyState.classList.remove('show');
    productTable.style.display = 'table';

    filteredProducts.forEach(product => {
      const tr = document.createElement('tr');
      const quantityClass = product.quantity < 10 ? 'low-stock quantity' : 'quantity';
      
      tr.innerHTML = `
        <td>${product.id}</td>
        <td><strong>${product.name}</strong></td>
        <td>${product.category}</td>
        <td class="price">${formatCurrency(product.price)}</td>
        <td class="${quantityClass}">${product.quantity}</td>
        <td class="description" title="${product.description}">${product.description}</td>
        <td>
          <div class="action-buttons">
            <button class="btn-edit" onclick="editProduct(${product.id})">✏️ Sửa</button>
            <button class="btn-delete" onclick="deleteProduct(${product.id})">🗑️ Xóa</button>
          </div>
        </td>
      `;
      productTableBody.appendChild(tr);
    });
  }
  
  updateStats();
}

function updateStats() {
  const totalProds = products.length;
  const totalQty = products.reduce((sum, p) => sum + parseInt(p.quantity), 0);
  const totalVal = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);

  totalProductsEl.textContent = totalProds;
  totalQuantityEl.textContent = totalQty;
  totalValueEl.textContent = formatCurrency(totalVal);
}

// thiet lap cac su kien lang nghe
function setupEventListeners() {
  form.addEventListener('submit', handleFormSubmit);
  cancelBtn.addEventListener('click', resetForm);
  clearAllBtn.addEventListener('click', handleDeleteAll);
  searchInput.addEventListener('input', renderTable);
  filterCategory.addEventListener('change', renderTable);
}

// xu ly khi submit form
function handleFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('productName').value.trim();
  const category = document.getElementById('productCategory').value;
  const price = parseFloat(document.getElementById('productPrice').value);
  const quantity = parseInt(document.getElementById('productQuantity').value);
  const description = document.getElementById('productDescription').value.trim();

  // kiem tra du lieu dau vao
  if (!name || !category || isNaN(price) || isNaN(quantity)) {
    alert('Vui lòng điền đầy đủ các trường bắt buộc!');
    return;
  }
  
  if (price < 0) {
    alert('Giá sản phẩm phải lớn hơn hoặc bằng 0!');
    return;
  }

  if (quantity < 0) {
    alert('Số lượng sản phẩm phải lớn hơn hoặc bằng 0!');
    return;
  }

  if (currentEditId) {
    // cap nhat 
    const index = products.findIndex(p => p.id === currentEditId);
    if (index !== -1) {
      products[index] = {
        id: currentEditId,
        name,
        category,
        price,
        quantity,
        description
      };
    }
  } else {
    // them san pham moi
    const newProduct = {
      id: getNextId(),
      name,
      category,
      price,
      quantity,
      description
    };
    products.push(newProduct);
  }

  saveData();
  renderTable();
  resetForm();
}

// sua san pham
window.editProduct = function(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  currentEditId = id;
  
  // dien thong tin vao form
  document.getElementById('productName').value = product.name;
  document.getElementById('productCategory').value = product.category;
  document.getElementById('productPrice').value = product.price;
  document.getElementById('productQuantity').value = product.quantity;
  document.getElementById('productDescription').value = product.description;

  // thay doi giao dien
  formTitle.textContent = 'Chỉnh Sửa Sản Phẩm';
  submitBtn.innerHTML = '💾 Cập Nhật';
  cancelBtn.style.display = 'inline-block';
  
  // cuon toi form
  form.scrollIntoView({ behavior: 'smooth' });
}

// xoa san pham
window.deleteProduct = function(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  if (confirm(`Bạn có chắc chắn muốn xóa sản phẩm "${product.name}"?`)) {
    products = products.filter(p => p.id !== id);
    saveData();
    renderTable();
    
    // lam moi form neu dang sua san pham bi xoa
    if (currentEditId === id) {
      resetForm();
    }
  }
}

// xoa tat ca san pham
function handleDeleteAll() {
  if (products.length === 0) return;
  
  if (confirm('CẢNH BÁO: BẠN CÓ CHẮC CHẮN MUỐN XÓA TẤT CẢ SẢN PHẨM?\\nHành động này không thể hoàn tác!')) {
    products = [];
    currentEditId = null;
    saveData();
    renderTable();
    resetForm();
  }
}

// lam moi form
function resetForm() {
  form.reset();
  currentEditId = null;
  formTitle.textContent = 'Thêm Sản Phẩm Mới';
  submitBtn.innerHTML = '➕ Thêm Sản Phẩm';
  cancelBtn.style.display = 'none';
}

// khoi dong ung dung
init();
