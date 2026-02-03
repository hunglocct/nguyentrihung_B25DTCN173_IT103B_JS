let booksID = [], booksName = [], bookStatus = []
let sl = +prompt("Co bao nhêu cuốn sách cần kiểm tra")
for (let index = 0; index < sl; index++) {
    booksID[index] = prompt("Nhập id cuốn sách");
    booksName[index] = prompt("Nhập tên cuốn sách");
    let choice = +prompt("Nhập tình trạng 1-3");
    switch (choice) {
        case 1:
            bookStatus[index] = "Hỏng nhẹ"
            break;
        case 2:
            bookStatus[index] = "Hỏng nặng"
            break;
        case 3:
            bookStatus[index] = "Cần sửa gấp"
            break;
        default:
            break;
    }
    alert("Nhập thành công");


}
console.log("Số loại sách còn lại:", booksID.length);
let count = 0, bo = 0;
for (let index = 0; index < booksID.length; index++) {
    let printf = `Mã: ${booksID[index]} - Tên: ${booksName[index]} -  ${bookStatus[index]}`
    console.log(printf);
}
let choic;
do {
    choic = +prompt(`1: Sửa tình trạng một cuốn sách
2: Loại bỏ (xóa) một cuốn sách khỏi danh sách
0: Kết thúc và in báo cáo cuối`);
    switch (choic) {
        case 1:
            let text = prompt("Nhập id cần sửa");
            let tt = booksID.indexOf(text)
            if (tt < 0) {
                alert("Không tìm thấy")
            } else {
                count++;
                text = +prompt("Nhập tình trang mới 1-5");
                switch (text) {
                    case 1:
                        bookStatus[tt] = "Hỏng nhẹ"
                        break;

                    case 2:
                        bookStatus[tt] = "Hỏng nặng"
                        break;
                    case 3:
                        bookStatus[tt] = "Cần sửa gấp"
                        break;
                    case 4:
                        bookStatus[tt] = "Đã sửa xong"
                        break;
                    case 5:
                        booksID.splice(tt, 1);
                        booksName.splice(tt, 1);
                        bookStatus.splice(tt, 1);
                        bo++;
                        break;

                    default:
                        break;
                }
                for (let index = 0; index < booksID.length; index++) {
                    let printf = `Mã: ${booksID[index]} - Tên: ${booksName[index]} -  ${bookStatus[index]}`
                    console.log(printf);
                }
            }
            break;
        case 2:
            let tex = prompt("Nhập id cần sửa");
            let ta = booksID.indexOf(tex)
            if (ta < 0) {
                alert("Không tìm thấy")
            } else {
                bo++;
                booksID.splice(ta, 1);
                booksName.splice(ta, 1);
                bookStatus.splice(ta, 1);
            }
            for (let index = 0; index < booksID.length; index++) {
                let printf = `Mã: ${booksID[index]} - Tên: ${booksName[index]} -  ${bookStatus[index]}`
                console.log(printf);
            }
            break;
        default:
            break;
    }
} while (choic != 0);

console.log("Số loại sách còn lại:", booksID.length);
console.log("Sô sách đã sửa:", count);
console.log("Số sách đã xoá", bo);
if (booksID.length > 0) {
    for (let index = 0; index < booksID.length; index++) {
        let printf = `Mã: ${booksID[index]} - Tên: ${booksName[index]} -  ${bookStatus[index]}`
        console.log(printf);
    }
}

