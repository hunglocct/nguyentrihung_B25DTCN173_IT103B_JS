let book = []
let sl = +prompt("Ban muon tra bao nhieu cuon sach")
for (let index = 0; index < sl; index++) {
    book[index]= prompt("Nhập tên cuốn sách");
    alert("Nhập thành công");

    
}
console.log("Tổng số sách",book.length);

for (let index = 0; index < book.length; index++) {
    console.log(index+1,book[index]);
    
    
}