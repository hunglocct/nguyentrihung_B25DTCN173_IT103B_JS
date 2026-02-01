let ten = [], mathe = [], loai = [], mucdo = [], nd = [];
let i = 0;
let chon = "co";
let tong = 0, nang = 0, tb = 0, nhe = 0, dexuat = 0, tot = 0;

do {
    chon = prompt("Co khieu nai/phan hoi moi khong? (co/khong)");
    if (chon == "khong") break;

    ten[i] = prompt("Ten ban doc");
    while (ten[i] == "") {
        ten[i] = prompt("Ten ban doc");
    }

    mathe[i] = prompt("Ma the ban doc");

    loai[i] = +prompt("Loai: 1 khieu nai, 2 de xuat, 3 tich cuc");

    if (loai[i] == 1) {
        mucdo[i] = +prompt("Muc do: 1 nhe, 2 trung binh, 3 nghiem trong");
    } else {
        mucdo[i] = 0;
    }

    nd[i] = prompt("Noi dung");

    if (loai[i] == 1 && mucdo[i] == 3) {
        console.log("→ Chuyen ngay lanh dao - Khieu nai nghiem trong");
        nang++;
    } else if (loai[i] == 1 && mucdo[i] == 2) {
        console.log("→ Xu ly trong ngay - Khieu nai trung binh");
        tb++;
    } else if (loai[i] == 1 && mucdo[i] == 1) {
        console.log("→ Xu ly tai quay - Khieu nai nhe");
        nhe++;
    } else if (loai[i] == 2) {
        console.log("→ Da ghi nhan de xuat");
        dexuat++;
    } else if (loai[i] == 3) {
        console.log("→ Cam on phan hoi tich cuc");
        tot++;
    }

    tong++;
    i++;

} while (chon != "khong");

console.log("Tong:", tong);
console.log("Nghiem trong:", nang);
console.log("Trung binh:", tb);
console.log("Nhe:", nhe);
console.log("De xuat:", dexuat);
console.log("Tich cuc:", tot);
