let playerList = [];
let goalList = [];
let choice;

do {
    choice = +prompt(`1. Nhập cầu thủ mới
2. Xem danh sách đội hình
3. Xem thành tích toàn đội
4. Tìm vua phá lưới
0. Thoát`);

    switch (choice) {
        case 0:
            alert("Thoát");
            break;

        case 1:
            let name = prompt("Mời nhập tên cầu thủ");
            let goal = +prompt("Nhập số bàn thắng");
            addPlayer(name, goal);
            break;

        case 2:
            showSquad();
            break;

        case 3:
            alert("Tổng số bàn thắng: " + getTotalGoals());
            break;

        case 4:
            findTopScorer();
            break;

        default:
            alert("Nhập sai");
    }
} while (choice != 0);

function addPlayer(name, goal) {
    playerList.push(name);
    goalList.push(goal);
    alert(`Thêm cầu thủ ${name} thành công`);
}

function showSquad() {
    if (playerList.length === 0) {
        alert("Chưa có cầu thủ nào");
        return;
    }

    let output = "";
    for (let i = 0; i < playerList.length; i++) {
        output += `${i + 1}. ${playerList[i]} - ${goalList[i]} bàn\n`;
    }
    alert(output);
}

function getTotalGoals() {
    let sum = 0;
    for (let i = 0; i < goalList.length; i++) {
        sum += goalList[i];
    }
    return sum;
}

function findTopScorer() {
    if (goalList.length === 0) {
        alert("Chưa có dữ liệu");
        return;
    }

    let max = goalList[0];
    let index = 0;

    for (let i = 1; i < goalList.length; i++) {
        if (goalList[i] > max) {
            max = goalList[i];
            index = i;
        }
    }

    alert(`Vua phá lưới: ${playerList[index]} (${max} bàn)`);
}
