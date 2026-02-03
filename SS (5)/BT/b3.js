let booksID = [],booksName=[],inventoryQuantity=[]
let sl = +prompt("Co bao nhêu cuốn sách cần kiểm tra")
for (let index = 0; index < sl; index++) {
    booksID[index]= prompt("Nhập id cuốn sách");
    booksName[index]= prompt("Nhập tên cuốn sách");
    inventoryQuantity[index]= prompt("Nhập Sl cuốn sách");
    alert("Nhập thành công");

    
}
console.log("Số loại sách cần bổ sung:",booksID.length);
let count=0,het=[];
for (let index = 0; index < booksID.length; index++) {
    let printf = `Mã: ${booksID[index]} - Tên: ${booksName[index]} - Sl: ${inventoryQuantity[index]} Bản`
    console.log(printf);
    if (inventoryQuantity[index]<=5) {
        count++
    }
    if (inventoryQuantity[index]==0) {
        het[index]= booksID[index];
    }
}
console.log("Số sách ít hơn 5 cuốn",count,"Bản");
console.log("CÁc mã sách hết hàng",het);

