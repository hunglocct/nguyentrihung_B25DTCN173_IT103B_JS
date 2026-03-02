let students = [
    { id: 1, name: "Nguyen Van An", age: 20, gpa: 8.5, status: "active" },
    { id: 2, name: "Tran Thi Bich", age: 19, gpa: 6.2, status: "active" },
    { id: 3, name: "Le Van Cuong", age: 22, gpa: 4.8, status: "inactive" },
    { id: 4, name: "Pham Thi Duyen", age: 18, gpa: 9.1, status: "active" },
    { id: 5, name: "Hoang Minh Duc", age: 25, gpa: 5.5, status: "inactive" }
];
let deletedAt = [
    { id: 3, name: "Le Van Cuong", age: 22, gpa: 4.8, status: "inactive" },
    { id: 5, name: "Hoang Minh Duc", age: 25, gpa: 5.5, status: "inactive" }
]
let autoId = 6
function CreateStudent() {
    let names = prompt("Nhap ten")
    names = names.trim()
    while (names == "") {
        alert(`khong duoc de trong`)
        names = prompt("Nhap ten")
    }
    let ages = parseInt(prompt("Nhap tuoi"))
    while (ages < 18 || ages > 100 || isNaN(ages)) {
        alert(`nhap loi`)
        ages = parseInt(prompt("Nhap tuoi"))
    }
    let gpas = parseFloat(prompt("Nhap gda"))
    while (gpas > 10 || gpas < 0 || isNaN(gpas)) {
        alert(`nhap loi`)
        gpas = parseFloat(prompt("Nhap gda"))
    }


    let statuss = prompt("trang thai")
    while (statuss != "active" && statuss != "inactive") {
        alert(`nhap loi`)
        statuss = prompt("trang thai")
    }

    let opp = {
        id: autoId,
        name: names,
        age: ages,
        gpa: gpas,
        status: statuss
    }
    autoId++
    students.push(opp)
    alert(`Them thanh cong`)
}


function Update() {
    let nhap = parseInt(prompt("Nhap id can tim"));

    if (isNaN(nhap)) {
        return alert("Nhap id hop le");
    }

    let index = students.findIndex(student => student.id === nhap);

    if (index === -1) {
        return alert("Khong tim thay");
    }


    let names = prompt("Nhap ten");
    if (names !== null) {
        names = names.trim();
        if (names !== "") {
            students[index].name = names;
        }
    }


    let ageInput = prompt("Nhap tuoi");
    if (ageInput !== "") {
        let ages = parseInt(ageInput);
        while (isNaN(ages) || ages < 18 || ages > 100) {
            alert("Tuoi phai tu 18-100");
            ages = parseInt(prompt("Nhap lai tuoi"));
        }
        students[index].age = ages;
    }


    let gpaInput = prompt("Nhap gpa");
    if (gpaInput !== "") {
        let gpas = parseFloat(gpaInput);
        while (isNaN(gpas) || gpas < 0 || gpas > 10) {
            alert("GPA phai tu 0-10");
            gpas = parseFloat(prompt("Nhap lai gpa"));
        }
        students[index].gpa = gpas;
    }


    let statuss = prompt("Trang thai");
    if (statuss !== "") {
        while (statuss !== "active" && statuss !== "inactive") {
            alert("Chi duoc active hoac inactive");
            statuss = prompt("Nhap lai trang thai");
        }
        students[index].status = statuss;
    }

    alert("Cap nhat thanh cong");
}

console.log(students);
function deletel(params) {
    let nhap = +prompt("Nhap id can xoá")
    if (isNaN(nhap)) {
        return alert(`Nhap loi`)
    } else {
        let index = students.findIndex(student => student.id === nhap);
        alert(`${index}`)
        if (index == -1) {
            return alert("Khong tim thay")
        } else {
            students[index].status = "inactive"
            deletedAt.push(students[index])
            alert("Da xoa")



        }
    }
}


function undelete(params) {
    let nhap = +prompt("Nhap id can khoi phuc")
    if (isNaN(nhap)) {
        return alert(`Nhap loi`)
    } else {
        let index = students.findIndex(student => student.id === nhap);
        let indexdel = deletedAt.findIndex(deletedA => deletedA.id === nhap);
        alert(`${index}`)
        if (index == -1) {
            return alert("Khong tim thay")
        } else {
            students[index].status = "active"
            deletedAt.splice(indexdel, 1)
            alert("Da khoi phuc xoa")



        }
    }
}

///case 5 :))
function Search() {
    let keyword = prompt("mhap ten can tim");

    if (!keyword) {
        return alert("bo qua");
    }

    keyword = keyword.toLowerCase().trim();

    let se = students.filter(student =>
        student.name.toLowerCase().includes(keyword)
    );

    if (se.length === 0) {
        alert("khong tim thay");
    } else {
        console.log("ket qua tim kiem:");
        console.table(se);
    }
}
function filsta() {
    let ac = [], inac = []
    for (let i = 0; i < students.length; i++) {
        if (students[i].status == "active") {
            ac.push(students[i])
        } else {
            inac.push(students[i])

        }

    }
    console.log("active", ac);
    console.log("inactive", inac);

}

function softgda(params) {
    let maxToMin = [...students]
    for (let i = 0; i < maxToMin.length - 1; i++) {
        for (let j = 0; j < maxToMin.length - 1 - i; j++) {
            if (maxToMin[j].gpa < maxToMin[j + 1].gpa) {
                let temp = maxToMin[j];
                maxToMin[j] = maxToMin[j + 1];
                maxToMin[j + 1] = temp;

            }
        }
    }
    let minToMax = [...students];

    for (let i = 0; i < minToMax.length - 1; i++) {
        for (let j = 0; j < minToMax.length - 1 - i; j++) {

            if (minToMax[j].gpa > minToMax[j + 1].gpa) {

                let temp = minToMax[j];
                minToMax[j] = minToMax[j + 1];
                minToMax[j + 1] = temp;

            }
        }
    }

    console.table(minToMax);
    console.log(maxToMin);

}
softgda()
function menu() {
    let choice;

    do {
        choice = prompt(`1. Create Student
2. Update Student
3. Delete Student
4. Restore Student
5. Search Student
6. Show All Students
0. Exit
Nhap lua chon:`);

        switch (choice) {
            case "1":
                CreateStudent();
                break;

            case "2":
                Update();
                break;

            case "3":
                deletel();
                break;

            case "4":
                undelete();
                break;

            case "5":
                Search();
                break;

            case "6":
                console.table(students);
                break;

            case "0":
                alert("Thoat chuong trinh");
                break;

            default:
                alert("Lua chon khong hop le");
        }

    } while (choice !== "0");
}

menu();