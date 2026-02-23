let player = [],sl,id=[],vt=[],ds=[];
function inplay() {
  sl =  +prompt("Nhập sl cầu thủ muốn thêm")
  for (let i = 0; i < sl; i++) {
    let nhap = prompt("nhập id")
    nhap = nhap.trim().toUpperCase();
    while (id.includes(nhap)) {
          nhap = prompt("nhập lai id")
          nhap = nhap.trim().toUpperCase();
    }
    
    id[i] = nhap;
    nhap=nhap.trim();
    nhap = prompt("Nhap ten cau thu")
    while (nhap=="") {
    nhap = prompt("Nhap ten cau thu")
    nhap=nhap.trim();
    }
    player[i] = nhap
    nhap = +prompt("1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo")
    switch (nhap) {
        case 1:
            vt[i] = "thur moon"
            break;
        case 2:
            vt[i] = "hau ve"
            break;
            case 3:
            vt[i] = "tien ve"
            break;
            case 4:
            vt[i] = "tien dao"
            break;
        default:

            break;
    }
   ds[i] = `${id[i]} - ${player[i]} - ${vt[i]}`;
  }
}
inplay();
function display() {
  for (let index = 0; index < ds.length; index++) {
    
    console.log(ds[index]);
  }
 
}
display();