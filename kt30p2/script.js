let students = ["Quý", "Nam", "Lan", "Hùng", "Nam"]
let element
console.log("Sau đảo ngược có làm thay đổi mảng gốc", students.reverse());

if (students.includes("Lan") == true) {
    console.log("Tên lan có tồn tại trong mảng");

} else {
    console.log("Ten lan không tồn tại trong mảng");

}
if (students.indexOf("Nam") == -1) {
    console.log("Không tìm thấy tên Nam");

} else {
    console.log("Tìm thấy tên Nam tại vị trí:", students.indexOf("Nam"));

}
let money = [100, 200, 300, 400], sum = 0;
for (const element of students) {
    console.log(element);
    
}
for (let index = 0; index < money.length; index++) {
    console.log("giá trị", money[index]);

    console.log("vị trí", index);
    if (index % 2 == 0 || index == 0) {

        sum += money[index]
    }

}
console.log("Tổng các phần tử vị trí chẵn:", sum);
