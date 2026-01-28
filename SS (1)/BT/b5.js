let book = prompt("Nhập tên sách");
let yearBook = Number(prompt("Nhập năm xuất bản")) ;
let year = new Date() .getFullYear() - yearBook;
console.log("tên sách:",book);
console.log("Tuổi sách",year);

