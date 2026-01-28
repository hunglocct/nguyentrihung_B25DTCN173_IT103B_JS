/*
    Biến là gì dùng để lưu trữ dữ liệu
    3 cahs khai báo biến
    js 1995
    1. var
        +Có thể khai báo lại
        +có thể gán lại giá trị
        + phạm vi toàn hàm
        + có hoisting truy cập được
        Đưa phần khai báo lên đầu
    2. let sinh ra ở bản es6 2015
        +không thể khai báo lại
        +có thể gán lại giá trị
        phạm vi block
        +có hoisting không truy cập được
    3. cónt sinh ra ở bản es6 2015
        +không thể khai báo lại
        +không thẻ gán lại giá trị
        phạm vi block
        +có hoisting không truy cập được

    ###
    quy tắc đặt bên biến : không bắt đầu bằng số, kí tự đặc biệt trừ{_ $}
    tránh trùng từ khoá đặc biệt {let const var class function ...}
    đặt tên theo quy tắc con lạc đà
    phân biệt chữ hoa thường

    */
   /*
   
   Kiểu dữ liệu
    Trong js chia thành 2 nhóm kiểu dữ liẹu
    Nhóm I: nguyn thuỷ, đơn giản, primitiv type, tham trị
        1. number
        2. string
        3. boolean
        4. null
        5. undefined
        6. NaN (not a number)
        7. symbol
    Nhóm II : phức tạp, rẻence type , tham chiếu
        1. function
        2. array
        3. object

   
   
   
   
   
   
   */
   // number
// let quantity = 5;
// let price = 5000;

// // kiểu dữ liệu string
// let email ="hoa@gmail.com";
// console. log("kiểu dữ liệu email", typeof(email)); I
// // kiểu dữ liệu boolean, true|false
// let isLogin = true;

// // undefined : 1 biểnI khai báo không gán giá trị
// let age;
// // null:
// // ví dụ người dùng nhập promt mà bấm cecel thì giá trị là null

// //NaN:
// let result = "minh thu"/3;
// console.log("result",result);
// console. log("kiểu dữ liệu price", typeof(price));

// Cách kiểm tra kiểu dữ liệu typeof
// cách kiểm tra kiểu dữ liệu NaN (isNaN)
/*
INPUT: dữ liệu truyền vào
+ prompt: dữ liệu người dùng nhập vào
+ giá trị khi người dùng nhập có kiểu dữ liệu string
+ nếu không nhập nhấn cancel giá trị sẽ là null

OUTPUT: dữ liệu đầu ra
    1. alert(): hộp thoại thông báo cho người dùng
    2. console.log () : hiển thị kết quả để kiểm tra, debug...
    3. document.write (): hiển thị ra trình duyệt
    4. confirm xác nhận : confirm

*/
// let fullName= prompt ("mời nhập tên");
// console.log("fullname", fullName);
// document.write("cố gắng học lập trình js");

// let result= confirm("bạn đủ 18 tuổi chưa");
// console.log(result);

/*
Chuyển kiểu dữ liệu
    1. string sang number
    2. number sang string


*/
let a= Number (prompt ("mời nhập giá trị số a")); // 678
let b= +prompt ("mời nhập giá trị số b");
let c= parseInt (prompt("nhập c"));
let sum = a+b+c; // "5"+"6"
console.log("giá trį sum",sum);