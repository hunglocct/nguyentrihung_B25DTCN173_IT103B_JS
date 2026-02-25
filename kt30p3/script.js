let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hang D", "Đơn hang E"];
let boolen = [], k = 0, q = 0, sum = [];
let revenues = [1500, 2800, 1200, -500, 3200];

for (let i = 0; i < revenues.length; i++) {

    if (revenues[i] < 0) {


        let nhap = orders[i]

        boolen[k] = nhap;
        k++;
    }
    if (revenues[i] < 500) {
        q++
    }


}
if (k > 0) {
    console.log("Co don hang am true");

} else {
    console.log("khong Co don hang am false");
}
for (let index = 0; index < boolen.length; index++) {
    console.log("Don rui do:", boolen[index]);

}
if (q > 0) {
    console.log("Tất cả trên 500: false");

}
for (let l = 0; l < orders.length; l++) {
    sum[l] = revenues[l] * 0.9;

}
console.log(sum);




