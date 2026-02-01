let password = "";
password = prompt ("mời nhập mật khẩu"); // mật khẩu đung admin123
let count = 0;
let flag = true;
while (password != "admin123")
if (count == 2) {
flag = false;
break;

count++; // 2
password = prompt ("mật khẩu chưa đúng nhập lại");
}
// nếu đăng nhập đúng thì cho chọn chức năng
// nếu đăng nhập sai thì hiển thị thông báo
if (flag)
let choose;
let sum = 0; // tổng tiền của các cuốn sách
console. log("chào admin cho chọn chức năng");
let number_book = +prompt ("bạn muốn nhập bao nhiêu cuốn sách");
for (let i = 0; i < number_book; i++) {
let price_book = +prompt( "nhập giá tiền quyển sách thứ: ${i +1}" );
if (price_book <= 0) {
continue;
}
sum += price_book;

}else {
console. log("đăng nhập quá số lần");
}