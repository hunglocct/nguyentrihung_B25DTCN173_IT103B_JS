document.write("Bảng cửu chương <br>")
for (let index = 1; index < 11; index++) {
    document.write("Bảng ",index,"<br>");
    for (let i = 1; i < 11; i++) {
        logg = index * i;
        document.write(index,"x",i,"=",logg,"<br>")
        
    }
    
}