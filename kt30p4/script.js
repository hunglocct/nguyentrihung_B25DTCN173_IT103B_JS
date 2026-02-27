let students = [
{ id: 1, name: "Nguyen Văn A", score: 8.5, gender: "Nam" },
{ id: 2, name: "Trân Thị B", score: 4.2, gender: "Nữ" },
{ id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
{ id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
{ id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam" }

];
let gioi = [],k=0;

let scores = students.map(student => student.score);
function gioii(params) {
    console.log(students);
for (let i = 0; i < students.length; i++) {
    if (scores[i]>=8) {
        console.log(scores[i]);
        let nhap = `id: ${students[i].id} name: ${students[i].name} score: ${students[i].score} gender: ${students[i].gender}`
        
        gioi[k] = nhap;
        k++
    }
    
    
}
console.log(gioi);
}
gioii();

for (let i = 0; i < students.length; i++) {
    if (scores[i]<=4) {
        console.log("Có sv yếu");
        
    }
    
}
let studentLabels = [],q=0
let names = students.map(student => student.name)
for (let i = 0; i < students.length; i++) {
   studentLabels[q] = `name: ${names[i]} diem: ${scores[i]}`
    q++
}
console.log(studentLabels);

