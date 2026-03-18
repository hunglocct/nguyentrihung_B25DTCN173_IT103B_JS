// 1. Dữ liệu mảng products cố định
const products = [
  {
    id: 1,
    name: "Tai nghe Bluetooth TWS",
    price: 320000,
    image: "https://picsum.photos/seed/mp19-tws/1200/800",
    description: "Chống ồn nhẹ, pin 20h, kết nối ổn định."
  },
  {
    id: 2,
    name: "Bàn phím cơ 87 phím",
    price: 790000,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=60",
    description: "Switch blue, led trắng, gõ sướng tay."
  },
  {
    id: 3,
    name: "Chuột không dây công thái học",
    price: 450000,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=60",
    description: "Thiết kế ergonomic, sạc USB-C."
  },
  {
    id: 4,
    name: "USB 64GB",
    price: 120000,
    image: "https://picsum.photos/seed/mp19-usb/1200/800",
    description: "Nhỏ gọn, tốc độ đọc/ghi ổn định."
  },
  {
    id: 5,
    name: "Đế tản nhiệt laptop",
    price: 210000,
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=60",
    description: "2 quạt gió, đỡ mỏi cổ tay."
  },
  {
    id: 6,
    name: "Cáp sạc Type-C 1m",
    price: 80000,
    image: "https://picsum.photos/seed/mp19-cable/1200/800",
    description: "Bọc dù, hỗ trợ sạc nhanh."
  }
];

// 2. State cho Giỏ hàng
let cart = [];

// 3. Helper Functions
const formatCurrency = (amount) => {
  return amount.toLocaleString('vi-VN') + ' VNĐ';
};

// 4. LocalStorage
const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const loadCart = () => {
  try {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
    } else {
      cart = [];
    }
  } catch (error) {
    console.error("Lỗi khi parse cart từ localStorage, reset giỏ hàng:", error);
    cart = [];
    saveCart();
  }
};

// 5. Render Products
const renderProducts = () => {
  const productsGrid = document.getElementById('products-grid');
  const productCountBadge = document.getElementById('product-count-badge');
  const productsEmpty = document.getElementById('products-empty');

  productCountBadge.innerText = `${products.length} sản phẩm`;

  if (products.length === 0) {
    productsGrid.classList.add('hidden');
    productsEmpty.classList.remove('hidden');
    return;
  }

  productsGrid.classList.remove('hidden');
  productsEmpty.classList.add('hidden');

  productsGrid.innerHTML = products.map(product => `
    <article class="card">
      <div class="card-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <h3 class="card-title">${product.name}</h3>
        <p class="card-desc">${product.description}</p>
        <div class="card-footer">
          <div class="price">${formatCurrency(product.price)}</div>
          <button class="btn btn-primary" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
        </div>
      </div>
    </article>
  `).join('');
};

// 6. Action: Add to Cart
const addToCart = (productId) => {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
  }
  
  saveCart();
  updateCartUI();
};

// Action: Update Quantity
const updateQuantity = (productId, delta) => {
  const itemIndex = cart.findIndex(item => item.productId === productId);
  if (itemIndex > -1) {
    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
    saveCart();
    updateCartUI();
  }
};

// Action: Remove Item
const removeFromCart = (productId) => {
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")) {
    cart = cart.filter(item => item.productId !== productId);
    saveCart();
    updateCartUI();
  }
};

// Action: Clear Cart
const clearCart = () => {
  if (cart.length === 0) return;
  if (confirm("Bạn có chắc chắn muốn xóa TOÀN BỘ giỏ hàng? Hành động này không thể hoàn tác.")) {
    cart = [];
    saveCart();
    updateCartUI();
  }
};

// 7. Render Cart and Stats
const renderCart = () => {
  const cartTbody = document.getElementById('cart-tbody');
  const cartEmpty = document.getElementById('cart-empty');
  const tableWrap = document.querySelector('.table-wrap');

  if (cart.length === 0) {
    tableWrap.classList.add('hidden');
    cartEmpty.classList.remove('hidden');
    cartTbody.innerHTML = '';
  } else {
    tableWrap.classList.remove('hidden');
    cartEmpty.classList.add('hidden');
    
    cartTbody.innerHTML = cart.map(item => `
      <tr>
        <td>${item.name}</td>
        <td class="right">${formatCurrency(item.price)}</td>
        <td class="center">
          <div class="qty-controls">
            <button class="btn btn-icon btn-ghost" onclick="updateQuantity(${item.productId}, -1)">-</button>
            <span class="qty">${item.quantity}</span>
            <button class="btn btn-icon btn-ghost" onclick="updateQuantity(${item.productId}, 1)">+</button>
          </div>
        </td>
        <td class="right">${formatCurrency(item.price * item.quantity)}</td>
        <td class="center">
          <button class="btn btn-danger btn-icon" style="padding: 0 10px;" onclick="removeFromCart(${item.productId})">Xóa</button>
        </td>
      </tr>
    `).join('');
  }
};

const renderStats = () => {
  const statLines = document.getElementById('stat-lines');
  const statQty = document.getElementById('stat-qty');
  const statTotal = document.getElementById('stat-total');
  
  const cartLinesBadge = document.getElementById('cart-lines-badge');
  const cartQtyBadge = document.getElementById('cart-qty-badge');

  const totalLines = cart.length;
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  statLines.innerText = totalLines;
  statQty.innerText = totalQty;
  statTotal.innerText = formatCurrency(totalPrice);

  cartLinesBadge.innerText = `${totalLines} dòng`;
  cartQtyBadge.innerText = `${totalQty} món`;
};

const updateCartUI = () => {
  renderCart();
  renderStats();
};

// 8. Event Listeners Setup
const setupEventListeners = () => {
  document.getElementById('clear-cart-btn').addEventListener('click', clearCart);
};

// 9. Init Application
const initApp = () => {
  loadCart();
  renderProducts();
  updateCartUI();
  setupEventListeners();
};

// Chạy khởi tạo khi tải xong mô hình DOM
document.addEventListener('DOMContentLoaded', initApp);
