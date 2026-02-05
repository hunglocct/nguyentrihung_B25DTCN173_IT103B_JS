let choice;
let log;
let pas, count = 0, flag = false;

do {
    log = prompt("Nhập tài khoản");
    pas = prompt("Nhập mật khẩu");
    count++;

    if (log === "admin" && pas === "12345") {
        alert("Đăng nhập thành công");
        flag = true;
        break;
    }
    else if (log !== "admin" && pas !== "12345") {
        alert("Sai tài khoản và mật khẩu");
    }
    else if (log !== "admin") {
        alert("Sai tài khoản");
    }
    else {
        alert("Sai mật khẩu");
    }

    if (count >= 2) {
        alert("Bạn đã nhập quá số lần");
        break;
    }


} while (true);

let text, books = []
if (flag == true) {
    do {
        choice = +prompt(`=== QUẢN LÝ THƯ VIỆN ===
1. Nhập thêm lô sách mới
2. Hiển thị danh sách sách
3. Tìm kiếm sách
4. Cập nhật tên sách
5. Đảo ngược thứ tự kệ sách
6. Nhập kho từ nguồn khác
7. Thoát chương trình
Mời bạn chọn chức năng (1-7):
`);
        switch (choice) {
            case 1:
                text = prompt("Nhâp Sl lớn sách cách nhau dấu ,")
                books.push(...text.split(","));
                for (let index = 0; index < books.length; index++) {
                   books[index] = books[index].trim()
                   if (books[index]=="") {
                    books.splice(index,1)
                    index--
                   }

                }
                alert(`Số lượng sách thực tế đã được thêm vào kho ${books.length}`);
                console.log(`Số lượng sách thực tế đã được thêm vào kho ${books.length}`);

                break;
            case 2:
                alert("Danh sách đã được in ra trong log")
                console.log("--- DANH SÁCH SÁCH HIỆN CÓ ---");
                alert(`Tất cả tên sách ${books}`)
                for (let index = 0; index < books.length; index++) {
                    console.log(`${index}. ${books[index]}`);
                }
                break;
            case 3:
                text = prompt("Nhập tên sách muốn tìm");
                if (books.indexOf(text) == -1) {
                    alert("Sách không có trong mảng")
                    console.log("Sách không có trong mảng");

                } else {
                    console.log("Tìm thấy sách", text, "tại vị trí", books.indexOf(text));
                    alert(`Tìm thấy sách ${text} tại vị trí ${books.indexOf(text)}`)
                }
                break;
            case 4:
                text = prompt("Nhập tên sách muốn Sửa");
                if (books.indexOf(text) == -1) {
                    alert("Sách không có trong mảng")
                    console.log("Sách không có trong mảng");

                } else {
                    let vt = books.indexOf(text)
                    console.log("Tìm thấy sách", text, "tại vị trí", books.indexOf(text));
                    alert(`Tìm thấy sách ${text} tại vị trí ${vt}`)
                    text = prompt("Nhập tên sách mới");
                    books[vt] = text;
                    alert(`Đã sửa tên sách thành ${books[vt]}`)

                }
                break;
            case 5:
                books.reverse()
                for (let index = 0; index < books.length; index++) {
                    console.log(`${index}. ${books[index]}`);
                }
                alert("đảo ngược thành cong")
                alert(`Tất cả tên sách ${books}`)
                break;
            case 6:
                let book = ["Sách Kỹ Năng", "Truyện Tranh"]
                books = books.concat(book);
                for (let index = 0; index < books.length; index++) {
                    console.log(`${index}. ${books[index]}`);
                }
                alert("đã nhập từ nguồn khác")
                alert(`Tất cả tên sách ${books}`)
                break;
            case 7:
                break;
            default:
                alert("NNhập saiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
                break;
        }

    } while (choice != 7);
}
alert("Hẹn gặp lại!")