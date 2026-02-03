let booksID = [], booksName = [], inventoryQuantity = [], booksCategory = []
let sl = +prompt("Co bao nhêu cuốn sách cần kiểm tra")
for (let index = 0; index < sl; index++) {

    let input = prompt("Nhập id cuốn sách");


    while (booksID.indexOf(input) != -1) {
        input = prompt("Nhập lại id cuốn sách");

    }

    booksID[index] = input

    input = prompt("Nhập tên cuốn sách");
    while (input == "") {
        input = prompt("Nhập lại tên cuốn sách");
    }
    booksName[index] = input

    input = prompt("Nhập các thể loại của sách");
    while (input == "") {
        input = prompt("Nhập lại TAG cuốn sách");
    }
    booksCategory[index] = input
    input = +prompt("Nhập Sl cuốn sách");
    while (input <= 0) {
        input = +prompt("Nhập lại Sl cuốn sách");

    }
    inventoryQuantity[index] = input;
    alert("Nhập thành công");


}
let count = 0, duo = [], min = 0
for (let index = 0; index < booksID.length; index++) {
    if (booksCategory[index].toLowerCase().includes(("lập trình")) == true) {
        count++
    }
    if (booksCategory[index].toLowerCase().includes("javascript") && booksCategory[index].toLowerCase().includes("web")) {
        duo.push(booksID[index])
    }

    if (inventoryQuantity[min] > inventoryQuantity[index]) {
        min = index
    }
}
console.log("sách lập trình", count);
console.log("Sách có cả js và web");
console.log(duo);
console.log("ID sách ít nhất", min);
console.log(`mã sách ${booksID[min]} tên sách: ${booksName[min]} thể loại ${booksCategory[min]} sl ${inventoryQuantity[min]}`);








