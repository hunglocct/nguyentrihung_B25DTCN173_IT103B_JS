let book = []
let sl = +prompt("Co bao nhêu cuốn sách trả muộn")
for (let index = 0; index < sl; index++) {
    book[index]= prompt("Nhập tên cuốn sách");
    alert("Nhập thành công");

    
}
console.log("Tổng số sách trả muộn",book.length);
let count=0;
for (let index = 0; index < book.length; index++) {
    console.log(index+1,book[index]);
    if (book[index].length>=20) {
        count++;
        
    }
    
}
console.log("Số lượng sách có tên dài hơn 20 ký tự",count);
