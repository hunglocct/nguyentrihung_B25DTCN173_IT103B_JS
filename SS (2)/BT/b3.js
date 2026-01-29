let name = prompt("Nhap ten sach");
let typeBook = prompt("The loai");
let conditionBook = prompt("Tinh trang sach");
switch (typeBook) {
    case "khoa hoc":
    case "lich su" :
        if (conditionBook == "con") {
            console.log(name,"Sách này có sẵn trong thư viện");
            
        } else if(conditionBook == "khong con"){
            console.log(name,"Sách đã được mượn");
        }
        break;
    case "van hoc":
    case "truyen" :
        console.log("Sách này có thể đọc giải trí");
        
    default:
        console.log("Nhap sai");
        
        break;
}