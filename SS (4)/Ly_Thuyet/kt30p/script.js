console.log("bài 1");
let n = 20;
if (n % 2 == 0) {
    console.log("Số", n, "là số chẵn");

} else {
    console.log("Số", n, "là số lẻ");
}
if (n > 0) {
    console.log("Số", n, "là số dương");
    console.log("các số từ 1 đến", n);
    for (let i = 0; i < n; i++) {
        console.log(i + 1);
    }
} else if (n == 0) {
    console.log("Số", n, "là số 0", "Giá trị n không hợp lệ để tạo dãy số");
} else if (n < 0) {
    console.log("Số", n, "là số âm", "Giá trị n không hợp lệ để tạo dãy số");
}
console.log("___________________Bài 2___________________");
let sum = 0;
for (let index = 1; index <= 50; index++) {
    if (index % 15 == 0) {
        console.log("Số", index, "FizzBuzz");

    } else if (index % 5 == 0) {
        console.log("Số", index, "Buzz");

    } else if (index % 3 == 0) {
        console.log("Số", index, "Fizz");
        sum += index;
    } else {
        console.log(index);
    }

}
console.log("Tổng của tất cả các số đã in ra chữ Fizz", sum);
while(true){
    console.log("lặp vô hạn");
    
}