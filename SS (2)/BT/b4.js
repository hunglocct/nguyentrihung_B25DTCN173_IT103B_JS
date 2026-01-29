let nameBook = prompt("Tên sách");
let name = prompt("Ten người mượn");
let love = prompt("Mức độ yêu thích")
if (love >= 4&& love <= 5) {
    console.log(name,"sách của bạn yêu thích là" ,nameBook, "có thể mượn");
    
} else if (love== 3){
    console.log(name,"sách của thấy khá ổn là" ,nameBook, "có thể mượn");
    
} else if (love >= 1 && love <= 2){
    console.log(name,"Sách này bạn có thể cân nhắc mượn lại sau" ,nameBook);
} else{
    console.log("Lỗi");
}