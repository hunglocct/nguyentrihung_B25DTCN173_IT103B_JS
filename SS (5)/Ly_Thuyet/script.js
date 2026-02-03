/*
array (mảng) : là một kiểu dữ liệu có thể lưu nhiều giá trị khác
2. cú pháp khi báo mảng:
TÊN TỪ KHOÁ + TÊN MẢNG = []
TÊN TỪ KHOÁ: (let, var, const)
TÊN MẢNG : đặt theo tên tiếng anh, theo quy tắc camel_case
3. THAO TÁC VỚI MÁNG dùng các PHƯƠNG THỨC (method)
CRUD với mắng:
C(CREATE: TẠO_ THÊM PHẦN TỬ)
+ push(): thêm phần tử vào cuối mảng
+ unshift(): thêm vào đầu mảng
+ splice(index, deleteCount,item);
R(READ: ĐỌC, HIẺN THỊ)
+ dùng vòng lặp for
U(UPDATE: CẬP NHẬT PHẦN TỬ)
    câp nhật theo chỉ số index;
    splice(index,deleteCount,item)
D(DELETE XOÁ)
 pop() xoá phần tử vị trí cuối mảng
splice(index,deleteCount,item)
shift xoá phần tử ở đầu
CÁC PHƯƠNG THỨC LÀM VIẸC VỚI MẢNG
    giúp sử lí nghiệp vụ nhanh hơn
1. indexOf(): kiểm tra xem phần tử có tồn tại trong mảng hay không
+ nếu có trả về index
+nếu không trả về -1
2. includes(): kiểm tra phần tử có tồn tại trong mảng không
    + trả vè true || false
3. reverse() : đảo ngược các phần tử trong mảng
4. join(): noi cac phan tu trong mang thanh string
5. split: chuyển string thành mảng
6. slice : cắt, sao chép



*/
let arr= [8,8,9,6,9,8,0,7,6,7,9]
let sum=0,average,max=[0];
for (let index = 0; index < arr.length; index++) {
    sum+=arr[index];
    if (max<arr[index]) {
        max=arr[index];
    }
}
console.log("điểm lớn nhất",max);

average= +sum/+arr.length;
console.log("trung bình",average);
