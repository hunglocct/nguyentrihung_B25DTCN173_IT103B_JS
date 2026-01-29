let book = prompt("Nhap ten sach");
let author = prompt("Nhap tac gia");
let dateBook = prompt("Nhap NXB");
let yearBook = new Date() .getFullYear() - +dateBook;
if (yearBook<=5) {
    console.log("sach new");
    
} else {
    console.log("Sach old");
    
}
