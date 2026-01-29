let book = prompt("Nhap ten sach");
let status = prompt("Trang thais sachs");
let year = prompt("NXB sach");
let date = new Date() .getFullYear() - year;
if (date <= 5) {
    if(status != "muon"){
        console.log("Sách này mới và có sẵn để mượn");
    }else{
        console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
         
    }
    
    
}else{
   if(status != "muon"){
        console.log("Sách này đã mượn và khá cũ");
    }else{
       console.log("Sách này có sẵn nhưng đã lâu năm");
    } 
}