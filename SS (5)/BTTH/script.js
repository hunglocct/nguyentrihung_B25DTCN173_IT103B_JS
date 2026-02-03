let book = ["Yêu nhầm vợ bạn","Hoa sứ nhà nàng","Làm đĩ","Tình cha"], text;

do {
    choice = +prompt(`
--- THƯ VIỆN KHOA HỌC ---
1. Xem danh sách
2. Nhập sách mới
3. Mượn sách (Xóa)
4. Sửa tên sách
5. Sắp xếp kệ
0. Thoát
    `);
    switch (choice) {
        case 1:
            if (book.length == 0) {
                console.log("Chưa có sách");
                alert("Chưa có sách")
            }
            for (let index = 0; index < book.length; index++) {

                console.log(index + 1, book[index]);
            }
            break;
        case 2:
            text = prompt("Nhập tên sách")
            let tt = book.includes(text);
            if (tt != 0) {
                alert("Sách đã tồn tại")
            } else {
                book.unshift(text);
                alert("Thêm thành công")
            }

            break;
        case 3:
            text = prompt("Nhập tên sách muốn mượn");
            let ts = book.indexOf(text);
            if (+ts < 0) {
                alert("Sách không đã tồn tại")
            } else {
                alert(`Mượn thành công${book[ts]}`);
                book.splice(ts, 1);

            }
            break;
        case 4:
            text = prompt("Nhập tên sách muốn sửa");
            let ta = book.indexOf(text);
            if (+ta < 0) {
                alert("Sách không đã tồn tại")
            } else {
                text = prompt("Nhập tên sách mới");
                alert(`Sửa thành công${book[ta]}`);
                book.splice(ta, 1, text);

            }
            break;
        case 5:
            book.sort();
            alert("SẮp sép thành công");
            break;
        default:
            break;
    }

} while (choice != 0)