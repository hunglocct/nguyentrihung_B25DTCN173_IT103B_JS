let player = [],sl,id=[],vt=[];
function inplay() {
  sl =  +prompt("Nhập sl cầu thủ muốn thêm")
  for (let i = 0; i < sl; i++) {
    id[i] = prompt("nhập id")
    player[i] = prompt("Nhap ten cau thu")
    vt[i] = +prompt("1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo")
  }
}
inplay();
function display() {
  console.log(player.length);
  for (let index = 0; index < player.length; index++) {
    console.log("---------------------------");
    
    console.log("ID: ",id[index]);
    console.log("Tên: ",player[index]);
    switch ("Vị trí: ",vt[index]) {
      case 1:
        console.log("Thủ môn");
        
        break;
    case 2:
        console.log("Hậu vệ");
        
        break;
        case 3:
        console.log("Tiền vệ");
        
        break;
        case 4:
        console.log("Tiền đạo");
        
        break;
      default:
        break;
    }
    
  }
}
display();