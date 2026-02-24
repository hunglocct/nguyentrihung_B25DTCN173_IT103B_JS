const squad = [

    ["Nguyen Van A", 10, "FW"],

    ["Tran Van B", 5, "MF"],

    ["Le Van C", 2, "DF"],

    ["Pham Van D", 12, "FW"],

    ["Hoang Van E", 0, "GK"],

    ["Dang Van F", 7, "MF"]

];
let choose;
do {
    choose = +prompt(`nhập lựa chọn:
1: Xem danh sach
2: Tìm kiếm
3: Lọc vị trí
4: Tổng bàn thắng
5: Kiểm tra hiệu suất
0: thoát chương trình `);

    switch (choose) {
        case 0:
            consore.log("thoat chương trinh")

            break;

        case 1:
            console.log("xem danh sách cầu thủ");
            show();
            break;
        default:
            break;
    }
} while (choose != 0);

function show() {
    squad.forEach((value, index) => {
        console.log(`tên cầu thủ: ${value[0]} vị trí : ${value[2]} bàn thắng:
${value[1]} `);
    });
}

function seach() {
    let 
}