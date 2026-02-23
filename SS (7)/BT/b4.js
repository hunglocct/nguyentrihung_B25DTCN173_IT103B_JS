let tm=0,hv=0,td=0,tv=0;

let players = [
"P001-Nguyễn Văn A-Thủ môn",
"P002-Trần Thị B-Hậu vệ",
"P003-Lê Văn C-Hậu vệ",
"P004-Phạm Văn D-Tiền vệ",
"P005-Hoàng Thị E-Tiền đạo",
"P006-Vũ Minh F-Tiền đạo",
"P007-Đặng Văn G-Thủ môn",

];
function display(params) {
 for (let index = 0; index < players.length; index++) {
   console.log("STT",index,players[index]);
   
     
 }
}
display();
function  countPlayerByPostion(params) {
    for (let i = 0; i < players.length; i++) {
     let  vt = players[i].split("-").pop()
        switch (vt) {
            case "Thủ môn":
                tm++
                break;
            case "Hậu vệ":
                hv++
                break;
            case "Tiền vệ":
                tv++
                break;
            case "Tiền đạo":
                td++
                break;
            default:
                break;
        }
    }
    console.log("thu mon",tm);
     console.log("Hậu vệ",hv);
      console.log("Tiền vệ",tv);
       console.log("Tiền đạo",td);
    

}
countPlayerByPostion();
function hasGoalkeeper(params) {
    if (tm>0) {
        console.log("cos its nhaats 1 thu mon");
        
    } else {
        console.log("khong co tm");
        
    }
}
hasGoalkeeper();