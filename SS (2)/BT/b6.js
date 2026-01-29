let book = prompt("nhập tên sách");
let name = prompt("nhập tên người mượn");
let card = prompt("cos the khong")
let status = prompt("trang thai");
let date = prompt("so ngay muon");

if (status != "da muon"&& card == "co") {
    console.log("Chúc mừng, bạn có thể mượn sách này");
    
} else if(status == "da muon" && card == "co"){
    console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
    
} else if(status == "da muon" && card != "co") {
    console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    
} else if(status != "da muon" && card != "co"){
    console.log(status = "da muon" && card == "co");
    
} else{
    console.log("nhap sai");
    
}
