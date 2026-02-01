let lost = 0;
let out = 0;
let id = [];
let nameBook = [];
let quantity = [];
let i = 0;
let choose =0;
let status=[];
do{
     do{
        id[i] = prompt("Nhap id sach so ", i);
     }while(id[i] == "") 
    

        nameBook[i] = prompt("Nhap ten sach", i);
    do {
        quantity[i] = +prompt("nhap so luong thu te", i);
    } while (quantity[i]< 0);
    if (quantity[i] == 0) {
        status[i]= +prompt("Nhap tinh trang 1 binh thuong 2 mat");
    }
    if (status[i]==2) {
        lost++;
    }
    if (status[i]==1) {
        out++;
    }
     
       choose=  prompt("co muo tiep tuc khong, 0 de thoat");
    i++;





}while(choose!=="0")
    console.log("Tong so sach da kiem ke",i);
    console.log("so sach mat",lost);
    console.log("Số sách hết",out);
    
    
    