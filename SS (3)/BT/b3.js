
let time = prompt("Có yêu cầu gia hạn mới không?");
let flag = 0, flag1 = 0;
if (time != "khong") {
    flag = 1;
}
let name = [];
let nameBook = [];
let day = [];
let day1 = [];
let dk = "khong";
let i = 0;
if (flag == 1) {
    do {
        name[i] = prompt("Nhap ten nguoi tra", i);
        nameBook[i] = prompt("Nhap ten sach tra", i);
        day[i] = +prompt("nhap so ngay muon sach", i);
        dk = +prompt("Có muốn mượn tiếp không")

    } while (dk == "khong")

    for (let i = 0; i < 1; i++) {
        if (day[i] <= 44) {
            console.log("tên nguoi muon", name[i]);
            console.log("ten sach", nameBook[i]);
            console.log("so ngay muon", day[i], "Gia hạn bình thường");
            flag1 = 1;
        } else if (day[i] > 45 && day[i] < 60) {
            console.log("tên nguoi muon", name[i]);
            console.log("ten sach", nameBook[i]);
            console.log("so ngay muon", day[i], "Không được gia hạn (quá hạn lâu)");
            flag1 = 1;


        } else if (day[i] >= 60) {
            console.log("tên nguoi muon", name[i]);
            console.log("ten sach", nameBook[i]);
            console.log("so ngay muon", day[i], "Không được phép gia hạn");

        }
    }
    if (flag1 == 1) {
        day1[0] = +prompt("Nhập số ngày gia hạn");

        console.log("số ngay gia hạn", day1[0]);
        day[0] = day[0] + day1[0];
        console.log("Tổng số ngay mượn", day[0]);

    }





}






