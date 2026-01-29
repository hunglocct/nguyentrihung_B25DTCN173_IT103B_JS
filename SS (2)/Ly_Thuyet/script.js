/* toán tử số học :
+ - * /
% chia lấy dư
** số mũ

2 toán tử so sánh
> < >= <= == === != !==
==: chỉ kiểm tra giá trị
===: so sánh giá trị và kiểu dữ liệu



!= : so sánh khác giá trị

!==: so sánh khác giá trị và kiểu dữ liệu

3. Toán tử logic
|| : trái sang phải gặp truthy thì lấy còn không gặp thì lấy giá trị cuối cùng!

&& : trái sang phải gặp falsy thì lấy còn không gặp thì lấy giá trị cuối cùng!

2 KHÁI NIỆM
TRUTHY: không phải là falsy

FALSY: 0, "", false, NaN, undefined, null

4. toán tử 3 ngôi
condition ? nếu đúng : nếu sai

5. condition 
Câu điều kiện 
1 if else
2 if else if bậc thang

6. swich case



*/
let key = +prompt("Nhap so");
switch (key) {
    case 1:
        console.log("ban nhap 1");
        
        break;
    case 2: 
    console.log("ban nhap 2");
    break;

    default:
        console.log("nhap sai");
        
        break;
}