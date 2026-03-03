let menus = [
    { id: 1, name: "pizza", price: 100, type: "main" },
    { id: 2, name: "kem", price: 10, type: "dessert" },
    { id: 3, name: "salat", price: 50, type: "appetizer" }

]


function addDish(params) {
    let checkId = []
    for (let i = 0; i < menus.length; i++) {
        checkId[i] = menus[i].id

    }
    console.log(checkId);

    let input = +prompt("Nhập id muon them")
    let index = checkId.indexOf(input)
    while (index != -1) {
        input = +prompt("Nhập lai id muon them, id kia da ton tai")
        index = checkId.indexOf(input)
    }
    id = input
    let checkName = []
    for (let i = 0; i < menus.length; i++) {
        checkName[i] = menus[i].name

    }
    console.log(checkName);

    let name = prompt("Nhập ten muon them")
    let ck = checkName.indexOf(name)
    while (ck != -1) {
        name = prompt("Nhập lai ten muon them, ten kia da ton tai")
        ck = checkName.indexOf(name)
    }

    let pice = +prompt("Nhập gia muon them")

    while (pice < 0) {
        pice = +prompt("Nhập lai gia tien, khong the do an free")

    }



    let type = prompt("Nhập loai mon (main,dessert,appetizer)")

    // while (true) {
    //     console.log(type);

    //     if (type == "appetizer") {
    //         break;
    //     }
    //     if (type == "dessert") {
    //         break;
    //     }
    //     if (type == "main") {
    //         break;
    //     }
    //     type = +prompt("Nhập lai loai mon (main,dessert,appetizer)")

    // }
    let dishs = { id: id, name: name, price: pice, type: type }
    menus.push(dishs)
    console.log(menus);
    alert(`Them thanh cong ${name}`)
}
function deletes(params) {
    let checkName = []
    for (let i = 0; i < menus.length; i++) {
        checkName[i] = menus[i].name

    }
    console.log(checkName);

    let name = prompt("Nhập ten muon xoa")
    let ck = checkName.indexOf(name)
    if (ck == -1) {
        return alert(`Khong tim thay`)
    } else {
        let chon = +prompt("Ban co muon xoa (1 dong y)")
        if (chon == 1) {
            menus.splice(ck, 1)
            alert(`da xoa mon name`)
        } else {
            alert("huy")
        }


    }
    console.log(menus);

}

function display(params) {
    for (let i = 0; i < menus.length; i++) {
        console.log(`ID: ${menus[i].id} Ten mon an: ${menus[i].name} Gia tien: ${menus[i].price} Loai mon: ${menus[i].type}`);


    }

}

function update(params) {
    let checkName = []
    for (let i = 0; i < menus.length; i++) {
        checkName[i] = menus[i].name

    }
    console.log(checkName);

    let input = prompt("Nhập ten muon cap nhat")
    let index = checkName.indexOf(input)
    if (index == -1) {
        return alert(`ten khong ton tai`)

    }



    let pice = +prompt("Nhập gia muon sua")

    while (pice < 0) {
        pice = +prompt("Nhập lai gia tien, khong the do an free")

    }



    let type = prompt("Nhập loai mon (main,dessert,appetizer)")

    // while (true) {
    //     console.log(type);

    //     if (type == "appetizer") {
    //         break;
    //     }
    //     if (type == "dessert") {
    //         break;
    //     }
    //     if (type == "main") {
    //         break;
    //     }
    //     type = +prompt("Nhập lai loai mon (main,dessert,appetizer)")

    // }
    let dishs = { id: menus[index].id, name: menus[index].name, price: pice, type: type }
    menus[index] = dishs
    console.log(menus);
    alert(`Cap nhat thanh cong  ${input}`)
}

function seName(params) {
    let checkName = []
    for (let i = 0; i < menus.length; i++) {
        checkName[i] = menus[i].name

    }
    console.log(checkName);

    let input = prompt("Nhập ten muon tim")
    let index = checkName.indexOf(input)
    if (index == -1) {
        return alert(`ten khong ton tai`)

    } else {
        alert(`ID: ${menus[index].id} Ten mon an: ${menus[index].name} Gia tien: ${menus[index].price} Loai mon: ${menus[index].type}`)
    }

}

function seType(params) {
    let checkType = []
    for (let i = 0; i < menus.length; i++) {
        checkType[i] = menus[i].type

    }
    console.log(checkType);

    let input = prompt("Nhập loai mon muon tim (main,dessert,appetizer)")
    let index = checkType.indexOf(input)
    if (index == -1) {
        return alert(`mon khong ton tai`)

    } else {
        alert(`ID: ${menus[index].id} Ten mon an: ${menus[index].name} Gia tien: ${menus[index].price} Loai mon: ${menus[index].type}`)
    }

}

function fil(params) {
    let checkType = []
    for (let i = 0; i < menus.length; i++) {
        checkType[i] = menus[i].type

    }
    console.log(checkType);

    let input = prompt("Nhập loai mon muon loc (main,dessert,appetizer)")
    let index = checkType.indexOf(input)
    if (index == -1) {
        return alert(`mon khong ton tai`)

    } else {
        for (let i = 0; i < checkType.length; i++) {
            if (input == "appetizer") {
                if (menus[i].type == "appetizer") {
                    console.log(menus[i]);
                }



            }
            if (input == "dessert") {
                if (menus[i].type == "dessert") {
                    console.log(menus[i]);
                }


            }
            if (input == "main") {
                if (menus[i].type == "main") {
                    console.log(menus[i]);
                }


            }

        }
        alert(`da loc trong log`)
    }


}

function sumMenu(params) {
    sum = 0
    for (let i = 0; i < menus.length; i++) {
        sum += menus[i].price

    }
    console.log("Gia tien tong tat ca", sum);
    alert(`Tong gia tien: ${sum}`)
}

function sePrice(params) {
    let priceSe = []
    let low = +prompt("Nhap gia thap")
    let high = +prompt("Nhap gia cao")
    if (low > high) {
        return alert("Gia thap phai nho hon gia cao")
    }
    if (low < 0 || high < 0) {
        return alert("Khong the nho hon 0")
    }


    for (let i = 0; i < menus.length; i++) {
        if (menus[i].price <= high && menus[i].price >= low) {
            priceSe.push(menus[i])
        }

    }
    console.log(priceSe);
    alert(`Da tim trong log`)

}
function main(params) {
    let chosse
    do {
        chosse = +prompt(`MENU THUC DON
1. Them mon
2. Xoa mon
3. Hien menu
4. Cap nhat mon
5. Tim kiem mon theo ten
6. Tim kiem mon theo loai
7. Loc mon
8. Tong gia menu
9. Loc theo gia tien
0.Thoat
Nhap lua chon: `)
        switch (chosse) {
            case 1:
                addDish()
                break;
            case 2:
                deletes()
                break;
            case 3:
                display()
                alert(`menu trong log`)
                break;
            case 4:
                update()
                break;
            case 5:
                seName()
                break;
            case 6:
                seType()
                break;
            case 7:
                fil()
                break;
            case 8:
                sumMenu()
                break;
            case 9:
                sePrice()
                break;
            case 0:
                alert(`Tam biet`)
                break;
            default:
                alert(`Nhap loi roi`)
                break;
        }
    } while (chosse != 0);
}
main()