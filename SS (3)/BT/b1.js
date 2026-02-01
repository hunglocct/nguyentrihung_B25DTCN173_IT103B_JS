let time = +prompt("Nhập số lần mượn sách");
let name = [];
let nameBook = [];
let day = [];
for (let i = 0; i < time; i++) {
    name[i] = prompt("Nhap ten nguoi muon", i);
    nameBook[i] = prompt("Nhap ten sach muon", i);
    day[i] = +prompt("nhap so ngay muon muon", i);


}
for (let i = 0; i < time; i++) {
    console.log("tên nguoi muon", name[i]);
    console.log("ten sach", nameBook[i]);
    console.log("so ngay muon", day[i]);

}