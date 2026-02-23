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



function findShortestPlayerName() {

    let shortestName = players[0].split("-")[1].trim();

    for (let i = 1; i < players.length; i++) {
        let name = players[i].split("-")[1].trim();

        if (name.length < shortestName.length) {
            shortestName = name;
        }
    }

    console.log("Tên ngắn nhất:", shortestName);
}

findShortestPlayerName();


function countPositionLongerThanName() {
    let count = 0;

    for (let i = 0; i < players.length; i++) {

        let parts = players[i].split("-");

        let name = parts[1].trim();
        let position = parts[2].trim();

        if (position.length > name.length) {
            count++;
        }
    }

    console.log("Số cầu thủ có vị trí dài hơn tên:", count);
}

countPositionLongerThanName();