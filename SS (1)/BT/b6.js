let book = prompt("nhập tên sách").trim();
let BOOK = book.toUpperCase();
let order = prompt("nhập stt");
let id = BOOK + "_" + order;

console.log("tên sách:",book);
console.log("ID: ", id);


