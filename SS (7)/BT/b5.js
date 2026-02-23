let tm = 0, hv = 0, td = 0, tv = 0;

let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",

];
function display(params) {
    for (let index = 0; index < players.length; index++) {
        console.log("STT", index, players[index]);


    }
}
display();
function getAllPositions(params) {
    for (let i = 0; i < players.length; i++) {
        let vt = players[i].split("-").pop()
        switch (vt) {
            case "Thủ môn":
                tm++
                break;
            case "Hậu vệ":
                hv++
                break;
            case "Tiền vệ":
                tv++
                break;
            case "Tiền đạo":
                td++
                break;
            default:
                break;
        }
    }
    if (tm == 1) {
        console.log("thu mon", "duy nhat 1");
    }
    if (hv == 1) {
        console.log("Hậu vệ", "duy nhat 1");
    }
    if (tv == 1) {
        console.log("Tiền vệ", "duy nhat 1");
    }
    if (td == 1) {
        console.log("Tiền đạo", "duy nhat 1");
    }



}
function findPlayersWithLongestName() {
    let longestName = "";

    for (let i = 0; i < players.length; i++) {
        let name = players[i].split("-")[1].trim();

        if (name.length > longestName.length) {
            longestName = name;
        }
    }

    return longestName;
}

console.log("Tên dài nhất:", findPlayersWithLongestName());
function countPlayersStartingWithLetter(letter) {
    let count = 0;

    for (let i = 0; i < players.length; i++) {
        let name = players[i].split("-")[1].trim();

        if (name.toLowerCase().startsWith(letter.toLowerCase())) {
            count++;
        }
    }

    return count;
}

let inputLetter = prompt("Nhập chữ cái muốn tìm:");

console.log(
    "Số cầu thủ bắt đầu bằng chữ",
    inputLetter,
    ":",
    countPlayersStartingWithLetter(inputLetter)
);