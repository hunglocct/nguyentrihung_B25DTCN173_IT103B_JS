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


let choice, bookId = [], i = 0, countBook = 0, countKh = 0, countNt = 0;
if (flag)
    do {
        choice = +prompt(`
    HỆ THỐNG QUẢN LÍ SÁCH
    1. Phân loại mã số sách
    2. Thiết kế bản đồ kho sách
    3. Dự toán phí bảo trì sách theo năm
    4. Tìm mã số sách may mắn
    5. Thoát chương trình
    `);
        switch (choice) {
            case 1:
                do {

                    let input = prompt("Nhập id sách");
                    if (input != 0) {
                        bookId[i] = input;
                        countBook++;
                    }
                    i++;
                    if (input == 0) {
                        alert("Thoát!");
                        break;
                    }

                } while (1)
                for (let index = 0; index <= i; index++) {

                    if (bookId[index] % 2 == 0) {
                        console.log("stt", index, "id", bookId[index], "Sách khoa học");
                        countKh++;
                    } else if (bookId[index] % 2 == 1) {
                        console.log("stt", index, "id", bookId[index], "Sách nghệ thuật.");
                        countNt++;
                    }

                }
                alert(`Tổng sách nhập vào: ${countBook}
Số lượng sách khoa học: ${countKh}
Số lượng sách nghệ thuật: ${countNt}
            
            `)




                break;
            case 2:
                ix = prompt("Nhập số hàng");
                indexx = prompt("nhập số cột");
                for (let i = 1; i <= ix; i++) {
                    let row = "";

                    for (let index = 1; index <= indexx; index++) {

                        if (i == index) {
                            row += `[${i}-${index}](Vị trí ưu tiên)`

                        } else {
                            row += `[${i}-${index}]`
                        }
                    }
                    console.log(row);
                }






                break;
            case 3:
                let quatyBook = +prompt("nhập số lượng sách");
                let maintenance = +prompt("Nhập phí bảo trì mỗi quyển");
                let year = +prompt("nhập năm");
                let total = 0;
                let price = maintenance;

                for (let i = 1; i <= year; i++) {
                    total += quatyBook * price;
                    price *= 1.1;
                }
                alert(`Tổng chi phí bảo trì: ${total}`);
                console.log("Tổng chi phí bảo trì:", total);
                break;
            case 4: 
                let n = prompt("Nhập n bất kì:");
                for (let index = 1; index <= n; index++) {
                    if (index%3==0&&index%5!=0) {
                       console.log(index,"Lucky Code Discovery");
                        
                    } 
                    
                }
            default:
                break;
        }
    } while (choice != 5) {

}
