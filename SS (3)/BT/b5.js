let name = [], idBook = [], nameBook = [], wait = [], prioritize = [], i, choice = "0", condition = 0, count = 0;
do {
    name[i] = prompt("Tên bạn đọc");
    idBook[i] = prompt("Id sach muốn đặt");
    nameBook[i] = prompt("Tên sách muốn đặt");

    wait[i] = +prompt("Số ngày chờ dự kiến");
    if (wait <= 0) {
        wait[i] = +prompt("Số ngày chờ dự kiến");
    }
    prioritize[i] = +prompt("ưu tiên 1 = Sinh viên bình thường ;2 = Giảng viên/Nghiên cứu sinh ;3 = Nhân viên thư viện / Đặc cách");

    console.log("tên bạn đọc: ", name[i]);
    console.log("id sách", idBook[i]);
    console.log("tên sách: ", nameBook[i]);
    console.log("Kết quả đặt");


    if (wait >= 45 && (prioritize == 1 || prioritize == 2)) {


        console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
        count++;
    } else if (prioritize == 3) {
        console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");

    } else if (prioritize == 2 && wait <= 30) {
        console.log("ĐĐặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
    }
    else if (prioritize == 1 && wait <= 21) {
        console.log("Đặt trước thành công");
    } else {
        console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
        count++;
    }
    choice = prompt("Bạn có muốn tiếp tục 0 để thoát");
    i++;
} while (choice != "0");
console.log("Từ chối:", count, "lần");
