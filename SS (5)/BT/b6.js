let readerCardIds = [], readerNames = [], borrowedBookCodes = [], overdueDays = []

let n = +prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?");

for (let i = 0; i < n; i++) {
    let input = prompt("Nhập mã thẻ bạn đọc")
    while (readerCardIds.indexOf(input) != -1 || input == "") {
        input = prompt("Nhập lại mã thẻ bạn đọc")
    }
    readerCardIds[i] = input

    input = prompt("Nhập tên bạn đọc")
    while (input == "") {
        input = prompt("Nhập lại tên bạn đọc")
    }
    readerNames[i] = input

    input = prompt("Nhập mã sách đang mượn (cách nhau bởi dấu phẩy)")
    while (input == "") {
        input = prompt("Nhập lại mã sách đang mượn")
    }
    borrowedBookCodes[i] = input

    input = +prompt("Nhập số ngày quá hạn")
    while (input < 0) {
        input = +prompt("Nhập lại số ngày quá hạn")
    }
    overdueDays[i] = input
}

console.log(`Danh sách bạn đọc quá hạn (${readerCardIds.length} người):`)

for (let i = 0; i < readerCardIds.length; i++) {
    console.log(
        `${i + 1}. Mã thẻ: ${readerCardIds[i]}  tên: ${readerNames[i]}  Sách đang mượn: ${borrowedBookCodes[i]}  quá hạn: ${overdueDays[i]} ngày`
    )
}

let count10 = 0
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 10) {
        count10++
    }
}


console.log(`Tổng số bạn đọc quá hạn ≥ 10 ngày: ${count10} người`);


let jsPyt = []
for (let i = 0; i < borrowedBookCodes.length; i++) {
    let code = borrowedBookCodes[i].toUpperCase()
    if (code.includes("JS") && code.includes("PYT")) {
        jsPyt.push(readerCardIds[i])
    }
}

console.log(`Các bạn đọc đang mượn cả sách JS* và PYT*: ${jsPyt.join(", ")}`);


let max = 0
for (let i = 1; i < overdueDays.length; i++) {
    if (overdueDays[i] > overdueDays[max]) {
        max = i
    }
}

console.log(`Bạn đọc có số ngày quá hạn cao nhất: ${readerNames[max]} (${overdueDays[max]} ngày)`);


let count7 = 0
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 7) {
        count7++
    }
}

if (count7 == 0) {
    console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (count7 <= 4) {
    console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
    console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}
