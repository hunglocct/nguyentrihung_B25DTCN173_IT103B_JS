let time = +prompt("Nhập số lần trả sách");
let name = [];
let nameBook = [];
let day = [];
for (let i = 0; i < time; i++) {
    name[i] = prompt("Nhap ten nguoi tra", i);
    nameBook[i] = prompt("Nhap ten sach tra", i);
    day[i] = +prompt("nhap so ngay muon sach", i);


}
for (let i = 0; i < time; i++) {
    if (day[i] <= 14 && day[i] >= 1) {
        console.log("tên nguoi muon", name[i]);
        console.log("ten sach", nameBook[i]);
        console.log("so ngay muon", day[i], "tra dung han");

    } else if (day[i] >= 15 && day[i] < 21) {
        console.log("tên nguoi muon", name[i]);
        console.log("ten sach", nameBook[i]);
        console.log("so ngay muon", day[i], "Trả muộn nhẹ Phạt nhắc nhở");



    } else if (day[i] > 21) {
        console.log("tên nguoi muon", name[i]);
        console.log("ten sach", nameBook[i]);
        console.log("so ngay muon", day[i], "Quá hạn nghiêm trọng Cần ghi biên bản phạt");
    }
}