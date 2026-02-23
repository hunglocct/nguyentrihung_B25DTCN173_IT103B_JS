let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = [
"Nguyễn Văn A",
"Trần Thị B",
"Lê Văn C",
"Phạm Văn D",
"Hoàng Thị E",
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];
function printf() {
    for (let index = 0; index < playerIds.length; index++) {
        console.log("id",playerIds[index]);
        console.log("ten",playerNames[index]);
        console.log("So ao",playerJerseyNumbers[index]);
        
        
    }
}
printf();
function update(params) {
    let seach = prompt("Nhap id muon sua")
    let vt = playerIds.indexOf(seach);
    if (vt == -1) {
        alert(`khong tim thay`)
    }else{
        playerNames[vt] = prompt("Nhap ten moi")
        let soao = +prompt("Nhap so ao")
        let tt = playerJerseyNumbers.includes(soao)

        if(tt == false||soao <=0||soao >=100){
            soao = +prompt("Nhap lai so ao")
        }else{
            playerJerseyNumbers[vt]=soao
        }

    }
}
update();
printf();