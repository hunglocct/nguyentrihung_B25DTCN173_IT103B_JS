let names = [
    "iPhone 17 Pro Max",
    "Samsung Galaxy S26 Ultra",
    "Xiaomi 17",
    "Oppo Find X9 Pro",
    "Vivo X100 Pro",
    "Realme GT5",
    "Google Pixel 10 Pro XL"
];

let prices = [
    3499,
    3199,
    2299,
    2599,
    2399,
    399,
    2699
];

let stocks = [
    10,
    15,
    0,
    8,
    12,
    18,
    6
];
/// case 1
function flagship(params) {
    let expensive = names.filter((name, index) => prices[index] > 500)
    console.log("flagship", expensive);
    alert(`flagship ${expensive}`)
}
///c case 2
function status(params) {
    let over = names.filter((names, index) => stocks[index] == 0)
    console.log("sp het hang", over);
    let price = prices.every((price, index) => prices[index] > 100)
    console.log("Luoon lon hon 100", price);
    alert(`San phan het hang: ${over}
gia tien sp lon hon 100: ${price}`)
}
//case 3
function asset(params) {
    let assets = []
    for (let i = 0; i < prices.length; i++) {
        assets[i] = prices[i] * stocks[i]
    }
    let sum = assets.reduce((total, value) => total + value, 0)
    console.log("tong tai san", sum);
    alert(`Tong tai san von hoa: ${sum}`)
}

/// case 4
function discount(params) {
    for (let i = 0; i < prices.length; i++) {
        prices[i] = prices[i] * 0.9

    }
    alert(`sau khi giam 10%: ${prices}`)
    console.log("sau khi gian 10%", prices);
}


/// case 5
function seach(params) {
    let keyword = prompt("nhap tu khoa tim kiem:");

    let result = names.findIndex(name =>
        name.toLowerCase().includes(keyword.toLowerCase())
    );
    console.log(result);
    if (result < 0) {
        console.log("Khong tim thay");
        alert("Khong tim thay")
    } else {

        alert(`${names[result]} - Gia: ${prices[result]} Sl con lai: ${stocks[result]} `)
    }
}
/// case 6
function condition() {
    let inspection = []
    for (let i = 0; i < stocks.length; i++) {
        if (stocks[i] == 0) {
            inspection[i] = `Ten san pham: ${names[i]} tinh trang: het hang`
        } else {
            inspection[i] = `Ten san pham: ${names[i]} tinh trang: con hang`
        }
    }
    console.log(inspection);
    alert(`Danh sach: ${inspection}`)
}
let choose
do {
    choose = +prompt(`1: Lọc danh mục sản phẩm cao cấp
2: Kiểm định trạng thái dữ liệu
3: Phân tích giá trị vốn hóa
4: Triển khai chiến dịch chiết khấu
5: Truy vấn sản phẩm theo từ khóa
6: Báo cáo tình trạng tồn kho
7: Thoat
`)
    switch (choose) {
        case 1:
            flagship();
            break;
        case 2:
            status()
            break;
        case 3:
            asset()
            break;
        case 4:
            discount()
            break;
        case 5:
            seach();
            break;
        case 6:
            condition();
            break;
        case 7:
            alert(`Thoat`)

            break;
        default:
            alert(`Nhap sai`)
            break;
 
 
 
        }
} while (choose != 7);


